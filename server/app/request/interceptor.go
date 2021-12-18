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
	"github.com/gin-gonic/gin"
	"github.com/gogo/protobuf/proto"
	"github.com/liyiligang/base/component/Jerror"
	"github.com/liyiligang/base/component/Jlog"
	"github.com/liyiligang/base/component/Jtool"
	"github.com/liyiligang/klee/app/check"
	"github.com/liyiligang/klee/app/protoFiles/protoManage"
	"google.golang.org/grpc"
	"mime/multipart"
	"net/http"
)

type HTTPRequest struct {
	tokenData
	ginContext 			*gin.Context
	abort				bool
	userData 			[]byte
	userFileHeader 		*multipart.FileHeader
}

func (request *Request) NotFoundWithHttp(c *gin.Context) {
	//c.Redirect(http.StatusMovedPermanently, "/not found")
	c.String(http.StatusNotFound, "not found")
}

func (request *Request) ParseTokenWithHttp(c *gin.Context) {
	token := c.GetHeader("token")
	tokenData, err := request.ParseToken(token)
	if err != nil {
		request.errorWithHttp(&HTTPRequest{ginContext: c, abort: true},
			protoManage.HttpError_HttpErrorLoginWithToken, err)
		return
	}
	c.Request.Header.Add("userID", Jtool.Int64ToString(tokenData.userID))
	c.Request.Header.Add("userLevel",Jtool.Int64ToString(int64(tokenData.userLevel)))
	c.Next()
}

func (request *Request) errorWithHttp(r *HTTPRequest, errCode protoManage.HttpError, err error) {
	Jlog.Warn("http request error", "url", r.ginContext.Request.URL.String(),
		"userID", r.userID, "err", err.Error())
	if r.abort {
		r.ginContext.Abort()
	}
	r.ginContext.String(int(errCode), err.Error())
}

func (request *Request) unmarshalWithHttp(r *HTTPRequest, message proto.Message) error {
	err := proto.Unmarshal(r.userData, message)
	if err != nil {
		return Jerror.NewErrWithCode(int(protoManage.HttpError_HttpErrorUnmarshal), err)
	}
	Jlog.Debug("http request input", "url", r.ginContext.Request.URL.String(),
		"userID", r.userID,"message", message)
	return nil
}

func (request *Request) marshalWithHttp(r *HTTPRequest, message proto.Message) error {
	var err error
	r.userData, err = proto.Marshal(message)
	if err != nil {
		return Jerror.NewErrWithCode(int(protoManage.HttpError_HttpErrorMarshal), err)
	}
	Jlog.Debug("http request output", "url", r.ginContext.Request.URL.String(),
		"userID", r.userID,"message", message)
	return nil
}

func (request *Request) ConvertWithHttp (f func(r *HTTPRequest) error) func(*gin.Context) {
	return func(c *gin.Context) {
		var err error
		hTTPRequest := &HTTPRequest{
			ginContext: c,
			tokenData:tokenData{
				userID: Jtool.StringToInt64(c.GetHeader("userID")),
				userLevel: protoManage.Level(Jtool.StringToInt64(c.GetHeader("userLevel"))),
			},
		}
		hTTPRequest.userData, err = c.GetRawData()
		if err != nil {
			request.errorWithHttp(hTTPRequest, protoManage.HttpError_HttpErrorGetBody, err)
			return
		}
		err = f(hTTPRequest)
		if err != nil {
			errWithCode := Jerror.AssertErrWithCode(err)
			if errWithCode != nil {
				request.errorWithHttp(hTTPRequest, protoManage.HttpError(errWithCode.Code), errWithCode.Err)
			}else {
				request.errorWithHttp(hTTPRequest, protoManage.HttpError_HttpErrorRequest, err)
			}
			return
		}
		c.String(http.StatusOK, string(hTTPRequest.userData))
	}
}

func (request *Request) ConvertWithHttpFileUpload (f func(r *HTTPRequest) error) func(*gin.Context) {
	return func(c *gin.Context) {
		var err error
		hTTPRequest := &HTTPRequest{
			ginContext: c,
			tokenData:tokenData{
				userID: Jtool.StringToInt64(c.GetHeader("userID")),
				userLevel: protoManage.Level(Jtool.StringToInt64(c.GetHeader("userLevel"))),
			},
		}
		hTTPRequest.userFileHeader, err = c.FormFile("file")
		if err != nil {
			request.errorWithHttp(hTTPRequest, protoManage.HttpError_HttpErrorGetFile, err)
			return
		}
		err = check.NodeFileSizeCheck(hTTPRequest.userFileHeader.Size)
		if err != nil {
			request.errorWithHttp(hTTPRequest, protoManage.HttpError_HttpErrorCheckFile, err)
			return
		}
		strData, ok := c.GetPostForm("data")
		if !ok {
			request.errorWithHttp(hTTPRequest, protoManage.HttpError_HttpErrorGetBody,
				errors.New("post form key 'data' is net exist"))
			return
		}
		hTTPRequest.userData = Jtool.RunesToBytes([]byte(strData))
		err = f(hTTPRequest)
		if err != nil {
			errWithCode := Jerror.AssertErrWithCode(err)
			if errWithCode != nil {
				request.errorWithHttp(hTTPRequest, protoManage.HttpError(errWithCode.Code), errWithCode.Err)
			}else {
				request.errorWithHttp(hTTPRequest, protoManage.HttpError_HttpErrorRequest, err)
			}
			return
		}
		c.String(http.StatusOK, string(hTTPRequest.userData))
	}
}

func (request *Request) ConvertWithHttpFileDownload (f func(r *HTTPRequest) error) func(*gin.Context) {
	return func(c *gin.Context) {
		token := c.Query("token")
		userData, err := request.ParseToken(token)
		if err != nil {
			request.errorWithHttp(&HTTPRequest{ginContext: c, abort: true},
				protoManage.HttpError_HttpErrorLoginWithToken, err)
			return
		}
		hTTPRequest := &HTTPRequest{
			ginContext: c,
			tokenData: *userData,
		}
		err = f(hTTPRequest)
		if err != nil {
			errWithCode := Jerror.AssertErrWithCode(err)
			if errWithCode != nil {
				request.errorWithHttp(hTTPRequest, protoManage.HttpError(errWithCode.Code), errWithCode.Err)
			}else {
				request.errorWithHttp(hTTPRequest, protoManage.HttpError_HttpErrorRequest, err)
			}
			return
		}
		c.File(string(hTTPRequest.userData))
	}
}

func (request *Request) RpcUnaryInterceptor (ctx context.Context, req interface{},
	info *grpc.UnaryServerInfo, handler grpc.UnaryHandler) (resp interface{}, err error){
	ans, err := handler(ctx, req)
	if err != nil{
		Jlog.Warn("rpc error:", info.FullMethod, err)
	}
	return ans, err
}

func (request *Request) RpcStreamInterceptor (srv interface{}, ss grpc.ServerStream,
	info *grpc.StreamServerInfo, handler grpc.StreamHandler) error {
	err := handler(srv, ss)
	if err != nil{
		Jlog.Warn("rpc error:", info.FullMethod, err)
	}
	return err
}