package app

import (
	"github.com/liyiligang/base/component/Jlog"
	"github.com/liyiligang/base/component/Jrpc"
	"github.com/liyiligang/base/component/Jtoken"
	"github.com/liyiligang/base/component/Jtool"
	"github.com/liyiligang/base/component/Jweb"
	"github.com/liyiligang/base/protoFiles/protoManage"
	"github.com/liyiligang/manage/app/typedef/config"
	"github.com/pkg/errors"
)

func (app *App) WebsocketConnect(conn *Jweb.WebsocketConn) (interface{}, error) {
	return app.request.ReqWsTokenCheck([]byte(conn.GetParm().WsClientMsg), conn.GetParm().WsClientAddr)
}

func (app *App) WebsocketConnected(conn *Jweb.WebsocketConn) error {
	id, err := app.gateway.WsGetID(conn.GetBindVal())
	if err != nil {
		return err
	}
	if app.gateway.WebsocketManage.IsExist(id) {
		return errors.New("id:"+Jtool.Int64ToString(id)+"已存在")
	}
	err = app.request.Data.ManagerStateUpdate(&protoManage.Manager{Base: protoManage.Base{ID: id},
		State: protoManage.State_StateNormal})
	if err != nil {
		return err
	}
	app.gateway.WebsocketManage.Store(id, conn)
	Jlog.Info("websocket已连接", "id", id)
	return nil
}

func (app *App) WebsocketClose(conn *Jweb.WebsocketConn, code int, text string) {
	id, err := app.gateway.WsGetID(conn.GetBindVal())
	if err != nil {
		Jlog.Warn("websocket连接关闭错误", "err", err)
		return
	}
	app.request.Data.ManagerStateUpdate(&protoManage.Manager{Base: protoManage.Base{ID: id},
		State: protoManage.State_StateUnknow})
	app.gateway.WebsocketManage.Delete(id)
	Jlog.Info("websocket连接已关闭", "id", id)
}

