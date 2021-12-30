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

package data

import (
	"github.com/liyiligang/mxrpc/protoFiles/protoManage"
	"github.com/liyiligang/mxrpc/typedef/orm"
)

//请求节点测试
func (data *Data) NodeTest(userID int64, protoNodeTest *protoManage.ReqNodeTest) error {
	protoNodeNotify := protoManage.NodeNotify{
		SenderID:   userID,
		SenderType: protoManage.NotifySenderType(protoNodeTest.Type),
		Message:    protoNodeTest.Message,
		State:      protoNodeTest.State,
	}
	err := data.DB.AddNodeNotify(orm.NodeNotify{
		SenderID: protoNodeNotify.SenderID,
		SenderType: int64(protoNodeNotify.SenderType),
		Message: protoNodeNotify.Message,
		State: int32(protoNodeNotify.State),
	})
	if err != nil {
		return err
	}
	return data.Gateway.WsSendOrBroadCastPB(userID, protoManage.Order_NodeNotifyAdd, &protoNodeNotify)
}

