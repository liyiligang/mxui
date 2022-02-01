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

package request

import (
	"context"
	"github.com/liyiligang/mxui/protoFiles/protoManage"
)

func (request *Request) RegisterNode(ctx context.Context, node *protoManage.Node) (*protoManage.Node, error) {
	err := request.Data.NodeFindOrAddByName(node)
	if err != nil {
		return nil, err
	}
	return node, nil
}

//节点离线
func (request *Request) ReqNodeOffline(nodeID int64) error {
	err := request.Data.NodeStateUpdate(&protoManage.Node{Base: protoManage.Base{ID: nodeID},
		State: protoManage.State_StateUnknow})
	if err != nil {
		return err
	}
	err = request.Data.NodeFuncStateUpdateByNodeID(&protoManage.NodeFunc{NodeID: nodeID, State: protoManage.State_StateNot})
	if err != nil {
		return err
	}
	err = request.Data.NodeReportStateUpdateByNodeID(&protoManage.NodeReport{NodeID: nodeID, State: protoManage.State_StateNot})
	if err != nil {
		return err
	}
	return nil
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
	err = request.Data.NodeTest(r.UserID, req)
	if err != nil {
		return err
	}
	err = request.marshalWithHttp(r, req)
	if err != nil {
		return err
	}
	return nil
}