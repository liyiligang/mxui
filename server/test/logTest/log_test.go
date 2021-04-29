// Copyright 2019 The Authors. All rights reserved.
// Author: liyiligang
// Date: 2019/4/1 18:30
// Description: 日志服务性能测试

package logTest

import (
	"github.com/liyiligang/base/component/Jlog"
	"testing"
)

func init() {
	//Jlog.LogInit(Jlog.LogInitConfig{"一号机", false, "../../Jlog/manage.Jlog"})
}

//测试结果
// 1000000次
// 6501 ns/op
func BenchmarkLog(b *testing.B) {
	b.N = 1000000
	for i := 0; i < b.N; i++ { //use b.N for looping
		Jlog.Info("日志服务性能测试", "cnt:", i)
	}
}
