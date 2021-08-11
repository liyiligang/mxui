package request

import "github.com/liyiligang/klee/app/protoFiles/protoManage"

//顶部链接信息查询
func (request *Request) ReqTopLinkFind(userID int64, message []byte)([]byte, error){
	req := protoManage.ReqTopLinkList{}
	err := req.Unmarshal(message)
	if err != nil {
		return nil, err
	}
	ans, err := request.Data.TopLinkFind(req)
	if err != nil {
		return nil, err
	}
	pbByte, err := ans.Marshal()
	if err != nil {
		return nil, err
	}
	return pbByte, err
}

//按ID查询顶部链接信息
func (request *Request) ReqTopLinkFindByID(userID int64, message []byte)([]byte, error){
	req := protoManage.TopLink{}
	err := req.Unmarshal(message)
	if err != nil {
		return nil, err
	}
	err = request.Data.TopLinkFindByID(&req)
	if err != nil {
		return nil, err
	}
	pbByte, err := req.Marshal()
	if err != nil {
		return nil, err
	}
	return pbByte, err
}

//顶部链接新增
func (request *Request) ReqTopLinkAdd(userID int64, message []byte)([]byte, error){
	req := protoManage.TopLink{}
	err := req.Unmarshal(message)
	if err != nil {
		return nil, err
	}
	err = request.Data.TopLinkAdd(&req)
	if err != nil {
		return nil, err
	}
	pbByte, err := req.Marshal()
	if err != nil {
		return nil, err
	}
	return pbByte, err
}

//顶部链接删除
func (request *Request) ReqTopLinkDel(userID int64, message []byte)([]byte, error){
	req := protoManage.TopLink{}
	err := req.Unmarshal(message)
	if err != nil {
		return nil, err
	}
	err = request.Data.TopLinkDel(&req)
	if err != nil {
		return nil, err
	}
	pbByte, err := req.Marshal()
	if err != nil {
		return nil, err
	}
	return pbByte, err
}

//顶部链接更新
func (request *Request) ReqTopLinkUpdate(userID int64, message []byte)([]byte, error){
	req := protoManage.TopLink{}
	err := req.Unmarshal(message)
	if err != nil {
		return nil, err
	}
	err = request.Data.TopLinkUpdate(&req)
	if err != nil {
		return nil, err
	}
	pbByte, err := req.Marshal()
	if err != nil {
		return nil, err
	}
	return pbByte, err
}