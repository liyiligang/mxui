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
	"github.com/liyiligang/mxui/convert"
	"github.com/liyiligang/mxui/protoFiles/protoManage"
	"github.com/liyiligang/mxui/typedef/orm"
	"github.com/pkg/errors"
	"github.com/xeipuuv/gojsonschema"
	"math/big"
)


type DateTimeFormatChecker struct {}
func (f DateTimeFormatChecker) IsFormat(input interface{}) bool {
	switch input.(type) {
		case string:
			return true
		case *big.Rat:
			return true
	default:
		return false
	}
}
func init() {
	gojsonschema.FormatCheckers.Add("date", DateTimeFormatChecker{})
	gojsonschema.FormatCheckers.Add("date-time", DateTimeFormatChecker{})
}

func (data *Data) NodeFuncCallReq(req *protoManage.ReqNodeFuncCall) error {
	protoNodeFunc := protoManage.NodeFunc{Base: protoManage.Base{ID: req.NodeFuncCall.FuncID}}
	err := data.NodeFuncFindByID(&protoNodeFunc)
	if err != nil {
		return err
	}
	protoNode := protoManage.Node{Base: protoManage.Base{ID: protoNodeFunc.NodeID}}
	err = data.NodeFindByID(&protoNode)
	if err != nil {
		return err
	}
	if protoNode.State == protoManage.State_StateUnknow {
		return errors.New("node " + protoNode.Name +" is offline")
	}
	if protoNodeFunc.State == protoManage.State_StateNot {
		return errors.New( "node method state is invalid")
	}
	if protoNodeFunc.Schema != ""{
		err = data.jsonSchemaValid(protoNodeFunc.Schema, req.NodeFuncCall.Parameter)
		if err != nil {
			return err
		}
	}
	ormNodeFuncCall := &orm.NodeFuncCall{
		RequesterID: req.NodeFuncCall.RequesterID,
		RequesterName: req.NodeFuncCall.RequesterName,
		FuncID: req.NodeFuncCall.FuncID,
		Parameter: req.NodeFuncCall.Parameter,
		State: int32(protoManage.State_StateUnknow),
	}
	err = data.DB.AddNodeFuncCall(ormNodeFuncCall)
	if err != nil {
		return err
	}
	convert.OrmBaseToProtoBase(&ormNodeFuncCall.Base, &req.NodeFuncCall.Base)
	return data.Gateway.RpcSendOrBroadCastPB(protoNode.Base.ID, protoManage.Order_NodeFuncCallReq, req)
}

func (data *Data) NodeFuncCallAns(ans *protoManage.AnsNodeFuncCall) error {
	err := data.DB.UpdateNodeFuncCallByID(orm.NodeFuncCall{
		Base:      orm.Base{ID: ans.NodeFuncCall.Base.ID},
		ReturnType: int32(ans.NodeFuncCall.ReturnType),
		ReturnVal: ans.NodeFuncCall.ReturnVal,
		State:     int32(ans.NodeFuncCall.State),
	})
	if err != nil {
		return err
	}
	return data.Gateway.WsSendOrBroadCastPB(ans.NodeFuncCall.RequesterID, protoManage.Order_NodeFuncCallAns, ans)
}

func (data *Data) NodeFuncCallFind(req *protoManage.ReqNodeFuncCallList) (*protoManage.AnsNodeFuncCallList, error) {
	ormFuncCallList, err := data.DB.FindNodeFuncCall(req)
	if err != nil {
		return nil, err
	}
	protoNodeFuncCallList := convert.OrmNodeFuncCallListToProtoNodeFuncCallList(ormFuncCallList)
	return &protoManage.AnsNodeFuncCallList{NodeFuncCallList: protoNodeFuncCallList}, nil
}

func (data *Data) NodeFuncCallFindByID(protoNodeFuncCall *protoManage.NodeFuncCall) error {
	ormNodeFuncCall, err :=data.DB.FindNodeFuncCallByID(orm.NodeFuncCall{Base: orm.Base{ID: protoNodeFuncCall.Base.ID}})
	if err != nil {
		return err
	}
	convert.OrmNodeFuncCallToProtoNodeFuncCall(ormNodeFuncCall, protoNodeFuncCall)
	return nil
}

func (data *Data) NodeFuncCallParameterFindByID(protoNodeFuncCall *protoManage.NodeFuncCall) error {
	ormNodeFuncCall, err :=data.DB.FindNodeFuncCallParameterByID(orm.NodeFuncCall{Base: orm.Base{ID: protoNodeFuncCall.Base.ID}})
	if err != nil {
		return err
	}
	convert.OrmNodeFuncCallToProtoNodeFuncCall(ormNodeFuncCall, protoNodeFuncCall)
	return nil
}

func (data *Data) NodeFuncCallReturnValFindByID(protoNodeFuncCall *protoManage.NodeFuncCall) error {
	ormNodeFuncCall, err :=data.DB.FindNodeFuncCallReturnValByID(orm.NodeFuncCall{Base: orm.Base{ID: protoNodeFuncCall.Base.ID}})
	if err != nil {
		return err
	}
	convert.OrmNodeFuncCallToProtoNodeFuncCall(ormNodeFuncCall, protoNodeFuncCall)
	return nil
}

func (data *Data) NodeFuncCallDelByNodeFuncID(funcID int64) error {
	return data.DB.DelNodeFuncCallByNodeFuncID(orm.NodeFuncCall{
		FuncID: funcID,
	})
}

func (data *Data) NodeFuncCallDelByNodeID(nodeID int64) error {
	return data.DB.DelNodeFuncCallByNodeID(nodeID)
}

func (data *Data) jsonSchemaValid(schema string, json string) error {
	schemaLoader := gojsonschema.NewStringLoader(schema)
	documentLoader := gojsonschema.NewStringLoader(json)
	result, err := gojsonschema.Validate(schemaLoader, documentLoader)
	if err != nil {
		return err
	}
	if !result.Valid() {
		str := ""
		for _, desc := range result.Errors() {
			str = str + desc.String() + "\n"
		}
		err = errors.New(str)
	}
	return err
}


