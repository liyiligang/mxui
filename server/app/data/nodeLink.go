package data

import (
	"github.com/liyiligang/klee/app/check"
	"github.com/liyiligang/klee/app/convert"
	"github.com/liyiligang/klee/app/protoFiles/protoManage"
	"github.com/liyiligang/klee/app/typedef/orm"
	"github.com/pkg/errors"
	"gorm.io/gorm"
)

//新增节点连接
func (data *Data) NodeLinkAdd(protoNodeLink *protoManage.NodeLink) error {
	if err := check.NodeLinkCheck(protoNodeLink); err != nil {
		return err
	}
	ormNodeLink := &orm.NodeLink{SourceID: protoNodeLink.SourceID,
		TargetID: protoNodeLink.TargetID, State: int32(protoNodeLink.State)}
	if err := data.DB.AddNodeLink(ormNodeLink); err != nil {
		return err
	}
	convert.OrmBaseToProtoBase(&ormNodeLink.Base, &protoNodeLink.Base)
	return nil
}

//删除节点连接
func (data *Data) NodeLinkDel(protoNodeLink *protoManage.NodeLink) error {
	return data.DB.DelNodeLink(orm.NodeLink{Base: orm.Base{ID: protoNodeLink.Base.ID}})
}

//按ID查询节点连接
func (data *Data) NodeLinkFindByID(protoNodeLink *protoManage.NodeLink) error {
	ormNodeLink, err :=data.DB.FindNodeLinkByID(orm.NodeLink{Base: orm.Base{ID: protoNodeLink.Base.ID}})
	if err != nil {
		return err
	}
	convert.OrmNodeLinkToProtoNodeLink(ormNodeLink, protoNodeLink)
	return nil
}

//按目标ID查询节点连接
func (data *Data) NodeLinkFindByIndex(protoNodeLink *protoManage.NodeLink) error {
	ormNodeLink, err :=data.DB.FindNodeLinkByIndex(orm.NodeLink{SourceID: protoNodeLink.SourceID, TargetID: protoNodeLink.TargetID})
	if err != nil {
		return err
	}
	convert.OrmNodeLinkToProtoNodeLink(ormNodeLink, protoNodeLink)
	return nil
}

//按目标ID查询节点连接ID
func (data *Data) NodeLinkFindIDByIndex(protoNodeLink *protoManage.NodeLink) error {
	ormNodeLink, err :=data.DB.FindNodeLinkByIndex(orm.NodeLink{SourceID: protoNodeLink.SourceID, TargetID: protoNodeLink.TargetID})
	if err != nil {
		return err
	}
	convert.OrmBaseToProtoBase(&ormNodeLink.Base, &protoNodeLink.Base)
	return nil
}

//更新或者新增节点连接
func (data *Data) NodeLinkUpdateOrAdd(protoNodeLink *protoManage.NodeLink) error {
	err := data.NodeLinkFindIDByIndex(protoNodeLink)
	if err != nil {
		if errors.Is(err, gorm.ErrRecordNotFound) {
			return data.NodeLinkAdd(protoNodeLink)
		}
		return err
	}
	return data.NodeLinkStateUpdate(protoNodeLink)
}

//查找节点连接信息
func (data *Data) NodeLinkFind(req protoManage.ReqNodeLinkList) (*protoManage.AnsNodeLinkList, error) {
	ormLinkList, err := data.DB.FindNodeLink(req.Filter)
	if err != nil {
		return nil, err
	}
	protoNodeLinkList := convert.OrmNodeLinkListToProtoNodeLinkList(ormLinkList)
	ormNodeList, err := data.DB.FindNodeByNodeLink(req.Filter)
	if err != nil {
		return nil, err
	}
	protoNodeList := convert.OrmNodeListToProtoNodeList(ormNodeList)
	count, err := data.DB.FindNodeLinkCount(req.Filter)
	if err != nil {
		return nil, err
	}
	return &protoManage.AnsNodeLinkList{NodeLinkList: protoNodeLinkList, NodeList: protoNodeList, Length:count}, nil
}

//按节点ID删除所有节点连接
func (data *Data) NodeLinkDelAllByNodeID(protoNodeLink *protoManage.NodeLink) error {
	return data.DB.DelAllNodeLinkByNodeID(orm.NodeLink{SourceID: protoNodeLink.SourceID, TargetID: protoNodeLink.TargetID})
}

//更新节点连接状态
func (data *Data) NodeLinkStateUpdate(protoNodeLink *protoManage.NodeLink) error {
	return data.DB.UpdateNodeLinkState(orm.NodeLink{Base: orm.Base{ID: protoNodeLink.Base.ID}, State: int32(protoNodeLink.State)})
}

//按节点ID更新节点连接状态
func (data *Data) NodeLinkStateUpdateByNodeID(protoNodeLink *protoManage.NodeLink) error {
	return data.DB.UpdateNodeLinkStateByNodeID(orm.NodeLink{SourceID: protoNodeLink.SourceID,
		TargetID: protoNodeLink.TargetID, State: int32(protoNodeLink.State)})
}