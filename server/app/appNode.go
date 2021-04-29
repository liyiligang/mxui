// Copyright 2019 The Authors. All rights reserved.
// Author: liyiligang
// Date: 2019/10/10 8:24
// Description: 节点事务

package app

import (
	"github.com/jinyun/base/protoFiles/protoManage"
)

//节点登录
func (app *App) reqNodeLogin(message []byte, addr string) (int64, []byte, error) {
	reqNodeLogin := protoManage.ReqNodeLogin{}
	err := reqNodeLogin.Unmarshal(message)
	if err != nil {
		return 0, nil, err
	}
	err = app.nodeGroupFindOrAddByName(&reqNodeLogin.NodeGroup)
	if err != nil {
		return 0, nil, err
	}
	err = app.nodeTypeFindOrAddByName(&reqNodeLogin.NodeType)
	if err != nil {
		return 0, nil, err
	}
	reqNodeLogin.Node.GroupID = reqNodeLogin.NodeGroup.Base.ID
	reqNodeLogin.Node.TypeID = reqNodeLogin.NodeType.Base.ID
	err = app.nodeFindOrAddByName(&reqNodeLogin.Node)
	if err != nil {
		return 0, nil, err
	}
	byte , err := reqNodeLogin.Node.Marshal()
	if err != nil {
		return 0, nil, err
	}
	return reqNodeLogin.Node.Base.ID, byte, nil
}

//节点上线
func (app *App) reqNodeOnline(nodeID int64, message []byte) error {
	reqNodeOnline := protoManage.ReqNodeOnline{}
	err := reqNodeOnline.Unmarshal(message)
	if err != nil {
		return err
	}

	if reqNodeOnline.Node.Base.ID != 0 {
		err = app.baseIDCheck(reqNodeOnline.Node.Base.ID, nodeID)
		if err != nil {
			return err
		}
		app.nodeStateUpdate(&reqNodeOnline.Node)
	}

	for _, v := range reqNodeOnline.NodeLinkList {
		err = app.baseIDCheck(v.SourceID, nodeID)
		if err != nil {
			return err
		}
		app.nodeLinkStateUpdateOrAddByNodeID(&v)
	}

	for _, v := range reqNodeOnline.NodeFuncList {
		err = app.baseIDCheck(v.NodeID, nodeID)
		if err != nil {
			return err
		}
		app.nodeFuncDescUpdateOrAddByName(&v)
	}

	for _, v := range reqNodeOnline.NodeReportList {
		err = app.baseIDCheck(v.NodeID, nodeID)
		if err != nil {
			return err
		}
		app.nodeReportValUpdateOrAddByName(&v)
	}
	return nil
}

//节点离线
func (app *App) reqNodeOffline(nodeID int64) {
	app.nodeStateUpdate(&protoManage.Node{Base: protoManage.Base{ID: nodeID},
		State: protoManage.State_StateUnknow})
}

//节点状态更新
func (app *App) reqNodeStateUpdate(nodeID int64, message []byte) {
	node := protoManage.Node{}
	err := node.Unmarshal(message)
	if err != nil {
		return
	}

	err = app.baseIDCheck(node.Base.ID, nodeID)
	if err != nil {
		return
	}

	app.nodeStateUpdate(&node)
}

//节点连接状态更新
func (app *App) reqNodeLinkStateUpdate(nodeID int64, message []byte) {
	nodeLink := protoManage.NodeLink{}
	err := nodeLink.Unmarshal(message)
	if err != nil {
		return
	}

	err = app.baseIDCheck(nodeLink.SourceID, nodeID)
	if err != nil {
		return
	}

	err = app.nodeLinkStateUpdateOrAddByNodeID(&nodeLink)
	if err != nil {
		return
	}
}

//节点方法描述更新
func (app *App) reqNodeFuncDescUpdate(nodeID int64, message []byte) {
	nodeFunc := protoManage.NodeFunc{}
	err := nodeFunc.Unmarshal(message)
	if err != nil {
		return
	}

	err = app.baseIDCheck(nodeFunc.NodeID, nodeID)
	if err != nil {
		return
	}

	err = app.nodeFuncDescUpdateOrAddByName(&nodeFunc)
	if err != nil {
		return
	}
}

