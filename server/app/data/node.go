package data

import (
	"github.com/liyiligang/klee/app/check"
	"github.com/liyiligang/klee/app/convert"
	"github.com/liyiligang/klee/app/protoFiles/protoManage"
	"github.com/liyiligang/klee/app/typedef/orm"
	"github.com/pkg/errors"
	"gorm.io/gorm"
)

//新增节点
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

func (data *Data) NodeIsOnline(nodeID int64) error {
	protoNode := &protoManage.Node{
		Base: protoManage.Base{ID: nodeID},
	}
	err := data.NodeFindByID(protoNode)
	if err != nil {
		return err
	}
	if protoNode.State != protoManage.State_StateUnknow {
		return errors.New("节点未处于离线状态")
	}
	return nil
}

//删除节点
func (data *Data) NodeDel(protoNode *protoManage.Node) error {
	//删除节点其他相关信息
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

//更新节点状态
func (data *Data) NodeStateUpdate(protoNode *protoManage.Node) error {
	return data.DB.UpdateNodeState(orm.Node{Base: orm.Base{ID: protoNode.Base.ID}, State: int32(protoNode.State)})
}

//查找节点信息
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

//按ID查询节点
func (data *Data) NodeFindByID(protoNode *protoManage.Node) error {
	ormNode, err :=data.DB.FindNodeByID(orm.Node{Base: orm.Base{ID: protoNode.Base.ID}})
	if err != nil {
		return err
	}
	convert.OrmNodeToProtoNode(ormNode, protoNode)
	return nil
}

//按节点名查询节点
func (data *Data) NodeFindByName(protoNode *protoManage.Node) error {
	ormNode, err :=data.DB.FindNodeByName(orm.Node{Name: protoNode.Name})
	if err != nil {
		return err
	}
	convert.OrmNodeToProtoNode(ormNode, protoNode)
	return nil
}

//按节点名查找或者新增节点
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
