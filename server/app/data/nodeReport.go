package data

import (
	"github.com/liyiligang/base/protoFiles/protoManage"
	"github.com/liyiligang/manage/app/check"
	"github.com/liyiligang/manage/app/convert"
	"github.com/liyiligang/manage/app/typedef/orm"
	"github.com/pkg/errors"
	"gorm.io/gorm"
)

//新增节点报告
func (data *Data) NodeReportAdd(protoNodeReport *protoManage.NodeReport) error {
	if err := check.NodeReportCheck(protoNodeReport); err != nil {
		return err
	}
	return data.DB.AddNodeReport(orm.NodeReport{
		NodeID: protoNodeReport.NodeID,
		Flag: protoNodeReport.Flag,
		Name: protoNodeReport.Name,
	})
}

//删除节点报告
func (data *Data) NodeReportDel(protoNodeReport *protoManage.NodeReport) error {
	return data.DB.DelNodeReport(orm.NodeReport{Base: orm.Base{ID: protoNodeReport.Base.ID}})
}

//按节点ID删除所有节点报告
func (data *Data) NodeReportDelAllByNodeID(protoNodeReport *protoManage.NodeReport) error {
	return data.DB.DelAllNodeReportByNodeID(orm.NodeReport{NodeID: protoNodeReport.NodeID})
}

//更新节点报告值
func (data *Data) NodeReportValUpdate(protoNodeReportVal *protoManage.NodeReportVal) error {
	return data.DB.UpdateNodeReportValueByID(orm.NodeReportVal{
		Base:  orm.Base{ID: protoNodeReportVal.Base.ID},
		Value: protoNodeReportVal.Value,
		State: int32(protoNodeReportVal.State),
	})
}

//按节点报告名更新节点报告值或者新增节点报告
func (data *Data) NodeReportValUpdateOrAddByName(protoNodeReport *protoManage.NodeReport) error {
	err := data.NodeReportFindIDByName(protoNodeReport)
	if err != nil {
		if errors.Is(err, gorm.ErrRecordNotFound) {
			return data.NodeReportAdd(protoNodeReport)
		}
		return err
	}
	//return app.nodeReportValUpdate(protoNodeReport)
	return nil
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
func (data *Data) NodeReportFindIDByName(protoNodeReport *protoManage.NodeReport) error {
	ormNodeReport, err :=data.DB.FindNodeReportByName(orm.NodeReport{Flag: protoNodeReport.Flag, Name: protoNodeReport.Name, NodeID: protoNodeReport.NodeID})
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

//查找节点报告值信息
func (data *Data) NodeReportValFind(req protoManage.ReqNodeReportValList) (*protoManage.AnsNodeReportValList, error) {
	ormReportValList, err := data.DB.FindNodeReportVal(req.Filter)
	if err != nil {
		return nil, err
	}
	protoNodeReportValList := convert.OrmNodeReportValListToProtoNodeReportValList(ormReportValList)
	return &protoManage.AnsNodeReportValList{NodeReportValList: protoNodeReportValList}, nil
}
