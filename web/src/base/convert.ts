import {protoManage} from "../proto/manage";

export module convert {
    export function getColorByState(state: protoManage.State|undefined|null):string {
        switch (state) {
            case protoManage.State.StateNot:
                return "color-state-main"
            case protoManage.State.StateUnknow:
                return "color-state-lose"
            case protoManage.State.StateNormal:
                return "color-state-success"
            case protoManage.State.StateWarn:
                return "color-state-warning"
            case protoManage.State.StateError:
                return "color-state-danger"
        }
        return "color-state-main"
    }

    export function getTableRowColorByState(state: protoManage.State|undefined|null):string {
        switch (state) {
            case protoManage.State.StateUnknow:
                return "table-color-state-info"
            case protoManage.State.StateNormal:
                return "table-color-state-success"
            case protoManage.State.StateWarn:
                return "table-color-state-warning"
            case protoManage.State.StateError:
                return "table-color-state-danger"
        }
        return ""
    }

    export function getColorByManagerState(state: protoManage.State|undefined|null):string {
        switch (state) {
            case protoManage.State.StateNormal:
                return "color-state-success"
        }
        return "color-state-lose"
    }

    export function getColorByLevel(level: protoManage.Level|undefined|null):string {
        switch (level) {
            case protoManage.Level.LevelPrimary:
                return "color-state-main"
            case protoManage.Level.LevelIntermediate:
                return "color-state-success"
            case protoManage.Level.LevelSenior:
                return "color-state-warning"
            case protoManage.Level.LevelSuper:
                return "color-state-danger"
        }
        return "color-state-lose"
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

    export function getStateViewType(level: protoManage.State|undefined|null):string {
        switch (level) {
            case protoManage.State.StateUnknow:
                return "info"
            case protoManage.State.StateNormal:
                return "success"
            case protoManage.State.StateWarn:
                return "warning"
            case protoManage.State.StateError:
                return "danger"
        }
        return ""
    }

    export function getManagerLevelName(level: protoManage.Level|undefined|null):string {
        switch (level) {
            case protoManage.Level.LevelPrimary:
                return "访客"
            case protoManage.Level.LevelIntermediate:
                return "员工"
            case protoManage.Level.LevelSenior:
                return "管理员"
            case protoManage.Level.LevelSuper:
                return "超级管理员"
        }
        return "无"
    }

    export function getLevelViewType(level: protoManage.Level|undefined|null):string {
        switch (level) {
            case protoManage.Level.LevelPrimary:
                return ""
            case protoManage.Level.LevelIntermediate:
                return "success"
            case protoManage.Level.LevelSenior:
                return "warning"
            case protoManage.Level.LevelSuper:
                return "danger"
        }
        return "info"
    }

    export function getNodeFuncCallStateName(state: protoManage.State|undefined|null):string {
        switch (state) {
            case protoManage.State.StateUnknow:
                return "超时"
            case protoManage.State.StateNormal:
                return "成功"
            case protoManage.State.StateWarn:
                return "异常"
            case protoManage.State.StateError:
                return "失败"
        }
        return "未知"
    }

    export function getNodeFuncCallStateIcon(state: protoManage.State|undefined|null):string {
        switch (state) {
            case protoManage.State.StateUnknow:
                return "el-icon-remove"
            case protoManage.State.StateNormal:
                return "el-icon-success"
            case protoManage.State.StateWarn:
                return "el-icon-warning"
            case protoManage.State.StateError:
                return "el-icon-error"
        }
        return "el-icon-question"
    }

    export function getNodeFuncParameterTypeName():string {
        return "表单"
    }

    export function getNodeFuncReturnTypeName(type: protoManage.NodeFuncReturnType|undefined|null):string {
        switch (type) {
            case protoManage.NodeFuncReturnType.NotReturn:
                return "无"
            case protoManage.NodeFuncReturnType.Error:
                return "错误"
            case protoManage.NodeFuncReturnType.Text:
                return "文本"
            case protoManage.NodeFuncReturnType.Json:
                return "对象"
            case protoManage.NodeFuncReturnType.Link:
                return "链接"
            case protoManage.NodeFuncReturnType.Image:
                return "图片"
            case protoManage.NodeFuncReturnType.Media:
                return "媒体"
            case protoManage.NodeFuncReturnType.File:
                return "文件"
            case protoManage.NodeFuncReturnType.Table:
                return "表格"
            case protoManage.NodeFuncReturnType.Charts:
                return "图表"
        }
        return "未知"
    }

    export function getNodeReportIntervalStr(interval: number):string {
        if (interval <= 0) {
            return "手动"
        }
        let conf = [{max:1000, name:"毫秒"}, {max:60, name:"秒"},{max:60, name:"分"},
            {max:24, name:"时"}, {max:30, name:"天"}]

        let calc = function (index:number, val:number):string {
            if (index >= conf.length){
                return ""
            }
            let f = conf[index]
            if (index == conf.length - 1){
                return val + f.name
            }
            if (val >= f.max){
                let c = parseInt(String(val / f.max))
                let y = val % f.max
                let ys = ""
                if (y > 0) {
                    ys = y + f.name
                }
                return calc(index + 1, c) + ys
            }
            return val + f.name
        }
        return calc(0, interval) + "/次"
    }

    export function isGrayByState(state: protoManage.State):boolean {
        return state < protoManage.State.StateNormal || state > protoManage.State.StateError
    }

    export function isGrayByLevel(state: protoManage.State):boolean {
        return state < protoManage.State.StateUnknow || state > protoManage.State.StateError
    }

    export function uint8ArrayToString(data: Uint8Array):string {
        let dataString = "";
        for (let i = 0; i < data.length; i++) {
            dataString += String.fromCharCode(data[i]);
        }
        return dataString
    }

    export function stringToUint8Array(str: string):Uint8Array {
    	let arr:Array<number> = [];
    	for (let i = 0, j = str.length; i < j; ++i) {
    		arr.push(str.charCodeAt(i));
    	}
    	let tmpUint8Array = new Uint8Array(arr);
    	return tmpUint8Array
    }

    export function timeStampToFormatDate (timeStamp:number|undefined|null):string {
        if (timeStamp == 0 || timeStamp==undefined){
            return "0000-00-00 00:00:00"
        }
        function two(s:number){
            return s<10?"0"+s:s;
        }
        let date = new Date(timeStamp)
        let year = date.getFullYear();  //取得4位数的年份
        let month = date.getMonth() + 1;  //取得日期中的月份，其中0表示1月，11表示12月
        let day = date.getDate();      //返回日期月份中的天数（1到31）
        let hour = date.getHours();     //返回日期中的小时数（0到23）
        let minute = date.getMinutes(); //返回日期中的分钟数（0到59）
        let second = date.getSeconds(); //返回日期中的秒数（0到59）
        return year + "-" + two(month) + "-" + two(day) + " " + two(hour) + ":" + two(minute) + ":" + two(second);
    }

    export function dateStringToTimeStamp(dateStr:string):number {
        return new Date(dateStr).getTime()
    }

    export function timeStampToDateString(timeStamp:number):string {
        return new Date(timeStamp).toLocaleString()
    }

    export function dataToArray(data:any):any[] {
        if (data == undefined) {
            return data
        }
        return Array.isArray(data) ? data : [data]
    }

    export function dataToTimeArray(query:any):any[] {
        let senderTimeArray = convert.dataToArray(query)
        let protoSenderTime = new Array<protoManage.Time>()
        if (senderTimeArray) {
            for (let item of senderTimeArray) {
                let senderTime = String(item).split("-")
                let time = protoManage.Time.create({BeginTime: Number(senderTime[0]), EndTime: Number(senderTime[1])})
                protoSenderTime.push(time)
            }
        }
        return protoSenderTime
    }
}