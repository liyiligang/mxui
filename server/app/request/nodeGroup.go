// Copyright 2021 The Authors. All rights reserved.
// Author: liyiligang
// Date: 2021/06/23 16:41
// Description:

package request

import "github.com/liyiligang/klee/app/protoFiles/protoManage"

//节点组信息查询
func (request *Request) ReqNodeGroupFind(userID int64, message []byte)([]byte, error) {
	req := protoManage.ReqNodeGroupList{}
	err := req.Unmarshal(message)
	if err != nil {
		return nil, err
	}
	ans, err := request.Data.NodeGroupFind(req)
	if err != nil {
		return nil, err
	}
	pbByte, err := ans.Marshal()
	if err != nil {
		return nil, err
	}
	return pbByte, err
}

//获取节点组按ID
func (request *Request) ReqNodeGroupFindByID(userID int64, message []byte)([]byte, error) {
	req := protoManage.NodeGroup{}
	err := req.Unmarshal(message)
	if err != nil {
		return nil, err
	}
	err = request.Data.NodeGroupFindByID(&req)
	if err != nil {
		return nil, err
	}
	pbByte, err := req.Marshal()
	if err != nil {
		return nil, err
	}
	return pbByte, err
}
