// Copyright 2021 The Authors. All rights reserved.
// Author: liyiligang
// Date: 2021/06/25 17:31
// Description:

package request

import "github.com/liyiligang/manage/app/protoFiles/protoManage"

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
func (request *Request) ReqNodeReportValAdd(nodeID int64, message []byte) {
	nodeReportVal := protoManage.NodeReportVal{}
	err := nodeReportVal.Unmarshal(message)
	if err != nil {
		return
	}
	err = request.Data.NodeReportValAdd(&nodeReportVal)
	if err != nil {
		return
	}
}
