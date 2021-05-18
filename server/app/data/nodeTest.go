package data

import (
	"github.com/liyiligang/base/protoFiles/protoManage"
)

//请求节点测试
func (data *Data) NodeTest(userID int64, protoNodeTest *protoManage.ReqNodeTest) error {
	protoNodeNotify := protoManage.NodeNotify{
		SenderID:             userID,
		SenderType:           protoManage.NotifySenderType(protoNodeTest.Type),
		Message:              protoNodeTest.Message,
		State:                protoNodeTest.State,
	}
	return  data.Gateway.WsSendOrBroadCastPB(userID, protoManage.Order_NodeNotifyNew, &protoNodeNotify)
}

