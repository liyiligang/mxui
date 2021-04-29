// Copyright 2019 The Authors. All rights reserved.
// Author: liyiligang
// Date: 2019/4/26 20:04
// Description: 数据库测试

package dbTest

import (
	"fmt"
	"github.com/liyiligang/base/component/Jorm"
	"github.com/liyiligang/manage/typedef/config"
	"testing"
	"time"
)

type NodeTest struct {
	ID    				uint64  `gorm:"PRIMARY_KEY;AUTO_INCREMENT;NOT NULL;column:id"`
	Name  				string  `gorm:"NOT NULL;"`
	Val  				string  `gorm:"NOT NULL;"`
	UpdatedAt     		time.Time
}

func TestDB(t *testing.T) {
	db, err := Jorm.GormInit(Jorm.OrmInitConfig{
		SqlDsn:      "root:p5KtKI3^@tcp(116.62.58.166:3306)/manage?charset=utf8mb4&parseTime=True&loc=Local",
		MaxKeepConn: 0,
		MaxConn:     2,
		MaxLifetime: time.Duration(20) * time.Second,
	})
	if err != nil {
		fmt.Println("连接数据库" + config.NodeConfig.DB.Name + "失败", "errorBox:", err)
		return
	}
	fmt.Println("数据库服务初始化成功")
	//db.AutoMigrate(&NodeTest{})

	//a := NodeTest{Name: "啊啊11"}
	//fmt.Println("old：", a)
	//db.Create(&a)
	//fmt.Println("new：", a)

	//update
	//b := NodeTest{ID: 200}
	//fmt.Println("old：", b)
	//err = db.Model(&b).Update("Val", "999").Error
	//fmt.Println("new：", b)
	//fmt.Println("error：", err)

	//find
	b := NodeTest{}
	fmt.Println("old：", b)
	err = db.First(&b, 200).Error
	fmt.Println("new：", b)
	fmt.Println("error：", err)
}