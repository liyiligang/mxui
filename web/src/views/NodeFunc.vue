<template>
    <NodeViewFrame :pageTotal="data.pageTotal" :isLoading="data.isLoading">
        <el-space class="view-space" wrap :size="12">
            <NodeFuncCard  v-for="i in data.nodeFuncList" :nodeFunc="i"
                           :node=data.nodeMap.get(i.NodeID) :nodeFuncCall=data.nodeFuncCallMap.get(i.Base.ID)></NodeFuncCard>
        </el-space>
    </NodeViewFrame>
</template>

<script lang="ts">
import {defineComponent, reactive, onMounted, PropType} from "vue";
import {protoManage} from "../proto/manage";
import {request} from "../base/request";
import NodeFuncCard from "../components/NodeFuncCard.vue"
import Page from "../components/Page.vue"
import Empty from "../components/Empty.vue"
import Load from "../components/Load.vue"
import NodeViewFrame from "../components/NodeViewFrame.vue"
import {onBeforeRouteUpdate, RouteLocationNormalizedLoaded, useRoute} from "vue-router";
import {globals} from "../base/globals";

interface NodeFuncInfo {
    nodeFuncList: protoManage.INodeFunc[]
    nodeMap: Map<number, protoManage.INode>
    nodeFuncCallMap: Map<number, protoManage.INodeFuncCall>
    pageTotal:number
    isLoading:boolean
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
            nodeFuncCallMap:new Map<number, protoManage.INodeFuncCall>(), pageTotal:0, isLoading:false})
        const route = useRoute()

        onBeforeRouteUpdate(to => {
            initNodeFunc(to)
        })
        onMounted(()=>{
            initNodeFunc(route)
        })

        function initNodeFunc(route:RouteLocationNormalizedLoaded){
            data.isLoading = true
            request.reqNodeFuncList(protoManage.Filter.create({
                ID:Number(route.query.id),
                NodeID:Number(route.query.nodeID),
                Name:String(route.query.name),
                State:Number(route.query.state),
                PageSize:Number(route.query.pageSize),
                PageNum:Number(route.query.pageNum)
            })).then((response) => {
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
            }).catch(error => {}).finally(()=>{data.isLoading = false})
        }
        return {data}
    }
})
</script>

<style scoped>
@import "../css/view.css";
</style>