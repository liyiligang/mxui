/*
 * Copyright 2021 liyiligang.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package request

import (
	"github.com/liyiligang/base/component/Jlog"
	"github.com/liyiligang/mxui/protoFiles/protoManage"
)

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
		Jlog.Warn("save node notify fail", "error", err)
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
		Jlog.Warn("send node notify fail", "error", err)
	}
}

func (request *Request) ReqNodeNotifyFind(r *HTTPRequest) error {
	req := &protoManage.ReqNodeNotifyList{}
	err := request.unmarshalWithHttp(r, req)
	if err != nil {
		return err
	}
	ans, err := request.Data.NodeNotifyFind(req)
	if err != nil {
		return err
	}
	err = request.marshalWithHttp(r, ans)
	if err != nil {
		return err
	}
	return nil
}