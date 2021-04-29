package app

import (
	"errors"
	"github.com/jinyun/base/component/Jlog"
	"github.com/jinyun/base/component/Jtoken"
	"github.com/jinyun/base/protoFiles/protoManage"
	"manageServer/typedef/config"
)

func (app *App) HttpReceiver(raw []byte) ([]byte, error, int) {
	req := protoManage.HttpMessage{}
	err := req.Unmarshal(raw)
	if err != nil {
		return nil, err, int(protoManage.HttpError_HttpErrorUnmarshal)
	}
	var ansMsg []byte
	if req.Order == protoManage.Order_ManagerLogin{
		ansMsg, err = app.reqManagerLogin(0, req.Message)
		if err != nil {
			return nil, err, int(protoManage.HttpError_HttpErrorAuthInvalid)
		}
	}else {
		userID, err := Jtoken.ParseToken(req.Token, config.NodeConfig.Token.Key)
		if err != nil {
			return nil, errors.New("请重新登录"), int(protoManage.HttpError_HttpErrorAuthInvalid)
		}
		switch req.Order {
		case protoManage.Order_ManagerFind:
			ansMsg, err = app.reqManagerFind(userID, req.Message)
			break
		case protoManage.Order_TopLinkFind:
			ansMsg, err = app.reqTopLinkFind(userID, req.Message)
			break
		case protoManage.Order_NodeGroupFind:
			ansMsg, err = app.reqNodeGroupFind(userID, req.Message)
			break
		case protoManage.Order_NodeTypeFind:
			ansMsg, err = app.reqNodeTypeFind(userID, req.Message)
			break
		case protoManage.Order_NodeFind:
			ansMsg, err = app.reqNodeFind(userID, req.Message)
			break
		case protoManage.Order_NodeLinkFind:
			ansMsg, err = app.reqNodeLinkFind(userID, req.Message)
			break
		case protoManage.Order_NodeFuncFind:
			ansMsg, err = app.reqNodeFuncFind(userID, req.Message)
			break
		case protoManage.Order_NodeReportFind:
			ansMsg, err = app.reqNodeReportFind(userID, req.Message)
			break
		case protoManage.Order_NodeGroupFindByID:
			ansMsg, err = app.reqNodeGroupFindByID(userID, req.Message)
			break
		case protoManage.Order_NodeTypeFindByID:
			ansMsg, err = app.reqNodeTypeFindByID(userID, req.Message)
			break
		case protoManage.Order_NodeFindByID:
			ansMsg, err = app.reqNodeFindByID(userID, req.Message)
			break
		case protoManage.Order_NodeFuncCallReq:
			ansMsg, err = app.reqNodeFuncCall(userID, req.Message)
			break
		case protoManage.Order_NodeFuncCallFind:
			ansMsg, err = app.reqNodeFuncCallFind(userID, req.Message)
			break
		case protoManage.Order_NodeFuncCallFindByID:
			ansMsg, err = app.reqNodeFuncCallFindByID(userID, req.Message)
			break
		case protoManage.Order_NodeReportValFind:
			ansMsg, err = app.reqNodeReportValFind(userID, req.Message)
			break
		default:
			err = errors.New("指令错误")
			Jlog.Warn("http指令错误", "消息", req)
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
