// Copyright 2019 The Authors. All rights reserved.
// Author: liyiligang
// Date: 2019/4/13 19:08
// Description:

package mapTest

import (
	"testing"
	"time"
)

var tMap = make(map[int]int)

func writeMap() {
	cnt := 0
	for {
		tMap[cnt] = cnt
	}
}

func readMap() {
	for {
		_ = tMap[1]
	}
}

func TestSyncWeb(t *testing.T) {
	tMap[1] = 1
	//go writeMap()
	//go writeMap()
	//go writeMap()
	//go writeMap()
	//go writeMap()

	//go readMap()
	//go readMap()
	//go readMap()
	//go readMap()
	//go readMap()
	for {
		time.Sleep(1 * time.Second)
	}
}
