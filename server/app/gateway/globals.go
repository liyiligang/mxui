package gateway

import (
	"github.com/liyiligang/base/component/Jtool"
)

type Gateway struct {
	WebsocketManage 	    Jtool.ConnManage
	RpcManage 				Jtool.ConnManage
}
