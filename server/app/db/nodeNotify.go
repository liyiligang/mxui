package db

import (
	"github.com/liyiligang/klee/app/protoFiles/protoManage"
	"github.com/liyiligang/klee/app/typedef/orm"
	"github.com/pkg/errors"
	"gorm.io/gorm"
)

//新增节点通知
func (db *Server) AddNodeNotify(nodeNotify orm.NodeNotify) error {
	return db.Gorm.Create(&nodeNotify).Error
}

//获取节点通知信息
func (db *Server) FindNodeNotify(req *protoManage.ReqNodeNotifyList) ([]orm.NodeNotify, error) {
	tx := db.Gorm.Offset(int(req.Page.Count*req.Page.Num)).Limit(int(req.Page.Count))
	tx = db.SetNodeNotifyFilter(tx, req)
	var nodeNotifyList []orm.NodeNotify
	err := tx.Order("id desc").Find(&nodeNotifyList).Error
	if errors.Is(err, gorm.ErrRecordNotFound) {
		return nodeNotifyList, nil
	}
	return nodeNotifyList, err
}

//获取节点通知中节点ID对应的节点信息
func (db *Server) FindNodeByNodeNotify(req *protoManage.ReqNodeNotifyList) ([]orm.Node, error) {
	tx := db.Gorm.Offset(int(req.Page.Count*req.Page.Num)).Limit(int(req.Page.Count))
	tx = db.SetNodeNotifyFilter(tx, req)
	subQuery1 := tx.Model(&orm.NodeNotify{}).Order("id desc")
	subQuery2 := db.Gorm.Select("t.senderID").Where("senderType=?", protoManage.NotifySenderType_NotifySenderTypeNode).
		Table("(?) as t", subQuery1)
	var nodeList []orm.Node
	err := db.Gorm.Where("id = any(?)", subQuery2).Find(&nodeList).Error
	return nodeList, err
}

//获取节点通知计数
func (db *Server) FindNodeNotifyCount(req *protoManage.ReqNodeNotifyList) (int64, error) {
	tx := db.Gorm.Model(&orm.NodeNotify{})
	tx = db.SetNodeNotifyFilter(tx, req)
	var count int64
	err := tx.Count(&count).Error
	return count, err
}

//按节点ID查询节点通知
func (db *Server) FindNodeNotifyByNodeID(nodeID int64, offset int, num int) ([]orm.NodeNotify, error) {
	var nodeNotifyList []orm.NodeNotify
	err := db.Gorm.Where("NodeID = ?", nodeID).Order("id desc").
		Offset(offset).Limit(num).Find(&nodeNotifyList).Error
	return nodeNotifyList, err
}

//节点通知过滤器
func (db *Server) SetNodeNotifyFilter(tx *gorm.DB, req *protoManage.ReqNodeNotifyList) *gorm.DB {
	sql := db.spliceSql("message like ?", len(req.Message), "or")
	var message []interface{}
	for _, item := range req.Message {
		message = append(message, "%"+item+"%")
	}
	tx.Where(sql, message...)

	sql = db.spliceSql("state = ?", len(req.State), "or")
	var state []interface{}
	for _, item := range req.State {
		state = append(state, item)
	}
	tx.Where(sql, state...)

	sql = db.spliceSql("(senderID = any(select id from node where name like ? and senderType = ?)) or " +
		"(senderID = any(select id from manager where nickName like ? and senderType = ?))", len(req.SenderName), "or")
	var senderName []interface{}
	for _, item := range req.SenderName {
		senderName = append(senderName, "%"+item+"%")
		senderName = append(senderName, protoManage.NotifySenderType_NotifySenderTypeNode)
		senderName = append(senderName, "%"+item+"%")
		senderName = append(senderName, protoManage.NotifySenderType_NotifySenderTypeUser)
	}
	tx.Where(sql, senderName...)

	sql = db.spliceSql("senderType = ?", len(req.SenderType), "or")
	var senderType []interface{}
	for _, item := range req.SenderType {
		senderType = append(senderType, item)
	}
	tx.Where(sql, senderType...)

	sql = ""
	var senderTime []interface{}
	for index, item := range req.SenderTime {
		if item.BeginTime > 0 {
			sql += "(UNIX_TIMESTAMP(updatedAt) >= ?"
			senderTime = append(senderTime, item.BeginTime)
			if item.EndTime > 0 {
				sql += " and UNIX_TIMESTAMP(updatedAt) <= ?)"
				senderTime = append(senderTime, item.EndTime)
			}else {
				sql += ")"
			}
		}else {
			sql += "(UNIX_TIMESTAMP(updatedAt) <= ?)"
			senderTime = append(senderTime, item.EndTime)
		}
		if index < len(req.SenderTime)-1 {
			sql += " "+ "or" + " "
		}
	}
	tx.Where(sql, senderTime...)
	return tx
}

