// Copyright 2019 The Authors. All rights reserved.
// Author: liyiligang
// Date: 2019/4/2 20:07
// Description: rpc客户端数据路由

package managerClient

import (
	"errors"
	"github.com/gogo/protobuf/proto"
	"github.com/liyiligang/base/commonConst"
	"github.com/liyiligang/base/component/Jlog"
	"github.com/liyiligang/base/component/Jrpc"
	"github.com/liyiligang/base/component/Jtool"
	"github.com/liyiligang/manage/app/protoFiles/protoManage"
	"google.golang.org/grpc"
	"reflect"
	"runtime"
	"strings"
	"sync"
	"sync/atomic"
)

type CallFuncDef func(string) string
type rpcStreamManageFunc struct {
	CallFunc CallFuncDef
	NodeFunc protoManage.NodeFunc
}
type rpcStreamManageData struct {
	Node 			  atomic.Value
	NodeLinkMap	  	  sync.Map
	NodeFuncMap	  	  sync.Map
	NodeReportMap	  sync.Map
}

type RpcStreamManageClient struct {
	data      rpcStreamManageData
	rpcStream atomic.Value
	engine    protoManage.RpcEngineClient
}

//启动管控服务客户端
func InitManageClient(config Jrpc.RpcInitConfig) (*RpcStreamManageClient, error) {
	conn, err := Jrpc.GrpcClientInit(config)
	if err != nil {
		return nil, err
	}
	engine := protoManage.NewRpcEngineClient(conn)
	client := &RpcStreamManageClient{engine: engine}
	err = client.initRpcStreamManageClient()
	if err != nil {
		return nil, err
	}
	return client, nil
}

//关闭管控服务客户端
func (client *RpcStreamManageClient) CloseManageClient() {
	rpcStream := client.getRpcStream()
	if rpcStream == nil {
		Jlog.Warn("管控中心客户端关闭失败, rpcStream is nil")
		return
	}
	rpcStream.Close()
}

//获取节点数据
func GetNodeByte(groupName string, typeName string, nodeName string) ([]byte, error) {
	reqNodeLogin := protoManage.ReqNodeLogin{
		NodeGroup: protoManage.NodeGroup{Name: groupName},
		NodeType:  protoManage.NodeType{Name: typeName},
		Node:      protoManage.Node{Name: nodeName},
	}
	return reqNodeLogin.Marshal()
}

//获取管控服务信息
func (client *RpcStreamManageClient) GetManageServerData(addr string) *commonConst.CommonNodeData {
	return &commonConst.CommonNodeData{NodeID: commonConst.ManageNodeID,
		NodeTypeID:   int32(commonConst.ManageNodeTypeID),
		NodeTypeName: commonConst.ManageServerName,
		NodeName:     string(commonConst.ManageServerName),
		NodeState:    int32(protoManage.State_StateNormal),
		PrivateAddr:  Jtool.GetIPFromAddr(addr),
		PublicAddr:   Jtool.GetIPFromAddr(addr),
		GrpcPort:     Jtool.GetPortFromAddr(addr)}
}

//更新节点状态
func (client *RpcStreamManageClient) NodeStateUpdate(state protoManage.State) {
	node := client.GetNode()
	node.State = state
	client.setNode(node)
	client.sendPB(protoManage.Order_NodeUpdateState, &node)
}

//更新节点连接
func (client *RpcStreamManageClient) NodeLinkUpdate(TargetID int64, state protoManage.State) {
	nodeLink := protoManage.NodeLink{SourceID: client.GetNode().Base.ID, TargetID: TargetID, State: state}
	v ,ok := client.data.NodeLinkMap.Load(TargetID)
	if ok {
		nodeLink, ok = v.(protoManage.NodeLink)
		if !ok {
			Jlog.Warn("节点连接更新失败, protoManage.NodeLink 断言错误")
			return
		}
		nodeLink.State = state
	}
	client.data.NodeLinkMap.Store(TargetID, nodeLink)
	client.sendPB(protoManage.Order_NodeLinkUpdateState, &nodeLink)
}

//更新节点方法
func (client *RpcStreamManageClient) NodeFuncUpdate(callFunc CallFuncDef, Describe string) {
	if callFunc == nil {
		Jlog.Warn("节点方法更新失败, 方法不能为空")
		return
	}
	funcName := runtime.FuncForPC(reflect.ValueOf(callFunc).Pointer()).Name()
	funcName = strings.TrimSuffix(funcName, "-fm")
	nodeFunc := rpcStreamManageFunc{NodeFunc: protoManage.NodeFunc{NodeID: client.GetNode().Base.ID,
		Name: funcName, Describe: Describe}, CallFunc: callFunc}
	v ,ok := client.data.NodeFuncMap.Load(funcName)
	if ok {
		nodeFunc, ok = v.(rpcStreamManageFunc)
		if !ok {
			Jlog.Warn("节点方法更新失败, rpcStreamManageFunc 断言错误")
			return
		}
		nodeFunc.NodeFunc.Describe = Describe
		nodeFunc.CallFunc = callFunc
	}
	client.data.NodeFuncMap.Store(funcName, nodeFunc)
	client.sendPB(protoManage.Order_NodeFuncUpdateDesc, &nodeFunc.NodeFunc)
}

