package main

import (
	"github.com/liyiligang/base/component/Jconfig"
	"github.com/liyiligang/manage/app"
	"github.com/liyiligang/manage/app/typedef/config"
	"os"
)

func main() {
	configPath := ""
	if len(os.Args) > 1 {
		configPath = os.Args[1]
	}
	Jconfig.ReadConfigFromPath(&config.LocalConfig, configPath)
	app.InitServer()
	select {}
}
