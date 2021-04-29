// Copyright 2019 The Authors. All rights reserved.
// Author: liyiligang
// Date: 2019/12/10 11:56
// Description: 数据管理

package app

import (
	"github.com/liyiligang/base/component/Jtoken"
	"github.com/liyiligang/base/protoFiles/protoManage"
	"github.com/liyiligang/manage/typedef/config"
	"github.com/liyiligang/manage/typedef/orm"
	"github.com/pkg/errors"
	"gorm.io/gorm"
	"time"
)



//查找顶部链接信息
func (app *App) topLinkFind(req protoManage.ReqTopLinkList) (*protoManage.AnsTopLinkList, error) {
	ormTopLink, err := app.dbFindTopLink()
	if err != nil {
		return nil, err
	}
	protoTopLink := app.ormTopLinkListToProtoTopLinkList(ormTopLink)
	return &protoManage.AnsTopLinkList{TopLinkList: protoTopLink}, nil
}



//新增节点类型
func (app *App) nodeTypeAdd(protoNodeType *protoManage.NodeType) error {
	if err := app.nodeTypeCheck(protoNodeType); err != nil {
		return err
	}
	return app.dbAddNodeType(orm.NodeType{Name: protoNodeType.Name})
}

//删除节点类型
func (app *App) nodeTypeDel(protoNodeType *protoManage.NodeType) error {
	return app.dbDelNodeType(orm.NodeType{Base:orm.Base{ID: protoNodeType.Base.ID}})
}

//按节点类型名查找节点类型
func (app *App) nodeTypeFindByName(protoNodeType *protoManage.NodeType) error {
	ormNodeType, err := app.dbFindNodeTypeByName(orm.NodeType{Name: protoNodeType.Name})
	if err != nil {
		return err
	}
	app.ormNodeTypeToProtoNodeType(ormNodeType, protoNodeType)
	return nil
}

//按节点类型名查找或者新增节点类型
func (app *App) nodeTypeFindOrAddByName(protoNodeType *protoManage.NodeType) error {
	err := app.nodeTypeFindByName(protoNodeType)
	if err != nil {
		if errors.Is(err, gorm.ErrRecordNotFound) {
			return app.nodeTypeAdd(protoNodeType)
		}
		return err
	}
	return nil
}

//按ID查找节点类型
func (app *App) nodeTypeFindByID(protoNodeType *protoManage.NodeType) error {
	ormNodeType, err := app.dbFindNodeTypeByID(orm.NodeType{Base:orm.Base{ID:protoNodeType.Base.ID}})
	if err != nil {
		return err
	}
	app.ormNodeTypeToProtoNodeType(ormNodeType, protoNodeType)
	return nil
}

//查找节点类型信息
func (app *App) nodeTypeFind(req protoManage.ReqNodeTypeList) (*protoManage.AnsNodeTypeList, error) {
	ormTypeList, err := app.dbFindNodeType(req.Filter)
	if err != nil {
		return nil, err
	}
	protoNodeTypeList := app.ormNodeTypeListToProtoNodeTypeList(ormTypeList)
	count, err := app.dbFindNodeTypeCount(req.Filter)
	if err != nil {
		return nil, err
	}
	nodeStateCountList ,err := app.dbFindNodeStateCount(req.Filter, "typeID")
	if err != nil {
		return nil, err
	}
	return &protoManage.AnsNodeTypeList{
		NodeTypeList: protoNodeTypeList,
		NodeStateCountList: nodeStateCountList,
		Length: count}, nil
}

//新增节点
func (app *App) nodeAdd(protoNode *protoManage.Node) error {
	if err := app.nodeCheck(protoNode); err != nil {
		return err
	}
	return app.dbAddNode(orm.Node{GroupID: protoNode.GroupID, TypeID:protoNode.TypeID, Name: protoNode.Name})
}

