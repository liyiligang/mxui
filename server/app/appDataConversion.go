// Copyright 2019 The Authors. All rights reserved.
// Author: liyiligang
// Date: 2019/11/24 7:50
// Description: 数据类型转换

package app

import (
	"github.com/jinyun/base/component/Jtool"
	"github.com/jinyun/base/protoFiles/protoManage"
	"manageServer/typedef/orm"
)

//NodeStateID To NodeStateName
//func nodeStateIDToNodeStateName(state protoManage.NodeState) string {
//	switch state {
//	case protoManage.NodeState_NodeStateOffline:
//		return ConstOffline
//		break
//	case protoManage.NodeState_NodeStateStart:
//		return ConstStart
//		break
//	case protoManage.NodeState_NodeStatePause:
//		return ConstPause
//		break
//	case protoManage.NodeState_NodeStateStop:
//		return ConstStop
//		break
//	}
//	return ConstUnknow
//}

//NodeLinkStateID To NodeStateLinkName
//func nodeLinkStateIDToNodeStateName(state protoManage.NodeLinkState) string {
//	switch state {
//	case protoManage.NodeLinkState_NodeLinkStateDisconnect:
//		return ConstDisconnect
//		break
//	case protoManage.NodeLinkState_NodeLinkStateConnected:
//		return ConstConnect
//		break
//	case protoManage.NodeLinkState_NodeLinkStatePause:
//		return ConstConnectPause
//		break
//	}
//	return ConstUnknow
//}

//DBBase To PBBase
func (app *App) ormBaseToProtoBase(ormBase *orm.Base, protoBase *protoManage.Base) {
	protoBase.ID = ormBase.ID
	protoBase.UpdateTime = Jtool.TimeStringToMsTimeInt64(ormBase.UpdatedAt)
}

//DBManager To PBManager
func (app *App) ormManagerToProtoManager(ormManager *orm.Manager, protoManager *protoManage.Manager)  {
	app.ormBaseToProtoBase(&ormManager.Base, &protoManager.Base)
	protoManager.NickName = ormManager.NickName
	protoManager.State = protoManage.State(ormManager.State)
}

//DBManagerNickName To PBManagerNickName
func (app *App) ormManagerNickNameToProtoManagerNickName(ormManager *orm.Manager, protoManager *protoManage.Manager)  {
	app.ormBaseToProtoBase(&ormManager.Base, &protoManager.Base)
	protoManager.NickName = ormManager.NickName
}

//DBManagerNickNameList To PBManagerNickNameList
func (app *App) ormManagerNickNameListToProtoManagerNickNameList(ormManagerList []orm.Manager) []protoManage.Manager  {
	var protoManagerList []protoManage.Manager
	for _ ,v := range ormManagerList {
		val := protoManage.Manager{}
		app.ormManagerNickNameToProtoManagerNickName(&v, &val)
		protoManagerList = append(protoManagerList, val)
	}
	return protoManagerList
}

//DBTopLink To PBTopLink
func (app *App) ormTopLinkToProtoTopLink(ormTopLink *orm.TopLink, protoTopLink *protoManage.TopLink)  {
	app.ormBaseToProtoBase(&ormTopLink.Base, &protoTopLink.Base)
	protoTopLink.Name = ormTopLink.Name
	protoTopLink.Url = ormTopLink.Url
	protoTopLink.State = protoManage.State(ormTopLink.State)
}

//DBTopLinkList To PBTopLinkList
func (app *App) ormTopLinkListToProtoTopLinkList(ormTopLinkList []orm.TopLink) []protoManage.TopLink  {
	var protoTopLinkList []protoManage.TopLink
	for _ ,v := range ormTopLinkList {
		val := protoManage.TopLink{}
		app.ormTopLinkToProtoTopLink(&v, &val)
		protoTopLinkList = append(protoTopLinkList, val)
	}
	return protoTopLinkList
}

//DBNodeGroup To PBNodeGroup
func (app *App) ormNodeGroupToProtoNodeGroup(ormNodeGroup *orm.NodeGroup, protoNodeGroup *protoManage.NodeGroup) {
	app.ormBaseToProtoBase(&ormNodeGroup.Base, &protoNodeGroup.Base)
	protoNodeGroup.Name = ormNodeGroup.Name
}

//DBNodeGroupList To PBNodeGroupList
func (app *App) ormNodeGroupListToProtoNodeGroupList(ormNodeGroupList []orm.NodeGroup) []protoManage.NodeGroup{
	var protoNodeGroupList []protoManage.NodeGroup
	for _ ,v := range ormNodeGroupList {
		val := protoManage.NodeGroup{}
		app.ormNodeGroupToProtoNodeGroup(&v, &val)
		protoNodeGroupList = append(protoNodeGroupList, val)
	}
	return protoNodeGroupList
}

