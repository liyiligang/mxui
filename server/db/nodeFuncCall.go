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
	"github.com/liyiligang/mxrpc/protoFiles/protoManage"
	"github.com/liyiligang/mxrpc/typedef/orm"
	"gorm.io/gorm"
)

//新增节点方法调用
func (db *Server) AddNodeFuncCall(nodeFuncCall *orm.NodeFuncCall) error {
	return db.Gorm.Create(nodeFuncCall).Error
}

func (db *Server) DelNodeFuncCallByNodeFuncID(nodeFuncCall orm.NodeFuncCall) error {
	return db.Gorm.Where("funcID = ?", nodeFuncCall.FuncID).Delete(&nodeFuncCall).Error
}

func (db *Server) DelNodeFuncCallByNodeID(nodeID int64) error {
	subQuery1 := db.Gorm.Select("id").Model(&orm.NodeFunc{}).Where("nodeID=?", nodeID)
	return db.Gorm.Where("funcID = any(?)", subQuery1).Delete(&orm.NodeFuncCall{}).Error
}

//按ID更新节点方法调用
func (db *Server) UpdateNodeFuncCallByID(nodeFuncCall orm.NodeFuncCall) error {
	err := db.Gorm.Model(&nodeFuncCall).
		Updates(map[string]interface{}{
			"returnVal": nodeFuncCall.ReturnVal,
			"returnType": nodeFuncCall.ReturnType,
			"state": nodeFuncCall.State}).Error
	return err
}

//获取节点方法调用信息
func (db *Server) FindNodeFuncCall(req *protoManage.ReqNodeFuncCallList) ([]orm.NodeFuncCall, error) {
	tx := db.Gorm.Offset(int(req.Page.Count*req.Page.Num)).Limit(int(req.Page.Count))
	tx = db.SetNodeFuncCallFilter(tx, req)
	var NodeFuncCallList []orm.NodeFuncCall
	err := tx.Order("id desc").Select("id", "updatedAt",
		"managerID", "funcID", "returnType", "state").Find(&NodeFuncCallList).Error
	if errors.Is(err, gorm.ErrRecordNotFound) {
		return NodeFuncCallList, nil
	}
	return NodeFuncCallList, err
}

//按ID获取指定节点方法调用
func (db *Server) FindNodeFuncCallByID(nodeFuncCall orm.NodeFuncCall) (*orm.NodeFuncCall, error) {
	err := db.Gorm.First(&nodeFuncCall, nodeFuncCall.ID).Error
	return &nodeFuncCall, err
}

//按ID获取指定节点方法调用参数
func (db *Server) FindNodeFuncCallParameterByID(nodeFuncCall orm.NodeFuncCall) (*orm.NodeFuncCall, error) {
	err := db.Gorm.Select("id", "parameter").Find(&nodeFuncCall).
		Where("id = ?", nodeFuncCall.ID).Error
	return &nodeFuncCall, err
}

//按ID获取指定节点方法调用返回值
func (db *Server) FindNodeFuncCallReturnValByID(nodeFuncCall orm.NodeFuncCall) (*orm.NodeFuncCall, error) {
	err := db.Gorm.Select("id", "returnVal", "returnType", "state").Find(&nodeFuncCall).
		Where("id = ?", nodeFuncCall.ID).Error
	return &nodeFuncCall, err
}

//获取节点方法调用中节点方法ID对应的最后一次调用信息
func (db *Server) FindLastNodeFuncCallByNodeFunc(req *protoManage.ReqNodeFuncCallList) ([]orm.NodeFuncCall, error) {
	tx := db.Gorm.Offset(int(req.Page.Count*req.Page.Num)).Limit(int(req.Page.Count))
	tx = db.SetNodeFuncCallFilter(tx, req)
	subQuery1 := tx.Model(&orm.NodeFunc{})
	subQuery2 := db.Gorm.Select("t.id").Table("(?) as t", subQuery1)
	subQuery3 := db.Gorm.Select("max(id)").Table("nodeFuncCall").
		Where("funcID = any(?)", subQuery2).Group("funcID")
	var nodeFuncCallList []orm.NodeFuncCall
	err := db.Gorm.Where("id = any(?)", subQuery3).Find(&nodeFuncCallList).Error
	return nodeFuncCallList, err
}

//节点方法调用过滤器
func (db *Server) SetNodeFuncCallFilter(tx *gorm.DB, req *protoManage.ReqNodeFuncCallList) *gorm.DB {
	if req.FuncID != 0 {
		tx.Where("funcID = ?", req.FuncID)
	}
	return tx
}