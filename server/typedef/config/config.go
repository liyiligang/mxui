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

package config

var LocalConfig Config

type Config struct {
	Debug bool `toml:"Debug"`
	User  struct {
		OpenRegister bool `toml:"OpenRegister"`
	} `toml:"User"`
	Node struct {
		NodeName string `toml:"NodeName"`
		Report   struct {
			MaxAge int `toml:"MaxAge"`
		} `toml:"Report"`
	} `toml:"Node"`
	File struct {
		SavePath string `toml:"SavePath"`
		MaxSize  int    `toml:"MaxSize"`
		MaxAge   int    `toml:"MaxAge"`
	} `toml:"File"`
	Log struct {
		Path    string `toml:"Path"`
		Level   string `toml:"Level"`
		MaxSize int    `toml:"MaxSize"`
		MaxNum  int    `toml:"MaxNum"`
		MaxAge  int    `toml:"MaxAge"`
	} `toml:"Log"`
	Token struct {
		Key           string `toml:"Key"`
		StartDuration int    `toml:"StartDuration"`
		StopDuration  int    `toml:"StopDuration"`
	} `toml:"Token"`
	Db struct {
		ShowLog     bool   `toml:"ShowLog"`
		Name        string `toml:"Name"`
		Connect     string `toml:"Connect"`
		MaxConn     int    `toml:"MaxConn"`
		MaxKeepConn int    `toml:"MaxKeepConn"`
		MaxLifeTime int    `toml:"MaxLifeTime"`
	} `toml:"DB"`
	Grpc struct {
		ListenAddr     string `toml:"ListenAddr"`
		PublicKeyPath  string `toml:"PublicKeyPath"`
		PrivateKeyPath string `toml:"PrivateKeyPath"`
	} `toml:"Grpc"`
	HTTP struct {
		ShowLog        bool   `toml:"ShowLog"`
		ListenAddr     string `toml:"ListenAddr"`
		PublicKeyPath  string `toml:"PublicKeyPath"`
		PrivateKeyPath string `toml:"PrivateKeyPath"`
		WebSocket      struct {
			ReadWaitTime  int `toml:"ReadWaitTime"`
			WriteWaitTime int `toml:"WriteWaitTime"`
			PingWaitTime  int `toml:"PingWaitTime"`
			PongWaitTime  int `toml:"PongWaitTime"`
		} `toml:"WebSocket"`
		Files struct {
			Web string `toml:"Web"`
		} `toml:"Files"`
	} `toml:"Http"`
}