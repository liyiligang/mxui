package data

import (
	"github.com/liyiligang/base/protoFiles/protoManage"
	"github.com/liyiligang/manage/app/check"
	"github.com/liyiligang/manage/app/convert"
	"github.com/liyiligang/manage/app/typedef/orm"
)

//查找顶部链接信息
func (data *Data) TopLinkFind(req protoManage.ReqTopLinkList) (*protoManage.AnsTopLinkList, error) {
	ormTopLink, err := data.DB.FindTopLink()
	if err != nil {
		return nil, err
	}
	protoTopLink := convert.OrmTopLinkListToProtoTopLinkList(ormTopLink)
	return &protoManage.AnsTopLinkList{TopLinkList: protoTopLink}, nil
}

//按ID查询顶部链接信息
func (data *Data) TopLinkFindByID(protoTopLink *protoManage.TopLink) error {
	ormTopLink, err :=data.DB.FindTopLinkByID(orm.TopLink{Base: orm.Base{ID: protoTopLink.Base.ID}})
	if err != nil {
		return err
	}
	convert.OrmTopLinkToProtoTopLink(ormTopLink, protoTopLink)
	return nil
}

//新增顶部链接信息
func (data *Data) TopLinkAdd(protoTopLink *protoManage.TopLink) error {
	if err := check.TopLinkCheck(protoTopLink); err != nil {
		return err
	}
	ormTopLink := orm.TopLink{Name: protoTopLink.Name,
		Url:protoTopLink.Url, State: int32(protoTopLink.State)}
	err := data.DB.AddTopLink(&ormTopLink)
	if err != nil {
		return err
	}
	convert.OrmTopLinkToProtoTopLink(&ormTopLink, protoTopLink)
	return nil
}

//删除顶部链接信息
func (data *Data) TopLinkDel(protoTopLink *protoManage.TopLink) error {
	ormTopLink := orm.TopLink{Base: orm.Base{ID: protoTopLink.Base.ID}}
	err := data.DB.DelTopLink(&ormTopLink)
	if err != nil {
		return err
	}
	convert.OrmTopLinkToProtoTopLink(&ormTopLink, protoTopLink)
	return nil
}

//更新顶部链接信息
func (data *Data) TopLinkUpdate(protoTopLink *protoManage.TopLink) error {
	if err := check.TopLinkCheck(protoTopLink); err != nil {
		return err
	}
	ormTopLink := orm.TopLink{Base: orm.Base{ID: protoTopLink.Base.ID},
		Name: protoTopLink.Name, Url: protoTopLink.Url, State: int32(protoTopLink.State)}
	err := data.DB.UpdateTopLink(&ormTopLink)
	if err != nil {
		return err
	}
	convert.OrmTopLinkToProtoTopLink(&ormTopLink, protoTopLink)
	return nil
}