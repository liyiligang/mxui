package gateway

import (
	"fmt"
	"github.com/gogo/protobuf/proto"
	"github.com/liyiligang/base/commonConst"
	"github.com/liyiligang/base/component/Jlog"
	"github.com/liyiligang/base/component/Jrpc"
	"github.com/liyiligang/base/component/Jtool"
	"github.com/liyiligang/base/protoFiles/protoManage"
	"github.com/pkg/errors"
)

func (gateway *Gateway) RpcChannel(request protoManage.RpcEngine_RpcChannelServer) (err error) {
	conn, pErr := Jrpc.GrpcStreamServerInit(request, new(protoManage.Message), gateway)
	if pErr != nil {
		return pErr
	}
	return conn.GrpcStreamServerRun(request)
}

func (gateway *Gateway) RpcStreamConnect(conn *Jrpc.RpcStream) (interface{}, error) {
	id, header, err := gateway.Request.ReqNodeLogin(conn.GetParm().RpcClientMsg, conn.GetParm().RpcClientAddr)
	conn.SetRpcStreamServerHeader(header)
	if err != nil {
		return 0, err
	}
	return id, err
}

func (gateway *Gateway) RpcStreamConnected(conn *Jrpc.RpcStream) error {
	id, err := gateway.rpcGetID(conn.GetBindVal())
	if err != nil {
		return err
	}
	if gateway.RpcManage.IsExist(id) {
		return errors.New("id:"+Jtool.Int64ToString(id)+"已存在")
	}
	gateway.RpcManage.Store(id, conn)
	err = gateway.Request.ReqNodeOnline(id, conn.GetParm().RpcStreamClientMsg)
	if err != nil {
		return err
	}
	Jlog.Info("rpc已连接", "id", id)
	return nil
}

func (gateway *Gateway) RpcStreamClose(conn *Jrpc.RpcStream) {
	id, err := gateway.rpcGetID(conn.GetBindVal())
	if err != nil {
		Jlog.Warn("rpc连接关闭错误", "err", err)
		return
	}
	gateway.Request.ReqNodeOffline(id)
	gateway.RpcManage.Delete(conn.GetBindVal())
	Jlog.Info("rpc连接已关闭", "id", id)
}

func (gateway *Gateway) RpcStreamReceiver(conn *Jrpc.RpcStream, recv interface{}) {
	id, err := gateway.rpcGetID(conn.GetBindVal())
	if err != nil {
		Jlog.Warn("rpc数据接收错误", "err", err)
		return
	}
	res := *recv.(*protoManage.Message)

	switch res.Order {
	case protoManage.Order_NodeUpdateState:
		gateway.Request.ReqNodeStateUpdate(id, res.Message)
		break
	case protoManage.Order_NodeLinkUpdateState:
		gateway.Request.ReqNodeLinkStateUpdate(id, res.Message)
		break
	case protoManage.Order_NodeFuncUpdateDesc:
		gateway.Request.ReqNodeFuncDescUpdate(id, res.Message)
		break
	case protoManage.Order_NodeReportUpdateVal:
		gateway.Request.ReqNodeReportValUpdate(id, res.Message)
		break
	case protoManage.Order_NodeNotifyAdd:
		gateway.Request.ReqNodeNotifyUpdate(id, res.Message)
		break
	default:
		Jlog.Warn("rpc 指令错误", "消息", res)
	}
}

func (gateway *Gateway) RpcStreamError(text string, err error){
	Jlog.Warn(text, "err", err)
}

func (gateway *Gateway) rpcSendOrBroadCastPB(userID int64, order protoManage.Order, pb proto.Message) error {
	pbByte, err := proto.Marshal(pb)
	if err != nil {
		return errors.WithMessage(err, "protobuf编码错误")
	}
	return gateway.rpcSendOrBroadCastData(userID, order, &pbByte)
}

func (gateway *Gateway) rpcSendOrBroadCastData(nodeID int64, order protoManage.Order, data *[]byte) error {
	var err error
	if nodeID == commonConst.ConstBroadcast {
		err = gateway.rpcBroadCast(order, data)
	} else {
		err = gateway.rpcSend(nodeID, order, data)
	}
	return errors.WithMessage(err, "rpc错误")
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

//关闭客户端
func (gateway *Gateway) rpcCloseClient(nodeID interface{}) {
	conn, ok := gateway.RpcManage.Load(nodeID)
	if ok {
		conn.(*Jrpc.RpcStream).Close()
	} else {
		Jlog.Warn("rpcCloseClient 未发现id", "nodeID", nodeID)
	}
}

func (gateway *Gateway) rpcGetID(userID interface{}) (int64, error) {
	id, ok:= userID.(int64)
	if !ok {
		str := fmt.Sprintf("rpc id类型错误, userID: %v", userID)
		return 0, errors.New(str)
	}
	return id, nil
}
