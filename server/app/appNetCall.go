package app

import (
	"context"
	"github.com/liyiligang/base/component/Jlog"
	"github.com/liyiligang/base/component/Jrpc"
	"github.com/liyiligang/base/component/Jtoken"
	"github.com/liyiligang/base/component/Jtool"
	"github.com/liyiligang/base/component/Jweb"
	"github.com/liyiligang/klee/app/protoFiles/protoManage"
	"github.com/liyiligang/klee/app/typedef/config"
	"github.com/pkg/errors"
	"time"
)

func (app *App) WebsocketConnect(conn *Jweb.WebsocketConn) (interface{}, error) {
	return app.Request.ReqWsTokenCheck([]byte(conn.GetParm().WsClientMsg), conn.GetParm().WsClientAddr)
}

func (app *App) WebsocketConnected(conn *Jweb.WebsocketConn) error {
	var userID int64
	var err error
	defer func(){
		if err != nil {
			Jlog.Warn("用户上线失败：", "userID", userID, "error", err)
			app.Request.SaveNodeNotifyWithUserError(userID, "用户上线失败: " + err.Error())
		}else{
			Jlog.Info("用户已上线：", "userID", userID, "error", err)
			app.Request.SaveNodeNotifyWithUserInfo(userID, "用户已上线")
		}
	}()
	userID, err = app.Gateway.WsGetID(conn.GetBindVal())
	if err != nil {
		return err
	}
	if app.Gateway.WebsocketManage.IsExist(userID) {
		app.Gateway.WsCloseClient(userID, "您的账户在别处登录")
	}
	err = app.Request.Data.ManagerStateUpdate(&protoManage.Manager{Base: protoManage.Base{ID: userID},
		State: protoManage.State_StateNormal})
	if err != nil {
		return err
	}
	app.Gateway.WebsocketManage.Store(userID, conn)
	return nil
}

func (app *App) WebsocketClose(conn *Jweb.WebsocketConn, code int, text string) {
	var userID int64
	var err error
	defer func(){
		if err != nil {
			Jlog.Warn("用户下线错误: ", "userID", userID, "error", err)
			app.Request.SaveNodeNotifyWithUserError(userID, "用户下线错误: " + err.Error())
		}else{
			Jlog.Info("用户已下线: ", "userID", userID, "error", err)
			app.Request.SaveNodeNotifyWithUserInfo(userID, "用户已下线")
		}
	}()
	userID, err = app.Gateway.WsGetID(conn.GetBindVal())
	if err != nil {
		return
	}
	app.Request.Data.ManagerStateUpdate(&protoManage.Manager{Base: protoManage.Base{ID: userID},
		State: protoManage.State_StateUnknow})
	app.Gateway.WebsocketManage.Delete(userID)
}

func (app *App) WebsocketReceiver(conn *Jweb.WebsocketConn, message *[]byte) {
	//id, err := app.Gateway.WsGetID(conn.GetBindVal())
	//if err != nil {
	//	Jlog.Warn("websocket数据接收错误", "err", err)
	//	return
	//}
	//res := protoManage.Message{}
	//err = res.Unmarshal(*message)
	//if err != nil {
	//	Jlog.Warn("websocket数据解析错误", "err", err)
	//	return
	//}
	//switch res.Order {
	//case protoManage.Order_NodeUpdateState:
	//	app.Request.ReqNodeStateUpdate(id, res.Message)
	//break
	//default:
	//	Jlog.Warn("websocket指令错误", "消息", res)
	//}
}

func (app *App) WebsocketPong(conn *Jweb.WebsocketConn, pingData string) string {
	return pingData
}

func (app *App) WebsocketError(text string, err error){
	Jlog.Error(text, "err", err)
}

