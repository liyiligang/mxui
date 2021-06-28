// Copyright 2021 The Authors. All rights reserved.
// Author: liyiligang
// Date: 2021/06/21 10:01
// Description: rpc client start

package app

import (
	"github.com/liyiligang/base/commonConst"
	"github.com/liyiligang/base/component/Jrpc"
	"github.com/liyiligang/manage/client/app/protoFiles/protoManage"
	"google.golang.org/grpc"
	"time"
)

//启动rpc服务
func InitManageClient(config Jrpc.RpcClientConfig) (*manageClient, error) {
	var err error
	client := &manageClient{}
	client.conn, err = Jrpc.GrpcClientInit(config)
	if err != nil {
		return nil, err
	}
	client.engine = protoManage.NewRpcEngineClient(client.conn)
	client.keepalive = &Jrpc.RpcKeepalive{
		ServerNode: &commonConst.CommonNodeData{},
		Conn: client.conn,
		KeepaliveTime: 1*time.Second,
	}
	err = client.initManageClientStream()
	if err != nil {
		return nil, err
	}
	err = Jrpc.RegisterRpcKeepalive(client.keepalive, client)
	if err != nil {
		return nil, err
	}
	return client, nil
}

//初始化grpc流
func (client *manageClient) initManageClientStream() error {
	rpcStream, err := Jrpc.GrpcStreamClientInit(new(protoManage.Message), client)
	if err != nil {
		return err
	}
	channel, err := client.engine.RpcChannel(rpcStream.GetContext(), grpc.WaitForReady(true))
	if err != nil {
		return err
	}
	return rpcStream.GrpcStreamClientRun(channel)
}