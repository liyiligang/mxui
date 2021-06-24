// Copyright 2021 The Authors. All rights reserved.
// Author: liyiligang
// Date: 2021/06/23 16:38
// Description:

package request

import (
	"context"
	"github.com/liyiligang/manage/app/check"
	"github.com/liyiligang/manage/app/protoFiles/protoManage"
)

//节点报告注册
func (request *Request) ReqNodeReportRegister(ctx context.Context, nodeReport *protoManage.NodeReport) error {
	return request.Data.NodeReportUpdateOrAdd(nodeReport)
}

//节点报告查询
func (request *Request) ReqNodeReportFind(userID int64, message []byte)([]byte, error) {
	req := protoManage.ReqNodeReportList{}
	err := req.Unmarshal(message)
	if err != nil {
		return nil, err
	}
	ans, err := request.Data.NodeReportFind(req)
	if err != nil {
		return nil, err
	}
	pbByte, err := ans.Marshal()
	if err != nil {
		return nil, err
	}
	return pbByte, err
}

//节点报告值查询
func (request *Request) ReqNodeReportValFind(userID int64, message []byte)([]byte, error) {
	req := protoManage.ReqNodeReportValList{}
	err := req.Unmarshal(message)
	if err != nil {
		return nil, err
	}
	ans, err := request.Data.NodeReportValFind(req)
	if err != nil {
		return nil, err
	}
	pbByte, err := ans.Marshal()
	if err != nil {
		return nil, err
	}
	return pbByte, err
}

//节点报告值更新
func (request *Request) ReqNodeReportValUpdate(nodeID int64, message []byte) {
	nodeReport := protoManage.NodeReport{}
	err := nodeReport.Unmarshal(message)
	if err != nil {
		return
	}

	err = check.BaseIDCheck(nodeReport.NodeID, nodeID)
	if err != nil {
		return
	}

	//err = request.Data.NodeReportValUpdateOrAddByName(&nodeReport)
	//if err != nil {
	//	return
	//}
}
