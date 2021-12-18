// Copyright 2021 The Authors. All rights reserved.
// Author: liyiligang
// Date: 2021/06/25 17:31
// Description:

package request

import "github.com/liyiligang/klee/app/protoFiles/protoManage"

//节点报告值查询
func (request *Request) ReqNodeReportValFind(r *HTTPRequest) error {
	req := &protoManage.ReqNodeReportValList{}
	err := request.unmarshalWithHttp(r, req)
	if err != nil {
		return err
	}
	err = request.Data.NodeReportLevelCheck(r.userLevel, req.ReportID)
	if err != nil {
		return err
	}
	ans, err := request.Data.NodeReportValFind(req)
	if err != nil {
		return err
	}
	err = request.marshalWithHttp(r, ans)
	if err != nil {
		return err
	}
	return nil
}

//节点报告值更新
func (request *Request) ReqNodeReportValAdd(nodeID int64, message []byte) error {
	nodeReportVal := protoManage.NodeReportVal{}
	err := nodeReportVal.Unmarshal(message)
	if err != nil {
		return err
	}
	err = request.Data.NodeReportValAdd(&nodeReportVal)
	if err != nil {
		return err
	}
	return nil
}


