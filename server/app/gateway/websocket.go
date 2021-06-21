package gateway

import (
	"fmt"
	"github.com/gogo/protobuf/proto"
	"github.com/liyiligang/base/commonConst"
	"github.com/liyiligang/base/component/Jlog"
	"github.com/liyiligang/base/component/Jtool"
	"github.com/liyiligang/base/component/Jweb"
	"github.com/liyiligang/manage/app/protoFiles/protoManage"
	"github.com/pkg/errors"
)

func (gateway *Gateway) WsSendOrBroadCastPB(userID int64, order protoManage.Order, pb proto.Message) error {
	pbByte, err := proto.Marshal(pb)
	if err != nil {
		return errors.WithMessage(err, "protobuf编码错误")
	}
	return gateway.WsSendOrBroadCastData(userID, order, &pbByte)
}

func (gateway *Gateway) WsSendOrBroadCastData(userID int64, order protoManage.Order, data *[]byte) error {
	var err error
	if userID == commonConst.ConstBroadcast {
		err = gateway.wsBroadCast(order, data)
	} else {
		err = gateway.wsSend(userID, order, data)
	}
	return errors.WithMessage(err, "websocket错误")
}

func (gateway *Gateway) WsCloseClient(userID interface{}, msg string) {
	conn, ok := gateway.WebsocketManage.Load(userID)
	if ok {
		err := conn.(*Jweb.WebsocketConn).Close(msg)
		if err != nil {
			Jlog.Warn("wsCloseClient 关闭客户端失败", "userID", userID, "errorBox", err)
		}
	} else {
		Jlog.Warn("wsCloseClient 未发现id", "userID", userID)
	}
}

func (gateway *Gateway) WsGetID(userID interface{}) (int64, error) {
	id, ok:= userID.(int64)
	if !ok {
		str := fmt.Sprintf("websocket id类型错误, userID: %v", userID)
		return 0, errors.New(str)
	}
	return id, nil
}

func (gateway *Gateway) wsBroadCast(order protoManage.Order, data *[]byte) error {
	stManage := &protoManage.Message{Order: order, Message: *data}
	manage, err := stManage.Marshal()
	if err != nil {
		return err
	}
	var arrConn []*Jweb.WebsocketConn
	gateway.WebsocketManage.LoadAll(func(key, value interface{}) bool {
		arrConn = append(arrConn, value.(*Jweb.WebsocketConn))
		return true
	})
	return Jweb.BroadCastByte(&manage, arrConn)
}

func (gateway *Gateway) wsSend(userID int64, order protoManage.Order, data *[]byte) error {
	conn, ok := gateway.WebsocketManage.Load(userID)
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



////平台通知
//func (gateway *Gateway) platformNotify(userID int32, message string, mType protoManage.NoticeType) {
//	notice := protoManage.PlatformNotice{Message: message, Type: mType}
//	pbByte, err := notice.Marshal()
//	if !errorBox.PBMarshalSuccess(err, notice) {
//		return
//	}
//	app.wsSendOrBroadCast(userID, protoManage.Order_PlatformNotify, &pbByte)
//}
//
////查询通知记录
//func (gateway *Gateway) findNotifyRecord(userID int32, message *[]byte) {
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
