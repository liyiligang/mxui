package data

import (
	"github.com/liyiligang/base/protoFiles/protoManage"
	"github.com/liyiligang/manage/app/check"
	"github.com/liyiligang/manage/app/convert"
	"github.com/liyiligang/manage/app/typedef/orm"
	"github.com/pkg/errors"
	"gorm.io/gorm"
)

//新增节点方法
func (data *Data) NodeFuncAdd(protoNodeFunc *protoManage.NodeFunc) error {
	if err := check.NodeFuncCheck(protoNodeFunc); err != nil {
		return err
	}
	return data.DB.AddNodeFunc(orm.NodeFunc{
		NodeID: protoNodeFunc.NodeID,
		Name: protoNodeFunc.Name,
		Func: protoNodeFunc.Func,
	})
}

//删除节点方法
func (data *Data) NodeFuncDel(protoNodeFunc *protoManage.NodeFunc) error {
	return data.DB.DelNodeFunc(orm.NodeFunc{Base: orm.Base{ID: protoNodeFunc.Base.ID}})
}

//按节点ID删除所有节点方法
func (data *Data) NodeFuncDelAllByNodeID(protoNodeFunc *protoManage.NodeFunc) error {
	return data.DB.DelAllNodeFuncByNodeID(orm.NodeFunc{NodeID: protoNodeFunc.NodeID})
}

//更新节点方法描述
func (data *Data) NodeFuncDescUpdate(protoNodeFunc *protoManage.NodeFunc) error {
	return data.DB.UpdateNodeFuncNameByID(orm.NodeFunc{
		Base: orm.Base{ID: protoNodeFunc.Base.ID},
		Name: protoNodeFunc.Name,
	})
}

//按节点方法名更新节点方法描述或者新增节点方法
func (data *Data) NodeFuncDescUpdateOrAddByName(protoNodeFunc *protoManage.NodeFunc) error {
	err := data.NodeFuncFindIDByName(protoNodeFunc)
	if err != nil {
		if errors.Is(err, gorm.ErrRecordNotFound) {
			return data.NodeFuncAdd(protoNodeFunc)
		}
		return err
	}
	return data.NodeFuncDescUpdate(protoNodeFunc)
}

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
	ormBase, err := data.DB.AddNodeFuncCall(orm.NodeFuncCall{
		ManagerID: req.NodeFuncCall.ManagerID,
		FuncID: req.NodeFuncCall.FuncID,
		Parameter: req.NodeFuncCall.Parameter,
		State: int32(protoManage.State_StateUnknow),
	})
	if err != nil {
		return err
	}
	convert.OrmBaseToProtoBase(ormBase, &req.NodeFuncCall.Base)
	return nil
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

//按ID查询节点方法
func (data *Data) NodeFuncFindByID(protoNodeFunc *protoManage.NodeFunc) error {
	ormNodeFunc, err :=data.DB.FindNodeFuncByID(orm.NodeFunc{Base: orm.Base{ID: protoNodeFunc.Base.ID}})
	if err != nil {
		return err
	}
	convert.OrmNodeFuncToProtoNodeFunc(ormNodeFunc, protoNodeFunc)
	return nil
}

//按名称查询节点方法
func (data *Data) NodeFuncFindIDByName(protoNodeFunc *protoManage.NodeFunc) error {
	ormNodeFunc, err :=data.DB.FindNodeFuncByName(orm.NodeFunc{Name: protoNodeFunc.Name, NodeID: protoNodeFunc.NodeID})
	if err != nil {
		return err
	}
	convert.OrmBaseToProtoBase(&ormNodeFunc.Base, &protoNodeFunc.Base)
	return nil
}

//查找节点方法信息
func (data *Data) NodeFuncFind(req protoManage.ReqNodeFuncList) (*protoManage.AnsNodeFuncList, error) {
	ormFuncList, err := data.DB.FindNodeFunc(req.Filter)
	if err != nil {
		return nil, err
	}
	protoNodeFuncList := convert.OrmNodeFuncListToProtoNodeFuncList(ormFuncList)
	ormNodeList, err := data.DB.FindNodeByNodeFunc(req.Filter)
	if err != nil {
		return nil, err
	}
	protoNodeList := convert.OrmNodeListToProtoNodeList(ormNodeList)
	ormNodeFuncCall, err := data.DB.FindLastNodeFuncCallByNodeFunc(req.Filter)
	if err != nil {
		return nil, err
	}
	protoNodeFuncCall := convert.OrmNodeFuncCallListToProtoNodeFuncCallList(ormNodeFuncCall)
	count, err := data.DB.FindNodeFuncCount(req.Filter)
	if err != nil {
		return nil, err
	}
	return &protoManage.AnsNodeFuncList{NodeFuncList: protoNodeFuncList, NodeList: protoNodeList,
		NodeFuncCallList: protoNodeFuncCall,Length:count}, nil
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
