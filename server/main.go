package main

import (
	"github.com/jinyun/base/component/Jconfig"
	"manageServer/app"
	"manageServer/typedef/config"
	"os"
)

func main() {
	configPath := ""
	if len(os.Args) > 1 {
		configPath = os.Args[1]
	}
	Jconfig.ReadConfigFromPath(&config.LocalConfig, configPath)
	app.InitManageServer()
	select {}
}
