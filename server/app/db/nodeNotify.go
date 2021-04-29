package db

import "github.com/liyiligang/manage/typedef/orm"

//新增节点通知
func (db *DB) dbAddNodeNotify(nodeNotify orm.NodeNotify) error {
	return db.Gorm.Create(&nodeNotify).Error
}

//按节点ID查询节点通知
func (db *DB) dbFindNodeNotifyByNodeID(nodeID int64, offset int, num int) ([]orm.NodeNotify, error) {
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

