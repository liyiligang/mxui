package app

import (
	"context"
	"github.com/liyiligang/base/component/Jlog"
	"github.com/liyiligang/base/component/Jrpc"
	"github.com/liyiligang/base/component/Jtoken"
	"github.com/liyiligang/base/component/Jtool"
	"github.com/liyiligang/base/component/Jweb"
	"github.com/liyiligang/manage/app/protoFiles/protoManage"
	"github.com/liyiligang/manage/app/typedef/config"
	"github.com/pkg/errors"
	"time"
)

func (app *App) WebsocketConnect(conn *Jweb.WebsocketConn) (interface{}, error) {
	return app.Request.ReqWsTokenCheck([]byte(conn.GetParm().WsClientMsg), conn.GetParm().WsClientAddr)
}

func (app *App) WebsocketConnected(conn *Jweb.WebsocketConn) error {
	id, err := app.Gateway.WsGetID(conn.GetBindVal())
	if err != nil {
		return err
	}
	if app.Gateway.WebsocketManage.IsExist(id) {
		app.Gateway.WsCloseClient(id, "您的账户在别处登录")
	}
	err = app.Request.Data.ManagerStateUpdate(&protoManage.Manager{Base: protoManage.Base{ID: id},
		State: protoManage.State_StateNormal})
	if err != nil {
		return err
	}
	app.Gateway.WebsocketManage.Store(id, conn)
	Jlog.Info("websocket已连接", "id", id)
	return nil
}

func (app *App) WebsocketClose(conn *Jweb.WebsocketConn, code int, text string) {
	id, err := app.Gateway.WsGetID(conn.GetBindVal())
	if err != nil {
		return
	}
	app.Request.Data.ManagerStateUpdate(&protoManage.Manager{Base: protoManage.Base{ID: id},
		State: protoManage.State_StateUnknow})
	app.Gateway.WebsocketManage.Delete(id)
	Jlog.Info("websocket连接已关闭", "id", id)
}

func (app *App) WebsocketReceiver(conn *Jweb.WebsocketConn, message *[]byte) {
	id, err := app.Gateway.WsGetID(conn.GetBindVal())
	if err != nil {
		Jlog.Warn("websocket数据接收错误", "err", err)
		return
	}
	res := protoManage.Message{}
	err = res.Unmarshal(*message)
	if err != nil {
		Jlog.Warn("websocket数据解析错误", "err", err)
		return
	}
	switch res.Order {
	case protoManage.Order_NodeUpdateState:
		app.Request.ReqNodeStateUpdate(id, res.Message)
	break
	default:
		Jlog.Warn("websocket指令错误", "消息", res)
	}
}

func (app *App) WebsocketPong(conn *Jweb.WebsocketConn, pingData string) string {
	return pingData
}

func (app *App) WebsocketError(text string, err error){
	Jlog.Warn(text, "err", err)
}

func (app *App) HttpReceiver(raw []byte) ([]byte, error, int) {
	var ansMsg []byte
	var userID int64
	var err error

	req := protoManage.HttpMessage{}
	err = req.Unmarshal(raw)
	if err != nil {
		return nil, err, int(protoManage.HttpError_HttpErrorUnmarshal)
	}
	if req.Order == protoManage.Order_ManagerLogin {
		ansMsg, err = app.Request.ReqManagerLogin(0, req.Message)
		if err != nil {
			return nil, err, int(protoManage.HttpError_HttpErrorLogin)
		}
	}else if req.Order == protoManage.Order_ManagerAdd {
		ansMsg, err = app.Request.ReqManagerAdd(userID, req.Message)
		if err != nil {
			return nil, err, int(protoManage.HttpError_HttpErrorRegister)
		}
	}else {
		userID, err = Jtoken.ParseToken(req.Token, config.LocalConfig.Token.Key)
		if err != nil {
			return nil, errors.New("身份验证失败"), int(protoManage.HttpError_HttpErrorRequest)
		}
		switch req.Order {
		case protoManage.Order_ManagerFind:
			ansMsg, err = app.Request.ReqManagerFind(userID, req.Message)
			break
		case protoManage.Order_ManagerFindByID:
			ansMsg, err = app.Request.ReqManagerFindByID(userID, req.Message)
			break
		case protoManage.Order_ManagerUpdatePassword:
			ansMsg, err = app.Request.ReqManagerUpdatePassword(userID, req.Message)
			break
		case protoManage.Order_ManagerUpdateSetting:
			ansMsg, err = app.Request.ReqManagerUpdateSetting(userID, req.Message)
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
			err = errors.New("http指令错误")
			Jlog.Error("http指令错误", "消息", req)
		}
	}
	if err != nil {
		return nil ,err, int(protoManage.HttpError_HttpErrorRequest)
	}
	ans := protoManage.HttpMessage{Message: ansMsg}
	pbByte, err := ans.Marshal()
	if err != nil {
		return nil, err, int(protoManage.HttpError_HttpErrorMarshal)
	}
	return pbByte, err, int(protoManage.HttpError_HttpErrorNull)
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
	id, err := app.Gateway.RpcGetID(conn.GetBindVal())
	if err != nil {
		return err
	}
	if app.Gateway.RpcManage.IsExistDelayCheck(id, 500*time.Millisecond, 6) {
		return errors.New("id:"+Jtool.Int64ToString(id)+"已存在")
	}
	err = app.Request.ReqNodeOnline(id, conn.GetParm().RpcStreamClientMsg)
	if err != nil {
		return err
	}
	app.Gateway.RpcManage.Store(id, conn)
	Jlog.Info("rpc已连接", "id", id)
	return nil
}

func (app *App) RpcStreamClose(conn *Jrpc.RpcStream) {
	id, err := app.Gateway.RpcGetID(conn.GetBindVal())
	if err != nil {
		Jlog.Warn("rpc连接关闭错误", "err", err)
		return
	}
	app.Request.ReqNodeOffline(id)
	app.Gateway.RpcManage.Delete(conn.GetBindVal())
	Jlog.Info("rpc连接已关闭", "id", id)
}

func (app *App) RpcStreamReceiver(conn *Jrpc.RpcStream, recv interface{}) {
	id, err := app.Gateway.RpcGetID(conn.GetBindVal())
	if err != nil {
		Jlog.Warn("rpc数据接收错误", "err", err)
		return
	}
	res := *recv.(*protoManage.Message)

	switch res.Order {
	case protoManage.Order_NodeUpdateState:
		app.Request.ReqNodeStateUpdate(id, res.Message)
		break
	case protoManage.Order_NodeLinkUpdateState:
		app.Request.ReqNodeLinkUpdate(id, res.Message)
		break
	case protoManage.Order_NodeFuncCallAns:
		app.Request.AnsNodeFuncCall(id, res.Message)
		break
	case protoManage.Order_NodeReportUpdateVal:
		app.Request.ReqNodeReportValAdd(id, res.Message)
		break
	case protoManage.Order_NodeNotifyAdd:
		app.Request.ReqNodeNotifyAdd(id, res.Message)
		break
	default:
		Jlog.Warn("rpc 指令错误", "消息", res)
	}
}

func (app *App) RpcStreamError(text string, err error){
	Jlog.Warn(text, "err", err)
}