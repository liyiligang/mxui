// Copyright 2019 The Authors. All rights reserved.
// Author: liyiligang
// Date: 2019/10/8 22:27
// Description: 数据库事务处理

package app

import (
	"errors"
	"github.com/jinyun/base/protoFiles/protoManage"
	"gorm.io/gorm"
	"manageServer/typedef/orm"
)

//查找管理员(账号)
func (app *App) dbFindManagerByUserName(manager orm.Manager) (*orm.Manager, error) {
	err := app.db.Where("Name = ? and Password = ?", manager.Name, manager.Password).First(&manager).Error
	return &manager, err
}

//查找管理员(令牌)
func (app *App) dbFindManagerByToken(manager orm.Manager) (*orm.Manager, error) {
	err := app.db.Where("id = ? and Token = ?", manager.ID, manager.Token).First(&manager).Error
	return &manager, err
}

//查找管理员(ID)
func (app *App) dbFindManagerByID(manager orm.Manager) (*orm.Manager, error) {
	err := app.db.First(&manager, manager.ID).Error
	return &manager, err
}

//按ID更新管理员token
func (app *App) dbUpdateManagerToken(manager orm.Manager) (*orm.Base, error) {
	err := app.db.Model(&manager).Update("Token", manager.Token).Error
	return &manager.Base, err
}

//按ID更新管理员状态
func (app *App) dbUpdateManagerState(manager orm.Manager) (*orm.Base, error) {
	err := app.db.Model(&manager).Update("State", manager.State).Error
	return &manager.Base, err
}

