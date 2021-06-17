// Copyright 2021 The Authors. All rights reserved.
// Author: liyiligang
// Date: 2021/06/17 9:56
// Description: Batch production DB data for test

package makeDBData

import (
	"fmt"
	"github.com/liyiligang/base/component/Jconfig"
	"github.com/liyiligang/manage/app"
	"github.com/liyiligang/manage/app/typedef/config"
	"testing"
)

func InitDB(){
	Jconfig.ReadConfigFromPath(&config.LocalConfig, "")
	app.InitServer()
}

func TestMake(t *testing.T) {
	fmt.Println("aaa")
}


//func (app *App) InitDBData(){
//	startNum := 1
//	//nodeGroupLen := 100
//	//nodeTypeLen := 10
//	//nodeLen := 10000
//	//nodeLinkLen := 10000
//	//nodeFuncLen := 10000
//	//nodeReportLen := 10000
//	//nodeFuncCallLen := 30
//	//nodeReportValLen := 10000
//	nodeNotifyLen := 10000
//
//	//for i:=startNum; i<=nodeGroupLen; i++ {
//	//	app.dbAddNodeGroup(orm.NodeGroup{Base: orm.Base{ID: int64(i)}, Name: "节点组" +  strconv.Itoa(i)})
//	//}
//	//
//	//for i:=startNum; i<=nodeTypeLen; i++ {
//	//	app.dbAddNodeType(orm.NodeType{Base: orm.Base{ID: int64(i)}, Name: "节点类型" +  strconv.Itoa(i)})
//	//}
//	//
//	//for i:=startNum; i<=nodeLen; i++ {
//	//	groupID, _ := Jtool.GetRandInt(startNum, nodeGroupLen)
//	//	typeID, _ := Jtool.GetRandInt(startNum, nodeTypeLen)
//	//	state, _ := Jtool.GetRandInt(0, 5)
//	//	app.dbAddNode(orm.Node{
//	//		Base: orm.Base{ID: int64(i)},
//	//		Name: "节点" +  strconv.Itoa(i),
//	//		GroupID: int64(groupID),
//	//		TypeID: int64(typeID),
//	//		State: int32(state),
//	//	})
//	//}
//	//
//	//for i:=startNum; i<=nodeLinkLen; i++ {
//	//	sourceID, _ := Jtool.GetRandInt(startNum, nodeLen)
//	//	targetID, _ := Jtool.GetRandInt(startNum, nodeLen)
//	//	state, _ := Jtool.GetRandInt(0, 5)
//	//	app.dbAddNodeLink(orm.NodeLink{
//	//		Base: orm.Base{ID: int64(i)},
//	//		SourceID: int64(sourceID),
//	//		TargetID: int64(targetID),
//	//		State: int32(state),
//	//	})
//	//}
//	//
//	//for i:=startNum; i<=nodeFuncLen; i++ {
//	//	nodeID, _ := Jtool.GetRandInt(startNum, nodeLen)
//	//	state, _ := Jtool.GetRandInt(0, 5)
//	//	app.dbAddNodeFunc(orm.NodeFunc{
//	//		Base: orm.Base{ID: int64(i)},
//	//		NodeID: int64(nodeID),
//	//		Name: "节点方法" +  strconv.Itoa(i),
//	//		Func: "func(" +  strconv.Itoa(i) + "){}",
//	//		State: int32(state),
//	//	})
//	//}
//	//
//	//for i:=startNum; i<=nodeReportLen; i++ {
//	//	nodeID, _ := Jtool.GetRandInt(startNum, nodeLen)
//	//	state, _ := Jtool.GetRandInt(0, 5)
//	//	app.dbAddNodeReport(orm.NodeReport{
//	//		Base: orm.Base{ID: int64(i)},
//	//		NodeID: int64(nodeID),
//	//		Name: "节点报告" +  strconv.Itoa(i),
//	//		Flag: "报告标签" +  strconv.Itoa(i),
//	//		State: int32(state),
//	//	})
//	//}
//	//
//	//for i:=startNum; i<=nodeReportLen; i++ {
//	//	nodeID, _ := Jtool.GetRandInt(startNum, nodeLen)
//	//	state, _ := Jtool.GetRandInt(0, 5)
//	//	app.dbAddNodeReport(orm.NodeReport{
//	//		Base: orm.Base{ID: int64(i)},
//	//		NodeID: int64(nodeID),
//	//		Name: "节点报告" +  strconv.Itoa(i),
//	//		Flag: "报告标签" +  strconv.Itoa(i),
//	//		State: int32(state),
//	//	})
//	//}
//
//	//for i:=startNum; i<=nodeReportLen; i++ {
//	//	for j := startNum; j<nodeFuncCallLen; j++  {
//	//		nodeID, _ := Jtool.GetRandInt(startNum, nodeLen)
//	//		state, _ := Jtool.GetRandInt(0, 5)
//	//		app.dbAddNodeReport(orm.NodeReport{
//	//			Base: orm.Base{ID: int64(i)},
//	//			NodeID: int64(nodeID),
//	//			Name: "节点报告" +  strconv.Itoa(i),
//	//			Flag: "报告标签" +  strconv.Itoa(i),
//	//			State: int32(state),
//	//		})
//	//	}
//	//}
//
//	//for i:=startNum; i<=10; i++ {
//	//	for j := startNum; j<nodeReportValLen; j++  {
//	//		value, _ := Jtool.GetRandInt(0, 1000000)
//	//		state, _ := Jtool.GetRandInt(1, 5)
//	//		app.db.AddNodeReportVal(orm.NodeReportVal{
//	//			ReportID: int64(i),
//	//			Value: float64(value/1000),
//	//			State: int32(state),
//	//		})
//	//		timeF, _ := Jtool.GetRandInt(0, 1500)
//	//		time.Sleep(time.Duration(timeF) * time.Millisecond)
//	//	}
//	//}
//
//	for j := startNum; j<nodeNotifyLen; j++  {
//		nodeID, _ := Jtool.GetRandInt(1, 10000)
//		state, _ := Jtool.GetRandInt(1, 5)
//		app.db.AddNodeNotify(orm.NodeNotify{
//			SenderID: int64(nodeID),
//			SenderType: int64(protoManage.NotifySenderType_NotifySenderTypeNode),
//			Message: Jtool.GetRandChinese(1, 60),
//			State:int32(state),
//		})
//		timeF, _ := Jtool.GetRandInt(0, 1500)
//		time.Sleep(time.Duration(timeF) * time.Millisecond)
//	}
//
//	Jlog.Info("数据填充完毕")
//}

//func (app *App) nodeNotifyAddTest(){
//	go func() {
//		for  {
//			nodeID, _ := Jtool.GetRandInt(1, 10000)
//			state, _ := Jtool.GetRandInt(1, 5)
//			app.data.NodeNotifyAdd(&protoManage.NodeNotify{
//				SenderID: int64(nodeID),
//				SenderType: protoManage.NotifySenderType_NotifySenderTypeNode,
//				Message: Jtool.GetRandChinese(2, 20),
//				State: protoManage.State(state),
//			})
//			time.Sleep(2*time.Second)
//		}
//	}()
//}