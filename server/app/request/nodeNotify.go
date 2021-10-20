// Copyright 2021 The Authors. All rights reserved.
// Author: liyiligang
// Date: 2021/06/23 16:42
// Description:

package request

import (
	"github.com/liyiligang/base/component/Jlog"
	"github.com/liyiligang/klee/app/protoFiles/protoManage"
)

//节点通知增加
func (request *Request) ReqNodeNotifyAdd(nodeID int64, message []byte) error {
	nodeNotify := protoManage.NodeNotify{}
	err := nodeNotify.Unmarshal(message)
	if err != nil {
		return err
	}
	return request.Data.NodeNotifyAdd(&nodeNotify, nodeNotify.ShowPop)
}

func (request *Request) SaveNodeNotify(senderID int64, senderType protoManage.NotifySenderType,
	message string, state protoManage.State, isSend bool) {
	nodeNotify := protoManage.NodeNotify{
		SenderID: senderID,
		SenderType: senderType,
		Message: message,
		State: state,
	}
	err := request.Data.NodeNotifyAdd(&nodeNotify, isSend)
	if err != nil {
		Jlog.Error("写入通知失败：", "error", err)
	}
}

func (request *Request) SaveNodeNotifyWithUserError(senderID int64, message string) {
	request.SaveNodeNotify(senderID, protoManage.NotifySenderType_NotifySenderTypeUser,
		message, protoManage.State_StateError, false)
}

func (request *Request) SaveNodeNotifyWithUserInfo(senderID int64, message string) {
	request.SaveNodeNotify(senderID, protoManage.NotifySenderType_NotifySenderTypeUser,
		message, protoManage.State_StateNormal, false)
}

func (request *Request) SaveNodeNotifyWithNodeError(senderID int64, message string) {
	request.SaveNodeNotify(senderID, protoManage.NotifySenderType_NotifySenderTypeNode,
		message, protoManage.State_StateError, true)
}

func (request *Request) SaveNodeNotifyWithNodeInfo(senderID int64, message string) {
	request.SaveNodeNotify(senderID, protoManage.NotifySenderType_NotifySenderTypeNode,
		message, protoManage.State_StateNormal, true)
}

func (request *Request) SendNodeNotifyWithNodeError(senderID int64, message string) {
	nodeNotify := protoManage.NodeNotify{
		SenderID: senderID,
		SenderType: protoManage.NotifySenderType_NotifySenderTypeNode,
		Message: message,
		State: protoManage.State_StateError,
	}
	err := request.Data.Gateway.RpcSendOrBroadCastPB(senderID, protoManage.Order_NodeNotifyError, &nodeNotify)
	if err != nil {
		Jlog.Error("发送通知失败：", "error", err)
	}
}

//节点通知查询
func (request *Request) ReqNodeNotifyFind(userID int64, message []byte)([]byte, error) {
	req := protoManage.ReqNodeNotifyList{}
	err := req.Unmarshal(message)
	if err != nil {
		return nil, err
	}
	ans, err := request.Data.NodeNotifyFind(&req)
	if err != nil {
		return nil, err
	}
	pbByte, err := ans.Marshal()
	if err != nil {
		return nil, err
	}
	return pbByte, err
}