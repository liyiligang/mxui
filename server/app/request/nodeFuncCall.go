// Copyright 2021 The Authors. All rights reserved.
// Author: liyiligang
// Date: 2021/06/25 11:45
// Description:

package request

import (
	"github.com/liyiligang/klee/app/protoFiles/protoManage"
	"github.com/liyiligang/klee/app/typedef/orm"
)

//请求节点方法调用
func (request *Request) ReqNodeFuncCall(r *HTTPRequest) error {
	req := &protoManage.ReqNodeFuncCall{}
	err := request.unmarshalWithHttp(r, req)
	if err != nil {
		return err
	}
	err = request.Data.NodeFuncLevelCheck(r.userLevel, req.NodeFuncCall.FuncID)
	if err != nil {
		return err
	}
	req.NodeFuncCall.ManagerID = r.userID
	err = request.Data.NodeFuncCallReq(req)
	if err != nil {
		request.Data.DB.AddNodeFuncCall(&orm.NodeFuncCall{
			ManagerID: req.NodeFuncCall.ManagerID,
			FuncID: req.NodeFuncCall.FuncID,
			Parameter: req.NodeFuncCall.Parameter,
			ReturnType: int32(protoManage.NodeFuncReturnType_Error),
			ReturnVal: err.Error(),
			State: int32(protoManage.State_StateError),
		})
		return err
	}
	err = request.marshalWithHttp(r, req)
	if err != nil {
		return err
	}
	return nil
}

//回复节点方法调用
func (request *Request) AnsNodeFuncCall(nodeID int64, message []byte) error {
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

//节点方法调用查询
func (request *Request) ReqNodeFuncCallFind(r *HTTPRequest) error {
	req := &protoManage.ReqNodeFuncCallList{}
	err := request.unmarshalWithHttp(r, req)
	if err != nil {
		return err
	}
	err = request.Data.NodeFuncLevelCheck(r.userLevel, req.FuncID)
	if err != nil {
		return err
	}
	ans, err := request.Data.NodeFuncCallFind(req)
	if err != nil {
		return err
	}
	err = request.marshalWithHttp(r, ans)
	if err != nil {
		return err
	}
	return nil
}

//获取节点方法调用按ID
func (request *Request) ReqNodeFuncCallFindByID(r *HTTPRequest) error {
	req := &protoManage.NodeFuncCall{}
	err := request.unmarshalWithHttp(r, req)
	if err != nil {
		return err
	}
	err = request.Data.NodeFuncLevelCheck(r.userLevel, req.FuncID)
	if err != nil {
		return err
	}
	err = request.Data.NodeFuncCallFindByID(req)
	if err != nil {
		return err
	}
	err = request.marshalWithHttp(r, req)
	if err != nil {
		return err
	}
	return nil
}

//获取节点方法调用参数按ID
func (request *Request) ReqNodeFuncCallParameterFindByID(r *HTTPRequest) error {
	req := &protoManage.NodeFuncCall{}
	err := request.unmarshalWithHttp(r, req)
	if err != nil {
		return err
	}
	err = request.Data.NodeFuncLevelCheck(r.userLevel, req.FuncID)
	if err != nil {
		return err
	}
	err = request.Data.NodeFuncCallParameterFindByID(req)
	if err != nil {
		return err
	}
	err = request.marshalWithHttp(r, req)
	if err != nil {
		return err
	}
	return nil
}

//获取节点方法调用返回值按ID
func (request *Request) ReqNodeFuncCallReturnValFindByID(r *HTTPRequest) error {
	req := &protoManage.NodeFuncCall{}
	err := request.unmarshalWithHttp(r, req)
	if err != nil {
		return err
	}
	err = request.Data.NodeFuncLevelCheck(r.userLevel, req.FuncID)
	if err != nil {
		return err
	}
	err = request.Data.NodeFuncCallReturnValFindByID(req)
	if err != nil {
		return err
	}
	err = request.marshalWithHttp(r, req)
	if err != nil {
		return err
	}
	return nil
}



