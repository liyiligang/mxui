package db

import (
	"github.com/liyiligang/klee/app/protoFiles/protoManage"
	"github.com/liyiligang/klee/app/typedef/orm"
	"github.com/pkg/errors"
	"gorm.io/gorm"
)

//新增节点
func (db *Server) AddNode(node *orm.Node) error {
	return db.Gorm.Create(node).Error
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
func (db *Server) FindNode(req *protoManage.ReqNodeList) ([]orm.Node, error) {
	tx := db.Gorm.Offset(int(req.Page.Count*req.Page.Num)).Limit(int(req.Page.Count))
	tx = db.SetNodeFilter(tx, req)
	var nodeList []orm.Node
	err := tx.Find(&nodeList).Error
	if errors.Is(err, gorm.ErrRecordNotFound) {
		return nodeList, nil
	}
	return nodeList, err
}

//获取节点计数
func (db *Server) FindNodeCount(req *protoManage.ReqNodeList) (int64, error) {
	tx := db.Gorm.Model(&orm.Node{})
	tx = db.SetNodeFilter(tx, req)
	var count int64
	err := tx.Count(&count).Error
	return count, err
}

//按ID获取指定节点
func (db *Server) FindNodeByID(node orm.Node) (*orm.Node, error) {
	err := db.Gorm.Where("id = ?", node.ID).First(&node).Error
	return &node, err
}

//按节点名获取指定节点
func (db *Server) FindNodeByName(node orm.Node) (*orm.Node, error) {
	err := db.Gorm.Where("name = ?", node.Name).First(&node).Error
	return &node, err
}

//节点过滤器
func (db *Server) SetNodeFilter(tx *gorm.DB, req *protoManage.ReqNodeList) *gorm.DB {
	sql := db.spliceSql("id = ?", len(req.ID), "or")
	var id []interface{}
	for _, item := range req.ID {
		id = append(id, item)
	}
	tx.Where(sql, id...)

	sql = db.spliceSql("name like ?", len(req.Name), "or")
	var name []interface{}
	for _, item := range req.Name {
		name = append(name, "%"+item+"%")
	}
	tx.Where(sql, name...)

	sql = db.spliceSql("state = ?", len(req.State), "or")
	var state []interface{}
	for _, item := range req.State {
		state = append(state, item)
	}
	tx.Where(sql, state...)

	sql = ""
	var senderTime []interface{}
	for index, item := range req.UpdateTime {
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
		if index < len(req.UpdateTime)-1 {
			sql += " "+ "or" + " "
		}
	}
	tx.Where(sql, senderTime...)
	return tx
}