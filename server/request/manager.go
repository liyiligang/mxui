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
	"github.com/liyiligang/base/component/Jerror"
	"github.com/liyiligang/base/component/Jtool"
	"github.com/liyiligang/mxui/protoFiles/protoManage"
	"github.com/pkg/errors"
)

func (request *Request) ReqWsTokenCheck(message []byte, addr string) (int64, error) {
	message = Jtool.RunesToBytes(message)
	manager := protoManage.Manager{}
	err := manager.Unmarshal(message)
	if err != nil {
		return 0, err
	}
	tokenData, err := request.Data.ParseToken(manager.Token)
	if err != nil {
		return 0, errors.New("token is invalid")
	}
	return tokenData.UserID, nil
}

func (request *Request) ReqManagerRegister(r *HTTPRequest) error {
	req := &protoManage.Manager{}
	err := request.unmarshalWithHttp(r, req)
	if err != nil {
		return err
	}
	err = request.Data.ManagerRegister(req)
	if err != nil {
		return err
	}
	err = request.marshalWithHttp(r, req)
	if err != nil {
		return err
	}
	return nil
}

func (request *Request) ReqManagerLogin(r *HTTPRequest) error {
	req := &protoManage.Manager{}
	err := request.unmarshalWithHttp(r, req)
	if err != nil {
		return err
	}
	err, errCode := request.Data.ManagerLogin(req)
	if err != nil {
		return Jerror.NewErrWithCode(int(errCode), err)
	}
	err = request.marshalWithHttp(r, req)
	if err != nil {
		return err
	}
	return nil
}

func (request *Request) ReqManagerAdd(r *HTTPRequest) error {
	req := &protoManage.Manager{}
	err := request.unmarshalWithHttp(r, req)
	if err != nil {
		return err
	}
	err = request.Data.ManagerAdd(req)
	if err != nil {
		return err
	}
	err = request.marshalWithHttp(r, req)
	if err != nil {
		return err
	}
	return nil
}

func (request *Request) ReqManagerDel(r *HTTPRequest) error {
	req := &protoManage.Manager{}
	err := request.unmarshalWithHttp(r, req)
	if err != nil {
		return err
	}
	err = request.Data.ManagerDel(req)
	if err != nil {
		return err
	}
	err = request.marshalWithHttp(r, req)
	if err != nil {
		return err
	}
	return nil
}

func (request *Request) ReqManagerUpdate(r *HTTPRequest) error {
	req := &protoManage.Manager{}
	err := request.unmarshalWithHttp(r, req)
	if err != nil {
		return err
	}
	err = request.Data.ManagerUpdate(req)
	if err != nil {
		return err
	}
	err = request.marshalWithHttp(r, req)
	if err != nil {
		return err
	}
	return nil
}

func (request *Request) ReqManagerUpdatePasswd(r *HTTPRequest) error {
	req := &protoManage.Manager{}
	err := request.unmarshalWithHttp(r, req)
	if err != nil {
		return err
	}
	err = request.Data.ManagerUpdatePasswd(r.UserID, req)
	if err != nil {
		return err
	}
	err = request.marshalWithHttp(r, req)
	if err != nil {
		return err
	}
	return nil
}

func (request *Request) ReqManagerUpdateSetting(r *HTTPRequest) error {
	req := &protoManage.Manager{}
	err := request.unmarshalWithHttp(r, req)
	if err != nil {
		return err
	}
	err = request.Data.ManagerUpdateSetting(r.UserID, req)
	if err != nil {
		return err
	}
	err = request.marshalWithHttp(r, req)
	if err != nil {
		return err
	}
	return nil
}

func (request *Request) ReqManagerFind(r *HTTPRequest) error {
	req := &protoManage.ReqManagerList{}
	err := request.unmarshalWithHttp(r, req)
	if err != nil {
		return err
	}
	ans, err := request.Data.ManagerFind(r.UserID, req)
	if err != nil {
		return err
	}
	err = request.marshalWithHttp(r, ans)
	if err != nil {
		return err
	}
	return nil
}

func (request *Request) ReqManagerFindByID(r *HTTPRequest) error {
	req := &protoManage.Manager{}
	err := request.unmarshalWithHttp(r, req)
	if err != nil {
		return err
	}
	err = request.Data.ManagerFindByID(r.UserID, req)
	if err != nil {
		return err
	}
	err = request.marshalWithHttp(r, req)
	if err != nil {
		return err
	}
	return nil
}

func (request *Request) ReqManagerFindNickName(r *HTTPRequest) error {
	req := &protoManage.ReqManagerList{}
	err := request.unmarshalWithHttp(r, req)
	if err != nil {
		return err
	}
	ans, err := request.Data.ManagerFindNickName(req)
	if err != nil {
		return err
	}
	err = request.marshalWithHttp(r, ans)
	if err != nil {
		return err
	}
	return nil
}



