// Copyright 2021 The Authors. All rights reserved.
// Author: liyiligang
// Date: 2021/06/23 16:41
// Description:

package request

import "github.com/liyiligang/klee/app/protoFiles/protoManage"

//节点类型信息查询
func (request *Request) ReqNodeTypeFind(userID int64, message []byte)([]byte, error) {
	req := protoManage.ReqNodeTypeList{}
	err := req.Unmarshal(message)
	if err != nil {
		return nil, err
	}
	ans, err := request.Data.NodeTypeFind(req)
	if err != nil {
		return nil, err
	}
	pbByte, err := ans.Marshal()
	if err != nil {
		return nil, err
	}
	return pbByte, err
}

//获取节点类型按ID
func (request *Request) ReqNodeTypeFindByID(userID int64, message []byte)([]byte, error) {
	req := protoManage.NodeType{}
	err := req.Unmarshal(message)
	if err != nil {
		return nil, err
	}
	err = request.Data.NodeTypeFindByID(&req)
	if err != nil {
		return nil, err
	}
	pbByte, err := req.Marshal()
	if err != nil {
		return nil, err
	}
	return pbByte, err
}
