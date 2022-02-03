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

package main

import (
	"github.com/liyiligang/base/component/Jlog"
	"github.com/liyiligang/mxui/data"
	"github.com/liyiligang/mxui/db"
	"github.com/liyiligang/mxui/gateway"
	"github.com/liyiligang/mxui/request"
	"github.com/robfig/cron/v3"
	"google.golang.org/grpc"
	"net/http"
)

type App struct {
	HttpServer      *http.Server
	RpcServer       *grpc.Server
	DBServer		db.Server
	Timer			*cron.Cron
	Data            data.Data
	Request			request.Request
	Gateway			gateway.Gateway
}

func InitServer() (*App, error) {
	app := App{}
	app.InitConfig()
	app.InitLogServer()
	app.InitSystemDir()
	app.initAppDependency()
	app.InitTimer()
	if err := app.InitBaseServer(); err != nil {
		return nil, err
	}
	Jlog.Info("mxui server is running")
	return &app, nil
}

func (app *App) InitBaseServer() error {
	if err :=  app.InitDBServer(); err != nil {
		return err
	}
	if err := app.InitWebServer(); err != nil {
		return err
	}
	if err := app.InitRpcServer(); err != nil {
		return err
	}
	if err := app.StartTimer(); err != nil {
		return err
	}
	Jlog.Info("all component is start")
	return nil
}

func (app *App) StopBaseServer() error {
	if err := app.StartTimer(); err != nil {
		return err
	}
	if err := app.StopDBServer(); err != nil {
		return err
	}
	if err := app.StopWebServer(); err != nil {
		return err
	}
	if err := app.StopRpcServer(); err != nil {
		return err
	}
	Jlog.Info("all component is stop")
	return nil
}

func (app *App) initAppDependency() {
	app.Data.DB = &app.DBServer
	app.Data.Gateway = &app.Gateway
	app.Request.Data = &app.Data
}

func main() {
	_, err := InitServer()
	if err != nil {
		Jlog.Fatal("mxui server start fail", "error", err)
	}
	select {}
}
