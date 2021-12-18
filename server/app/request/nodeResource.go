// Copyright 2021 The Authors. All rights reserved.
// Author: liyiligang
// Date: 2021/11/23 14:55
// Description:

package request

import (
	"github.com/liyiligang/klee/app/protoFiles/protoManage"
	"github.com/liyiligang/klee/app/typedef/config"
)

//节点资源校验
func (request *Request) ReqNodeResourceCheck(r *HTTPRequest) error {
	req := &protoManage.NodeResource{}
	err := request.unmarshalWithHttp(r, req)
	if err != nil {
		return err
	}
	err = request.Data.ReqNodeResourceCheck(req)
	if err != nil {
		return err
	}
	err = request.marshalWithHttp(r, req)
	if err != nil {
		return err
	}
	return nil
}

func (request *Request) HttpUploadFile(r *HTTPRequest) error  {
	req := &protoManage.NodeResource{}
	err := request.unmarshalWithHttp(r, req)
	if err != nil {
		return err
	}
	filePath := config.LocalConfig.File.SavePath + req.UUID
	err = r.ginContext.SaveUploadedFile(r.userFileHeader, filePath)
	if err != nil {
		return err
	}
	err = request.marshalWithHttp(r, req)
	if err != nil {
		return err
	}
	return nil
}

func (request *Request) HttpDownloadFile(r *HTTPRequest) error {
	path := r.ginContext.Param("UUID")
	r.userData = []byte(config.LocalConfig.File.SavePath + path)
	return nil
}

//节点资源删除
func (request *Request) ReqNodeResourceDel(r *HTTPRequest) error {
	req := &protoManage.NodeResource{}
	err := request.unmarshalWithHttp(r, req)
	if err != nil {
		return err
	}
	err = request.Data.ReqNodeResourceDel(req)
	if err != nil {
		return err
	}
	err = request.marshalWithHttp(r, req)
	if err != nil {
		return err
	}
	return nil
}