//删除节点
func (app *App) nodeDel(protoNode *protoManage.Node) error {
	//判断节点是否正在运行
	err := app.nodeFindByID(protoNode)
	if err != nil {
		return err
	}
	if protoNode.State != protoManage.State_StateUnknow {
		return errors.New("节点未处于离线状态")
	}

	//删除节点其他相关信息
	err = app.nodeLinkDelAllByNodeID(&protoManage.NodeLink{SourceID: protoNode.Base.ID, TargetID: protoNode.Base.ID})
	if err != nil {
		return err
	}
	err = app.nodeFuncDelAllByNodeID(&protoManage.NodeFunc{NodeID: protoNode.Base.ID})
	if err != nil {
		return err
	}
	err = app.nodeReportDelAllByNodeID(&protoManage.NodeReport{NodeID: protoNode.Base.ID})
	if err != nil {
		return err
	}

	//删除节点类型
	count, err := app.dbCountAllNodeByTypeID(orm.Node{TypeID: protoNode.TypeID})
	if err != nil {
		return err
	}
	if count == 0 {
		err = app.nodeGroupDel(&protoManage.NodeGroup{Base: protoManage.Base{ID: protoNode.GroupID}})
		if err != nil {
			return err
		}
	}

	//删除节点组
	count, err = app.dbCountAllNodeByGroupID(orm.Node{GroupID: protoNode.GroupID})
	if err != nil {
		return err
	}
	if count == 0 {
		err = app.nodeTypeDel(&protoManage.NodeType{Base: protoManage.Base{ID: protoNode.TypeID}})
		if err != nil {
			return err
		}
	}
	return nil
}

//更新节点状态
func (app *App) nodeStateUpdate(protoNode *protoManage.Node) error {
	return app.dbUpdateNodeState(orm.Node{Base:orm.Base{ID: protoNode.Base.ID}, State: int32(protoNode.State)})
}

//查找节点信息
func (app *App) nodeFind(req protoManage.ReqNodeList) (*protoManage.AnsNodeList, error) {
	ormNodeList, err := app.dbFindNode(req.Filter)
	if err != nil {
		return nil, err
	}
	protoNodeList := app.ormNodeListToProtoNodeList(ormNodeList)
	ormNodeGroupList, err := app.dbFindNodeGroupByNode(req.Filter)
	if err != nil {
		return nil, err
	}
	protoNodeGroupList := app.ormNodeGroupListToProtoNodeGroupList(ormNodeGroupList)
	ormNodeTypeList, err := app.dbFindNodeTypeByNode(req.Filter)
	if err != nil {
		return nil, err
	}
	protoNodeTypeList := app.ormNodeTypeListToProtoNodeTypeList(ormNodeTypeList)
	count, err := app.dbFindNodeCount(req.Filter)
	if err != nil {
		return nil, err
	}
	nodeLinkSourceStateCount ,err := app.dbFindNodeLinkSourceStateCount(req.Filter)
	if err != nil {
		return nil, err
	}
	nodeLinkTargetStateCount ,err := app.dbFindNodeLinkTargetStateCount(req.Filter)
	if err != nil {
		return nil, err
	}
	nodeFuncStateCountList ,err := app.dbFindNodeFuncStateCount(req.Filter)
	if err != nil {
		return nil, err
	}
	nodeReportStateCountList ,err := app.dbFindNodeReportStateCount(req.Filter)
	if err != nil {
		return nil, err
	}
	return &protoManage.AnsNodeList{
		NodeList: protoNodeList,
		NodeLinkSourceStateCountList: nodeLinkSourceStateCount,
		NodeLinkTargetStateCountList: nodeLinkTargetStateCount,
		NodeGroupList: protoNodeGroupList,
		NodeTypeList: protoNodeTypeList,
		NodeFuncStateCountList: nodeFuncStateCountList,
		NodeReportStateCountList: nodeReportStateCountList,
		Length: count}, nil
}

//按ID查询节点
func (app *App) nodeFindByID(protoNode *protoManage.Node) error {
	ormNode, err :=app.dbFindNodeByID(orm.Node{Base:orm.Base{ID: protoNode.Base.ID}})
	if err != nil {
		return err
	}
	app.ormNodeToProtoNode(ormNode, protoNode)
	return nil
}

