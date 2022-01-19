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

import {globals} from "./globals";
import {routerName, routerPath} from "../router";
import i18n from '../base/i18n'
import {LocationQueryRaw, RouteLocationNormalizedLoaded} from "vue-router";
import {reactive} from "vue";

export module filter {

    export interface FilterTagInfo {
        sign:string
        type?:string
        value?:string
    }

    export let filterData = {
        nodeMap: reactive(new Map<string, Map<string, FilterTagInfo>>()),
        nodeFuncMap: reactive(new Map<string, Map<string, FilterTagInfo>>()),
        nodeReportMap: reactive(new Map<string, Map<string, FilterTagInfo>>()),
        nodeNotifyMap: reactive(new Map<string, Map<string, FilterTagInfo>>()),
        nodeResourceMap: reactive(new Map<string, Map<string, FilterTagInfo>>())
    }

    export function getFilterDataWithRouterName (name:string):Map<string, Map<string, FilterTagInfo>> {
        switch (name) {
            case routerName.node:
                return filterData.nodeMap
            case routerName.nodeFunc:
                return filterData.nodeFuncMap
            case routerName.nodeReport:
                return filterData.nodeReportMap
            case routerName.nodeNotify:
                return filterData.nodeNotifyMap
            case routerName.nodeResource:
                return filterData.nodeResourceMap
            default:
                return new Map<string, Map<string, FilterTagInfo>>()
        }
    }

    export function getFilterDataQuery (name:string):LocationQueryRaw {
        let query = {}
        for (let item of getFilterDataWithRouterName(name).values()){
            let sign = ""
            let tags = new Array<any>()
            for (let tag of item.keys()){
                let tagInfo = item.get(tag)
                if (tagInfo){
                    if (tagInfo.value != undefined){
                        tags.push(tagInfo.value)
                    }else{
                        tags.push(tag)
                    }
                    sign = tagInfo.sign
                }
            }
            query[sign] = tags
        }
        return query
    }

    export function addTag(filterName:string, itemName:string, tagName:string, filterTagInfo:FilterTagInfo, repeatTips:boolean){
        let filterMap = getFilterDataWithRouterName(filterName)
        if (itemName.trim() == "" || tagName.trim() == "" || filterTagInfo.sign.trim() == ""){
            globals.viewWarn(i18n.global.t('filter.invalidTag'))
            return
        }
        if (!filterMap.has(itemName)){
            filterMap.set(itemName, new Map<string, FilterTagInfo>())
        }
        let item =  filterMap.get(itemName)
        if (!item){
            return
        }
        if (repeatTips && item.has(tagName)){
            globals.viewWarn(tagName  + i18n.global.t('filter.existTag', {name: itemName}))
            return
        }
        item.set(tagName, filterTagInfo)
        globals.globalsData.tempSetting.setting.dataFilterView = true
    }

    export function clearTags(filterName, itemName){
        getFilterDataWithRouterName(filterName).delete(itemName)
    }

    export function clearTag(filterName, itemName, tagName){
        let filterMap = getFilterDataWithRouterName(filterName)
        let item = filterMap.get(itemName)
        if (item){
            item.delete(tagName)
            if (item.size <= 0){
                filterMap.delete(itemName)
            }
        }
    }

    export function toNodeWithID(id:number, route:RouteLocationNormalizedLoaded){
        filter.clearTags(routerName.node, i18n.global.t('filter.tagName.ID'))
        filter.addTag(routerName.node, i18n.global.t('filter.tagName.ID'), String(id), {sign:"id"}, false)
        routerPath.toPath(routerName.node, {initPageNum:true, withPageSize:true}, route)
    }

    export function toNodeFuncWithNodeID(id:number, route:RouteLocationNormalizedLoaded){
        filter.clearTags(routerName.nodeFunc, i18n.global.t('filter.tagName.nodeID'))
        filter.addTag(routerName.nodeFunc, i18n.global.t('filter.tagName.nodeID'), String(id), {sign:"nodeID"}, false)
        routerPath.toPath(routerName.nodeFunc, {initPageNum:true, withPageSize:true}, route)
    }

    export function toNodeReportWithNodeID(id:number, route:RouteLocationNormalizedLoaded){
        filter.clearTags(routerName.nodeReport, i18n.global.t('filter.tagName.nodeID'))
        filter.addTag(routerName.nodeReport, i18n.global.t('filter.tagName.nodeID'), String(id), {sign:"nodeID"}, false)
        routerPath.toPath(routerName.nodeReport, {initPageNum:true, withPageSize:true}, route)
    }
}