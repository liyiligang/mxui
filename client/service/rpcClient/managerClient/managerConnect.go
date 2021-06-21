package managerClient

import (
	"github.com/liyiligang/base/commonConst"
	"github.com/liyiligang/base/component/Jlog"
	"github.com/liyiligang/base/component/Jrpc"
	"github.com/liyiligang/manage/app/protoFiles/protoManage"
)

type RpcStreamManageConnect struct {
	streamClient *RpcStreamManageClient
}

func (client *RpcStreamManageConnect) RpcStreamConnect(stream *Jrpc.RpcStream) (interface{}, error) {
	pbByte, err := client.streamClient.getNodeStreamByte()
	if err != nil {
		return 0, err
	}
	stream.SetRpcStreamClientMsg(pbByte)
	return commonConst.ManageNodeID, nil
}

func (client *RpcStreamManageConnect) RpcStreamConnected(stream *Jrpc.RpcStream) error {
	err := client.streamClient.nodeOnline(stream.GetParm().RpcStreamServerHeader)
	if err != nil{
		return err
	}
	client.streamClient.setRpcStream(stream)
	return nil
}

func (client *RpcStreamManageConnect) RpcStreamClose(stream *Jrpc.RpcStream) {
	Jlog.Info("管控服务连接已断开", "err:", string(stream.GetParm().RpcStreamServerTrailer))
	go func(){
		err := client.streamClient.initRpcStreamManageClient()
		if err != nil {
			Jlog.Error("管控中心重连失败", "err:", err.Error())
		}
	}()
}

func (client *RpcStreamManageConnect) RpcStreamReceiver(stream *Jrpc.RpcStream, recv interface{}) {
	res := *recv.(*protoManage.Message)
	var err error
	switch res.Order {
	case protoManage.Order_NodeFuncCall:
		err = client.streamClient.nodeFuncCall(res.Message)
		break
	default:
		Jlog.Warn("管控中心指令错误", "指令", res.Order, "消息", &res.Message)
	}
	if err != nil {
		Jlog.Warn(err.Error())
	}
}

func (client *RpcStreamManageConnect) RpcStreamError(text string, err error) {
	Jlog.Warn(text, "err", err)
}