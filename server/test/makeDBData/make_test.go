/*
 * Copyright 2021 liyiligang.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package makeDBData

import (
	"github.com/liyiligang/base/component/Jlog"
	"github.com/liyiligang/base/component/Jtool"
	"github.com/liyiligang/mxui"
	"github.com/liyiligang/mxui/protoFiles/protoManage"
	"github.com/liyiligang/mxui/typedef/orm"
	"strconv"
	"testing"
)

var appServer *main.App

func init() {
	InitApp()
}

func TestMake(t *testing.T) {
	MakeNodeNotifyData(200, 200)
}

func InitApp(){
	var err error
	appServer, err = main.InitServer()
	if err != nil {
		Jlog.Fatal("server init fail", "error", err)
	}
	Jlog.Info("server init success")
}

func MakeNodeData(num int, nodeGroupLen int, nodeTypeLen int){
	for i:=0; i<=num; i++ {
		state, _ := Jtool.GetRandInt(0, 5)
		_ = appServer.DBServer.AddNode(&orm.Node{
			Name:  "node" + strconv.Itoa(i+1),
			State: int32(state),
		})
	}
}

func MakeNodeNotifyData(num int, nodeLen int){
	for j := 0; j<num; j++  {
		nodeID, _ := Jtool.GetRandInt(1, nodeLen)
		state, _ := Jtool.GetRandInt(1, 5)
		_ = appServer.DBServer.AddNodeNotify(orm.NodeNotify{
			SenderID:   int64(nodeID),
			SenderType: int64(protoManage.NotifySenderType_NotifySenderTypeNode),
			Message:    Jtool.GetRandChinese(1, 60),
			State:      int32(state),
		})
	}
}




