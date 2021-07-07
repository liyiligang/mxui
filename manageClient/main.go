// Copyright 2021 The Authors. All rights reserved.
// Author: liyiligang
// Date: 2021/06/18 10:37
// Description: manage client

package main

import (
	"fmt"
	"time"
)

var manageClient *ManageClient

func main() {
	var err error
	manageClient, err = initClient()
	if err !=nil {
		fmt.Println("连接失败: ", err)
		return
	}

	err = manageClient.UpdateNodeLink(15, NodeLinkStateConnected)
	if err != nil {
		fmt.Println(err)
	}

	err = manageClient.RegisterNodeFunc("临界实验", testFunc, NodeFuncLevelVisitor)
	if err != nil {
		fmt.Println(err)
	}

	err = manageClient.RegisterNodeReport("临界报告22", testReport, 3*time.Second, NodeReportLevelVisitor)
	if err != nil {
		fmt.Println(err)
	}

	err = manageClient.SendNodeNotify("临界通知111", NodeNotifyLevelWarn)
	if err != nil {
		fmt.Println(err)
	}

	fmt.Println("启动成功")
	select {}
}


func initClient() (*ManageClient, error) {
	c, err := InitManageClient(ManageClientConfig{
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
func testFunc(str string) (string, NodeFuncCallLevel) {
	testFuncVal++
	if testFuncVal >= 5 {
		testFuncVal = 2
	}
	manageClient.UpdateNode(NodeState(testFuncVal))
	manageClient.UpdateNodeLink(15, NodeLinkState(testFuncVal))
	return "567890", NodeFuncCallLevelLevelSuccess
}


var testVal = 0.0
func testReport() (float64, NodeReportValLevel) {
	testVal += 1
	return testVal, NodeReportValLevelNormal
}