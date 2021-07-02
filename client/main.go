// Copyright 2021 The Authors. All rights reserved.
// Author: liyiligang
// Date: 2021/06/18 10:37
// Description: manage client

package main

import (
	"fmt"
	"github.com/liyiligang/manage/client/app"
	"time"
)

var manageClient *app.ManageClient

func main() {
	var err error
	manageClient, err = initClient()
	if err !=nil {
		fmt.Println("连接失败: ", err)
		return
	}

	err = manageClient.UpdateNodeLink(15, app.NodeLinkStateConnected)
	if err != nil {
		fmt.Println(err)
	}

	err = manageClient.RegisterNodeFunc("临界实验", testFunc, app.NodeFuncLevelVisitor)
	if err != nil {
		fmt.Println(err)
	}

	err = manageClient.RegisterNodeReport("临界报告", testReport, 3*time.Second, app.NodeReportLevelVisitor)
	if err != nil {
		fmt.Println(err)
	}

	err = manageClient.SendNodeNotify("临界通知111", app.NodeNotifyLevelWarn)
	if err != nil {
		fmt.Println(err)
	}

	fmt.Println("启动成功")
	select {}
}


func initClient() (*app.ManageClient, error) {
	c, err := app.InitManageClient(app.ManageClientConfig{
		Addr:":888",
		PublicKeyPath:"../store/cert/grpc/ca_cert.pem",
		CertName: "x.test.example.com",
		NodeGroupName: "测试集群",
		NodeTypeName: "测试类型",
		NodeName: "测试节点",
		ConnectTimeOut: time.Second * 5,
		RequestTimeOut: time.Second * 5,
		KeepaliveTime: time.Second * 1,
		ErrorCall: errorCall,
	})
	if err != nil {
		return nil, err
	}
	return c, nil
}

func errorCall(text string, err error) {
	fmt.Println("rpc 错误：", text, err)
}

var testFuncVal = 2
func testFunc(str string) (string, app.NodeFuncCallLevel) {
	testFuncVal++
	if testFuncVal >= 5 {
		testFuncVal = 2
	}
	manageClient.UpdateNode(app.NodeState(testFuncVal))
	manageClient.UpdateNodeLink(15, app.NodeLinkState(testFuncVal))
	return "567890", app.NodeFuncCallLevelLevelSuccess
}


var testVal = 0.0
func testReport() (float64, app.NodeReportValLevel) {
	testVal += 1
	return testVal, app.NodeReportValLevelNormal
}