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

//节点方法调用查询
func (request *Request) ReqNodeFuncCallFind(userID int64, message []byte)([]byte, error) {
	req := protoManage.ReqNodeFuncCallList{}
	err := req.Unmarshal(message)
	if err != nil {
		return nil, err
	}
	ans, err := request.Data.NodeFuncCallFind(req)
	if err != nil {
		return nil, err
	}
	pbByte, err := ans.Marshal()
	if err != nil {
		return nil, err
	}
	return pbByte, err
}

//获取节点方法调用按ID
func (request *Request) ReqNodeFuncCallFindByID(userID int64, message []byte)([]byte, error) {
	req := protoManage.NodeFuncCall{}
	err := req.Unmarshal(message)
	if err != nil {
		return nil, err
	}
	err = request.Data.NodeFuncCallFindByID(&req)
	if err != nil {
		return nil, err
	}
	pbByte, err := req.Marshal()
	if err != nil {
		return nil, err
	}
	return pbByte, err
}

//请求节点方法调用
func (request *Request) ReqNodeFuncCall(userID int64, message []byte)([]byte, error) {
	req := protoManage.ReqNodeFuncCall{}
	err := req.Unmarshal(message)
	if err != nil {
		return nil, err
	}
	req.NodeFuncCall.ManagerID = userID
	err = request.Data.NodeFuncCallReq(&req)
	if err != nil {
		return nil, err
	}
	pbByte, err := req.NodeFuncCall.Base.Marshal()
	if err != nil {
		return nil, err
	}
	return pbByte, err
}

//回复节点方法调用
func (request *Request) ansNodeFuncCall(nodeID int64, message []byte) error {
	ans := protoManage.AnsNodeFuncCall{}
	err := ans.Unmarshal(message)
	if err != nil {
		return err
	}
	err = request.Data.NodeFuncCallAns(&ans)
	if err != nil {
		return err
	}
	return nil
}