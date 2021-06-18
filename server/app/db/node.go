package db

import (
	"github.com/liyiligang/manage/app/protoFiles/protoManage"
	"github.com/liyiligang/manage/app/typedef/orm"
	"github.com/pkg/errors"
	"gorm.io/gorm"
)

//新增节点
func (db *Server) AddNode(node orm.Node) error {
	return db.Gorm.Create(&node).Error
}

//删除节点
func (db *Server) DelNode(node orm.Node) error {
	return db.Gorm.Delete(&node).Error
}

//按ID更新节点状态
func (db *Server) UpdateNodeState(node orm.Node) error {
	return db.Gorm.Model(&node).Update("State", node.State).Error
}

//获取节点信息
func (db *Server) FindNode(filter protoManage.Filter) ([]orm.Node, error) {
	tx := db.Gorm.Offset(int(filter.PageSize*filter.PageNum)).Limit(int(filter.PageSize))
	tx = db.SetFilter(tx, filter)
	var nodeList []orm.Node
	err := tx.Find(&nodeList).Error
	if errors.Is(err, gorm.ErrRecordNotFound) {
		return nodeList, nil
	}
	return nodeList, err
}

//获取节点计数
func (db *Server) FindNodeCount(filter protoManage.Filter) (int64, error) {
	tx := db.Gorm.Model(&orm.Node{})
	tx = db.SetFilter(tx, filter)
	var count int64
	err := tx.Count(&count).Error
	return count, err
}

//获取节点状态统计
func (db *Server) FindNodeStateCount(filter protoManage.Filter, groupField string) ([]orm.StateCount, error) {
	tx := db.Gorm.Offset(int(filter.PageSize*filter.PageNum)).Limit(int(filter.PageSize))
	tx = db.SetFilter(tx, filter)
	subQuery1 := tx.Model(&orm.NodeGroup{})
	subQuery2 := db.Gorm.Select("t.id").
		Table("(?) as t", subQuery1)
	var ormStateCountList []orm.StateCount
	err := db.Gorm.Model(&orm.Node{}).Select(groupField + " as parentID, count(state) as stateCount, state").Where(groupField+" = any(?)", subQuery2).
		Group(groupField).Group("state").Order(groupField).Order("state").Find(&ormStateCountList).Error
	if err != nil {
		return nil, err
	}
	return ormStateCountList, nil
}

//获取节点中节点组ID对应的节点组信息
func (db *Server) FindNodeGroupByNode(filter protoManage.Filter) ([]orm.NodeGroup, error) {
	tx := db.Gorm.Offset(int(filter.PageSize*filter.PageNum)).Limit(int(filter.PageSize))
	tx = db.SetFilter(tx, filter)
	subQuery1 := tx.Model(&orm.Node{})
	subQuery2 := db.Gorm.Select("t.groupID").
		Table("(?) as t", subQuery1)
	var nodeGroupList []orm.NodeGroup
	err := db.Gorm.Where("id = any(?)", subQuery2).Find(&nodeGroupList).Error
	return nodeGroupList, err
}

//获取节点中节点类型ID对应的节点类型信息
func (db *Server) FindNodeTypeByNode(filter protoManage.Filter) ([]orm.NodeType, error) {
	tx := db.Gorm.Offset(int(filter.PageSize*filter.PageNum)).Limit(int(filter.PageSize))
	tx = db.SetFilter(tx, filter)
	subQuery1 := tx.Model(&orm.Node{})
	subQuery2 := db.Gorm.Select("t.typeID").
		Table("(?) as t", subQuery1)
	var nodeTypeList []orm.NodeType
	err := db.Gorm.Where("id = any(?)", subQuery2).Find(&nodeTypeList).Error
	return nodeTypeList, err
}

//按ID获取指定节点
func (db *Server) FindNodeByID(node orm.Node) (*orm.Node, error) {
	err := db.Gorm.Where("id = ?", node.ID).First(&node).Error
	return &node, err
}

//按节点名获取指定节点
func (db *Server) FindNodeByName(node orm.Node) (*orm.Node, error) {
	err := db.Gorm.Where("name = ? and groupID = ? and typeID = ?",
		node.Name, node.GroupID, node.TypeID).First(&node).Error
	return &node, err
}

//按节点组ID获取节点计数
func (db *Server) CountAllNodeByGroupID(node orm.Node) (int64, error) {
	var count int64
	err := db.Gorm.Model(&orm.Node{}).Where("groupID = ?", node.GroupID).Count(&count).Error
	return count, err
}

//按节点类型ID获取节点计数
func (db *Server) CountAllNodeByTypeID(node orm.Node) (int64, error) {
	var count int64
	err := db.Gorm.Model(&orm.Node{}).Where("typeID = ?", node.TypeID).Count(&count).Error
	return count, err
}
