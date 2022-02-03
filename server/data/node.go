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
	"github.com/liyiligang/mxui/typedef/orm"
	"github.com/pkg/errors"
	"gorm.io/gorm"
)

func (data *Data) NodeAdd(protoNode *protoManage.Node) error {
	if err := check.NodeCheck(protoNode); err != nil {
		return err
	}
	ormNode := &orm.Node{Name: protoNode.Name}
	if err := data.DB.AddNode(ormNode); err != nil {
		return err
	}
	convert.OrmBaseToProtoBase(&ormNode.Base, &protoNode.Base)
	return nil
}

func (data *Data) NodeDel(protoNode *protoManage.Node) error {
	err := data.NodeFuncDelAllByNodeID(&protoManage.NodeFunc{NodeID: protoNode.Base.ID})
	if err != nil {
		return err
	}
	err = data.NodeReportDelAllByNodeID(&protoManage.NodeReport{NodeID: protoNode.Base.ID})
	if err != nil {
		return err
	}
	err = data.DB.DelNode(orm.Node{Base: orm.Base{ID: protoNode.Base.ID}})
	if err != nil {
		return err
	}
	return nil
}

func (data *Data) NodeStateUpdate(protoNode *protoManage.Node) error {
	return data.DB.UpdateNodeState(orm.Node{Base: orm.Base{ID: protoNode.Base.ID}, State: int32(protoNode.State)})
}

func (data *Data) NodeFind(req *protoManage.ReqNodeList) (*protoManage.AnsNodeList, error) {
	ormNodeList, err := data.DB.FindNode(req)
	if err != nil {
		return nil, err
	}
	protoNodeList := convert.OrmNodeListToProtoNodeList(ormNodeList)
	count, err := data.DB.FindNodeCount(req)
	if err != nil {
		return nil, err
	}
	return &protoManage.AnsNodeList{
		NodeList: protoNodeList,
		Length: count}, nil
}

func (data *Data) NodeFindByID(protoNode *protoManage.Node) error {
	ormNode, err :=data.DB.FindNodeByID(orm.Node{Base: orm.Base{ID: protoNode.Base.ID}})
	if err != nil {
		return err
	}
	convert.OrmNodeToProtoNode(ormNode, protoNode)
	return nil
}

func (data *Data) NodeFindByName(protoNode *protoManage.Node) error {
	ormNode, err :=data.DB.FindNodeByName(orm.Node{Name: protoNode.Name})
	if err != nil {
		return err
	}
	convert.OrmNodeToProtoNode(ormNode, protoNode)
	return nil
}

func (data *Data) NodeFindOrAddByName(protoNode *protoManage.Node) error {
	err := data.NodeFindByName(protoNode)
	if err != nil {
		if errors.Is(err, gorm.ErrRecordNotFound) {
			return data.NodeAdd(protoNode)
		}
		return err
	}
	return nil
}
