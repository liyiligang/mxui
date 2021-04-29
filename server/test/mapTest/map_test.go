// Copyright 2019 The Authors. All rights reserved.
// Author: liyiligang
// Date: 2019/4/1 18:51
// Description: web服务性能测试

package mapTest

import (
	"github.com/cornelk/hashmap"
	cmap "github.com/orcaman/concurrent-map"
	"sync"
	"testing"
)

func init() {

}

type mux struct {
	userID int
	mute   sync.Mutex
}

func (m *mux) Write(val int) {
	m.mute.Lock()
	m.userID = val
	m.mute.Unlock()
}

func (m *mux) Read() int {
	m.mute.Lock()
	a := m.userID
	m.mute.Unlock()
	return a
}

//测试结果
// 1000000次
func BenchmarkWeb(b *testing.B) {
	//b.N = 1000000
	a := make(map[string]int)
	a["kkkkk"] = 1
	a["kkkk"] = 2
	a["kkk"] = 3
	a["kk"] = 4
	a["k"] = 5

	var scene sync.Map
	scene.Store("kkkkk", 1)
	scene.Store("kkkk", 2)
	scene.Store("kkk", 3)
	scene.Store("kk", 4)
	scene.Store("k", 5)

	var sceneI sync.Map
	sceneI.Store(11111, 1)
	sceneI.Store(1111, 2)
	sceneI.Store(111, 3)
	sceneI.Store(11, 4)
	sceneI.Store(1, 5)

	m := cmap.New()
	m.Set("kkkkk", 1)
	m.Set("kkkk", 2)
	m.Set("kkk", 3)
	m.Set("kk", 4)
	m.Set("k", 5)

	h := &hashmap.HashMap{}
	h.Set("kkkkk", 1)
	h.Set("kkkk", 2)
	h.Set("kkk", 3)
	h.Set("kk", 4)
	h.Set("k", 5)

	hi := &hashmap.HashMap{}
	hi.Set(11111, 1)
	hi.Set(1111, 2)
	hi.Set(111, 3)
	hi.Set(11, 4)
	hi.Set(1, 5)

	//mute
	mute := mux{}
	mute.Write(111)

	//atomic
	var at int32 = 1

	for i := 0; i < b.N; i++ { //use b.N for looping
		//a["lllll"] = 1				//19.1
		//scene.Store("lllll",1)		//113
		//sceneI.Store(22222,1)			//109
		//m.Set("lllll", 1)				//55
		//h.Set("lllll", 1) 			//132
		//hi.Set(22222, 1)				//132

		//_=a["kk"]
		//scene.Load("kk")
		//a,_:=m.Get("kk")
		//_=a.(int)
		//h.Get("kk")

		//hi.Get(11)
		//sceneI.Load(11)

		//mute
		//mute.Write(111)		//34.8
		//mute.Read()			//16.6

		_ = int(at) //0.65
		//atomic.StoreInt32(&at, int32(10))	//5.85
		//_=int(atomic.LoadInt32(&at))	//0.33 ns
	}
}
