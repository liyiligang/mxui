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

package db

import "github.com/liyiligang/mxui/typedef/orm"

//获取顶部链接
func (db *Server) FindTopLink() ([]orm.TopLink, error) {
	var ormTopLinkList []orm.TopLink
	err := db.Gorm.Find(&ormTopLinkList).Error
	return ormTopLinkList, err
}

//按ID获取顶部链接
func (db *Server) FindTopLinkByID(topLink orm.TopLink) (*orm.TopLink, error) {
	err := db.Gorm.Where("id = ?", topLink.ID).First(&topLink).Error
	return &topLink, err
}

//新增顶部链接
func (db *Server) AddTopLink(topLink *orm.TopLink) error {
	return db.Gorm.Create(topLink).Error
}

//删除顶部链接
func (db *Server) DelTopLink(topLink *orm.TopLink) error {
	return db.Gorm.Delete(topLink).Error
}

//更新顶部链接
func (db *Server) UpdateTopLink(topLink *orm.TopLink) error {
	return db.Gorm.Model(&topLink).Updates(map[string]interface{}{
		"Name": topLink.Name, "Url": topLink.Url, "State": topLink.State}).Error
}
