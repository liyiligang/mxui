package data

import (
	"github.com/liyiligang/klee/app/db"
	"github.com/liyiligang/klee/app/gateway"
)

type Data struct {
	DB				*db.Server
	Gateway			*gateway.Gateway
}

