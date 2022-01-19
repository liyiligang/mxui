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

import {watch} from "vue";
import {globals} from "./globals";

export module refresh {
    interface AutoRefreshHandle {
        timeout: NodeJS.Timeout|null
        call: (...args: any[]) => void
        parameter:any[]
    }
    let globalAutoRefreshMap:Map<number, AutoRefreshHandle> = new Map<number, AutoRefreshHandle>()
    let userAutoRefreshMap:Map<number, AutoRefreshHandle> = new Map<number, AutoRefreshHandle>()

    export function watchGlobalAutoRefresh() {
        updateAllGlobalAutoRefresh(false)
        watch(() => globals.globalsData.managerSetting.setting.autoUpdateInterval, () => {
            updateAllGlobalAutoRefresh(true)
        })
        watch(() => globals.globalsData.tempSetting.setting.autoRefresh, () => {
            updateAllGlobalAutoRefresh(false)
        })
    }

    export function addGlobalAutoRefresh(uid:number|undefined, callback: (...args: any[]) => void, ...args: any[]) {
        if (callback == null){
            return
        }
        if (uid == undefined){
            return
        }
        removeGlobalAutoRefresh(uid)
        callback(...args)
        let handle:AutoRefreshHandle = {timeout:null, call:callback, parameter:args}
        globalAutoRefreshMap.set(uid, handle)
        if (globals.globalsData.tempSetting.setting.autoRefresh &&
            globals.globalsData.managerSetting.setting.autoUpdateInterval != 0){
            handle.timeout = setInterval(callback, globals.globalsData.managerSetting.setting.autoUpdateInterval*1000, ...args)
        }
    }

    export function updateAllGlobalAutoRefresh(immediately:boolean) {
        globalAutoRefreshMap.forEach(function(value, key){
            updateGlobalAutoRefresh(key, value, immediately)
        });
    }

    export function updateGlobalAutoRefresh(uid:number|undefined, handle:AutoRefreshHandle, immediately:boolean) {
        if (uid == undefined){
            return
        }
        if (handle == undefined){
            return
        }
        clearHandleTimeout(handle)
        if (globals.globalsData.tempSetting.setting.autoRefresh &&
            globals.globalsData.managerSetting.setting.autoUpdateInterval != 0){
            if (immediately){
                handle.call(...handle.parameter)
            }
            let t = setInterval(handle.call, globals.globalsData.managerSetting.setting.autoUpdateInterval*1000, ...handle.parameter)
            handle.timeout = t
        }
    }

    export function removeGlobalAutoRefresh(uid:number|undefined) {
        if (uid == undefined){
            return
        }
        let handle = globalAutoRefreshMap.get(uid)
        if (handle == undefined){
            return
        }
        clearHandleTimeout(handle)
        globalAutoRefreshMap.delete(uid)
    }


    export function addUserAutoRefresh(uid:number|undefined, time:number, callback: (...args: any[]) => void, ...args: any[]) {
        if (callback == null){
            return
        }
        if (uid == undefined){
            return
        }
        removeUserAutoRefresh(uid)
        callback(...args)
        let handle:AutoRefreshHandle = {timeout:null, call:callback, parameter:args}
        userAutoRefreshMap.set(uid, handle)
        if (time != 0){
            handle.timeout = setInterval(callback, time*1000, ...args)
        }
    }

    export function updateUserAutoRefresh(uid:number|undefined, time:number, immediately:boolean) {
        if (uid == undefined){
            return
        }
        let handle = userAutoRefreshMap.get(uid)
        if (handle == undefined){
            return
        }
        clearHandleTimeout(handle)
        if (time != 0){
            if (immediately){
                handle.call(...handle.parameter)
            }
            let t = setInterval(handle.call, time*1000, ...handle.parameter)
            handle.timeout = t
        }
    }

    export function execUserRefresh(uid:number|undefined) {
        if (uid == undefined){
            return
        }
        let handle = userAutoRefreshMap.get(uid)
        if (handle == undefined){
            return
        }
        handle.call(...handle.parameter)
    }

    export function removeUserAutoRefresh(uid:number|undefined) {
        if (uid == undefined){
            return
        }
        let handle = userAutoRefreshMap.get(uid)
        if (handle == undefined){
            return
        }
        clearHandleTimeout(handle)
        userAutoRefreshMap.delete(uid)
    }

    export function clearHandleTimeout(handle:AutoRefreshHandle) {
        if (handle.timeout != null){
            clearInterval(handle.timeout)
            handle.timeout = null
        }
    }
}