/*
 * Copyright 2021 liyiligang.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package convert

import (
	"github.com/liyiligang/base/component/Jtool"
	"github.com/liyiligang/mxrpc/protoFiles/protoManage"
	"github.com/liyiligang/mxrpc/typedef/orm"
)

//DBBase To PBBase
func OrmBaseToProtoBase(ormBase *orm.Base, protoBase *protoManage.Base) {
	protoBase.ID = ormBase.ID
	protoBase.UpdateTime = Jtool.TimeStringToMsTimeInt64(ormBase.UpdatedAt)
}

//DBManager To PBManager
func OrmManagerToProtoManager(ormManager *orm.Manager, protoManager *protoManage.Manager)  {
	OrmBaseToProtoBase(&ormManager.Base, &protoManager.Base)
	protoManager.Name = ormManager.Name
	protoManager.NickName = ormManager.NickName
	protoManager.Setting = ormManager.Setting
	protoManager.Level = protoManage.Level(ormManager.Level)
	protoManager.State = protoManage.State(ormManager.State)
}

//DBManagerList To PBManagerList
func OrmManagerListNoSettingToProtoManagerListNoSetting(ormManagerList []orm.Manager) []protoManage.Manager {
	var protoManagerList []protoManage.Manager
	for _ ,v := range ormManagerList {
		val := protoManage.Manager{}
		OrmManagerToProtoManager(&v, &val)
		val.Setting = ""
		protoManagerList = append(protoManagerList, val)
	}
	return protoManagerList
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

//DBNode To PBNode
func OrmNodeToProtoNode(ormNode *orm.Node, protoNode *protoManage.Node) {
	OrmBaseToProtoBase(&ormNode.Base, &protoNode.Base)
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

//DBNodeFunc To PBNodeFunc
func OrmNodeFuncToProtoNodeFunc(ormNodeFunc *orm.NodeFunc, protoNodeFunc *protoManage.NodeFunc) {
	OrmBaseToProtoBase(&ormNodeFunc.Base, &protoNodeFunc.Base)
	protoNodeFunc.NodeID = ormNodeFunc.NodeID
	protoNodeFunc.Name = ormNodeFunc.Name
	protoNodeFunc.Func = ormNodeFunc.Func
	protoNodeFunc.Schema = ormNodeFunc.Schema
	protoNodeFunc.Level = protoManage.Level(ormNodeFunc.Level)
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
	protoNodeFuncCall.ReturnType = protoManage.NodeFuncReturnType(ormNodeFuncCall.ReturnType)
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
	protoNodeReport.Type = protoManage.NodeReportType(ormNodeReport.Type)
	protoNodeReport.Schema = ormNodeReport.Schema
	protoNodeReport.Interval = ormNodeReport.Interval
	protoNodeReport.Level = protoManage.Level(ormNodeReport.Level)
	protoNodeReport.State = protoManage.State(ormNodeReport.State)
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
	protoNodeNotify.SenderName = ormNodeNotify.SenderName
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

//DBNodeResource To PBNodeResource
func OrmNodeResourceToProtoNodeResource(ormNodeResource *orm.NodeResource, protoNodeResource *protoManage.NodeResource) {
	OrmBaseToProtoBase(&ormNodeResource.Base, &protoNodeResource.Base)
	protoNodeResource.Name = ormNodeResource.Name
	protoNodeResource.Md5 = ormNodeResource.Md5
	protoNodeResource.Sizes = ormNodeResource.Sizes
	protoNodeResource.Type = protoManage.NodeResourceType(ormNodeResource.Type)
	protoNodeResource.UploaderID = ormNodeResource.UploaderID
	protoNodeResource.UploaderName = ormNodeResource.UploaderName
	protoNodeResource.UploaderType = protoManage.NotifySenderType(ormNodeResource.UploaderType)
	protoNodeResource.DownLoadCnt = ormNodeResource.DownLoadCnt
	protoNodeResource.State = protoManage.State(ormNodeResource.State)
}

//DBNodeResourceList To PBNodeResourceList
func OrmNodeResourceListToProtoNodeResourceList(ormNodeResourceList []orm.NodeResource) []protoManage.NodeResource {
	var protoNodeResourceList []protoManage.NodeResource
	for _ ,v := range ormNodeResourceList {
		val := protoManage.NodeResource{}
		OrmNodeResourceToProtoNodeResource(&v, &val)
		protoNodeResourceList = append(protoNodeResourceList, val)
	}
	return protoNodeResourceList
}
