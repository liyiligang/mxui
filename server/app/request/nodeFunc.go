// Copyright 2021 The Authors. All rights reserved.
// Author: liyiligang
// Date: 2021/06/23 16:37
// Description:

package request

import (
	"github.com/liyiligang/klee/app/protoFiles/protoManage"
)

//节点方法查询
func (request *Request) ReqNodeFuncFind(r *HTTPRequest) error {
	req := &protoManage.ReqNodeFuncList{}
	err := request.unmarshalWithHttp(r, req)
	if err != nil {
		return err
	}
	req.LevelMax = r.userLevel
	ans, err := request.Data.NodeFuncFind(req)
	if err != nil {
		return err
	}
	err = request.marshalWithHttp(r, ans)
	if err != nil {
		return err
	}
	return nil
}

//刪除节点方法
func (request *Request) ReqNodeFuncDel(r *HTTPRequest) error {
	req := &protoManage.NodeFunc{}
	err := request.unmarshalWithHttp(r, req)
	if err != nil {
		return err
	}
	err = request.Data.NodeFuncDel(req)
	if err != nil {
		return err
	}
	err = request.marshalWithHttp(r, req)
	if err != nil {
		return err
	}
	return nil
}


