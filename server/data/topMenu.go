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
	"github.com/liyiligang/mxui/check"
	"github.com/liyiligang/mxui/convert"
	"github.com/liyiligang/mxui/protoFiles/protoManage"
	"github.com/liyiligang/mxui/typedef/orm"
)

func (data *Data) TopLinkFind(req *protoManage.ReqTopLinkList) (*protoManage.AnsTopLinkList, error) {
	ormTopLink, err := data.DB.FindTopLink()
	if err != nil {
		return nil, err
	}
	protoTopLink := convert.OrmTopLinkListToProtoTopLinkList(ormTopLink)
	return &protoManage.AnsTopLinkList{TopLinkList: protoTopLink}, nil
}

func (data *Data) TopLinkFindByID(protoTopLink *protoManage.TopLink) error {
	ormTopLink, err :=data.DB.FindTopLinkByID(orm.TopLink{Base: orm.Base{ID: protoTopLink.Base.ID}})
	if err != nil {
		return err
	}
	convert.OrmTopLinkToProtoTopLink(ormTopLink, protoTopLink)
	return nil
}

func (data *Data) TopLinkAdd(protoTopLink *protoManage.TopLink) error {
	if err := check.TopLinkCheck(protoTopLink); err != nil {
		return err
	}
	ormTopLink := orm.TopLink{Name: protoTopLink.Name,
		Url:protoTopLink.Url, State: int32(protoTopLink.State)}
	err := data.DB.AddTopLink(&ormTopLink)
	if err != nil {
		return err
	}
	convert.OrmTopLinkToProtoTopLink(&ormTopLink, protoTopLink)
	return nil
}

func (data *Data) TopLinkDel(protoTopLink *protoManage.TopLink) error {
	ormTopLink := orm.TopLink{Base: orm.Base{ID: protoTopLink.Base.ID}}
	err := data.DB.DelTopLink(&ormTopLink)
	if err != nil {
		return err
	}
	return nil
}

func (data *Data) TopLinkUpdate(protoTopLink *protoManage.TopLink) error {
	if err := check.TopLinkCheck(protoTopLink); err != nil {
		return err
	}
	ormTopLink := orm.TopLink{Base: orm.Base{ID: protoTopLink.Base.ID},
		Name: protoTopLink.Name, Url: protoTopLink.Url, State: int32(protoTopLink.State)}
	err := data.DB.UpdateTopLink(&ormTopLink)
	if err != nil {
		return err
	}
	convert.OrmTopLinkToProtoTopLink(&ormTopLink, protoTopLink)
	return nil
}