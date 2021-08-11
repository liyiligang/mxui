package db

import (
	"github.com/liyiligang/klee/app/protoFiles/protoManage"
	"github.com/liyiligang/klee/app/typedef/orm"
	"github.com/pkg/errors"
	"gorm.io/gorm"
)

//新增节点报告
func (db *Server) AddNodeReport(nodeReport *orm.NodeReport) error {
	return db.Gorm.Create(nodeReport).Error
}

//删除节点报告
func (db *Server) DelNodeReport(nodeReport orm.NodeReport) error {
	return db.Gorm.Delete(&nodeReport).Error
}

//按节点ID删除所有节点报告
func (db *Server) DelAllNodeReportByNodeID(nodeReport orm.NodeReport) error {
	return db.Gorm.Where("nodeID = ?", nodeReport.NodeID).Delete(orm.NodeReport{}).Error
}

//按ID更新指定节点报告信息
func (db *Server) UpdateNodeReportInfo(nodeReport orm.NodeReport) error {
	return db.Gorm.Model(&nodeReport).Updates(map[string]interface{}{
		"func": nodeReport.Func, "state": nodeReport.State}).Error
}

//获取节点报告信息
func (db *Server) FindNodeReport(filter protoManage.Filter) ([]orm.NodeReport, error) {
	tx := db.Gorm.Offset(int(filter.PageSize*filter.PageNum)).Limit(int(filter.PageSize))
	tx = db.SetFilter(tx, filter)
	var nodeReportList []orm.NodeReport
	err := tx.Find(&nodeReportList).Error
	if errors.Is(err, gorm.ErrRecordNotFound) {
		return nodeReportList, nil
	}
	return nodeReportList, err
}

//获取节点报告计数
func (db *Server) FindNodeReportCount(filter protoManage.Filter) (int64, error) {
	tx := db.Gorm.Model(&orm.NodeReport{})
	tx = db.SetFilter(tx, filter)
	var count int64
	err := tx.Count(&count).Error
	return count, err
}

//获取节点报告状态统计
func (db *Server) FindNodeReportStateCount(filter protoManage.Filter) ([]orm.StateCount, error) {
	tx := db.Gorm.Offset(int(filter.PageSize*filter.PageNum)).Limit(int(filter.PageSize))
	tx = db.SetFilter(tx, filter)
	subQuery1 := tx.Model(&orm.Node{})
	subQuery2 := db.Gorm.Select("t.id").
		Table("(?) as t", subQuery1)
	var ormStateCountList []orm.StateCount
	err := db.Gorm.Model(&orm.NodeReport{}).Select("nodeID as parentID, count(state) as stateCount, state").Where("nodeID = any(?)", subQuery2).
		Group("nodeID").Group("state").Order("nodeID").Order("state").Find(&ormStateCountList).Error
	if err != nil {
		return nil, err
	}
	return ormStateCountList, nil
}

//获取节点报告中节点ID对应的节点信息
func (db *Server) FindNodeByNodeReport(filter protoManage.Filter) ([]orm.Node, error) {
	tx := db.Gorm.Offset(int(filter.PageSize*filter.PageNum)).Limit(int(filter.PageSize))
	tx = db.SetFilter(tx, filter)
	subQuery1 := tx.Model(&orm.NodeReport{})
	subQuery2 := db.Gorm.Select("t.nodeID").
		Table("(?) as t", subQuery1)
	var nodeList []orm.Node
	err := db.Gorm.Where("id = any(?)", subQuery2).Find(&nodeList).Error
	return nodeList, err
}

//按ID获取指定节点报告
func (db *Server) FindNodeReportByID(nodeReport orm.NodeReport) (*orm.NodeReport, error) {
	err := db.Gorm.First(&nodeReport, nodeReport.ID).Error
	return &nodeReport, err
}

//按名称获取指定节点报告
func (db *Server) FindNodeReportByIndex(nodeReport orm.NodeReport) (*orm.NodeReport, error) {
	err := db.Gorm.Where("nodeID = ? and name = ?",
		nodeReport.NodeID, nodeReport.Name).First(&nodeReport).Error
	return &nodeReport, err
}
