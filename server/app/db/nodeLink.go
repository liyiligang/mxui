package db

import (
	"github.com/liyiligang/base/protoFiles/protoManage"
	"github.com/liyiligang/manage/app/typedef/orm"
	"github.com/pkg/errors"
	"gorm.io/gorm"
)

//新增节点连接
func (db *Server) AddNodeLink(nodeLink orm.NodeLink) error {
	return db.Gorm.Create(&nodeLink).Error
}

//删除节点连接
func (db *Server) DelNodeLink(nodeLink orm.NodeLink) error {
	return db.Gorm.Delete(&nodeLink).Error
}

//按节点ID删除所有节点连接
func (db *Server) DelAllNodeLinkByNodeID(nodeLink orm.NodeLink) error {
	return db.Gorm.Where("sourceID = ? or targetID = ?", nodeLink.SourceID, nodeLink.TargetID).Delete(orm.NodeLink{}).Error
}

//按ID更新节点连接状态
func (db *Server) UpdateNodeLinkState(nodeLink orm.NodeLink) error {
	return db.Gorm.Model(&nodeLink).Update("state", nodeLink.State).Error
}

//获取节点连接信息
func (db *Server) FindNodeLink(filter protoManage.Filter) ([]orm.NodeLink, error) {
	tx := db.Gorm.Offset(int(filter.PageSize*filter.PageNum)).Limit(int(filter.PageSize))
	tx = db.SetFilter(tx, filter)
	var nodeLinkList []orm.NodeLink
	err := tx.Find(&nodeLinkList).Error
	if errors.Is(err, gorm.ErrRecordNotFound) {
		return nodeLinkList, nil
	}
	return nodeLinkList, err
}

//获取节点连接计数
func (db *Server) FindNodeLinkCount(filter protoManage.Filter) (int64, error) {
	tx := db.Gorm.Model(&orm.NodeLink{})
	tx = db.SetFilter(tx, filter)
	var count int64
	err := tx.Count(&count).Error
	return count, err
}

//获取节点连接源节点状态统计
func (db *Server) FindNodeLinkTargetStateCount(filter protoManage.Filter) ([]orm.StateCount, error) {
	tx := db.Gorm.Offset(int(filter.PageSize*filter.PageNum)).Limit(int(filter.PageSize))
	tx = db.SetFilter(tx, filter)
	subQuery1 := tx.Model(&orm.Node{})
	subQuery2 := db.Gorm.Select("t.id").
		Table("(?) as t", subQuery1)
	var ormStateCountList []orm.StateCount
	err := db.Gorm.Model(&orm.NodeLink{}).Select("targetID as parentID, count(state) as stateCount, state").Where("targetID = any(?)", subQuery2).
		Group("targetID").Group("state").Order("targetID").Order("state").Find(&ormStateCountList).Error
	if err != nil {
		return nil, err
	}
	return ormStateCountList, nil
}

//获取节点连接目标节点状态统计
func (db *Server) FindNodeLinkSourceStateCount(filter protoManage.Filter) ([]orm.StateCount, error) {
	tx := db.Gorm.Offset(int(filter.PageSize*filter.PageNum)).Limit(int(filter.PageSize))
	tx = db.SetFilter(tx, filter)
	subQuery1 := tx.Model(&orm.Node{})
	subQuery2 := db.Gorm.Select("t.id").
		Table("(?) as t", subQuery1)
	var ormStateCountList []orm.StateCount
	err := db.Gorm.Model(&orm.NodeLink{}).Select("sourceID as parentID, count(state) as stateCount, state").Where("sourceID = any(?)", subQuery2).
		Group("sourceID").Group("state").Order("sourceID").Order("state").Find(&ormStateCountList).Error
	if err != nil {
		return nil, err
	}
	return ormStateCountList, nil
}

//获取节点连接中节点ID对应的节点信息
func (db *Server) FindNodeByNodeLink(filter protoManage.Filter) ([]orm.Node, error) {
	tx := db.Gorm.Offset(int(filter.PageSize*filter.PageNum)).Limit(int(filter.PageSize))
	tx = db.SetFilter(tx, filter)
	subQuery1 := tx.Model(&orm.NodeLink{})
	subQuery2 := db.Gorm.Select("t.sourceID").
		Table("(?) as t", subQuery1)
	subQuery3 := db.Gorm.Select("t.targetID").
		Table("(?) as t", subQuery1)
	var nodeList []orm.Node
	err := db.Gorm.Where("id = any(?) or id = any(?)", subQuery2, subQuery3).Find(&nodeList).Error
	return nodeList, err
}

//按ID获取指定节点连接
func (db *Server) FindNodeLinkByID(nodeLink orm.NodeLink) (*orm.NodeLink, error) {
	err := db.Gorm.First(&nodeLink, nodeLink.ID).Error
	return &nodeLink, err
}

//按节点ID获取指定节点连接
func (db *Server) FindNodeLinkByNodeID(nodeLink orm.NodeLink) (*orm.NodeLink, error) {
	err := db.Gorm.Where("sourceID = ? and targetID = ?", nodeLink.SourceID, nodeLink.TargetID).First(&nodeLink).Error
	return &nodeLink, err
}
