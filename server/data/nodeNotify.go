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
	 "github.com/liyiligang/mxrpc/check"
	 "github.com/liyiligang/mxrpc/convert"
	 "github.com/liyiligang/mxrpc/protoFiles/protoManage"
	 "github.com/liyiligang/mxrpc/typedef/constant"
	 "github.com/liyiligang/mxrpc/typedef/orm"
 )

 //新增节点通知
func (data *Data) NodeNotifyAdd(protoNodeNotify *protoManage.NodeNotify, isSend bool) error {
	 if err := check.NodeNotifyCheck(protoNodeNotify); err != nil {
		 return err
	 }
	 if err := data.DB.AddNodeNotify(orm.NodeNotify{
		SenderID: protoNodeNotify.SenderID,
		SenderType: int64(protoNodeNotify.SenderType),
		Message: protoNodeNotify.Message,
		State: int32(protoNodeNotify.State),
	 }); err != nil {
		 return err
	 }
	 if isSend {
		 return data.Gateway.WsSendOrBroadCastPB(constant.ConstSendBroadcast, protoManage.Order_NodeNotifyAdd, protoNodeNotify)
	 }
	 return nil
}

//节点通知查询
func (data *Data) NodeNotifyFind(req *protoManage.ReqNodeNotifyList) (*protoManage.AnsNodeNotifyList, error) {
	ormNotifyList, err := data.DB.FindNodeNotify(req)
	if err != nil {
		return nil, err
	}
	protoNodeNotifyList := convert.OrmNodeNotifyListToProtoNodeNotifyList(ormNotifyList)
	ormNodeList, err := data.DB.FindNodeByNodeNotify(req)
	if err != nil {
		return nil, err
	}
	protoNodeList := convert.OrmNodeListToProtoNodeList(ormNodeList)
	count, err := data.DB.FindNodeNotifyCount(req)
	if err != nil {
		return nil, err
	}
	return &protoManage.AnsNodeNotifyList{
		Length: count,
		NodeNotifyList: protoNodeNotifyList,
		NodeList: protoNodeList,
	}, nil
}


