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
func (app *App) initDiscovery() {
	if app.discovery.Init(Jdiscovery.DiscoveryInitConfig{
		EtcdAddr:       config.LocalConfig.Etcd.EtcdAddr,
		ConnectTimeout: config.LocalConfig.Etcd.ConnectWaitTime,
		RequestTimeout: config.LocalConfig.Etcd.RequestTimeout,
	}) != nil {
		log.Fatal("发现服务初始化失败")
	}
	log.Println("发现服务初始化成功")
}

func (app *App) initLogServer(){
	data, err := app.discovery.GetConfig("/"+ config.LocalConfig.Node.NodeGroup+"/"+ config.LocalConfig.Etcd.ConfigKey.Log)
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
			"@nodeTypeName": app.appTypeName,
			"@nodeName":     config.LocalConfig.Node.NodeName,
		}})

	if err != nil {
		log.Fatal("日志服务初始化失败: ", err)
	}
	Jlog.Info("日志服务初始化成功")
}

func (app *App) ParseConfig(config interface{}, configKey string) error {
	data, err := app.discovery.GetConfig(configKey)
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

func (app *App) initConfig() error {
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
		config.LocalConfig.Etcd.ConfigKey.Node+string(app.appTypeName)+"/"+
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
func (app *App) initDBServer() error {
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
	app.gorm = db
	Jlog.Info("数据库服务初始化成功")
	return nil
}

func (app *App) stopDBServer() error {
	if app.gorm == nil {
		return nil
	}
	db, err := app.gorm.DB()
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
func (app *App) initWebServer() error {
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
		Call:          &app.gateway,
	}

	httpConfig := Jweb.HttpConfig{
		Call: &app.gateway,
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
	app.httpServer = httpServer
	Jlog.Info("Web服务初始化成功")
	return nil
}

//优雅关闭http服务
func (app *App) gracefulStopWebServer() error {
	if app.httpServer == nil {
		return nil
	}
	if err := app.httpServer.Shutdown(context.Background()); err != nil {
		Jlog.Error("Web服务优雅关闭失败", "err", err)
		return err
	}
	return nil
}

//立即关闭http服务
func (app *App) stopWebServer() error {
	if app.httpServer == nil {
		return nil
	}
	if err := app.httpServer.Close(); err != nil {
		Jlog.Error("Web强制关闭失败", "err", err)
		return err
	}
	return nil
}

//启动rpc服务
func (app *App) initRpcServer() error {
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
			protoManage.RegisterRpcEngineServer(s, &app.gateway)
		},
		LogWrite: &Jlog.LogIoWrite{Msg: "rpc", Flag: "grpc"},
		ErrorCall: errorOther,
	})

	app.rpcServer = s
	Jlog.Info("Rpc服务初始化成功")
	return nil
}

//优雅关闭rpc服务
func (app *App) gracefulStopRpcServer() error {
	if app.rpcServer == nil {
		return nil
	}
	app.rpcServer.GracefulStop()
	return nil
}

//立即关闭rpc服务
func (app *App) stopRpcServer() error {
	if app.rpcServer == nil {
		return nil
	}
	app.rpcServer.Stop()
	return nil
}

//获取节点key
func (app *App) getNodeKey() string {
	return "/"+ config.LocalConfig.Node.NodeGroup+"/服务"+"/"+
		string(app.appTypeName)+"/"+ config.LocalConfig.Node.NodeName+"/node"
}