//DBNodeType To PBNodeType
func (app *App) ormNodeTypeToProtoNodeType(ormNodeType *orm.NodeType, protoNodeType *protoManage.NodeType)  {
	app.ormBaseToProtoBase(&ormNodeType.Base, &protoNodeType.Base)
	protoNodeType.Name = ormNodeType.Name
}

//DBNodeTypeList To PBNodeTypeList
func (app *App) ormNodeTypeListToProtoNodeTypeList(ormNodeTypeList []orm.NodeType) []protoManage.NodeType{
	var protoNodeTypeList []protoManage.NodeType
	for _ ,v := range ormNodeTypeList {
		val := protoManage.NodeType{}
		app.ormNodeTypeToProtoNodeType(&v, &val)
		protoNodeTypeList = append(protoNodeTypeList, val)
	}
	return protoNodeTypeList
}

//DBNode To PBNode
func (app *App) ormNodeToProtoNode(ormNode *orm.Node, protoNode *protoManage.Node) {
	app.ormBaseToProtoBase(&ormNode.Base, &protoNode.Base)
	protoNode.TypeID = ormNode.TypeID
	protoNode.GroupID = ormNode.GroupID
	protoNode.Name = ormNode.Name
	protoNode.State = protoManage.State(ormNode.State)
}

//DBNodeList To PBNodeList
func (app *App) ormNodeListToProtoNodeList(ormNodeList []orm.Node) []protoManage.Node{
	var protoNodeList []protoManage.Node
	for _ ,v := range ormNodeList {
		val := protoManage.Node{}
		app.ormNodeToProtoNode(&v, &val)
		protoNodeList = append(protoNodeList, val)
	}
	return protoNodeList
}

//DBNodeLink To PBNodeLink
func (app *App) ormNodeLinkToProtoNodeLink(ormNodeLink *orm.NodeLink, protoNodeLink *protoManage.NodeLink) {
	app.ormBaseToProtoBase(&ormNodeLink.Base, &protoNodeLink.Base)
	protoNodeLink.SourceID = ormNodeLink.SourceID
	protoNodeLink.TargetID = ormNodeLink.TargetID
	protoNodeLink.State = protoManage.State(ormNodeLink.State)
}

//DBNodeLinkList To PBNodeLinkList
func (app *App) ormNodeLinkListToProtoNodeLinkList(ormNodeLinkList []orm.NodeLink) []protoManage.NodeLink{
	var protoNodeLinkList []protoManage.NodeLink
	for _ ,v := range ormNodeLinkList {
		val := protoManage.NodeLink{}
		app.ormNodeLinkToProtoNodeLink(&v, &val)
		protoNodeLinkList = append(protoNodeLinkList, val)
	}
	return protoNodeLinkList
}

//DBNodeFunc To PBNodeFunc
func (app *App) ormNodeFuncToProtoNodeFunc(ormNodeFunc *orm.NodeFunc, protoNodeFunc *protoManage.NodeFunc) {
	app.ormBaseToProtoBase(&ormNodeFunc.Base, &protoNodeFunc.Base)
	protoNodeFunc.NodeID = ormNodeFunc.NodeID
	protoNodeFunc.Name = ormNodeFunc.Name
	protoNodeFunc.Func = ormNodeFunc.Func
	protoNodeFunc.State = protoManage.State(ormNodeFunc.State)
}

//DBNodeFuncList To PBNodeFuncList
func (app *App) ormNodeFuncListToProtoNodeFuncList(ormNodeFuncList []orm.NodeFunc) []protoManage.NodeFunc{
	var protoNodeFuncList []protoManage.NodeFunc
	for _ ,v := range ormNodeFuncList {
		val := protoManage.NodeFunc{}
		app.ormNodeFuncToProtoNodeFunc(&v, &val)
		protoNodeFuncList = append(protoNodeFuncList, val)
	}
	return protoNodeFuncList
}

