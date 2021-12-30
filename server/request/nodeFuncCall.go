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
	"github.com/liyiligang/mxrpc/protoFiles/protoManage"
	"github.com/liyiligang/mxrpc/typedef/orm"
	"github.com/pkg/errors"
)

//请求节点方法调用
func (request *Request) ReqNodeFuncCall(r *HTTPRequest) error {
	req := &protoManage.ReqNodeFuncCall{}
	err := request.unmarshalWithHttp(r, req)
	if err != nil {
		return err
	}
	err = request.Data.NodeFuncLevelCheck(r.UserLevel, req.NodeFuncCall.FuncID)
	if err != nil {
		return err
	}
	req.NodeFuncCall.ManagerID = r.UserID
	err = request.Data.NodeFuncCallReq(req)
	if err != nil {
		rErr := request.Data.DB.AddNodeFuncCall(&orm.NodeFuncCall{
			ManagerID: req.NodeFuncCall.ManagerID,
			FuncID: req.NodeFuncCall.FuncID,
			Parameter: req.NodeFuncCall.Parameter,
			ReturnType: int32(protoManage.NodeFuncReturnType_Error),
			ReturnVal: err.Error(),
			State: int32(protoManage.State_StateError),
		})
		if rErr != nil {
			return errors.WithMessage(rErr, err.Error())
		}
		return err
	}
	err = request.marshalWithHttp(r, req)
	if err != nil {
		return err
	}
	return nil
}

//回复节点方法调用
func (request *Request) AnsNodeFuncCall(nodeID int64, message []byte) error {
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

//节点方法调用查询
func (request *Request) ReqNodeFuncCallFind(r *HTTPRequest) error {
	req := &protoManage.ReqNodeFuncCallList{}
	err := request.unmarshalWithHttp(r, req)
	if err != nil {
		return err
	}
	err = request.Data.NodeFuncLevelCheck(r.UserLevel, req.FuncID)
	if err != nil {
		return err
	}
	ans, err := request.Data.NodeFuncCallFind(req)
	if err != nil {
		return err
	}
	err = request.marshalWithHttp(r, ans)
	if err != nil {
		return err
	}
	return nil
}

//获取节点方法调用按ID
func (request *Request) ReqNodeFuncCallFindByID(r *HTTPRequest) error {
	req := &protoManage.NodeFuncCall{}
	err := request.unmarshalWithHttp(r, req)
	if err != nil {
		return err
	}
	err = request.Data.NodeFuncLevelCheck(r.UserLevel, req.FuncID)
	if err != nil {
		return err
	}
	err = request.Data.NodeFuncCallFindByID(req)
	if err != nil {
		return err
	}
	err = request.marshalWithHttp(r, req)
	if err != nil {
		return err
	}
	return nil
}

//获取节点方法调用参数按ID
func (request *Request) ReqNodeFuncCallParameterFindByID(r *HTTPRequest) error {
	req := &protoManage.NodeFuncCall{}
	err := request.unmarshalWithHttp(r, req)
	if err != nil {
		return err
	}
	err = request.Data.NodeFuncLevelCheck(r.UserLevel, req.FuncID)
	if err != nil {
		return err
	}
	err = request.Data.NodeFuncCallParameterFindByID(req)
	if err != nil {
		return err
	}
	err = request.marshalWithHttp(r, req)
	if err != nil {
		return err
	}
	return nil
}

//获取节点方法调用返回值按ID
func (request *Request) ReqNodeFuncCallReturnValFindByID(r *HTTPRequest) error {
	req := &protoManage.NodeFuncCall{}
	err := request.unmarshalWithHttp(r, req)
	if err != nil {
		return err
	}
	err = request.Data.NodeFuncLevelCheck(r.UserLevel, req.FuncID)
	if err != nil {
		return err
	}
	err = request.Data.NodeFuncCallReturnValFindByID(req)
	if err != nil {
		return err
	}
	err = request.marshalWithHttp(r, req)
	if err != nil {
		return err
	}
	return nil
}