//按节点名查询节点
func (app *App) nodeFindByName(protoNode *protoManage.Node) error {
	ormNode, err :=app.dbFindNodeByName(orm.Node{Name: protoNode.Name,
		GroupID: protoNode.GroupID, TypeID: protoNode.TypeID})
	if err != nil {
		return err
	}
	app.ormNodeToProtoNode(ormNode, protoNode)
	return nil
}

//按节点名查找或者新增节点
func (app *App) nodeFindOrAddByName(protoNode *protoManage.Node) error {
	err := app.nodeFindByName(protoNode)
	if err != nil {
		if errors.Is(err, gorm.ErrRecordNotFound) {
			return app.nodeAdd(protoNode)
		}
		return err
	}
	return nil
}

//新增节点连接
func (app *App) nodeLinkAdd(protoNodeLink *protoManage.NodeLink) error {
	if err := app.nodeLinkCheck(protoNodeLink); err != nil {
		return err
	}
	return app.dbAddNodeLink(orm.NodeLink{
		SourceID: protoNodeLink.SourceID,
		TargetID: protoNodeLink.TargetID,
		State: int32(protoNodeLink.State),
	})
}

//删除节点连接
func (app *App) nodeLinkDel(protoNodeLink *protoManage.NodeLink) error {
	return app.dbDelNodeLink(orm.NodeLink{Base:orm.Base{ID: protoNodeLink.Base.ID}})
}

//按ID查询节点连接
func (app *App) nodeLinkFindByID(protoNodeLink *protoManage.NodeLink) error {
	ormNodeLink, err :=app.dbFindNodeLinkByID(orm.NodeLink{Base:orm.Base{ID: protoNodeLink.Base.ID}})
	if err != nil {
		return err
	}
	app.ormNodeLinkToProtoNodeLink(ormNodeLink, protoNodeLink)
	return nil
}

//按目标ID查询节点连接
func (app *App) nodeLinkFindByNodeID(protoNodeLink *protoManage.NodeLink) error {
	ormNodeLink, err :=app.dbFindNodeLinkByNodeID(orm.NodeLink{SourceID: protoNodeLink.SourceID, TargetID: protoNodeLink.TargetID})
	if err != nil {
		return err
	}
	app.ormNodeLinkToProtoNodeLink(ormNodeLink, protoNodeLink)
	return nil
}

//按目标ID查询节点连接ID
func (app *App)  nodeLinkFindIDByNodeID(protoNodeLink *protoManage.NodeLink) error {
	ormNodeLink, err :=app.dbFindNodeLinkByNodeID(orm.NodeLink{SourceID: protoNodeLink.SourceID, TargetID: protoNodeLink.TargetID})
	if err != nil {
		return err
	}
	app.ormBaseToProtoBase(&ormNodeLink.Base, &protoNodeLink.Base)
	return nil
}

//按节点ID更新节点连接状态或者新增节点连接
func (app *App) nodeLinkStateUpdateOrAddByNodeID(protoNodeLink *protoManage.NodeLink) error {
	err := app.nodeLinkFindIDByNodeID(protoNodeLink)
	if err != nil {
		if errors.Is(err, gorm.ErrRecordNotFound) {
			return app.nodeLinkAdd(protoNodeLink)
		}
		return err
	}
	return app.nodeLinkStateUpdate(protoNodeLink)
}

//查找节点连接信息
func (app *App) nodeLinkFind(req protoManage.ReqNodeLinkList) (*protoManage.AnsNodeLinkList, error) {
	ormLinkList, err := app.dbFindNodeLink(req.Filter)
	if err != nil {
		return nil, err
	}
	protoNodeLinkList := app.ormNodeLinkListToProtoNodeLinkList(ormLinkList)
	ormNodeList, err := app.dbFindNodeByNodeLink(req.Filter)
	if err != nil {
		return nil, err
	}
	protoNodeList := app.ormNodeListToProtoNodeList(ormNodeList)
	count, err := app.dbFindNodeLinkCount(req.Filter)
	if err != nil {
		return nil, err
	}
	return &protoManage.AnsNodeLinkList{NodeLinkList: protoNodeLinkList, NodeList: protoNodeList, Length:count}, nil
}

