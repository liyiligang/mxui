// Copyright 2021 The Authors. All rights reserved.
// Author: liyiligang
// Date: 2021/11/23 14:55
// Description:

package request

import "github.com/liyiligang/klee/app/protoFiles/protoManage"

//节点资源校验
func (request *Request) ReqNodeResourceCheck(userID int64, message []byte)([]byte, error) {
	req := protoManage.NodeResourceCache{}
	err := req.Unmarshal(message)
	if err != nil {
		return nil, err
	}
	err = request.Data.ReqNodeResourceCheck(&req)
	if err != nil {
		return nil, err
	}
	pbByte, err := req.Marshal()
	if err != nil {
		return nil, err
	}
	return pbByte, err
}

//节点资源删除
func (request *Request) ReqNodeResourceDel(userID int64, message []byte)([]byte, error) {
	req := protoManage.NodeResourceCache{}
	err := req.Unmarshal(message)
	if err != nil {
		return nil, err
	}
	err = request.Data.ReqNodeResourceDel(&req)
	if err != nil {
		return nil, err
	}
	pbByte, err := req.Marshal()
	if err != nil {
		return nil, err
	}
	return pbByte, err
}
