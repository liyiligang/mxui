// Copyright 2021 The Authors. All rights reserved.
// Author: liyiligang
// Date: 2021/06/25 14:27
// Description:

package data

import (
	"github.com/liyiligang/klee/app/convert"
	"github.com/liyiligang/klee/app/protoFiles/protoManage"
	"github.com/liyiligang/klee/app/typedef/orm"
	"github.com/pkg/errors"
	"github.com/xeipuuv/gojsonschema"
)

//节点方法调用请求
func (data *Data) NodeFuncCallReq(req *protoManage.ReqNodeFuncCall) error {
	protoNodeFunc := protoManage.NodeFunc{Base: protoManage.Base{ID: req.NodeFuncCall.FuncID}}
	err := data.NodeFuncFindByID(&protoNodeFunc)
	if err != nil {
		return err
	}
	if protoNodeFunc.State == protoManage.State_StateNot {
		return errors.New(protoNodeFunc.Name +" 已失效")
	}
	protoNode := protoManage.Node{Base: protoManage.Base{ID: protoNodeFunc.NodeID}}
	err = data.NodeFindByID(&protoNode)
	if err != nil {
		return err
	}
	if protoNode.State == protoManage.State_StateUnknow {
		return errors.New(protoNode.Name +" 处于离线状态")
	}
	if protoNodeFunc.Schema != ""{
		err = data.jsonSchemaValid(protoNodeFunc.Schema, req.NodeFuncCall.Parameter)
		if err != nil {
			return err
		}
	}
	ormNodeFuncCall := &orm.NodeFuncCall{
		ManagerID: req.NodeFuncCall.ManagerID,
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

//节点方法调用回复
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
	return data.Gateway.WsSendOrBroadCastPB(ans.NodeFuncCall.ManagerID, protoManage.Order_NodeFuncCallAns, ans)
}

//查找节点方法调用信息
func (data *Data) NodeFuncCallFind(req *protoManage.ReqNodeFuncCallList) (*protoManage.AnsNodeFuncCallList, error) {
	ormFuncCallList, err := data.DB.FindNodeFuncCall(req)
	if err != nil {
		return nil, err
	}
	protoNodeFuncCallList := convert.OrmNodeFuncCallListToProtoNodeFuncCallList(ormFuncCallList)
	return &protoManage.AnsNodeFuncCallList{NodeFuncCallList: protoNodeFuncCallList}, nil
}

//按ID查询节点方法调用
func (data *Data) NodeFuncCallFindByID(protoNodeFuncCall *protoManage.NodeFuncCall) error {
	ormNodeFuncCall, err :=data.DB.FindNodeFuncCallByID(orm.NodeFuncCall{Base: orm.Base{ID: protoNodeFuncCall.Base.ID}})
	if err != nil {
		return err
	}
	convert.OrmNodeFuncCallToProtoNodeFuncCall(ormNodeFuncCall, protoNodeFuncCall)
	return nil
}

//按ID查询节点方法调用参数
func (data *Data) NodeFuncCallParameterFindByID(protoNodeFuncCall *protoManage.NodeFuncCall) error {
	ormNodeFuncCall, err :=data.DB.FindNodeFuncCallParameterByID(orm.NodeFuncCall{Base: orm.Base{ID: protoNodeFuncCall.Base.ID}})
	if err != nil {
		return err
	}
	convert.OrmNodeFuncCallToProtoNodeFuncCall(ormNodeFuncCall, protoNodeFuncCall)
	return nil
}

//按ID查询节点方法调用返回值
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


