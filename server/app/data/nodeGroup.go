package data

import (
	"github.com/liyiligang/klee/app/check"
	"github.com/liyiligang/klee/app/convert"
	"github.com/liyiligang/klee/app/protoFiles/protoManage"
	"github.com/liyiligang/klee/app/typedef/orm"
	"github.com/pkg/errors"
	"gorm.io/gorm"
)

//新增节点组
func (data *Data) NodeGroupAdd(protoNodeGroup *protoManage.NodeGroup) error {
	if err := check.NodeGroupCheck(protoNodeGroup); err != nil {
		return err
	}
	ormNodeGroup := &orm.NodeGroup{Name: protoNodeGroup.Name}
	if err := data.DB.AddNodeGroup(ormNodeGroup); err != nil {
		return err
	}
	convert.OrmBaseToProtoBase(&ormNodeGroup.Base, &protoNodeGroup.Base)
	return nil
}

//删除节点组
func (data *Data) NodeGroupDel(protoNodeGroup *protoManage.NodeGroup) error {
	return data.DB.DelNodeGroup(orm.NodeGroup{Base: orm.Base{ID: protoNodeGroup.Base.ID}})
}

//按节点组名查找节点组
func (data *Data) NodeGroupFindByName(protoNodeGroup *protoManage.NodeGroup) error {
	ormNodeGroup, err := data.DB.FindNodeGroupByName(orm.NodeGroup{Name: protoNodeGroup.Name})
	if err != nil {
		return err
	}
	convert.OrmNodeGroupToProtoNodeGroup(ormNodeGroup, protoNodeGroup)
	return nil
}

//按节点组名查找或者新增节点组
func (data *Data) NodeGroupFindOrAddByName(protoNodeGroup *protoManage.NodeGroup) error {
	err := data.NodeGroupFindByName(protoNodeGroup)
	if err != nil {
		if errors.Is(err, gorm.ErrRecordNotFound) {
			return data.NodeGroupAdd(protoNodeGroup)
		}
		return err
	}
	return nil
}

//按ID查找节点组
func (data *Data) NodeGroupFindByID(protoNodeGroup *protoManage.NodeGroup) error {
	ormNodeGroup, err := data.DB.FindNodeGroupByID(orm.NodeGroup{Base: orm.Base{ID: protoNodeGroup.Base.ID}})
	if err != nil {
		return err
	}
	convert.OrmNodeGroupToProtoNodeGroup(ormNodeGroup, protoNodeGroup)
	return nil
}

//查找节点组信息
func (data *Data) NodeGroupFind(req protoManage.ReqNodeGroupList) (*protoManage.AnsNodeGroupList, error) {
	ormGroupList, err := data.DB.FindNodeGroup(req.Filter)
	if err != nil {
		return nil, err
	}
	protoNodeGroupList := convert.OrmNodeGroupListToProtoNodeGroupList(ormGroupList)
	count, err := data.DB.FindNodeGroupCount(req.Filter)
	if err != nil {
		return nil, err
	}
	ormNodeStateCountList ,err := data.DB.FindNodeStateCount(req.Filter, "groupID")
	protoNodeStateCountList := convert.OrmStateCountListToProtoStateCountList(ormNodeStateCountList)
	if err != nil {
		return nil, err
	}
	return &protoManage.AnsNodeGroupList{
		NodeGroupList: protoNodeGroupList,
		NodeStateCountList: protoNodeStateCountList,
		Length: count,
	}, nil
}
