package convert

import (
	"github.com/liyiligang/base/component/Jtool"
	"github.com/liyiligang/klee/app/protoFiles/protoManage"
	"github.com/liyiligang/klee/app/typedef/orm"
)

//DBBase To PBBase
func OrmBaseToProtoBase(ormBase *orm.Base, protoBase *protoManage.Base) {
	protoBase.ID = ormBase.ID
	protoBase.UpdateTime = Jtool.TimeStringToMsTimeInt64(ormBase.UpdatedAt)
}

//DBManager To PBManager
func OrmManagerToProtoManager(ormManager *orm.Manager, protoManager *protoManage.Manager)  {
	OrmBaseToProtoBase(&ormManager.Base, &protoManager.Base)
	protoManager.NickName = ormManager.NickName
	protoManager.Setting = ormManager.Setting
	protoManager.Level = ormManager.Level
	protoManager.State = protoManage.State(ormManager.State)
}

//DBManagerNickName To PBManagerNickName
func OrmManagerNickNameToProtoManagerNickName(ormManager *orm.Manager, protoManager *protoManage.Manager)  {
	OrmBaseToProtoBase(&ormManager.Base, &protoManager.Base)
	protoManager.NickName = ormManager.NickName
}

//DBManagerNickNameList To PBManagerNickNameList
func OrmManagerNickNameListToProtoManagerNickNameList(ormManagerList []orm.Manager) []protoManage.Manager {
	var protoManagerList []protoManage.Manager
	for _ ,v := range ormManagerList {
		val := protoManage.Manager{}
		OrmManagerNickNameToProtoManagerNickName(&v, &val)
		protoManagerList = append(protoManagerList, val)
	}
	return protoManagerList
}

//DBTopLink To PBTopLink
func OrmTopLinkToProtoTopLink(ormTopLink *orm.TopLink, protoTopLink *protoManage.TopLink)  {
	OrmBaseToProtoBase(&ormTopLink.Base, &protoTopLink.Base)
	protoTopLink.Name = ormTopLink.Name
	protoTopLink.Url = ormTopLink.Url
	protoTopLink.State = protoManage.State(ormTopLink.State)
}

//DBTopLinkList To PBTopLinkList
func OrmTopLinkListToProtoTopLinkList(ormTopLinkList []orm.TopLink) []protoManage.TopLink {
	var protoTopLinkList []protoManage.TopLink
	for _ ,v := range ormTopLinkList {
		val := protoManage.TopLink{}
		OrmTopLinkToProtoTopLink(&v, &val)
		protoTopLinkList = append(protoTopLinkList, val)
	}
	return protoTopLinkList
}

//DBNodeGroup To PBNodeGroup
func OrmNodeGroupToProtoNodeGroup(ormNodeGroup *orm.NodeGroup, protoNodeGroup *protoManage.NodeGroup) {
	OrmBaseToProtoBase(&ormNodeGroup.Base, &protoNodeGroup.Base)
	protoNodeGroup.Name = ormNodeGroup.Name
}

//DBNodeGroupList To PBNodeGroupList
func OrmNodeGroupListToProtoNodeGroupList(ormNodeGroupList []orm.NodeGroup) []protoManage.NodeGroup {
	var protoNodeGroupList []protoManage.NodeGroup
	for _ ,v := range ormNodeGroupList {
		val := protoManage.NodeGroup{}
		OrmNodeGroupToProtoNodeGroup(&v, &val)
		protoNodeGroupList = append(protoNodeGroupList, val)
	}
	return protoNodeGroupList
}

//DBNodeType To PBNodeType
func OrmNodeTypeToProtoNodeType(ormNodeType *orm.NodeType, protoNodeType *protoManage.NodeType)  {
	OrmBaseToProtoBase(&ormNodeType.Base, &protoNodeType.Base)
	protoNodeType.Name = ormNodeType.Name
}

