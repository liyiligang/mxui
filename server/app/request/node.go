package request

import (
	"github.com/liyiligang/base/protoFiles/protoManage"
	"github.com/liyiligang/manage/app/check"
)

//节点登录
func (request *Request) ReqNodeLogin(message []byte, addr string) (int64, []byte, error) {
	reqNodeLogin := protoManage.ReqNodeLogin{}
	err := reqNodeLogin.Unmarshal(message)
	if err != nil {
		return 0, nil, err
	}
	err = request.Data.NodeGroupFindOrAddByName(&reqNodeLogin.NodeGroup)
	if err != nil {
		return 0, nil, err
	}
	err = request.Data.NodeTypeFindOrAddByName(&reqNodeLogin.NodeType)
	if err != nil {
		return 0, nil, err
	}
	reqNodeLogin.Node.GroupID = reqNodeLogin.NodeGroup.Base.ID
	reqNodeLogin.Node.TypeID = reqNodeLogin.NodeType.Base.ID
	err = request.Data.NodeFindOrAddByName(&reqNodeLogin.Node)
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
func (request *Request) ReqNodeOnline(nodeID int64, message []byte) error {
	reqNodeOnline := protoManage.ReqNodeOnline{}
	err := reqNodeOnline.Unmarshal(message)
	if err != nil {
		return err
	}

	if reqNodeOnline.Node.Base.ID != 0 {
		err = check.BaseIDCheck(reqNodeOnline.Node.Base.ID, nodeID)
		if err != nil {
			return err
		}
		request.Data.NodeStateUpdate(&reqNodeOnline.Node)
	}

	for _, v := range reqNodeOnline.NodeLinkList {
		err = check.BaseIDCheck(v.SourceID, nodeID)
		if err != nil {
			return err
		}
		request.Data.NodeLinkStateUpdateOrAddByNodeID(&v)
	}

	for _, v := range reqNodeOnline.NodeFuncList {
		err = check.BaseIDCheck(v.NodeID, nodeID)
		if err != nil {
			return err
		}
		request.Data.NodeFuncDescUpdateOrAddByName(&v)
	}

	for _, v := range reqNodeOnline.NodeReportList {
		err = check.BaseIDCheck(v.NodeID, nodeID)
		if err != nil {
			return err
		}
		request.Data.NodeReportValUpdateOrAddByName(&v)
	}
	return nil
}

//节点离线
func (request *Request) ReqNodeOffline(nodeID int64) {
	request.Data.NodeStateUpdate(&protoManage.Node{Base: protoManage.Base{ID: nodeID},
		State: protoManage.State_StateUnknow})
}

//节点状态更新
func (request *Request) ReqNodeStateUpdate(nodeID int64, message []byte) {
	node := protoManage.Node{}
	err := node.Unmarshal(message)
	if err != nil {
		return
	}

	err = check.BaseIDCheck(node.Base.ID, nodeID)
	if err != nil {
		return
	}

	request.Data.NodeStateUpdate(&node)
}

//节点连接状态更新
func (request *Request) ReqNodeLinkStateUpdate(nodeID int64, message []byte) {
	nodeLink := protoManage.NodeLink{}
	err := nodeLink.Unmarshal(message)
	if err != nil {
		return
	}

	err = check.BaseIDCheck(nodeLink.SourceID, nodeID)
	if err != nil {
		return
	}

	err = request.Data.NodeLinkStateUpdateOrAddByNodeID(&nodeLink)
	if err != nil {
		return
	}
}

//节点方法描述更新
func (request *Request) ReqNodeFuncDescUpdate(nodeID int64, message []byte) {
	nodeFunc := protoManage.NodeFunc{}
	err := nodeFunc.Unmarshal(message)
	if err != nil {
		return
	}

	err = check.BaseIDCheck(nodeFunc.NodeID, nodeID)
	if err != nil {
		return
	}

	err = request.Data.NodeFuncDescUpdateOrAddByName(&nodeFunc)
	if err != nil {
		return
	}
}

//节点报告值更新
func (request *Request) ReqNodeReportValUpdate(nodeID int64, message []byte) {
	nodeReport := protoManage.NodeReport{}
	err := nodeReport.Unmarshal(message)
	if err != nil {
		return
	}

	err = check.BaseIDCheck(nodeReport.NodeID, nodeID)
	if err != nil {
		return
	}

	err = request.Data.NodeReportValUpdateOrAddByName(&nodeReport)
	if err != nil {
		return
	}
}

//节点通知更新
func (request *Request) ReqNodeNotifyUpdate(nodeID int64, message []byte) {
	nodeNotify := protoManage.NodeNotify{}
	err := nodeNotify.Unmarshal(message)
	if err != nil {
		return
	}

	err = check.BaseIDCheck(nodeNotify.SenderID, nodeID)
	if err != nil {
		return
	}

	err = request.Data.NodeNotifyAdd(&nodeNotify)
	if err != nil {
		return
	}
}

//顶部链接信息查询
func (request *Request) ReqTopLinkFind(userID int64, message []byte)([]byte, error){
	req := protoManage.ReqTopLinkList{}
	err := req.Unmarshal(message)
	if err != nil {
		return nil, err
	}
	ans, err := request.Data.TopLinkFind(req)
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
func (request *Request) ReqNodeGroupFind(userID int64, message []byte)([]byte, error) {
	req := protoManage.ReqNodeGroupList{}
	err := req.Unmarshal(message)
	if err != nil {
		return nil, err
	}
	ans, err := request.Data.NodeGroupFind(req)
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
func (request *Request) ReqNodeTypeFind(userID int64, message []byte)([]byte, error) {
	req := protoManage.ReqNodeTypeList{}
	err := req.Unmarshal(message)
	if err != nil {
		return nil, err
	}
	ans, err := request.Data.NodeTypeFind(req)
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
func (request *Request) ReqNodeFind(userID int64, message []byte)([]byte, error) {
	req := protoManage.ReqNodeList{}
	err := req.Unmarshal(message)
	if err != nil {
		return nil, err
	}
	ans, err := request.Data.NodeFind(req)
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
func (request *Request) ReqNodeLinkFind(userID int64, message []byte)([]byte, error) {
	req := protoManage.ReqNodeLinkList{}
	err := req.Unmarshal(message)
	if err != nil {
		return nil, err
	}
	ans, err := request.Data.NodeLinkFind(req)
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
func (request *Request) ReqNodeFuncFind(userID int64, message []byte)([]byte, error) {
	req := protoManage.ReqNodeFuncList{}
	err := req.Unmarshal(message)
	if err != nil {
		return nil, err
	}
	ans, err := request.Data.NodeFuncFind(req)
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
func (request *Request) ReqNodeFuncCallFind(userID int64, message []byte)([]byte, error) {
	req := protoManage.ReqNodeFuncCallList{}
	err := req.Unmarshal(message)
	if err != nil {
		return nil, err
	}
	ans, err := request.Data.NodeFuncCallFind(req)
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
func (request *Request) ReqNodeReportFind(userID int64, message []byte)([]byte, error) {
	req := protoManage.ReqNodeReportList{}
	err := req.Unmarshal(message)
	if err != nil {
		return nil, err
	}
	ans, err := request.Data.NodeReportFind(req)
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
func (request *Request) ReqNodeReportValFind(userID int64, message []byte)([]byte, error) {
	req := protoManage.ReqNodeReportValList{}
	err := req.Unmarshal(message)
	if err != nil {
		return nil, err
	}
	ans, err := request.Data.NodeReportValFind(req)
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
func (request *Request) ReqNodeGroupFindByID(userID int64, message []byte)([]byte, error) {
	req := protoManage.NodeGroup{}
	err := req.Unmarshal(message)
	if err != nil {
		return nil, err
	}
	err = request.Data.NodeGroupFindByID(&req)
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
func (request *Request) ReqNodeTypeFindByID(userID int64, message []byte)([]byte, error) {
	req := protoManage.NodeType{}
	err := req.Unmarshal(message)
	if err != nil {
		return nil, err
	}
	err = request.Data.NodeTypeFindByID(&req)
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
func (request *Request) ReqNodeFindByID(userID int64, message []byte)([]byte, error) {
	req := protoManage.Node{}
	err := req.Unmarshal(message)
	if err != nil {
		return nil, err
	}
	err = request.Data.NodeFindByID(&req)
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
func (request *Request) ReqNodeFuncCall(userID int64, message []byte)([]byte, error) {
	req := protoManage.ReqNodeFuncCall{}
	err := req.Unmarshal(message)
	if err != nil {
		return nil, err
	}
	req.NodeFuncCall.ManagerID = userID
	err = request.Data.NodeFuncCallReq(&req)
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
func (request *Request) ansNodeFuncCall(nodeID int64, message []byte) error {
	ans := protoManage.AnsNodeFuncCall{}
	err := ans.Unmarshal(message)
	if err != nil {
		return err
	}
	err = request.Data.NodeFuncCallAns(&ans)
	if err != nil {
		return err
	}
	return nil
}

//获取节点方法调用按ID
func (request *Request) ReqNodeFuncCallFindByID(userID int64, message []byte)([]byte, error) {
	req := protoManage.NodeFuncCall{}
	err := req.Unmarshal(message)
	if err != nil {
		return nil, err
	}
	err = request.Data.NodeFuncCallFindByID(&req)
	if err != nil {
		return nil, err
	}
	pbByte, err := req.Marshal()
	if err != nil {
		return nil, err
	}
	return pbByte, err
}

