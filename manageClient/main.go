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
	//example
	//link
	var err error
	manageClient, err = initClient()
	if err !=nil {
		fmt.Println("link error: ", err)
		return
	}

	//node link
	err = manageClient.UpdateNodeLink(15, NodeLinkStateConnected)
	if err != nil {
		fmt.Println(err)
	}

	//node func
	err = manageClient.RegisterNodeFunc("testFunc", testFunc, NodeFuncLevelVisitor)
	if err != nil {
		fmt.Println(err)
	}

	//node report
	err = manageClient.RegisterNodeReport("testReport", testReport, 3*time.Second, NodeReportLevelVisitor)
	if err != nil {
		fmt.Println(err)
	}

	//node report manual update
	err = manageClient.UpdateReportVal("testReport", 1, NodeReportValLevelNormal)
	if err != nil {
		fmt.Println(err)
	}

	//node notify
	err = manageClient.SendNodeNotify("testNotify", NodeNotifyLevelWarn)
	if err != nil {
		fmt.Println(err)
	}

	select {}
}


func initClient() (*ManageClient, error) {
	c, err := InitManageClient(ManageClientConfig{
		Addr:":888",
		PublicKeyPath:"../store/cert/grpc/ca_cert.pem",
		CertName: "x.test.example.com",
		NodeGroupName: "TestGroup",
		NodeTypeName: "TestType",
		NodeName: "TestNode",
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
	fmt.Println("rpc error: ", text, err)
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