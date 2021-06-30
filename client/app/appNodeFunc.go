// Copyright 2021 The Authors. All rights reserved.
// Author: liyiligang
// Date: 2021/06/23 15:52
// Description:

package app

import (
	"context"
	"errors"
	"github.com/liyiligang/manage/client/app/protoFiles/protoManage"
)

type NodeFuncLevel int32
const (
	NodeFuncLevel1 		NodeFuncLevel   =   1
	NodeFuncLevel2 		NodeFuncLevel   =   2
	NodeFuncLevel3 		NodeFuncLevel   =   3
	NodeFuncLevel4 		NodeFuncLevel   =   4
)

type CallFuncDef func(string) (string, NodeFuncCallLevel)

func (client *ManageClient) RegisterNodeFunc(name string, callFunc CallFuncDef, nodeFuncLevel NodeFuncLevel) error {
	if callFunc == nil {
		return errors.New("callFunc is nil")
	}
	node, err := client.GetNode()
	if err != nil {
		return err
	}
	callName := client.getFuncName(callFunc)
	nodeFunc := protoManage.NodeFunc{NodeID: node.Base.ID, Name: name, Func: callName, State: protoManage.State(nodeFuncLevel)}
	ctx, _ := context.WithTimeout(context.Background(), client.config.RequestTimeOut)
	resNodeFunc, err := client.engine.RegisterNodeFunc(ctx, &nodeFunc)
	if err != nil {
		return err
	}
	client.data.nodeFuncMap.Store(resNodeFunc.Base.ID, callFunc)
	return nil
}

