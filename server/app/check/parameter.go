package check

import (
	"github.com/liyiligang/base/component/Jtool"
	"github.com/liyiligang/klee/app/protoFiles/protoManage"
	"github.com/liyiligang/klee/app/typedef/constant"
	"github.com/pkg/errors"
	"unicode/utf8"
)

const ConstStringLimitMaxLength = 20

func BaseIDCheck(checkID int64, nodeID int64) error {
	if checkID != nodeID {
		return errors.New(constant.ConstNodeStr + "ID错误:" +
			"checkID:" + Jtool.Int64ToString(checkID) +
			", nodeID:" + Jtool.Int64ToString(nodeID))
	}
	return nil
}

func ManagerAddCheck(protoManager *protoManage.Manager) error {
	if protoManager.NickName == "" {
		return errors.New("昵称不能为空值")
	}
	if protoManager.Name == "" {
		return errors.New("用户名不能为空值")
	}
	if protoManager.Password == "" {
		return errors.New("密码不能为空值")
	}
	if protoManager.Level == protoManage.Level_LevelNot {
		return errors.New("权限不能设置为零值")
	}
	return nil
}

func ManagerUpdatePasswordCheck(protoManager *protoManage.Manager) error {
	if protoManager.Token == "" {
		return errors.New("原密码不能为空值")
	}
	if protoManager.Password == "" {
		return errors.New("新密码不能为空值")
	}
	if protoManager.Password == protoManager.Token {
		return errors.New("原密码与新密码相同")
	}
	return nil
}

func TopLinkCheck(protoTopLink *protoManage.TopLink) error {
	if protoTopLink.Name == "" {
		return errors.New("名称不能为空值")
	}
	if protoTopLink.Url == "" {
		return errors.New("链接Url不能为空值")
	}
	return nil
}

func NodeCheck(protoNode *protoManage.Node) error {
	if protoNode.Name == "" {
		return NameIsEmpty(constant.ConstNodeStr)
	}
	if utf8.RuneCountInString(protoNode.Name) > ConstStringLimitMaxLength {
		return NameIsTooLong(constant.ConstNodeStr, ConstStringLimitMaxLength)
	}
	return nil
}

func NodeFuncCheck(protoNodeFunc *protoManage.NodeFunc) error {
	if protoNodeFunc.NodeID == 0 {
		return  IdIsZero(constant.ConstNodeStr)
	}
	if protoNodeFunc.Name == "" {
		return NameIsEmpty(constant.ConstNodeFuncStr)
	}
	if protoNodeFunc.Func == "" {
		return NameIsEmpty(constant.ConstNodeFuncStr +"函数")
	}
	if utf8.RuneCountInString(protoNodeFunc.Name) > ConstStringLimitMaxLength {
		return NameIsTooLong(constant.ConstNodeFuncStr, ConstStringLimitMaxLength)
	}
	if utf8.RuneCountInString(protoNodeFunc.Func) > ConstStringLimitMaxLength {
		return NameIsTooLong(constant.ConstNodeFuncStr+"函数", ConstStringLimitMaxLength)
	}
	return nil
}

func NodeReportCheck(protoNodeReport *protoManage.NodeReport) error {
	if protoNodeReport.NodeID == 0 {
		return  IdIsZero(constant.ConstNodeStr)
	}
	if protoNodeReport.Name == "" {
		return NameIsEmpty(constant.ConstNodeReportStr)
	}
	if protoNodeReport.Func == "" {
		return NameIsEmpty(constant.ConstNodeReportStr +"函数")
	}
	if utf8.RuneCountInString(protoNodeReport.Name) > ConstStringLimitMaxLength {
		return NameIsTooLong(constant.ConstNodeReportStr+"标签", ConstStringLimitMaxLength)
	}
	if utf8.RuneCountInString(protoNodeReport.Func) > ConstStringLimitMaxLength {
		return NameIsTooLong(constant.ConstNodeReportStr, ConstStringLimitMaxLength)
	}
	return nil
}

func NodeNotifyCheck(protoNodeNotify *protoManage.NodeNotify) error {
	if protoNodeNotify.SenderID == 0 {
		return  IdIsZero(constant.ConstNodeStr)
	}
	return nil
}

func NameIsEmpty(name string) error {
	return errors.New(name + "名不能为空值")
}

func NameIsTooLong(name string, limitSize uint64) error {
	return errors.New(name + "名长度不能超过" + Jtool.Uint64ToString(limitSize)  +"个字符")
}

func IdIsZero(name string) error {
	return errors.New(name + "ID不能为零值")
}
