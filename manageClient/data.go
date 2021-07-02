// Copyright 2021 The Authors. All rights reserved.
// Author: liyiligang
// Date: 2021/06/21 10:00
// Description: client app main

package main

import (
	"errors"
	"github.com/liyiligang/base/commonConst"
	"github.com/liyiligang/base/component/Jrpc"
	"github.com/liyiligang/base/component/Jtool"
	"github.com/liyiligang/client/manageClient/protoFiles/protoManage"
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
	config    ManageClientConfig
	data      manageClientData
	conn      *grpc.ClientConn
	engine    protoManage.RpcEngineClient
	stream    atomic.Value
	keepalive *Jrpc.RpcKeepalive
}

func (client *ManageClient) getFuncName(callFunc interface{}) string {
	funcName := runtime.FuncForPC(reflect.ValueOf(callFunc).Pointer()).Name()
	funcName = strings.TrimSuffix(funcName, "-fm")
	index := strings.LastIndex(funcName, ".")
	funcName = funcName[index+1:]
	return funcName
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


