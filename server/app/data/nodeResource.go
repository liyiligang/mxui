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
	"github.com/liyiligang/klee/app/typedef/constant"
	"os"
)

func (data *Data) ReqNodeResourceCheck(protoNodeReport *protoManage.NodeResourceCache) error {
	err := check.NodeFileSizeCheck(protoNodeReport.FileSize)
	if err != nil {
		return err
	}
	filePath := config.LocalConfig.File.SavePath + protoNodeReport.Name
	if !Jtool.IsFileExist(filePath) {
		return nil
	}
	protoNodeReport.Url = constant.ConstHttpDownload + protoNodeReport.Name
	return nil
}

func (data *Data) ReqNodeResourceDel(protoNodeReport *protoManage.NodeResourceCache) error {
	filePath := config.LocalConfig.File.SavePath + protoNodeReport.Name
	return os.Remove(filePath)
}
