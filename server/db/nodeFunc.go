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

func (db *Server) AddNodeFunc(nodeFunc *orm.NodeFunc) error {
	return db.Gorm.Create(nodeFunc).Error
}

func (db *Server) DelNodeFunc(nodeFunc orm.NodeFunc) error {
	return db.Gorm.Delete(nodeFunc).Error
}

func (db *Server) DelAllNodeFuncByNodeID(nodeFunc orm.NodeFunc) error {
	return db.Gorm.Where("nodeID = ?", nodeFunc.NodeID).Delete(orm.NodeFunc{}).Error
}

func (db *Server) UpdateNodeFuncStateByNodeID(nodeFunc orm.NodeFunc) error {
	return db.Gorm.Model(&nodeFunc).Where("nodeID = ?", nodeFunc.NodeID).
		Updates(map[string]interface{}{"state": nodeFunc.State}).Error
}

func (db *Server) UpdateNodeFuncInfo(nodeFunc orm.NodeFunc) error {
	return db.Gorm.Model(&nodeFunc).Updates(map[string]interface{}{
		"func": nodeFunc.Func, "schema": nodeFunc.Schema,
		"level": nodeFunc.Level, "state": nodeFunc.State}).Error
}

func (db *Server) FindNodeFunc(req *protoManage.ReqNodeFuncList) ([]orm.NodeFunc, error) {
	tx := db.Gorm.Offset(int(req.Page.Count*req.Page.Num)).Limit(int(req.Page.Count))
	tx = db.SetNodeFuncFilter(tx, req)
	var nodeFuncList []orm.NodeFunc
	err := tx.Find(&nodeFuncList).Error
	if errors.Is(err, gorm.ErrRecordNotFound) {
		return nodeFuncList, nil
	}
	return nodeFuncList, err
}

func (db *Server) FindNodeFuncCount(req *protoManage.ReqNodeFuncList) (int64, error) {
	tx := db.Gorm.Model(&orm.NodeFunc{})
	tx = db.SetNodeFuncFilter(tx, req)
	var count int64
	err := tx.Count(&count).Error
	return count, err
}

func (db *Server) FindNodeByNodeFunc(req *protoManage.ReqNodeFuncList) ([]orm.Node, error) {
	tx := db.Gorm.Offset(int(req.Page.Count*req.Page.Num)).Limit(int(req.Page.Count))
	tx = db.SetNodeFuncFilter(tx, req)
	subQuery1 := tx.Model(&orm.NodeFunc{})
	subQuery2 := db.Gorm.Select("t.nodeID").
		Table("(?) as t", subQuery1)
	var nodeList []orm.Node
	err := db.Gorm.Debug().Where("id in(?)", subQuery2).Find(&nodeList).Error
	return nodeList, err
}

func (db *Server) FindNodeFuncByID(nodeFunc orm.NodeFunc) (*orm.NodeFunc, error) {
	err := db.Gorm.First(&nodeFunc, nodeFunc.ID).Error
	return &nodeFunc, err
}

func (db *Server) FindNodeFuncByIndex(nodeFunc orm.NodeFunc) (*orm.NodeFunc, error) {
	err := db.Gorm.Where("nodeID = ? and name = ?",
		nodeFunc.NodeID, nodeFunc.Name).First(&nodeFunc).Error
	return &nodeFunc, err
}

func (db *Server) SetNodeFuncFilter(tx *gorm.DB, req *protoManage.ReqNodeFuncList) *gorm.DB {
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