//节点报告值更新
func (app *App) reqNodeReportValUpdate(nodeID int64, message []byte) {
	nodeReport := protoManage.NodeReport{}
	err := nodeReport.Unmarshal(message)
	if err != nil {
		return
	}

	err = app.baseIDCheck(nodeReport.NodeID, nodeID)
	if err != nil {
		return
	}

	err = app.nodeReportValUpdateOrAddByName(&nodeReport)
	if err != nil {
		return
	}
}

//节点通知更新
func (app *App) reqNodeNotifyUpdate(nodeID int64, message []byte) {
	nodeNotify := protoManage.NodeNotify{}
	err := nodeNotify.Unmarshal(message)
	if err != nil {
		return
	}

	err = app.baseIDCheck(nodeNotify.SenderID, nodeID)
	if err != nil {
		return
	}

	err = app.nodeNotifyAdd(&nodeNotify)
	if err != nil {
		return
	}
}

//顶部链接信息查询
func (app *App) reqTopLinkFind(userID int64, message []byte)([]byte, error){
	req := protoManage.ReqTopLinkList{}
	err := req.Unmarshal(message)
	if err != nil {
		return nil, err
	}
	ans, err := app.topLinkFind(req)
	if err != nil {
		return nil, err
	}
	pbByte, err := ans.Marshal()
	if err != nil {
		return nil, err
	}
	return pbByte, err
}

//节点组信息查询
func (app *App) reqNodeGroupFind(userID int64, message []byte)([]byte, error) {
	req := protoManage.ReqNodeGroupList{}
	err := req.Unmarshal(message)
	if err != nil {
		return nil, err
	}
	ans, err := app.nodeGroupFind(req)
	if err != nil {
		return nil, err
	}
	pbByte, err := ans.Marshal()
	if err != nil {
		return nil, err
	}
	return pbByte, err
}

//节点类型信息查询
func (app *App) reqNodeTypeFind(userID int64, message []byte)([]byte, error) {
	req := protoManage.ReqNodeTypeList{}
	err := req.Unmarshal(message)
	if err != nil {
		return nil, err
	}
	ans, err := app.nodeTypeFind(req)
	if err != nil {
		return nil, err
	}
	pbByte, err := ans.Marshal()
	if err != nil {
		return nil, err
	}
	return pbByte, err
}

//节点信息查询
func (app *App) reqNodeFind(userID int64, message []byte)([]byte, error) {
	req := protoManage.ReqNodeList{}
	err := req.Unmarshal(message)
	if err != nil {
		return nil, err
	}
	ans, err := app.nodeFind(req)
	if err != nil {
		return nil, err
	}
	pbByte, err := ans.Marshal()
	if err != nil {
		return nil, err
	}
	return pbByte, err
}

//节点连接信息查询
func (app *App) reqNodeLinkFind(userID int64, message []byte)([]byte, error) {
	req := protoManage.ReqNodeLinkList{}
	err := req.Unmarshal(message)
	if err != nil {
		return nil, err
	}
	ans, err := app.nodeLinkFind(req)
	if err != nil {
		return nil, err
	}
	pbByte, err := ans.Marshal()
	if err != nil {
		return nil, err
	}
	return pbByte, err
}

//节点方法查询
func (app *App) reqNodeFuncFind(userID int64, message []byte)([]byte, error) {
	req := protoManage.ReqNodeFuncList{}
	err := req.Unmarshal(message)
	if err != nil {
		return nil, err
	}
	ans, err := app.nodeFuncFind(req)
	if err != nil {
		return nil, err
	}
	pbByte, err := ans.Marshal()
	if err != nil {
		return nil, err
	}
	return pbByte, err
}

