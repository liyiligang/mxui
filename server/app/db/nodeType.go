package db

import (
	"github.com/liyiligang/manage/app/protoFiles/protoManage"
	"github.com/liyiligang/manage/app/typedef/orm"
	"github.com/pkg/errors"
	"gorm.io/gorm"
)

//新增节点类型
func (db *Server) AddNodeType(nodeType *orm.NodeType) error {
	return db.Gorm.Create(nodeType).Error
}

//删除节点类型
func (db *Server) DelNodeType(nodeType orm.NodeType) error {
	return db.Gorm.Delete(&nodeType).Error
}

//获取节点类型信息
func (db *Server) FindNodeType(filter protoManage.Filter) ([]orm.NodeType, error) {
	tx := db.Gorm.Offset(int(filter.PageSize*filter.PageNum)).Limit(int(filter.PageSize))
	tx = db.SetFilter(tx, filter)
	var nodeTypeList []orm.NodeType
	err := tx.Find(&nodeTypeList).Error
	if errors.Is(err, gorm.ErrRecordNotFound) {
		return nodeTypeList, nil
	}
	return nodeTypeList, err
}

//获取节点类型计数
func (db *Server) FindNodeTypeCount(filter protoManage.Filter) (int64, error) {
	tx := db.Gorm.Model(&orm.NodeType{})
	tx = db.SetFilter(tx, filter)
	var count int64
	err := tx.Count(&count).Error
	return count, err
}

//按ID获取指定节点类型
func (db *Server) FindNodeTypeByID(nodeType orm.NodeType) (*orm.NodeType, error) {
	err := db.Gorm.Where("id = ?", nodeType.ID).First(&nodeType).Error
	return &nodeType, err
}

//按名称获取指定节点类型
func (db *Server) FindNodeTypeByName(nodeType orm.NodeType) (*orm.NodeType, error) {
	err := db.Gorm.Where("name = ?", nodeType.Name).First(&nodeType).Error
	return &nodeType, err
}
