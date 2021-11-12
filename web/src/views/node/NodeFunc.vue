<template>
    <NodeViewFrame :pageTotal="data.pageTotal" :isLoading="data.isLoading">
        <NodeFuncCard  v-for="i in data.nodeFuncList" :nodeFunc="i" @deleteNodeFunc="deleteNodeFunc"
                       :node=data.nodeMap.get(Number(i.NodeID))>
        </NodeFuncCard>
    </NodeViewFrame>
</template>

<script lang="ts">
import {defineComponent, reactive, onMounted, PropType, getCurrentInstance, onUnmounted} from "vue";
import {protoManage} from "../../proto/manage";
import {request} from "../../base/request";
import NodeFuncCard from "../../components/card/NodeFuncCard.vue"
import Page from "../../components/Page.vue"
import Empty from "../../components/Empty.vue"
import Load from "../../components/Load.vue"
import NodeViewFrame from "./NodeViewFrame.vue"
import {onBeforeRouteUpdate, RouteLocationNormalizedLoaded, useRoute} from "vue-router";
import {refresh} from "../../base/refresh";
import {convert} from "../../base/convert";

interface NodeFuncInfo {
    nodeFuncList: protoManage.INodeFunc[]
    nodeMap: Map<number, protoManage.INode>
    pageTotal:number
    isLoading:boolean
    refreshFlag:number
}

export default defineComponent ({
    name: "NodeFunc",
    components: {
        NodeFuncCard,
        Page,
        Empty,
        Load,
        NodeViewFrame
    },
    setup(){
        const data = reactive<NodeFuncInfo>({nodeFuncList:[], nodeMap:new Map<number, protoManage.INode>(),
            pageTotal:0, isLoading:false, refreshFlag:0})
        const route = useRoute()
        const instance = getCurrentInstance()

        onBeforeRouteUpdate(to => {
            initNodeFunc(to)
        })
        onMounted(()=>{
            initNodeFunc(route)
        })
        onUnmounted(()=>{
            refresh.removeGlobalAutoRefresh(instance?.uid)
        })
        function initNodeFunc(route:RouteLocationNormalizedLoaded){
            data.refreshFlag++
            data.isLoading = true
            let getNodeFuncList = (flag:number)=>{
                request.reqNodeFuncList(protoManage.ReqNodeFuncList.create({
                    Page:protoManage.Page.create({
                        Count:Number(route.query.pageSize),
                        Num:Number(route.query.pageNum) - 1,
                    }),
                    ID:convert.dataToArray(route.query.id),
                    Name:convert.dataToArray(route.query.name),
                    Level:convert.dataToArray(route.query.level),
                    NodeID:convert.dataToArray(route.query.nodeID),
                    NodeName:convert.dataToArray(route.query.nodeName),
                    UpdateTime:convert.dataToTimeArray(route.query.updateTime),
                })).then((response) => {
                    if (flag != data.refreshFlag){
                        return
                    }
                    data.pageTotal = response.Length
                    data.nodeFuncList = response.NodeFuncList
                    data.nodeMap.clear()
                    for (let i = 0; i < response.NodeList.length; i++){
                        let key = Number(response.NodeList[i].Base?.ID)
                        let val = response.NodeList[i]
                        data.nodeMap.set(key, val)
                    }
                }).catch(error => {}).finally(()=>{
                    if (flag != data.refreshFlag){
                        return
                    }
                    data.isLoading = false
                })
            }
            refresh.addGlobalAutoRefresh(instance?.uid, getNodeFuncList, data.refreshFlag)
        }

        function deleteNodeFunc(nodeFunc:protoManage.NodeFunc){
            request.reqNodeFuncDel(protoManage.NodeFunc.create({
                Base:protoManage.Base.create({ID:nodeFunc.Base?.ID})
            })).then((response) => {
                deleteNodeFuncByID(Number(response.Base?.ID))
            }).catch(error => {}).finally(()=>{})
        }

        function deleteNodeFuncByID(nodeFuncID:number){
            for (let i = 0; i < data.nodeFuncList.length; i++){
                if (data.nodeFuncList[i].Base?.ID == nodeFuncID){
                    data.nodeFuncList.splice(i, 1)
                }
            }
            data.pageTotal = data.nodeFuncList.length
        }
        
        return {data, deleteNodeFunc}
    }
})
</script>

<style scoped>

</style>