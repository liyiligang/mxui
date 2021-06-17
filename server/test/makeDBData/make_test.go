// Copyright 2021 The Authors. All rights reserved.
// Author: liyiligang
// Date: 2021/06/17 9:56
// Description: Batch production DB data for test

package makeDBData

import (
	"github.com/liyiligang/base/component/Jconfig"
	"github.com/liyiligang/base/component/Jlog"
	"github.com/liyiligang/base/component/Jtool"
	"github.com/liyiligang/base/protoFiles/protoManage"
	"github.com/liyiligang/manage/app"
	"github.com/liyiligang/manage/app/typedef/config"
	"github.com/liyiligang/manage/app/typedef/orm"
	"strconv"
	"testing"
)

var appServer *app.App

func TestMake(t *testing.T) {
	InitApp()
	MakeNodeGroupData(10)
	MakeNodeTypeData(10)
}

func InitApp(){
	Jconfig.ReadConfigFromPath(&config.LocalConfig, "")
	var err error
	appServer ,err = app.InitServer()
	if err != nil {
		Jlog.Fatal("初始化失败")
	}
	Jlog.Info("初始化成功")
}

func MakeNodeGroupData(num int){
	for i:=0; i < num; i++ {
		appServer.DBServer.AddNodeGroup(orm.NodeGroup{Name: "节点组" +  strconv.Itoa(i+1)})
	}
}

func MakeNodeTypeData(num int){
	for i:=0; i<=num; i++ {
		appServer.DBServer.AddNodeType(orm.NodeType{Name: "节点类型" +  strconv.Itoa(i+1)})
	}
}

func MakeNodeData(num int, nodeGroupLen int, nodeTypeLen int){
	for i:=0; i<=num; i++ {
		groupID, _ := Jtool.GetRandInt(1, nodeGroupLen)
		typeID, _ := Jtool.GetRandInt(1, nodeTypeLen)
		state, _ := Jtool.GetRandInt(0, 5)
		appServer.DBServer.AddNode(orm.Node{
			Name: "节点类型" +  strconv.Itoa(i+1),
			GroupID: int64(groupID),
			TypeID: int64(typeID),
			State: int32(state),
		})
	}
}

func MakeNodeNotifyData(num int, nodeLen int){
	for j := 0; j<num; j++  {
		nodeID, _ := Jtool.GetRandInt(1, nodeLen)
		state, _ := Jtool.GetRandInt(1, 5)
		appServer.DBServer.AddNodeNotify(orm.NodeNotify{
			SenderID: int64(nodeID),
			SenderType: int64(protoManage.NotifySenderType_NotifySenderTypeNode),
			Message: Jtool.GetRandChinese(1, 60),
			State:int32(state),
		})
	}
}




