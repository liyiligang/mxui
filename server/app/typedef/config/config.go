// Copyright 2019 The Authors. All rights reserved.
// Author: liyiligang
// Date: 2020/1/21 17:13
// Description:

package config

var LocalConfig Local
var LogConfig Log
var DBConfig DB
var GrpcCert Cert
var HttpCert Cert
var WebSocketConfig WebSocket
var NodeConfig Node


type Local struct {
	Debug bool `toml:"Debug"`
	Node  struct {
		NodeGroup string `toml:"NodeGroup"`
		NodeName  string `toml:"NodeName"`
	} `toml:"Node"`
	Etcd struct {
		EtcdAddr        string `toml:"EtcdAddr"`
		ConnectWaitTime int    `toml:"ConnectWaitTime"`
		RequestTimeout  int    `toml:"RequestTimeout"`
		ConfigKey       struct {
			Log      string `toml:"Log"`
			DB       string `toml:"DB"`
			GrpcCert string `toml:"GrpcCert"`
			HTTPCert string `toml:"HttpCert"`
			Node     string `toml:"Node"`
		} `toml:"ConfigKey"`
	} `toml:"Etcd"`
}

type Log struct {
	Zap struct {
		Path    string `toml:"Path"`
		MaxSize int    `toml:"MaxSize"`
		MaxNum  int    `toml:"MaxNum"`
		MaxAge  int    `toml:"MaxAge"`
	} `toml:"Zap"`
}

type DB struct {
	Mysql struct {
		Account     string `toml:"Account"`
		Set         string `toml:"Set"`
		MaxConn     int    `toml:"MaxConn"`
		MaxKeepConn int    `toml:"MaxKeepConn"`
		MaxLifeTime int    `toml:"MaxLifeTime"`
	} `toml:"Mysql"`
}

type Cert struct {
	Key struct {
		PublicKeyByte  string `toml:"PublicKeyByte"`
		PrivateKeyByte string `toml:"PrivateKeyByte"`
	} `toml:"Key"`
}


type WebSocket struct {
	WebSocket struct {
		ReadWaitTime  int `toml:"ReadWaitTime"`
		WriteWaitTime int `toml:"WriteWaitTime"`
		PingWaitTime  int `toml:"PingWaitTime"`
		PongWaitTime  int `toml:"PongWaitTime"`
	} `toml:"WebSocket"`
}

type Node struct {
	Grpc struct {
		ListenAddr string `toml:"ListenAddr"`
	} `toml:"Grpc"`
	HTTP struct {
		UseHTTPS     bool   `toml:"UseHttps"`
		ListenAddr   string `toml:"ListenAddr"`
		RedirectAddr string `toml:"RedirectAddr"`
	} `toml:"Http"`
	Web struct {
		ManagePath string `toml:"ManagePath"`
	} `toml:"Web"`
	DB struct {
		Name string `toml:"Name"`
	} `toml:"DB"`
	IP struct {
		PublicIP  string `toml:"PublicIP"`
		PrivateIP string `toml:"PrivateIP"`
	} `toml:"IP"`
	Token struct {
		Key           string `toml:"Key"`
		StartDuration int    `toml:"StartDuration"`
		StopDuration  int    `toml:"StopDuration"`
	} `toml:"Token"`
}
