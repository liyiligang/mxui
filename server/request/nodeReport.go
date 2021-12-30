/*
 * Copyright 2021 liyiligang.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


package request

import (
	"context"
	"github.com/liyiligang/mxrpc/protoFiles/protoManage"
)


func (request *Request) RegisterNodeReport(ctx context.Context, nodeReport *protoManage.NodeReport) (*protoManage.NodeReport, error) {
	err := request.Data.NodeReportUpdateOrAdd(nodeReport)
	if err != nil {
		return nil, err
	}
	return nodeReport, nil
}

//节点报告查询
func (request *Request) ReqNodeReportFind(r *HTTPRequest) error {
	req := &protoManage.ReqNodeReportList{}
	err := request.unmarshalWithHttp(r, req)
	if err != nil {
		return err
	}
	req.LevelMax = r.UserLevel
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
	err = request.Data.NodeReportLevelCheck(r.UserLevel, req.Base.ID)
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

