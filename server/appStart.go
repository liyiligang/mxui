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
	"github.com/gin-gonic/gin"
	"github.com/liyiligang/base/component/Jconfig"
	"github.com/liyiligang/base/component/Jlog"
	"github.com/liyiligang/base/component/Jorm"
	"github.com/liyiligang/base/component/Jrpc"
	"github.com/liyiligang/base/component/Jtool"
	"github.com/liyiligang/base/component/Jweb"
	"github.com/liyiligang/mxrpc/protoFiles/protoManage"
	"github.com/liyiligang/mxrpc/typedef/config"
	"github.com/liyiligang/mxrpc/typedef/constant"
	"github.com/liyiligang/mxrpc/typedef/orm"
	"github.com/robfig/cron/v3"
	"google.golang.org/grpc"
	"log"
	"os"
	"time"
)

func (app *App) InitConfig(){
	configPath := ""
	if len(os.Args) > 1 {
		configPath = os.Args[1]
	}
	err := Jconfig.ReadConfigFromPath(&config.LocalConfig, configPath)
	if err != nil {
		log.Fatal("config file parse fail: ", err)
	}
}

func (app *App) InitLogServer(){
	logConfig := Jlog.LogInitConfig{
		Debug:      config.LocalConfig.Debug,
		LocalPath:  config.LocalConfig.Log.Path,
		MaxSize:    config.LocalConfig.Log.MaxSize,
		MaxBackups: config.LocalConfig.Log.MaxNum,
		MaxAge:     config.LocalConfig.Log.MaxAge,
	}
	if config.LocalConfig.Node.NodeName != ""{
		logConfig.InitialFields = map[string]interface{}{
			"@nodeName":     config.LocalConfig.Node.NodeName,
		}
	}
	Jlog.InitGlobalLog(logConfig)
	Jlog.Info("log component is start")
}

func (app *App) InitSystemDir(){
	if !Jtool.IsDirExist(config.LocalConfig.File.SavePath) {
		err := Jtool.MakeDir(config.LocalConfig.File.SavePath)
		if err != nil {
			Jlog.Fatal("system dir create fail", "error", err)
		}
	}
	Jlog.Info("system dir create success")
}

//启动定时服务
func (app *App) InitTimer() {
	app.Timer = cron.New(cron.WithSeconds())
	_, err := app.Timer.AddFunc("* * 0 * * *", func() {
		err := app.Data.NodeResourceDelWithTimer()
		if err != nil {
			Jlog.Warn("find invalid resource fail", "error", err)
		}
	})
	if err != nil {
		Jlog.Fatal("init timer fail", "error", err)
	}
}

