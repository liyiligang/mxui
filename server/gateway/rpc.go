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
	"github.com/liyiligang/base/component/Jrpc"
	"github.com/liyiligang/base/component/Jtool"
	"github.com/liyiligang/mxui/protoFiles/protoManage"
	"github.com/liyiligang/mxui/typedef/constant"
	"github.com/pkg/errors"
)

func (gateway *Gateway) RpcSendOrBroadCastPB(nodeID int64, order protoManage.Order, pb proto.Message) error {
	pbByte, err := proto.Marshal(pb)
	if err != nil {
		return err
	}
	return gateway.RpcSendOrBroadCastData(nodeID, order, &pbByte)
}

func (gateway *Gateway) RpcSendOrBroadCastData(nodeID int64, order protoManage.Order, data *[]byte) error {
	var err error
	if nodeID == constant.ConstSendBroadcast {
		err = gateway.rpcBroadCast(order, data)
	} else {
		err = gateway.rpcSend(nodeID, order, data)
	}
	return err
}

//关闭客户端
func (gateway *Gateway) RpcCloseClient(nodeID int64) error {
	conn, ok := gateway.RpcManage.Load(nodeID)
	if !ok {
		return errors.New("node id " + Jtool.Int64ToString(nodeID) +
			" is not found with gateway.RpcManage")
	}
	stream, ok := conn.(*Jrpc.RpcStream)
	if !ok {
		return errors.New("conn assert fail with *Jrpc.RpcStream")
	}
	stream.Close(false)
	return nil
}

func (gateway *Gateway) RpcGetID(nodeID interface{}) (int64, error) {
	id, ok := nodeID.(int64)
	if !ok {
		return 0, errors.New("node id assert fail with int64")
	}
	return id, nil
}

func (gateway *Gateway) rpcSend(nodeID int64, order protoManage.Order, data *[]byte) error {
	conn, ok := gateway.RpcManage.Load(nodeID)
	if !ok {
		return errors.New("node id " + Jtool.Int64ToString(nodeID) +
			" is not found with gateway.RpcManage")
	}
	message := &protoManage.Message{Order: order, Message: *data}
	conn.(*Jrpc.RpcStream).SendData(message)
	return nil
}

func (gateway *Gateway) rpcBroadCast(order protoManage.Order, data *[]byte) error {
	message := &protoManage.Message{Order: order, Message: *data}
	gateway.RpcManage.LoadAll(func(key, value interface{}) bool {
		value.(*Jrpc.RpcStream).SendData(message)
		return true
	})
	return nil
}

