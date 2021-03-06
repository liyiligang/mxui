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

func (data *Data) NodeFuncAdd(protoNodeFunc *protoManage.NodeFunc) error {
	if err := check.NodeFuncCheck(protoNodeFunc); err != nil {
		return err
	}
	ormNodeFunc := &orm.NodeFunc{NodeID: protoNodeFunc.NodeID, Name: protoNodeFunc.Name,
		Func: protoNodeFunc.Func, Schema: protoNodeFunc.Schema, Level: int32(protoNodeFunc.Level),
		State: int32(protoManage.State_StateNormal)}
	if err := data.DB.AddNodeFunc(ormNodeFunc); err != nil {
		return err
	}
	convert.OrmBaseToProtoBase(&ormNodeFunc.Base, &protoNodeFunc.Base)
	return nil
}

func (data *Data) NodeFuncDel(protoNodeFunc *protoManage.NodeFunc) error {
	err := data.NodeFuncCallDelByNodeFuncID(protoNodeFunc.Base.ID)
	if err != nil {
		return err
	}
	return data.DB.DelNodeFunc(orm.NodeFunc{Base: orm.Base{ID: protoNodeFunc.Base.ID}})
}

func (data *Data) NodeFuncDelAllByNodeID(protoNodeFunc *protoManage.NodeFunc) error {
	err := data.NodeFuncCallDelByNodeID(protoNodeFunc.NodeID)
	if err != nil {
		return err
	}
	return data.DB.DelAllNodeFuncByNodeID(orm.NodeFunc{NodeID: protoNodeFunc.NodeID})
}

func (data *Data) NodeFuncStateUpdateByNodeID(protoNodeFunc *protoManage.NodeFunc) error {
	return data.DB.UpdateNodeFuncStateByNodeID(orm.NodeFunc{NodeID: protoNodeFunc.NodeID,
		State: int32(protoNodeFunc.State)})
}

func (data *Data) NodeFuncInfoUpdate(protoNodeFunc *protoManage.NodeFunc) error {
	return data.DB.UpdateNodeFuncInfo(orm.NodeFunc{Base: orm.Base{ID: protoNodeFunc.Base.ID},
		Func: protoNodeFunc.Func, Schema: protoNodeFunc.Schema, Level: int32(protoNodeFunc.Level),
		State: int32(protoManage.State_StateNormal)})
}

func (data *Data) NodeFuncUpdateOrAdd(protoNodeFunc *protoManage.NodeFunc) error {
	err := data.NodeFuncFindIDByIndex(protoNodeFunc)
	if err != nil {
		if errors.Is(err, gorm.ErrRecordNotFound) {
			return data.NodeFuncAdd(protoNodeFunc)
		}
		return err
	}
	return data.NodeFuncInfoUpdate(protoNodeFunc)
}

func (data *Data) NodeFuncFindByID(protoNodeFunc *protoManage.NodeFunc) error {
	ormNodeFunc, err :=data.DB.FindNodeFuncByID(orm.NodeFunc{Base: orm.Base{ID: protoNodeFunc.Base.ID}})
	if err != nil {
		return err
	}
	convert.OrmNodeFuncToProtoNodeFunc(ormNodeFunc, protoNodeFunc)
	return nil
}

func (data *Data) NodeFuncFindIDByIndex(protoNodeFunc *protoManage.NodeFunc) error {
	ormNodeFunc, err :=data.DB.FindNodeFuncByIndex(orm.NodeFunc{NodeID: protoNodeFunc.NodeID,
		Name: protoNodeFunc.Name})
	if err != nil {
		return err
	}
	convert.OrmBaseToProtoBase(&ormNodeFunc.Base, &protoNodeFunc.Base)
	return nil
}

func (data *Data) NodeFuncFind(req *protoManage.ReqNodeFuncList) (*protoManage.AnsNodeFuncList, error) {
	ormFuncList, err := data.DB.FindNodeFunc(req)
	if err != nil {
		return nil, err
	}
	protoNodeFuncList := convert.OrmNodeFuncListToProtoNodeFuncList(ormFuncList)
	ormNodeList, err := data.DB.FindNodeByNodeFunc(req)
	if err != nil {
		return nil, err
	}
	protoNodeList := convert.OrmNodeListToProtoNodeList(ormNodeList)
	count, err := data.DB.FindNodeFuncCount(req)
	if err != nil {
		return nil, err
	}
	return &protoManage.AnsNodeFuncList{NodeFuncList: protoNodeFuncList,
		NodeList: protoNodeList, Length:count}, nil
}

func (data *Data) NodeFuncLevelCheck(userLevel protoManage.Level, funcID int64) error {
	protoNodeFunc := &protoManage.NodeFunc{Base: protoManage.Base{ID: funcID}}
	err := data.NodeFuncFindByID(protoNodeFunc)
	if err != nil {
		return err
	}
	if protoNodeFunc.Level >  userLevel {
		return errors.New("permission denied")
	}
	return nil
}