//注册节点
func (app *App) registerNode() error {
	nodeData := commonConst.CommonNodeData{
		NodeID:       commonConst.ManageNodeID,
		NodeTypeID:   commonConst.ManageNodeTypeID,
		NodeTypeName: app.appTypeName,
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
	err = app.discovery.RegisterNode(&Jdiscovery.DiscoveryNode{
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
	return app.discovery.UnRegisterNode(app.getNodeKey())
}

func errorOther(str string, keysAndValues ...interface{}){
	Jlog.Error(str, keysAndValues)
}

func (app *App) InitDBData(){
	startNum := 1
	//nodeGroupLen := 100
	//nodeTypeLen := 10
	//nodeLen := 10000
	//nodeLinkLen := 10000
	//nodeFuncLen := 10000
	//nodeReportLen := 10000
	//nodeFuncCallLen := 30
	nodeReportValLen := 10000

	//for i:=startNum; i<=nodeGroupLen; i++ {
	//	app.dbAddNodeGroup(orm.NodeGroup{Base: orm.Base{ID: int64(i)}, Name: "节点组" +  strconv.Itoa(i)})
	//}
	//
	//for i:=startNum; i<=nodeTypeLen; i++ {
	//	app.dbAddNodeType(orm.NodeType{Base: orm.Base{ID: int64(i)}, Name: "节点类型" +  strconv.Itoa(i)})
	//}
	//
	//for i:=startNum; i<=nodeLen; i++ {
	//	groupID, _ := Jtool.GetRandInt(startNum, nodeGroupLen)
	//	typeID, _ := Jtool.GetRandInt(startNum, nodeTypeLen)
	//	state, _ := Jtool.GetRandInt(0, 5)
	//	app.dbAddNode(orm.Node{
	//		Base: orm.Base{ID: int64(i)},
	//		Name: "节点" +  strconv.Itoa(i),
	//		GroupID: int64(groupID),
	//		TypeID: int64(typeID),
	//		State: int32(state),
	//	})
	//}
	//
	//for i:=startNum; i<=nodeLinkLen; i++ {
	//	sourceID, _ := Jtool.GetRandInt(startNum, nodeLen)
	//	targetID, _ := Jtool.GetRandInt(startNum, nodeLen)
	//	state, _ := Jtool.GetRandInt(0, 5)
	//	app.dbAddNodeLink(orm.NodeLink{
	//		Base: orm.Base{ID: int64(i)},
	//		SourceID: int64(sourceID),
	//		TargetID: int64(targetID),
	//		State: int32(state),
	//	})
	//}
	//
	//for i:=startNum; i<=nodeFuncLen; i++ {
	//	nodeID, _ := Jtool.GetRandInt(startNum, nodeLen)
	//	state, _ := Jtool.GetRandInt(0, 5)
	//	app.dbAddNodeFunc(orm.NodeFunc{
	//		Base: orm.Base{ID: int64(i)},
	//		NodeID: int64(nodeID),
	//		Name: "节点方法" +  strconv.Itoa(i),
	//		Func: "func(" +  strconv.Itoa(i) + "){}",
	//		State: int32(state),
	//	})
	//}
	//
	//for i:=startNum; i<=nodeReportLen; i++ {
	//	nodeID, _ := Jtool.GetRandInt(startNum, nodeLen)
	//	state, _ := Jtool.GetRandInt(0, 5)
	//	app.dbAddNodeReport(orm.NodeReport{
	//		Base: orm.Base{ID: int64(i)},
	//		NodeID: int64(nodeID),
	//		Name: "节点报告" +  strconv.Itoa(i),
	//		Flag: "报告标签" +  strconv.Itoa(i),
	//		State: int32(state),
	//	})
	//}
	//
	//for i:=startNum; i<=nodeReportLen; i++ {
	//	nodeID, _ := Jtool.GetRandInt(startNum, nodeLen)
	//	state, _ := Jtool.GetRandInt(0, 5)
	//	app.dbAddNodeReport(orm.NodeReport{
	//		Base: orm.Base{ID: int64(i)},
	//		NodeID: int64(nodeID),
	//		Name: "节点报告" +  strconv.Itoa(i),
	//		Flag: "报告标签" +  strconv.Itoa(i),
	//		State: int32(state),
	//	})
	//}

	//for i:=startNum; i<=nodeReportLen; i++ {
	//	for j := startNum; j<nodeFuncCallLen; j++  {
	//		nodeID, _ := Jtool.GetRandInt(startNum, nodeLen)
	//		state, _ := Jtool.GetRandInt(0, 5)
	//		app.dbAddNodeReport(orm.NodeReport{
	//			Base: orm.Base{ID: int64(i)},
	//			NodeID: int64(nodeID),
	//			Name: "节点报告" +  strconv.Itoa(i),
	//			Flag: "报告标签" +  strconv.Itoa(i),
	//			State: int32(state),
	//		})
	//	}
	//}

	for i:=startNum; i<=10; i++ {
		for j := startNum; j<nodeReportValLen; j++  {
			value, _ := Jtool.GetRandInt(0, 1000000)
			state, _ := Jtool.GetRandInt(1, 5)
			app.db.AddNodeReportVal(orm.NodeReportVal{
				ReportID: int64(i),
				Value: float64(value/1000),
				State: int32(state),
			})
			timeF, _ := Jtool.GetRandInt(0, 1500)
			time.Sleep(time.Duration(timeF) * time.Millisecond)
		}
	}

	Jlog.Info("数据填充完毕")
}