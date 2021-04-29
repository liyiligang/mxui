// Copyright 2019 The Authors. All rights reserved.
// Author: liyiligang
// Date: 2019/5/12 11:21
// Description: rpc服务端消息处理

package app

import (
	"fmt"
	"github.com/gogo/protobuf/proto"
	"github.com/liyiligang/base/commonConst"
	"github.com/liyiligang/base/component/Jlog"
	"github.com/liyiligang/base/component/Jrpc"
	"github.com/liyiligang/base/component/Jtool"
	"github.com/liyiligang/base/protoFiles/protoManage"
	"github.com/pkg/errors"
)

type RpcStreamRoute struct {
	connManage Jtool.ConnManage
}

func (app *App) RpcChannel(request protoManage.RpcEngine_RpcChannelServer) (err error) {
	conn, pErr := Jrpc.GrpcStreamServerInit(request, new(protoManage.Message), app)
	if pErr != nil {
		return pErr
	}
	return conn.GrpcStreamServerRun(request)
}

func (app *App) RpcStreamConnect(conn *Jrpc.RpcStream) (interface{}, error) {
	id, header, err := app.reqNodeLogin(conn.GetParm().RpcClientMsg, conn.GetParm().RpcClientAddr)
	conn.SetRpcStreamServerHeader(header)
	if err != nil {
		return 0, err
	}
	return id, err
}

func (app *App) RpcStreamConnected(conn *Jrpc.RpcStream) error {
	id, err := app.rpcGetID(conn.GetBindVal())
	if err != nil {
		return err
	}
	if app.RpcStreamRoute.connManage.IsExist(id) {
		return errors.New("id:"+Jtool.Int64ToString(id)+"已存在")
	}
	app.RpcStreamRoute.connManage.Store(id, conn)
	err = app.reqNodeOnline(id, conn.GetParm().RpcStreamClientMsg)
	if err != nil {
		return err
	}
	Jlog.Info("rpc已连接", "id", id)
	return nil
}

func (app *App) RpcStreamClose(conn *Jrpc.RpcStream) {
	id, err := app.rpcGetID(conn.GetBindVal())
	if err != nil {
		Jlog.Warn("rpc连接关闭错误", "err", err)
		return
	}
	app.reqNodeOffline(id)
	app.RpcStreamRoute.connManage.Delete(conn.GetBindVal())
	Jlog.Info("rpc连接已关闭", "id", id)
}

func (app *App) RpcStreamReceiver(conn *Jrpc.RpcStream, recv interface{}) {
	id, err := app.rpcGetID(conn.GetBindVal())
	if err != nil {
		Jlog.Warn("rpc数据接收错误", "err", err)
		return
	}
	res := *recv.(*protoManage.Message)

	switch res.Order {
	case protoManage.Order_NodeUpdateState:
		app.reqNodeStateUpdate(id, res.Message)
		break
	case protoManage.Order_NodeLinkUpdateState:
		app.reqNodeLinkStateUpdate(id, res.Message)
		break
	case protoManage.Order_NodeFuncUpdateDesc:
		app.reqNodeFuncDescUpdate(id, res.Message)
		break
	case protoManage.Order_NodeReportUpdateVal:
		app.reqNodeReportValUpdate(id, res.Message)
		break
	case protoManage.Order_NodeNotifyAdd:
		app.reqNodeNotifyUpdate(id, res.Message)
		break
	default:
		Jlog.Warn("rpc 指令错误", "消息", res)
	}
}

func (app *App) RpcStreamError(text string, err error){
	Jlog.Warn(text, "err", err)
}

func (app *App) rpcSendOrBroadCastPB(userID int64, order protoManage.Order, pb proto.Message) error {
	pbByte, err := proto.Marshal(pb)
	if err != nil {
		return errors.WithMessage(err, "protobuf编码错误")
	}
	return app.rpcSendOrBroadCastData(userID, order, &pbByte)
}

func (app *App) rpcSendOrBroadCastData(nodeID int64, order protoManage.Order, data *[]byte) error {
	var err error
	if nodeID == commonConst.ConstBroadcast {
		err = app.rpcBroadCast(order, data)
	} else {
		err = app.rpcSend(nodeID, order, data)
	}
	return errors.WithMessage(err, "rpc错误")
}

func (app *App) rpcSend(nodeID int64, order protoManage.Order, data *[]byte) error {
	conn, ok := app.RpcStreamRoute.connManage.Load(nodeID)
	if !ok {
		return errors.New("找不到ID:" + Jtool.Int64ToString(nodeID))
	}
	message := &protoManage.Message{Order: order, Message: *data}
	conn.(*Jrpc.RpcStream).SendData(message)
	return nil
}

func (app *App) rpcBroadCast(order protoManage.Order, data *[]byte) error {
	message := &protoManage.Message{Order: order, Message: *data}
	app.RpcStreamRoute.connManage.LoadAll(func(key, value interface{}) bool {
		value.(*Jrpc.RpcStream).SendData(message)
		return true
	})
	return nil
}

//关闭客户端
func (app *App) rpcCloseClient(nodeID interface{}) {
	conn, ok := app.RpcStreamRoute.connManage.Load(nodeID)
	if ok {
		conn.(*Jrpc.RpcStream).Close()
	} else {
		Jlog.Warn("rpcCloseClient 未发现id", "nodeID", nodeID)
	}
}

func (app *App) rpcGetID(userID interface{}) (int64, error) {
	id, ok:= userID.(int64)
	if !ok {
		str := fmt.Sprintf("rpc id类型错误, userID: %v", userID)
		return 0, errors.New(str)
	}
	return id, nil
}
