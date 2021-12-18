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

package request

import (
	"errors"
	"github.com/liyiligang/base/component/Jtoken"
	"github.com/liyiligang/klee/app/data"
	"github.com/liyiligang/klee/app/protoFiles/protoManage"
	"github.com/liyiligang/klee/app/typedef/config"
)

type Request struct {
	Data              *data.Data
}

type tokenData struct {
	userID 				int64
	userLevel 			protoManage.Level
}

func (request *Request) ParseToken (token string) (*tokenData, error) {
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
	return &tokenData{userID: int64(id), userLevel: protoManage.Level(level)}, nil
}