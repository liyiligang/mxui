import {protoManage} from "../proto/manage";

export module convert {
    export function getColorByState(state: protoManage.State|undefined|null):string {
        switch (state) {
            case protoManage.State.StateNot:
                return "color-state-main"
            case protoManage.State.StateNormal:
                return "color-state-success"
            case protoManage.State.StateWarn:
                return "color-state-warning"
            case protoManage.State.StateError:
                return "color-state-danger"
            case protoManage.State.StateUnknow:
                return "color-state-lose"
        }
        return "color-state-other"
    }

    export function getNodeStateName(state: protoManage.State):string {
        switch (state) {
            case protoManage.State.StateNormal:
                return "正常"
            case protoManage.State.StateWarn:
                return "异常"
            case protoManage.State.StateError:
                return "停机"
        }
        return "未知"
    }

    export function getNodeLinkStateName(state: protoManage.State):string {
        switch (state) {
            case protoManage.State.StateNormal:
                return "已连接"
            case protoManage.State.StateWarn:
                return "连接中"
            case protoManage.State.StateError:
                return "已断开"
        }
        return "未知"
    }


    export function getNodeFuncStateName(state: protoManage.State):string {
        switch (state) {
            case protoManage.State.StateNormal:
                return "普通"
            case protoManage.State.StateWarn:
                return "谨慎"
            case protoManage.State.StateError:
                return "危险"
        }
        return "丢失"
    }

    export function getNodeFuncCallStateName(state: protoManage.State|undefined|null):string {
        switch (state) {
            case protoManage.State.StateNot:
                return "暂无"
            case protoManage.State.StateNormal:
                return "成功"
            case protoManage.State.StateWarn:
                return "异常"
            case protoManage.State.StateError:
                return "失败"
        }
        return "超时"
    }

    export function getNodeReportStateName(state: protoManage.State):string {
        switch (state) {
            case protoManage.State.StateNormal:
                return "正常"
            case protoManage.State.StateWarn:
                return "异常"
            case protoManage.State.StateError:
                return "告警"
        }
        return "丢失"
    }
}