func (app *App) WebsocketReceiver(conn *Jweb.WebsocketConn, message *[]byte) {
	id, err := app.gateway.WsGetID(conn.GetBindVal())
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
		app.request.ReqNodeStateUpdate(id, res.Message)
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
	if req.Order == protoManage.Order_ManagerLogin{
		ansMsg, err = app.request.ReqManagerLogin(0, req.Message)
		if err != nil {
			return nil, err, int(protoManage.HttpError_HttpErrorAuthInvalid)
		}
	}else {
		userID, err = Jtoken.ParseToken(req.Token, config.NodeConfig.Token.Key)
		if err != nil {
			return nil, errors.New("请重新登录"), int(protoManage.HttpError_HttpErrorAuthInvalid)
		}
		switch req.Order {
		case protoManage.Order_ManagerFind:
			ansMsg, err = app.request.ReqManagerFind(userID, req.Message)
			break
		case protoManage.Order_TopLinkFind:
			ansMsg, err = app.request.ReqTopLinkFind(userID, req.Message)
			break
		case protoManage.Order_NodeGroupFind:
			ansMsg, err = app.request.ReqNodeGroupFind(userID, req.Message)
			break
		case protoManage.Order_NodeTypeFind:
			ansMsg, err = app.request.ReqNodeTypeFind(userID, req.Message)
			break
		case protoManage.Order_NodeFind:
			ansMsg, err = app.request.ReqNodeFind(userID, req.Message)
			break
		case protoManage.Order_NodeLinkFind:
			ansMsg, err = app.request.ReqNodeLinkFind(userID, req.Message)
			break
		case protoManage.Order_NodeFuncFind:
			ansMsg, err = app.request.ReqNodeFuncFind(userID, req.Message)
			break
		case protoManage.Order_NodeReportFind:
			ansMsg, err = app.request.ReqNodeReportFind(userID, req.Message)
			break
		case protoManage.Order_NodeGroupFindByID:
			ansMsg, err = app.request.ReqNodeGroupFindByID(userID, req.Message)
			break
		case protoManage.Order_NodeTypeFindByID:
			ansMsg, err = app.request.ReqNodeTypeFindByID(userID, req.Message)
			break
		case protoManage.Order_NodeFindByID:
			ansMsg, err = app.request.ReqNodeFindByID(userID, req.Message)
			break
		case protoManage.Order_NodeFuncCallReq:
			ansMsg, err = app.request.ReqNodeFuncCall(userID, req.Message)
			break
		case protoManage.Order_NodeFuncCallFind:
			ansMsg, err = app.request.ReqNodeFuncCallFind(userID, req.Message)
			break
		case protoManage.Order_NodeFuncCallFindByID:
			ansMsg, err = app.request.ReqNodeFuncCallFindByID(userID, req.Message)
			break
		case protoManage.Order_NodeReportValFind:
			ansMsg, err = app.request.ReqNodeReportValFind(userID, req.Message)
			break
		case protoManage.Order_NodeTest:
			ansMsg, err = app.request.ReqNodeTest(userID, req.Message)
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

func (app *App) RpcChannel(request protoManage.RpcEngine_RpcChannelServer) (err error) {
	conn, pErr := Jrpc.GrpcStreamServerInit(request, new(protoManage.Message), app)
	if pErr != nil {
		return pErr
	}
	return conn.GrpcStreamServerRun(request)
}

func (app *App) RpcStreamConnect(conn *Jrpc.RpcStream) (interface{}, error) {
	id, header, err := app.request.ReqNodeLogin(conn.GetParm().RpcClientMsg, conn.GetParm().RpcClientAddr)
	conn.SetRpcStreamServerHeader(header)
	if err != nil {
		return 0, err
	}
	return id, err
}

func (app *App) RpcStreamConnected(conn *Jrpc.RpcStream) error {
	id, err := app.gateway.RpcGetID(conn.GetBindVal())
	if err != nil {
		return err
	}
	if app.gateway.RpcManage.IsExist(id) {
		return errors.New("id:"+Jtool.Int64ToString(id)+"已存在")
	}
	err = app.request.ReqNodeOnline(id, conn.GetParm().RpcStreamClientMsg)
	if err != nil {
		return err
	}
	app.gateway.RpcManage.Store(id, conn)
	Jlog.Info("rpc已连接", "id", id)
	return nil
}

func (app *App) RpcStreamClose(conn *Jrpc.RpcStream) {
	id, err := app.gateway.RpcGetID(conn.GetBindVal())
	if err != nil {
		Jlog.Warn("rpc连接关闭错误", "err", err)
		return
	}
	app.request.ReqNodeOffline(id)
	app.gateway.RpcManage.Delete(conn.GetBindVal())
	Jlog.Info("rpc连接已关闭", "id", id)
}

func (app *App) RpcStreamReceiver(conn *Jrpc.RpcStream, recv interface{}) {
	id, err := app.gateway.RpcGetID(conn.GetBindVal())
	if err != nil {
		Jlog.Warn("rpc数据接收错误", "err", err)
		return
	}
	res := *recv.(*protoManage.Message)

	switch res.Order {
	case protoManage.Order_NodeUpdateState:
		app.request.ReqNodeStateUpdate(id, res.Message)
		break
	case protoManage.Order_NodeLinkUpdateState:
		app.request.ReqNodeLinkStateUpdate(id, res.Message)
		break
	case protoManage.Order_NodeFuncUpdateDesc:
		app.request.ReqNodeFuncDescUpdate(id, res.Message)
		break
	case protoManage.Order_NodeReportUpdateVal:
		app.request.ReqNodeReportValUpdate(id, res.Message)
		break
	case protoManage.Order_NodeNotifyNew:
		app.request.ReqNodeNotifyUpdate(id, res.Message)
		break
	default:
		Jlog.Warn("rpc 指令错误", "消息", res)
	}
}

func (app *App) RpcStreamError(text string, err error){
	Jlog.Warn(text, "err", err)
}