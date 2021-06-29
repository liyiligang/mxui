// Copyright 2021 The Authors. All rights reserved.
// Author: liyiligang
// Date: 2021/06/25 17:18
// Description:

package app

import (
	"errors"
	"github.com/liyiligang/manage/client/app/protoFiles/protoManage"
)

func (client *ManageClient) execCallReport(nodeReport *protoManage.NodeReport, callReport CallReportDef) error{
	val, state := callReport()
	ans := protoManage.NodeReportVal{ReportID: nodeReport.Base.ID, Value: val, State: state}
	return client.sendPB(protoManage.Order_NodeReportUpdateVal, &ans)
}

func (client *ManageClient) UpdateReportVal(name string, nodeReportVal *protoManage.NodeReportVal) error{
	v, ok := client.data.nodeReportMap.Load(name)
	if !ok {
		return errors.New("nodeReport name is non-existent")
	}
	val, ok := v.(nodeReportMapVal)
	if !ok {
		return errors.New("val data format is error, its type should be nodeReportMapVal")
	}
	nodeReportVal.ReportID = val.nodeReportID
	return client.sendPB(protoManage.Order_NodeReportUpdateVal, nodeReportVal)
}