package db

import (
	"github.com/liyiligang/base/protoFiles/protoManage"
	"github.com/liyiligang/manage/app/typedef/orm"
	"github.com/pkg/errors"
	"gorm.io/gorm"
)

//新增节点报告
func (db *Server) AddNodeReport(nodeReport orm.NodeReport) error {
	return db.Gorm.Create(&nodeReport).Error
}

//新增节点报告值
func (db *Server) AddNodeReportVal(nodeReportVal orm.NodeReportVal) (*orm.Base, error) {
	err := db.Gorm.Create(&nodeReportVal).Error
	return &nodeReportVal.Base, err
}

//删除节点报告
func (db *Server) DelNodeReport(nodeReport orm.NodeReport) error {
	return db.Gorm.Delete(&nodeReport).Error
}

//按节点ID删除所有节点报告
func (db *Server) DelAllNodeReportByNodeID(nodeReport orm.NodeReport) error {
	return db.Gorm.Where("nodeID = ?", nodeReport.NodeID).Delete(orm.NodeReport{}).Error
}

//按ID更新指定节点报告值
func (db *Server) UpdateNodeReportValueByID(nodeReportVal orm.NodeReportVal) error {
	return db.Gorm.Model(&nodeReportVal).
		Updates(map[string]interface{}{"Value": nodeReportVal.Value, "State": nodeReportVal.State}).Error
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

//获取节点报告中节点报告ID对应的最后一次报告值
func (db *Server) FindLastNodeReportValByNodeReport(filter protoManage.Filter) ([]orm.NodeReportVal, error) {
	tx := db.Gorm.Offset(int(filter.PageSize*filter.PageNum)).Limit(int(filter.PageSize))
	tx = db.SetFilter(tx, filter)
	subQuery1 := tx.Model(&orm.NodeReport{})
	subQuery2 := db.Gorm.Select("t.id").Table("(?) as t", subQuery1)
	subQuery3 := db.Gorm.Select("max(id)").Table("nodeReportVal").
		Where("reportID = any(?)", subQuery2).Group("reportID")
	var nodeReportValList []orm.NodeReportVal
	err := db.Gorm.Where("id = any(?)", subQuery3).Find(&nodeReportValList).Error
	return nodeReportValList, err
}

//获取节点报告值信息
func (db *Server) FindNodeReportVal(filter protoManage.Filter) ([]orm.NodeReportVal, error) {
	tx := db.Gorm.Offset(int(filter.PageSize*filter.PageNum)).Limit(int(filter.PageSize))
	tx = db.SetFilter(tx, filter)
	var NodeReportValList []orm.NodeReportVal
	err := tx.Order("id desc").Find(&NodeReportValList).Error
	if errors.Is(err, gorm.ErrRecordNotFound) {
		return NodeReportValList, nil
	}
	return NodeReportValList, err
}

//按ID获取指定节点报告
func (db *Server) FindNodeReportByID(nodeReport orm.NodeReport) (*orm.NodeReport, error) {
	err := db.Gorm.First(&nodeReport, nodeReport.ID).Error
	return &nodeReport, err
}

//按名称获取指定节点报告
func (db *Server) FindNodeReportByName(nodeReport orm.NodeReport) (*orm.NodeReport, error) {
	err := db.Gorm.Where("name = ? and flag = ? and nodeID = ?",
		nodeReport.Name, nodeReport.Flag, nodeReport.NodeID).First(&nodeReport).Error
	return &nodeReport, err
}
