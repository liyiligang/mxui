package db

import (
	"github.com/liyiligang/base/protoFiles/protoManage"
	"github.com/liyiligang/manage/app/typedef/orm"
	"gorm.io/gorm"
)

type DB struct {
	Gorm              *gorm.DB
}

//获取顶部链接
func (db *DB) FindTopLink() ([]orm.TopLink, error) {
	var ormTopLinkList []orm.TopLink
	err := db.Gorm.Find(&ormTopLinkList).Error
	return ormTopLinkList, err
}

//设置过滤器参数
func (db *DB) SetFilter(tx *gorm.DB, filter protoManage.Filter) *gorm.DB {
	if filter.ID != 0 {
		tx.Where("id = ?", filter.ID)
	}
	if filter.GroupID != 0 {
		tx.Where("groupID = ?", filter.GroupID)
	}
	if filter.TypeID != 0 {
		tx.Where("typeID = ?", filter.TypeID)
	}
	if filter.NodeID != 0 {
		tx.Where("nodeID = ?", filter.NodeID)
	}
	if filter.SourceID != 0 || filter.TargetID != 0{
		tx.Where("sourceID = ? or targetID = ?", filter.SourceID, filter.TargetID)
	}
	if filter.FuncID != 0 {
		tx.Where("funcID = ?", filter.FuncID)
	}
	if filter.ReportID != 0 {
		tx.Where("reportID = ?", filter.ReportID)
	}
	if filter.Name != "" {
		tx.Where("name = ?", filter.Name)
	}
	if filter.Flag != "" {
		tx.Where("flag = ?", filter.Flag)
	}
	if filter.Value != "" {
		tx.Where("value = ?", filter.Value)
	}
	if filter.State != protoManage.State_StateNot {
		tx.Where("state = ?", filter.State)
	}
	return tx
}


