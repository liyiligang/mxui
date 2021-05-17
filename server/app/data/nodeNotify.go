 package data

 import (
	 "github.com/liyiligang/base/protoFiles/protoManage"
	 "github.com/liyiligang/manage/app/check"
 )

//新增节点通知
func (data *Data) NodeNotifyNew(protoNodeNotify *protoManage.NodeNotify) error {
	if err := check.NodeNotifyCheck(protoNodeNotify); err != nil {
		return err
	}
	//return data.DB.AddNodeNotify(orm.NodeNotify{
	//	SenderID: protoNodeNotify.SenderID,
	//})
	return  data.Gateway.WsSendOrBroadCastPB(protoNodeNotify.SenderID, protoManage.Order_NodeNotifyNew, protoNodeNotify)
}


