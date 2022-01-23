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
	"github.com/liyiligang/base/component/Jtoken"
	"github.com/liyiligang/mxrpc/check"
	"github.com/liyiligang/mxrpc/convert"
	"github.com/liyiligang/mxrpc/protoFiles/protoManage"
	"github.com/liyiligang/mxrpc/typedef/config"
	"github.com/liyiligang/mxrpc/typedef/orm"
	"github.com/pkg/errors"
	"gorm.io/gorm"
	"time"
)

//注册管理员
func (data *Data) ManagerRegister(protoManager *protoManage.Manager) error {
	protoManager.Level = protoManage.Level_LevelPrimary
	superManager := &protoManage.Manager{Level: protoManage.Level_LevelSuper}
	if err := data.ManagerFindByLevel(superManager); err != nil{
		return err
	}
	if superManager.Base.ID == 0 {
		protoManager.Level = superManager.Level
	}else{
		if config.LocalConfig.User.OpenRegister == false {
			return errors.New("user register is closed, please contact the administrator to add users")
		}
	}
	return data.ManagerAdd(protoManager)
}

//新增管理员
func (data *Data) ManagerAdd(protoManager *protoManage.Manager) error {
	if err := check.ManagerAddCheck(protoManager); err != nil {
		return err
	}
	if err := data.DB.IsExistManagerByUserName(orm.Manager{Name: protoManager.Name}); err != nil{
		return err
	}
	if err := data.DB.IsExistManagerByNickName(orm.Manager{NickName: protoManager.NickName}); err != nil{
		return err
	}
	return data.DB.AddManager(orm.Manager{NickName: protoManager.NickName, Name:protoManager.Name,
		Password: protoManager.Password, Level: int32(protoManager.Level)})
}

//删除管理员
func (data *Data) ManagerDel(protoManager *protoManage.Manager) error {
	isUnique, err := data.IsUniqueManager(protoManager)
	if err != nil {
		return err
	}
	if isUnique {
		return errors.New("administrator must exist on the system")
	}
	err = data.DB.DelManager(orm.Manager{Base: orm.Base{ID: protoManager.Base.ID}})
	if err != nil {
		return err
	}
	_ = data.Gateway.WsSendOrBroadCastPB(protoManager.Base.ID, protoManage.Order_ManagerDel, protoManager)
	return nil
}

//更新管理员token
func (data *Data) ManagerTokenUpdate(protoManager *protoManage.Manager) error {
	protoManager.Token = data.ManagerGetTokenByID(protoManager)
	_, err := data.DB.UpdateManagerToken(orm.Manager{Base: orm.Base{ID: protoManager.Base.ID}, Token: protoManager.Token})
	if err != nil {
		return err
	}
	return nil
}

//更新管理员状态
func (data *Data) ManagerStateUpdate(protoManager *protoManage.Manager) error {
	ormBase, err := data.DB.UpdateManagerState(orm.Manager{Base: orm.Base{ID: protoManager.Base.ID}, State: int32(protoManager.State)})
	if err != nil {
		return err
	}
	convert.OrmBaseToProtoBase(ormBase, &protoManager.Base)
	return nil
}

//更新管理员信息
func (data *Data) ManagerUpdate(protoManager *protoManage.Manager) error {
	isUnique, err := data.IsUniqueManager(protoManager)
	if err != nil {
		return err
	}
	if isUnique && protoManager.Level != protoManage.Level_LevelSuper{
		return errors.New("administrator must exist on the system")
	}
	ormBase, err := data.DB.UpdateManager(orm.Manager{Base: orm.Base{ID: protoManager.Base.ID},
		Password: protoManager.Password, NickName: protoManager.NickName,
		Setting:protoManager.Setting, Level: int32(protoManager.Level)})
	if err != nil {
		return err
	}
	convert.OrmBaseToProtoBase(ormBase, &protoManager.Base)
	_ = data.Gateway.WsSendOrBroadCastPB(protoManager.Base.ID, protoManage.Order_ManagerUpdate, protoManager)
	return nil
}

//更新管理员密码
func (data *Data) ManagerUpdatePasswd(userID int64, protoManager *protoManage.Manager) error {
	if err := check.ManagerUpdatePasswordCheck(protoManager); err != nil {
		return err
	}
	ormManager, err := data.DB.FindManagerByID(orm.Manager{Base:orm.Base{ID: userID}})
	if err != nil {
		return err
	}
	if ormManager.Password != protoManager.Token {
		return errors.New("original password is invalid")
	}
	ormBase, err := data.DB.UpdateManager(orm.Manager{Base: orm.Base{ID: userID},
		Password: protoManager.Password})
	if err != nil {
		return err
	}
	convert.OrmBaseToProtoBase(ormBase, &protoManager.Base)
	return nil
}

//更新管理员设置
func (data *Data) ManagerUpdateSetting(userID int64, protoManager *protoManage.Manager) error {
	ormBase, err := data.DB.UpdateManager(orm.Manager{Base: orm.Base{ID: userID},
		Setting: protoManager.Setting})
	if err != nil {
		return err
	}
	convert.OrmBaseToProtoBase(ormBase, &protoManager.Base)
	return nil
}

