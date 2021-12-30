/*
 * Copyright 2021 liyiligang.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


package request

import (
	"context"
	"errors"
	"github.com/liyiligang/base/component/Jrpc"
	"github.com/liyiligang/base/component/Jtool"
	"github.com/liyiligang/mxrpc/protoFiles/protoManage"
	"github.com/liyiligang/mxrpc/typedef/config"
	"github.com/liyiligang/mxrpc/typedef/constant"
	"io"
	"os"
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

func (request *Request) ReqNodeResourceUpload(r *HTTPRequest) error  {
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

func (request *Request) ReqNodeResourceDownload(r *HTTPRequest) error {
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

func (request *Request) CheckNodeResource(ctx context.Context, nodeResource *protoManage.NodeResource) (*protoManage.NodeResource, error) {
	err := request.Data.ReqNodeResourceCheck(nodeResource)
	if err != nil {
		return nil, err
	}
	return nodeResource, nil
}

func (request *Request) UploadNodeResource(engine protoManage.RpcEngine_UploadNodeResourceServer) (uErr error) {
	rpcContext, err := Jrpc.ParseRpcContext(engine.Context())
	if err != nil {
		return err
	}
	nodeResource := protoManage.NodeResource{}
	err = nodeResource.Unmarshal(rpcContext.RpcStreamClientHeader)
	if err != nil {
		return err
	}
	path := config.LocalConfig.File.SavePath + nodeResource.UUID
	f, err := os.Create(path)
	if err != nil {
		return err
	}
	defer func(){
		_ = f.Close()
		if uErr != nil {
			_ = os.Remove(path)
		}
	}()
	for {
		req, err := engine.Recv()
		if err != nil {
			if errors.Is(err, io.EOF){
				break
			}
			return err
		}
		f.Write(req.Data)
	}
	return engine.SendAndClose(&protoManage.AnsNodeResourceUpload{NodeResource: nodeResource})
}

func (request *Request) DownloadNodeResource(nodeResource *protoManage.ReqNodeResourceDownload,
	engine protoManage.RpcEngine_DownloadNodeResourceServer) error  {
	path := config.LocalConfig.File.SavePath + nodeResource.NodeResource.UUID
	return Jtool.ReadFileWithSize(path, constant.ConstRpcServerMaxMsgSize/2, func(buf []byte) error{
		return engine.Send(&protoManage.AnsNodeResourceDownload{Data: buf})
	})
}



