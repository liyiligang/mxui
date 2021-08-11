package data

import (
	"github.com/liyiligang/klee/app/protoFiles/protoManage"
	"github.com/liyiligang/klee/app/typedef/orm"
)

//请求节点测试
func (data *Data) NodeTest(userID int64, protoNodeTest *protoManage.ReqNodeTest) error {

	protoNodeNotify := protoManage.NodeNotify{
		SenderID:   userID,
		SenderType: protoManage.NotifySenderType(protoNodeTest.Type),
		Message:    protoNodeTest.Message,
		State:      protoNodeTest.State,
	}

	data.DB.AddNodeNotify(orm.NodeNotify{
		SenderID: protoNodeNotify.SenderID,
		SenderType: int64(protoNodeNotify.SenderType),
		Message: protoNodeNotify.Message,
		State: int32(protoNodeNotify.State),
	})
	return  data.Gateway.WsSendOrBroadCastPB(userID, protoManage.Order_NodeNotifyAdd, &protoNodeNotify)
}

