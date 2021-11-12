// Copyright 2019 The Authors. All rights reserved.
// Author: liyiligang
// Date: 2019/4/6 11:19
// Description: 数据库路由

package orm

import (
	"gorm.io/gorm"
	"time"
)

type Base struct {
	ID    				int64	`gorm:"PRIMARY_KEY;AUTO_INCREMENT;NOT NULL;column:id;"`
	UpdatedAt 			time.Time
}

type Manager struct {
	Base
	Name  				string	`gorm:"NOT NULL; UNIQUE;"`
	Password  			string	`gorm:"NOT NULL;"`
	NickName     		string	`gorm:"UNIQUE;"`
	Token     			string	`gorm:"SIZE:1024;"`
	Setting          	string  `gorm:"NOT NULL;"`
	Level          		int32   `gorm:"NOT NULL;"`
	State				int32 	`gorm:"NOT NULL;"`
}

type TopLink struct {
	Base
	Name  				string	`gorm:"UNIQUE;"`
	Url					string	`gorm:"UNIQUE;"`
	State				int32	`gorm:"NOT NULL;"`
}

type Node struct {
	Base
	Name      			string  `gorm:"NOT NULL; UNIQUE_INDEX:NodeIndex;"`
	State				int32 	`gorm:"NOT NULL;"`
}

type NodeFunc struct {
	Base
	NodeID       		int64	`gorm:"NOT NULL; UNIQUE_INDEX:NodeFuncIndex;"`
	Name 				string	`gorm:"NOT NULL; UNIQUE_INDEX:NodeFuncIndex;"`
	Func     			string	`gorm:"NOT NULL;"`
	Schema     			string	`gorm:"NOT NULL;"`
	Level				int32	`gorm:"NOT NULL;"`
	State				int32	`gorm:"NOT NULL;"`
}

type NodeFuncCall struct {
	Base
	ManagerID          	int64   `gorm:"NOT NULL;"`
	FuncID       		int64	`gorm:"NOT NULL; INDEX:NodeFuncCallIndex;"`
	Parameter  			string	`gorm:"NOT NULL;"`
	ReturnVal 			string	`gorm:"NOT NULL;"`
	ReturnType 			int32	`gorm:"NOT NULL;"`
	State				int32	`gorm:"NOT NULL;"`
}

type NodeReport struct {
	Base
	NodeID       		int64 	`gorm:"NOT NULL; UNIQUE_INDEX:NodeReportIndex;"`
	Name     			string	`gorm:"NOT NULL; UNIQUE_INDEX:NodeReportIndex;"`
	Func     			string	`gorm:"NOT NULL;"`
	Schema     			string	`gorm:"NOT NULL;"`
	Interval			int64	`gorm:"NOT NULL;"`
	Type     			int32	`gorm:"NOT NULL;"`
	Level				int32	`gorm:"NOT NULL;"`
	State				int32	`gorm:"NOT NULL;"`
}

type NodeReportVal struct {
	Base
	ReportID       		int64	`gorm:"NOT NULL; INDEX:NodeReportValIndex;"`
	Value  				string	`gorm:"NOT NULL;"`
	State				int32	`gorm:"NOT NULL;"`
}

type NodeNotify struct {
	Base
	SenderID  			int64	`gorm:"NOT NULL;"`
	SenderType  		int64	`gorm:"NOT NULL;"`
	Message     		string	`gorm:"NOT NULL;"`
	State				int32	`gorm:"NOT NULL;"`
}

func InitOrmTable(db *gorm.DB) {
	db.AutoMigrate(&Manager{})
	db.AutoMigrate(&TopLink{})
	db.AutoMigrate(&Node{})
	db.AutoMigrate(&NodeFunc{})
	db.AutoMigrate(&NodeFuncCall{})
	db.AutoMigrate(&NodeReport{})
	db.AutoMigrate(&NodeReportVal{})
	db.AutoMigrate(&NodeNotify{})
}
