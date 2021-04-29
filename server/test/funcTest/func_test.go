// Copyright 2019 The Authors. All rights reserved.
// Author: liyiligang
// Date: 2019/4/26 20:04
// Description: 方法测试

package funcTest

import (
	"fmt"
	"reflect"
	"runtime"
	"strings"
	"testing"
)

func GetFunctionName(i interface{}, seps ...rune) string {
	// 获取函数名称
	fn := runtime.FuncForPC(reflect.ValueOf(i).Pointer()).Name()

	// 用 seps 进行分割
	fields := strings.FieldsFunc(fn, func(sep rune) bool {
		for _, s := range seps {
			if sep == s {
				return true
			}
		}
		return false
	})

	// fmt.Println(fields)

	if size := len(fields); size > 0 {
		return fields[size-1]
	}
	return ""
}

func getName(f func()) {
	name := runtime.FuncForPC(reflect.ValueOf(f).Pointer()).Name()
	name = strings.TrimSuffix(name, "-fm")
	fmt.Println(name)
}

func myName111() {

}

func nonono() {

}

type aa111Type struct {

}

func (a *aa111Type) aaPtr() {

}

func (a aa111Type) aa() {

}

func TestFunc(t *testing.T) {
	getName(myName111)
	getName(nonono)
	at := aa111Type{}
	getName(at.aaPtr)
	getName(at.aa)
}