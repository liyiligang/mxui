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
	"github.com/liyiligang/base/protoFiles/protoManage"
	"github.com/liyiligang/manage/app/typedef/config"
	"github.com/liyiligang/manage/app/typedef/orm"
	"google.golang.org/grpc"
	"log"
	"os"
	"reflect"
	"time"
)

//初始化服务发现
func (app *App) InitDiscovery() {
	if app.Discovery.Init(Jdiscovery.DiscoveryInitConfig{
		EtcdAddr:       config.LocalConfig.Etcd.EtcdAddr,
		ConnectTimeout: config.LocalConfig.Etcd.ConnectWaitTime,
		RequestTimeout: config.LocalConfig.Etcd.RequestTimeout,
	}) != nil {
		log.Fatal("发现服务初始化失败")
	}
	log.Println("发现服务初始化成功")
}

func (app *App) InitLogServer(){
	data, err := app.Discovery.GetConfig("/"+ config.LocalConfig.Node.NodeGroup+"/"+ config.LocalConfig.Etcd.ConfigKey.Log)
	if err != nil {
		log.Fatal("读取线上配置失败: ", err)
	}
	err = Jconfig.ReadConfigFromByte(&config.LogConfig, data)
	if err != nil {
		log.Fatal("线上配置文件 LogConfig" + " 解析失败: ", err)
	}
	err = Jlog.LogInit(Jlog.LogInitConfig{
		Debug:      config.LocalConfig.Debug,
		LocalPath:  config.LogConfig.Zap.Path,
		MaxSize:    config.LogConfig.Zap.MaxSize,
		MaxBackups: config.LogConfig.Zap.MaxNum,
		MaxAge:     config.LogConfig.Zap.MaxAge,
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

func (app *App) ParseConfig(config interface{}, configKey string) error {
	data, err := app.Discovery.GetConfig(configKey)
	if err != nil {
		Jlog.Error("读取线上配置失败", "err", err)
		return err
	}
	err = Jconfig.ReadConfigFromByte(config, data)
	configName := reflect.TypeOf(config).Elem().Name()
	if err != nil {
		Jlog.Error("线上配置文件 "+configName+" 解析失败", "err", err)
		return err
	}
	return nil
}

func (app *App) InitConfig() error {
	if err := app.ParseConfig(&config.DBConfig, "/"+config.LocalConfig.Node.NodeGroup+"/"+config.LocalConfig.Etcd.ConfigKey.DB); err != nil {
		return err
	}
	if err := app.ParseConfig(&config.GrpcCert, "/"+config.LocalConfig.Node.NodeGroup+"/"+config.LocalConfig.Etcd.ConfigKey.GrpcCert); err != nil {
		return err
	}
	if err := app.ParseConfig(&config.HttpCert, "/"+config.LocalConfig.Node.NodeGroup+"/"+config.LocalConfig.Etcd.ConfigKey.HTTPCert); err != nil {
		return err
	}
	if err := app.ParseConfig(&config.NodeConfig, "/"+config.LocalConfig.Node.NodeGroup+"/"+
		config.LocalConfig.Etcd.ConfigKey.Node+string(app.AppTypeName)+"/"+
		config.LocalConfig.Node.NodeName+"/config"); err != nil {
		return err
	}

	if config.NodeConfig.IP.PublicIP == ""{
		config.NodeConfig.IP.PublicIP = Jtool.GetPublicIP()
	}

	if config.NodeConfig.IP.PrivateIP == ""{
		config.NodeConfig.IP.PrivateIP = Jtool.GetPrivateIP()
	}

	Jlog.Info("线上配置初始化成功")
	return nil
}

//启动orm服务
func (app *App) InitDBServer() error {
	db, err := Jorm.GormInit(Jorm.OrmInitConfig{
		SqlDsn:      config.DBConfig.Mysql.Account + config.NodeConfig.DB.Name + config.DBConfig.Mysql.Set,
		MaxKeepConn: config.DBConfig.Mysql.MaxKeepConn,
		MaxConn:     config.DBConfig.Mysql.MaxConn,
		MaxLifetime: time.Duration(config.DBConfig.Mysql.MaxLifeTime) * time.Second,
		LogWrite:    &Jlog.LogIoWrite{Msg: "DB", Flag: "gorm"},
		TableCheck:  orm.InitOrmTable,
	})
	if err != nil {
		Jlog.Error("连接数据库" + config.NodeConfig.DB.Name + "失败", "errorBox:", err)
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
	publicKeyPath, err := Jtool.CreateSysTmpFile("*.pem", []byte(config.HttpCert.Key.PublicKeyByte))
	if err != nil {
		Jlog.Error("Web服务初始化失败", "errorBox:", err)
		return err
	}
	privateKeyPath, err := Jtool.CreateSysTmpFile("*.key", []byte(config.HttpCert.Key.PrivateKeyByte))
	if err != nil {
		Jlog.Error("Web服务初始化失败", "errorBox:", err)
		return err
	}
	defer os.Remove(publicKeyPath)
	defer os.Remove(privateKeyPath)

	websocketConfig := Jweb.WebsocketConfig{
		WriteWaitTime: time.Duration(config.WebSocketConfig.WebSocket.WriteWaitTime) * time.Second,
		ReadWaitTime:  time.Duration(config.WebSocketConfig.WebSocket.ReadWaitTime) * time.Second,
		PingWaitTime:  time.Duration(config.WebSocketConfig.WebSocket.PingWaitTime) * time.Second,
		PongWaitTime:  time.Duration(config.WebSocketConfig.WebSocket.PongWaitTime) * time.Second,
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
		Addr:           config.NodeConfig.HTTP.ListenAddr,
		IsHttps:        config.NodeConfig.HTTP.UseHTTPS,
		RedirectAddr:   config.NodeConfig.HTTP.RedirectAddr,
		LogWrite:       &Jlog.LogIoWrite{Msg: "web", Flag: "gin"},
		PublicKeyPath:  publicKeyPath,
		PrivateKeyPath: privateKeyPath,
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
	publicKeyPath, err := Jtool.CreateSysTmpFile("*.pem", []byte(config.GrpcCert.Key.PublicKeyByte))
	if err != nil {
		Jlog.Error("Rpc服务初始化失败", "errorBox:", err)
		return err
	}
	privateKeyPath, err := Jtool.CreateSysTmpFile("*.key", []byte(config.GrpcCert.Key.PrivateKeyByte))
	if err != nil {
		Jlog.Error("Rpc服务初始化失败", "errorBox:", err)
		return err
	}
	defer os.Remove(publicKeyPath)
	defer os.Remove(privateKeyPath)

	s, err := Jrpc.GrpcServerInit(Jrpc.RpcInitConfig{
		Addr:           config.NodeConfig.Grpc.ListenAddr,
		PublicKeyPath:  publicKeyPath,
		PrivateKeyPath: privateKeyPath,
		RegisterCall: func(s *grpc.Server) {
			protoManage.RegisterRpcEngineServer(s, app)
		},
		LogWrite: &Jlog.LogIoWrite{Msg: "rpc", Flag: "grpc"},
		ErrorCall: errorOther,
	})

	app.RpcServer = s
	Jlog.Info("Rpc服务初始化成功")
	return nil
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

//获取节点key
func (app *App) getNodeKey() string {
	return "/"+ config.LocalConfig.Node.NodeGroup+"/服务"+"/"+
		string(app.AppTypeName)+"/"+ config.LocalConfig.Node.NodeName+"/node"
}

//注册节点
func (app *App) registerNode() error {
	nodeData := commonConst.CommonNodeData{
		NodeID:       commonConst.ManageNodeID,
		NodeTypeID:   commonConst.ManageNodeTypeID,
		NodeTypeName: app.AppTypeName,
		NodeName:     config.LocalConfig.Node.NodeName,
		NodeGroup:    config.LocalConfig.Node.NodeGroup,
		NodeState:    int32(protoManage.State_StateNormal),
		PublicAddr:   config.NodeConfig.IP.PublicIP,
		PrivateAddr:  config.NodeConfig.IP.PrivateIP,
		GrpcPort:     Jtool.GetPortFromAddr(config.NodeConfig.Grpc.ListenAddr),
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
	return app.Discovery.UnRegisterNode(app.getNodeKey())
}

//错误回调
func errorOther(str string, keysAndValues ...interface{}){
	Jlog.Error(str, keysAndValues)
}
