package gateway

import (
	"github.com/liyiligang/base/component/Jlog"
	"github.com/liyiligang/base/component/Jtoken"
	"github.com/liyiligang/base/protoFiles/protoManage"
	"github.com/liyiligang/manage/app/typedef/config"
	"github.com/pkg/errors"
)

func (gateway *Gateway) HttpReceiver(raw []byte) ([]byte, error, int) {
	req := protoManage.HttpMessage{}
	err := req.Unmarshal(raw)
	if err != nil {
		return nil, err, int(protoManage.HttpError_HttpErrorUnmarshal)
	}
	var ansMsg []byte
	if req.Order == protoManage.Order_ManagerLogin{
		ansMsg, err = gateway.Request.ReqManagerLogin(0, req.Message)
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
			ansMsg, err = gateway.Request.ReqManagerFind(userID, req.Message)
			break
		case protoManage.Order_TopLinkFind:
			ansMsg, err = gateway.Request.ReqTopLinkFind(userID, req.Message)
			break
		case protoManage.Order_NodeGroupFind:
			ansMsg, err = gateway.Request.ReqNodeGroupFind(userID, req.Message)
			break
		case protoManage.Order_NodeTypeFind:
			ansMsg, err = gateway.Request.ReqNodeTypeFind(userID, req.Message)
			break
		case protoManage.Order_NodeFind:
			ansMsg, err = gateway.Request.ReqNodeFind(userID, req.Message)
			break
		case protoManage.Order_NodeLinkFind:
			ansMsg, err = gateway.Request.ReqNodeLinkFind(userID, req.Message)
			break
		case protoManage.Order_NodeFuncFind:
			ansMsg, err = gateway.Request.ReqNodeFuncFind(userID, req.Message)
			break
		case protoManage.Order_NodeReportFind:
			ansMsg, err = gateway.Request.ReqNodeReportFind(userID, req.Message)
			break
		case protoManage.Order_NodeGroupFindByID:
			ansMsg, err = gateway.Request.ReqNodeGroupFindByID(userID, req.Message)
			break
		case protoManage.Order_NodeTypeFindByID:
			ansMsg, err = gateway.Request.ReqNodeTypeFindByID(userID, req.Message)
			break
		case protoManage.Order_NodeFindByID:
			ansMsg, err = gateway.Request.ReqNodeFindByID(userID, req.Message)
			break
		case protoManage.Order_NodeFuncCallReq:
			ansMsg, err = gateway.Request.ReqNodeFuncCall(userID, req.Message)
			break
		case protoManage.Order_NodeFuncCallFind:
			ansMsg, err = gateway.Request.ReqNodeFuncCallFind(userID, req.Message)
			break
		case protoManage.Order_NodeFuncCallFindByID:
			ansMsg, err = gateway.Request.ReqNodeFuncCallFindByID(userID, req.Message)
			break
		case protoManage.Order_NodeReportValFind:
			ansMsg, err = gateway.Request.ReqNodeReportValFind(userID, req.Message)
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
