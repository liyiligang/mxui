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
	 "github.com/liyiligang/mxui/check"
	 "github.com/liyiligang/mxui/convert"
	 "github.com/liyiligang/mxui/protoFiles/protoManage"
	 "github.com/liyiligang/mxui/typedef/constant"
	 "github.com/liyiligang/mxui/typedef/orm"
 )

func (data *Data) NodeNotifyAdd(protoNodeNotify *protoManage.NodeNotify, isSend bool) error {
	 if err := check.NodeNotifyCheck(protoNodeNotify); err != nil {
		 return err
	 }
	 if protoNodeNotify.SenderType == protoManage.NotifySenderType_NotifySenderTypeNode {
		node := protoManage.Node{Base: protoManage.Base{ID: protoNodeNotify.SenderID}}
		err := data.NodeFindByID(&node)
		if err != nil {
			return err
		}
		protoNodeNotify.SenderName = node.Name
	 }else if protoNodeNotify.SenderType == protoManage.NotifySenderType_NotifySenderTypeUser{
		manager := protoManage.Manager{}
		err := data.ManagerFindByID(protoNodeNotify.SenderID, &manager)
		if err != nil {
			return err
		}
		protoNodeNotify.SenderName = manager.NickName
	 }
	 if err := data.DB.AddNodeNotify(orm.NodeNotify{
		SenderID: protoNodeNotify.SenderID,
		SenderName: protoNodeNotify.SenderName,
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

func (data *Data) NodeNotifyFind(req *protoManage.ReqNodeNotifyList) (*protoManage.AnsNodeNotifyList, error) {
	ormNotifyList, err := data.DB.FindNodeNotify(req)
	if err != nil {
		return nil, err
	}
	protoNodeNotifyList := convert.OrmNodeNotifyListToProtoNodeNotifyList(ormNotifyList)
	count, err := data.DB.FindNodeNotifyCount(req)
	if err != nil {
		return nil, err
	}
	return &protoManage.AnsNodeNotifyList{
		Length: count,
		NodeNotifyList: protoNodeNotifyList,
	}, nil
}


