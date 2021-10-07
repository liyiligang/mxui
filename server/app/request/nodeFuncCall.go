// Copyright 2021 The Authors. All rights reserved.
// Author: liyiligang
// Date: 2021/06/25 11:45
// Description:

package request

import "github.com/liyiligang/klee/app/protoFiles/protoManage"

//节点方法调用查询
func (request *Request) ReqNodeFuncCallFind(userID int64, message []byte)([]byte, error) {
	req := protoManage.ReqNodeFuncCallList{}
	err := req.Unmarshal(message)
	if err != nil {
		return nil, err
	}
	err = request.Data.NodeFuncLevelCheck(userID, req.Filter.FuncID)
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
	err = request.Data.NodeFuncLevelCheck(userID, req.FuncID)
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

//获取节点方法调用参数按ID
func (request *Request) ReqNodeFuncCallParameterFindByID(userID int64, message []byte)([]byte, error) {
	req := protoManage.NodeFuncCall{}
	err := req.Unmarshal(message)
	if err != nil {
		return nil, err
	}
	err = request.Data.NodeFuncLevelCheck(userID, req.FuncID)
	if err != nil {
		return nil, err
	}
	err = request.Data.NodeFuncCallParameterFindByID(&req)
	if err != nil {
		return nil, err
	}
	pbByte, err := req.Marshal()
	if err != nil {
		return nil, err
	}
	return pbByte, err
}

//获取节点方法调用返回值按ID
func (request *Request) ReqNodeFuncCallReturnValFindByID(userID int64, message []byte)([]byte, error) {
	req := protoManage.NodeFuncCall{}
	err := req.Unmarshal(message)
	if err != nil {
		return nil, err
	}
	err = request.Data.NodeFuncLevelCheck(userID, req.FuncID)
	if err != nil {
		return nil, err
	}
	err = request.Data.NodeFuncCallReturnValFindByID(&req)
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
	err = request.Data.NodeFuncLevelCheck(userID, req.NodeFuncCall.FuncID)
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


