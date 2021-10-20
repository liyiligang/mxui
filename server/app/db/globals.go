package db

import (
	"github.com/liyiligang/klee/app/protoFiles/protoManage"
	"gorm.io/gorm"
)

type Server struct {
	Gorm              *gorm.DB
}

//设置过滤器参数
func (db *Server) SetFilter(tx *gorm.DB, filter protoManage.Filter) *gorm.DB {
	if filter.ID != 0 {
		tx.Where("id" + filter.IDSign + "?", filter.ID)
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
	if filter.Level != protoManage.Level_LevelNot {
		tx.Where("level = ?", filter.Level)
	}
	if filter.LevelLow != protoManage.Level_LevelNot {
		tx.Where("level <= ?", filter.LevelLow)
	}
	if filter.SenderName != "" {
		tx.Where("(senderID = any(select id from node where name like ? and senderType = ?)) " +
			"or (senderID = any(select id from manager where nickName like ? and senderType = ?))",
			"%"+filter.SenderName+"%", protoManage.NotifySenderType_NotifySenderTypeNode,
			"%"+filter.SenderName+"%", protoManage.NotifySenderType_NotifySenderTypeUser)
	}
	if filter.SenderType != protoManage.NotifySenderType_NotifySenderTypeUnknow {
		tx.Where("senderType = ?", filter.SenderType)
	}
	if filter.SenderBeginTime != 0 {
		tx.Where("UNIX_TIMESTAMP(updatedAt) >= ?", filter.SenderBeginTime)
	}
	if filter.SenderEndTime != 0 {
		tx.Where("UNIX_TIMESTAMP(updatedAt) <= ?", filter.SenderEndTime)
	}
	if filter.Message != "" {
		tx.Where("message like ?", "%"+filter.Message+"%")
	}
	return tx
}

