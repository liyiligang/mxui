package db

import (
	"gorm.io/gorm"
)

type Server struct {
	Gorm              *gorm.DB
}

func (db *Server) spliceSql(sql string, count int, c string) string {
	str := ""
	for i :=0; i < count; i++ {
		str += sql
		if i < count-1 {
			str += " "+ c + " "
		}
	}
	return str
}

