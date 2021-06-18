package request

import (
	"github.com/liyiligang/base/component/Jtoken"
	"github.com/liyiligang/base/component/Jtool"
	"github.com/liyiligang/manage/app/protoFiles/protoManage"
	"github.com/liyiligang/manage/app/typedef/config"
	"github.com/pkg/errors"
)

//管理员登录
func (request *Request) ReqWsTokenCheck(message []byte, addr string) (int64, error) {
	message = Jtool.RunesToBytes(message)
	manager := protoManage.Manager{}
	err := manager.Unmarshal(message)
	if err != nil {
		return 0, err
	}
	userID, err := Jtoken.ParseToken(manager.Token, config.LocalConfig.Token.Key)
	if err != nil {
		return 0, errors.New("websocket连接验证失败, 无效的token")
	}
	return userID, nil
}

//管理员注册
func (request *Request) ReqManagerAdd(userID int64, message []byte)([]byte, error){
	req := protoManage.Manager{}
	err := req.Unmarshal(message)
	if err != nil {
		return nil, err
	}
	err = request.Data.ManagerAdd(&req)
	if err != nil {
		return nil, err
	}
	pbByte, err := req.Marshal()
	if err != nil {
		return nil, err
	}
	return pbByte, err
}

//管理员登录
func (request *Request) ReqManagerLogin(userID int64, message []byte)([]byte, error){
	req := protoManage.Manager{}
	err := req.Unmarshal(message)
	if err != nil {
		return nil, err
	}
	err = request.Data.ManagerLogin(&req)
	if err != nil {
		return nil, err
	}
	pbByte, err := req.Marshal()
	if err != nil {
		return nil, err
	}
	return pbByte, err
}

//管理员信息查询
func (request *Request) ReqManagerFind(userID int64, message []byte)([]byte, error){
	req := protoManage.ReqManagerList{}
	err := req.Unmarshal(message)
	if err != nil {
		return nil, err
	}
	ans, err := request.Data.ManagerFind(req)
	if err != nil {
		return nil, err
	}
	pbByte, err := ans.Marshal()
	if err != nil {
		return nil, err
	}
	return pbByte, err
}

//管理员信息查询按ID
func (request *Request) ReqManagerFindByID(userID int64, message []byte)([]byte, error){
	req := protoManage.Manager{}
	err := req.Unmarshal(message)
	if err != nil {
		return nil, err
	}
	err = request.Data.ManagerFindByID(userID, &req)
	if err != nil {
		return nil, err
	}
	pbByte, err := req.Marshal()
	if err != nil {
		return nil, err
	}
	return pbByte, err
}

//更新管理员密码
func (request *Request) ReqManagerUpdatePassword(userID int64, message []byte)([]byte, error){
	req := protoManage.Manager{}
	err := req.Unmarshal(message)
	if err != nil {
		return nil, err
	}
	err = request.Data.ManagerPasswordUpdate(userID, &req)
	if err != nil {
		return nil, err
	}
	pbByte, err := req.Marshal()
	if err != nil {
		return nil, err
	}
	return pbByte, err
}

//更新管理员设置
func (request *Request) ReqManagerUpdateSetting(userID int64, message []byte)([]byte, error){
	req := protoManage.Manager{}
	err := req.Unmarshal(message)
	if err != nil {
		return nil, err
	}
	err = request.Data.ManagerSettingUpdate(userID, &req)
	if err != nil {
		return nil, err
	}
	pbByte, err := req.Marshal()
	if err != nil {
		return nil, err
	}
	return pbByte, err
}