//更新节点报告
func (client *RpcStreamManageClient) NodeReportUpdate(flag string, name string, value string) {
	reportName := flag + "-" + name
	nodeReport := protoManage.NodeReport{NodeID: client.GetNode().Base.ID, Flag: flag, Name: name, Value: value}
	v ,ok := client.data.NodeFuncMap.Load(reportName)
	if ok {
		nodeReport, ok = v.(protoManage.NodeReport)
		if !ok {
			Jlog.Warn("节点报告更新失败, protoManage.NodeReport 断言错误")
			return
		}
		nodeReport.Value = value
	}
	client.data.NodeFuncMap.Store(reportName, nodeReport)
	client.sendPB(protoManage.Order_NodeReportUpdateVal, &nodeReport)
}

//更新节点通知
func (client *RpcStreamManageClient) NodeNotifyUpdate(key string, val string) {
	nodeNotify := protoManage.NodeNotify{SenderID: client.GetNode().Base.ID, MessageKey: key, MessageVal: val}
	client.sendPB(protoManage.Order_NodeNotifyAdd, &nodeNotify)
}

//初始化grpc流
func (client *RpcStreamManageClient) initRpcStreamManageClient() error {
	rpcStream, err := Jrpc.GrpcStreamClientInit(new(protoManage.Message), &RpcStreamManageConnect{streamClient: client})
	if err != nil {
		return err
	}
	channel, err := client.engine.RpcChannel(rpcStream.GetContext(), grpc.WaitForReady(true))
	if err != nil {
		return err
	}
	return rpcStream.GrpcStreamClientRun(channel)
}

//上报缓存信息
func (client *RpcStreamManageClient) getNodeStreamByte() ([]byte, error) {
	var nodeLinkList  	[]protoManage.NodeLink
	var nodeFuncList  	[]protoManage.NodeFunc
	var nodeReportList  []protoManage.NodeReport

	client.data.NodeLinkMap.Range(func(key, value interface{}) bool {
		nodeLink, ok := value.(protoManage.NodeLink)
		if !ok {
			return false
		}
		nodeLinkList = append(nodeLinkList, nodeLink)
		return true
	})

	client.data.NodeFuncMap.Range(func(key, value interface{}) bool {
		nodeFunc, ok := value.(rpcStreamManageFunc)
		if !ok {
			return false
		}
		nodeFuncList = append(nodeFuncList, nodeFunc.NodeFunc)
		return true
	})

	client.data.NodeReportMap.Range(func(key, value interface{}) bool {
		nodeReport, ok := value.(protoManage.NodeReport)
		if !ok {
			return false
		}
		nodeReportList = append(nodeReportList, nodeReport)
		return true
	})

	node := client.GetNode()
	reqNodeOnline := protoManage.ReqNodeOnline{
		Node:                 node,
		NodeLinkList:         nodeLinkList,
		NodeFuncList:         nodeFuncList,
		NodeReportList:       nodeReportList,
	}
	return reqNodeOnline.Marshal()
}

//节点上线
func (client *RpcStreamManageClient) nodeOnline(message []byte) error {
	node := protoManage.Node{}
	if len(message) == 0 {
		return errors.New("消息为空值")
	}
	err := node.Unmarshal(message)
	if err != nil {
		return err
	}
	client.setNode(node)
	return nil
}

//执行节点方法
func (client *RpcStreamManageClient) nodeFuncCall(message []byte) error {
	protoNodeFunc := protoManage.NodeFunc{}
	err := protoNodeFunc.Unmarshal(message)
	if err != nil {
		return err
	}
	v ,ok := client.data.NodeFuncMap.Load(protoNodeFunc.Name)
	if !ok {
		return errors.New("节点方法执行失败:找不到匹配的节点方法名, "+protoNodeFunc.Name)
	}
	nodeFunc, ok := v.(rpcStreamManageFunc)
	if !ok {
		return errors.New("节点方法执行失败:rpcStreamManageFunc 断言错误")
	}
	if nodeFunc.CallFunc == nil {
		return errors.New("节点方法执行失败:方法, " + protoNodeFunc.Name + "是空值")
	}
	nodeFunc.NodeFunc.Parameter = protoNodeFunc.Parameter
	nodeFunc.NodeFunc.ReturnVal = nodeFunc.CallFunc(protoNodeFunc.Parameter)
	client.data.NodeFuncMap.Store(protoNodeFunc.Name, nodeFunc)
	client.sendPB(protoManage.Order_NodeFuncUpdatePara, &nodeFunc.NodeFunc)
	return nil
}

func (client *RpcStreamManageClient) sendPB(order protoManage.Order, pb proto.Message) {
	pbByte, err := proto.Marshal(pb)
	if err != nil {
		Jlog.Warn("管控中心发送失败, protobuf编码错误", "err", err)
		return
	}
	client.send(order, pbByte)
}

func (client *RpcStreamManageClient) send(order protoManage.Order, data []byte) bool {
	rpcStream := client.getRpcStream()
	if rpcStream == nil {
		Jlog.Warn("管控中心发送失败, rpcStream is nil")
		return false
	}
	message := &protoManage.Message{Order: order, Message: data}
	rpcStream.SendData(message)
	return true
}

func (client *RpcStreamManageClient) setNode(node protoManage.Node){
	client.data.Node.Store(node)
}

func (client *RpcStreamManageClient) GetNode() protoManage.Node {
	node, ok := client.data.Node.Load().(protoManage.Node)
	if !ok {
		return protoManage.Node{Base: protoManage.Base{}, State: protoManage.State_StateUnknow}
	}
	return node
}

func (client *RpcStreamManageClient) setRpcStream(stream *Jrpc.RpcStream){
	client.rpcStream.Store(stream)
}

func (client *RpcStreamManageClient) getRpcStream() *Jrpc.RpcStream{
	stream, ok := client.rpcStream.Load().(*Jrpc.RpcStream)
	if !ok {
		return nil
	}
	return stream
}





