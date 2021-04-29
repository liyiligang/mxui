// Copyright 2019 The Authors. All rights reserved.
// Author: liyiligang
// Date: 2019/5/10 16:11
// Description: 业务处理

package app

import (
	"github.com/liyiligang/base/commonConst"
	"github.com/liyiligang/base/component/Jdiscovery"
	"github.com/liyiligang/base/component/Jlog"
	"google.golang.org/grpc"
	"gorm.io/gorm"
	"net/http"
)

type App struct {
	appTypeName     commonConst.NodeTypeName
	httpServer      *http.Server
	RpcServer       *grpc.Server
	db              *gorm.DB
	discovery 		Jdiscovery.Discovery
	WebsocketRoute  WebsocketRoute
	RpcStreamRoute  RpcStreamRoute
	Receiver        chan appMessage
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
	app.Receiver = make(chan appMessage, 256)
	for {
		select {
		case appMsg := <-app.Receiver:
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

func (app *App) SetDB(db *gorm.DB) {
	app.db = db
}