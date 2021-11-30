// Copyright 2021 The Authors. All rights reserved.
// Author: liyiligang
// Date: 2021/11/23 14:55
// Description:

package data

import (
	"github.com/liyiligang/base/component/Jtool"
	"github.com/liyiligang/klee/app/check"
	"github.com/liyiligang/klee/app/protoFiles/protoManage"
	"github.com/liyiligang/klee/app/typedef/config"
	"os"
)

func (data *Data) ReqNodeResourceCheck(protoNodeResource *protoManage.NodeResource) error {
	err := check.NodeFileSizeCheck(protoNodeResource.Sizes)
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

func (data *Data) ReqNodeResourceUpload(req *protoManage.ReqNodeResourceUpload) error {
	//return ioutil.WriteFile(config.LocalConfig.File.SavePath + req.NodeResource.UUID, req.Data, fs.ModePerm)
	return nil
}

func (data *Data) ReqNodeResourceDel(protoNodeResource *protoManage.NodeResource) error {
	filePath := config.LocalConfig.File.SavePath + protoNodeResource.UUID
	if !Jtool.IsFileExist(filePath) {
		return nil
	}
	return os.Remove(filePath)
}
