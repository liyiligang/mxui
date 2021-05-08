<template>
    <NodeViewFrame :pageTotal="data.pageTotal" :isLoading="data.isLoading">
        <NodeReportCard  v-for="i in data.nodeReportList" :nodeReport="i"
                         :node=data.nodeMap.get(i.NodeID) :nodeReportVal=data.nodeReportValMap.get(i.Base.ID)>
        </NodeReportCard>
    </NodeViewFrame>
</template>

<script lang="ts">
import {defineComponent, reactive, onMounted, PropType} from "vue";
import {protoManage} from "../proto/manage";
import {request} from "../base/request";
import NodeReportCard from "../components/NodeReportCard.vue"
import Page from "../components/Page.vue"
import Empty from "../components/Empty.vue"
import Load from "../components/Load.vue"
import NodeViewFrame from "../components/NodeViewFrame.vue"
import {onBeforeRouteUpdate, RouteLocationNormalizedLoaded, useRoute} from "vue-router";
import {globals} from "../base/globals";

interface NodeReportInfo {
    nodeReportList: protoManage.INodeReport[]
    nodeMap: Map<number, protoManage.INode>
    nodeReportValMap: Map<number, protoManage.INodeReportVal>
    pageTotal:number
    isLoading:boolean
}

export default defineComponent ({
    name: "NodeReport",
    components: {
        NodeReportCard,
        Page,
        Empty,
        Load,
        NodeViewFrame
    },
    setup(){
        const data = reactive<NodeReportInfo>({nodeReportList:[], nodeMap:new Map<number, protoManage.INode>(),
            nodeReportValMap:new Map<number, protoManage.INodeReportVal>(), pageTotal:0, isLoading:false})
        const route = useRoute()

        onBeforeRouteUpdate(to => {
            initNodeReport(to)
        })
        onMounted(()=>{
            initNodeReport(route)
        })
        function initNodeReport(route:RouteLocationNormalizedLoaded){
            data.isLoading = true
            request.reqNodeReportList(protoManage.Filter.create({
                ID:Number(route.query.id),
                NodeID:Number(route.query.nodeID),
                Name:String(route.query.name),
                Flag:String(route.query.flag),
                Value:String(route.query.value),
                State:Number(route.query.state),
                PageSize:Number(route.query.pageSize),
                PageNum:Number(route.query.pageNum)
            })).then((response) => {
                data.pageTotal = response.Length
                data.nodeReportList = response.NodeReportList
                data.nodeMap.clear()
                for (let i = 0; i < response.NodeList.length; i++){
                    let key = Number(response.NodeList[i].Base?.ID)
                    let val = response.NodeList[i]
                    data.nodeMap.set(key, val)
                }
                data.nodeReportValMap.clear()
                for (let i = 0; i < response.NodeReportValList.length; i++){
                    let key = Number(response.NodeReportValList[i].ReportID)
                    let val = response.NodeReportValList[i]
                    data.nodeReportValMap.set(key, val)
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