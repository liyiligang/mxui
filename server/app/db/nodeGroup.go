package db

import (
	"github.com/liyiligang/manage/app/protoFiles/protoManage"
	"github.com/liyiligang/manage/app/typedef/orm"
	"github.com/pkg/errors"
	"gorm.io/gorm"
)

//新增节点组
func (db *Server) AddNodeGroup(nodeGroup *orm.NodeGroup) error {
	return db.Gorm.Create(nodeGroup).Error
}

//删除节点组
func (db *Server) DelNodeGroup(nodeGroup orm.NodeGroup) error {
	return db.Gorm.Delete(&nodeGroup).Error
}

//获取节点组信息
func (db *Server) FindNodeGroup(filter protoManage.Filter) ([]orm.NodeGroup, error) {
	tx := db.Gorm.Offset(int(filter.PageSize*filter.PageNum)).Limit(int(filter.PageSize))
	tx = db.SetFilter(tx, filter)
	var nodeGroupList []orm.NodeGroup
	err := tx.Find(&nodeGroupList).Error
	if errors.Is(err, gorm.ErrRecordNotFound) {
		return nodeGroupList, nil
	}
	return nodeGroupList, err
}

//获取节点组计数
func (db *Server) FindNodeGroupCount(filter protoManage.Filter) (int64, error) {
	tx := db.Gorm.Model(&orm.NodeGroup{})
	tx = db.SetFilter(tx, filter)
	var count int64
	err := tx.Count(&count).Error
	return count, err
}

//按ID获取指定节点组
func (db *Server) FindNodeGroupByID(nodeGroup orm.NodeGroup) (*orm.NodeGroup, error) {
	err := db.Gorm.Where("id = ?", nodeGroup.ID).First(&nodeGroup).Error
	return &nodeGroup, err
}

//按名称获取指定节点组
func (db *Server) FindNodeGroupByName(nodeGroup orm.NodeGroup) (*orm.NodeGroup, error) {
	err := db.Gorm.Where("name = ?", nodeGroup.Name).First(&nodeGroup).Error
	return &nodeGroup, err
}
