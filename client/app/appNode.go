// Copyright 2021 The Authors. All rights reserved.
// Author: liyiligang
// Date: 2021/06/23 14:54
// Description:

package app

import (
	"errors"
	"github.com/liyiligang/manage/client/app/protoFiles/protoManage"
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

func (client *ManageClient) UpdateNode(state protoManage.State) error {
	node, err := client.GetNode()
	if err != nil {
		return err
	}
	node.State = state
	client.setNode(*node)
	return client.sendPB(protoManage.Order_NodeUpdateState, node)
}