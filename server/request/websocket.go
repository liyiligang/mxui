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
	"errors"
	"github.com/liyiligang/base/component/Jlog"
	"github.com/liyiligang/base/component/Jtool"
	"github.com/liyiligang/base/component/Jweb"
	"github.com/liyiligang/mxui/protoFiles/protoManage"
)

func (request *Request) WebsocketConnect(conn *Jweb.WebsocketConn) (interface{}, error) {
	return request.ReqWsTokenCheck([]byte(conn.GetParm().WsClientMsg), conn.GetParm().WsClientAddr)
}

func (request *Request) WebsocketConnected(conn *Jweb.WebsocketConn) error {
	userID, err := request.Data.Gateway.WsGetID(conn.GetBindVal())
	if err != nil {
		return err
	}
	if request.Data.Gateway.WebsocketManage.IsExist(userID) {
		return errors.New("user id "+Jtool.Int64ToString(userID)+" is existed")
	}
	err = request.Data.ManagerStateUpdate(&protoManage.Manager{Base: protoManage.Base{ID: userID},
		State: protoManage.State_StateNormal})
	if err != nil {
		return err
	}
	request.Data.Gateway.WebsocketManage.Store(userID, conn)
	Jlog.Info("user is online", "userID", userID)
	return nil
}

func (request *Request) WebsocketClosed(conn *Jweb.WebsocketConn, code int, text string) error {
	request.Data.Gateway.WebsocketManage.Delete(conn.GetBindVal())
	userID, err := request.Data.Gateway.WsGetID(conn.GetBindVal())
	if err != nil {
		return err
	}
	err = request.Data.ManagerStateUpdate(&protoManage.Manager{Base: protoManage.Base{ID: userID},
		State: protoManage.State_StateUnknow})
	if err != nil {
		return err
	}
	Jlog.Info("user is offline", "userID", userID)
	return nil
}

func (request *Request) WebsocketError(text string, err error){
	Jlog.Warn(text, "error", err)
}