//DBNodeFuncCall To PBNodeFuncCall
func (app *App) ormNodeFuncCallToProtoNodeFuncCall(ormNodeFuncCall *orm.NodeFuncCall, protoNodeFuncCall *protoManage.NodeFuncCall) {
	app.ormBaseToProtoBase(&ormNodeFuncCall.Base, &protoNodeFuncCall.Base)
	protoNodeFuncCall.ManagerID = ormNodeFuncCall.ManagerID
	protoNodeFuncCall.FuncID = ormNodeFuncCall.FuncID
	protoNodeFuncCall.Parameter = ormNodeFuncCall.Parameter
	protoNodeFuncCall.ReturnVal = ormNodeFuncCall.ReturnVal
	protoNodeFuncCall.State = protoManage.State(ormNodeFuncCall.State)
}

//DBNodeFuncCallList To PBNodeFuncCallList
func (app *App) ormNodeFuncCallListToProtoNodeFuncCallList(ormNodeFuncCallList []orm.NodeFuncCall) []protoManage.NodeFuncCall {
	var protoNodeFuncCallList []protoManage.NodeFuncCall
	for _ ,v := range ormNodeFuncCallList {
		val := protoManage.NodeFuncCall{}
		app.ormNodeFuncCallToProtoNodeFuncCall(&v, &val)
		protoNodeFuncCallList = append(protoNodeFuncCallList, val)
	}
	return protoNodeFuncCallList
}

//DBNodeReport To PBNodeReport
func (app *App) ormNodeReportToProtoNodeReport(ormNodeReport *orm.NodeReport, protoNodeReport *protoManage.NodeReport)  {
	app.ormBaseToProtoBase(&ormNodeReport.Base, &protoNodeReport.Base)
	protoNodeReport.NodeID = ormNodeReport.NodeID
	protoNodeReport.Flag = ormNodeReport.Flag
	protoNodeReport.Name = ormNodeReport.Name
	protoNodeReport.State = protoManage.State(ormNodeReport.State)
	//protoNodeReport.Value = ormNodeReport.Value
}

//DBNodeReportList To PBNodeReportList
func (app *App) ormNodeReportListToProtoNodeReportList(ormNodeReportList []orm.NodeReport) []protoManage.NodeReport{
	var protoNodeReportList []protoManage.NodeReport
	for _ ,v := range ormNodeReportList {
		val := protoManage.NodeReport{}
		app.ormNodeReportToProtoNodeReport(&v, &val)
		protoNodeReportList = append(protoNodeReportList, val)
	}
	return protoNodeReportList
}

//DBNodeReportVal To PBNodeReportVal
func (app *App) ormNodeReportValToProtoNodeReportVal(ormNodeReportVal *orm.NodeReportVal, protoNodeReportVal *protoManage.NodeReportVal) {
	app.ormBaseToProtoBase(&ormNodeReportVal.Base, &protoNodeReportVal.Base)
	protoNodeReportVal.ReportID = ormNodeReportVal.ReportID
	protoNodeReportVal.Value = ormNodeReportVal.Value
	protoNodeReportVal.State = protoManage.State(ormNodeReportVal.State)
}

//DBNodeReportValList To PBNodeReportValList
func (app *App) ormNodeReportValListToProtoNodeReportValList(ormNodeReportValList []orm.NodeReportVal) []protoManage.NodeReportVal {
	var protoNodeReportValList []protoManage.NodeReportVal
	for _ ,v := range ormNodeReportValList {
		val := protoManage.NodeReportVal{}
		app.ormNodeReportValToProtoNodeReportVal(&v, &val)
		protoNodeReportValList = append(protoNodeReportValList, val)
	}
	return protoNodeReportValList
}


//DBStateCountList To PBStateCountList
func (app *App) ormStateCountListToprotoStateCountList(ormStateCountList []orm.StateCount) []protoManage.StateCount {
	protoStateCountMap := make(map[int64]*protoManage.StateCount)
	for _, v := range ormStateCountList {
		protoStateCount , ok := protoStateCountMap[v.ParentID]
		if !ok {
			protoStateCount = &protoManage.StateCount{ID: v.ParentID	}
			protoStateCountMap[v.ParentID] = protoStateCount
		}
		switch protoManage.State(v.State) {
		case protoManage.State_StateNot:
			protoStateCount.NotCount = v.StateCount
			break
		case protoManage.State_StateNormal:
			protoStateCount.NormalCount = v.StateCount
			break
		case protoManage.State_StateWarn:
			protoStateCount.WarnCount = v.StateCount
			break
		case protoManage.State_StateError:
			protoStateCount.ErrorCount = v.StateCount
			break
		default:
			protoStateCount.UnknowCount = v.StateCount
		}
	}
	var protoStateCountList []protoManage.StateCount
	for _, v := range protoStateCountMap {
		protoStateCountList = append(protoStateCountList, *v)
	}
	return protoStateCountList
}