//设置过滤器参数
func (app *App) dbSetFilter(tx *gorm.DB, filter protoManage.Filter) *gorm.DB {
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

//获取顶部链接
func (app *App) dbFindTopLink() ([]orm.TopLink, error) {
	var ormTopLinkList []orm.TopLink
	err := app.db.Find(&ormTopLinkList).Error
	return ormTopLinkList, err
}

//获取管理员
func (app *App) dbFindManager() ([]orm.Manager, error) {
	var ormManagerList []orm.Manager
	err := app.db.Find(&ormManagerList).Error
	return ormManagerList, err
}

//新增节点组
func (app *App) dbAddNodeGroup(nodeGroup orm.NodeGroup) error {
	return app.db.Create(&nodeGroup).Error
}

//删除节点组
func (app *App) dbDelNodeGroup(nodeGroup orm.NodeGroup) error {
	return app.db.Delete(&nodeGroup).Error
}

//获取节点组信息
func (app *App) dbFindNodeGroup(filter protoManage.Filter) ([]orm.NodeGroup, error) {
	tx := app.db.Offset(int(filter.PageSize*filter.PageNum)).Limit(int(filter.PageSize))
	tx = app.dbSetFilter(tx, filter)
	var nodeGroupList []orm.NodeGroup
	err := tx.Find(&nodeGroupList).Error
	if errors.Is(err, gorm.ErrRecordNotFound) {
		return nodeGroupList, nil
	}
	return nodeGroupList, err
}

//获取节点组计数
func (app *App) dbFindNodeGroupCount(filter protoManage.Filter) (int64, error) {
	tx := app.db.Model(&orm.NodeGroup{})
	tx = app.dbSetFilter(tx, filter)
	var count int64
	err := tx.Count(&count).Error
	return count, err
}

//按ID获取指定节点组
func (app *App) dbFindNodeGroupByID(nodeGroup orm.NodeGroup) (*orm.NodeGroup, error) {
	err := app.db.Where("id = ?", nodeGroup.ID).First(&nodeGroup).Error
	return &nodeGroup, err
}

//按名称获取指定节点组
func (app *App) dbFindNodeGroupByName(nodeGroup orm.NodeGroup) (*orm.NodeGroup, error) {
	err := app.db.Where("name = ?", nodeGroup.Name).First(&nodeGroup).Error
	return &nodeGroup, err
}

//新增节点类型
func (app *App) dbAddNodeType(nodeType orm.NodeType) error {
	return app.db.Create(&nodeType).Error
}

//删除节点类型
func (app *App) dbDelNodeType(nodeType orm.NodeType) error {
	return app.db.Delete(&nodeType).Error
}

//获取节点类型信息
func (app *App) dbFindNodeType(filter protoManage.Filter) ([]orm.NodeType, error) {
	tx := app.db.Offset(int(filter.PageSize*filter.PageNum)).Limit(int(filter.PageSize))
	tx = app.dbSetFilter(tx, filter)
	var nodeTypeList []orm.NodeType
	err := tx.Find(&nodeTypeList).Error
	if errors.Is(err, gorm.ErrRecordNotFound) {
		return nodeTypeList, nil
	}
	return nodeTypeList, err
}

//获取节点类型计数
func (app *App) dbFindNodeTypeCount(filter protoManage.Filter) (int64, error) {
	tx := app.db.Model(&orm.NodeType{})
	tx = app.dbSetFilter(tx, filter)
	var count int64
	err := tx.Count(&count).Error
	return count, err
}

//按ID获取指定节点类型
func (app *App) dbFindNodeTypeByID(nodeType orm.NodeType) (*orm.NodeType, error) {
	err := app.db.Where("id = ?", nodeType.ID).First(&nodeType).Error
	return &nodeType, err
}

//按名称获取指定节点类型
func (app *App) dbFindNodeTypeByName(nodeType orm.NodeType) (*orm.NodeType, error) {
	err := app.db.Where("name = ?", nodeType.Name).First(&nodeType).Error
	return &nodeType, err
}

//新增节点
func (app *App) dbAddNode(node orm.Node) error {
	return app.db.Create(&node).Error
}

//删除节点
func (app *App) dbDelNode(node orm.Node) error {
	return app.db.Delete(&node).Error
}

//按ID更新节点状态
func (app *App) dbUpdateNodeState(node orm.Node) error {
	return app.db.Model(&node).Update("State", node.State).Error
}

//获取节点信息
func (app *App) dbFindNode(filter protoManage.Filter) ([]orm.Node, error) {
	tx := app.db.Offset(int(filter.PageSize*filter.PageNum)).Limit(int(filter.PageSize))
	tx = app.dbSetFilter(tx, filter)
	var nodeList []orm.Node
	err := tx.Find(&nodeList).Error
	if errors.Is(err, gorm.ErrRecordNotFound) {
		return nodeList, nil
	}
	return nodeList, err
}

//获取节点计数
func (app *App) dbFindNodeCount(filter protoManage.Filter) (int64, error) {
	tx := app.db.Model(&orm.Node{})
	tx = app.dbSetFilter(tx, filter)
	var count int64
	err := tx.Count(&count).Error
	return count, err
}

//获取节点状态统计
func (app *App) dbFindNodeStateCount(filter protoManage.Filter, groupField string) ([]protoManage.StateCount, error) {
	tx := app.db.Offset(int(filter.PageSize*filter.PageNum)).Limit(int(filter.PageSize))
	tx = app.dbSetFilter(tx, filter)
	subQuery1 := tx.Model(&orm.NodeGroup{})
	subQuery2 := app.db.Select("t.id").
		Table("(?) as t", subQuery1)
	var ormStateCountList []orm.StateCount
	err := app.db.Model(&orm.Node{}).Select(groupField + " as parentID, count(state) as stateCount, state").Where(groupField+" = any(?)", subQuery2).
		Group(groupField).Group("state").Order(groupField).Order("state").Find(&ormStateCountList).Error
	if err != nil {
		return nil, err
	}
	protoStateCountList := app.ormStateCountListToprotoStateCountList(ormStateCountList)
	return protoStateCountList, nil
}

//获取节点中节点组ID对应的节点组信息
func (app *App) dbFindNodeGroupByNode(filter protoManage.Filter) ([]orm.NodeGroup, error) {
	tx := app.db.Offset(int(filter.PageSize*filter.PageNum)).Limit(int(filter.PageSize))
	tx = app.dbSetFilter(tx, filter)
	subQuery1 := tx.Model(&orm.Node{})
	subQuery2 := app.db.Select("t.groupID").
		Table("(?) as t", subQuery1)
	var nodeGroupList []orm.NodeGroup
	err := app.db.Where("id = any(?)", subQuery2).Find(&nodeGroupList).Error
	return nodeGroupList, err
}

//获取节点中节点类型ID对应的节点类型信息
func (app *App) dbFindNodeTypeByNode(filter protoManage.Filter) ([]orm.NodeType, error) {
	tx := app.db.Offset(int(filter.PageSize*filter.PageNum)).Limit(int(filter.PageSize))
	tx = app.dbSetFilter(tx, filter)
	subQuery1 := tx.Model(&orm.Node{})
	subQuery2 := app.db.Select("t.typeID").
		Table("(?) as t", subQuery1)
	var nodeTypeList []orm.NodeType
	err := app.db.Where("id = any(?)", subQuery2).Find(&nodeTypeList).Error
	return nodeTypeList, err
}

//按ID获取指定节点
func (app *App) dbFindNodeByID(node orm.Node) (*orm.Node, error) {
	err := app.db.Where("id = ?", node.ID).First(&node).Error
	return &node, err
}

//按节点名获取指定节点
func (app *App) dbFindNodeByName(node orm.Node) (*orm.Node, error) {
	err := app.db.Where("name = ? and groupID = ? and typeID = ?",
		node.Name, node.GroupID, node.TypeID).First(&node).Error
	return &node, err
}

//按节点组ID获取节点计数
func (app *App) dbCountAllNodeByGroupID(node orm.Node) (int64, error) {
	var count int64
	err := app.db.Model(&orm.Node{}).Where("groupID = ?", node.GroupID).Count(&count).Error
	return count, err
}

//按节点类型ID获取节点计数
func (app *App) dbCountAllNodeByTypeID(node orm.Node) (int64, error) {
	var count int64
	err := app.db.Model(&orm.Node{}).Where("typeID = ?", node.TypeID).Count(&count).Error
	return count, err
}

//新增节点连接
func (app *App) dbAddNodeLink(nodeLink orm.NodeLink) error {
	return app.db.Create(&nodeLink).Error
}

//删除节点连接
func (app *App) dbDelNodeLink(nodeLink orm.NodeLink) error {
	return app.db.Delete(&nodeLink).Error
}

//按节点ID删除所有节点连接
func (app *App) dbDelAllNodeLinkByNodeID(nodeLink orm.NodeLink) error {
	return app.db.Where("sourceID = ? or targetID = ?", nodeLink.SourceID, nodeLink.TargetID).Delete(orm.NodeLink{}).Error
}

//按ID更新节点连接状态
func (app *App) dbUpdateNodeLinkState(nodeLink orm.NodeLink) error {
	return app.db.Model(&nodeLink).Update("state", nodeLink.State).Error
}

//获取节点连接信息
func (app *App) dbFindNodeLink(filter protoManage.Filter) ([]orm.NodeLink, error) {
	tx := app.db.Offset(int(filter.PageSize*filter.PageNum)).Limit(int(filter.PageSize))
	tx = app.dbSetFilter(tx, filter)
	var nodeLinkList []orm.NodeLink
	err := tx.Find(&nodeLinkList).Error
	if errors.Is(err, gorm.ErrRecordNotFound) {
		return nodeLinkList, nil
	}
	return nodeLinkList, err
}

//获取节点连接计数
func (app *App) dbFindNodeLinkCount(filter protoManage.Filter) (int64, error) {
	tx := app.db.Model(&orm.NodeLink{})
	tx = app.dbSetFilter(tx, filter)
	var count int64
	err := tx.Count(&count).Error
	return count, err
}

//获取节点连接源节点状态统计
func (app *App) dbFindNodeLinkTargetStateCount(filter protoManage.Filter) ([]protoManage.StateCount, error) {
	tx := app.db.Offset(int(filter.PageSize*filter.PageNum)).Limit(int(filter.PageSize))
	tx = app.dbSetFilter(tx, filter)
	subQuery1 := tx.Model(&orm.Node{})
	subQuery2 := app.db.Select("t.id").
		Table("(?) as t", subQuery1)
	var ormStateCountList []orm.StateCount
	err := app.db.Model(&orm.NodeLink{}).Select("targetID as parentID, count(state) as stateCount, state").Where("targetID = any(?)", subQuery2).
		Group("targetID").Group("state").Order("targetID").Order("state").Find(&ormStateCountList).Error
	if err != nil {
		return nil, err
	}
	protoStateCountList := app.ormStateCountListToprotoStateCountList(ormStateCountList)
	return protoStateCountList, nil
}

//获取节点连接目标节点状态统计
func (app *App) dbFindNodeLinkSourceStateCount(filter protoManage.Filter) ([]protoManage.StateCount, error) {
	tx := app.db.Offset(int(filter.PageSize*filter.PageNum)).Limit(int(filter.PageSize))
	tx = app.dbSetFilter(tx, filter)
	subQuery1 := tx.Model(&orm.Node{})
	subQuery2 := app.db.Select("t.id").
		Table("(?) as t", subQuery1)
	var ormStateCountList []orm.StateCount
	err := app.db.Model(&orm.NodeLink{}).Select("sourceID as parentID, count(state) as stateCount, state").Where("sourceID = any(?)", subQuery2).
		Group("sourceID").Group("state").Order("sourceID").Order("state").Find(&ormStateCountList).Error
	if err != nil {
		return nil, err
	}
	protoStateCountList := app.ormStateCountListToprotoStateCountList(ormStateCountList)
	return protoStateCountList, nil
}

//获取节点连接中节点ID对应的节点信息
func (app *App) dbFindNodeByNodeLink(filter protoManage.Filter) ([]orm.Node, error) {
	tx := app.db.Offset(int(filter.PageSize*filter.PageNum)).Limit(int(filter.PageSize))
	tx = app.dbSetFilter(tx, filter)
	subQuery1 := tx.Model(&orm.NodeLink{})
	subQuery2 := app.db.Select("t.sourceID").
		Table("(?) as t", subQuery1)
	subQuery3 := app.db.Select("t.targetID").
		Table("(?) as t", subQuery1)
	var nodeList []orm.Node
	err := app.db.Where("id = any(?) or id = any(?)", subQuery2, subQuery3).Find(&nodeList).Error
	return nodeList, err
}

//按ID获取指定节点连接
func (app *App) dbFindNodeLinkByID(nodeLink orm.NodeLink) (*orm.NodeLink, error) {
	err := app.db.First(&nodeLink, nodeLink.ID).Error
	return &nodeLink, err
}

//按节点ID获取指定节点连接
func (app *App) dbFindNodeLinkByNodeID(nodeLink orm.NodeLink) (*orm.NodeLink, error) {
	err := app.db.Where("sourceID = ? and targetID = ?", nodeLink.SourceID, nodeLink.TargetID).First(&nodeLink).Error
	return &nodeLink, err
}

//新增节点方法
func (app *App) dbAddNodeFunc(nodeFunc orm.NodeFunc) error {
	return app.db.Create(&nodeFunc).Error
}

//删除节点方法
func (app *App) dbDelNodeFunc(nodeFunc orm.NodeFunc) error {
	return app.db.Delete(nodeFunc).Error
}

//按节点ID删除所有节点方法
func (app *App) dbDelAllNodeFuncByNodeID(nodeFunc orm.NodeFunc) error {
	return app.db.Where("nodeID = ?", nodeFunc.NodeID).Delete(orm.NodeFunc{}).Error
}

//按ID更新指定节点方法名
func (app *App) dbUpdateNodeFuncNameByID(nodeFunc orm.NodeFunc) error {
	return app.db.Model(&nodeFunc).
		Updates(map[string]interface{}{"name": nodeFunc.Name}).Error
}

//获取节点方法信息
func (app *App) dbFindNodeFunc(filter protoManage.Filter) ([]orm.NodeFunc, error) {
	tx := app.db.Offset(int(filter.PageSize*filter.PageNum)).Limit(int(filter.PageSize))
	tx = app.dbSetFilter(tx, filter)
	var nodeFuncList []orm.NodeFunc
	err := tx.Find(&nodeFuncList).Error
	if errors.Is(err, gorm.ErrRecordNotFound) {
		return nodeFuncList, nil
	}
	return nodeFuncList, err
}

//获取节点方法计数
func (app *App) dbFindNodeFuncCount(filter protoManage.Filter) (int64, error) {
	tx := app.db.Model(&orm.NodeFunc{})
	tx = app.dbSetFilter(tx, filter)
	var count int64
	err := tx.Count(&count).Error
	return count, err
}

//获取节点方法状态统计
func (app *App) dbFindNodeFuncStateCount(filter protoManage.Filter) ([]protoManage.StateCount, error) {
	tx := app.db.Offset(int(filter.PageSize*filter.PageNum)).Limit(int(filter.PageSize))
	tx = app.dbSetFilter(tx, filter)
	subQuery1 := tx.Model(&orm.Node{})
	subQuery2 := app.db.Select("t.id").
		Table("(?) as t", subQuery1)
	var ormStateCountList []orm.StateCount
	err := app.db.Model(&orm.NodeFunc{}).Select("nodeID as parentID, count(state) as stateCount, state").Where("nodeID = any(?)", subQuery2).
		Group("nodeID").Group("state").Order("nodeID").Order("state").Find(&ormStateCountList).Error
	if err != nil {
		return nil, err
	}
	protoStateCountList := app.ormStateCountListToprotoStateCountList(ormStateCountList)
	return protoStateCountList, nil
}

//获取节点方法中节点ID对应的节点信息
func (app *App) dbFindNodeByNodeFunc(filter protoManage.Filter) ([]orm.Node, error) {
	tx := app.db.Offset(int(filter.PageSize*filter.PageNum)).Limit(int(filter.PageSize))
	tx = app.dbSetFilter(tx, filter)
	subQuery1 := tx.Model(&orm.NodeFunc{})
	subQuery2 := app.db.Select("t.nodeID").
		Table("(?) as t", subQuery1)
	var nodeList []orm.Node
	err := app.db.Where("id = any(?)", subQuery2).Find(&nodeList).Error
	return nodeList, err
}

//按ID获取指定节点方法
func (app *App) dbFindNodeFuncByID(nodeFunc orm.NodeFunc) (*orm.NodeFunc, error) {
	err := app.db.First(&nodeFunc, nodeFunc.ID).Error
	return &nodeFunc, err
}

//按名称获取指定节点方法
func (app *App) dbFindNodeFuncByName(nodeFunc orm.NodeFunc) (*orm.NodeFunc, error) {
	err := app.db.Where("name = ? and nodeID = ?", nodeFunc.Name, nodeFunc.NodeID).First(&nodeFunc).Error
	return &nodeFunc, err
}

//新增节点方法调用
func (app *App) dbAddNodeFuncCall(nodeFuncCall orm.NodeFuncCall) (*orm.Base, error) {
	err := app.db.Create(&nodeFuncCall).Error
	return &nodeFuncCall.Base, err
}

//按ID更新节点方法调用
func (app *App) dbUpdateNodeFuncCallByID(nodeFuncCall orm.NodeFuncCall) error {
	err := app.db.Model(&nodeFuncCall).
		Updates(map[string]interface{}{
			"returnVal": nodeFuncCall.ReturnVal,
			"state": nodeFuncCall.State}).Error
	return err
}

//获取节点方法调用信息
func (app *App) dbFindNodeFuncCall(filter protoManage.Filter) ([]orm.NodeFuncCall, error) {
	tx := app.db.Offset(int(filter.PageSize*filter.PageNum)).Limit(int(filter.PageSize))
	tx = app.dbSetFilter(tx, filter)
	var NodeFuncCallList []orm.NodeFuncCall
	err := tx.Order("id desc").Find(&NodeFuncCallList).Error
	if errors.Is(err, gorm.ErrRecordNotFound) {
		return NodeFuncCallList, nil
	}
	return NodeFuncCallList, err
}

//按ID获取指定节点方法调用
func (app *App) dbFindNodeFuncCallByID(nodeFuncCall orm.NodeFuncCall) (*orm.NodeFuncCall, error) {
	err := app.db.First(&nodeFuncCall, nodeFuncCall.ID).Error
	return &nodeFuncCall, err
}

//获取节点方法调用中节点方法ID对应的最后一次调用信息
func (app *App) dbFindLastNodeFuncCallByNodeFunc(filter protoManage.Filter) ([]orm.NodeFuncCall, error) {
	tx := app.db.Offset(int(filter.PageSize*filter.PageNum)).Limit(int(filter.PageSize))
	tx = app.dbSetFilter(tx, filter)
	subQuery1 := tx.Model(&orm.NodeFunc{})
	subQuery2 := app.db.Select("t.id").Table("(?) as t", subQuery1)
	subQuery3 := app.db.Select("max(id)").Table("nodeFuncCall").
		Where("funcID = any(?)", subQuery2).Group("funcID")
	var nodeFuncCallList []orm.NodeFuncCall
	err := app.db.Where("id = any(?)", subQuery3).Find(&nodeFuncCallList).Error
	return nodeFuncCallList, err
}

//新增节点报告
func (app *App) dbAddNodeReport(nodeReport orm.NodeReport) error {
	return app.db.Create(&nodeReport).Error
}

//新增节点报告值
func (app *App) dbAddNodeReportVal(nodeReportVal orm.NodeReportVal) (*orm.Base, error) {
	err := app.db.Create(&nodeReportVal).Error
	return &nodeReportVal.Base, err
}

//删除节点报告
func (app *App) dbDelNodeReport(nodeReport orm.NodeReport) error {
	return app.db.Delete(&nodeReport).Error
}

//按节点ID删除所有节点报告
func (app *App) dbDelAllNodeReportByNodeID(nodeReport orm.NodeReport) error {
	return app.db.Where("nodeID = ?", nodeReport.NodeID).Delete(orm.NodeReport{}).Error
}

////按ID更新指定节点报告值
//func (app *App) dbUpdateNodeReportValueByID(nodeReport orm.NodeReport) (*orm.Base, error) {
//	err := app.db.Model(&nodeReport).
//		Updates(map[string]interface{}{"Value": nodeReport.Value}).Error
//	return &nodeReport.Base, err
//}

//获取节点报告信息
func (app *App) dbFindNodeReport(filter protoManage.Filter) ([]orm.NodeReport, error) {
	tx := app.db.Offset(int(filter.PageSize*filter.PageNum)).Limit(int(filter.PageSize))
	tx = app.dbSetFilter(tx, filter)
	var nodeReportList []orm.NodeReport
	err := tx.Find(&nodeReportList).Error
	if errors.Is(err, gorm.ErrRecordNotFound) {
		return nodeReportList, nil
	}
	return nodeReportList, err
}

//获取节点报告计数
func (app *App) dbFindNodeReportCount(filter protoManage.Filter) (int64, error) {
	tx := app.db.Model(&orm.NodeReport{})
	tx = app.dbSetFilter(tx, filter)
	var count int64
	err := tx.Count(&count).Error
	return count, err
}

//获取节点报告状态统计
func (app *App) dbFindNodeReportStateCount(filter protoManage.Filter) ([]protoManage.StateCount, error) {
	tx := app.db.Offset(int(filter.PageSize*filter.PageNum)).Limit(int(filter.PageSize))
	tx = app.dbSetFilter(tx, filter)
	subQuery1 := tx.Model(&orm.Node{})
	subQuery2 := app.db.Select("t.id").
		Table("(?) as t", subQuery1)
	var ormStateCountList []orm.StateCount
	err := app.db.Model(&orm.NodeReport{}).Select("nodeID as parentID, count(state) as stateCount, state").Where("nodeID = any(?)", subQuery2).
		Group("nodeID").Group("state").Order("nodeID").Order("state").Find(&ormStateCountList).Error
	if err != nil {
		return nil, err
	}
	protoStateCountList := app.ormStateCountListToprotoStateCountList(ormStateCountList)
	return protoStateCountList, nil
}

//获取节点报告中节点ID对应的节点信息
func (app *App) dbFindNodeByNodeReport(filter protoManage.Filter) ([]orm.Node, error) {
	tx := app.db.Offset(int(filter.PageSize*filter.PageNum)).Limit(int(filter.PageSize))
	tx = app.dbSetFilter(tx, filter)
	subQuery1 := tx.Model(&orm.NodeReport{})
	subQuery2 := app.db.Select("t.nodeID").
		Table("(?) as t", subQuery1)
	var nodeList []orm.Node
	err := app.db.Where("id = any(?)", subQuery2).Find(&nodeList).Error
	return nodeList, err
}

//获取节点报告中节点报告ID对应的最后一次报告值
func (app *App) dbFindLastNodeReportValByNodeReport(filter protoManage.Filter) ([]orm.NodeReportVal, error) {
	tx := app.db.Offset(int(filter.PageSize*filter.PageNum)).Limit(int(filter.PageSize))
	tx = app.dbSetFilter(tx, filter)
	subQuery1 := tx.Model(&orm.NodeReport{})
	subQuery2 := app.db.Select("t.id").Table("(?) as t", subQuery1)
	subQuery3 := app.db.Select("max(id)").Table("nodeReportVal").
		Where("reportID = any(?)", subQuery2).Group("reportID")
	var nodeReportValList []orm.NodeReportVal
	err := app.db.Where("id = any(?)", subQuery3).Find(&nodeReportValList).Error
	return nodeReportValList, err
}

//获取节点报告值信息
func (app *App) dbFindNodeReportVal(filter protoManage.Filter) ([]orm.NodeReportVal, error) {
	tx := app.db.Offset(int(filter.PageSize*filter.PageNum)).Limit(int(filter.PageSize))
	tx = app.dbSetFilter(tx, filter)
	var NodeReportValList []orm.NodeReportVal
	err := tx.Order("id desc").Find(&NodeReportValList).Error
	if errors.Is(err, gorm.ErrRecordNotFound) {
		return NodeReportValList, nil
	}
	return NodeReportValList, err
}

//按ID获取指定节点报告
func (app *App) dbFindNodeReportByID(nodeReport orm.NodeReport) (*orm.NodeReport, error) {
	err := app.db.First(&nodeReport, nodeReport.ID).Error
	return &nodeReport, err
}

//按名称获取指定节点报告
func (app *App) dbFindNodeReportByName(nodeReport orm.NodeReport) (*orm.NodeReport, error) {
	err := app.db.Where("name = ? and flag = ? and nodeID = ?",
		nodeReport.Name, nodeReport.Flag, nodeReport.NodeID).First(&nodeReport).Error
	return &nodeReport, err
}

//新增节点通知
func (app *App) dbAddNodeNotify(nodeNotify orm.NodeNotify) error {
	return app.db.Create(&nodeNotify).Error
}

//按节点ID查询节点通知
func (app *App) dbFindNodeNotifyByNodeID(nodeID int64, offset int, num int) ([]orm.NodeNotify, error) {
	var nodeNotifyList []orm.NodeNotify
	err := app.db.Where("NodeID = ?", nodeID).Order("id desc").
		Offset(offset).Limit(num).Find(&nodeNotifyList).Error
	return nodeNotifyList, err
}

//查询通知记录
//func (app *App) dbFindNotifyRecord(num int32, offset int32, startDate string, endDate string, word string, messageType int32) ([]orm.Notifyrecord, bool) {
//	var notifyRecord []orm.Notifyrecord
//	db := app.db.gormDB.Where("orderid LIKE ? OR message LIKE ? OR Sendername LIKE ?", "%"+word+"%", "%"+word+"%", "%"+word+"%")
//	db = db.Where("updated_at BETWEEN ? AND ?", startDate, endDate)
//	if messageType >= 0 {
//		db = db.Where("messagetype = ?", messageType)
//	}
//	errors := db.Order("recordid desc").Offset(int(offset)).Limit(int(num)).Find(&notifyRecord).Error
//	return notifyRecord, app.dbExecSuccess(errors)
//}
