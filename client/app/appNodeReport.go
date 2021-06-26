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

type CallReportDef func() (float64, protoManage.State)

type nodeReportMapVal struct {
	nodeReportID			int64
	cancel 					context.CancelFunc
}

func (client *manageClient) RegisterNodeReport(name string, callReport CallReportDef, interval time.Duration) error {
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
	client.stopTicker(resNodeReport.Name)
	if interval > 0 {
		cancel := client.startTicker(interval, resNodeReport, callReport)
		client.data.nodeReportMap.Store(resNodeReport.Name, nodeReportMapVal{
			nodeReportID: resNodeReport.Base.ID, cancel: cancel})
	}
	fmt.Println("注册节点报告成功: ", resNodeReport)
	return nil
}

func (client *manageClient) startTicker(interval time.Duration, nodeReport *protoManage.NodeReport, callReport CallReportDef) context.CancelFunc {
	ticker := time.NewTicker(interval)
	ctx, cancel := context.WithCancel(context.Background())
	go func() {
		defer ticker.Stop()
		for {
			select {
			case <-ticker.C:
				client.execCallReport(nodeReport, callReport)
				fmt.Println("执行定时器")
			case <-ctx.Done():
				fmt.Println("定时器关闭")
				return
			}
		}
	}()
	return cancel
}

func (client *manageClient) stopTicker(nodeReportName string){
	v, ok := client.data.nodeReportMap.Load(nodeReportName)
	if ok {
		val, ok := v.(nodeReportMapVal)
		if ok {
			val.cancel()
		}
	}
}

var testVal = 0.0
func (client *manageClient) testReport() (float64, protoManage.State) {
	testVal += 1
	return testVal, protoManage.State_StateNormal
}
