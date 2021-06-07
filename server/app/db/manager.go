package db

import (
	"github.com/liyiligang/manage/app/typedef/orm"
	"github.com/pkg/errors"
	"gorm.io/gorm"
)

//新增管理员
func (db *DB) AddManager(manager orm.Manager) error {
	return db.Gorm.Create(&manager).Error
}

//查找管理员(账号密码)
func (db *DB) FindManagerByUserNameAndPassword(manager orm.Manager) (*orm.Manager, error) {
	err := db.Gorm.Where("Name = ? and Password = ?", manager.Name, manager.Password).First(&manager).Error
	return &manager, err
}

//查找管理员(令牌)
func (db *DB) FindManagerByToken(manager orm.Manager) (*orm.Manager, error) {
	err := db.Gorm.Where("id = ? and Token = ?", manager.ID, manager.Token).First(&manager).Error
	return &manager, err
}

//查找管理员(ID)
func (db *DB) FindManagerByID(manager orm.Manager) (*orm.Manager, error) {
	err := db.Gorm.First(&manager, manager.ID).Error
	return &manager, err
}

//查找管理员帐号是否存在
func (db *DB) IsExistManagerByUserName(manager orm.Manager) error {
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
func (db *DB) IsExistManagerByNickName(manager orm.Manager) error {
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
func (db *DB) UpdateManagerToken(manager orm.Manager) (*orm.Base, error) {
	err := db.Gorm.Model(&manager).Update("Token", manager.Token).Error
	return &manager.Base, err
}

//按ID更新管理员状态
func (db *DB) UpdateManagerState(manager orm.Manager) (*orm.Base, error) {
	err := db.Gorm.Model(&manager).Update("State", manager.State).Error
	return &manager.Base, err
}

//按ID更新管理员密码
func (db *DB) UpdateManagerPassword(manager orm.Manager) (*orm.Base, error) {
	err := db.Gorm.Model(&manager).Update("Password", manager.Password).Error
	return &manager.Base, err
}

//按ID更新管理员设置
func (db *DB) UpdateManagerSetting(manager orm.Manager) (*orm.Base, error) {
	err := db.Gorm.Model(&manager).Update("Setting", manager.Setting).Error
	return &manager.Base, err
}

//获取管理员
func (db *DB) FindManager() ([]orm.Manager, error) {
	var ormManagerList []orm.Manager
	err := db.Gorm.Find(&ormManagerList).Error
	return ormManagerList, err
}