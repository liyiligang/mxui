// Copyright 2021 The Authors. All rights reserved.
// Author: liyiligang
// Date: 2021/06/21 10:32
// Description: rpc client call

package app

import (
	"github.com/liyiligang/base/commonConst"
	"github.com/liyiligang/base/component/Jlog"
	"github.com/liyiligang/base/component/Jrpc"
	"github.com/liyiligang/manage/client/app/protoFiles/protoManage"
)

func (client *ManageClient) RpcServeConnected(rpcKeepalive *Jrpc.RpcKeepalive, isReConnect bool) {
	if isReConnect {
		err := client.initManageClientStream()
		if err != nil {
			client.RpcStreamError("rpc stream init error: ", err)
		}
	}
}

func (client *ManageClient) RpcServeDisconnected(rpcKeepalive *Jrpc.RpcKeepalive, isCloseByUser bool) {
	defer func(){
		if isCloseByUser {
			client.closeConn()
		}
	}()
}

func (client *ManageClient) RpcStreamConnect(stream *Jrpc.RpcStream) (interface{}, error) {
	pbByte, err := client.getNodeStreamByte()
	if err != nil {
		return 0, err
	}
	stream.SetRpcStreamClientMsg(pbByte)
	return commonConst.ManageNodeID, nil
}

func (client *ManageClient) RpcStreamConnected(stream *Jrpc.RpcStream) error {
	client.setRpcStream(stream)
	err := client.nodeOnline(stream.GetParm().RpcStreamServerHeader)
	if err != nil{
		return err
	}
	return nil
}

func (client *ManageClient) RpcStreamClose(stream *Jrpc.RpcStream) {
	client.setRpcStream(nil)
}

func (client *ManageClient) RpcStreamReceiver(stream *Jrpc.RpcStream, recv interface{}) {
	res := *recv.(*protoManage.Message)
	var err error
	switch res.Order {
	case protoManage.Order_NodeFuncCallReq:
		err = client.reqNodeFuncCall(res.Message)
		break
	default:
		Jlog.Warn("管控中心指令错误", "指令", res.Order, "消息", &res.Message)
	}
	if err != nil {
		Jlog.Warn(err.Error())
	}
}

func (client *ManageClient) RpcStreamError(text string, err error) {
	if client.config.ErrorCall != nil {

	}
}



