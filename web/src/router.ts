import {createRouter, createWebHistory, LocationQueryRaw, RouteLocationNormalizedLoaded, useRoute} from "vue-router";
import Login from "./views/Login.vue";
import Home from "./views/Home.vue";
import NodeGroup from "./views/node/NodeGroup.vue";
import NodeType from "./views/node/NodeType.vue";
import Node from "./views/node/Node.vue";
import NodeLink from "./views/node/NodeLink.vue";
import NodeFunc from "./views/node/NodeFunc.vue";
import NodeReport from "./views/node/NodeReport.vue";
import NodeNotify from "./views/node/NodeNotify.vue";
import NodeTest from "./views/node/NodeTest.vue";
import NotFound from "./views/NotFound.vue";
import {protoManage} from "./proto/manage"
import {globals} from "./base/globals";
import merge from "webpack-merge";

export const routerName = {
    login:"login",
    nodeGroup:"nodeGroup",
    nodeType:"nodeType",
    node:"node",
    nodeLink:"nodeLink",
    nodeFunc:"nodeFunc",
    nodeReport:"nodeReport",
    nodeNotify:"nodeNotify",
    nodeTest:"nodeTest"
}

export interface routerPathInitConfig {
    initPageNum? :boolean
    withPageNum? :boolean
    initPageSize? :boolean
    withPageSize? :boolean
    disableFilter? :boolean
    disableAutoRefresh? :boolean
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
                {path: routerName.nodeGroup, name: routerName.nodeGroup, component: NodeGroup},
                {path: routerName.nodeType, name: routerName.nodeType, component: NodeType},
                {path: routerName.node, name: routerName.node, component: Node},
                {path: routerName.nodeLink, name: routerName.nodeLink, component: NodeLink},
                {path: routerName.nodeFunc, name: routerName.nodeFunc, component: NodeFunc},
                {path: routerName.nodeReport, name: routerName.nodeReport, component: NodeReport},
                {path: routerName.nodeNotify, name: routerName.nodeNotify, component: NodeNotify},
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

    export function toPath(name:string, config:routerPathInitConfig, route:RouteLocationNormalizedLoaded){
        let query:LocationQueryRaw = {}
        if (config.initPageNum) {query.pageNum = globals.globalsConfig.pageConfig.initNum}
        if (config.withPageNum) {
            if (route.query.pageNum != undefined) {
                query.pageNum = route.query.pageNum
            }else {
                query.pageNum = globals.globalsConfig.pageConfig.initNum
            }
        }
        if (config.initPageSize) { query.pageSize = globals.globalsConfig.pageConfig.initSize }
        if (config.withPageSize) {
            if (route.query.pageSize != undefined) {
                query.pageSize = route.query.pageSize
            }else {
                query.pageSize = globals.globalsConfig.pageConfig.initSize
            }
        }

        if (!config.disableFilter && globals.globalsData.tempSetting.setting.dataFilterView){
            query.filter = "true"
            query = merge<any>(query, globals.getDataFilterQuery(name))
        }

        if (!config.disableAutoRefresh && globals.globalsData.tempSetting.setting.autoRefresh){
            query.autoRefresh = "true"
        }

        router.push({
            name: name,
            query:query
        }).then()
    }

    export function toLogin(){
        router.push({
            name: "login"
        }).then()
    }
    export function toGroupAll(){
        router.push({
            name: routerName.nodeGroup,
            query: {
                pageSize: globals.globalsConfig.pageConfig.initSize,
                pageNum:  globals.globalsConfig.pageConfig.initNum
            }
        }).then()
    }

    export function toTypeAll(){
        router.push({
            name: routerName.nodeType,
            query: {
                pageSize: globals.globalsConfig.pageConfig.initSize,
                pageNum:  globals.globalsConfig.pageConfig.initNum
            }
        }).then()
    }

    export function toNodeAll(){
        router.push({
            name: routerName.node,
            query: {
                pageSize: globals.globalsConfig.pageConfig.initSize,
                pageNum:  globals.globalsConfig.pageConfig.initNum
            }
        }).then()
    }

    export function toNodeLinkAll(){
        router.push({
            name: routerName.nodeLink,
            query: {
                pageSize: globals.globalsConfig.pageConfig.initSize,
                pageNum:  globals.globalsConfig.pageConfig.initNum
            }
        }).then()
    }

