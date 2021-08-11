package db

import "github.com/liyiligang/klee/app/typedef/orm"

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
	return db.Gorm.Delete(&topLink).Error
}

//更新顶部链接
func (db *Server) UpdateTopLink(topLink *orm.TopLink) error {
	return db.Gorm.Model(&topLink).Updates(map[string]interface{}{
		"Name": topLink.Name, "Url": topLink.Url, "State": topLink.State}).Error
}
