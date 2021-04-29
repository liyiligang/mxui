// Copyright 2019 The Authors. All rights reserved.
// Author: liyiligang
// Date: 2019/12/11 10:11
// Description: 规则检查

package app

import (
	"github.com/liyiligang/base/component/Jtool"
	"github.com/liyiligang/base/protoFiles/protoManage"
	"github.com/pkg/errors"
	"unicode/utf8"
)

const ConstStringLimitMaxLength = 20
const ConstStringColorLength = 7

func (app *App) baseIDCheck(checkID int64, nodeID int64) error {
	if checkID != nodeID {
		return errors.New(ConstNodeStr + "ID错误:" +
			"checkID:" + Jtool.Int64ToString(checkID) +
			", nodeID:" + Jtool.Int64ToString(nodeID))
	}
	return nil
}

func (app *App) managerCheck(protoManager *protoManage.Manager) error {
	if protoManager.Name == "" {
		return errors.New("用户名不能为空值")
	}
	if protoManager.Password == "" {
		return errors.New("用户名密码不能为空值")
	}
	return nil
}

func (app *App) nodeGroupCheck(protoNodeGroup *protoManage.NodeGroup) error {
	if protoNodeGroup.Name == "" {
		return app.nameIsEmpty(ConstNodeGroupStr)
	}
	if utf8.RuneCountInString(protoNodeGroup.Name) > ConstStringLimitMaxLength {
		return app.nameIsTooLong(ConstNodeGroupStr, ConstStringLimitMaxLength)
	}
	return nil
}

func (app *App) nodeTypeCheck(protoNodeType *protoManage.NodeType) error {
	if protoNodeType.Name == "" {
		return app.nameIsEmpty(ConstNodeTypeStr)
	}
	if utf8.RuneCountInString(protoNodeType.Name) > ConstStringLimitMaxLength {
		return app.nameIsTooLong(ConstNodeTypeStr, ConstStringLimitMaxLength)
	}
	return nil
}

func (app *App) nodeCheck(protoNode *protoManage.Node) error {
	if protoNode.GroupID == 0 {
		return  app.idIsZero(ConstNodeGroupStr)
	}
	if protoNode.TypeID == 0 {
		return  app.idIsZero(ConstNodeTypeStr)
	}
	if protoNode.Name == "" {
		return app.nameIsEmpty(ConstNodeStr)
	}
	if utf8.RuneCountInString(protoNode.Name) > ConstStringLimitMaxLength {
		return app.nameIsTooLong(ConstNodeStr, ConstStringLimitMaxLength)
	}
	return nil
}

func (app *App) nodeLinkCheck(protoNodeLink *protoManage.NodeLink) error {
	if protoNodeLink.SourceID == 0 {
		return  app.idIsZero("源"+ConstNodeStr)
	}
	if protoNodeLink.TargetID == 0 {
		return  app.idIsZero("目标"+ConstNodeStr)
	}
	return nil
}

func (app *App) nodeFuncCheck(protoNodeFunc *protoManage.NodeFunc) error {
	if protoNodeFunc.NodeID == 0 {
		return  app.idIsZero(ConstNodeStr)
	}
	if protoNodeFunc.Name == "" {
		return app.nameIsEmpty(ConstNodeFuncStr)
	}
	if protoNodeFunc.Func == "" {
		return app.nameIsEmpty(ConstNodeFuncStr+"函数")
	}
	if utf8.RuneCountInString(protoNodeFunc.Name) > ConstStringLimitMaxLength {
		return app.nameIsTooLong(ConstNodeFuncStr, ConstStringLimitMaxLength)
	}
	if utf8.RuneCountInString(protoNodeFunc.Func) > ConstStringLimitMaxLength {
		return app.nameIsTooLong(ConstNodeFuncStr+"函数", ConstStringLimitMaxLength)
	}
	return nil
}

func (app *App) nodeReportCheck(protoNodeReport *protoManage.NodeReport) error {
	if protoNodeReport.NodeID == 0 {
		return  app.idIsZero(ConstNodeStr)
	}
	if protoNodeReport.Flag == "" {
		return app.nameIsEmpty(ConstNodeReportStr + "标签")
	}
	if protoNodeReport.Name == "" {
		return app.nameIsEmpty(ConstNodeReportStr)
	}
	if utf8.RuneCountInString(protoNodeReport.Flag) > ConstStringLimitMaxLength {
		return app.nameIsTooLong(ConstNodeReportStr, ConstStringLimitMaxLength)
	}
	if utf8.RuneCountInString(protoNodeReport.Name) > ConstStringLimitMaxLength {
		return app.nameIsTooLong(ConstNodeReportStr+"标签", ConstStringLimitMaxLength)
	}
	return nil
}

func (app *App) nodeNotifyCheck(protoNodeNotify *protoManage.NodeNotify) error {
	if protoNodeNotify.SenderID == 0 {
		return  app.idIsZero(ConstNodeStr)
	}
	return nil
}

func (app *App) nameIsEmpty(name string) error {
	return errors.New(name + "名不能为空值")
}

func (app *App) nameIsTooLong(name string, limitSize uint64) error {
	return errors.New(name + "名长度不能超过" + Jtool.Uint64ToString(limitSize)  +"个字符")
}

func (app *App) idIsZero(name string) error {
	return errors.New(name + "ID不能为零值")
}




