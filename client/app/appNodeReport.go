// Copyright 2021 The Authors. All rights reserved.
// Author: liyiligang
// Date: 2021/06/24 14:30
// Description:

package app

import (
	"context"
	"fmt"
	"github.com/liyiligang/manage/client/app/protoFiles/protoManage"
	"time"
)

type CallReportDef func() float64

func (client *manageClient) RegisterNodeReport(name string, callReport CallReportDef, time time.Duration) error {
	node, err := client.GetNode()
	if err != nil {
		return err
	}
	callName := client.getFuncName(callReport)
	nodeReport := protoManage.NodeReport{NodeID: node.Base.ID, Name: name, Func: callName}
	ctx := context.Background()
	resNodeReport, err := client.engine.RegisterNodeReport(ctx, &nodeReport)
	if err != nil {
		return err
	}
	fmt.Println("注册节点报告成功: ", resNodeReport)
	return nil
}

func (client *manageClient) testReport() float64 {
	return 0
}
