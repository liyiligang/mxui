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

import (
	"github.com/liyiligang/mxrpc/typedef/orm"
	"github.com/pkg/errors"
	"gorm.io/gorm"
)

//新增管理员
func (db *Server) AddManager(manager orm.Manager) error {
	return db.Gorm.Create(&manager).Error
}

//查找管理员(账号密码)
func (db *Server) FindManagerByUserNameAndPassword(manager orm.Manager) (*orm.Manager, error) {
	err := db.Gorm.Where("Name = ? and Password = ?", manager.Name, manager.Password).First(&manager).Error
	return &manager, err
}

//查找管理员(令牌)
func (db *Server) FindManagerByToken(manager orm.Manager) (*orm.Manager, error) {
	err := db.Gorm.Where("id = ? and Token = ?", manager.ID, manager.Token).First(&manager).Error
	return &manager, err
}

//查找管理员(ID)
func (db *Server) FindManagerByID(manager orm.Manager) (*orm.Manager, error) {
	err := db.Gorm.First(&manager, manager.ID).Error
	return &manager, err
}

//查找管理员帐号是否存在
func (db *Server) IsExistManagerByUserName(manager orm.Manager) error {
	err := db.Gorm.Where("Name = ?", manager.Name).First(&manager).Error
	if err != nil {
		if errors.Is(err, gorm.ErrRecordNotFound) {
			return nil
		}
		return err
	}
	return errors.New("用户名已经被注册")
}

//查找管理员昵称是否存在
func (db *Server) IsExistManagerByNickName(manager orm.Manager) error {
	err := db.Gorm.Where("NickName = ?", manager.NickName).First(&manager).Error
	if err != nil {
		if errors.Is(err, gorm.ErrRecordNotFound) {
			return nil
		}
		return err
	}
	return errors.New("用户昵称已经被注册")
}

//按ID更新管理员token
func (db *Server) UpdateManagerToken(manager orm.Manager) (*orm.Base, error) {
	err := db.Gorm.Model(&manager).Update("Token", manager.Token).Error
	return &manager.Base, err
}

//按ID更新管理员信息
func (db *Server) UpdateManager(manager orm.Manager) (*orm.Base, error) {
	err := db.Gorm.Model(&manager).Updates(manager).Error
	return &manager.Base, err
}

//按ID更新管理员状态
func (db *Server) UpdateManagerState(manager orm.Manager) (*orm.Base, error) {
	err := db.Gorm.Model(&manager).Update("State", manager.State).Error
	return &manager.Base, err
}

//按ID更新管理员设置
func (db *Server) DelManager(manager orm.Manager) error {
	return db.Gorm.Delete(&manager).Error
}

//获取管理员
func (db *Server) FindManager() ([]orm.Manager, error) {
	var ormManagerList []orm.Manager
	err := db.Gorm.Find(&ormManagerList).Error
	return ormManagerList, err
}

//获取下级管理员
func (db *Server) FindManagerLowLevel(manager orm.Manager) ([]orm.Manager, error) {
	var ormManagerList []orm.Manager
	err := db.Gorm.Where("Level < ?", manager.Level).Find(&ormManagerList).Error
	return ormManagerList, err
}

//查询是否存在超管
func (db *Server) FindManagerByLevel(manager orm.Manager) (*orm.Base, error) {
	err := db.Gorm.Where("Level = ?", manager.Level).First(&manager).Error
	if err != nil {
		if errors.Is(err, gorm.ErrRecordNotFound) {
			return &manager.Base, nil
		}
		return nil, err
	}
	return &manager.Base, err
}