//节点方法调用查询
func (app *App) reqNodeFuncCallFind(userID int64, message []byte)([]byte, error) {
	req := protoManage.ReqNodeFuncCallList{}
	err := req.Unmarshal(message)
	if err != nil {
		return nil, err
	}
	ans, err := app.nodeFuncCallFind(req)
	if err != nil {
		return nil, err
	}
	pbByte, err := ans.Marshal()
	if err != nil {
		return nil, err
	}
	return pbByte, err
}

//节点报告查询
func (app *App) reqNodeReportFind(userID int64, message []byte)([]byte, error) {
	req := protoManage.ReqNodeReportList{}
	err := req.Unmarshal(message)
	if err != nil {
		return nil, err
	}
	ans, err := app.nodeReportFind(req)
	if err != nil {
		return nil, err
	}
	pbByte, err := ans.Marshal()
	if err != nil {
		return nil, err
	}
	return pbByte, err
}

//节点报告值查询
func (app *App) reqNodeReportValFind(userID int64, message []byte)([]byte, error) {
	req := protoManage.ReqNodeReportValList{}
	err := req.Unmarshal(message)
	if err != nil {
		return nil, err
	}
	ans, err := app.nodeReportValFind(req)
	if err != nil {
		return nil, err
	}
	pbByte, err := ans.Marshal()
	if err != nil {
		return nil, err
	}
	return pbByte, err
}

//获取节点组按ID
func (app *App) reqNodeGroupFindByID(userID int64, message []byte)([]byte, error) {
	req := protoManage.NodeGroup{}
	err := req.Unmarshal(message)
	if err != nil {
		return nil, err
	}
	err = app.nodeGroupFindByID(&req)
	if err != nil {
		return nil, err
	}
	pbByte, err := req.Marshal()
	if err != nil {
		return nil, err
	}
	return pbByte, err
}

//获取节点类型按ID
func (app *App) reqNodeTypeFindByID(userID int64, message []byte)([]byte, error) {
	req := protoManage.NodeType{}
	err := req.Unmarshal(message)
	if err != nil {
		return nil, err
	}
	err = app.nodeTypeFindByID(&req)
	if err != nil {
		return nil, err
	}
	pbByte, err := req.Marshal()
	if err != nil {
		return nil, err
	}
	return pbByte, err
}

//获取节点按ID
func (app *App) reqNodeFindByID(userID int64, message []byte)([]byte, error) {
	req := protoManage.Node{}
	err := req.Unmarshal(message)
	if err != nil {
		return nil, err
	}
	err = app.nodeFindByID(&req)
	if err != nil {
		return nil, err
	}
	pbByte, err := req.Marshal()
	if err != nil {
		return nil, err
	}
	return pbByte, err
}

//请求节点方法调用
func (app *App) reqNodeFuncCall(userID int64, message []byte)([]byte, error) {
	req := protoManage.ReqNodeFuncCall{}
	err := req.Unmarshal(message)
	if err != nil {
		return nil, err
	}
	req.NodeFuncCall.ManagerID = userID
	err = app.nodeFuncCallReq(&req)
	if err != nil {
		return nil, err
	}
	pbByte, err := req.NodeFuncCall.Base.Marshal()
	if err != nil {
		return nil, err
	}
	return pbByte, err
}

//回复节点方法调用
func (app *App) ansNodeFuncCall(nodeID int64, message []byte) error {
	ans := protoManage.AnsNodeFuncCall{}
	err := ans.Unmarshal(message)
	if err != nil {
		return err
	}
	err = app.nodeFuncCallAns(&ans)
	if err != nil {
		return err
	}
	return nil
}

//获取节点方法调用按ID
func (app *App) reqNodeFuncCallFindByID(userID int64, message []byte)([]byte, error) {
	req := protoManage.NodeFuncCall{}
	err := req.Unmarshal(message)
	if err != nil {
		return nil, err
	}
	err = app.nodeFuncCallFindByID(&req)
	if err != nil {
		return nil, err
	}
	pbByte, err := req.Marshal()
	if err != nil {
		return nil, err
	}
	return pbByte, err
}

