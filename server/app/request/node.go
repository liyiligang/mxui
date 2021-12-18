package request

import (
	"github.com/liyiligang/base/component/Jlog"
	"github.com/liyiligang/klee/app/check"
	"github.com/liyiligang/klee/app/protoFiles/protoManage"
)

//节点登录
func (request *Request) ReqNodeLogin(message []byte, addr string) (int64, []byte, error) {
	reqNodeLogin := protoManage.ReqNodeLogin{}
	err := reqNodeLogin.Unmarshal(message)
	if err != nil {
		return 0, nil, err
	}
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
	return nil
}

//节点离线
func (request *Request) ReqNodeOffline(nodeID int64) {
	err := request.Data.NodeStateUpdate(&protoManage.Node{Base: protoManage.Base{ID: nodeID},
		State: protoManage.State_StateUnknow})
	if err != nil {
		Jlog.Error(err.Error())
	}
	err = request.Data.NodeFuncStateUpdateByNodeID(&protoManage.NodeFunc{NodeID: nodeID, State: protoManage.State_StateNot})
	if err != nil {
		Jlog.Error(err.Error())
	}
	err = request.Data.NodeReportStateUpdateByNodeID(&protoManage.NodeReport{NodeID: nodeID, State: protoManage.State_StateNot})
	if err != nil {
		Jlog.Error(err.Error())
	}
}

//节点状态更新
func (request *Request) ReqNodeStateUpdate(nodeID int64, message []byte) error {
	node := protoManage.Node{}
	err := node.Unmarshal(message)
	if err != nil {
		return err
	}

	err = check.BaseIDCheck(node.Base.ID, nodeID)
	if err != nil {
		return err
	}
	return request.Data.NodeStateUpdate(&node)
}

//节点信息查询
func (request *Request) ReqNodeFind(r *HTTPRequest) error {
	req := &protoManage.ReqNodeList{}
	err := request.unmarshalWithHttp(r, req)
	if err != nil {
		return err
	}
	ans, err := request.Data.NodeFind(req)
	if err != nil {
		return err
	}
	err = request.marshalWithHttp(r, ans)
	if err != nil {
		return err
	}
	return nil
}

//获取节点按ID
func (request *Request) ReqNodeFindByID(r *HTTPRequest) error {
	req := &protoManage.Node{}
	err := request.unmarshalWithHttp(r, req)
	if err != nil {
		return err
	}
	err = request.Data.NodeFindByID(req)
	if err != nil {
		return err
	}
	err = request.marshalWithHttp(r, req)
	if err != nil {
		return err
	}
	return nil
}

//刪除节点
func (request *Request) ReqNodeDel(r *HTTPRequest) error {
	req := &protoManage.Node{}
	err := request.unmarshalWithHttp(r, req)
	if err != nil {
		return err
	}
	err = request.Data.NodeDel(req)
	if err != nil {
		return err
	}
	err = request.marshalWithHttp(r, req)
	if err != nil {
		return err
	}
	return nil
}

//请求节点测试
func (request *Request) ReqNodeTest(r *HTTPRequest) error {
	req := &protoManage.ReqNodeTest{}
	err := request.unmarshalWithHttp(r, req)
	if err != nil {
		return err
	}
	err = request.Data.NodeTest(r.userID, req)
	if err != nil {
		return err
	}
	err = request.marshalWithHttp(r, req)
	if err != nil {
		return err
	}
	return nil
}