func (app *App) HttpReceiver(raw []byte) ([]byte, error, int) {
	var ansMsg []byte
	var err error
	var userID int64
	errCode := protoManage.HttpError_HttpErrorNull

	defer func(){
		if err != nil {
			Jlog.Warn("http请求错误：", "error", err)
			app.Request.SaveNodeNotifyWithUserError(userID, err.Error())
		}
	}()

	req := protoManage.HttpMessage{}
	err = req.Unmarshal(raw)
	if err != nil {
		return nil, err, int(protoManage.HttpError_HttpErrorUnmarshal)
	}

	if req.Token == "" {
		ansMsg, err, errCode = app.httpRequestNoToken(userID, &req)
	} else {
		userID, err = Jtoken.ParseToken(req.Token, config.LocalConfig.Token.Key)
		if err != nil {
			return nil, errors.New("身份验证失败"), int(protoManage.HttpError_HttpErrorRequest)
		}
		err = app.httpRequestLevel(userID, &req)
		if err != nil {
			return nil, err, int(protoManage.HttpError_HttpErrorRequest)
		}
		ansMsg, err, errCode = app.httpRequestWithToken(userID, &req)
	}
	if err != nil {
		return nil ,err, int(errCode)
	}
	ans := protoManage.HttpMessage{Message: ansMsg}
	pbByte, err := ans.Marshal()
	if err != nil {
		return nil, err, int(protoManage.HttpError_HttpErrorMarshal)
	}
	return pbByte, err, int(protoManage.HttpError_HttpErrorNull)
}

func (app *App) httpRequestNoToken(userID int64, req *protoManage.HttpMessage) ([]byte, error, protoManage.HttpError) {
	var ansMsg []byte
	var err error
	errCode := protoManage.HttpError_HttpErrorNull

	switch req.Order {
	case protoManage.Order_ManagerLogin:
		ansMsg, err = app.Request.ReqManagerLogin(userID, req.Message)
		if err != nil {
			errCode = protoManage.HttpError_HttpErrorLogin
		}
		break
	case protoManage.Order_ManagerRegister:
		ansMsg, err = app.Request.ReqManagerRegister(userID, req.Message)
		if err != nil {
			errCode = protoManage.HttpError_HttpErrorRegister
		}
		break
	case protoManage.Order_ManagerFindByLevel:
		ansMsg, err = app.Request.ReqManagerFindByLevel(userID, req.Message)
		break
	default:
		err = errors.New("http指令错误：" +  Jtool.Int64ToString(int64(req.Order)))
	}

	if err != nil && errCode == protoManage.HttpError_HttpErrorNull {
		errCode = protoManage.HttpError_HttpErrorRequest
	}
	return ansMsg, err, errCode
}

