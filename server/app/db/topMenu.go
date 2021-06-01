package db

import "github.com/liyiligang/manage/app/typedef/orm"

//获取顶部链接
func (db *DB) FindTopLink() ([]orm.TopLink, error) {
	var ormTopLinkList []orm.TopLink
	err := db.Gorm.Find(&ormTopLinkList).Error
	return ormTopLinkList, err
}

//按ID获取顶部链接
func (db *DB) FindTopLinkByID(topLink orm.TopLink) (*orm.TopLink, error) {
	err := db.Gorm.Where("id = ?", topLink.ID).First(&topLink).Error
	return &topLink, err
}

//新增顶部链接
func (db *DB) AddTopLink(topLink *orm.TopLink) error {
	return db.Gorm.Create(topLink).Error
}

//删除顶部链接
func (db *DB) DelTopLink(topLink *orm.TopLink) error {
	return db.Gorm.Delete(&topLink).Error
}

//更新顶部链接
func (db *DB) UpdateTopLink(topLink *orm.TopLink) error {
	return db.Gorm.Model(&topLink).Updates(map[string]interface{}{
		"Name": topLink.Name, "Url": topLink.Url, "State": topLink.State}).Error
}
