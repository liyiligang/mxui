<template>
    <NodeViewFrame :pageTotal="data.pageTotal" :isLoading="data.isLoading">
        <NodeReportCard  v-for="i in data.nodeReportList" :nodeReport="i" @deleteNodeReport="deleteNodeReport"
                         :node=data.nodeMap.get(i.NodeID)>
        </NodeReportCard>
    </NodeViewFrame>
</template>

<script lang="ts">
import {defineComponent, reactive, onMounted, getCurrentInstance, onUnmounted} from "vue";
import {protoManage} from "../../proto/manage";
import {request} from "../../base/request";
import NodeReportCard from "../../components/card/NodeReportCard.vue"
import Page from "../../components/Page.vue"
import Empty from "../../components/Empty.vue"
import Load from "../../components/Load.vue"
import NodeViewFrame from "./NodeViewFrame.vue"
import {refresh} from "../../base/refresh";
import {onBeforeRouteUpdate, RouteLocationNormalizedLoaded, useRoute} from "vue-router";
import {convert} from "../../base/convert";

interface NodeReportInfo {
    nodeReportList: protoManage.INodeReport[]
    nodeMap: Map<number, protoManage.INode>
    pageTotal:number
    isLoading:boolean
    refreshFlag:number
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
            pageTotal:0, isLoading:false, refreshFlag:0})
        const route = useRoute()
        const instance = getCurrentInstance()

        onBeforeRouteUpdate(to => {
            initNodeReport(to)
        })
        onMounted(()=>{
            initNodeReport(route)
        })
        onUnmounted(()=>{
            refresh.removeGlobalAutoRefresh(instance?.uid)
        })
        function initNodeReport(route:RouteLocationNormalizedLoaded){
            data.refreshFlag++
            data.isLoading = true
            let getNodeReportList = (flag:number)=>{
                request.reqNodeReportList(protoManage.ReqNodeReportList.create({
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
                    data.nodeReportList = response.NodeReportList
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
            refresh.addGlobalAutoRefresh(instance?.uid, getNodeReportList, data.refreshFlag)
        }

        function deleteNodeReport(nodeReport:protoManage.NodeReport){
            request.reqNodeReportDel(protoManage.NodeReport.create({
                Base:protoManage.Base.create({ID:nodeReport.Base?.ID})
            })).then((response) => {
                deleteNodeReportByID(Number(response.Base?.ID))
            }).catch(error => {}).finally(()=>{})
        }

        function deleteNodeReportByID(nodeReportID:number){
            for (let i = 0; i < data.nodeReportList.length; i++){
                if (data.nodeReportList[i].Base?.ID == nodeReportID){
                    data.nodeReportList.splice(i, 1)
                }
            }
            data.pageTotal = data.nodeReportList.length
        }
        return {data, deleteNodeReport}
    }
})
</script>

<style scoped>

</style>