// Copyright 2021 The Authors. All rights reserved.
// Author: liyiligang
// Date: 2021/06/24 14:30
// Description:

package main

import (
	"context"
	"github.com/liyiligang/client/manageClient/protoFiles/protoManage"
	"time"
)

type CallReportDef func() (float64, NodeReportValLevel)

type nodeReportMapVal struct {
	nodeReportID			int64
	cancel 					context.CancelFunc
}

type NodeReportLevel int32
const (
	NodeReportLevelVisitor      NodeReportLevel =   1
	NodeReportLevelMember       NodeReportLevel =   2
	NodeReportLevelManager      NodeReportLevel =   3
	NodeReportLevelSuperManager NodeReportLevel =   4
)

func (client *ManageClient) RegisterNodeReport(name string, callReport CallReportDef,
	interval time.Duration, nodeReportLevel NodeReportLevel) error {
	node, err := client.GetNode()
	if err != nil {
		return err
	}
	callName := client.getFuncName(callReport)
	nodeReport := protoManage.NodeReport{NodeID: node.Base.ID, Name: name, Func: callName, State: protoManage.State(nodeReportLevel)}
	ctx, _ := context.WithTimeout(context.Background(), client.config.RequestTimeOut)
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
	return nil
}

func (client *ManageClient) startTicker(interval time.Duration, nodeReport *protoManage.NodeReport, callReport CallReportDef) context.CancelFunc {
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

func (client *ManageClient) stopTicker(nodeReportName string){
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


