// Copyright 2019 The Authors. All rights reserved.
// Author: liyiligang
// Date: 2019/5/10 16:11
// Description: 业务处理

package app

import (
	"github.com/liyiligang/base/commonConst"
	"github.com/liyiligang/base/component/Jlog"
	"github.com/liyiligang/klee/app/data"
	"github.com/liyiligang/klee/app/db"
	"github.com/liyiligang/klee/app/gateway"
	"github.com/liyiligang/klee/app/request"
	"google.golang.org/grpc"
	"net/http"
)

type App struct {
	AppTypeName     commonConst.NodeTypeName
	HttpServer      *http.Server
	RpcServer       *grpc.Server
	DBServer		db.Server
	Data            data.Data
	Request			request.Request
	Gateway			gateway.Gateway
}

//服务初始化
func InitServer() (*App, error) {
	app := App{AppTypeName: commonConst.ManageServerName}
	app.InitConfig()
	app.InitLogServer()
	app.InitFileDir()
	app.initAppData()
	if err := app.InitBaseServer(); err != nil {
		app.StopBaseServer()
		return nil, err
	}
	Jlog.Info("服务已经全部启动")
	return &app, nil
}

func (app *App) InitBaseServer() error {
	if err :=  app.InitDBServer(); err != nil {
		return err
	}
	if err := app.InitWebServer(); err != nil {
		return err
	}
	if err := app.InitRpcServer(); err != nil {
		return err
	}
	Jlog.Info("组件已经全部启动")
	return nil
}

func (app *App) StopBaseServer() {
	app.StopDBServer()
	app.StopWebServer()
	app.StopRpcServer()
	Jlog.Info("组件已经全部停止")
}

func (app *App) initAppData() {
	app.Data.DB = &app.DBServer
	app.Data.Gateway = &app.Gateway
	app.Request.Data = &app.Data
}
