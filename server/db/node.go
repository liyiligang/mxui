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

func (db *Server) AddNode(node *orm.Node) error {
	return db.Gorm.Create(node).Error
}

func (db *Server) DelNode(node orm.Node) error {
	return db.Gorm.Delete(&node).Error
}

func (db *Server) UpdateNodeState(node orm.Node) error {
	return db.Gorm.Model(&node).Update("State", node.State).Error
}

func (db *Server) FindNode(req *protoManage.ReqNodeList) ([]orm.Node, error) {
	tx := db.Gorm.Offset(int(req.Page.Count*req.Page.Num)).Limit(int(req.Page.Count))
	tx = db.SetNodeFilter(tx, req)
	var nodeList []orm.Node
	err := tx.Find(&nodeList).Error
	if errors.Is(err, gorm.ErrRecordNotFound) {
		return nodeList, nil
	}
	return nodeList, err
}

func (db *Server) FindNodeCount(req *protoManage.ReqNodeList) (int64, error) {
	tx := db.Gorm.Model(&orm.Node{})
	tx = db.SetNodeFilter(tx, req)
	var count int64
	err := tx.Count(&count).Error
	return count, err
}

func (db *Server) FindNodeByID(node orm.Node) (*orm.Node, error) {
	err := db.Gorm.Where("id = ?", node.ID).First(&node).Error
	return &node, err
}

func (db *Server) FindNodeByName(node orm.Node) (*orm.Node, error) {
	err := db.Gorm.Where("name = ?", node.Name).First(&node).Error
	return &node, err
}

func (db *Server) SetNodeFilter(tx *gorm.DB, req *protoManage.ReqNodeList) *gorm.DB {
	sql := db.spliceSql("id = ?", len(req.ID), "or")
	var id []interface{}
	for _, item := range req.ID {
		id = append(id, item)
	}
	tx.Where(sql, id...)

	sql = db.spliceSql("name like ?", len(req.Name), "or")
	var name []interface{}
	for _, item := range req.Name {
		name = append(name, "%"+item+"%")
	}
	tx.Where(sql, name...)

	sql = db.spliceSql("state = ?", len(req.State), "or")
	var state []interface{}
	for _, item := range req.State {
		state = append(state, item)
	}
	tx.Where(sql, state...)

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