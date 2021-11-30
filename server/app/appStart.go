// Copyright 2019 The Authors. All rights reserved.
// Author: liyiligang
// Date: 2019/10/19 18:43
// Description: 管控服务启动

package app

import (
	"context"
	"github.com/gin-contrib/gzip"
	"github.com/gin-gonic/gin"
	"github.com/liyiligang/base/component/Jconfig"
	"github.com/liyiligang/base/component/Jlog"
	"github.com/liyiligang/base/component/Jorm"
	"github.com/liyiligang/base/component/Jrpc"
	"github.com/liyiligang/base/component/Jtool"
	"github.com/liyiligang/base/component/Jweb"
	"github.com/liyiligang/klee/app/protoFiles/protoManage"
	"github.com/liyiligang/klee/app/typedef/config"
	"github.com/liyiligang/klee/app/typedef/orm"
	"google.golang.org/grpc"
	"log"
	"time"
)

func (app *App) InitConfig(){
	configPath := ""
	//if len(os.Args) > 1 {
	//	configPath = os.Args[1]
	//}
	Jconfig.ReadConfigFromPath(&config.LocalConfig, configPath)
}

func (app *App) InitLogServer(){
	err := Jlog.LogInit(Jlog.LogInitConfig{
		Debug:      config.LocalConfig.Debug,
		LocalPath:  config.LocalConfig.Log.Path,
		MaxSize:    config.LocalConfig.Log.MaxSize,
		MaxBackups: config.LocalConfig.Log.MaxNum,
		MaxAge:     config.LocalConfig.Log.MaxAge,
		InitialFields: map[string]interface{}{
			"@nodeName":     config.LocalConfig.Node.NodeName,
		}})

	if err != nil {
		log.Fatal("日志服务初始化失败: ", err)
	}
	Jlog.Info("日志服务初始化成功")
}

func (app *App) InitFileDir(){
	if !Jtool.IsDirExist(config.LocalConfig.File.SavePath) {
		err := Jtool.MakeDir(config.LocalConfig.File.SavePath)
		if err != nil {
			log.Fatal("文件目录初始化失败: ", err)
		}
	}
	Jlog.Info("文件目录初始化成功")
}

//启动orm服务
func (app *App) InitDBServer() error {
	db, err := Jorm.GormInit(Jorm.OrmInitConfig{
		SqlDsn:      config.LocalConfig.DB.Connect,
		MaxKeepConn: config.LocalConfig.DB.MaxKeepConn,
		MaxConn:     config.LocalConfig.DB.MaxConn,
		MaxLifetime: time.Duration(config.LocalConfig.DB.MaxLifeTime) * time.Second,
		LogWrite:    &Jlog.LogIoWrite{Msg: "DB", Flag: "gorm"},
		TableCheck:  orm.InitOrmTable,
	})
	if err != nil {
		Jlog.Error("连接数据库失败", "errorBox:", err)
		return err
	}
	app.DBServer.Gorm = db
	Jlog.Info("数据库服务初始化成功")
	return nil
}

func (app *App) StopDBServer() error {
	if app.DBServer.Gorm == nil {
		return nil
	}
	db, err := app.DBServer.Gorm.DB()
	if err != nil {
		Jlog.Error("数据库服务关闭失败", "err", err)
		return err
	}
	err = db.Close()
	if err != nil {
		Jlog.Error("数据库服务关闭失败", "err", err)
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
		Call:          app,
	}

	httpConfig := Jweb.HttpConfig{
		Call: app,
	}

	routeFunc := func(r *gin.Engine) {
		r.Use(gzip.Gzip(gzip.DefaultCompression))
		r.Handle("GET", "/ws", websocketConfig.WsHandle)
		r.Handle("POST", "/http", httpConfig.HttpHandle)
		r.Handle("POST","/uploadFile", httpConfig.HttpUploadFile)
		r.Handle("GET","/downloadFile" + ":UUID", httpConfig.HttpDownloadFile)
		//r.StaticFS("/file", http.Dir(config.LocalConfig.File.SavePath))
		//r.NoRoute(func(c *gin.Context) {
		//	c.Redirect(http.StatusMovedPermanently, "/manage")
		//})
	}

	httpServer := Jweb.WebInit(Jweb.WebInitConfig{
		Debug:          config.LocalConfig.Debug,
		Addr:           config.LocalConfig.HTTP.ListenAddr,
		IsHttps:        config.LocalConfig.HTTP.UseHTTPS,
		RedirectAddr:   config.LocalConfig.HTTP.HTTPS.RedirectAddr,
		LogWrite:       &Jlog.LogIoWrite{Msg: "web", Flag: "gin"},
		PublicKeyPath:  config.LocalConfig.HTTP.HTTPS.PublicKeyPath,
		PrivateKeyPath: config.LocalConfig.HTTP.HTTPS.PrivateKeyPath,
		RouteCall:      routeFunc,
		ErrorCall:      errorOther,
	})
	app.HttpServer = httpServer
	Jlog.Info("Web服务初始化成功")
	return nil
}

//优雅关闭http服务
func (app *App) GracefulStopWebServer() error {
	if app.HttpServer == nil {
		return nil
	}
	if err := app.HttpServer.Shutdown(context.Background()); err != nil {
		Jlog.Error("Web服务优雅关闭失败", "err", err)
		return err
	}
	return nil
}

//立即关闭http服务
func (app *App) StopWebServer() error {
	if app.HttpServer == nil {
		return nil
	}
	if err := app.HttpServer.Close(); err != nil {
		Jlog.Error("Web强制关闭失败", "err", err)
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
			protoManage.RegisterRpcEngineServer(s, app)
		},
		LogWrite: &Jlog.LogIoWrite{Msg: "rpc", Flag: "grpc"},
		ErrorCall: errorOther,
	})

	app.RpcServer = s
	Jlog.Info("Rpc服务初始化成功")
	return err
}

//优雅关闭rpc服务
func (app *App) GracefulStopRpcServer() error {
	if app.RpcServer == nil {
		return nil
	}
	app.RpcServer.GracefulStop()
	return nil
}

//立即关闭rpc服务
func (app *App) StopRpcServer() error {
	if app.RpcServer == nil {
		return nil
	}
	app.RpcServer.Stop()
	return nil
}

//错误回调
func errorOther(str string, keysAndValues ...interface{}){
	Jlog.Error(str, keysAndValues)
}

