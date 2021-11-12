// Copyright 2021 The Authors. All rights reserved.
// Author: liyiligang
// Date: 2021/06/25 17:36
// Description:

package db

import (
	"errors"
	"github.com/liyiligang/klee/app/protoFiles/protoManage"
	"github.com/liyiligang/klee/app/typedef/orm"
	"gorm.io/gorm"
)

//获取节点报告值信息
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
func (db *Server) FindLastNodeReportValByNodeReport(req *protoManage.ReqNodeReportValList) ([]orm.NodeReportVal, error) {
	tx := db.Gorm.Offset(int(req.Page.Count*req.Page.Num)).Limit(int(req.Page.Count))
	tx = db.SetNodeReportValFilter(tx, req)
	subQuery1 := tx.Model(&orm.NodeReport{})
	subQuery2 := db.Gorm.Select("t.id").Table("(?) as t", subQuery1)
	subQuery3 := db.Gorm.Select("max(id)").Table("nodeReportVal").
		Where("reportID = any(?)", subQuery2).Group("reportID")
	var nodeReportValList []orm.NodeReportVal
	err := db.Gorm.Where("id = any(?)", subQuery3).Find(&nodeReportValList).Error
	return nodeReportValList, err
}

//节点报告过滤器
func (db *Server) SetNodeReportValFilter(tx *gorm.DB, req *protoManage.ReqNodeReportValList) *gorm.DB {
	if req.ReportID != 0 {
		tx.Where("reportID = ?", req.ReportID)
	}
	if req.ID != 0 {
		tx.Where("id > ?", req.ID)
	}
	return tx
}