//管理员登录
func (data *Data) ManagerLogin(manager *protoManage.Manager) (error, protoManage.HttpError) {
	if manager.Token != ""{
		return data.ManagerLoginWithToken(manager)
	}else{
		return data.ManagerLoginWithPasswd(manager)
	}
}

//管理员token登录
func (data *Data) ManagerLoginWithToken(manager *protoManage.Manager) (error, protoManage.HttpError) {
	tokenData, err := data.ParseToken(manager.Token)
	if err != nil {
		return errors.New("token is invalid"), protoManage.HttpError_HttpErrorLoginWithToken
	}
	ormManager, err := data.DB.FindManagerByToken(orm.Manager{Base: orm.Base{ID: tokenData.UserID}, Token: manager.Token})
	if err != nil {
		if errors.Is(err, gorm.ErrRecordNotFound) {
			return errors.New("token is invalid"), protoManage.HttpError_HttpErrorLoginWithToken
		}
		return err, protoManage.HttpError_HttpErrorLoginWithToken
	}
	convert.OrmManagerToProtoManager(ormManager, manager)
	return data.ManagerTokenUpdate(manager), protoManage.HttpError_HttpErrorNull
}

//管理员账户密码登录
func (data *Data) ManagerLoginWithPasswd(manager *protoManage.Manager) (error, protoManage.HttpError) {
	ormManager, err := data.DB.FindManagerByUserNameAndPassword(orm.Manager{Name: manager.Name, Password: manager.Password})
	if err != nil {
		if errors.Is(err, gorm.ErrRecordNotFound) {
			return errors.New("password is invalid"), protoManage.HttpError_HttpErrorPasswordWithAccount
		}
		return err, protoManage.HttpError_HttpErrorLoginWithAccount
	}
	convert.OrmManagerToProtoManager(ormManager, manager)
	return data.ManagerTokenUpdate(manager), protoManage.HttpError_HttpErrorNull
}

//查找管理员昵称
func (data *Data) ManagerFindNickName(req *protoManage.ReqManagerList) (*protoManage.AnsManagerList, error) {
	ormManager, err := data.DB.FindManager()
	if err != nil {
		return nil, err
	}
	protoManager := convert.OrmManagerNickNameListToProtoManagerNickNameList(ormManager)
	return &protoManage.AnsManagerList{ManagerList: protoManager}, nil
}

//查找下级管理员信息
func (data *Data) ManagerFind(userID int64, req *protoManage.ReqManagerList) (*protoManage.AnsManagerList, error) {
	ormManager, err := data.DB.FindManager()
	if err != nil {
		return nil, err
	}
	protoManager := convert.OrmManagerListNoSettingToProtoManagerListNoSetting(ormManager)
	return &protoManage.AnsManagerList{ManagerList: protoManager}, nil
}

//查找管理员信息按ID
func (data *Data) ManagerFindByID(userID int64, manager *protoManage.Manager) error {
	if manager.Base.ID == 0 {
		manager.Base.ID = userID
	}
	ormManager, err := data.DB.FindManagerByID(orm.Manager{Base:orm.Base{ID: manager.Base.ID}})
	if err != nil {
		return err
	}
	convert.OrmManagerToProtoManager(ormManager, manager)
	return nil
}

//查找管理员权限按ID
func (data *Data) ManagerFindLevelByID(userID int64) (protoManage.Level, error) {
	manager := &protoManage.Manager{}
	err := data.ManagerFindByID(userID, manager)
	return manager.Level, err
}

//获取管理token
func (data *Data) ManagerGetTokenByID(protoManager *protoManage.Manager) string {
	tokenConfig := Jtoken.TokenConfig{
		Key:           config.LocalConfig.Token.Key,
		ID:        	   protoManager.Base.ID,
		StartDuration: time.Duration(config.LocalConfig.Token.StartDuration) * time.Hour,
		StopDuration:  time.Duration(config.LocalConfig.Token.StopDuration) * time.Hour,
		Custom: make(map[string]interface{}),
	}
	tokenConfig.Custom["level"] = protoManager.Level
	return Jtoken.GetToken(tokenConfig)
}

//按权限查询管理员
func (data *Data) ManagerFindByLevel(protoManager *protoManage.Manager) error {
	ormBase, err := data.DB.FindManagerByLevel(orm.Manager{Level: int32(protoManager.Level)})
	if err != nil {
		return err
	}
	convert.OrmBaseToProtoBase(ormBase, &protoManager.Base)
	return nil
}

func (data *Data) IsUniqueManager(protoManager *protoManage.Manager) (bool, error) {
	managerList, err := data.DB.FindManagerListByLevel(orm.Manager{Level: int32(protoManage.Level_LevelSuper)})
	if err != nil {
		return false, err
	}
	if len(managerList) == 1 && managerList[0].ID == protoManager.Base.ID {
		return true, nil
	}
	return false, nil
}