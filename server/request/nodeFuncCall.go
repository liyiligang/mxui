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
	"github.com/liyiligang/mxui/protoFiles/protoManage"
	"github.com/liyiligang/mxui/typedef/orm"
	"github.com/pkg/errors"
)

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
	req.NodeFuncCall.RequesterID = r.UserID
	manager := protoManage.Manager{}
	err = request.Data.ManagerFindByID(r.UserID, &manager)
	if err != nil {
		return err
	}
	req.NodeFuncCall.RequesterName = manager.NickName
	err = request.Data.NodeFuncCallReq(req)
	if err != nil {
		rErr := request.Data.DB.AddNodeFuncCall(&orm.NodeFuncCall{
			RequesterID: req.NodeFuncCall.RequesterID,
			RequesterName: req.NodeFuncCall.RequesterName,
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



