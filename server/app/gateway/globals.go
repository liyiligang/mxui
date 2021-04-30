package gateway

import (
	"github.com/liyiligang/base/component/Jtool"
	"github.com/liyiligang/manage/app/request"
)

type Gateway struct {
	Request              	*request.Request
	WebsocketManage 	    Jtool.ConnManage
	RpcManage 				Jtool.ConnManage
}
