// Copyright 2021 The Authors. All rights reserved.
// Author: liyiligang
// Date: 2021/06/23 15:52
// Description:

package app

import (
	"context"
	"errors"
	"fmt"
	"github.com/liyiligang/manage/client/app/protoFiles/protoManage"
)

type CallFuncDef func(string) (string, protoManage.State)

func (client *ManageClient) RegisterNodeFunc(name string, callFunc CallFuncDef) error {
	if callFunc == nil {
		return errors.New("callFunc is nil")
	}
	node, err := client.GetNode()
	if err != nil {
		return err
	}
	callName := client.getFuncName(callFunc)
	nodeFunc := protoManage.NodeFunc{NodeID: node.Base.ID, Name: name, Func: callName}
	ctx, _ := context.WithTimeout(context.Background(), client.config.RequestTimeOut)
	resNodeFunc, err := client.engine.RegisterNodeFunc(ctx, &nodeFunc)
	if err != nil {
		return err
	}
	client.data.nodeFuncMap.Store(resNodeFunc.Base.ID, callFunc)
	fmt.Println("注册方法成功: ", resNodeFunc)
	return nil
}

