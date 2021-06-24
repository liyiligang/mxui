// Copyright 2021 The Authors. All rights reserved.
// Author: liyiligang
// Date: 2021/06/23 16:36
// Description:

package request

import (
	"github.com/liyiligang/manage/app/check"
	"github.com/liyiligang/manage/app/protoFiles/protoManage"
)

//节点连接信息查询
func (request *Request) ReqNodeLinkFind(userID int64, message []byte)([]byte, error) {
	req := protoManage.ReqNodeLinkList{}
	err := req.Unmarshal(message)
	if err != nil {
		return nil, err
	}
	ans, err := request.Data.NodeLinkFind(req)
	if err != nil {
		return nil, err
	}
	pbByte, err := ans.Marshal()
	if err != nil {
		return nil, err
	}
	return pbByte, err
}

//节点连接状态更新
func (request *Request) ReqNodeLinkUpdate(nodeID int64, message []byte) {
	nodeLink := protoManage.NodeLink{}
	err := nodeLink.Unmarshal(message)
	if err != nil {
		return
	}
	err = check.BaseIDCheck(nodeLink.SourceID, nodeID)
	if err != nil {
		return
	}
	err = request.Data.NodeLinkUpdateOrAdd(&nodeLink)
	if err != nil {
		return
	}
}
