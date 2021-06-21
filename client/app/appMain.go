// Copyright 2021 The Authors. All rights reserved.
// Author: liyiligang
// Date: 2021/06/21 10:00
// Description: client app main

package app

import (
	"fmt"
	"github.com/liyiligang/base/component/Jrpc"
	"github.com/liyiligang/manage/client/app/protoFiles/protoManage"
	"time"
)

type manageClient struct {
	engine    protoManage.RpcEngineClient
}


func InitClient() {
	_, err := InitManageClient(Jrpc.RpcClientConfig{
		RpcBaseConfig:Jrpc.RpcBaseConfig{
			Addr: ":888",
			PublicKeyPath:"../store/cert/grpc/ca_cert.pem",
		},
		CertName: "x.test.example.com",
		Auth: nil,
		ConnectTimeOut: time.Second * 5,
	})
	if err != nil {
		fmt.Println("连接失败:", err)
		return
	}
	fmt.Println("连接成功")
}

