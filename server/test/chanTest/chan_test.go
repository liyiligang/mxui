// Copyright 2019 The Authors. All rights reserved.
// Author: liyiligang
// Date: 2019/4/26 20:04
// Description: chan测试

package chanTest

import (
	"fmt"
	"sync"
	"testing"
)

type testBB struct {
	val int
}

type testAA struct {
	val int
	bb  *testBB
}

func cc(aa *testAA)  {
	aa.val = 100
	dd(aa.bb, aa)

}

func dd(bb *testBB, aa *testAA)  {
	bb = &testBB{val: 200}
	fmt.Println(aa)
	aa.bb = &testBB{val: 300}
	fmt.Println(aa)
}

var onc sync.Once

func once(){
	onc.Do(func() {
		fmt.Println("aa")
	})
}

func TestFunc(t *testing.T) {
	//for i:=0;i<10; i++ {
	//	once()
	//}

	aa := testAA{val: 11}
	fmt.Println(aa)
	cc(&aa)
}