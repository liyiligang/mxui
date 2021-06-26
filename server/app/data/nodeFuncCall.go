// Copyright 2021 The Authors. All rights reserved.
// Author: liyiligang
// Date: 2021/06/25 14:27
// Description:

package data

import (
	"errors"
	"github.com/liyiligang/manage/app/convert"
	"github.com/liyiligang/manage/app/protoFiles/protoManage"
	"github.com/liyiligang/manage/app/typedef/orm"
)

//节点方法调用请求
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
		return errors.New("请求失败: 节点 " + protoNode.Name +" 处于离线状态")
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
	return data.DB.UpdateNodeFuncCallByID(orm.NodeFuncCall{
		Base:      orm.Base{ID: ans.NodeFuncCall.Base.ID},
		ReturnVal: ans.NodeFuncCall.ReturnVal,
		State:     int32(ans.NodeFuncCall.State),
	})
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

//查找节点方法调用信息
func (data *Data) NodeFuncCallFind(req protoManage.ReqNodeFuncCallList) (*protoManage.AnsNodeFuncCallList, error) {
	ormFuncCallList, err := data.DB.FindNodeFuncCall(req.Filter)
	if err != nil {
		return nil, err
	}
	protoNodeFuncCallList := convert.OrmNodeFuncCallListToProtoNodeFuncCallList(ormFuncCallList)
	return &protoManage.AnsNodeFuncCallList{NodeFuncCallList: protoNodeFuncCallList}, nil
}
