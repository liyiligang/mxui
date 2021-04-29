// Copyright 2019 The Authors. All rights reserved.
// Author: liyiligang
// Date: 2019/5/12 11:31
// Description: websocket消息处理

package app

import (
	"fmt"
	"github.com/gogo/protobuf/proto"
	"github.com/liyiligang/base/commonConst"
	"github.com/liyiligang/base/component/Jlog"
	"github.com/liyiligang/base/component/Jtool"
	"github.com/liyiligang/base/component/Jweb"
	"github.com/liyiligang/base/protoFiles/protoManage"
	"github.com/pkg/errors"
)

type WebsocketRoute struct {
	connManage Jtool.ConnManage
}

func (app *App) WebsocketConnect(conn *Jweb.WebsocketConn) (interface{}, error) {
	return app.reqWsTokenCheck([]byte(conn.GetParm().WsClientMsg), conn.GetParm().WsClientAddr)
}

func (app *App) WebsocketConnected(conn *Jweb.WebsocketConn) error {
	id, err := app.wsGetID(conn.GetBindVal())
	if err != nil {
		return err
	}
	if app.WebsocketRoute.connManage.IsExist(id) {
		return errors.New("id:"+Jtool.Int64ToString(id)+"已存在")
	}
	app.WebsocketRoute.connManage.Store(id, conn)
	err = app.managerStateUpdate(&protoManage.Manager{Base: protoManage.Base{ID: id},
		State: protoManage.State_StateNormal})
	if err != nil {
		return err
	}
	Jlog.Info("websocket已连接", "id", id)
	return nil
}

func (app *App) WebsocketClose(conn *Jweb.WebsocketConn, code int, text string) {
	id, err := app.wsGetID(conn.GetBindVal())
	if err != nil {
		Jlog.Warn("websocket连接关闭错误", "err", err)
		return
	}
	app.managerStateUpdate(&protoManage.Manager{Base: protoManage.Base{ID: id},
		State: protoManage.State_StateUnknow})
	app.WebsocketRoute.connManage.Delete(id)
	Jlog.Info("websocket连接已关闭", "id", id)
}

func (app *App) WebsocketReceiver(conn *Jweb.WebsocketConn, message *[]byte) {
	id, err := app.wsGetID(conn.GetBindVal())
	if err != nil {
		Jlog.Warn("websocket数据接收错误", "err", err)
		return
	}
	res := protoManage.Message{}
	err = res.Unmarshal(*message)
	if err != nil {
		Jlog.Warn("websocket数据解析错误", "err", err)
		return
	}
	switch res.Order {
	case protoManage.Order_NodeUpdateState:
		app.reqNodeStateUpdate(id, res.Message)
		break
	default:
		Jlog.Warn("websocket指令错误", "消息", res)
	}
}

func (app *App) WebsocketPong(conn *Jweb.WebsocketConn, pingData string) string {
	return pingData
}

func (app *App) WebsocketError(text string, err error){
	Jlog.Warn(text, "err", err)
}

func (app *App) wsSendOrBroadCastPB(userID int64, order protoManage.Order, pb proto.Message) error {
	pbByte, err := proto.Marshal(pb)
	if err != nil {
		return errors.WithMessage(err, "protobuf编码错误")
	}
	return app.wsSendOrBroadCastData(userID, order, &pbByte)
}

func (app *App) wsSendOrBroadCastData(userID int64, order protoManage.Order, data *[]byte) error {
	var err error
	if userID == commonConst.ConstBroadcast {
		err = app.wsBroadCast(order, data)
	} else {
		err = app.wsSend(userID, order, data)
	}
	return errors.WithMessage(err, "websocket错误")
}

func (app *App) wsBroadCast(order protoManage.Order, data *[]byte) error {
	stManage := &protoManage.Message{Order: order, Message: *data}
	manage, err := stManage.Marshal()
	if err != nil {
		return err
	}
	var arrConn []*Jweb.WebsocketConn
	app.WebsocketRoute.connManage.LoadAll(func(key, value interface{}) bool {
		arrConn = append(arrConn, value.(*Jweb.WebsocketConn))
		return true
	})
	return Jweb.BroadCastByte(&manage, arrConn)
}

func (app *App) wsSend(userID int64, order protoManage.Order, data *[]byte) error {
	conn, ok := app.WebsocketRoute.connManage.Load(userID)
	if !ok {
		return errors.New("找不到ID:" + Jtool.Int64ToString(userID))
	}
	stManage := &protoManage.Message{Order: order, Message: *data}
	manage, err := stManage.Marshal()
	if err != nil {
		return err
	}
	conn.(*Jweb.WebsocketConn).SendByte(&manage)
	return nil
}

func (app *App) wsCloseClient(userID interface{}) {
	conn, ok := app.WebsocketRoute.connManage.Load(userID)
	if ok {
		err := conn.(*Jweb.WebsocketConn).Close()
		if err != nil {
			Jlog.Warn("wsCloseClient 关闭客户端失败", "userID", userID, "errorBox", err)
		}
	} else {
		Jlog.Warn("wsCloseClient 未发现id", "userID", userID)
	}
}

func (app *App) wsGetID(userID interface{}) (int64, error) {
	id, ok:= userID.(int64)
	if !ok {
		str := fmt.Sprintf("websocket id类型错误, userID: %v", userID)
		return 0, errors.New(str)
	}
	return id, nil
}

////平台通知
//func (app *App) platformNotify(userID int32, message string, mType protoManage.NoticeType) {
//	notice := protoManage.PlatformNotice{Message: message, Type: mType}
//	pbByte, err := notice.Marshal()
//	if !errorBox.PBMarshalSuccess(err, notice) {
//		return
//	}
//	app.wsSendOrBroadCast(userID, protoManage.Order_PlatformNotify, &pbByte)
//}
//
////查询通知记录
//func (app *App) findNotifyRecord(userID int32, message *[]byte) {
//	req := protoManage.ReqNotifyRecord{}
//	err := req.Unmarshal(*message)
//	if !app.pbUnmarshalSuccess(err, message) {
//		return
//	}
//
//	ormNotifyRecord, ok := app.dbFindNotifyRecord(req.RecordNum, req.RecordOffset, req.FilterDateStart, req.FilterDateEnd, req.FilterWord, req.FilterMessageType)
//	if !ok {
//		return
//	}
//
//	var notifyRecord []*protoManage.NotifyRecord
//	for _, v := range ormNotifyRecord {
//		notifyRecord = append(notifyRecord, app.ormNotifyRecordToProtoNotifyRecord(&v))
//	}
//	ans := protoManage.AnsNotifyRecord{NotifyRecord: notifyRecord}
//	pbByte, err := ans.Marshal()
//	if !app.pbMarshalSuccess(err, ans) {
//		return
//	}
//	app.wsSendOrBroadCast(userID, protoManage.Order_NotifyRecordFind, &pbByte)
//	return
//}
