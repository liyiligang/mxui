package db

import (
	"github.com/liyiligang/klee/app/protoFiles/protoManage"
	"github.com/liyiligang/klee/app/typedef/orm"
	"github.com/pkg/errors"
	"gorm.io/gorm"
)

//新增节点方法
func (db *Server) AddNodeFunc(nodeFunc *orm.NodeFunc) error {
	return db.Gorm.Create(nodeFunc).Error
}

//删除节点方法
func (db *Server) DelNodeFunc(nodeFunc orm.NodeFunc) error {
	return db.Gorm.Delete(nodeFunc).Error
}

//按节点ID删除所有节点方法
func (db *Server) DelAllNodeFuncByNodeID(nodeFunc orm.NodeFunc) error {
	return db.Gorm.Where("nodeID = ?", nodeFunc.NodeID).Delete(orm.NodeFunc{}).Error
}

//按节点ID更新节点方法状态
func (db *Server) UpdateNodeFuncStateByNodeID(nodeFunc orm.NodeFunc) error {
	return db.Gorm.Model(&nodeFunc).Where("nodeID = ?", nodeFunc.NodeID).
		Updates(map[string]interface{}{"state": nodeFunc.State}).Error
}

//按ID更新指定节点方法信息
func (db *Server) UpdateNodeFuncInfo(nodeFunc orm.NodeFunc) error {
	return db.Gorm.Model(&nodeFunc).Updates(map[string]interface{}{
		"func": nodeFunc.Func, "schema": nodeFunc.Schema,
		"level": nodeFunc.Level, "state": nodeFunc.State}).Error
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
func (db *Server) FindNodeFuncByIndex(nodeFunc orm.NodeFunc) (*orm.NodeFunc, error) {
	err := db.Gorm.Where("nodeID = ? and name = ?",
		nodeFunc.NodeID, nodeFunc.Name).First(&nodeFunc).Error
	return &nodeFunc, err
}


