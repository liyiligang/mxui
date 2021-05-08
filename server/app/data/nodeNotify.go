 package data

import (
	"github.com/liyiligang/base/protoFiles/protoManage"
	"github.com/liyiligang/manage/app/check"
	"github.com/liyiligang/manage/app/typedef/orm"
)

//新增节点通知
func (data *Data) NodeNotifyAdd(protoNodeNotify *protoManage.NodeNotify) error {
	if err := check.NodeNotifyCheck(protoNodeNotify); err != nil {
		return err
	}
	return data.DB.AddNodeNotify(orm.NodeNotify{
		SenderID: protoNodeNotify.SenderID,
		MessageKey: protoNodeNotify.MessageKey,
		MessageVal: protoNodeNotify.MessageVal,
	})
}


