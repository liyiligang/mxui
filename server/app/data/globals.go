package data

import (
	"github.com/liyiligang/manage/app/db"
	"github.com/liyiligang/manage/app/gateway"
)

type Data struct {
	DB				*db.Server
	Gateway			*gateway.Gateway
}

