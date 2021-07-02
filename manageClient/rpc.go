// Copyright 2021 The Authors. All rights reserved.
// Author: liyiligang
// Date: 2021/07/02 17:56
// Description:

package main

import (
	"github.com/liyiligang/base/component/Jrpc"
	"github.com/liyiligang/client/manageClient/protoFiles/protoManage"
)

func InitManageClient(config ManageClientConfig) (*ManageClient, error) {
	client := &ManageClient{config: config}
	auth, err := client.getManageAuth()
	if err != nil {
		return nil, err
	}
	client.conn, err = Jrpc.GrpcClientInit(Jrpc.RpcClientConfig{
		RpcBaseConfig:  Jrpc.RpcBaseConfig{
			Addr: config.Addr,
			PublicKeyPath: config.PublicKeyPath,
		},
		CertName:       config.CertName,
		Auth:           auth,
		ConnectTimeOut: config.ConnectTimeOut,
	})
	if err != nil {
		return nil, err
	}
	client.engine = protoManage.NewRpcEngineClient(client.conn)
	err = client.initManageClientStream()
	if err != nil {
		return nil, err
	}
	client.keepalive = &Jrpc.RpcKeepalive{
		ServerNode: client.getManageServerNode(config.Addr),
		Conn: client.conn,
		KeepaliveTime: config.KeepaliveTime,
	}
	err = Jrpc.RegisterRpcKeepalive(client.keepalive, client)
	if err != nil {
		return nil, err
	}
	err = client.UpdateNode(NodeStateNormal)
	if err != nil {
		return nil, err
	}
	return client, nil
}

func (client *ManageClient) Close() {
	client.keepalive.Close()
}

func (client *ManageClient) closeConn() {
	err := client.conn.Close()
	if err != nil {
		client.RpcStreamError("rpc close error: ", err)
	}
}
