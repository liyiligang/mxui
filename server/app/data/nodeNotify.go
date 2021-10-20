 package data

 import (
	 "github.com/liyiligang/base/commonConst"
	 "github.com/liyiligang/klee/app/check"
	 "github.com/liyiligang/klee/app/convert"
	 "github.com/liyiligang/klee/app/protoFiles/protoManage"
	 "github.com/liyiligang/klee/app/typedef/orm"
 )

 //新增节点通知
 func (data *Data) NodeNotifyAdd(protoNodeNotify *protoManage.NodeNotify, isSend bool) error {
	 if err := check.NodeNotifyCheck(protoNodeNotify); err != nil {
		 return err
	 }
	 if err := data.DB.AddNodeNotify(orm.NodeNotify{
	 	SenderID: protoNodeNotify.SenderID,
	 	SenderType: int64(protoNodeNotify.SenderType),
	 	Message: protoNodeNotify.Message,
	 	State: int32(protoNodeNotify.State),
	 }); err != nil {
		 return err
	 }
	 if isSend {
		 return data.Gateway.WsSendOrBroadCastPB(commonConst.ConstBroadcast, protoManage.Order_NodeNotifyAdd, protoNodeNotify)
	 }
	 return nil
 }


//节点通知查询
func (data *Data) NodeNotifyFind(req *protoManage.ReqNodeNotifyList) (*protoManage.AnsNodeNotifyList, error) {
	ormNotifyList, err := data.DB.FindNodeNotify(req.Filter)
	if err != nil {
		return nil, err
	}
	protoNodeNotifyList := convert.OrmNodeNotifyListToProtoNodeNotifyList(ormNotifyList)
	ormNodeList, err := data.DB.FindNodeByNodeNotify(req.Filter)
	if err != nil {
		return nil, err
	}
	protoNodeList := convert.OrmNodeListToProtoNodeList(ormNodeList)
	count, err := data.DB.FindNodeNotifyCount(req.Filter)
	if err != nil {
		return nil, err
	}
	return &protoManage.AnsNodeNotifyList{
		Length: count,
		NodeNotifyList: protoNodeNotifyList,
		NodeList: protoNodeList,
	}, nil
}