//按节点ID删除所有节点连接
func (app *App) nodeLinkDelAllByNodeID(protoNodeLink *protoManage.NodeLink) error {
	return app.dbDelAllNodeLinkByNodeID(orm.NodeLink{SourceID: protoNodeLink.SourceID, TargetID: protoNodeLink.TargetID})
}

//更新节点连接状态
func (app *App) nodeLinkStateUpdate(protoNodeLink *protoManage.NodeLink) error {
	return app.dbUpdateNodeLinkState(orm.NodeLink{Base:orm.Base{ID: protoNodeLink.Base.ID}, State: int32(protoNodeLink.State)})
}

//新增节点方法
func (app *App) nodeFuncAdd(protoNodeFunc *protoManage.NodeFunc) error {
	if err := app.nodeFuncCheck(protoNodeFunc); err != nil {
		return err
	}
	return app.dbAddNodeFunc(orm.NodeFunc{
		NodeID: protoNodeFunc.NodeID,
		Name: protoNodeFunc.Name,
		Func: protoNodeFunc.Func,
	})
}

//删除节点方法
func (app *App) nodeFuncDel(protoNodeFunc *protoManage.NodeFunc) error {
	return app.dbDelNodeFunc(orm.NodeFunc{Base:orm.Base{ID: protoNodeFunc.Base.ID}})
}

//按节点ID删除所有节点方法
func (app *App) nodeFuncDelAllByNodeID(protoNodeFunc *protoManage.NodeFunc) error {
	return app.dbDelAllNodeFuncByNodeID(orm.NodeFunc{NodeID: protoNodeFunc.NodeID})
}

//更新节点方法描述
func (app *App) nodeFuncDescUpdate(protoNodeFunc *protoManage.NodeFunc) error {
	return app.dbUpdateNodeFuncNameByID(orm.NodeFunc{
		Base:orm.Base{ID: protoNodeFunc.Base.ID},
		Name: protoNodeFunc.Name,
	})
}

//按节点方法名更新节点方法描述或者新增节点方法
func (app *App) nodeFuncDescUpdateOrAddByName(protoNodeFunc *protoManage.NodeFunc) error {
	err := app.nodeFuncFindIDByName(protoNodeFunc)
	if err != nil {
		if errors.Is(err, gorm.ErrRecordNotFound) {
			return app.nodeFuncAdd(protoNodeFunc)
		}
		return err
	}
	return app.nodeFuncDescUpdate(protoNodeFunc)
}

//节点方法调用请求
func (app *App) nodeFuncCallReq(req *protoManage.ReqNodeFuncCall) error {
	protoNodeFunc := protoManage.NodeFunc{Base: protoManage.Base{ID: req.NodeFuncCall.FuncID}}
	err := app.nodeFuncFindByID(&protoNodeFunc)
	if err != nil {
		return err
	}
	protoNode := protoManage.Node{Base: protoManage.Base{ID: protoNodeFunc.NodeID}}
	err = app.nodeFindByID(&protoNode)
	if err != nil {
		return err
	}

	if protoNode.State == protoManage.State_StateUnknow {
		return errors.New("请求失败: 节点 " + protoNode.Name +" 处于离线状态")
	}
	ormBase, err := app.dbAddNodeFuncCall(orm.NodeFuncCall{
		ManagerID: req.NodeFuncCall.ManagerID,
		FuncID: req.NodeFuncCall.FuncID,
		Parameter: req.NodeFuncCall.Parameter,
		State: int32(protoManage.State_StateUnknow),
	})
	if err != nil {
		return err
	}
	app.ormBaseToProtoBase(ormBase, &req.NodeFuncCall.Base)
	return nil
}

//节点方法调用回复
func (app *App) nodeFuncCallAns(ans *protoManage.AnsNodeFuncCall) error {
	return app.dbUpdateNodeFuncCallByID(orm.NodeFuncCall{
		Base:orm.Base{ID: ans.NodeFuncCall.Base.ID},
		ReturnVal: ans.NodeFuncCall.ReturnVal,
		State: int32(ans.NodeFuncCall.State),
	})
}

