/*
 * Copyright 2021 liyiligang.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

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

type NodeResource struct {
	Base
	Name				string		`gorm:"NOT NULL;"`
	Md5					string		`gorm:"NOT NULL;"`
	Sizes				int64		`gorm:"NOT NULL;"`
	Type				int64		`gorm:"NOT NULL;"`
	UploaderID  		int64		`gorm:"NOT NULL;"`
	UploaderType  		int64		`gorm:"NOT NULL;"`
	DownLoadCnt			int32		`gorm:"NOT NULL;"`
	InvalidTime     	time.Time	`gorm:"NOT NULL;"`
}

type NodeNotify struct {
	Base
	SenderID  			int64	`gorm:"NOT NULL;"`
	SenderType  		int64	`gorm:"NOT NULL;"`
	Message     		string	`gorm:"NOT NULL;"`
	State				int32	`gorm:"NOT NULL;"`
}

func InitOrmTable(db *gorm.DB) error {
	if err := db.AutoMigrate(&Manager{}); err != nil {
		return err
	}
	if err := db.AutoMigrate(&TopLink{}); err != nil {
		return err
	}
	if err := db.AutoMigrate(&Node{}); err != nil {
		return err
	}
	if err := db.AutoMigrate(&NodeFunc{}); err != nil {
		return err
	}
	if err := db.AutoMigrate(&NodeFuncCall{}); err != nil {
		return err
	}
	if err := db.AutoMigrate(&NodeReport{}); err != nil {
		return err
	}
	if err := db.AutoMigrate(&NodeReportVal{}); err != nil {
		return err
	}
	if err := db.AutoMigrate(&NodeResource{}); err != nil {
		return err
	}
	if err := db.AutoMigrate(&NodeNotify{}); err != nil {
		return err
	}
	return nil
}
