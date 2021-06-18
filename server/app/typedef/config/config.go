// Copyright 2019 The Authors. All rights reserved.
// Author: liyiligang
// Date: 2020/1/21 17:13
// Description:

package config

var LocalConfig Config

type Config struct {
	Debug bool `toml:"Debug"`
	Node  struct {
		NodeGroup string `toml:"NodeGroup"`
		NodeName  string `toml:"NodeName"`
	} `toml:"Node"`
	Log struct {
		Path    string `toml:"Path"`
		MaxSize int    `toml:"MaxSize"`
		MaxNum  int    `toml:"MaxNum"`
		MaxAge  int    `toml:"MaxAge"`
	} `toml:"Log"`
	Token struct {
		Key           string `toml:"Key"`
		StartDuration int    `toml:"StartDuration"`
		StopDuration  int    `toml:"StopDuration"`
	} `toml:"Token"`
	IP struct {
		PublicIP  string `toml:"PublicIP"`
		PrivateIP string `toml:"PrivateIP"`
	} `toml:"IP"`
	DB struct {
		Name        string `toml:"Name"`
		Account     string `toml:"Account"`
		Set         string `toml:"Set"`
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
		UseHTTPS   bool   `toml:"UseHttps"`
		ListenAddr string `toml:"ListenAddr"`
		HTTPS      struct {
			RedirectAddr   string `toml:"RedirectAddr"`
			PublicKeyPath  string `toml:"PublicKeyPath"`
			PrivateKeyPath string `toml:"PrivateKeyPath"`
		} `toml:"Https"`
		WebSocket struct {
			ReadWaitTime  int `toml:"ReadWaitTime"`
			WriteWaitTime int `toml:"WriteWaitTime"`
			PingWaitTime  int `toml:"PingWaitTime"`
			PongWaitTime  int `toml:"PongWaitTime"`
		} `toml:"WebSocket"`
		StaticFiles struct {
			WebManagePath string `toml:"WebManagePath"`
		} `toml:"StaticFiles"`
	} `toml:"Http"`
	Etcd struct {
		EtcdAddr        string `toml:"EtcdAddr"`
		ConnectWaitTime int    `toml:"ConnectWaitTime"`
		RequestTimeout  int    `toml:"RequestTimeout"`
	} `toml:"Etcd"`
}
