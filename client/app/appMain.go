// Copyright 2021 The Authors. All rights reserved.
// Author: liyiligang
// Date: 2021/06/21 10:00
// Description: client app main

package app

import (
	"errors"
	"fmt"
	"github.com/golang/protobuf/proto"
	"github.com/liyiligang/base/component/Jrpc"
	"github.com/liyiligang/manage/client/app/protoFiles/protoManage"
	"reflect"
	"runtime"
	"strings"
	"sync"
	"sync/atomic"
	"time"
)

type manageClientData struct {
	node 			  atomic.Value
	nodeLinkMap	  	  sync.Map
	nodeFuncMap	  	  sync.Map
	nodeReportMap	  sync.Map
}

type manageClient struct {
	data 	  manageClientData
	engine    protoManage.RpcEngineClient
	stream    atomic.Value
}

func InitClient() {
	reqNodeLogin := protoManage.ReqNodeLogin{
		NodeGroup: protoManage.NodeGroup{
			Name:                 "测试集群",
		},
		NodeType: protoManage.NodeType{
			Name:                 "测试类型",
		},
		Node: protoManage.Node{
			Name:                 "测试服",
		},
	}

	byte, _ := reqNodeLogin.Marshal()
	_, err := InitManageClient(Jrpc.RpcClientConfig{
		RpcBaseConfig:Jrpc.RpcBaseConfig{
			Addr: ":888",
			PublicKeyPath:"../store/cert/grpc/ca_cert.pem",
		},
		CertName: "x.test.example.com",
		Auth: byte,
		ConnectTimeOut: time.Second * 5,
	})
	if err != nil {
		fmt.Println("连接失败:", err)
		return
	}
	fmt.Println("连接成功")
}

func (client *manageClient) setNode(node protoManage.Node){
	client.data.node.Store(node)
}

func (client *manageClient) GetNode() (*protoManage.Node, error) {
	val := client.data.node.Load()
	if val == nil {
		return nil, errors.New("node data is uninitialized")
	}
	node, ok := val.(protoManage.Node)
	if !ok {
		return nil, errors.New("node data format is error, its type should be protoManage.Node")
	}
	return &node, nil
}


func (client *manageClient) setRpcStream(stream *Jrpc.RpcStream){
	client.stream.Store(stream)
}

func (client *manageClient) getRpcStream() (*Jrpc.RpcStream, error){
	val := client.stream.Load()
	if val == nil {
		return nil, errors.New("grpc stream is uninitialized")
	}
	stream, ok := val.(*Jrpc.RpcStream)
	if !ok {
		return nil, errors.New("stream format is error, its type should be *Jrpc.RpcStream")
	}
	return stream, nil
}


func (client *manageClient) sendPB(order protoManage.Order, pb proto.Message) error {
	pbByte, err := proto.Marshal(pb)
	if err != nil {
		return err
	}
	return client.send(order, pbByte)
}

func (client *manageClient) send(order protoManage.Order, data []byte) error {
	rpcStream, err := client.getRpcStream()
	if err != nil {
		return err
	}
	rpcStream.SendData(&protoManage.Message{Order: order, Message: data})
	return nil
}

func (client *manageClient) getFuncName(callFunc interface{}) string {
	funcName := runtime.FuncForPC(reflect.ValueOf(callFunc).Pointer()).Name()
	funcName = strings.TrimSuffix(funcName, "-fm")
	index := strings.LastIndex(funcName, ".")
	funcName = funcName[index+1:]
	return funcName
}