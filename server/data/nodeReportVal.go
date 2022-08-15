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

package data

import (
	"github.com/liyiligang/mxui/convert"
	"github.com/liyiligang/mxui/protoFiles/protoManage"
	"github.com/liyiligang/mxui/typedef/orm"
)

func (data *Data) NodeReportValFind(req *protoManage.ReqNodeReportValList) (*protoManage.AnsNodeReportValList, error) {
	ormReportValList, err := data.DB.FindNodeReportVal(req)
	if err != nil {
		return nil, err
	}
	protoNodeReportValList := convert.OrmNodeReportValListToProtoNodeReportValList(ormReportValList)
	return &protoManage.AnsNodeReportValList{NodeReportValList: protoNodeReportValList}, nil
}

func (data *Data) NodeReportValAdd(protoNodeReportVal *protoManage.NodeReportVal) error {
	ormNodeReportVal := &orm.NodeReportVal{
		ReportID: protoNodeReportVal.ReportID,
		Value: protoNodeReportVal.Value,
		State: int32(protoNodeReportVal.State),
	}
	return data.DB.AddNodeReportVal(ormNodeReportVal)
}

func (data *Data) NodeReportValDelByNodeReportID(reportID int64) error {
	return data.DB.DelNodeReportValByNodeReportID(orm.NodeReportVal{
		ReportID: reportID,
	})
}

func (data *Data) NodeReportValDelByNodeID(nodeID int64) error {
	return data.DB.DelNodeReportValByNodeID(nodeID)
}

func (data *Data) NodeReportValDelByMaxAge(maxAge int) error {
	return data.DB.DelNodeReportValByMaxAge(maxAge)
}