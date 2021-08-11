package gateway

import (
	"fmt"
	"github.com/gogo/protobuf/proto"
	"github.com/liyiligang/base/commonConst"
	"github.com/liyiligang/base/component/Jlog"
	"github.com/liyiligang/base/component/Jrpc"
	"github.com/liyiligang/base/component/Jtool"
	"github.com/liyiligang/klee/app/protoFiles/protoManage"
	"github.com/pkg/errors"
)

func (gateway *Gateway) RpcSendOrBroadCastPB(nodeID int64, order protoManage.Order, pb proto.Message) error {
	pbByte, err := proto.Marshal(pb)
	if err != nil {
		return errors.WithMessage(err, "protobuf编码错误")
	}
	return gateway.RpcSendOrBroadCastData(nodeID, order, &pbByte)
}

func (gateway *Gateway) RpcSendOrBroadCastData(nodeID int64, order protoManage.Order, data *[]byte) error {
	var err error
	if nodeID == commonConst.ConstBroadcast {
		err = gateway.rpcBroadCast(order, data)
	} else {
		err = gateway.rpcSend(nodeID, order, data)
	}
	return errors.WithMessage(err, "rpc错误")
}

//关闭客户端
func (gateway *Gateway) RpcCloseClient(nodeID interface{}) {
	conn, ok := gateway.RpcManage.Load(nodeID)
	if ok {
		conn.(*Jrpc.RpcStream).Close()
	} else {
		Jlog.Warn("rpcCloseClient 未发现id", "nodeID", nodeID)
	}
}

func (gateway *Gateway) RpcGetID(userID interface{}) (int64, error) {
	id, ok:= userID.(int64)
	if !ok {
		str := fmt.Sprintf("rpc id类型错误, userID: %v", userID)
		return 0, errors.New(str)
	}
	return id, nil
}


func (gateway *Gateway) rpcSend(nodeID int64, order protoManage.Order, data *[]byte) error {
	conn, ok := gateway.RpcManage.Load(nodeID)
	if !ok {
		return errors.New("找不到ID:" + Jtool.Int64ToString(nodeID))
	}
	message := &protoManage.Message{Order: order, Message: *data}
	conn.(*Jrpc.RpcStream).SendData(message)
	return nil
}

func (gateway *Gateway) rpcBroadCast(order protoManage.Order, data *[]byte) error {
	message := &protoManage.Message{Order: order, Message: *data}
	gateway.RpcManage.LoadAll(func(key, value interface{}) bool {
		value.(*Jrpc.RpcStream).SendData(message)
		return true
	})
	return nil
}

