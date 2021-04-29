// Copyright 2019 The Authors. All rights reserved.
// Author: liyiligang
// Date: 2019/4/26 20:04
// Description: 闭包性能测试

package closureTest

import (
	"testing"
)

type stClTest struct {
	name  string
	id    int
	stype int
	ip    string
}

func BenchmarkClosure(b *testing.B) {
	//k:=0
	//closure:=func(){		//2000000000    1.72 ns/op
	//	k++
	//}

	l := stClTest{
		name:  "aaa",
		id:    66,
		stype: 99,
		ip:    "192.168.1.1",
	}

	for i := 0; i < b.N; i++ {
		//s:="asdasadasfrjsodkjflksdjfeurfioaflkzx"
		//add(&i)
		//closure()
		//addStr(s)
		//addPstr(&s)

		addStruct(l)
		//addPstruct(&l)
	}
}

//2000000000	0.33 ns/op
func add(i *int) {
	a := *i
	a++
}

//2000000000	         0.33 ns/op
func addStr(i string) {
	i = "errorBox"
}

//2000000000	         0.33 ns/op
func addPstr(i *string) {
	*i = "errorBox"
}

func addStruct(i stClTest) {
	s := i
	s.name = "errorBox"
}

//2000000000	         0.33 ns/op
func addPstruct(i *stClTest) {
	s := i
	s.name = "errorBox"
}
