// Copyright 2021 The Authors. All rights reserved.
// Author: liyiligang
// Date: 2021/06/23 16:38
// Description:

package request

import (
	"github.com/liyiligang/klee/app/protoFiles/protoManage"
)

//节点报告查询
func (request *Request) ReqNodeReportFind(userID int64, message []byte)([]byte, error) {
	req := protoManage.ReqNodeReportList{}
	err := req.Unmarshal(message)
	if err != nil {
		return nil, err
	}
	level, err := request.Data.ManagerFindLevelByID(userID)
	if err != nil {
		return nil, err
	}
	req.LevelMax = level
	ans, err := request.Data.NodeReportFind(&req)
	if err != nil {
		return nil, err
	}
	pbByte, err := ans.Marshal()
	if err != nil {
		return nil, err
	}
	return pbByte, err
}

//刪除节点报告
func (request *Request) ReqNodeReportDel(userID int64, message []byte)([]byte, error) {
	req := protoManage.NodeReport{}
	err := req.Unmarshal(message)
	if err != nil {
		return nil, err
	}
	err = request.Data.NodeReportLevelCheck(userID, req.Base.ID)
	if err != nil {
		return nil, err
	}
	err = request.Data.NodeReportDel(&req)
	if err != nil {
		return nil, err
	}
	pbByte, err := req.Marshal()
	if err != nil {
		return nil, err
	}
	return pbByte, err
}

