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
	"github.com/liyiligang/mxui/check"
	"github.com/liyiligang/mxui/convert"
	"github.com/liyiligang/mxui/protoFiles/protoManage"
	"github.com/liyiligang/mxui/typedef/orm"
	"github.com/pkg/errors"
	"gorm.io/gorm"
)

func (data *Data) NodeReportAdd(protoNodeReport *protoManage.NodeReport) error {
	if err := check.NodeReportCheck(protoNodeReport); err != nil {
		return err
	}
	ormNodeReport := &orm.NodeReport{NodeID: protoNodeReport.NodeID, Name: protoNodeReport.Name,
		Func: protoNodeReport.Func, Schema: protoNodeReport.Schema, Type: int32(protoNodeReport.Type),
		Interval: protoNodeReport.Interval,
		Level: int32(protoNodeReport.Level), State: int32(protoManage.State_StateNormal)}
	if err := data.DB.AddNodeReport(ormNodeReport); err != nil {
		return err
	}
	convert.OrmBaseToProtoBase(&ormNodeReport.Base, &protoNodeReport.Base)
	return nil
}

func (data *Data) NodeReportDel(protoNodeReport *protoManage.NodeReport) error {
	err := data.NodeReportValDelByNodeReportID(protoNodeReport.Base.ID)
	if err != nil {
		return err
	}
	return data.DB.DelNodeReport(orm.NodeReport{Base: orm.Base{ID: protoNodeReport.Base.ID}})
}

func (data *Data) NodeReportDelAllByNodeID(protoNodeReport *protoManage.NodeReport) error {
	err := data.NodeReportValDelByNodeID(protoNodeReport.NodeID)
	if err != nil {
		return err
	}
	return data.DB.DelAllNodeReportByNodeID(orm.NodeReport{NodeID: protoNodeReport.NodeID})
}

func (data *Data) NodeReportUpdateOrAdd(protoNodeReport *protoManage.NodeReport) error {
	err := data.NodeReportFindIDByIndex(protoNodeReport)
	if err != nil {
		if errors.Is(err, gorm.ErrRecordNotFound) {
			return data.NodeReportAdd(protoNodeReport)
		}
		return err
	}
	return data.NodeReportInfoUpdate(protoNodeReport)
}

func (data *Data) NodeReportFindByID(protoNodeReport *protoManage.NodeReport) error {
	ormNodeReport, err := data.DB.FindNodeReportByID(orm.NodeReport{Base: orm.Base{ID: protoNodeReport.Base.ID}})
	if err != nil {
		return err
	}
	convert.OrmNodeReportToProtoNodeReport(ormNodeReport, protoNodeReport)
	return nil
}

func (data *Data) NodeReportFindIDByIndex(protoNodeReport *protoManage.NodeReport) error {
	ormNodeReport, err :=data.DB.FindNodeReportByIndex(orm.NodeReport{
		NodeID: protoNodeReport.NodeID, Name: protoNodeReport.Name})
	if err != nil {
		return err
	}
	convert.OrmBaseToProtoBase(&ormNodeReport.Base, &protoNodeReport.Base)
	return nil
}

func (data *Data) NodeReportFind(req *protoManage.ReqNodeReportList) (*protoManage.AnsNodeReportList, error) {
	ormReportList, err := data.DB.FindNodeReport(req)
	if err != nil {
		return nil, err
	}
	protoNodeReportList := convert.OrmNodeReportListToProtoNodeReportList(ormReportList)
	ormNodeList, err := data.DB.FindNodeByNodeReport(req)
	if err != nil {
		return nil, err
	}
	protoNodeList := convert.OrmNodeListToProtoNodeList(ormNodeList)
	count, err := data.DB.FindNodeReportCount(req)
	if err != nil {
		return nil, err
	}
	return &protoManage.AnsNodeReportList{NodeReportList: protoNodeReportList,
		NodeList: protoNodeList, Length:count}, nil
}

func (data *Data) NodeReportLevelCheck(userLevel protoManage.Level, funcID int64) error {
	protoNodeReport := &protoManage.NodeReport{Base: protoManage.Base{ID: funcID}}
	err := data.NodeReportFindByID(protoNodeReport)
	if err != nil {
		return err
	}
	if protoNodeReport.Level >  userLevel {
		return errors.New("permission denied")
	}
	return nil
}

func (data *Data) NodeReportInfoUpdate(protoNodeReport *protoManage.NodeReport) error {
	return data.DB.UpdateNodeReportInfo(orm.NodeReport{Base: orm.Base{ID: protoNodeReport.Base.ID},
		Func: protoNodeReport.Func, Schema: protoNodeReport.Schema, Type: int32(protoNodeReport.Type),
		Interval: protoNodeReport.Interval,
		Level: int32(protoNodeReport.Level), State: int32(protoManage.State_StateNormal)})
}

func (data *Data) NodeReportStateUpdateByNodeID(protoNodeReport *protoManage.NodeReport) error {
	return data.DB.UpdateNodeReportStateByNodeID(orm.NodeReport{NodeID: protoNodeReport.NodeID,
		State: int32(protoNodeReport.State)})
}


