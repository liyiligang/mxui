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
	"github.com/liyiligang/base/component/Jlog"
	"github.com/liyiligang/base/component/Jtool"
	"github.com/liyiligang/mxui/check"
	"github.com/liyiligang/mxui/convert"
	"github.com/liyiligang/mxui/protoFiles/protoManage"
	"github.com/liyiligang/mxui/typedef/config"
	"github.com/liyiligang/mxui/typedef/orm"
	"gorm.io/gorm"
	"os"
	"time"
)

func (data *Data) ReqNodeResourceCheck(protoNodeResource *protoManage.NodeResource) error {
	err := check.NodeResourceSizeCheck(protoNodeResource.Sizes)
	if err != nil {
		return err
	}
	filePath := config.LocalConfig.File.SavePath + protoNodeResource.Md5
	if Jtool.IsFileExist(filePath) {
		err := data.ReqNodeResourceAdd(protoNodeResource)
		if err != nil {
			return err
		}
	}
	return nil
}

func (data *Data) ReqNodeResourceAdd(protoNodeResource *protoManage.NodeResource) error {
	if protoNodeResource.UploaderType == protoManage.NotifySenderType_NotifySenderTypeNode {
		node := protoManage.Node{Base: protoManage.Base{ID: protoNodeResource.UploaderID}}
		err := data.NodeFindByID(&node)
		if err != nil {
			return err
		}
		protoNodeResource.UploaderName = node.Name
	}else if protoNodeResource.UploaderType == protoManage.NotifySenderType_NotifySenderTypeUser{
		manager := protoManage.Manager{}
		err := data.ManagerFindByID(protoNodeResource.UploaderID, &manager)
		if err != nil {
			return err
		}
		protoNodeResource.UploaderName = manager.NickName
	}
	ormNodeResource := &orm.NodeResource{
		Name: protoNodeResource.Name,
		Md5:protoNodeResource.Md5,
		Sizes:protoNodeResource.Sizes,
		Type:int64(protoNodeResource.Type),
		UploaderID:protoNodeResource.UploaderID,
		UploaderName: protoNodeResource.UploaderName,
		UploaderType:int64(protoNodeResource.UploaderType),
		UploadTime:time.Now(),
		State: int32(protoManage.State_StateNormal),
	}
	err := data.DB.AddNodeResource(ormNodeResource)
	if err != nil {
		return err
	}
	convert.OrmNodeResourceToProtoNodeResource(ormNodeResource, protoNodeResource)
	return nil
}

func (data *Data) ReqNodeResourceInvalid(protoNodeResource *protoManage.NodeResource) error {
	return data.DB.UpdateNodeResourceState(&orm.NodeResource{
		Base: orm.Base{ID: protoNodeResource.Base.ID},
		State:int32(protoManage.State_StateWarn),
	})
}

func (data *Data) NodeResourceDelWithTimer() error {
	if config.LocalConfig.File.MaxAge > 0 {
		nodeResourceList, err := data.DB.FindNodeResourceWithInvalid()
		if err != nil {
			return err
		}
		for _, nodeResource := range nodeResourceList {
			err = data.ReqNodeResourceDel(&protoManage.NodeResource{
				Base: protoManage.Base{ID: nodeResource.ID},
			})
			if err != nil {
				Jlog.Warn("del invalid resource fail", "error", err)
			}
		}
	}
	return nil
}

func (data *Data) ReqNodeResourceDel(protoNodeResource *protoManage.NodeResource) error {
	err := data.ReqNodeResourceInvalid(protoNodeResource)
	if err != nil {
		return err
	}
	err = data.ReqNodeResourceFindByID(protoNodeResource)
	if err != nil {
		return err
	}
	err = data.DB.FindNodeResourceWithValid(orm.NodeResource{
		Md5: protoNodeResource.Md5,
		State:int32(protoManage.State_StateNormal),
	})
	if err != nil {
		if errors.Is(err, gorm.ErrRecordNotFound) {
			filePath := config.LocalConfig.File.SavePath + protoNodeResource.Md5
			if !Jtool.IsFileExist(filePath) {
				return nil
			}
			return os.Remove(filePath)
		}
		return err
	}
	return nil
}

func (data *Data) ReqNodeResourceFindByID(protoNodeResource *protoManage.NodeResource) error {
	ormNodeResource, err := data.DB.FindNodeResourceByID(orm.NodeResource{
		Base:orm.Base{ID: protoNodeResource.Base.ID},
	})
	if err != nil {
		return err
	}
	convert.OrmNodeResourceToProtoNodeResource(ormNodeResource, protoNodeResource)
	return nil
}

func (data *Data) NodeResourceFind(req *protoManage.ReqNodeResourceList) (*protoManage.AnsNodeResourceList, error) {
	ormResourceList, err := data.DB.FindNodeResource(req)
	if err != nil {
		return nil, err
	}
	protoNodeResourceList := convert.OrmNodeResourceListToProtoNodeResourceList(ormResourceList)
	count, err := data.DB.FindNodeResourceCount(req)
	if err != nil {
		return nil, err
	}
	return &protoManage.AnsNodeResourceList{
		Length: count,
		NodeResourceList: protoNodeResourceList,
	}, nil
}


func (data *Data) ReqNodeResourceDownload(protoNodeResource *protoManage.NodeResource) error {
	err := data.ReqNodeResourceFindByID(protoNodeResource)
	if err != nil {
		return err
	}
	if protoNodeResource.State != protoManage.State_StateNormal {
		return errors.New("file is invalid")
	}
	err = data.DB.UpdateNodeResourceDownLoadCnt(&orm.NodeResource{
		Base:orm.Base{ID: protoNodeResource.Base.ID},
		DownLoadCnt: protoNodeResource.DownLoadCnt + 1,
	})
	if err != nil {
		return err
	}
	return nil
}