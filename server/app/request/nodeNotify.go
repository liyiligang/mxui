// Copyright 2021 The Authors. All rights reserved.
// Author: liyiligang
// Date: 2021/06/23 16:42
// Description:

package request

import "github.com/liyiligang/manage/app/protoFiles/protoManage"

//节点通知增加
func (request *Request) ReqNodeNotifyAdd(nodeID int64, message []byte) {
	nodeNotify := protoManage.NodeNotify{}
	err := nodeNotify.Unmarshal(message)
	if err != nil {
		return
	}
	request.Data.NodeNotifyAdd(&nodeNotify)
}

//节点通知查询
func (request *Request) ReqNodeNotifyFind(userID int64, message []byte)([]byte, error) {
	req := protoManage.ReqNodeNotifyList{}
	err := req.Unmarshal(message)
	if err != nil {
		return nil, err
	}
	ans, err := request.Data.NodeNotifyFind(&req)
	if err != nil {
		return nil, err
	}
	pbByte, err := ans.Marshal()
	if err != nil {
		return nil, err
	}
	return pbByte, err
}