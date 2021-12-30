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

package gateway

import (
	"github.com/gogo/protobuf/proto"
	"github.com/liyiligang/base/component/Jtool"
	"github.com/liyiligang/base/component/Jweb"
	"github.com/liyiligang/mxrpc/protoFiles/protoManage"
	"github.com/liyiligang/mxrpc/typedef/constant"
	"github.com/pkg/errors"
)

func (gateway *Gateway) WsSendOrBroadCastPB(userID int64, order protoManage.Order, pb proto.Message) error {
	pbByte, err := proto.Marshal(pb)
	if err != nil {
		return err
	}
	return gateway.WsSendOrBroadCastData(userID, order, &pbByte)
}

func (gateway *Gateway) WsSendOrBroadCastData(userID int64, order protoManage.Order, data *[]byte) error {
	var err error
	if userID == constant.ConstSendBroadcast {
		err = gateway.wsBroadCast(order, data)
	} else {
		err = gateway.wsSend(userID, order, data)
	}
	return err
}

func (gateway *Gateway) WsCloseClient(userID int64, msg string) error {
	conn, ok := gateway.WebsocketManage.Load(userID)
	if !ok {
		return errors.New("user id " + Jtool.Int64ToString(userID) +
			" is not found with gateway.WebsocketManage")
	}
	socket, ok := conn.(*Jweb.WebsocketConn)
	if !ok {
		return errors.New("conn assert fail with *Jrpc.RpcStream")
	}
	socket.Close(msg, false)
	return nil
}

func (gateway *Gateway) WsGetID(userID interface{}) (int64, error) {
	id, ok:= userID.(int64)
	if !ok {
		return 0, errors.New("user id assert fail with int64")
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
		return errors.New("user id " + Jtool.Int64ToString(userID) +
			" is not found with gateway.WebsocketManage")
	}
	stManage := &protoManage.Message{Order: order, Message: *data}
	manage, err := stManage.Marshal()
	if err != nil {
		return err
	}
	conn.(*Jweb.WebsocketConn).SendByte(&manage)
	return nil
}
