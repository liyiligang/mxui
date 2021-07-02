// Copyright 2021 The Authors. All rights reserved.
// Author: liyiligang
// Date: 2021/06/25 14:36
// Description:

package main

import (
	"errors"
	"github.com/liyiligang/client/manageClient/protoFiles/protoManage"
)

type NodeFuncCallLevel int32
const (
	NodeFuncCallLevelTimeout      NodeFuncCallLevel =   1
	NodeFuncCallLevelLevelSuccess NodeFuncCallLevel =   2
	NodeFuncCallLevelLevelWarn    NodeFuncCallLevel =   3
	NodeFuncCallLevelLevelError   NodeFuncCallLevel =   4
)

func (client *ManageClient) reqNodeFuncCall(message []byte) error {
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
		Base: req.NodeFuncCall.Base, ReturnVal: res, State: protoManage.State(state),
	}}
	return client.sendPB(protoManage.Order_NodeFuncCallAns, &ans)
}
