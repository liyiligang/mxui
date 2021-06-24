// Copyright 2021 The Authors. All rights reserved.
// Author: liyiligang
// Date: 2021/06/23 9:45
// Description:

package app

import (
	"errors"
	"github.com/liyiligang/manage/client/app/protoFiles/protoManage"
)

//更新节点连接
func (client *manageClient) NodeLinkUpdate(targetID int64, state protoManage.State) error {
	node, err := client.GetNode()
	if err != nil {
		return err
	}
	nodeLink := &protoManage.NodeLink{}
	v ,ok := client.data.nodeLinkMap.Load(targetID)
	if ok {
		nodeLink, ok = v.(*protoManage.NodeLink)
		if !ok {
			return errors.New("nodeLink data format is error, its type should be protoManage.NodeLink")
		}
		nodeLink.State = state
	}else {
		nodeLink = &protoManage.NodeLink{SourceID: node.Base.ID, TargetID: targetID, State: state}
		client.data.nodeLinkMap.Store(targetID, nodeLink)
	}
	return client.sendPB(protoManage.Order_NodeLinkUpdateState, nodeLink)
}