//DBNodeTypeList To PBNodeTypeList
func OrmNodeTypeListToProtoNodeTypeList(ormNodeTypeList []orm.NodeType) []protoManage.NodeType {
	var protoNodeTypeList []protoManage.NodeType
	for _ ,v := range ormNodeTypeList {
		val := protoManage.NodeType{}
		OrmNodeTypeToProtoNodeType(&v, &val)
		protoNodeTypeList = append(protoNodeTypeList, val)
	}
	return protoNodeTypeList
}

//DBNode To PBNode
func OrmNodeToProtoNode(ormNode *orm.Node, protoNode *protoManage.Node) {
	OrmBaseToProtoBase(&ormNode.Base, &protoNode.Base)
	protoNode.TypeID = ormNode.TypeID
	protoNode.GroupID = ormNode.GroupID
	protoNode.Name = ormNode.Name
	protoNode.State = protoManage.State(ormNode.State)
}

//DBNodeList To PBNodeList
func OrmNodeListToProtoNodeList(ormNodeList []orm.Node) []protoManage.Node {
	var protoNodeList []protoManage.Node
	for _ ,v := range ormNodeList {
		val := protoManage.Node{}
		OrmNodeToProtoNode(&v, &val)
		protoNodeList = append(protoNodeList, val)
	}
	return protoNodeList
}

//DBNodeLink To PBNodeLink
func OrmNodeLinkToProtoNodeLink(ormNodeLink *orm.NodeLink, protoNodeLink *protoManage.NodeLink) {
	OrmBaseToProtoBase(&ormNodeLink.Base, &protoNodeLink.Base)
	protoNodeLink.SourceID = ormNodeLink.SourceID
	protoNodeLink.TargetID = ormNodeLink.TargetID
	protoNodeLink.State = protoManage.State(ormNodeLink.State)
}

//DBNodeLinkList To PBNodeLinkList
func OrmNodeLinkListToProtoNodeLinkList(ormNodeLinkList []orm.NodeLink) []protoManage.NodeLink {
	var protoNodeLinkList []protoManage.NodeLink
	for _ ,v := range ormNodeLinkList {
		val := protoManage.NodeLink{}
		OrmNodeLinkToProtoNodeLink(&v, &val)
		protoNodeLinkList = append(protoNodeLinkList, val)
	}
	return protoNodeLinkList
}

//DBNodeFunc To PBNodeFunc
func OrmNodeFuncToProtoNodeFunc(ormNodeFunc *orm.NodeFunc, protoNodeFunc *protoManage.NodeFunc) {
	OrmBaseToProtoBase(&ormNodeFunc.Base, &protoNodeFunc.Base)
	protoNodeFunc.NodeID = ormNodeFunc.NodeID
	protoNodeFunc.Name = ormNodeFunc.Name
	protoNodeFunc.Func = ormNodeFunc.Func
	protoNodeFunc.State = protoManage.State(ormNodeFunc.State)
}

//DBNodeFuncList To PBNodeFuncList
func OrmNodeFuncListToProtoNodeFuncList(ormNodeFuncList []orm.NodeFunc) []protoManage.NodeFunc {
	var protoNodeFuncList []protoManage.NodeFunc
	for _ ,v := range ormNodeFuncList {
		val := protoManage.NodeFunc{}
		OrmNodeFuncToProtoNodeFunc(&v, &val)
		protoNodeFuncList = append(protoNodeFuncList, val)
	}
	return protoNodeFuncList
}

//DBNodeFuncCall To PBNodeFuncCall
func OrmNodeFuncCallToProtoNodeFuncCall(ormNodeFuncCall *orm.NodeFuncCall, protoNodeFuncCall *protoManage.NodeFuncCall) {
	OrmBaseToProtoBase(&ormNodeFuncCall.Base, &protoNodeFuncCall.Base)
	protoNodeFuncCall.ManagerID = ormNodeFuncCall.ManagerID
	protoNodeFuncCall.FuncID = ormNodeFuncCall.FuncID
	protoNodeFuncCall.Parameter = ormNodeFuncCall.Parameter
	protoNodeFuncCall.ReturnVal = ormNodeFuncCall.ReturnVal
	protoNodeFuncCall.State = protoManage.State(ormNodeFuncCall.State)
}