func (app *App) httpRequestWithToken(userID int64, req *protoManage.HttpMessage) ([]byte, error, protoManage.HttpError) {
	var ansMsg []byte
	var err error
	errCode := protoManage.HttpError_HttpErrorNull

	switch req.Order {
	case protoManage.Order_ManagerAdd:
		ansMsg, err = app.Request.ReqManagerAdd(userID, req.Message)
		break
	case protoManage.Order_ManagerFindNickName:
		ansMsg, err = app.Request.ReqManagerFindNickName(userID, req.Message)
		break
	case protoManage.Order_ManagerFindLowLevel:
		ansMsg, err = app.Request.ReqManagerFindLowLevel(userID, req.Message)
		break
	case protoManage.Order_ManagerFindByID:
		ansMsg, err = app.Request.ReqManagerFindByID(userID, req.Message)
		break
	case protoManage.Order_ManagerUpdate:
		ansMsg, err = app.Request.ReqManagerUpdate(userID, req.Message)
		break
	case protoManage.Order_ManagerDel:
		ansMsg, err = app.Request.ReqManagerDel(userID, req.Message)
		break
	case protoManage.Order_TopLinkFind:
		ansMsg, err = app.Request.ReqTopLinkFind(userID, req.Message)
		break
	case protoManage.Order_TopLinkFindByID:
		ansMsg, err = app.Request.ReqTopLinkFindByID(userID, req.Message)
		break
	case protoManage.Order_TopLinkAdd:
		ansMsg, err = app.Request.ReqTopLinkAdd(userID, req.Message)
		break
	case protoManage.Order_TopLinkDel:
		ansMsg, err = app.Request.ReqTopLinkDel(userID, req.Message)
		break
	case protoManage.Order_TopLinkUpdate:
		ansMsg, err = app.Request.ReqTopLinkUpdate(userID, req.Message)
		break
	case protoManage.Order_NodeGroupFind:
		ansMsg, err = app.Request.ReqNodeGroupFind(userID, req.Message)
		break
	case protoManage.Order_NodeTypeFind:
		ansMsg, err = app.Request.ReqNodeTypeFind(userID, req.Message)
		break
	case protoManage.Order_NodeFind:
		ansMsg, err = app.Request.ReqNodeFind(userID, req.Message)
		break
	case protoManage.Order_NodeLinkFind:
		ansMsg, err = app.Request.ReqNodeLinkFind(userID, req.Message)
		break
	case protoManage.Order_NodeFuncFind:
		ansMsg, err = app.Request.ReqNodeFuncFind(userID, req.Message)
		break
	case protoManage.Order_NodeReportFind:
		ansMsg, err = app.Request.ReqNodeReportFind(userID, req.Message)
		break
	case protoManage.Order_NodeGroupFindByID:
		ansMsg, err = app.Request.ReqNodeGroupFindByID(userID, req.Message)
		break
	case protoManage.Order_NodeTypeFindByID:
		ansMsg, err = app.Request.ReqNodeTypeFindByID(userID, req.Message)
		break
	case protoManage.Order_NodeFindByID:
		ansMsg, err = app.Request.ReqNodeFindByID(userID, req.Message)
		break
	case protoManage.Order_NodeFuncCallReq:
		ansMsg, err = app.Request.ReqNodeFuncCall(userID, req.Message)
		break
	case protoManage.Order_NodeFuncCallFind:
		ansMsg, err = app.Request.ReqNodeFuncCallFind(userID, req.Message)
		break
	case protoManage.Order_NodeFuncCallFindByID:
		ansMsg, err = app.Request.ReqNodeFuncCallFindByID(userID, req.Message)
		break
	case protoManage.Order_NodeReportValFind:
		ansMsg, err = app.Request.ReqNodeReportValFind(userID, req.Message)
		break
	case protoManage.Order_NodeNotifyFind:
		ansMsg, err = app.Request.ReqNodeNotifyFind(userID, req.Message)
		break
	case protoManage.Order_NodeDel:
		ansMsg, err = app.Request.ReqNodeDel(userID, req.Message)
		break
	case protoManage.Order_NodeLinkDel:
		ansMsg, err = app.Request.ReqNodeLinkDel(userID, req.Message)
		break
	case protoManage.Order_NodeFuncDel:
		ansMsg, err = app.Request.ReqNodeFuncDel(userID, req.Message)
		break
	case protoManage.Order_NodeReportDel:
		ansMsg, err = app.Request.ReqNodeReportDel(userID, req.Message)
		break
	case protoManage.Order_NodeTest:
		ansMsg, err = app.Request.ReqNodeTest(userID, req.Message)
		break
	default:
		err = errors.New("http指令错误：" +  Jtool.Int64ToString(int64(req.Order)))
	}

	if err != nil && errCode == protoManage.HttpError_HttpErrorNull {
		errCode = protoManage.HttpError_HttpErrorRequest
	}

	return ansMsg, err, errCode
}

func (app *App) httpRequestLevel(userID int64, req *protoManage.HttpMessage) error {
	httpLevel := protoManage.Level_LevelNot
	switch req.Order {
	case protoManage.Order_TopLinkDel,
	protoManage.Order_TopLinkUpdate,
	protoManage.Order_ManagerAdd,
	protoManage.Order_ManagerDel,
	protoManage.Order_ManagerUpdate,
	protoManage.Order_ManagerFindLowLevel,
	protoManage.Order_NodeFuncDel,
	protoManage.Order_NodeReportDel,
	protoManage.Order_TopLinkAdd:
		httpLevel = protoManage.Level_LevelSuper
		break
	}
	if httpLevel > protoManage.Level_LevelNot {
		level, err := app.Data.ManagerFindLevelByID(userID)
		if err != nil {
			return err
		}
		if level < httpLevel {
			return errors.New("权限不足")
		}
	}
	return nil
}

func (app *App) RegisterNodeFunc(ctx context.Context, nodeFunc *protoManage.NodeFunc) (*protoManage.NodeFunc, error) {
	err := app.Request.ReqNodeFuncRegister(ctx, nodeFunc)
	if err != nil {
		return nil, err
	}
	return nodeFunc, nil
}

func (app *App) RegisterNodeReport(ctx context.Context, nodeReport *protoManage.NodeReport) (*protoManage.NodeReport, error) {
	err := app.Request.ReqNodeReportRegister(ctx, nodeReport)
	if err != nil {
		return nil, err
	}
	return nodeReport, nil
}