    export function toNodeFuncAll(){
        router.push({
            name: routerName.nodeFunc,
            query: {
                pageSize: globals.globalsConfig.pageConfig.initSize,
                pageNum:  globals.globalsConfig.pageConfig.initNum
            }
        }).then()
    }

    export function toNodeReportAll(){
        router.push({
            name: routerName.nodeReport,
            query: {
                pageSize: globals.globalsConfig.pageConfig.initSize,
                pageNum:  globals.globalsConfig.pageConfig.initNum
            }
        }).then()
    }

    export function toNodeNotifyAll(){
        router.push({
            name: routerName.nodeNotify,
            query: {
                pageSize: globals.globalsConfig.pageConfig.initSize,
                pageNum:  globals.globalsConfig.pageConfig.initNum
            }
        }).then()
    }

    export function toNodeTestAll(){
        router.push({
            name: routerName.nodeTest,
            query: {
                // pageSize: globals.globalsConfig.pageConfig.initSize,
                // pageNum:  globals.globalsConfig.pageConfig.initNum
            }
        }).then()
    }

    export function setFilterStr(filter:protoManage.Filter):string{
        let str = ""
        if (filter.PageSize == 0){
            filter.PageSize = globals.globalsConfig.pageConfig.initSize
        }
        if (filter.PageNum == 0){
            filter.PageNum = globals.globalsConfig.pageConfig.initNum
        }
        str += "?pageSize="+filter.PageSize
        str += "&pageNum="+filter.PageNum
        if (filter.ID != 0){
            str += "&id="+filter.ID
        }
        if (filter.GroupID != 0){
            str += "&groupID="+filter.GroupID
        }
        if (filter.TypeID != 0){
            str += "&typeID="+filter.TypeID
        }
        if (filter.NodeID != 0){
            str += "&nodeID="+filter.NodeID
        }
        if (filter.SourceID != 0){
            str += "&sourceID="+filter.SourceID
        }
        if (filter.TargetID != 0){
            str += "&targetID="+filter.TargetID
        }
        if (filter.Name != ""){
            str += "&name="+filter.Name
        }
        if (filter.Flag != ""){
            str += "&flag="+filter.Flag
        }
        if (filter.Value != ""){
            str += "&value="+filter.Value
        }
        if (filter.State != protoManage.State.StateNot){
            str += "&state="+filter.State
        }
        if (filter.SenderName != ""){
            str += "&senderName="+filter.SenderName
        }
        if (filter.SenderType != protoManage.NotifySenderType.NotifySenderTypeUnknow){
            str += "&senderType="+filter.SenderType
        }
        if (filter.SenderBeginTime != 0){
            str += "&senderBeginTime="+filter.SenderBeginTime
        }
        if (filter.SenderEndTime != 0){
            str += "&senderEndTime="+filter.SenderEndTime
        }
        if (filter.Message != ""){
            str += "&message="+filter.Message
        }
        return str
    }


    export function toNodeGroup(filter:protoManage.Filter){
        let filterStr = setFilterStr(filter)
        return routerName.nodeGroup + filterStr
    }
    export function toNodeType(filter:protoManage.Filter){
        let filterStr = setFilterStr(filter)
        return routerName.nodeType + filterStr
    }
    export function toNode(filter:protoManage.Filter){
        let filterStr = setFilterStr(filter)
        return routerName.node + filterStr
    }
    export function toNodeNotify(filter:protoManage.Filter){
        let filterStr = setFilterStr(filter)
        return routerName.nodeNotify + filterStr
    }
    export function toNodeLink(nodeID:number){
        return "nodeLink?sourceID="+nodeID+"&targetID="+nodeID+"&pageSize="+globals.globalsConfig.pageConfig.initSize+"&pageNum="+globals.globalsConfig.pageConfig.initNum
    }
    export function toNodeFunc(nodeID:number){
        return "nodeFunc?nodeID="+nodeID+"&pageSize="+globals.globalsConfig.pageConfig.initSize+"&pageNum="+globals.globalsConfig.pageConfig.initNum
    }
    export function toNodeReport(nodeID:number){
        return "nodeReport?nodeID="+nodeID+"&pageSize="+globals.globalsConfig.pageConfig.initSize+"&pageNum="+globals.globalsConfig.pageConfig.initNum
    }
}

export default router
