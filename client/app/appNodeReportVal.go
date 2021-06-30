// Copyright 2021 The Authors. All rights reserved.
// Author: liyiligang
// Date: 2021/06/25 17:18
// Description:

package app

import (
	"errors"
	"github.com/liyiligang/manage/client/app/protoFiles/protoManage"
)

type NodeReportValLevel int32
const (
	NodeReportValUnknown			NodeReportValLevel   =   1
	NodeReportValLevelNormal		NodeReportValLevel   =   2
	NodeReportValLevelWarn			NodeReportValLevel   =   3
	NodeReportValLevelError 		NodeReportValLevel   =   4
)

func (client *ManageClient) execCallReport(nodeReport *protoManage.NodeReport, callReport CallReportDef) error{
	val, state := callReport()
	nodeReportVal := &protoManage.NodeReportVal{ReportID: nodeReport.Base.ID, Value: val, State: protoManage.State(state)}
	return client.sendPB(protoManage.Order_NodeReportUpdateVal, nodeReportVal)
}

func (client *ManageClient) UpdateReportVal(name string, value float64, nodeReportValLevel NodeReportValLevel) error{
	v, ok := client.data.nodeReportMap.Load(name)
	if !ok {
		return errors.New("nodeReport name is non-existent")
	}
	val, ok := v.(nodeReportMapVal)
	if !ok {
		return errors.New("val data format is error, its type should be nodeReportMapVal")
	}
	nodeReportVal := &protoManage.NodeReportVal{ReportID: val.nodeReportID, Value: value, State: protoManage.State(nodeReportValLevel)}
	return client.sendPB(protoManage.Order_NodeReportUpdateVal, nodeReportVal)
}