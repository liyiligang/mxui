package request

import (
	"github.com/liyiligang/manage/app/check"
	"github.com/liyiligang/manage/app/protoFiles/protoManage"
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

	//for _, v := range reqNodeOnline.NodeLinkList {
	//	err = check.BaseIDCheck(v.SourceID, nodeID)
	//	if err != nil {
	//		return err
	//	}
	//	request.Data.NodeLinkStateUpdateOrAddByNodeID(&v)
	//}
	//
	//for _, v := range reqNodeOnline.NodeFuncList {
	//	err = check.BaseIDCheck(v.NodeID, nodeID)
	//	if err != nil {
	//		return err
	//	}
	//	request.Data.NodeFuncDescUpdateOrAddByName(&v)
	//}

	//for _, v := range reqNodeOnline.NodeReportList {
	//	err = check.BaseIDCheck(v.NodeID, nodeID)
	//	if err != nil {
	//		return err
	//	}
	//	request.Data.NodeReportValUpdateOrAddByName(&v)
	//}
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

//请求节点测试
func (request *Request) ReqNodeTest(userID int64, message []byte)([]byte, error) {
	req := protoManage.ReqNodeTest{}
	err := req.Unmarshal(message)
	if err != nil {
		return nil, err
	}
	err = request.Data.NodeTest(userID, &req)
	if err != nil {
		return nil, err
	}
	pbByte, err := req.Marshal()
	if err != nil {
		return nil, err
	}
	return pbByte, err
}