//DBNodeFuncCallList To PBNodeFuncCallList
func OrmNodeFuncCallListToProtoNodeFuncCallList(ormNodeFuncCallList []orm.NodeFuncCall) []protoManage.NodeFuncCall {
	var protoNodeFuncCallList []protoManage.NodeFuncCall
	for _ ,v := range ormNodeFuncCallList {
		val := protoManage.NodeFuncCall{}
		OrmNodeFuncCallToProtoNodeFuncCall(&v, &val)
		protoNodeFuncCallList = append(protoNodeFuncCallList, val)
	}
	return protoNodeFuncCallList
}

//DBNodeReport To PBNodeReport
func OrmNodeReportToProtoNodeReport(ormNodeReport *orm.NodeReport, protoNodeReport *protoManage.NodeReport)  {
	OrmBaseToProtoBase(&ormNodeReport.Base, &protoNodeReport.Base)
	protoNodeReport.NodeID = ormNodeReport.NodeID
	protoNodeReport.Name = ormNodeReport.Name
	protoNodeReport.Func = ormNodeReport.Func
	protoNodeReport.State = protoManage.State(ormNodeReport.State)
	//protoNodeReport.Value = ormNodeReport.Value
}

//DBNodeReportList To PBNodeReportList
func OrmNodeReportListToProtoNodeReportList(ormNodeReportList []orm.NodeReport) []protoManage.NodeReport {
	var protoNodeReportList []protoManage.NodeReport
	for _ ,v := range ormNodeReportList {
		val := protoManage.NodeReport{}
		OrmNodeReportToProtoNodeReport(&v, &val)
		protoNodeReportList = append(protoNodeReportList, val)
	}
	return protoNodeReportList
}

//DBNodeReportVal To PBNodeReportVal
func OrmNodeReportValToProtoNodeReportVal(ormNodeReportVal *orm.NodeReportVal, protoNodeReportVal *protoManage.NodeReportVal) {
	OrmBaseToProtoBase(&ormNodeReportVal.Base, &protoNodeReportVal.Base)
	protoNodeReportVal.ReportID = ormNodeReportVal.ReportID
	protoNodeReportVal.Value = ormNodeReportVal.Value
	protoNodeReportVal.State = protoManage.State(ormNodeReportVal.State)
}

//DBNodeReportValList To PBNodeReportValList
func OrmNodeReportValListToProtoNodeReportValList(ormNodeReportValList []orm.NodeReportVal) []protoManage.NodeReportVal {
	var protoNodeReportValList []protoManage.NodeReportVal
	for _ ,v := range ormNodeReportValList {
		val := protoManage.NodeReportVal{}
		OrmNodeReportValToProtoNodeReportVal(&v, &val)
		protoNodeReportValList = append(protoNodeReportValList, val)
	}
	return protoNodeReportValList
}

//DBNodeNotify To PBNodeNotify
func OrmNodeNotifyToProtoNodeNotify(ormNodeNotify *orm.NodeNotify, protoNodeNotify *protoManage.NodeNotify) {
	OrmBaseToProtoBase(&ormNodeNotify.Base, &protoNodeNotify.Base)
	protoNodeNotify.SenderID = ormNodeNotify.SenderID
	protoNodeNotify.SenderType = protoManage.NotifySenderType(ormNodeNotify.SenderType)
	protoNodeNotify.Message = ormNodeNotify.Message
	protoNodeNotify.State = protoManage.State(ormNodeNotify.State)
}

//DBNodeNotifyList To PBNodeNotifyList
func OrmNodeNotifyListToProtoNodeNotifyList(ormNodeNotifyList []orm.NodeNotify) []protoManage.NodeNotify {
	var protoNodeNotifyList []protoManage.NodeNotify
	for _ ,v := range ormNodeNotifyList {
		val := protoManage.NodeNotify{}
		OrmNodeNotifyToProtoNodeNotify(&v, &val)
		protoNodeNotifyList = append(protoNodeNotifyList, val)
	}
	return protoNodeNotifyList
}

//DBStateCountList To PBStateCountList
func OrmStateCountListToProtoStateCountList(ormStateCountList []orm.StateCount) []protoManage.StateCount {
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
