<template>
    <NodeViewFrame :pageTotal="data.pageTotal" :isLoading="data.isLoading">
        <NodeFuncCard  v-for="i in data.nodeFuncList" :nodeFunc="i"
                       :node=data.nodeMap.get(i.NodeID) :nodeFuncCall=data.nodeFuncCallMap.get(i.Base.ID)>
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
import NodeViewFrame from "../../components/NodeViewFrame.vue"
import {onBeforeRouteUpdate, RouteLocationNormalizedLoaded, useRoute} from "vue-router";
import {refresh} from "../../base/refresh";

interface NodeFuncInfo {
    nodeFuncList: protoManage.INodeFunc[]
    nodeMap: Map<number, protoManage.INode>
    nodeFuncCallMap: Map<number, protoManage.INodeFuncCall>
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
            nodeFuncCallMap:new Map<number, protoManage.INodeFuncCall>(), pageTotal:0, isLoading:false, refreshFlag:0})
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
                request.reqNodeFuncList(protoManage.Filter.create({
                    ID:Number(route.query.id),
                    NodeID:Number(route.query.nodeID),
                    Name:String(route.query.name),
                    State:Number(route.query.state),
                    PageSize:Number(route.query.pageSize),
                    PageNum:Number(route.query.pageNum)
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
                    data.nodeFuncCallMap.clear()
                    for (let i = 0; i < response.NodeFuncCallList.length; i++){
                        let key = Number(response.NodeFuncCallList[i].FuncID)
                        let val = response.NodeFuncCallList[i]
                        data.nodeFuncCallMap.set(key, val)
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
        return {data}
    }
})
</script>

<style scoped>

</style>