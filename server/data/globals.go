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

package data

import (
	"errors"
	"github.com/liyiligang/base/component/Jtoken"
	"github.com/liyiligang/mxui/db"
	"github.com/liyiligang/mxui/gateway"
	"github.com/liyiligang/mxui/protoFiles/protoManage"
	"github.com/liyiligang/mxui/typedef/config"
	"github.com/liyiligang/mxui/typedef/orm"
)

type Data struct {
	DB				*db.Server
	Gateway			*gateway.Gateway
}

type TokenData struct {
	UserID 				int64
	UserLevel 			protoManage.Level
}

func (data *Data) FindSystemInfo(info *protoManage.ReqSystemInitInfo) (*protoManage.AnsSystemInitInfo, error) {
	ans := &protoManage.AnsSystemInitInfo{}
	ormBase, err := data.DB.FindManagerByLevel(orm.Manager{Level: int32(protoManage.Level_LevelSuper)})
	if err != nil {
		return nil, err
	}
	ans.SystemInit = ormBase.ID != 0
	ans.OpenRegister = config.LocalConfig.User.OpenRegister
	return ans, nil
}

func (data *Data) ParseToken (token string) (*TokenData, error) {
	claims, err := Jtoken.ParseToken(token, config.LocalConfig.Token.Key)
	if err != nil {
		return nil, err
	}
	jtiVal, ok := claims["jti"]
	if !ok {
		return nil, errors.New("id is not found in claims map")
	}
	id, ok := jtiVal.(float64)
	if !ok {
		return nil, errors.New("userID assert fail with float64")
	}
	levelVal, ok := claims["level"]
	if !ok {
		return nil, errors.New("level is not found in claims map")
	}
	level, ok := levelVal.(float64)
	if !ok {
		return nil, errors.New("level assert fail with float64")
	}
	return &TokenData{UserID: int64(id), UserLevel: protoManage.Level(level)}, nil
}