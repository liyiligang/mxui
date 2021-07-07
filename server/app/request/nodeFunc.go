// Copyright 2021 The Authors. All rights reserved.
// Author: liyiligang
// Date: 2021/06/23 16:37
// Description:

package request

import (
	"context"
	"github.com/liyiligang/manage/app/protoFiles/protoManage"
)

//节点方法注册
func (request *Request) ReqNodeFuncRegister(ctx context.Context, nodeFunc *protoManage.NodeFunc) error {
	return request.Data.NodeFuncUpdateOrAdd(nodeFunc)
}

//节点方法查询
func (request *Request) ReqNodeFuncFind(userID int64, message []byte)([]byte, error) {
	req := protoManage.ReqNodeFuncList{}
	err := req.Unmarshal(message)
	if err != nil {
		return nil, err
	}
	ans, err := request.Data.NodeFuncFind(req)
	if err != nil {
		return nil, err
	}
	pbByte, err := ans.Marshal()
	if err != nil {
		return nil, err
	}
	return pbByte, err
}

func (request *Request) ReqNodeFuncDel(userID int64, message []byte)([]byte, error) {
	req := protoManage.NodeFunc{}
	err := req.Unmarshal(message)
	if err != nil {
		return nil, err
	}
	err = request.Data.NodeFuncDel(&req)
	if err != nil {
		return nil, err
	}
	pbByte, err := req.Marshal()
	if err != nil {
		return nil, err
	}
	return pbByte, err
}


