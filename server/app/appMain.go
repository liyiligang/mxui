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

const ConstManager = "管理员"
const ConstNodeGroupStr= "节点组"
const ConstNodeTypeStr = "节点类型"
const ConstNodeStr = "节点"
const ConstNodeLinkStr = "节点连接"
const ConstNodeFuncStr = "节点方法"
const ConstNodeReportStr = "节点报告"

const ConstNodeFuncParm = "节点函数参数"
const ConstNodeFuncReturn = "节点函数返回值"

const ConstNodeReportVal = "节点报告值"

const ConstUnknow = "未知"
const ConstLogin = "登录"
const ConstAdd = "添加"
const ConstDel = "删除"
const ConstUpdate = "更新"
const ConstFind = "查找"
const ConstConnect = "连接"
const ConstReconnect = "重连"
const ConstConnectPause = "维护"
const ConstConnectRecovery = "恢复"
const ConstDisconnect = "断开"
const ConstBrokenLine = "断线"
const ConstOffline = "离线"
const ConstStart = "启动"
const ConstPause = "维护"
const ConstStop = "停止"
const ConstCall = "调用"
const ConstToken = "Token"
const ConstPassword = "密码"

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