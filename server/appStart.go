/*
 * Copyright 2021 liyiligang.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package main

import (
	"context"
	"errors"
	"github.com/gin-contrib/gzip"
	"github.com/gin-contrib/static"
	"github.com/gin-gonic/gin"
	"github.com/liyiligang/base/component/Jconfig"
	"github.com/liyiligang/base/component/Jlog"
	"github.com/liyiligang/base/component/Jorm"
	"github.com/liyiligang/base/component/Jrpc"
	"github.com/liyiligang/base/component/Jtool"
	"github.com/liyiligang/base/component/Jweb"
	"github.com/liyiligang/mxui/protoFiles/protoManage"
	"github.com/liyiligang/mxui/typedef/config"
	"github.com/liyiligang/mxui/typedef/constant"
	"github.com/liyiligang/mxui/typedef/orm"
	"github.com/robfig/cron/v3"
	"google.golang.org/grpc"
	"io"
	"log"
	"os"
	"time"
)

func (app *App) InitConfig() {
	configPath := ""
	if len(os.Args) > 1 {
		configPath = os.Args[1]
	}
	err := Jconfig.ReadConfigFromPath(&config.LocalConfig, configPath)
	if err != nil {
		log.Fatal("config file parse fail: ", err)
	}
}

func (app *App) InitLogServer() {
	logConfig := Jlog.LogConfig{
		Debug:      config.LocalConfig.Debug,
		Level:      config.LocalConfig.Log.Level,
		Path:       config.LocalConfig.Log.Path,
		MaxSize:    config.LocalConfig.Log.MaxSize,
		MaxBackups: config.LocalConfig.Log.MaxNum,
		MaxAge:     config.LocalConfig.Log.MaxAge,
	}
	if config.LocalConfig.Node.NodeName != "" {
		logConfig.InitialFields = map[string]interface{}{
			"@nodeName": config.LocalConfig.Node.NodeName,
		}
	}
	Jlog.InitLog(logConfig)
	Jlog.Info("log component is start")
}

func (app *App) InitSystemDir() {
	isDirExist, _ := Jtool.IsDirExist(config.LocalConfig.File.SavePath)
	if !isDirExist {
		err := Jtool.MakeDir(config.LocalConfig.File.SavePath)
		if err != nil {
			Jlog.Fatal("system dir create fail", "error", err)
		}
	}
	Jlog.Info("system dir create success")
}

func (app *App) InitTimer() {
	app.Timer = cron.New(cron.WithSeconds())
	_, err := app.Timer.AddFunc("* * 0 * * *", func() {
		app.Data.DataInvalidDeal()
	})
	if err != nil {
		Jlog.Fatal("init timer fail", "error", err)
	}
	Jlog.Info("timer component is start")
}

func (app *App) StartTimer() error {
	app.Data.DataInvalidDeal()
	app.Timer.Start()
	return nil
}

func (app *App) StopTimer() error {
	app.Timer.Stop()
	return nil
}

func (app *App) InitDBServer() error {
	ormConfig := Jorm.OrmConfig{
		Name:        config.LocalConfig.Db.Name,
		SqlDsn:      config.LocalConfig.Db.Connect,
		MaxKeepConn: config.LocalConfig.Db.MaxKeepConn,
		MaxConn:     config.LocalConfig.Db.MaxConn,
		MaxLifetime: time.Duration(config.LocalConfig.Db.MaxLifeTime) * time.Second,
		TableCheck:  orm.InitOrmTable,
	}
	if config.LocalConfig.Db.ShowLog {
		ormConfig.LogWrite = Jlog.GetLogger("debug")
	} else {
		ormConfig.LogWrite = Jlog.GetLogger("warn")
	}
	db, err := Jorm.GormInit(ormConfig)
	if err != nil {
		return err
	}
	app.DBServer.Gorm = db
	Jlog.Info("database component is start")
	return nil
}

func (app *App) StopDBServer() error {
	if app.DBServer.Gorm == nil {
		return errors.New("database component must not be nil")
	}
	db, err := app.DBServer.Gorm.DB()
	if err != nil {
		return err
	}
	err = db.Close()
	if err != nil {
		return err
	}
	return nil
}

func (app *App) InitWebServer() error {
	websocketConfig := Jweb.WebsocketConfig{
		WriteWaitTime: time.Duration(config.LocalConfig.HTTP.WebSocket.WriteWaitTime) * time.Second,
		ReadWaitTime:  time.Duration(config.LocalConfig.HTTP.WebSocket.ReadWaitTime) * time.Second,
		PingWaitTime:  time.Duration(config.LocalConfig.HTTP.WebSocket.PingWaitTime) * time.Second,
		PongWaitTime:  time.Duration(config.LocalConfig.HTTP.WebSocket.PongWaitTime) * time.Second,
		Call: Jweb.WebsocketCall{
			WebsocketConnect:   app.Request.WebsocketConnect,
			WebsocketConnected: app.Request.WebsocketConnected,
			WebsocketClosed:    app.Request.WebsocketClosed,
			WebsocketError:     app.Request.WebsocketError,
		},
	}

	routeFunc := func(r *gin.Engine) {
		r.NoRoute(app.Request.NotFoundWithHttp)
		r.NoMethod(app.Request.NotFoundWithHttp)

		r.GET("/ws", websocketConfig.WsHandle)

		r.Use(gzip.Gzip(gzip.DefaultCompression))
		r.Use(static.ServeRoot("/", config.LocalConfig.HTTP.Files.Web))
		r.GET("/nodeResource/download/"+":name", app.Request.ConvertWithHttpFileDownload(app.Request.ReqNodeResourceDownload))
		r.POST("/system/getInitInfo", app.Request.ConvertWithHttp(app.Request.ReqFindSystemInfo))
		r.POST("/manager/login", app.Request.ConvertWithHttp(app.Request.ReqManagerLogin))
		r.POST("/manager/register", app.Request.ConvertWithHttp(app.Request.ReqManagerRegister))

		r.Use(app.Request.ParseTokenWithHttp)
		//manager
		r.POST("/manager/find", app.Request.ConvertWithHttp(app.Request.ReqManagerFind))
		r.POST("/manager/findNickName", app.Request.ConvertWithHttp(app.Request.ReqManagerFindNickName))
		r.POST("/manager/findByID", app.Request.ConvertWithHttp(app.Request.ReqManagerFindByID))
		r.POST("/manager/updatePasswd", app.Request.ConvertWithHttp(app.Request.ReqManagerUpdatePasswd))
		r.POST("/manager/updateSetting", app.Request.ConvertWithHttp(app.Request.ReqManagerUpdateSetting))

		//topLink
		r.POST("/topLink/find", app.Request.ConvertWithHttp(app.Request.ReqTopLinkFind))
		r.POST("/topLink/findByID", app.Request.ConvertWithHttp(app.Request.ReqTopLinkFindByID))

		//node
		r.POST("/node/find", app.Request.ConvertWithHttp(app.Request.ReqNodeFind))
		r.POST("/node/findByID", app.Request.ConvertWithHttp(app.Request.ReqNodeFindByID))
		r.POST("/node/del", app.Request.ConvertWithHttp(app.Request.ReqNodeDel))

		//nodeFunc
		r.POST("/nodeFunc/find", app.Request.ConvertWithHttp(app.Request.ReqNodeFuncFind))

		//nodeFuncCall
		r.POST("/nodeFuncCall/call", app.Request.ConvertWithHttp(app.Request.ReqNodeFuncCall))
		r.POST("/nodeFuncCall/find", app.Request.ConvertWithHttp(app.Request.ReqNodeFuncCallFind))
		r.POST("/nodeFuncCall/findByID", app.Request.ConvertWithHttp(app.Request.ReqNodeFuncCallFindByID))
		r.POST("/nodeFuncCall/findParameterByID", app.Request.ConvertWithHttp(app.Request.ReqNodeFuncCallParameterFindByID))
		r.POST("/nodeFuncCall/findReturnValByID", app.Request.ConvertWithHttp(app.Request.ReqNodeFuncCallReturnValFindByID))

		//nodeReport
		r.POST("/nodeReport/find", app.Request.ConvertWithHttp(app.Request.ReqNodeReportFind))

		//nodeReportVal
		r.POST("/nodeReportVal/find", app.Request.ConvertWithHttp(app.Request.ReqNodeReportValFind))

		//nodeNotify
		r.POST("/nodeNotify/find", app.Request.ConvertWithHttp(app.Request.ReqNodeNotifyFind))

		//nodeResource
		r.POST("/nodeResource/check", app.Request.ConvertWithHttp(app.Request.ReqNodeResourceCheck))
		r.POST("/nodeResource/find", app.Request.ConvertWithHttp(app.Request.ReqNodeResourceFind))
		r.POST("/nodeResource/upload", app.Request.ConvertWithHttpFileUpload(app.Request.ReqNodeResourceUpload))
		r.POST("/nodeResource/del", app.Request.ConvertWithHttp(app.Request.ReqNodeResourceDel))

		//nodeTest
		r.POST("/nodeTest/test", app.Request.ConvertWithHttp(app.Request.ReqNodeTest))

		r.Use(app.Request.LevelCheckWithHttp(protoManage.Level_LevelSuper))

		//topLink
		r.POST("/topLink/add", app.Request.ConvertWithHttp(app.Request.ReqTopLinkAdd))
		r.POST("/topLink/del", app.Request.ConvertWithHttp(app.Request.ReqTopLinkDel))
		r.POST("/topLink/update", app.Request.ConvertWithHttp(app.Request.ReqTopLinkUpdate))

		//manager
		r.POST("/manager/add", app.Request.ConvertWithHttp(app.Request.ReqManagerAdd))
		r.POST("/manager/del", app.Request.ConvertWithHttp(app.Request.ReqManagerDel))
		r.POST("/manager/update", app.Request.ConvertWithHttp(app.Request.ReqManagerUpdate))

		//nodeFunc
		r.POST("/nodeFunc/del", app.Request.ConvertWithHttp(app.Request.ReqNodeFuncDel))

		//nodeReport
		r.POST("/nodeReport/del", app.Request.ConvertWithHttp(app.Request.ReqNodeReportDel))
	}

	webConfig := Jweb.WebConfig{
		Debug:          config.LocalConfig.Debug,
		Addr:           config.LocalConfig.HTTP.ListenAddr,
		PublicKeyPath:  config.LocalConfig.HTTP.PublicKeyPath,
		PrivateKeyPath: config.LocalConfig.HTTP.PrivateKeyPath,
		RouteCall:      routeFunc,
	}
	if config.LocalConfig.HTTP.ShowLog {
		webConfig.AccessWrite = Jlog.GetLogger("debug")
	} else {
		webConfig.AccessWrite = io.Discard
	}

	httpServer := Jweb.WebInit(webConfig)
	app.HttpServer = httpServer
	Jlog.Info("web component is start")
	return nil
}

func (app *App) GracefulStopWebServer() error {
	if app.HttpServer == nil {
		return errors.New("web component must not be nil")
	}
	if err := app.HttpServer.Shutdown(context.Background()); err != nil {
		return err
	}
	return nil
}

func (app *App) StopWebServer() error {
	if app.HttpServer == nil {
		return errors.New("web component must not be nil")
	}
	if err := app.HttpServer.Close(); err != nil {
		return err
	}
	return nil
}

func (app *App) InitRpcServer() error {
	s, err := Jrpc.GrpcServerInit(Jrpc.RpcServerConfig{
		RpcBaseConfig: Jrpc.RpcBaseConfig{
			Addr:          config.LocalConfig.Grpc.ListenAddr,
			PublicKeyPath: config.LocalConfig.Grpc.PublicKeyPath,
		},
		PrivateKeyPath: config.LocalConfig.Grpc.PrivateKeyPath,
		RegisterCall: func(s *grpc.Server) {
			protoManage.RegisterRpcEngineServer(s, &app.Request)
		},
		ServerOption: []grpc.ServerOption{
			grpc.MaxSendMsgSize(constant.ConstRpcServerMaxMsgSize), grpc.MaxRecvMsgSize(constant.ConstRpcServerMaxMsgSize),
			grpc.UnaryInterceptor(app.Request.RpcUnaryInterceptor), grpc.StreamInterceptor(app.Request.RpcStreamInterceptor)},
	})

	app.RpcServer = s
	Jlog.Info("rpc component is start")
	return err
}

func (app *App) GracefulStopRpcServer() error {
	if app.RpcServer == nil {
		return errors.New("rpc component must not be nil")
	}
	app.RpcServer.GracefulStop()
	return nil
}

func (app *App) StopRpcServer() error {
	if app.RpcServer == nil {
		return errors.New("rpc component must not be nil")
	}
	app.RpcServer.Stop()
	return nil
}
