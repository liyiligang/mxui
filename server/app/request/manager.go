package request

import (
	"github.com/liyiligang/base/component/Jerror"
	"github.com/liyiligang/base/component/Jtoken"
	"github.com/liyiligang/base/component/Jtool"
	"github.com/liyiligang/klee/app/protoFiles/protoManage"
	"github.com/liyiligang/klee/app/typedef/config"
	"github.com/pkg/errors"
)

//管理员登录(websocket)
func (request *Request) ReqWsTokenCheck(message []byte, addr string) (int64, error) {
	message = Jtool.RunesToBytes(message)
	manager := protoManage.Manager{}
	err := manager.Unmarshal(message)
	if err != nil {
		return 0, err
	}
	claims, err := Jtoken.ParseToken(manager.Token, config.LocalConfig.Token.Key)
	userID := int64(claims["jti"].(float64))
	if err != nil {
		return 0, errors.New("websocket连接验证失败, 无效的token")
	}
	return userID, nil
}

//管理员注册
func (request *Request) ReqManagerRegister(r *HTTPRequest) error {
	req := &protoManage.Manager{}
	err := request.unmarshalWithHttp(r, req)
	if err != nil {
		return err
	}
	err = request.Data.ManagerRegister(req)
	if err != nil {
		return err
	}
	err = request.marshalWithHttp(r, req)
	if err != nil {
		return err
	}
	return nil
}

//管理员登录
func (request *Request) ReqManagerLogin(r *HTTPRequest) error {
	req := &protoManage.Manager{}
	err := request.unmarshalWithHttp(r, req)
	if err != nil {
		return err
	}
	err, errCode := request.Data.ManagerLogin(req)
	if err != nil {
		return Jerror.NewErrWithCode(int(errCode), err)
	}
	err = request.marshalWithHttp(r, req)
	if err != nil {
		return err
	}
	return nil
}

//管理员权限查询
func (request *Request) ReqManagerFindByLevel(r *HTTPRequest) error {
	req := &protoManage.Manager{}
	err := request.unmarshalWithHttp(r, req)
	if err != nil {
		return err
	}
	err = request.Data.ManagerFindByLevel(req)
	if err != nil {
		return err
	}
	err = request.marshalWithHttp(r, req)
	if err != nil {
		return err
	}
	return nil
}

//管理员新增
func (request *Request) ReqManagerAdd(r *HTTPRequest) error {
	req := &protoManage.Manager{}
	err := request.unmarshalWithHttp(r, req)
	if err != nil {
		return err
	}
	err = request.Data.ManagerAdd(req)
	if err != nil {
		return err
	}
	err = request.marshalWithHttp(r, req)
	if err != nil {
		return err
	}
	return nil
}

//管理员删除
func (request *Request) ReqManagerDel(r *HTTPRequest) error {
	req := &protoManage.Manager{}
	err := request.unmarshalWithHttp(r, req)
	if err != nil {
		return err
	}
	err = request.Data.ManagerDel(req)
	if err != nil {
		return err
	}
	err = request.marshalWithHttp(r, req)
	if err != nil {
		return err
	}
	return nil
}

//更新管理员信息
func (request *Request) ReqManagerUpdate(r *HTTPRequest) error {
	req := &protoManage.Manager{}
	err := request.unmarshalWithHttp(r, req)
	if err != nil {
		return err
	}
	err = request.Data.ManagerUpdate(req)
	if err != nil {
		return err
	}
	err = request.marshalWithHttp(r, req)
	if err != nil {
		return err
	}
	return nil
}

//更新管理员密码
func (request *Request) ReqManagerUpdatePasswd(r *HTTPRequest) error {
	req := &protoManage.Manager{}
	err := request.unmarshalWithHttp(r, req)
	if err != nil {
		return err
	}
	err = request.Data.ManagerUpdatePasswd(r.userID, req)
	if err != nil {
		return err
	}
	err = request.marshalWithHttp(r, req)
	if err != nil {
		return err
	}
	return nil
}

//更新管理员设置
func (request *Request) ReqManagerUpdateSetting(r *HTTPRequest) error {
	req := &protoManage.Manager{}
	err := request.unmarshalWithHttp(r, req)
	if err != nil {
		return err
	}
	err = request.Data.ManagerUpdateSetting(r.userID, req)
	if err != nil {
		return err
	}
	err = request.marshalWithHttp(r, req)
	if err != nil {
		return err
	}
	return nil
}

//管理员信息查询按ID
func (request *Request) ReqManagerFindByID(r *HTTPRequest) error {
	req := &protoManage.Manager{}
	err := request.unmarshalWithHttp(r, req)
	if err != nil {
		return err
	}
	err = request.Data.ManagerFindByID(r.userID, req)
	if err != nil {
		return err
	}
	err = request.marshalWithHttp(r, req)
	if err != nil {
		return err
	}
	return nil
}

//管理员昵称查询
func (request *Request) ReqManagerFindNickName(r *HTTPRequest) error {
	req := &protoManage.ReqManagerList{}
	err := request.unmarshalWithHttp(r, req)
	if err != nil {
		return err
	}
	ans, err := request.Data.ManagerFindNickName(req)
	if err != nil {
		return err
	}
	err = request.marshalWithHttp(r, ans)
	if err != nil {
		return err
	}
	return nil
}

//下级管理员信息查询
func (request *Request) ReqManagerFindLowLevel(r *HTTPRequest) error {
	req := &protoManage.ReqManagerList{}
	err := request.unmarshalWithHttp(r, req)
	if err != nil {
		return err
	}
	ans, err := request.Data.ManagerFindLowLevel(r.userID, req)
	if err != nil {
		return err
	}
	err = request.marshalWithHttp(r, ans)
	if err != nil {
		return err
	}
	return nil
}