//按ID查询节点方法调用
func (app *App) nodeFuncCallFindByID(protoNodeFuncCall *protoManage.NodeFuncCall) error {
	ormNodeFuncCall, err :=app.dbFindNodeFuncCallByID(orm.NodeFuncCall{Base:orm.Base{ID: protoNodeFuncCall.Base.ID}})
	if err != nil {
		return err
	}
	app.ormNodeFuncCallToProtoNodeFuncCall(ormNodeFuncCall, protoNodeFuncCall)
	return nil
}

//按ID查询节点方法
func (app *App) nodeFuncFindByID(protoNodeFunc *protoManage.NodeFunc) error {
	ormNodeFunc, err :=app.dbFindNodeFuncByID(orm.NodeFunc{Base:orm.Base{ID: protoNodeFunc.Base.ID}})
	if err != nil {
		return err
	}
	app.ormNodeFuncToProtoNodeFunc(ormNodeFunc, protoNodeFunc)
	return nil
}

//按名称查询节点方法
func (app *App) nodeFuncFindIDByName(protoNodeFunc *protoManage.NodeFunc) error {
	ormNodeFunc, err :=app.dbFindNodeFuncByName(orm.NodeFunc{Name: protoNodeFunc.Name, NodeID: protoNodeFunc.NodeID})
	if err != nil {
		return err
	}
	app.ormBaseToProtoBase(&ormNodeFunc.Base, &protoNodeFunc.Base)
	return nil
}

//查找节点方法信息
func (app *App) nodeFuncFind(req protoManage.ReqNodeFuncList) (*protoManage.AnsNodeFuncList, error) {
	ormFuncList, err := app.dbFindNodeFunc(req.Filter)
	if err != nil {
		return nil, err
	}
	protoNodeFuncList := app.ormNodeFuncListToProtoNodeFuncList(ormFuncList)
	ormNodeList, err := app.dbFindNodeByNodeFunc(req.Filter)
	if err != nil {
		return nil, err
	}
	protoNodeList := app.ormNodeListToProtoNodeList(ormNodeList)
	ormNodeFuncCall, err := app.dbFindLastNodeFuncCallByNodeFunc(req.Filter)
	if err != nil {
		return nil, err
	}
	protoNodeFuncCall := app.ormNodeFuncCallListToProtoNodeFuncCallList(ormNodeFuncCall)
	count, err := app.dbFindNodeFuncCount(req.Filter)
	if err != nil {
		return nil, err
	}
	return &protoManage.AnsNodeFuncList{NodeFuncList: protoNodeFuncList, NodeList: protoNodeList,
		NodeFuncCallList: protoNodeFuncCall,Length:count}, nil
}

//查找节点方法调用信息
func (app *App) nodeFuncCallFind(req protoManage.ReqNodeFuncCallList) (*protoManage.AnsNodeFuncCallList, error) {
	ormFuncCallList, err := app.dbFindNodeFuncCall(req.Filter)
	if err != nil {
		return nil, err
	}
	protoNodeFuncCallList := app.ormNodeFuncCallListToProtoNodeFuncCallList(ormFuncCallList)
	return &protoManage.AnsNodeFuncCallList{NodeFuncCallList: protoNodeFuncCallList}, nil
}

//新增节点报告
func (app *App) nodeReportAdd(protoNodeReport *protoManage.NodeReport) error {
	if err := app.nodeReportCheck(protoNodeReport); err != nil {
		return err
	}
	return app.dbAddNodeReport(orm.NodeReport{
		NodeID: protoNodeReport.NodeID,
		Flag: protoNodeReport.Flag,
		Name: protoNodeReport.Name,
	})
}

//删除节点报告
func (app *App) nodeReportDel(protoNodeReport *protoManage.NodeReport) error {
	return app.dbDelNodeReport(orm.NodeReport{Base:orm.Base{ID: protoNodeReport.Base.ID}})
}

//按节点ID删除所有节点报告
func (app *App) nodeReportDelAllByNodeID(protoNodeReport *protoManage.NodeReport) error {
	return app.dbDelAllNodeReportByNodeID(orm.NodeReport{NodeID: protoNodeReport.NodeID})
}

