import {createRouter, createWebHistory} from "vue-router";
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

const router = createRouter({
    history:createWebHistory(),
    routes: [
        {path: '/', name:"login", component: Login},
        {
            path: '/home',
            name:"home",
            component: Home,
            children: [
                {path: 'nodeGroup', name: 'nodeGroup', component: NodeGroup},
                {path: 'nodeType', name: 'nodeType', component: NodeType},
                {path: 'node', name: 'node', component: Node},
                {path: 'nodeLink', name: 'nodeLink', component: NodeLink},
                {path: 'nodeFunc', name: 'nodeFunc', component: NodeFunc},
                {path: 'nodeReport', name: 'nodeReport', component: NodeReport},
                {path: 'nodeNotify', name: 'nodeNotify', component: NodeNotify},
                {path: 'nodeTest', name: 'nodeTest', component: NodeTest},
                {path: "notFound", name: "notFound", component: NotFound},
            ]
        },
        // {path: "/404", name: "notFound", component: NotFound},
        // {path: "*", redirect: "/404"}
    ]
})



export module routerPath {

    import Filter = protoManage.Filter;
    export function toLogin(){
        router.push({
            name: "login"
        }).then()
    }
    export function toGroupAll(){
        router.push({
            name: "nodeGroup",
            query: {
                pageSize: globals.globalsConfig.pageConfig.initSize,
                pageNum:  globals.globalsConfig.pageConfig.initNum
            }
        }).then()
    }

    export function toTypeAll(){
        router.push({
            name: "nodeType",
            query: {
                pageSize: globals.globalsConfig.pageConfig.initSize,
                pageNum:  globals.globalsConfig.pageConfig.initNum
            }
        }).then()
    }

    export function toNodeAll(){
        router.push({
            name: "node",
            query: {
                pageSize: globals.globalsConfig.pageConfig.initSize,
                pageNum:  globals.globalsConfig.pageConfig.initNum
            }
        }).then()
    }

    export function toNodeLinkAll(){
        router.push({
            name: "nodeLink",
            query: {
                pageSize: globals.globalsConfig.pageConfig.initSize,
                pageNum:  globals.globalsConfig.pageConfig.initNum
            }
        }).then()
    }

    export function toNodeFuncAll(){
        router.push({
            name: "nodeFunc",
            query: {
                pageSize: globals.globalsConfig.pageConfig.initSize,
                pageNum:  globals.globalsConfig.pageConfig.initNum
            }
        }).then()
    }

    export function toNodeReportAll(){
        router.push({
            name: "nodeReport",
            query: {
                pageSize: globals.globalsConfig.pageConfig.initSize,
                pageNum:  globals.globalsConfig.pageConfig.initNum
            }
        }).then()
    }

    export function toNodeNotifyAll(){
        router.push({
            name: "nodeNotify",
            query: {
                pageSize: globals.globalsConfig.pageConfig.initSize,
                pageNum:  globals.globalsConfig.pageConfig.initNum
            }
        }).then()
    }

    export function toNodeTestAll(){
        router.push({
            name: "nodeTest",
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
        return "nodeGroup"+filterStr
    }
    export function toNodeType(filter:protoManage.Filter){
        let filterStr = setFilterStr(filter)
        return "nodeType"+filterStr
    }
    export function toNode(filter:protoManage.Filter){
        let filterStr = setFilterStr(filter)
        return "node" + filterStr
    }
    export function toNodeNotify(filter:protoManage.Filter){
        let filterStr = setFilterStr(filter)
        return "nodeNotify" + filterStr
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