//启动orm服务
func (app *App) InitDBServer() error {
	db, err := Jorm.GormInit(Jorm.OrmInitConfig{
		SqlDsn:      config.LocalConfig.DB.Connect,
		MaxKeepConn: config.LocalConfig.DB.MaxKeepConn,
		MaxConn:     config.LocalConfig.DB.MaxConn,
		MaxLifetime: time.Duration(config.LocalConfig.DB.MaxLifeTime) * time.Second,
		LogWrite:    Jlog.IOWrite( "DB-Log", nil),
		TableCheck:  orm.InitOrmTable,
	})
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

//启动web服务
func (app *App) InitWebServer() error {
	websocketConfig := Jweb.WebsocketConfig{
		WriteWaitTime: time.Duration(config.LocalConfig.HTTP.WebSocket.WriteWaitTime) * time.Second,
		ReadWaitTime:  time.Duration(config.LocalConfig.HTTP.WebSocket.ReadWaitTime) * time.Second,
		PingWaitTime:  time.Duration(config.LocalConfig.HTTP.WebSocket.PingWaitTime) * time.Second,
		PongWaitTime:  time.Duration(config.LocalConfig.HTTP.WebSocket.PongWaitTime) * time.Second,
		Call:          Jweb.WebsocketCall{
			WebsocketConnect: app.Request.WebsocketConnect,
			WebsocketConnected: app.Request.WebsocketConnected,
			WebsocketClosed: app.Request.WebsocketClosed,
			WebsocketError: app.Request.WebsocketError,
		},
	}

	routeFunc := func(r *gin.Engine) {
		r.Use(gzip.Gzip(gzip.DefaultCompression))
		r.NoRoute(app.Request.NotFoundWithHttp)
		r.NoMethod(app.Request.NotFoundWithHttp)

		r.GET( "/ws", websocketConfig.WsHandle)
		r.GET("/nodeResource/download/"+ ":name", app.Request.ConvertWithHttpFileDownload(app.Request.ReqNodeResourceDownload))
		r.POST( "/system/getInitInfo", app.Request.ConvertWithHttp(app.Request.ReqFindSystemInfo))
		r.POST( "/manager/login", app.Request.ConvertWithHttp(app.Request.ReqManagerLogin))
		r.POST( "/manager/register", app.Request.ConvertWithHttp(app.Request.ReqManagerRegister))

		r.Use(app.Request.ParseTokenWithHttp)
		//manager
		r.POST( "/manager/findNickName", app.Request.ConvertWithHttp(app.Request.ReqManagerFindNickName))
		r.POST( "/manager/findByID", app.Request.ConvertWithHttp(app.Request.ReqManagerFindByID))
		r.POST( "/manager/updatePasswd", app.Request.ConvertWithHttp(app.Request.ReqManagerUpdatePasswd))
		r.POST( "/manager/updateSetting", app.Request.ConvertWithHttp(app.Request.ReqManagerUpdateSetting))
		r.POST( "/manager/findLowLevel", app.Request.ConvertWithHttp(app.Request.ReqManagerFindLowLevel))

		//topLink
		r.POST( "/topLink/find", app.Request.ConvertWithHttp(app.Request.ReqTopLinkFind))
		r.POST( "/topLink/findByID", app.Request.ConvertWithHttp(app.Request.ReqTopLinkFindByID))

		//node
		r.POST( "/node/find", app.Request.ConvertWithHttp(app.Request.ReqNodeFind))
		r.POST( "/node/findByID", app.Request.ConvertWithHttp(app.Request.ReqNodeFindByID))
		r.POST( "/node/del", app.Request.ConvertWithHttp(app.Request.ReqNodeDel))

		//nodeFunc
		r.POST( "/nodeFunc/find", app.Request.ConvertWithHttp(app.Request.ReqNodeFuncFind))

		//nodeFuncCall
		r.POST( "/nodeFuncCall/call", app.Request.ConvertWithHttp(app.Request.ReqNodeFuncCall))
		r.POST( "/nodeFuncCall/find", app.Request.ConvertWithHttp(app.Request.ReqNodeFuncCallFind))
		r.POST( "/nodeFuncCall/findByID", app.Request.ConvertWithHttp(app.Request.ReqNodeFuncCallFindByID))
		r.POST( "/nodeFuncCall/findParameterByID", app.Request.ConvertWithHttp(app.Request.ReqNodeFuncCallParameterFindByID))
		r.POST( "/nodeFuncCall/findReturnValByID", app.Request.ConvertWithHttp(app.Request.ReqNodeFuncCallReturnValFindByID))

		//nodeReport
		r.POST( "/nodeReport/find", app.Request.ConvertWithHttp(app.Request.ReqNodeReportFind))

		//nodeReportVal
		r.POST( "/nodeReportVal/find", app.Request.ConvertWithHttp(app.Request.ReqNodeReportValFind))

		//nodeNotify
		r.POST( "/nodeNotify/find", app.Request.ConvertWithHttp(app.Request.ReqNodeNotifyFind))

		//nodeResource
		r.POST( "/nodeResource/check", app.Request.ConvertWithHttp(app.Request.ReqNodeResourceCheck))
		r.POST( "/nodeResource/find", app.Request.ConvertWithHttp(app.Request.ReqNodeResourceFind))
		r.POST("/nodeResource/upload", app.Request.ConvertWithHttpFileUpload(app.Request.ReqNodeResourceUpload))
		r.POST( "/nodeResource/del", app.Request.ConvertWithHttp(app.Request.ReqNodeResourceDel))

		//nodeTest
		r.POST( "/nodeTest/test", app.Request.ConvertWithHttp(app.Request.ReqNodeTest))

		r.Use(app.Request.LevelCheckWithHttp(protoManage.Level_LevelSuper))

		//topLink
		r.POST( "/topLink/add", app.Request.ConvertWithHttp(app.Request.ReqTopLinkAdd))
		r.POST( "/topLink/del", app.Request.ConvertWithHttp(app.Request.ReqTopLinkDel))
		r.POST( "/topLink/update", app.Request.ConvertWithHttp(app.Request.ReqTopLinkUpdate))

		//manager
		r.POST( "/manager/add", app.Request.ConvertWithHttp(app.Request.ReqManagerAdd))
		r.POST( "/manager/del", app.Request.ConvertWithHttp(app.Request.ReqManagerDel))
		r.POST( "/manager/update", app.Request.ConvertWithHttp(app.Request.ReqManagerUpdate))

		//nodeFunc
		r.POST( "/nodeFunc/del", app.Request.ConvertWithHttp(app.Request.ReqNodeFuncDel))

		//nodeReport
		r.POST( "/nodeReport/del", app.Request.ConvertWithHttp(app.Request.ReqNodeReportDel))

		//r.StaticFS("/file", http.Dir(config.LocalConfig.File.SavePath))
	}

	httpServer := Jweb.WebInit(Jweb.WebInitConfig{
		Debug:          config.LocalConfig.Debug,
		Addr:           config.LocalConfig.HTTP.ListenAddr,
		IsHttps:        config.LocalConfig.HTTP.UseHTTPS,
		RedirectAddr:   config.LocalConfig.HTTP.HTTPS.RedirectAddr,
		PublicKeyPath:  config.LocalConfig.HTTP.HTTPS.PublicKeyPath,
		PrivateKeyPath: config.LocalConfig.HTTP.HTTPS.PrivateKeyPath,
		RouteCall:      routeFunc,
	})
	app.HttpServer = httpServer
	Jlog.Info("web component is start")
	return nil
}

//优雅关闭http服务
func (app *App) GracefulStopWebServer() error {
	if app.HttpServer == nil {
		return errors.New("web component must not be nil")
	}
	if err := app.HttpServer.Shutdown(context.Background()); err != nil {
		return err
	}
	return nil
}

//立即关闭http服务
func (app *App) StopWebServer() error {
	if app.HttpServer == nil {
		return errors.New("web component must not be nil")
	}
	if err := app.HttpServer.Close(); err != nil {
		return err
	}
	return nil
}

//启动rpc服务
func (app *App) InitRpcServer() error {
	s, err := Jrpc.GrpcServerInit(Jrpc.RpcServerConfig{
		RpcBaseConfig:Jrpc.RpcBaseConfig{
			Addr:           config.LocalConfig.Grpc.ListenAddr,
			PublicKeyPath:  config.LocalConfig.Grpc.PublicKeyPath,
		},
		PrivateKeyPath: config.LocalConfig.Grpc.PrivateKeyPath,
		RegisterCall: func(s *grpc.Server) {
			protoManage.RegisterRpcEngineServer(s, &app.Request)
		},
		ServerOption: 	[]grpc.ServerOption{
			grpc.MaxSendMsgSize(constant.ConstRpcServerMaxMsgSize), grpc.MaxRecvMsgSize(constant.ConstRpcServerMaxMsgSize),
			grpc.UnaryInterceptor(app.Request.RpcUnaryInterceptor), grpc.StreamInterceptor(app.Request.RpcStreamInterceptor)},
	})

	app.RpcServer = s
	Jlog.Info("rpc component is start")
	return err
}

//优雅关闭rpc服务
func (app *App) GracefulStopRpcServer() error {
	if app.RpcServer == nil {
		return errors.New("rpc component must not be nil")
	}
	app.RpcServer.GracefulStop()
	return nil
}

//立即关闭rpc服务
func (app *App) StopRpcServer() error {
	if app.RpcServer == nil {
		return errors.New("rpc component must not be nil")
	}
	app.RpcServer.Stop()
	return nil
}


