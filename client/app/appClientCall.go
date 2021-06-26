// Copyright 2021 The Authors. All rights reserved.
// Author: liyiligang
// Date: 2021/06/21 10:32
// Description: rpc client call

package app

import (
	"fmt"
	"github.com/liyiligang/base/commonConst"
	"github.com/liyiligang/base/component/Jlog"
	"github.com/liyiligang/base/component/Jrpc"
	"github.com/liyiligang/manage/client/app/protoFiles/protoManage"
	"time"
)

func (client *manageClient) RpcStreamConnect(stream *Jrpc.RpcStream) (interface{}, error) {
	pbByte, err := client.getNodeStreamByte()
	if err != nil {
		return 0, err
	}
	stream.SetRpcStreamClientMsg(pbByte)
	return commonConst.ManageNodeID, nil
}

func (client *manageClient) RpcStreamConnected(stream *Jrpc.RpcStream) error {
	client.setRpcStream(stream)
	err := client.nodeOnline(stream.GetParm().RpcStreamServerHeader)
	if err != nil{
		return err
	}

	err = client.UpdateNodeLink(15, protoManage.State_StateError)
	if err != nil {
		fmt.Println(err)
	}

	err = client.RegisterNodeFunc("临界实验", client.testFunc)
	if err != nil {
		fmt.Println(err)
	}

	err = client.RegisterNodeReport("临界报告", client.testReport, 3*time.Second)
	if err != nil {
		fmt.Println(err)
	}
	err = client.RegisterNodeReport("临界报告", client.testReport, 3*time.Second)
	if err != nil {
		fmt.Println(err)
	}

	err = client.SendNodeNotify("临界通知111", protoManage.State_StateWarn)
	if err != nil {
		fmt.Println(err)
	}

	return nil
}

func (client *manageClient) RpcStreamClose(stream *Jrpc.RpcStream) {
	//Jlog.Info("管控服务连接已断开", "err:", string(stream.GetParm().RpcStreamServerTrailer))
	//go func(){
	//	err := client.streamClient.initRpcStreamManageClient()
	//	if err != nil {
	//		Jlog.Error("管控中心重连失败", "err:", err.Error())
	//	}
	//}()
	fmt.Println("rpc 已关闭")
}

func (client *manageClient) RpcStreamReceiver(stream *Jrpc.RpcStream, recv interface{}) {
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

func (client *manageClient) RpcStreamError(text string, err error) {
	fmt.Println("rpc 错误：", text, err)
}