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
	"github.com/liyiligang/base/component/Jtool"
	"github.com/liyiligang/mxrpc/check"
	"github.com/liyiligang/mxrpc/protoFiles/protoManage"
	"github.com/liyiligang/mxrpc/typedef/config"
	"os"
)

func (data *Data) ReqNodeResourceCheck(protoNodeResource *protoManage.NodeResource) error {
	err := check.NodeResourceSizeCheck(protoNodeResource.Sizes)
	if err != nil {
		return err
	}
	filePath := config.LocalConfig.File.SavePath + protoNodeResource.UUID
	if !Jtool.IsFileExist(filePath) {
		return nil
	}
	protoNodeResource.IsExist = true
	return nil
}

func (data *Data) ReqNodeResourceDel(protoNodeResource *protoManage.NodeResource) error {
	filePath := config.LocalConfig.File.SavePath + protoNodeResource.UUID
	if !Jtool.IsFileExist(filePath) {
		return nil
	}
	return os.Remove(filePath)
}
