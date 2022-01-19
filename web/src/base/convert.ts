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

import {protoManage} from "../proto/manage";
import i18n from '../base/i18n'

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

    export function getColorWithResourceName(state: protoManage.State|undefined|null):string {
        switch (state) {
            case protoManage.State.StateNormal:
                return "success"
        }
        return "danger"
    }

    export function getColorWithResourceState(state: protoManage.State|undefined|null):string {
        switch (state) {
            case protoManage.State.StateNormal:
                return "color-state-success"
        }
        return "color-state-danger"
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
                return i18n.global.t('node.state.normal')
            case protoManage.State.StateWarn:
                return i18n.global.t('node.state.warn')
            case protoManage.State.StateError:
                return i18n.global.t('node.state.error')
        }
        return i18n.global.t('node.state.unknown')
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
                return i18n.global.t('manager.level.primary')
            case protoManage.Level.LevelIntermediate:
                return i18n.global.t('manager.level.intermediate')
            case protoManage.Level.LevelSenior:
                return i18n.global.t('manager.level.senior')
            case protoManage.Level.LevelSuper:
                return i18n.global.t('manager.level.super')
        }
        return i18n.global.t('manager.level.unknown')
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
                return i18n.global.t('nodeFuncCall.state.timeout')
            case protoManage.State.StateNormal:
                return i18n.global.t('nodeFuncCall.state.normal')
            case protoManage.State.StateWarn:
                return i18n.global.t('nodeFuncCall.state.warn')
            case protoManage.State.StateError:
                return i18n.global.t('nodeFuncCall.state.error')
        }
        return i18n.global.t('nodeFuncCall.state.unknown')
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
        return i18n.global.t('nodeFunc.parameterTypeName.form')
    }

    export function getNodeFuncReturnTypeName(type: protoManage.NodeFuncReturnType|undefined|null):string {
        switch (type) {
            case protoManage.NodeFuncReturnType.NotReturn:
                return i18n.global.t('nodeFunc.returnTypeName.notReturn')
            case protoManage.NodeFuncReturnType.Error:
                return i18n.global.t('nodeFunc.returnTypeName.error')
            case protoManage.NodeFuncReturnType.Text:
                return i18n.global.t('nodeFunc.returnTypeName.text')
            case protoManage.NodeFuncReturnType.Json:
                return i18n.global.t('nodeFunc.returnTypeName.json')
            case protoManage.NodeFuncReturnType.Link:
                return i18n.global.t('nodeFunc.returnTypeName.link')
            case protoManage.NodeFuncReturnType.Image:
                return i18n.global.t('nodeFunc.returnTypeName.image')
            case protoManage.NodeFuncReturnType.Media:
                return i18n.global.t('nodeFunc.returnTypeName.media')
            case protoManage.NodeFuncReturnType.File:
                return i18n.global.t('nodeFunc.returnTypeName.file')
            case protoManage.NodeFuncReturnType.Table:
                return i18n.global.t('nodeFunc.returnTypeName.table')
            case protoManage.NodeFuncReturnType.Charts:
                return i18n.global.t('nodeFunc.returnTypeName.charts')
        }
        return i18n.global.t('nodeFunc.returnTypeName.unknown')
    }

    export function renderSize(fileSize:number):string{
        if(null==fileSize){
            return "0 Bytes";
        }
        let unitArr = ["B","KB","MB","GB","TB","PB","EB","ZB","YB"];
        let index=0;
        let srcSize = parseFloat(String(fileSize));
        index=Math.floor(Math.log(srcSize)/Math.log(1024));
        let size =srcSize/Math.pow(1024,index);
        let v = size.toFixed(2);
        return v+unitArr[index];
    }

    export function getNodeReportIntervalStr(interval: number):string {
        if (interval <= 0) {
            return i18n.global.t('time.manual')
        }
        let conf = [{max:1000, name:i18n.global.t('time.ms')}, {max:60, name:i18n.global.t('time.s')},
            {max:60, name:i18n.global.t('time.min')}, {max:24, name:i18n.global.t('time.hour')},
            {max:30, name:i18n.global.t('time.day')}]

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
        return calc(0, interval) + "/"+i18n.global.t('time.once')
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
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDate();
        let hour = date.getHours();
        let minute = date.getMinutes();
        let second = date.getSeconds();
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