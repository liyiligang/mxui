package data

import (
	"github.com/liyiligang/klee/app/check"
	"github.com/liyiligang/klee/app/convert"
	"github.com/liyiligang/klee/app/protoFiles/protoManage"
	"github.com/liyiligang/klee/app/typedef/orm"
	"github.com/pkg/errors"
	"gorm.io/gorm"
)

//新增节点方法
func (data *Data) NodeFuncAdd(protoNodeFunc *protoManage.NodeFunc) error {
	if err := check.NodeFuncCheck(protoNodeFunc); err != nil {
		return err
	}
	ormNodeFunc := &orm.NodeFunc{NodeID: protoNodeFunc.NodeID, Name: protoNodeFunc.Name,
		Func: protoNodeFunc.Func, State: int32(protoNodeFunc.State)}
	if err := data.DB.AddNodeFunc(ormNodeFunc); err != nil {
		return err
	}
	convert.OrmBaseToProtoBase(&ormNodeFunc.Base, &protoNodeFunc.Base)
	return nil
}

//删除节点方法
func (data *Data) NodeFuncDel(protoNodeFunc *protoManage.NodeFunc) error {
	err := data.NodeFuncCallDelByNodeFuncID(protoNodeFunc.Base.ID)
	if err != nil {
		return err
	}
	return data.DB.DelNodeFunc(orm.NodeFunc{Base: orm.Base{ID: protoNodeFunc.Base.ID}})
}

//按节点ID删除所有节点方法
func (data *Data) NodeFuncDelAllByNodeID(protoNodeFunc *protoManage.NodeFunc) error {
	err := data.NodeFuncCallDelByNodeID(protoNodeFunc.NodeID)
	if err != nil {
		return err
	}
	return data.DB.DelAllNodeFuncByNodeID(orm.NodeFunc{NodeID: protoNodeFunc.NodeID})
}

//按节点ID更新节点方法状态
func (data *Data) NodeFuncStateUpdateByNodeID(protoNodeFunc *protoManage.NodeFunc) error {
	return data.DB.UpdateNodeFuncStateByNodeID(orm.NodeFunc{NodeID: protoNodeFunc.NodeID, State: int32(protoNodeFunc.State)})
}

//更新节点方法信息
func (data *Data) NodeFuncInfoUpdate(protoNodeFunc *protoManage.NodeFunc) error {
	return data.DB.UpdateNodeFuncInfo(orm.NodeFunc{Base: orm.Base{ID: protoNodeFunc.Base.ID},
		Func: protoNodeFunc.Func, State: int32(protoNodeFunc.State)})
}

//更新或者新增节点方法
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
func (data *Data) NodeFuncFindIDByIndex(protoNodeFunc *protoManage.NodeFunc) error {
	ormNodeFunc, err :=data.DB.FindNodeFuncByIndex(orm.NodeFunc{NodeID: protoNodeFunc.NodeID,
		Name: protoNodeFunc.Name})
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

