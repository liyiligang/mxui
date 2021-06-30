// Copyright 2021 The Authors. All rights reserved.
// Author: liyiligang
// Date: 2021/06/21 10:00
// Description: client app main

package app

import (
	"errors"
	"github.com/golang/protobuf/proto"
	"github.com/liyiligang/base/component/Jrpc"
	"github.com/liyiligang/manage/client/app/protoFiles/protoManage"
	"google.golang.org/grpc"
	"reflect"
	"runtime"
	"strings"
	"sync"
	"sync/atomic"
	"time"
)

type ManageClientConfig struct {
	Addr           string
	PublicKeyPath  string
	CertName       string
	NodeGroupName  string
	NodeTypeName   string
	NodeName  	   string
	ConnectTimeOut time.Duration
	RequestTimeOut time.Duration
	KeepaliveTime  time.Duration
	ErrorCall	   func(text string, err error)
}

type manageClientData struct {
	node 			  atomic.Value
	nodeLinkMap	  	  sync.Map
	nodeFuncMap	  	  sync.Map
	nodeReportMap	  sync.Map
}

type ManageClient struct {
	config          ManageClientConfig
	data 	  		manageClientData
	conn            *grpc.ClientConn
	engine    		protoManage.RpcEngineClient
	stream    		atomic.Value
	keepalive	    *Jrpc.RpcKeepalive
}

func (client *ManageClient) setNode(node protoManage.Node){
	client.data.node.Store(node)
}

func (client *ManageClient) GetNode() (*protoManage.Node, error) {
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


func (client *ManageClient) setRpcStream(stream *Jrpc.RpcStream){
	client.stream.Store(stream)
}

func (client *ManageClient) getRpcStream() (*Jrpc.RpcStream, error){
	val := client.stream.Load()
	if val == nil {
		return nil, errors.New("grpc stream is uninitialized")
	}
	stream, ok := val.(*Jrpc.RpcStream)
	if !ok {
		return nil, errors.New("stream format is error, its type should be *Jrpc.RpcStream")
	}
	if stream == nil {
		return nil, errors.New("grpc stream is closed")
	}
	return stream, nil
}


func (client *ManageClient) sendPB(order protoManage.Order, pb proto.Message) error {
	pbByte, err := proto.Marshal(pb)
	if err != nil {
		return err
	}
	return client.send(order, pbByte)
}

func (client *ManageClient) send(order protoManage.Order, data []byte) error {
	rpcStream, err := client.getRpcStream()
	if err != nil {
		return err
	}
	rpcStream.SendData(&protoManage.Message{Order: order, Message: data})
	return nil
}

func (client *ManageClient) getFuncName(callFunc interface{}) string {
	funcName := runtime.FuncForPC(reflect.ValueOf(callFunc).Pointer()).Name()
	funcName = strings.TrimSuffix(funcName, "-fm")
	index := strings.LastIndex(funcName, ".")
	funcName = funcName[index+1:]
	return funcName
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

func (client *ManageClient) CloseStream() {
	rpcStream, err := client.getRpcStream()
	if err != nil {
		client.RpcStreamError("rpc stream close error: ", err)
		return
	}
	rpcStream.Close()
}



