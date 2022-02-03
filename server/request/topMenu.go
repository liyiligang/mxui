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
)

func (request *Request) ReqTopLinkFind(r *HTTPRequest) error {
	req := &protoManage.ReqTopLinkList{}
	err := request.unmarshalWithHttp(r, req)
	if err != nil {
		return err
	}
	ans, err := request.Data.TopLinkFind(req)
	if err != nil {
		return err
	}
	err = request.marshalWithHttp(r, ans)
	if err != nil {
		return err
	}
	return nil
}

func (request *Request) ReqTopLinkFindByID(r *HTTPRequest) error {
	req := &protoManage.TopLink{}
	err := request.unmarshalWithHttp(r, req)
	if err != nil {
		return err
	}
	err = request.Data.TopLinkFindByID(req)
	if err != nil {
		return err
	}
	err = request.marshalWithHttp(r, req)
	if err != nil {
		return err
	}
	return nil
}

func (request *Request) ReqTopLinkAdd(r *HTTPRequest) error {
	req := &protoManage.TopLink{}
	err := request.unmarshalWithHttp(r, req)
	if err != nil {
		return err
	}
	err = request.Data.TopLinkAdd(req)
	if err != nil {
		return err
	}
	err = request.marshalWithHttp(r, req)
	if err != nil {
		return err
	}
	return nil
}

func (request *Request) ReqTopLinkDel(r *HTTPRequest) error {
	req := &protoManage.TopLink{}
	err := request.unmarshalWithHttp(r, req)
	if err != nil {
		return err
	}
	err = request.Data.TopLinkDel(req)
	if err != nil {
		return err
	}
	err = request.marshalWithHttp(r, req)
	if err != nil {
		return err
	}
	return nil
}

func (request *Request) ReqTopLinkUpdate(r *HTTPRequest) error {
	req := &protoManage.TopLink{}
	err := request.unmarshalWithHttp(r, req)
	if err != nil {
		return err
	}
	err = request.Data.TopLinkUpdate(req)
	if err != nil {
		return err
	}
	err = request.marshalWithHttp(r, req)
	if err != nil {
		return err
	}
	return nil
}