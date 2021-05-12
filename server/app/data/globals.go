package data

import (
	"github.com/liyiligang/base/protoFiles/protoManage"
	"github.com/liyiligang/manage/app/convert"
	"github.com/liyiligang/manage/app/db"
)

type Data struct {
	DB              *db.DB
}

//查找顶部链接信息
func (data *Data) TopLinkFind(req protoManage.ReqTopLinkList) (*protoManage.AnsTopLinkList, error) {
	ormTopLink, err := data.DB.FindTopLink()
	if err != nil {
		return nil, err
	}
	protoTopLink := convert.OrmTopLinkListToProtoTopLinkList(ormTopLink)
	return &protoManage.AnsTopLinkList{TopLinkList: protoTopLink}, nil
}