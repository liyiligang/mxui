 package data

 import (
	 "github.com/liyiligang/base/protoFiles/protoManage"
	 "github.com/liyiligang/manage/app/convert"
 )

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


