// Copyright 2021 The Authors. All rights reserved.
// Author: liyiligang
// Date: 2021/06/25 14:36
// Description:

package app

import (
	"errors"
	"github.com/liyiligang/manage/client/app/protoFiles/protoManage"
)

func (client *manageClient) reqNodeFuncCall(message []byte) error {
	req := protoManage.ReqNodeFuncCall{}
	err := req.Unmarshal(message)
	if err != nil {
		return err
	}
	v, ok := client.data.nodeFuncMap.Load(req.NodeFuncCall.FuncID)
	if !ok {
		return errors.New("func callback is non-existent")
	}
	callFunc, ok := v.(CallFuncDef)
	if !ok {
		return errors.New("callFunc data format is error, its type should be CallFuncDef")
	}
	res, state := callFunc(req.NodeFuncCall.Parameter)
	ans := protoManage.AnsNodeFuncCall{NodeFuncCall: protoManage.NodeFuncCall{
		Base: req.NodeFuncCall.Base, ReturnVal: res, State: state,
	}}
	return client.sendPB(protoManage.Order_NodeFuncCallAns, &ans)
}
