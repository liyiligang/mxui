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
	var cancel context.CancelFunc
	if interval > 0 &&  callReport != nil{
		cancel = client.startTicker(interval, resNodeReport, callReport)
	}
	client.data.nodeReportMap.Store(resNodeReport.Name, nodeReportMapVal{
		nodeReportID: resNodeReport.Base.ID, cancel: cancel})
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
				err := client.execCallReport(nodeReport, callReport)
				if err != nil {
					client.RpcStreamError("node report call error: ", err)
				}
			case <-ctx.Done():
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
			if val.cancel != nil {
				val.cancel()
			}
		}
	}
}


