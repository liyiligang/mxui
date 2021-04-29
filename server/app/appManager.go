// Copyright 2019 The Authors. All rights reserved.
// Author: liyiligang
// Date: 2019/10/10 21:25
// Description: 管理员事务

package app

import (
	"errors"
	"github.com/liyiligang/base/component/Jtoken"
	"github.com/liyiligang/base/component/Jtool"
	"github.com/liyiligang/base/protoFiles/protoManage"
	"github.com/liyiligang/manage/typedef/config"
)

//管理员登录
func (app *App) reqWsTokenCheck(message []byte, addr string) (int64, error) {
	message = Jtool.RunesToBytes(message)
	manager := protoManage.Manager{}
	err := manager.Unmarshal(message)
	if err != nil {
		return 0, err
	}
	userID, err := Jtoken.ParseToken(manager.Token, config.NodeConfig.Token.Key)
	if err != nil {
		return 0, errors.New("消息通知功能异常: websocket连接验证失败")
	}
	return userID, nil
}

//管理员登录
func (app *App) reqManagerLogin(userID int64, message []byte)([]byte, error){
	req := protoManage.Manager{}
	err := req.Unmarshal(message)
	if err != nil {
		return nil, err
	}
	err = app.ManagerLogin(&req)
	if err != nil {
		return nil, err
	}
	pbByte, err := req.Marshal()
	if err != nil {
		return nil, err
	}
	return pbByte, err
}

//管理员信息查询
func (app *App) reqManagerFind(userID int64, message []byte)([]byte, error){
	req := protoManage.ReqManagerList{}
	err := req.Unmarshal(message)
	if err != nil {
		return nil, err
	}
	ans, err := app.ManagerFind(req)
	if err != nil {
		return nil, err
	}
	pbByte, err := ans.Marshal()
	if err != nil {
		return nil, err
	}
	return pbByte, err
}