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
	"github.com/liyiligang/base/component/Jtool"
	"github.com/liyiligang/mxui/protoFiles/protoManage"
	"github.com/liyiligang/mxui/typedef/config"
	"github.com/liyiligang/mxui/typedef/orm"
	"gorm.io/gorm"
	"time"
)

func (db *Server) AddNodeResource(nodeResource *orm.NodeResource) error {
	return db.Gorm.Create(nodeResource).Error
}

func (db *Server) UpdateNodeResourceState(nodeResource *orm.NodeResource) error {
	return db.Gorm.Model(&nodeResource).Update("State", nodeResource.State).Error
}

func (db *Server) UpdateNodeResourceDownLoadCnt(nodeResource *orm.NodeResource) error {
	return db.Gorm.Model(&nodeResource).Update("DownLoadCnt", nodeResource.DownLoadCnt).Error
}

func (db *Server) FindNodeResourceByID(nodeResource orm.NodeResource) (*orm.NodeResource, error) {
	err := db.Gorm.First(&nodeResource, nodeResource.ID).Error
	return &nodeResource, err
}

func (db *Server) FindNodeResourceWithValid(nodeResource orm.NodeResource) error {
	return db.Gorm.Where("Md5=? and State=?",
		nodeResource.Md5, nodeResource.State).First(&nodeResource).Error
}

func (db *Server) FindNodeResourceWithInvalid() ([]orm.NodeResource, error) {
	var nodeResourceList []orm.NodeResource
	err := db.Gorm.Where("State=? and updatedAt<=?", protoManage.State_StateNormal,
		time.Now().Add(-24*time.Hour*time.Duration(config.LocalConfig.File.MaxAge))).Find(&nodeResourceList).Error
	if errors.Is(err, gorm.ErrRecordNotFound) {
		return nodeResourceList, nil
	}
	return nodeResourceList, err
}

func (db *Server) FindNodeResource(req *protoManage.ReqNodeResourceList) ([]orm.NodeResource, error) {
	tx := db.Gorm.Offset(int(req.Page.Count*req.Page.Num)).Limit(int(req.Page.Count))
	tx = db.SetNodeResourceFilter(tx, req)
	var nodeResourceList []orm.NodeResource
	err := tx.Order("id desc").Find(&nodeResourceList).Error
	if errors.Is(err, gorm.ErrRecordNotFound) {
		return nodeResourceList, nil
	}
	return nodeResourceList, err
}

func (db *Server) FindNodeResourceCount(req *protoManage.ReqNodeResourceList) (int64, error) {
	tx := db.Gorm.Model(&orm.NodeResource{})
	tx = db.SetNodeResourceFilter(tx, req)
	var count int64
	err := tx.Count(&count).Error
	return count, err
}

func (db *Server) SetNodeResourceFilter(tx *gorm.DB, req *protoManage.ReqNodeResourceList) *gorm.DB {
	sql := db.spliceSql("name like ?", len(req.Name), "or")
	var message []interface{}
	for _, item := range req.Name {
		message = append(message, "%"+item+"%")
	}
	tx.Where(sql, message...)

	sql = db.spliceSql("state = ?", len(req.State), "or")
	var state []interface{}
	for _, item := range req.State {
		state = append(state, item)
	}
	tx.Where(sql, state...)

	sql = db.spliceSql("uploaderName = ?", len(req.UploaderName), "or")
	var uploaderName []interface{}
	for _, item := range req.UploaderName {
		uploaderName = append(uploaderName, item)
	}
	tx.Where(sql, uploaderName...)

	sql = db.spliceSql("uploaderType = ?", len(req.UploaderType), "or")
	var senderType []interface{}
	for _, item := range req.UploaderType {
		senderType = append(senderType, item)
	}
	tx.Where(sql, senderType...)

	sql = ""
	var uploadTime []interface{}
	for index, item := range req.UploadTime {
		if item.BeginTime > 0 {
			sql += "(updatedAt >= ?"
			uploadTime = append(uploadTime, Jtool.TimeUnixToFormat(item.BeginTime))
			if item.EndTime > 0 {
				sql += " and updatedAt <= ?)"
				uploadTime = append(uploadTime, Jtool.TimeUnixToFormat(item.EndTime))
			}else {
				sql += ")"
			}
		}else {
			sql += "(updatedAt <= ?)"
			uploadTime = append(uploadTime, Jtool.TimeUnixToFormat(item.EndTime))
		}
		if index < len(req.UploadTime)-1 {
			sql += " "+ "or" + " "
		}
	}
	tx.Where(sql, uploadTime...)
	return tx
}