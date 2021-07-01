// Copyright 2021 The Authors. All rights reserved.
// Author: liyiligang
// Date: 2021/06/21 10:01
// Description: rpc client start

package app

import (
	"errors"
	"github.com/liyiligang/base/commonConst"
	"github.com/liyiligang/base/component/Jrpc"
	"github.com/liyiligang/base/component/Jtool"
	"github.com/liyiligang/manage/client/app/protoFiles/protoManage"
	"google.golang.org/grpc"
)

//启动rpc服务
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

//初始化grpc流
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


func (client *ManageClient) getManageAuth() ([]byte, error) {
	reqNodeLogin := protoManage.ReqNodeLogin{
		NodeGroup: protoManage.NodeGroup{Name:client.config.NodeGroupName},
		NodeType: protoManage.NodeType{Name:client.config.NodeTypeName},
		Node: protoManage.Node{Name:client.config.NodeName},
	}
	return reqNodeLogin.Marshal()
}

func (client *ManageClient) getManageServerNode(addr string) *commonConst.CommonNodeData {
	return &commonConst.CommonNodeData{NodeID: commonConst.ManageNodeID,
		NodeTypeID:   int32(commonConst.ManageNodeTypeID),
		NodeTypeName: commonConst.ManageServerName,
		NodeName:     string(commonConst.ManageServerName),
		NodeState:    int32(protoManage.State_StateNormal),
		PrivateAddr:  Jtool.GetIPFromAddr(addr),
		PublicAddr:   Jtool.GetIPFromAddr(addr),
		GrpcPort:     Jtool.GetPortFromAddr(addr)}
}

//上报缓存信息
func (client *ManageClient) getNodeStreamByte() ([]byte, error) {
	var nodeLinkList  	[]protoManage.NodeLink
	client.data.nodeLinkMap.Range(func(key, value interface{}) bool {
		nodeLink, ok := value.(*protoManage.NodeLink)
		if !ok {
			client.RpcStreamError("nodeLinkMap range error: ", errors.New("nodeLink data format is error, its type should be protoManage.NodeLink"))
			return false
		}
		nodeLinkList = append(nodeLinkList, *nodeLink)
		return true
	})
	node, err := client.GetNode()
	if err != nil {
		node = &protoManage.Node{}
	}
	reqNodeOnline := protoManage.ReqNodeOnline{
		Node:                 *node,
		NodeLinkList:         nodeLinkList,
	}
	return reqNodeOnline.Marshal()
}
