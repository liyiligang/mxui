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
package db

import (
	"errors"
	"github.com/liyiligang/mxui/protoFiles/protoManage"
	"github.com/liyiligang/mxui/typedef/orm"
	"gorm.io/gorm"
)

func (db *Server) FindNodeReportVal(req *protoManage.ReqNodeReportValList) ([]orm.NodeReportVal, error) {
	tx := db.Gorm.Offset(int(req.Page.Count*req.Page.Num)).Limit(int(req.Page.Count))
	tx = db.SetNodeReportValFilter(tx, req)
	var NodeReportValList []orm.NodeReportVal
	err := tx.Order("id desc").Find(&NodeReportValList).Error
	if errors.Is(err, gorm.ErrRecordNotFound) {
		return NodeReportValList, nil
	}
	return NodeReportValList, err
}

func (db *Server) AddNodeReportVal(nodeReportVal *orm.NodeReportVal) error {
	return db.Gorm.Create(nodeReportVal).Error
}

func (db *Server) DelNodeReportValByNodeReportID(nodeReportVal orm.NodeReportVal) error {
	return db.Gorm.Where("reportID = ?", nodeReportVal.ReportID).Delete(&nodeReportVal).Error
}

func (db *Server) DelNodeReportValByNodeID(nodeID int64) error {
	subQuery1 := db.Gorm.Select("id").Model(&orm.NodeReport{}).Where("nodeID=?", nodeID)
	return db.Gorm.Where("reportID in(?)", subQuery1).Delete(&orm.NodeReportVal{}).Error
}

func (db *Server) FindLastNodeReportValByNodeReport(req *protoManage.ReqNodeReportValList) ([]orm.NodeReportVal, error) {
	tx := db.Gorm.Offset(int(req.Page.Count*req.Page.Num)).Limit(int(req.Page.Count))
	tx = db.SetNodeReportValFilter(tx, req)
	subQuery1 := tx.Model(&orm.NodeReport{})
	subQuery2 := db.Gorm.Select("t.id").Table("(?) as t", subQuery1)
	subQuery3 := db.Gorm.Select("max(id)").Table("nodeReportVal").
		Where("reportID in(?)", subQuery2).Group("reportID")
	var nodeReportValList []orm.NodeReportVal
	err := db.Gorm.Where("id in(?)", subQuery3).Find(&nodeReportValList).Error
	return nodeReportValList, err
}

func (db *Server) SetNodeReportValFilter(tx *gorm.DB, req *protoManage.ReqNodeReportValList) *gorm.DB {
	if req.ReportID != 0 {
		tx.Where("reportID = ?", req.ReportID)
	}
	if req.ID != 0 {
		tx.Where("id > ?", req.ID)
	}
	return tx
}