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
	"github.com/liyiligang/mxui/typedef/orm"
	"github.com/pkg/errors"
	"gorm.io/gorm"
)

func (db *Server) AddManager(manager orm.Manager) error {
	return db.Gorm.Create(&manager).Error
}

func (db *Server) FindManagerByUserNameAndPassword(manager orm.Manager) (*orm.Manager, error) {
	err := db.Gorm.Where("Name = ? and Password = ?", manager.Name, manager.Password).First(&manager).Error
	return &manager, err
}

func (db *Server) FindManagerByToken(manager orm.Manager) (*orm.Manager, error) {
	err := db.Gorm.Where("id = ? and Token = ?", manager.ID, manager.Token).First(&manager).Error
	return &manager, err
}

func (db *Server) FindManagerByID(manager orm.Manager) (*orm.Manager, error) {
	err := db.Gorm.First(&manager, manager.ID).Error
	return &manager, err
}

func (db *Server) IsExistManagerByUserName(manager orm.Manager) error {
	err := db.Gorm.Where("Name = ?", manager.Name).First(&manager).Error
	if err != nil {
		if errors.Is(err, gorm.ErrRecordNotFound) {
			return nil
		}
		return err
	}
	return errors.New("the user name has been registered")
}

func (db *Server) IsExistManagerByNickName(manager orm.Manager) error {
	err := db.Gorm.Where("NickName = ?", manager.NickName).First(&manager).Error
	if err != nil {
		if errors.Is(err, gorm.ErrRecordNotFound) {
			return nil
		}
		return err
	}
	return errors.New("the user nickname has been registered")
}

func (db *Server) UpdateManagerToken(manager orm.Manager) (*orm.Base, error) {
	err := db.Gorm.Model(&manager).Update("Token", manager.Token).Error
	return &manager.Base, err
}

func (db *Server) UpdateManager(manager orm.Manager) (*orm.Base, error) {
	err := db.Gorm.Model(&manager).Updates(manager).Error
	return &manager.Base, err
}

func (db *Server) UpdateManagerState(manager orm.Manager) (*orm.Base, error) {
	err := db.Gorm.Model(&manager).Update("State", manager.State).Error
	return &manager.Base, err
}

func (db *Server) DelManager(manager orm.Manager) error {
	return db.Gorm.Delete(&manager).Error
}

func (db *Server) FindManager() ([]orm.Manager, error) {
	var ormManagerList []orm.Manager
	err := db.Gorm.Order("Level desc").Find(&ormManagerList).Error
	return ormManagerList, err
}

func (db *Server) FindManagerLowLevel(manager orm.Manager) ([]orm.Manager, error) {
	var ormManagerList []orm.Manager
	err := db.Gorm.Where("Level < ?", manager.Level).Find(&ormManagerList).Error
	return ormManagerList, err
}

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

func (db *Server) FindManagerListByLevel(manager orm.Manager) ([]orm.Manager, error) {
	var ormManagerList []orm.Manager
	err := db.Gorm.Where("Level = ?", manager.Level).Find(&ormManagerList).Error
	return ormManagerList, err
}