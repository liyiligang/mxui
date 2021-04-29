package data

import (
	"github.com/liyiligang/base/component/Jtoken"
	"github.com/liyiligang/base/protoFiles/protoManage"
	"github.com/liyiligang/manage/app/convert"
	"github.com/liyiligang/manage/typedef/config"
	"github.com/liyiligang/manage/typedef/orm"
	"github.com/pkg/errors"
	"gorm.io/gorm"
	"time"
)

//更新管理员token
func (data *Data) ManagerTokenUpdate(protoManager *protoManage.Manager) error {
	tokenConfig := Jtoken.TokenConfig{
		Key: 		   config.NodeConfig.Token.Key,
		UserID:        int64(protoManager.Base.ID),
		StartDuration: time.Duration(config.NodeConfig.Token.StartDuration) * time.Hour,
		StopDuration:  time.Duration(config.NodeConfig.Token.StopDuration) * time.Hour}
	protoManager.Token = Jtoken.GetToken(tokenConfig)
	_, err := data.DB.UpdateManagerToken(orm.Manager{Base:orm.Base{ID: protoManager.Base.ID}, Token: protoManager.Token})
	if err != nil {
		return err
	}
	return nil
}

//管理员登录
func (data *Data) ManagerLogin(manager *protoManage.Manager) error {
	var ormManager *orm.Manager
	var err error
	if manager.Token != "" {
		userID, err := Jtoken.ParseToken(manager.Token, config.NodeConfig.Token.Key)
		if err != nil {
			return errors.New("token已失效, 请使用账户密码登录")
		}
		ormManager, err = data.DB.FindManagerByToken(orm.Manager{Base:orm.Base{ID: userID}, Token: manager.Token})
		if err != nil {
			if errors.Is(err, gorm.ErrRecordNotFound) {
				return errors.New("token已失效, 请使用账户密码登录")
			}
			return err
		}
	}else {
		ormManager, err = data.DB.FindManagerByUserName(orm.Manager{Name: manager.Name, Password: manager.Password})
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

//查找管理员信息
func (data *Data) ManagerFind(req protoManage.ReqManagerList) (*protoManage.AnsManagerList, error) {
	ormManager, err := data.DB.FindManager()
	if err != nil {
		return nil, err
	}
	protoManager := convert.OrmManagerNickNameListToProtoManagerNickNameList(ormManager)
	return &protoManage.AnsManagerList{ManagerList: protoManager}, nil
}

//更新管理员状态
func (data *Data) ManagerStateUpdate(protoManager *protoManage.Manager) error {
	ormBase, err := data.DB.UpdateManagerState(orm.Manager{Base:orm.Base{ID: protoManager.Base.ID}, State: int32(protoManager.State)})
	if err != nil {
		return err
	}
	convert.OrmBaseToProtoBase(ormBase, &protoManager.Base)
	return nil
}
