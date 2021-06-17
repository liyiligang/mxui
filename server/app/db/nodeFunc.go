package db

import (
	"github.com/liyiligang/base/protoFiles/protoManage"
	"github.com/liyiligang/manage/app/typedef/orm"
	"github.com/pkg/errors"
	"gorm.io/gorm"
)

//新增节点方法
func (db *Server) AddNodeFunc(nodeFunc orm.NodeFunc) error {
	return db.Gorm.Create(&nodeFunc).Error
}

//删除节点方法
func (db *Server) DelNodeFunc(nodeFunc orm.NodeFunc) error {
	return db.Gorm.Delete(nodeFunc).Error
}

//按节点ID删除所有节点方法
func (db *Server) DelAllNodeFuncByNodeID(nodeFunc orm.NodeFunc) error {
	return db.Gorm.Where("nodeID = ?", nodeFunc.NodeID).Delete(orm.NodeFunc{}).Error
}

//按ID更新指定节点方法名
func (db *Server) UpdateNodeFuncNameByID(nodeFunc orm.NodeFunc) error {
	return db.Gorm.Model(&nodeFunc).
		Updates(map[string]interface{}{"name": nodeFunc.Name}).Error
}

//获取节点方法信息
func (db *Server) FindNodeFunc(filter protoManage.Filter) ([]orm.NodeFunc, error) {
	tx := db.Gorm.Offset(int(filter.PageSize*filter.PageNum)).Limit(int(filter.PageSize))
	tx = db.SetFilter(tx, filter)
	var nodeFuncList []orm.NodeFunc
	err := tx.Find(&nodeFuncList).Error
	if errors.Is(err, gorm.ErrRecordNotFound) {
		return nodeFuncList, nil
	}
	return nodeFuncList, err
}

//获取节点方法计数
func (db *Server) FindNodeFuncCount(filter protoManage.Filter) (int64, error) {
	tx := db.Gorm.Model(&orm.NodeFunc{})
	tx = db.SetFilter(tx, filter)
	var count int64
	err := tx.Count(&count).Error
	return count, err
}

//获取节点方法状态统计
func (db *Server) FindNodeFuncStateCount(filter protoManage.Filter) ([]orm.StateCount, error) {
	tx := db.Gorm.Offset(int(filter.PageSize*filter.PageNum)).Limit(int(filter.PageSize))
	tx = db.SetFilter(tx, filter)
	subQuery1 := tx.Model(&orm.Node{})
	subQuery2 := db.Gorm.Select("t.id").
		Table("(?) as t", subQuery1)
	var ormStateCountList []orm.StateCount
	err := db.Gorm.Model(&orm.NodeFunc{}).Select("nodeID as parentID, count(state) as stateCount, state").Where("nodeID = any(?)", subQuery2).
		Group("nodeID").Group("state").Order("nodeID").Order("state").Find(&ormStateCountList).Error
	if err != nil {
		return nil, err
	}
	return ormStateCountList, nil
}

//获取节点方法中节点ID对应的节点信息
func (db *Server) FindNodeByNodeFunc(filter protoManage.Filter) ([]orm.Node, error) {
	tx := db.Gorm.Offset(int(filter.PageSize*filter.PageNum)).Limit(int(filter.PageSize))
	tx = db.SetFilter(tx, filter)
	subQuery1 := tx.Model(&orm.NodeFunc{})
	subQuery2 := db.Gorm.Select("t.nodeID").
		Table("(?) as t", subQuery1)
	var nodeList []orm.Node
	err := db.Gorm.Where("id = any(?)", subQuery2).Find(&nodeList).Error
	return nodeList, err
}

//按ID获取指定节点方法
func (db *Server) FindNodeFuncByID(nodeFunc orm.NodeFunc) (*orm.NodeFunc, error) {
	err := db.Gorm.First(&nodeFunc, nodeFunc.ID).Error
	return &nodeFunc, err
}

//按名称获取指定节点方法
func (db *Server) FindNodeFuncByName(nodeFunc orm.NodeFunc) (*orm.NodeFunc, error) {
	err := db.Gorm.Where("name = ? and nodeID = ?", nodeFunc.Name, nodeFunc.NodeID).First(&nodeFunc).Error
	return &nodeFunc, err
}

//新增节点方法调用
func (db *Server) AddNodeFuncCall(nodeFuncCall orm.NodeFuncCall) (*orm.Base, error) {
	err := db.Gorm.Create(&nodeFuncCall).Error
	return &nodeFuncCall.Base, err
}

//按ID更新节点方法调用
func (db *Server) UpdateNodeFuncCallByID(nodeFuncCall orm.NodeFuncCall) error {
	err := db.Gorm.Model(&nodeFuncCall).
		Updates(map[string]interface{}{
			"returnVal": nodeFuncCall.ReturnVal,
			"state": nodeFuncCall.State}).Error
	return err
}

//获取节点方法调用信息
func (db *Server) FindNodeFuncCall(filter protoManage.Filter) ([]orm.NodeFuncCall, error) {
	tx := db.Gorm.Offset(int(filter.PageSize*filter.PageNum)).Limit(int(filter.PageSize))
	tx = db.SetFilter(tx, filter)
	var NodeFuncCallList []orm.NodeFuncCall
	err := tx.Order("id desc").Find(&NodeFuncCallList).Error
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
