// Copyright 2021 The Authors. All rights reserved.
// Author: liyiligang
// Date: 2021/06/23 14:54
// Description:

package main

import (
	"errors"
	"github.com/liyiligang/client/manageClient/protoFiles/protoManage"
)

type NodeState int32
const (
	NodeStateNormal   NodeState =  NodeState(protoManage.State_StateNormal)
	NodeStateAbnormal NodeState =  NodeState(protoManage.State_StateWarn)
	NodeStateClose    NodeState =  NodeState(protoManage.State_StateError)
)

func (client *ManageClient) nodeOnline(message []byte) error {
	node := protoManage.Node{}
	err := node.Unmarshal(message)
	if err != nil {
		return err
	}
	if node.Base.ID == 0 {
		return errors.New("node id is 0")
	}
	client.setNode(node)
	return nil
}

func (client *ManageClient) UpdateNode(nodeState NodeState) error {
	node, err := client.GetNode()
	if err != nil {
		return err
	}
	node.State = protoManage.State(nodeState)
	client.setNode(*node)
	return client.sendPB(protoManage.Order_NodeUpdateState, node)
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