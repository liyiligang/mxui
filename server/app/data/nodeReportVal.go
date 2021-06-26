// Copyright 2021 The Authors. All rights reserved.
// Author: liyiligang
// Date: 2021/06/25 17:35
// Description:

package data

import (
	"github.com/liyiligang/manage/app/convert"
	"github.com/liyiligang/manage/app/protoFiles/protoManage"
	"github.com/liyiligang/manage/app/typedef/orm"
)

//查找节点报告值信息
func (data *Data) NodeReportValFind(req protoManage.ReqNodeReportValList) (*protoManage.AnsNodeReportValList, error) {
	ormReportValList, err := data.DB.FindNodeReportVal(req.Filter)
	if err != nil {
		return nil, err
	}
	protoNodeReportValList := convert.OrmNodeReportValListToProtoNodeReportValList(ormReportValList)
	return &protoManage.AnsNodeReportValList{NodeReportValList: protoNodeReportValList}, nil
}

//更新节点报告值
func (data *Data) NodeReportValAdd(protoNodeReportVal *protoManage.NodeReportVal) error {
	ormNodeReportVal := &orm.NodeReportVal{
		ReportID: protoNodeReportVal.ReportID,
		Value: protoNodeReportVal.Value,
		State: int32(protoNodeReportVal.State),
	}
	return data.DB.AddNodeReportVal(ormNodeReportVal)
}
