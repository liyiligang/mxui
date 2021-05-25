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

    export function uint8ArrayToString(data: Uint8Array):string {
        let dataString = "";
        for (let i = 0; i < data.length; i++) {
            dataString += String.fromCharCode(data[i]);
        }
        return dataString
    }

    // export function stringToUint8Array(str: string):Uint8Array {
    // 	let arr = [];
    // 	for (let i = 0, j = str.length; i < j; ++i) {
    // 		arr.push(str.charCodeAt(i));
    // 	}
    // 	let tmpUint8Array = new Uint8Array(arr);
    // 	return tmpUint8Array
    // }

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
        return new Date(dateStr).getTime() / 1000
    }

    export function timeStampToDateString(timeStamp:number):string {
        return new Date(timeStamp*1000).toLocaleString()
    }
}