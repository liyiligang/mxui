package data

import (
	"github.com/liyiligang/klee/app/check"
	"github.com/liyiligang/klee/app/convert"
	"github.com/liyiligang/klee/app/protoFiles/protoManage"
	"github.com/liyiligang/klee/app/typedef/orm"
	"github.com/pkg/errors"
	"gorm.io/gorm"
)

//新增节点报告
func (data *Data) NodeReportAdd(protoNodeReport *protoManage.NodeReport) error {
	if err := check.NodeReportCheck(protoNodeReport); err != nil {
		return err
	}
	ormNodeReport := &orm.NodeReport{NodeID: protoNodeReport.NodeID, Name: protoNodeReport.Name,
		Func: protoNodeReport.Func, Level: int32(protoNodeReport.Level),
		State: int32(protoManage.State_StateNormal)}
	if err := data.DB.AddNodeReport(ormNodeReport); err != nil {
		return err
	}
	convert.OrmBaseToProtoBase(&ormNodeReport.Base, &protoNodeReport.Base)
	return nil
}

//删除节点报告
func (data *Data) NodeReportDel(protoNodeReport *protoManage.NodeReport) error {
	err := data.NodeReportValDelByNodeReportID(protoNodeReport.Base.ID)
	if err != nil {
		return err
	}
	return data.DB.DelNodeReport(orm.NodeReport{Base: orm.Base{ID: protoNodeReport.Base.ID}})
}

//按节点ID删除所有节点报告
func (data *Data) NodeReportDelAllByNodeID(protoNodeReport *protoManage.NodeReport) error {
	err := data.NodeReportValDelByNodeID(protoNodeReport.NodeID)
	if err != nil {
		return err
	}
	return data.DB.DelAllNodeReportByNodeID(orm.NodeReport{NodeID: protoNodeReport.NodeID})
}

//更新或者新增节点报告
func (data *Data) NodeReportUpdateOrAdd(protoNodeReport *protoManage.NodeReport) error {
	err := data.NodeReportFindIDByIndex(protoNodeReport)
	if err != nil {
		if errors.Is(err, gorm.ErrRecordNotFound) {
			return data.NodeReportAdd(protoNodeReport)
		}
		return err
	}
	return data.NodeReportInfoUpdate(protoNodeReport)
}

//按ID查询节点报告
func (data *Data) NodeReportFindByID(protoNodeReport *protoManage.NodeReport) error {
	ormNodeReport, err := data.DB.FindNodeReportByID(orm.NodeReport{Base: orm.Base{ID: protoNodeReport.Base.ID}})
	if err != nil {
		return err
	}
	convert.OrmNodeReportToProtoNodeReport(ormNodeReport, protoNodeReport)
	return nil
}

//按名称查询节点报告ID
func (data *Data) NodeReportFindIDByIndex(protoNodeReport *protoManage.NodeReport) error {
	ormNodeReport, err :=data.DB.FindNodeReportByIndex(orm.NodeReport{
		NodeID: protoNodeReport.NodeID, Name: protoNodeReport.Name})
	if err != nil {
		return err
	}
	convert.OrmBaseToProtoBase(&ormNodeReport.Base, &protoNodeReport.Base)
	return nil
}

//查找节点报告信息
func (data *Data) NodeReportFind(req protoManage.ReqNodeReportList) (*protoManage.AnsNodeReportList, error) {
	ormReportList, err := data.DB.FindNodeReport(req.Filter)
	if err != nil {
		return nil, err
	}
	protoNodeReportList := convert.OrmNodeReportListToProtoNodeReportList(ormReportList)
	ormNodeList, err := data.DB.FindNodeByNodeReport(req.Filter)
	if err != nil {
		return nil, err
	}
	protoNodeList := convert.OrmNodeListToProtoNodeList(ormNodeList)
	ormNodeReportVal, err := data.DB.FindLastNodeReportValByNodeReport(req.Filter)
	if err != nil {
		return nil, err
	}
	protoNodeReportVal := convert.OrmNodeReportValListToProtoNodeReportValList(ormNodeReportVal)
	count, err := data.DB.FindNodeReportCount(req.Filter)
	if err != nil {
		return nil, err
	}
	return &protoManage.AnsNodeReportList{NodeReportList: protoNodeReportList,
		NodeList: protoNodeList, NodeReportValList: protoNodeReportVal, Length:count}, nil
}

//更新节点报告信息
func (data *Data) NodeReportInfoUpdate(protoNodeReport *protoManage.NodeReport) error {
	return data.DB.UpdateNodeReportInfo(orm.NodeReport{Base: orm.Base{ID: protoNodeReport.Base.ID},
		Func: protoNodeReport.Func, Level: int32(protoNodeReport.Level), State: int32(protoManage.State_StateNormal)})
}

//按节点ID更新节点报告状态
func (data *Data) NodeReportStateUpdateByNodeID(protoNodeReport *protoManage.NodeReport) error {
	return data.DB.UpdateNodeReportStateByNodeID(orm.NodeReport{NodeID: protoNodeReport.NodeID,
		State: int32(protoNodeReport.State)})
}


