package data

import (
	"github.com/liyiligang/base/component/Jtoken"
	"github.com/liyiligang/klee/app/check"
	"github.com/liyiligang/klee/app/convert"
	"github.com/liyiligang/klee/app/protoFiles/protoManage"
	"github.com/liyiligang/klee/app/typedef/config"
	"github.com/liyiligang/klee/app/typedef/orm"
	"github.com/pkg/errors"
	"gorm.io/gorm"
	"time"
)

//注册管理员
func (data *Data) ManagerRegister(protoManager *protoManage.Manager) error {
	protoManager.Level = protoManage.Level_LevelPrimary
	superManager := &protoManage.Manager{Level: protoManage.Level_LevelSuper}
	if err := data.ManagerFindByLevel(0, superManager); err != nil{
		return err
	}
	if superManager.Base.ID == 0 {
		protoManager.Level = superManager.Level
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
func (data *Data) ManagerDel(userID int64, protoManager *protoManage.Manager) error {
	err := data.DB.DelManager(orm.Manager{Base: orm.Base{ID: protoManager.Base.ID}})
	if err != nil {
		return err
	}
	return nil
}

//更新管理员token
func (data *Data) ManagerTokenUpdate(protoManager *protoManage.Manager) error {
	protoManager.Token = data.ManagerGetTokenByID(protoManager.Base.ID)
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

//更新管理员
func (data *Data) ManagerUpdate(userID int64, protoManager *protoManage.Manager) error {
	if protoManager.Base.ID == 0 {
		protoManager.Base.ID = userID
	}
	if err := check.ManagerUpdateCheck(userID, protoManager); err != nil {
		return err
	}
	if protoManager.Password != "" {
		if err := check.ManagerUpdatePasswordCheck(protoManager); err != nil {
			return err
		}
		ormManager, err := data.DB.FindManagerByID(orm.Manager{Base:orm.Base{ID: protoManager.Base.ID}})
		if err != nil {
			return err
		}
		if ormManager.Password != protoManager.Token {
			return errors.New("原密码不正确")
		}
	}
	ormBase, err := data.DB.UpdateManager(orm.Manager{Base: orm.Base{ID: protoManager.Base.ID},
		Password: protoManager.Password, NickName: protoManager.NickName,
		Setting:protoManager.Setting, Level: int32(protoManager.Level)})
	if err != nil {
		return err
	}
	convert.OrmBaseToProtoBase(ormBase, &protoManager.Base)
	return nil
}

//管理员登录
func (data *Data) ManagerLogin(manager *protoManage.Manager) error {
	var ormManager *orm.Manager
	var err error
	if manager.Token != "" {
		userID, err := Jtoken.ParseToken(manager.Token, config.LocalConfig.Token.Key)
		if err != nil {
			return errors.New("token已失效, 请使用账户密码登录")
		}
		ormManager, err = data.DB.FindManagerByToken(orm.Manager{Base: orm.Base{ID: userID}, Token: manager.Token})
		if err != nil {
			if errors.Is(err, gorm.ErrRecordNotFound) {
				return errors.New("token已失效, 请使用账户密码登录")
			}
			return err
		}
	}else {
		ormManager, err = data.DB.FindManagerByUserNameAndPassword(orm.Manager{Name: manager.Name, Password: manager.Password})
		if err != nil {
			if errors.Is(err, gorm.ErrRecordNotFound) {
				return errors.New("用户名或密码不正确")
			}
			return err
		}
	}
	convert.OrmManagerToProtoManager(ormManager, manager)
	return data.ManagerTokenUpdate(manager)
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
func (data *Data) ManagerFindLowLevel(userID int64, req *protoManage.ReqManagerList) (*protoManage.AnsManagerList, error) {
	manager, err := data.DB.FindManagerByID(orm.Manager{Base:orm.Base{ID: userID}})
	if err != nil {
		return nil, err
	}
	ormManager, err := data.DB.FindManagerLowLevel(*manager)
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
func (data *Data) ManagerGetTokenByID(userID int64) string {
	tokenConfig := Jtoken.TokenConfig{
		Key:           config.LocalConfig.Token.Key,
		UserID:        userID,
		StartDuration: time.Duration(config.LocalConfig.Token.StartDuration) * time.Hour,
		StopDuration:  time.Duration(config.LocalConfig.Token.StopDuration) * time.Hour}
	 return Jtoken.GetToken(tokenConfig)
}

//按权限查询管理员
func (data *Data) ManagerFindByLevel(userID int64, protoManager *protoManage.Manager) error {
	ormBase, err := data.DB.FindManagerByLevel(orm.Manager{Level: int32(protoManager.Level)})
	if err != nil {
		return err
	}
	convert.OrmBaseToProtoBase(ormBase, &protoManager.Base)
	return nil
}