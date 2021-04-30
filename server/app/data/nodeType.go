package data

import (
	"github.com/liyiligang/base/protoFiles/protoManage"
	"github.com/liyiligang/manage/app/check"
	"github.com/liyiligang/manage/app/convert"
	"github.com/liyiligang/manage/app/typedef/orm"
	"github.com/pkg/errors"
	"gorm.io/gorm"
)

//新增节点类型
func (data *Data) NodeTypeAdd(protoNodeType *protoManage.NodeType) error {
	if err := check.NodeTypeCheck(protoNodeType); err != nil {
		return err
	}
	return data.DB.AddNodeType(orm.NodeType{Name: protoNodeType.Name})
}

//删除节点类型
func (data *Data) NodeTypeDel(protoNodeType *protoManage.NodeType) error {
	return data.DB.DelNodeType(orm.NodeType{Base: orm.Base{ID: protoNodeType.Base.ID}})
}

//按节点类型名查找节点类型
func (data *Data) NodeTypeFindByName(protoNodeType *protoManage.NodeType) error {
	ormNodeType, err := data.DB.FindNodeTypeByName(orm.NodeType{Name: protoNodeType.Name})
	if err != nil {
		return err
	}
	convert.OrmNodeTypeToProtoNodeType(ormNodeType, protoNodeType)
	return nil
}

//按节点类型名查找或者新增节点类型
func (data *Data) NodeTypeFindOrAddByName(protoNodeType *protoManage.NodeType) error {
	err := data.NodeTypeFindByName(protoNodeType)
	if err != nil {
		if errors.Is(err, gorm.ErrRecordNotFound) {
			return data.NodeTypeAdd(protoNodeType)
		}
		return err
	}
	return nil
}

//按ID查找节点类型
func (data *Data) NodeTypeFindByID(protoNodeType *protoManage.NodeType) error {
	ormNodeType, err := data.DB.FindNodeTypeByID(orm.NodeType{Base: orm.Base{ID: protoNodeType.Base.ID}})
	if err != nil {
		return err
	}
	convert.OrmNodeTypeToProtoNodeType(ormNodeType, protoNodeType)
	return nil
}

//查找节点类型信息
func (data *Data) NodeTypeFind(req protoManage.ReqNodeTypeList) (*protoManage.AnsNodeTypeList, error) {
	ormTypeList, err := data.DB.FindNodeType(req.Filter)
	if err != nil {
		return nil, err
	}
	protoNodeTypeList := convert.OrmNodeTypeListToProtoNodeTypeList(ormTypeList)
	count, err := data.DB.FindNodeTypeCount(req.Filter)
	if err != nil {
		return nil, err
	}
	ormNodeStateCountList ,err := data.DB.FindNodeStateCount(req.Filter, "typeID")
	if err != nil {
		return nil, err
	}
	protoNodeStateCountList := convert.OrmStateCountListToProtoStateCountList(ormNodeStateCountList)
	return &protoManage.AnsNodeTypeList{
		NodeTypeList: protoNodeTypeList,
		NodeStateCountList: protoNodeStateCountList,
		Length: count}, nil
}
