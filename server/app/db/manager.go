package db

import "github.com/liyiligang/manage/app/typedef/orm"

//查找管理员(账号)
func (db *DB) FindManagerByUserName(manager orm.Manager) (*orm.Manager, error) {
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