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

func (db *Server) AddNodeNotify(nodeNotify orm.NodeNotify) error {
	return db.Gorm.Create(&nodeNotify).Error
}

func (db *Server) FindNodeNotify(req *protoManage.ReqNodeNotifyList) ([]orm.NodeNotify, error) {
	tx := db.Gorm.Offset(int(req.Page.Count*req.Page.Num)).Limit(int(req.Page.Count))
	tx = db.SetNodeNotifyFilter(tx, req)
	var nodeNotifyList []orm.NodeNotify
	err := tx.Order("id desc").Find(&nodeNotifyList).Error
	if errors.Is(err, gorm.ErrRecordNotFound) {
		return nodeNotifyList, nil
	}
	return nodeNotifyList, err
}

func (db *Server) FindNodeByNodeNotify(req *protoManage.ReqNodeNotifyList) ([]orm.Node, error) {
	tx := db.Gorm.Offset(int(req.Page.Count*req.Page.Num)).Limit(int(req.Page.Count))
	tx = db.SetNodeNotifyFilter(tx, req)
	subQuery1 := tx.Model(&orm.NodeNotify{}).Order("id desc")
	subQuery2 := db.Gorm.Select("t.senderID").Where("senderType=?", protoManage.NotifySenderType_NotifySenderTypeNode).
		Table("(?) as t", subQuery1)
	var nodeList []orm.Node
	err := db.Gorm.Where("id in(?)", subQuery2).Find(&nodeList).Error
	return nodeList, err
}

func (db *Server) FindNodeNotifyCount(req *protoManage.ReqNodeNotifyList) (int64, error) {
	tx := db.Gorm.Model(&orm.NodeNotify{})
	tx = db.SetNodeNotifyFilter(tx, req)
	var count int64
	err := tx.Count(&count).Error
	return count, err
}

func (db *Server) FindNodeNotifyByNodeID(nodeID int64, offset int, num int) ([]orm.NodeNotify, error) {
	var nodeNotifyList []orm.NodeNotify
	err := db.Gorm.Where("NodeID = ?", nodeID).Order("id desc").
		Offset(offset).Limit(num).Find(&nodeNotifyList).Error
	return nodeNotifyList, err
}

func (db *Server) SetNodeNotifyFilter(tx *gorm.DB, req *protoManage.ReqNodeNotifyList) *gorm.DB {
	sql := db.spliceSql("message like ?", len(req.Message), "or")
	var message []interface{}
	for _, item := range req.Message {
		message = append(message, "%"+item+"%")
	}
	tx.Where(sql, message...)

	sql = db.spliceSql("state = ?", len(req.State), "or")
	var state []interface{}
	for _, item := range req.State {
		state = append(state, item)
	}
	tx.Where(sql, state...)

	sql = db.spliceSql("senderName = ?", len(req.SenderName), "or")
	var senderName []interface{}
	for _, item := range req.SenderName {
		senderName = append(senderName, item)
	}
	tx.Where(sql, senderName...)

	sql = db.spliceSql("senderType = ?", len(req.SenderType), "or")
	var senderType []interface{}
	for _, item := range req.SenderType {
		senderType = append(senderType, item)
	}
	tx.Where(sql, senderType...)

	sql = ""
	var senderTime []interface{}
	for index, item := range req.SenderTime {
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
		if index < len(req.SenderTime)-1 {
			sql += " "+ "or" + " "
		}
	}
	tx.Where(sql, senderTime...)
	return tx
}

