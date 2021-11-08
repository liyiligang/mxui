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