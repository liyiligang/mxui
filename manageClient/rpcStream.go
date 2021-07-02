// Copyright 2021 The Authors. All rights reserved.
// Author: liyiligang
// Date: 2021/07/02 17:42
// Description: rpc stream func

package main

import (
	"errors"
	"github.com/golang/protobuf/proto"
	"github.com/liyiligang/base/component/Jrpc"
	"github.com/liyiligang/client/manageClient/protoFiles/protoManage"
	"google.golang.org/grpc"
)

func (client *ManageClient) initManageClientStream() error {
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

func (client *ManageClient) closeStream() {
	rpcStream, err := client.getRpcStream()
	if err != nil {
		client.RpcStreamError("rpc stream close error: ", err)
		return
	}
	rpcStream.Close()
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
