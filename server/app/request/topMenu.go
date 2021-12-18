package request

import (
	"github.com/liyiligang/klee/app/protoFiles/protoManage"
)

//顶部链接信息查询
func (request *Request) ReqTopLinkFind(r *HTTPRequest) error {
	req := &protoManage.ReqTopLinkList{}
	err := request.unmarshalWithHttp(r, req)
	if err != nil {
		return err
	}
	ans, err := request.Data.TopLinkFind(req)
	if err != nil {
		return err
	}
	err = request.marshalWithHttp(r, ans)
	if err != nil {
		return err
	}
	return nil
}

//按ID查询顶部链接信息
func (request *Request) ReqTopLinkFindByID(r *HTTPRequest) error {
	req := &protoManage.TopLink{}
	err := request.unmarshalWithHttp(r, req)
	if err != nil {
		return err
	}
	err = request.Data.TopLinkFindByID(req)
	if err != nil {
		return err
	}
	err = request.marshalWithHttp(r, req)
	if err != nil {
		return err
	}
	return nil
}

//顶部链接新增
func (request *Request) ReqTopLinkAdd(r *HTTPRequest) error {
	req := &protoManage.TopLink{}
	err := request.unmarshalWithHttp(r, req)
	if err != nil {
		return err
	}
	err = request.Data.TopLinkAdd(req)
	if err != nil {
		return err
	}
	err = request.marshalWithHttp(r, req)
	if err != nil {
		return err
	}
	return nil
}

//顶部链接删除
func (request *Request) ReqTopLinkDel(r *HTTPRequest) error {
	req := &protoManage.TopLink{}
	err := request.unmarshalWithHttp(r, req)
	if err != nil {
		return err
	}
	err = request.Data.TopLinkDel(req)
	if err != nil {
		return err
	}
	err = request.marshalWithHttp(r, req)
	if err != nil {
		return err
	}
	return nil
}

//顶部链接更新
func (request *Request) ReqTopLinkUpdate(r *HTTPRequest) error {
	req := &protoManage.TopLink{}
	err := request.unmarshalWithHttp(r, req)
	if err != nil {
		return err
	}
	err = request.Data.TopLinkUpdate(req)
	if err != nil {
		return err
	}
	err = request.marshalWithHttp(r, req)
	if err != nil {
		return err
	}
	return nil
}