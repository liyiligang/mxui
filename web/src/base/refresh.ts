import {watch} from "vue";
import {globals} from "./globals";

export module refresh {
    interface AutoRefreshHandle {
        timeout: NodeJS.Timeout
        call: (...args: any[]) => void
        parameter:any[]
    }
    let autoRefreshMap:Map<number, AutoRefreshHandle> = new Map<number, AutoRefreshHandle>()

    export function watchAutoRefresh() {
        updateAutoRefresh(false)
        watch(() => globals.globalsData.managerSetting.autoUpdateInterval, () => {
            updateAutoRefresh(true)
        })
    }

    export function openAutoRefresh(uid:number|undefined, callback: (...args: any[]) => void, ...args: any[]) {
        if (callback == null){
            return
        }
        if (uid == undefined){
            return
        }
        closeAutoRefresh(uid)
        if (globals.globalsData.managerSetting.autoUpdateInterval != 0){
            callback(...args)
            let t = setInterval(callback, globals.globalsData.managerSetting.autoUpdateInterval*1000, ...args)
            autoRefreshMap.set(uid, {timeout:t, call:callback, parameter:args})
        }
    }

    export function updateAutoRefresh(immediately:boolean) {
        autoRefreshMap.forEach(function(value, key){
            updateAutoRefreshWithUid(key, value, immediately)
        });
    }

    export function updateAutoRefreshWithUid(uid:number|undefined, handle:AutoRefreshHandle, immediately:boolean) {
        if (uid == undefined){
            return
        }
        if (handle == undefined){
            return
        }
        clearInterval(handle.timeout)
        if (globals.globalsData.managerSetting.autoUpdateInterval != 0){
            if (immediately){
                handle.call(...handle.parameter)
            }
            let t = setInterval(handle.call, globals.globalsData.managerSetting.autoUpdateInterval*1000, ...handle.parameter)
            handle.timeout = t
        }
    }

    export function closeAutoRefresh(uid:number|undefined) {
        if (uid == undefined){
            return
        }
        let handle = autoRefreshMap.get(uid)
        if (handle == undefined){
            return
        }
        clearInterval(handle.timeout)
        autoRefreshMap.delete(uid)
    }
}