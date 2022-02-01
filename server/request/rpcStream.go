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
	"errors"
	"github.com/liyiligang/base/component/Jlog"
	"github.com/liyiligang/base/component/Jrpc"
	"github.com/liyiligang/base/component/Jtool"
	"github.com/liyiligang/mxui/protoFiles/protoManage"
	"time"
)

func (request *Request) RpcChannel(engine protoManage.RpcEngine_RpcChannelServer) error {
	conn, err := Jrpc.GrpcStreamServerInit(engine, new(protoManage.Message), Jrpc.RpcStreamCall{
		RpcStreamConnect:request.RpcStreamConnect,
		RpcStreamConnected:request.RpcStreamConnected,
		RpcStreamClosed:request.RpcStreamClosed,
		RpcStreamReceiver:request.RpcStreamReceiver,
		RpcStreamError:request.RpcStreamError,
	})
	if err != nil {
		return err
	}
	return conn.GrpcStreamServerRun(engine)
}

func (request *Request) RpcStreamConnect(conn *Jrpc.RpcStream) (interface{}, error) {
	node := protoManage.Node{}
	err := node.Unmarshal(conn.GetRpcContext().RpcStreamClientHeader)
	if err != nil {
		return 0, err
	}
	node.State = protoManage.State_StateNormal
	err = request.Data.NodeStateUpdate(&node)
	if err != nil {
		return 0, err
	}
	return node.Base.ID, nil
}

func (request *Request) RpcStreamConnected(conn *Jrpc.RpcStream) error {
	nodeID, err := request.Data.Gateway.RpcGetID(conn.GetBindVal())
	if err != nil {
		return err
	}
	if request.Data.Gateway.RpcManage.IsExistDelayCheck(nodeID, 500*time.Millisecond, 6) {
		return errors.New("node id "+Jtool.Int64ToString(nodeID)+" is existed")
	}
	request.Data.Gateway.RpcManage.Store(nodeID, conn)
	Jlog.Info("node is online", "nodeID", nodeID)
	return nil
}

func (request *Request) RpcStreamClosed(conn *Jrpc.RpcStream) error {
	request.Data.Gateway.RpcManage.Delete(conn.GetBindVal())
	nodeID, err := request.Data.Gateway.RpcGetID(conn.GetBindVal())
	if err != nil {
		return err
	}
	err = request.ReqNodeOffline(nodeID)
	if err != nil {
		return err
	}
	Jlog.Info("node is offline", "nodeID", nodeID)
	return nil
}

func (request *Request) RpcStreamReceiver(conn *Jrpc.RpcStream, recv interface{}) error {
	nodeID, err := request.Data.Gateway.RpcGetID(conn.GetBindVal())
	if err != nil {
		return err
	}
	res, ok := recv.(*protoManage.Message)
	if !ok {
		return errors.New("recv assert fail with *protoManage.Message")
	}
	switch res.Order {
	case protoManage.Order_NodeFuncCallAns:
		err = request.AnsNodeFuncCall(nodeID, res.Message)
		break
	case protoManage.Order_NodeReportUpdateVal:
		err = request.ReqNodeReportValAdd(nodeID, res.Message)
		break
	case protoManage.Order_NodeNotifyAdd:
		err = request.ReqNodeNotifyAdd(nodeID, res.Message)
		break
	default:
		err = errors.New("rpc order is invalid with number " +  Jtool.Int64ToString(int64(res.Order)))
	}
	return err
}

func (request *Request) RpcStreamError(text string, err error) {
	Jlog.Warn(text, "error", err)
}