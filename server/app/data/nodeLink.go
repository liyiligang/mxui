package data

import (
	"github.com/liyiligang/manage/app/check"
	"github.com/liyiligang/manage/app/convert"
	"github.com/liyiligang/manage/app/protoFiles/protoManage"
	"github.com/liyiligang/manage/app/typedef/orm"
	"github.com/pkg/errors"
	"gorm.io/gorm"
)

//新增节点连接
func (data *Data) NodeLinkAdd(protoNodeLink *protoManage.NodeLink) error {
	if err := check.NodeLinkCheck(protoNodeLink); err != nil {
		return err
	}
	return data.DB.AddNodeLink(orm.NodeLink{
		SourceID: protoNodeLink.SourceID,
		TargetID: protoNodeLink.TargetID,
		State: int32(protoNodeLink.State),
	})
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
func (data *Data) NodeLinkFindByNodeID(protoNodeLink *protoManage.NodeLink) error {
	ormNodeLink, err :=data.DB.FindNodeLinkByNodeID(orm.NodeLink{SourceID: protoNodeLink.SourceID, TargetID: protoNodeLink.TargetID})
	if err != nil {
		return err
	}
	convert.OrmNodeLinkToProtoNodeLink(ormNodeLink, protoNodeLink)
	return nil
}

//按目标ID查询节点连接ID
func (data *Data) NodeLinkFindIDByNodeID(protoNodeLink *protoManage.NodeLink) error {
	ormNodeLink, err :=data.DB.FindNodeLinkByNodeID(orm.NodeLink{SourceID: protoNodeLink.SourceID, TargetID: protoNodeLink.TargetID})
	if err != nil {
		return err
	}
	convert.OrmBaseToProtoBase(&ormNodeLink.Base, &protoNodeLink.Base)
	return nil
}

//按节点ID更新节点连接状态或者新增节点连接
func (data *Data) NodeLinkStateUpdateOrAddByNodeID(protoNodeLink *protoManage.NodeLink) error {
	err := data.NodeLinkFindIDByNodeID(protoNodeLink)
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
