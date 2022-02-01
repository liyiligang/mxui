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
	"github.com/liyiligang/base/component/Jtool"
	"github.com/liyiligang/mxui/protoFiles/protoManage"
	"github.com/liyiligang/mxui/typedef/orm"
	"github.com/pkg/errors"
	"gorm.io/gorm"
)

//新增节点报告
func (db *Server) AddNodeReport(nodeReport *orm.NodeReport) error {
	return db.Gorm.Create(nodeReport).Error
}

//删除节点报告
func (db *Server) DelNodeReport(nodeReport orm.NodeReport) error {
	return db.Gorm.Delete(&nodeReport).Error
}

//按节点ID删除所有节点报告
func (db *Server) DelAllNodeReportByNodeID(nodeReport orm.NodeReport) error {
	return db.Gorm.Where("nodeID = ?", nodeReport.NodeID).Delete(orm.NodeReport{}).Error
}

//按ID更新指定节点报告信息
func (db *Server) UpdateNodeReportInfo(nodeReport orm.NodeReport) error {
	return db.Gorm.Model(&nodeReport).Updates(map[string]interface{}{
		"func": nodeReport.Func, "schema":nodeReport.Schema, "type":nodeReport.Type,
		"interval":nodeReport.Interval, "level": nodeReport.Level, "state": nodeReport.State}).Error
}

//按节点ID更新节点报告状态
func (db *Server) UpdateNodeReportStateByNodeID(nodeReport orm.NodeReport) error {
	return db.Gorm.Model(&nodeReport).Where("nodeID = ?", nodeReport.NodeID).
		Updates(map[string]interface{}{"state": nodeReport.State}).Error
}

//获取节点报告信息
func (db *Server) FindNodeReport(req *protoManage.ReqNodeReportList) ([]orm.NodeReport, error) {
	tx := db.Gorm.Offset(int(req.Page.Count*req.Page.Num)).Limit(int(req.Page.Count))
	tx = db.SetNodeReportFilter(tx, req)
	var nodeReportList []orm.NodeReport
	err := tx.Find(&nodeReportList).Error
	if errors.Is(err, gorm.ErrRecordNotFound) {
		return nodeReportList, nil
	}
	return nodeReportList, err
}

//获取节点报告计数
func (db *Server) FindNodeReportCount(req *protoManage.ReqNodeReportList) (int64, error) {
	tx := db.Gorm.Model(&orm.NodeReport{})
	tx = db.SetNodeReportFilter(tx, req)
	var count int64
	err := tx.Count(&count).Error
	return count, err
}

//获取节点报告中节点ID对应的节点信息
func (db *Server) FindNodeByNodeReport(req *protoManage.ReqNodeReportList) ([]orm.Node, error) {
	tx := db.Gorm.Offset(int(req.Page.Count*req.Page.Num)).Limit(int(req.Page.Count))
	tx = db.SetNodeReportFilter(tx, req)
	subQuery1 := tx.Model(&orm.NodeReport{})
	subQuery2 := db.Gorm.Select("t.nodeID").
		Table("(?) as t", subQuery1)
	var nodeList []orm.Node
	err := db.Gorm.Where("id in(?)", subQuery2).Find(&nodeList).Error
	return nodeList, err
}

//按ID获取指定节点报告
func (db *Server) FindNodeReportByID(nodeReport orm.NodeReport) (*orm.NodeReport, error) {
	err := db.Gorm.First(&nodeReport, nodeReport.ID).Error
	return &nodeReport, err
}

//按名称获取指定节点报告
func (db *Server) FindNodeReportByIndex(nodeReport orm.NodeReport) (*orm.NodeReport, error) {
	err := db.Gorm.Where("nodeID = ? and name = ?",
		nodeReport.NodeID, nodeReport.Name).First(&nodeReport).Error
	return &nodeReport, err
}

//节点报告过滤器
func (db *Server) SetNodeReportFilter(tx *gorm.DB, req *protoManage.ReqNodeReportList) *gorm.DB {
	sql := db.spliceSql("id = ?", len(req.ID), "or")
	var id []interface{}
	for _, item := range req.ID {
		id = append(id, item)
	}
	tx.Where(sql, id...)

	sql = db.spliceSql("nodeID = ?", len(req.NodeID), "or")
	var nodeID []interface{}
	for _, item := range req.NodeID {
		nodeID = append(nodeID, item)
	}
	tx.Where(sql, nodeID...)

	sql = db.spliceSql("name like ?", len(req.Name), "or")
	var name []interface{}
	for _, item := range req.Name {
		name = append(name, "%"+item+"%")
	}
	tx.Where(sql, name...)

	sql = db.spliceSql("nodeID in(select id from node where name like ?)", len(req.NodeName), "or")
	var nodeName []interface{}
	for _, item := range req.NodeName {
		nodeName = append(nodeName, "%"+item+"%")
	}
	tx.Where(sql, nodeName...)

	sql = db.spliceSql("level = ?", len(req.Level), "or")
	var level []interface{}
	for _, item := range req.Level {
		level = append(level, item)
	}
	tx.Where(sql, level...)

	tx.Where("level <= ?", req.LevelMax)

	sql = ""
	var senderTime []interface{}
	for index, item := range req.UpdateTime {
		if item.BeginTime > 0 {
			sql += "(updatedAt >= ?"
			senderTime = append(senderTime, Jtool.TimeUnixToFormat(item.BeginTime))
			if item.EndTime > 0 {
				sql += " and updatedAt <= ?)"
				senderTime = append(senderTime, Jtool.TimeUnixToFormat(item.EndTime))
			}else {
				sql += ")"
			}
		}else {
			sql += "(updatedAt <= ?)"
			senderTime = append(senderTime, Jtool.TimeUnixToFormat(item.EndTime))
		}
		if index < len(req.UpdateTime)-1 {
			sql += " "+ "or" + " "
		}
	}
	tx.Where(sql, senderTime...)
	return tx
}