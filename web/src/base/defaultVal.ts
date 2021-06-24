import {protoManage} from "../proto/manage";

export module defaultVal {
    export function getDefaultProtoNodeGroup():protoManage.NodeGroup {
        return protoManage.NodeGroup.create({
            Base: protoManage.Base.create(),
            Name: "未知"
        })
    }

    export function getDefaultProtoNodeType():protoManage.NodeType {
        return protoManage.NodeType.create({
            Base: protoManage.Base.create(),
            Name: "未知"
        })
    }

    export function getDefaultProtoNode():protoManage.Node {
        return protoManage.Node.create({
            Base: protoManage.Base.create(),
            Name: "未知"
        })
    }

    export function getDefaultProtoNodeLink():protoManage.NodeLink {
        return protoManage.NodeLink.create({
            Base: protoManage.Base.create()
        })
    }

    export function getDefaultProtoNodeFunc():protoManage.NodeFunc {
        return protoManage.NodeFunc.create({
            Base: protoManage.Base.create(),
            Name: "未知"
        })
    }

    export function getDefaultProtoNodeFuncCall():protoManage.NodeFuncCall {
        return protoManage.NodeFuncCall.create({
            Base: protoManage.Base.create(),
        })
    }

    export function getDefaultProtoNodeReport():protoManage.NodeReport{
        return protoManage.NodeReport.create({
            Base: protoManage.Base.create(),
            Name: "未知"
        })
    }

    export function getDefaultProtoNodeReportVal():protoManage.NodeReportVal{
        return protoManage.NodeReportVal.create({
            Base: protoManage.Base.create()
        })
    }
}