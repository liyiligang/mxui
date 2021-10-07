// Copyright 2021 The Authors. All rights reserved.
// Author: liyiligang
// Date: 2021/06/25 14:28
// Description:

package db

import (
	"errors"
	"github.com/liyiligang/klee/app/protoFiles/protoManage"
	"github.com/liyiligang/klee/app/typedef/orm"
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
func (db *Server) FindNodeFuncCall(filter protoManage.Filter) ([]orm.NodeFuncCall, error) {
	tx := db.Gorm.Offset(int(filter.PageSize*filter.PageNum)).Limit(int(filter.PageSize))
	tx = db.SetFilter(tx, filter)
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
func (db *Server) FindLastNodeFuncCallByNodeFunc(filter protoManage.Filter) ([]orm.NodeFuncCall, error) {
	tx := db.Gorm.Offset(int(filter.PageSize*filter.PageNum)).Limit(int(filter.PageSize))
	tx = db.SetFilter(tx, filter)
	subQuery1 := tx.Model(&orm.NodeFunc{})
	subQuery2 := db.Gorm.Select("t.id").Table("(?) as t", subQuery1)
	subQuery3 := db.Gorm.Select("max(id)").Table("nodeFuncCall").
		Where("funcID = any(?)", subQuery2).Group("funcID")
	var nodeFuncCallList []orm.NodeFuncCall
	err := db.Gorm.Where("id = any(?)", subQuery3).Find(&nodeFuncCallList).Error
	return nodeFuncCallList, err
}
