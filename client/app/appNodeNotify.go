// Copyright 2021 The Authors. All rights reserved.
// Author: liyiligang
// Date: 2021/06/24 17:41
// Description:

package app

import "github.com/liyiligang/manage/client/app/protoFiles/protoManage"

func (client *manageClient) SendNodeNotify(msg string, level protoManage.State) error {
	node, err := client.GetNode()
	if err != nil {
		return err
	}
	nodeNotify := &protoManage.NodeNotify{SenderID: node.Base.ID, SenderType: protoManage.NotifySenderType_NotifySenderTypeNode,
		Message: msg, State: level}
	return client.sendPB(protoManage.Order_NodeNotifyAdd, nodeNotify)
}