package db

import (
	"github.com/liyiligang/base/protoFiles/protoManage"
	"github.com/liyiligang/manage/app/typedef/orm"
	"github.com/pkg/errors"
	"gorm.io/gorm"
)

//新增节点通知
func (db *DB) AddNodeNotify(nodeNotify orm.NodeNotify) error {
	return db.Gorm.Create(&nodeNotify).Error
}

//获取节点通知信息
func (db *DB) FindNodeNotify(filter protoManage.Filter) ([]orm.NodeNotify, error) {
	tx := db.Gorm.Offset(int(filter.PageSize*filter.PageNum)).Limit(int(filter.PageSize))
	tx = db.SetFilter(tx, filter)
	var nodeNotifyList []orm.NodeNotify
	err := tx.Find(&nodeNotifyList).Error
	if errors.Is(err, gorm.ErrRecordNotFound) {
		return nodeNotifyList, nil
	}
	return nodeNotifyList, err
}

//获取节点通知中节点ID对应的节点信息
func (db *DB) FindNodeByNodeNotify(filter protoManage.Filter) ([]orm.Node, error) {
	tx := db.Gorm.Offset(int(filter.PageSize*filter.PageNum)).Limit(int(filter.PageSize))
	tx = db.SetFilter(tx, filter)
	subQuery1 := tx.Model(&orm.NodeNotify{})
	subQuery2 := db.Gorm.Select("t.senderID").Where("senderType=?", protoManage.NotifySenderType_NotifySenderTypeNode).
		Table("(?) as t", subQuery1)
	var nodeList []orm.Node
	err := db.Gorm.Where("id = any(?)", subQuery2).Find(&nodeList).Error
	return nodeList, err
}

//获取节点通知计数
func (db *DB) FindNodeNotifyCount(filter protoManage.Filter) (int64, error) {
	tx := db.Gorm.Model(&orm.NodeNotify{})
	tx = db.SetFilter(tx, filter)
	var count int64
	err := tx.Count(&count).Error
	return count, err
}

//按节点ID查询节点通知
func (db *DB) FindNodeNotifyByNodeID(nodeID int64, offset int, num int) ([]orm.NodeNotify, error) {
	var nodeNotifyList []orm.NodeNotify
	err := db.Gorm.Where("NodeID = ?", nodeID).Order("id desc").
		Offset(offset).Limit(num).Find(&nodeNotifyList).Error
	return nodeNotifyList, err
}

//查询通知记录
//func (db *DB) dbFindNotifyRecord(num int32, offset int32, startDate string, endDate string, word string, messageType int32) ([]orm.Notifyrecord, bool) {
//	var notifyRecord []orm.Notifyrecord
//	db := db.Gorm.gormDB.Where("orderid LIKE ? OR message LIKE ? OR Sendername LIKE ?", "%"+word+"%", "%"+word+"%", "%"+word+"%")
//	db = db.Where("updated_at BETWEEN ? AND ?", startDate, endDate)
//	if messageType >= 0 {
//		db = db.Where("messagetype = ?", messageType)
//	}
//	errors := db.Order("recordid desc").Offset(int(offset)).Limit(int(num)).Find(&notifyRecord).Error
//	return notifyRecord, app.dbExecSuccess(errors)
//}

