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

import {createRouter, createWebHistory, LocationQueryRaw, RouteLocationNormalizedLoaded, useRoute} from "vue-router";
import Login from "./views/Login.vue";
import Home from "./views/Home.vue";
import Node from "./views/node/Node.vue";
import NodeFunc from "./views/node/NodeFunc.vue";
import NodeReport from "./views/node/NodeReport.vue";
import NodeNotify from "./views/node/NodeNotify.vue";
import NodeResource from "./views/node/NodeResource.vue";
import NodeTest from "./views/node/NodeTest.vue";
import NotFound from "./views/NotFound.vue";
import {globals} from "./base/globals";
import {filter} from "./base/filter";
import merge from "webpack-merge";

export const routerName = {
    login:"login",
    node:"node",
    nodeFunc:"nodeFunc",
    nodeReport:"nodeReport",
    nodeNotify:"nodeNotify",
    nodeResource:"nodeResource",
    nodeTest:"nodeTest"
}

export interface routerPathInitConfig {
    initPageNum? :boolean
    withPageNum? :boolean
    initPageSize? :boolean
    withPageSize? :boolean
    disableFilter? :boolean
    disableAutoRefresh? :boolean
    customer?:object
}

const router = createRouter({
    history:createWebHistory(),
    routes: [
        {path: '/', name:"login", component: Login},
        {
            path: '/home',
            name:"home",
            component: Home,
            children: [
                {path: routerName.node, name: routerName.node, component: Node},
                {path: routerName.nodeFunc, name: routerName.nodeFunc, component: NodeFunc},
                {path: routerName.nodeReport, name: routerName.nodeReport, component: NodeReport},
                {path: routerName.nodeNotify, name: routerName.nodeNotify, component: NodeNotify},
                {path: routerName.nodeResource, name: routerName.nodeResource, component: NodeResource},
                {path: routerName.nodeTest, name: routerName.nodeTest, component: NodeTest},
            ]
        },
        {path: "/notFound", name: "notFound", component: NotFound}
    ]
})

router.beforeEach((to, from, next) => {
    if (to.matched.length ===0) {
        next('/notFound')
    } else {
        next();
    }
});

export module routerPath {

    export function getQuery(name:string, config?:routerPathInitConfig, route?:RouteLocationNormalizedLoaded):LocationQueryRaw{
        let query:LocationQueryRaw = {}
        if (config) {
            if (config.initPageNum) {query.pageNum = globals.globalsConfig.pageConfig.initNum}
            if (config.withPageNum && route) {
                if (route.query.pageNum != undefined) {
                    query.pageNum = route.query.pageNum
                }else {
                    query.pageNum = globals.globalsConfig.pageConfig.initNum
                }
            }
            if (config.initPageSize) { query.pageSize = globals.globalsConfig.pageConfig.initSize }
            if (config.withPageSize && route) {
                if (route.query.pageSize != undefined) {
                    query.pageSize = route.query.pageSize
                }else {
                    query.pageSize = globals.globalsConfig.pageConfig.initSize
                }
            }

            if (!config.disableFilter && globals.globalsData.tempSetting.setting.dataFilterView){
                query.filter = "true"
                query = merge<any>(query, filter.getFilterDataQuery(name))
            }

            if (!config.disableAutoRefresh && globals.globalsData.tempSetting.setting.autoRefresh){
                query.autoRefresh = "true"
            }
        }
        return query
    }

    export function getPath(name:string, config?:routerPathInitConfig, route?:RouteLocationNormalizedLoaded):string{
        let query:LocationQueryRaw = getQuery(name, config, route)
        let str = name + "?"
        for (let item in query) {
            str += item + "=" + query[item] + "&"
        }
        if (config && config.customer){
            for (let item in config.customer) {
                str += item + "=" + config.customer[item] + "&"
            }
        }
        if (str[str.length -1] == "&") {
            str=str.slice(0, str.length-1)
        }
        return str
    }

    export function toPath(name:string, config?:routerPathInitConfig, route?:RouteLocationNormalizedLoaded){
        router.push({
            name: name,
            query:getQuery(name, config, route)
        }).then()
    }
}

export default router