//更新节点报告值
//func (app *App) nodeReportValUpdate(protoNodeReport *protoManage.NodeReport) error {
//	ormBase, err := app.dbUpdateNodeReportValueByID(orm.NodeReport{
//		Base:orm.Base{ID: protoNodeReport.Base.ID},
//		Value: protoNodeReport.Value,
//	})
//	if err != nil {
//		return err
//	}
//	app.ormBaseToProtoBase(ormBase, &protoNodeReport.Base)
//}

//按节点报告名更新节点报告值或者新增节点报告
func (app *App) nodeReportValUpdateOrAddByName(protoNodeReport *protoManage.NodeReport) error {
	err := app.nodeReportFindIDByName(protoNodeReport)
	if err != nil {
		if errors.Is(err, gorm.ErrRecordNotFound) {
			return app.nodeReportAdd(protoNodeReport)
		}
		return err
	}
	//return app.nodeReportValUpdate(protoNodeReport)
	return nil
}

//按ID查询节点报告
func (app *App) nodeReportFindByID(protoNodeReport *protoManage.NodeReport) error {
	ormNodeReport, err :=app.dbFindNodeReportByID(orm.NodeReport{Base:orm.Base{ID: protoNodeReport.Base.ID}})
	if err != nil {
		return err
	}
	app.ormNodeReportToProtoNodeReport(ormNodeReport, protoNodeReport)
	return nil
}

//按名称查询节点报告ID
func (app *App) nodeReportFindIDByName(protoNodeReport *protoManage.NodeReport) error {
	ormNodeReport, err :=app.dbFindNodeReportByName(orm.NodeReport{Flag:protoNodeReport.Flag, Name: protoNodeReport.Name, NodeID: protoNodeReport.NodeID})
	if err != nil {
		return err
	}
	app.ormBaseToProtoBase(&ormNodeReport.Base, &protoNodeReport.Base)
	return nil
}

//查找节点报告信息
func (app *App) nodeReportFind(req protoManage.ReqNodeReportList) (*protoManage.AnsNodeReportList, error) {
	ormReportList, err := app.dbFindNodeReport(req.Filter)
	if err != nil {
		return nil, err
	}
	protoNodeReportList := app.ormNodeReportListToProtoNodeReportList(ormReportList)
	ormNodeList, err := app.dbFindNodeByNodeReport(req.Filter)
	if err != nil {
		return nil, err
	}
	protoNodeList := app.ormNodeListToProtoNodeList(ormNodeList)
	ormNodeReportVal, err := app.dbFindLastNodeReportValByNodeReport(req.Filter)
	if err != nil {
		return nil, err
	}
	protoNodeReportVal := app.ormNodeReportValListToProtoNodeReportValList(ormNodeReportVal)
	count, err := app.dbFindNodeReportCount(req.Filter)
	if err != nil {
		return nil, err
	}
	return &protoManage.AnsNodeReportList{NodeReportList: protoNodeReportList,
		NodeList: protoNodeList, NodeReportValList: protoNodeReportVal, Length:count}, nil
}

//查找节点报告值信息
func (app *App) nodeReportValFind(req protoManage.ReqNodeReportValList) (*protoManage.AnsNodeReportValList, error) {
	ormReportValList, err := app.dbFindNodeReportVal(req.Filter)
	if err != nil {
		return nil, err
	}
	protoNodeReportValList := app.ormNodeReportValListToProtoNodeReportValList(ormReportValList)
	return &protoManage.AnsNodeReportValList{NodeReportValList: protoNodeReportValList}, nil
}

//新增节点通知
func (app *App) nodeNotifyAdd(protoNodeNotify *protoManage.NodeNotify) error {
	if err := app.nodeNotifyCheck(protoNodeNotify); err != nil {
		return err
	}
	return app.dbAddNodeNotify(orm.NodeNotify{
		SenderID: protoNodeNotify.SenderID,
		MessageKey: protoNodeNotify.MessageKey,
		MessageVal: protoNodeNotify.MessageVal,
	})
}

