// Copyright 2021 The Authors. All rights reserved.
// Author: liyiligang
// Date: 2021/06/18 10:37
// Description: manage client

package main

import "github.com/liyiligang/manage/client/app"

func main() {
	app.InitClient()
	select {}
}