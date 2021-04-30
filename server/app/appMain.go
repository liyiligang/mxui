// Copyright 2019 The Authors. All rights reserved.
// Author: liyiligang
// Date: 2019/5/10 16:11
// Description: 业务处理

package app

import (
	"github.com/liyiligang/base/commonConst"
	"github.com/liyiligang/base/component/Jdiscovery"
	"github.com/liyiligang/base/component/Jlog"
	"github.com/liyiligang/manage/app/data"
	"github.com/liyiligang/manage/app/db"
	"github.com/liyiligang/manage/app/gateway"
	"github.com/liyiligang/manage/app/request"
	"google.golang.org/grpc"
	"gorm.io/gorm"
	"net/http"
)

type App struct {
	appTypeName     commonConst.NodeTypeName
	httpServer      *http.Server
	rpcServer       *grpc.Server
	gorm            *gorm.DB
	db				db.DB
	data            data.Data
	request			request.Request
	gateway			gateway.Gateway
	discovery 		Jdiscovery.Discovery
	receiver        chan appMessage
}

type appAnsChan struct {
	id  int32
	val interface{}
	err error
}

type appMessage struct {
	ID      int32
	MsgType commonConst.OrderType
	Msg     interface{}
	ansChan chan appAnsChan
	addr    string
}

func (app *App) distributor() {
	app.receiver = make(chan appMessage, 256)
	for {
		select {
		case appMsg := <-app.receiver:
			switch appMsg.MsgType {
			case commonConst.WebsocketOrder:
				break
			case commonConst.RpcServerOrder:
				break
			default:
				Jlog.Warn("消息类型错误", "消息", appMsg)
				break
			}
		}
	}
}

//服务初始化
func InitServer() {
	app := App{appTypeName: commonConst.ManageServerName}
	app.initDiscovery()
	app.initLogServer()
	go app.distributor()
	if err := app.InitBaseServer(); err != nil {
		app.StopBaseServer()
	}
	app.initAppData()
	//app.InitDBData()
	Jlog.Info("服务已经全部启动")
}

func (app *App) InitBaseServer() error {
	if err :=  app.initConfig(); err != nil {
		return err
	}
	if err :=  app.initDBServer(); err != nil {
		return err
	}
	if err := app.initWebServer(); err != nil {
		return err
	}
	if err := app.initRpcServer(); err != nil {
		return err
	}
	if err := app.registerNode(); err != nil {
		return err
	}
	Jlog.Info("组件已经全部启动")
	return nil
}

func (app *App) StopBaseServer() {
	app.stopDBServer()
	app.stopWebServer()
	app.stopRpcServer()
	Jlog.Info("组件已经全部停止")
}

func (app *App) initAppData() {
	app.db.Gorm = app.gorm
	app.data.DB = &app.db
	app.request.Data = &app.data
	app.gateway.Request = &app.request
}
