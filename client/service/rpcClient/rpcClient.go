// Copyright 2019 The Authors. All rights reserved.
// Author: liyiligang
// Date: 2020/2/29 20:35
// Description: rpc客户端助手

package rpcClient

import (
	"base/commonConst"
	"base/component/Jlog"
	"base/component/Jtool"
	"context"
	"errors"
	"google.golang.org/grpc"
	"google.golang.org/grpc/connectivity"
	"strconv"
	"time"
)

type RpcClientFunc interface {
	Connected(client *RpcClient)
	Disconnected(client *RpcClient)
}

type RpcClient struct {
	ServerNode      *commonConst.CommonNodeData //服务端节点
	Conn            *grpc.ClientConn            //rpc连接
	Engine          interface{}                 //rpc接口组
	StreamClient    interface{}                 //流客户端
	ReConnectCnt    int32                       //重连接次数
	IsCancel        bool                        //是否主动关闭连接
	HystrixName     string                      //断路器名
	Data            interface{}                 //自定义数据
	cancelStatePoll context.CancelFunc          //取消状态监控
	isPause         bool                        //维护状态
	isDisconnect    bool                        //断线状态
}

type RpcClientMap struct {
	clientManage   Jtool.ConnManage
	Call           RpcClientFunc
	UpdateInterval time.Duration
}

func (rpc *RpcClientMap) AddRpcClient(client *RpcClient) {
	go rpc.pollNodeConnectState(client)
	rpc.clientManage.Store(client.ServerNode.NodeID, client)
}

func (rpc *RpcClientMap) FindRpcClient(id int32) *RpcClient {
	client, ok := rpc.clientManage.Load(id)
	if ok {
		return client.(*RpcClient)
	}
	return nil
}

func (rpc *RpcClientMap) PauseRpcClient(id int32, isActive bool) error {
	client := rpc.FindRpcClient(id)
	if client == nil {
		return errors.New("找不到指定ID:" + strconv.FormatInt(int64(id), 10))
	}

	if isActive {
		client.isPause = true
	} else {
		client.isDisconnect = true
	}
	rpc.clientManage.DelConnList(id)
	return nil
}

func (rpc *RpcClientMap) RecoveryRpcClient(id int32, isActive bool) error {
	client := rpc.FindRpcClient(id)
	if client == nil {
		return errors.New("找不到指定ID:" + strconv.FormatInt(int64(id), 10))
	}

	if isActive {
		client.isPause = false
	} else {
		client.isDisconnect = false
	}

	if client.isPause == false && client.isDisconnect == false {
		rpc.clientManage.AddConnList(id)
	}
	return nil
}

func (rpc *RpcClientMap) RandRpcClient() *RpcClient {
	client, ok := rpc.clientManage.Rand()
	if ok {
		return client.(*RpcClient)
	}
	Jlog.Warn("随机失败, clientMap为空")
	return nil
}

func (rpc *RpcClientMap) PollingRpcClient() *RpcClient {
	client, ok := rpc.clientManage.Polling()
	if ok {
		return client.(*RpcClient)
	}
	Jlog.Warn("轮询失败, clientMap为空")
	return nil
}

func (rpc *RpcClientMap) FindAllRpcClient(f func(key, value interface{}) bool) {
	rpc.clientManage.LoadAll(f)
}

func (rpc *RpcClientMap) DelRpcClient(id int32) error {
	client := rpc.FindRpcClient(id)
	if client == nil {
		Jlog.Warn("删除RpcClient失败", "id", id)
		return errors.New("找不到指定ID:" + strconv.FormatInt(int64(id), 10))
	}
	client.cancelStatePoll()
	rpc.clientManage.Delete(id)
	client.Conn.Close()
	return nil
}

func (rpc *RpcClientMap) DelAllRpcClient() {
	rpc.clientManage.LoadAll(func(key, value interface{}) bool {
		rpc.DelRpcClient(key.(int32))
		return true
	})
}

func (rpc *RpcClientMap) GetLen() int {
	return rpc.clientManage.GetLen()
}

func (rpc *RpcClientMap) pollNodeConnectState(client *RpcClient) {
	isConnected := false
	client.ReConnectCnt = -1
	ctx, cancel := context.WithCancel(context.Background())
	client.cancelStatePoll = cancel

	for {
		select {
		case <-ctx.Done():
			client.IsCancel = true
			rpc.Call.Disconnected(client)
			return
		default:
			state := client.Conn.GetState()
			if state == connectivity.Ready {
				if isConnected == false {
					client.ReConnectCnt++
					rpc.RecoveryRpcClient(client.ServerNode.NodeID, false)
					rpc.Call.Connected(client)
					isConnected = true
				}
			} else {
				if isConnected == true {
					client.IsCancel = false
					rpc.PauseRpcClient(client.ServerNode.NodeID, false)
					rpc.Call.Disconnected(client)
					isConnected = false
				}
			}

			time.Sleep(rpc.UpdateInterval)
		}
	}
}
