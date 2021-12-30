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

package check

import (
	"github.com/liyiligang/mxrpc/protoFiles/protoManage"
	"github.com/liyiligang/mxrpc/typedef/config"
	"github.com/liyiligang/mxrpc/typedef/constant"
	"github.com/pkg/errors"
	"unicode/utf8"
)

func ManagerAddCheck(protoManager *protoManage.Manager) error {
	if protoManager.NickName == "" {
		return errors.New("nick name must not be empty")
	}
	if protoManager.Name == "" {
		return errors.New("user name must not be empty")
	}
	if protoManager.Password == "" {
		return errors.New("password must not be empty")
	}
	if protoManager.Level == protoManage.Level_LevelNot {
		return errors.New("user level must not be empty")
	}
	return nil
}

func ManagerUpdatePasswordCheck(protoManager *protoManage.Manager) error {
	if protoManager.Token == "" {
		return errors.New("original password must not be empty")
	}
	if protoManager.Password == "" {
		return errors.New("new password password must not be empty")
	}
	if protoManager.Password == protoManager.Token {
		return errors.New("the new password is the same as the original password")
	}
	return nil
}

func TopLinkCheck(protoTopLink *protoManage.TopLink) error {
	if protoTopLink.Name == "" {
		return errors.New("link name must not be empty")
	}
	if protoTopLink.Url == "" {
		return errors.New("link url must not be empty")
	}
	return nil
}

func NodeCheck(protoNode *protoManage.Node) error {
	if protoNode.Name == "" {
		return errors.New("node name must not be empty")
	}
	if utf8.RuneCountInString(protoNode.Name) > constant.ConstStringLimitMaxLength {
		return errors.New("node name is too long")
	}
	return nil
}

func NodeFuncCheck(protoNodeFunc *protoManage.NodeFunc) error {
	if protoNodeFunc.NodeID == 0 {
		return errors.New("node id must not be empty")
	}
	if protoNodeFunc.Name == "" {
		return errors.New("node function name must not be empty")
	}
	if protoNodeFunc.Func == "" {
		return errors.New("node function must not be empty")
	}
	if utf8.RuneCountInString(protoNodeFunc.Name) > constant.ConstStringLimitMaxLength {
		return errors.New("node function name is too long")
	}
	if utf8.RuneCountInString(protoNodeFunc.Func) > constant.ConstStringLimitMaxLength {
		return errors.New("node function is too long")
	}
	return nil
}

func NodeReportCheck(protoNodeReport *protoManage.NodeReport) error {
	if protoNodeReport.NodeID == 0 {
		return errors.New("node id must not be empty")
	}
	if protoNodeReport.Name == "" {
		return errors.New("node report name must not be empty")
	}
	if protoNodeReport.Func == "" {
		return errors.New("node report function must not be empty")
	}
	if utf8.RuneCountInString(protoNodeReport.Name) > constant.ConstStringLimitMaxLength {
		return errors.New("node report name is too long")
	}
	if utf8.RuneCountInString(protoNodeReport.Func) > constant.ConstStringLimitMaxLength {
		return errors.New("node report function is too long")
	}
	return nil
}

func NodeNotifyCheck(protoNodeNotify *protoManage.NodeNotify) error {
	if protoNodeNotify.SenderID == 0 {
		return errors.New("node notify sender id must not be empty")
	}
	return nil
}

func NodeResourceSizeCheck(size int64) error {
	if (size/(1024*1024)) > int64(config.LocalConfig.File.MaxSize) {
		return errors.New("node resource is too large")
	}
	return nil
}