////PBManager To DBManager
//func (app *App) protoManagerToOrmManager(protoManager *protoManage.Manager) *orm.Manager {
//	ormManager := orm.Manager{}
//	ormManager.ID = protoManager.ID
//	ormManager.Name = protoManager.Name
//	ormManager.Token = protoManager.Token
//	ormManager.State = int32(protoManager.State)
//	return &ormManager
//}
//
////PBNodeGroup To DBNodeGroup
//func (app *App) protoNodeGroupToOrmNodeGroup(protoNodeGroup *protoManage.NodeGroup) *orm.NodeGroup {
//	ormNodeGroup := orm.NodeGroup{}
//	ormNodeGroup.ID = protoNodeGroup.ID
//	ormNodeGroup.Name = protoNodeGroup.Name
//	return &ormNodeGroup
//}
//
////PBNodeType To DBNodeType
//func (app *App) protoNodeTypeToOrmNodeType(protoNodeType *protoManage.NodeType) *orm.NodeType {
//	ormNodeType := orm.NodeType{}
//	ormNodeType.ID = protoNodeType.ID
//	ormNodeType.Name = protoNodeType.Name
//	return &ormNodeType
//}
//
////PBNode To DBNode
//func (app *App) protoNodeToOrmNode(protoNode *protoManage.Node) *orm.Node {
//	ormNode := orm.Node{}
//	ormNode.ID = protoNode.ID
//	ormNode.TypeID = protoNode.TypeID
//	ormNode.GroupID = protoNode.GroupID
//	ormNode.Name = protoNode.Name
//	ormNode.State = int32(protoNode.State)
//	return &ormNode
//}
//
////PBNodeLink To DBNodeLink
//func (app *App) protoNodeLinkToOrmNodeLink(protoNodeLink *protoManage.NodeLink) *orm.NodeLink {
//	ormNodeLink := orm.NodeLink{}
//	ormNodeLink.ID = protoNodeLink.ID
//	ormNodeLink.SourceID = protoNodeLink.SourceID
//	ormNodeLink.TargetID = protoNodeLink.TargetID
//	ormNodeLink.State = int32(protoNodeLink.State)
//	return &ormNodeLink
//}
//
////PBNodeFunc To DBNodeFunc
//func (app *App) protoNodeFuncToOrmNodeFunc(protoNodeFunc *protoManage.NodeFunc) *orm.NodeFunc {
//	ormNodeFunc := orm.NodeFunc{}
//	ormNodeFunc.ID = protoNodeFunc.ID
//	ormNodeFunc.NodeID = protoNodeFunc.NodeID
//	ormNodeFunc.Name = protoNodeFunc.Name
//	ormNodeFunc.Describe = protoNodeFunc.Describe
//	ormNodeFunc.Parameter = protoNodeFunc.Parameter
//	ormNodeFunc.ReturnVal = protoNodeFunc.ReturnVal
//	return &ormNodeFunc
//}
//
////PBNodeReport To DBNodeReport
//func (app *App) protoNodeReportToOrmNodeReport(protoNodeReport *protoManage.NodeReport) *orm.NodeReport {
//	ormNodeReport := orm.NodeReport{}
//	ormNodeReport.ID = protoNodeReport.ID
//	ormNodeReport.NodeID = protoNodeReport.NodeID
//	ormNodeReport.Flag = protoNodeReport.Flag
//	ormNodeReport.Name = protoNodeReport.Name
//	ormNodeReport.Value = protoNodeReport.Value
//	return &ormNodeReport
//}

////DBNotifyRecord To PBNotifyRecord
//func (app *App) ormNotifyRecordToProtoNotifyRecord(ormNotifyRecord *orm.Notifyecord) *protoManage.NotifyRecord {
//	protoNotifyRecord := protoManage.NotifyRecord{}
//	protoNotifyRecord.RecordID = ormNotifyRecord.Recordid
//	protoNotifyRecord.SenderID = ormNotifyRecord.Senderid
//	protoNotifyRecord.SenderName = ormNotifyRecord.Sendername
//	protoNotifyRecord.OrderID = ormNotifyRecord.Orderid
//	protoNotifyRecord.OrderType = ormNotifyRecord.Ordertype
//	protoNotifyRecord.MessageType = ormNotifyRecord.Messagetype
//	protoNotifyRecord.Message = ormNotifyRecord.Message
//	protoNotifyRecord.UpdateTime = Jtool.TimeStringToMsTimeInt64(ormNotifyRecord.UpdatedAt)
//	return &protoNotifyRecord
//}
