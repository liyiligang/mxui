// Copyright 2021 The Authors. All rights reserved.
// Author: liyiligang
// Date: 2021/06/25 17:36
// Description:

package db

import (
	"errors"
	"github.com/liyiligang/manage/app/protoFiles/protoManage"
	"github.com/liyiligang/manage/app/typedef/orm"
	"gorm.io/gorm"
)

//获取节点报告值信息
func (db *Server) FindNodeReportVal(filter protoManage.Filter) ([]orm.NodeReportVal, error) {
	tx := db.Gorm.Offset(int(filter.PageSize*filter.PageNum)).Limit(int(filter.PageSize))
	tx = db.SetFilter(tx, filter)
	var NodeReportValList []orm.NodeReportVal
	err := tx.Order("id desc").Find(&NodeReportValList).Error
	if errors.Is(err, gorm.ErrRecordNotFound) {
		return NodeReportValList, nil
	}
	return NodeReportValList, err
}

//新增节点报告值
func (db *Server) AddNodeReportVal(nodeReportVal *orm.NodeReportVal) error {
	return db.Gorm.Create(nodeReportVal).Error
}

func (db *Server) DelNodeReportValByNodeReportID(nodeReportVal orm.NodeReportVal) error {
	return db.Gorm.Where("reportID = ?", nodeReportVal.ReportID).Delete(&nodeReportVal).Error
}

func (db *Server) DelNodeReportValByNodeID(nodeID int64) error {
	subQuery1 := db.Gorm.Select("id").Model(&orm.NodeReport{}).Where("nodeID=?", nodeID)
	return db.Gorm.Where("reportID = any(?)", subQuery1).Delete(&orm.NodeReportVal{}).Error
}

//获取节点报告中节点报告ID对应的最后一次报告值
func (db *Server) FindLastNodeReportValByNodeReport(filter protoManage.Filter) ([]orm.NodeReportVal, error) {
	tx := db.Gorm.Offset(int(filter.PageSize*filter.PageNum)).Limit(int(filter.PageSize))
	tx = db.SetFilter(tx, filter)
	subQuery1 := tx.Model(&orm.NodeReport{})
	subQuery2 := db.Gorm.Select("t.id").Table("(?) as t", subQuery1)
	subQuery3 := db.Gorm.Select("max(id)").Table("nodeReportVal").
		Where("reportID = any(?)", subQuery2).Group("reportID")
	var nodeReportValList []orm.NodeReportVal
	err := db.Gorm.Where("id = any(?)", subQuery3).Find(&nodeReportValList).Error
	return nodeReportValList, err
}