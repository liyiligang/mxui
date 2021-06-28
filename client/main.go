// Copyright 2021 The Authors. All rights reserved.
// Author: liyiligang
// Date: 2021/06/18 10:37
// Description: manage client

package main

import (
	"fmt"
	"github.com/liyiligang/manage/client/app"
	"github.com/liyiligang/manage/client/app/protoFiles/protoManage"
	"time"
)

func main() {
	client := app.InitClient()


	err := client.UpdateNodeLink(15, protoManage.State_StateError)
	if err != nil {
		fmt.Println(err)
	}

	err = client.RegisterNodeFunc("临界实验", testFunc)
	if err != nil {
		fmt.Println(err)
	}

	err = client.RegisterNodeReport("临界报告", testReport, 3*time.Second)
	if err != nil {
		fmt.Println(err)
	}

	err = client.SendNodeNotify("临界通知111", protoManage.State_StateWarn)
	if err != nil {
		fmt.Println(err)
	}


	select {}
}

func  testFunc(str string) (string, protoManage.State) {
	return "567890", protoManage.State_StateNormal
}


var testVal = 0.0
func testReport() (float64, protoManage.State) {
	testVal += 1
	return testVal, protoManage.State_StateNormal
}