func (app *App) RpcChannel(request protoManage.RpcEngine_RpcChannelServer) (err error) {
	conn, pErr := Jrpc.GrpcStreamServerInit(request, new(protoManage.Message), app)
	if pErr != nil {
		return pErr
	}
	return conn.GrpcStreamServerRun(request)
}

func (app *App) RpcStreamConnect(conn *Jrpc.RpcStream) (interface{}, error) {
	id, header, err := app.Request.ReqNodeLogin(conn.GetParm().RpcClientMsg, conn.GetParm().RpcClientAddr)
	conn.SetRpcStreamServerHeader(header)
	if err != nil {
		return 0, err
	}
	return id, err
}

func (app *App) RpcStreamConnected(conn *Jrpc.RpcStream) error {
	var nodeID int64
	var err error
	defer func(){
		if err != nil {
			Jlog.Warn("节点上线失败：", "nodeID", nodeID, "error", err)
			app.Request.SaveNodeNotifyWithNodeError(nodeID, "节点上线失败: " + err.Error())
		}else{
			Jlog.Info("节点已上线：", "nodeID", nodeID, "error", err)
			app.Request.SaveNodeNotifyWithNodeInfo(nodeID, "节点已上线")
		}
	}()
	nodeID, err = app.Gateway.RpcGetID(conn.GetBindVal())
	if err != nil {
		return err
	}
	if app.Gateway.RpcManage.IsExistDelayCheck(nodeID, 500*time.Millisecond, 6) {
		return errors.New("id:"+Jtool.Int64ToString(nodeID)+"已存在")
	}
	err = app.Request.ReqNodeOnline(nodeID, conn.GetParm().RpcStreamClientMsg)
	if err != nil {
		return err
	}
	app.Gateway.RpcManage.Store(nodeID, conn)
	return nil
}

func (app *App) RpcStreamClose(conn *Jrpc.RpcStream) {
	var nodeID int64
	var err error
	defer func(){
		if err != nil {
			Jlog.Warn("节点下线错误：", "nodeID", nodeID, "error", err)
			app.Request.SaveNodeNotifyWithNodeError(nodeID, "节点下线错误: " + err.Error())
		}else{
			Jlog.Info("节点已下线：", "nodeID", nodeID, "error", err)
			app.Request.SaveNodeNotifyWithNodeInfo(nodeID, "节点已下线")
		}
	}()
	nodeID, err = app.Gateway.RpcGetID(conn.GetBindVal())
	if err != nil {
		return 
	}
	app.Request.ReqNodeOffline(nodeID)
	app.Gateway.RpcManage.Delete(conn.GetBindVal())
}

func (app *App) RpcStreamReceiver(conn *Jrpc.RpcStream, recv interface{}) {
	var nodeID int64
	var err error
	defer func(){
		if err != nil {
			Jlog.Warn("rpc stream请求错误：", "error", err)
			app.Request.SendNodeNotifyWithNodeError(nodeID, err.Error())
		}
	}()
	nodeID, err = app.Gateway.RpcGetID(conn.GetBindVal())
	if err != nil {
		return
	}
	res, ok := recv.(*protoManage.Message)
	if !ok {
		err = errors.New("rpc stream消息断言错误")
		return
	}
	switch res.Order {
	case protoManage.Order_NodeUpdateState:
		err = app.Request.ReqNodeStateUpdate(nodeID, res.Message)
		break
	case protoManage.Order_NodeLinkUpdateState:
		err = app.Request.ReqNodeLinkUpdate(nodeID, res.Message)
		break
	case protoManage.Order_NodeFuncCallAns:
		err = app.Request.AnsNodeFuncCall(nodeID, res.Message)
		break
	case protoManage.Order_NodeReportUpdateVal:
		err = app.Request.ReqNodeReportValAdd(nodeID, res.Message)
		break
	case protoManage.Order_NodeNotifyAdd:
		err = app.Request.ReqNodeNotifyAdd(nodeID, res.Message)
		break
	default:
		err = errors.New("rpc stream指令错误：" +  Jtool.Int64ToString(int64(res.Order)))
	}
	if err != nil {
		return
	}
}

func (app *App) RpcStreamError(text string, err error){
	Jlog.Error(text, "err", err)
}