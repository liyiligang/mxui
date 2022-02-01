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

func (request *Request) RegisterNodeFunc(ctx context.Context, nodeFunc *protoManage.NodeFunc) (*protoManage.NodeFunc, error) {
	err := request.Data.NodeFuncUpdateOrAdd(nodeFunc)
	if err != nil  {
		return nil, err
	}
	return nodeFunc, nil
}

//节点方法查询
func (request *Request) ReqNodeFuncFind(r *HTTPRequest) error {
	req := &protoManage.ReqNodeFuncList{}
	err := request.unmarshalWithHttp(r, req)
	if err != nil {
		return err
	}
	req.LevelMax = r.UserLevel
	ans, err := request.Data.NodeFuncFind(req)
	if err != nil {
		return err
	}
	err = request.marshalWithHttp(r, ans)
	if err != nil {
		return err
	}
	return nil
}

//刪除节点方法
func (request *Request) ReqNodeFuncDel(r *HTTPRequest) error {
	req := &protoManage.NodeFunc{}
	err := request.unmarshalWithHttp(r, req)
	if err != nil {
		return err
	}
	err = request.Data.NodeFuncDel(req)
	if err != nil {
		return err
	}
	err = request.marshalWithHttp(r, req)
	if err != nil {
		return err
	}
	return nil
}

