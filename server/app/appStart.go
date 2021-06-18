// Copyright 2019 The Authors. All rights reserved.
// Author: liyiligang
// Date: 2019/10/19 18:43
// Description: 管控服务启动

package app

import (
	"context"
	"encoding/json"
	"github.com/gin-contrib/gzip"
	"github.com/gin-gonic/gin"
	"github.com/liyiligang/base/commonConst"
	"github.com/liyiligang/base/component/Jconfig"
	"github.com/liyiligang/base/component/Jdiscovery"
	"github.com/liyiligang/base/component/Jlog"
	"github.com/liyiligang/base/component/Jorm"
	"github.com/liyiligang/base/component/Jrpc"
	"github.com/liyiligang/base/component/Jtool"
	"github.com/liyiligang/base/component/Jweb"
	"github.com/liyiligang/manage/app/protoFiles/protoManage"
	"github.com/liyiligang/manage/app/typedef/config"
	"github.com/liyiligang/manage/app/typedef/orm"
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
	Jconfig.ReadConfigFromPath(&config.LocalConfig, configPath)

	if config.LocalConfig.IP.PublicIP == ""{
		config.LocalConfig.IP.PublicIP = Jtool.GetPublicIP()
	}
	if config.LocalConfig.IP.PrivateIP == ""{
		config.LocalConfig.IP.PrivateIP = Jtool.GetPrivateIP()
	}
}

func (app *App) InitLogServer(){
	err := Jlog.LogInit(Jlog.LogInitConfig{
		Debug:      config.LocalConfig.Debug,
		LocalPath:  config.LocalConfig.Log.Path,
		MaxSize:    config.LocalConfig.Log.MaxSize,
		MaxBackups: config.LocalConfig.Log.MaxNum,
		MaxAge:     config.LocalConfig.Log.MaxAge,
		InitialFields: map[string]interface{}{
			"@nodeGroup":    config.LocalConfig.Node.NodeGroup,
			"@nodeTypeName": app.AppTypeName,
			"@nodeName":     config.LocalConfig.Node.NodeName,
		}})

	if err != nil {
		log.Fatal("日志服务初始化失败: ", err)
	}
	Jlog.Info("日志服务初始化成功")
}

//启动orm服务
func (app *App) InitDBServer() error {
	db, err := Jorm.GormInit(Jorm.OrmInitConfig{
		SqlDsn:      config.LocalConfig.DB.Account + config.LocalConfig.DB.Name + config.LocalConfig.DB.Set,
		MaxKeepConn: config.LocalConfig.DB.MaxKeepConn,
		MaxConn:     config.LocalConfig.DB.MaxConn,
		MaxLifetime: time.Duration(config.LocalConfig.DB.MaxLifeTime) * time.Second,
		LogWrite:    &Jlog.LogIoWrite{Msg: "DB", Flag: "gorm"},
		TableCheck:  orm.InitOrmTable,
	})
	if err != nil {
		Jlog.Error("连接数据库" + config.LocalConfig.DB.Name + "失败", "errorBox:", err)
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
		//r.Static("/manage", config.NodeConfig.Web.ManagePath)
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
	s, err := Jrpc.GrpcServerInit(Jrpc.RpcInitConfig{
		Addr:           config.LocalConfig.Grpc.ListenAddr,
		PublicKeyPath:  config.LocalConfig.Grpc.PublicKeyPath,
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

//初始化服务发现
func (app *App) InitDiscovery() error {
	if config.LocalConfig.Etcd.EtcdAddr == "" {
		return nil
	}
	discovery, err := Jdiscovery.DiscoveryInit(Jdiscovery.DiscoveryInitConfig{
		EtcdAddr:       config.LocalConfig.Etcd.EtcdAddr,
		ConnectTimeout: config.LocalConfig.Etcd.ConnectWaitTime,
		RequestTimeout: config.LocalConfig.Etcd.RequestTimeout,
	})
	app.Discovery = discovery
	Jlog.Info("发现服务初始化成功")
	return err
}

func (app *App) StopDiscovery() error {
	if app.Discovery == nil {
		return nil
	}
	return 	app.Discovery.Client.Close()
}

//注册节点
func (app *App) registerNode() error {
	if app.Discovery == nil {
		return nil
	}
	nodeData := commonConst.CommonNodeData{
		NodeID:       commonConst.ManageNodeID,
		NodeTypeID:   commonConst.ManageNodeTypeID,
		NodeTypeName: app.AppTypeName,
		NodeName:     config.LocalConfig.Node.NodeName,
		NodeGroup:    config.LocalConfig.Node.NodeGroup,
		NodeState:    int32(protoManage.State_StateNormal),
		PublicAddr:   config.LocalConfig.IP.PublicIP,
		PrivateAddr:  config.LocalConfig.IP.PrivateIP,
		GrpcPort:     Jtool.GetPortFromAddr(config.LocalConfig.Grpc.ListenAddr),
	}
	byte, err := json.Marshal(nodeData)
	if err != nil {
		Jlog.Info("节点服务注册失败")
		return err
	}
	err = app.Discovery.RegisterNode(&Jdiscovery.DiscoveryNode{
		NodeKey: app.getNodeKey(),
		NodeData: byte,
		NodeKeepLive: 60,
	})
	if err != nil {
		Jlog.Info("节点服务注册失败")
		return err
	}
	Jlog.Info("节点服务注册成功")
	return nil
}

//注销节点
func (app *App) unRegisterNode() error {
	if app.Discovery == nil {
		return nil
	}
	return app.Discovery.UnRegisterNode(app.getNodeKey())
}

//获取节点key
func (app *App) getNodeKey() string {
	return "/"+ config.LocalConfig.Node.NodeGroup+"/服务"+"/"+
		string(app.AppTypeName)+"/"+ config.LocalConfig.Node.NodeName+"/node"
}

//错误回调
func errorOther(str string, keysAndValues ...interface{}){
	Jlog.Error(str, keysAndValues)
}

