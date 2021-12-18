// Copyright 2021 The Authors. All rights reserved.
// Author: liyiligang
// Date: 2021/06/23 16:38
// Description:

package request

import (
	"github.com/liyiligang/klee/app/protoFiles/protoManage"
)

//节点报告查询
func (request *Request) ReqNodeReportFind(r *HTTPRequest) error {
	req := &protoManage.ReqNodeReportList{}
	err := request.unmarshalWithHttp(r, req)
	if err != nil {
		return err
	}
	req.LevelMax = r.userLevel
	ans, err := request.Data.NodeReportFind(req)
	if err != nil {
		return err
	}
	err = request.marshalWithHttp(r, ans)
	if err != nil {
		return err
	}
	return nil
}

//刪除节点报告
func (request *Request) ReqNodeReportDel(r *HTTPRequest) error {
	req := &protoManage.NodeReport{}
	err := request.unmarshalWithHttp(r, req)
	if err != nil {
		return err
	}
	err = request.Data.NodeReportLevelCheck(r.userLevel, req.Base.ID)
	if err != nil {
		return err
	}
	err = request.Data.NodeReportDel(req)
	if err != nil {
		return err
	}
	err = request.marshalWithHttp(r, req)
	if err != nil {
		return err
	}
	return nil
}

