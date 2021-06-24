<template>
    <NodeViewFrame :pageTotal="data.pageTotal" :isLoading="data.isLoading">
        <NodeCard v-for="i in data.nodeList" :node="i"
                  :nodeGroup=data.nodeGroupMap.get(i.GroupID) :nodeType=data.nodeTypeMap.get(i.TypeID)
                  :nodeFuncStateCount=data.nodeFuncStateCountMap.get(i.Base.ID) :nodeReportStateCount=data.nodeReportStateCountMap.get(i.Base.ID)
        :nodeLinkSourceStateCount=data.nodeLinkSourceStateCountMap.get(i.Base.ID) :nodeLinkTargetStateCount="data.nodeLinkTargetStateCountMap.get(i.Base.ID)">
        </NodeCard>
    </NodeViewFrame>
</template>

<script lang="ts">
import {defineComponent, reactive, onMounted, getCurrentInstance, onUnmounted} from "vue";
import {protoManage} from "../../proto/manage"
import {request} from "../../base/request"
import {refresh} from "../../base/refresh";
import NodeCard from "../../components/card/NodeCard.vue"
import Page from "../../components/Page.vue"
import Empty from "../../components/Empty.vue"
import Load from "../../components/Load.vue"
import NodeViewFrame from "../../components/NodeViewFrame.vue"
import {useRoute, onBeforeRouteUpdate, RouteLocationNormalizedLoaded} from "vue-router";
import {convert} from "../../base/convert";

interface NodeInfo {
    nodeList: protoManage.INode[]
    nodeGroupMap: Map<number, protoManage.INodeGroup>
    nodeTypeMap: Map<number, protoManage.INodeType>
    nodeLinkSourceStateCountMap: Map<number, protoManage.IStateCount>
    nodeLinkTargetStateCountMap: Map<number, protoManage.IStateCount>
    nodeFuncStateCountMap: Map<number, protoManage.IStateCount>
    nodeReportStateCountMap: Map<number, protoManage.IStateCount>
    pageTotal:number
    isLoading:boolean
    refreshFlag:number
}

export default defineComponent ({
    name: "Node",
    components: {
        NodeCard,
        Page,
        Empty,
        Load,
        NodeViewFrame
    },
    setup(){
        const data = reactive<NodeInfo>({
            nodeList:[],
            nodeGroupMap: new Map<number, protoManage.INodeGroup>(),
            nodeTypeMap: new Map<number, protoManage.INodeType>(),
            nodeLinkSourceStateCountMap: new Map<number, protoManage.IStateCount>(),
            nodeLinkTargetStateCountMap: new Map<number, protoManage.IStateCount>(),
            nodeFuncStateCountMap: new Map<number, protoManage.IStateCount>(),
            nodeReportStateCountMap: new Map<number, protoManage.IStateCount>(),
            pageTotal:0, isLoading:false, refreshFlag:0})
        const route = useRoute()
        const instance = getCurrentInstance()

        onBeforeRouteUpdate(to => {
            initNode(to)
        })
        onMounted(()=>{
            initNode(route)
        })
        onUnmounted(()=>{
            refresh.removeGlobalAutoRefresh(instance?.uid)
        })
        function initNode(route:RouteLocationNormalizedLoaded){
            data.refreshFlag++
            data.isLoading = true
            let getNodeList = (flag:number)=>{
                request.reqNodeList(protoManage.Filter.create({
                    ID:Number(route.query.id),
                    GroupID:Number(route.query.groupID),
                    TypeID:Number(route.query.typeID),
                    Name:String(route.query.name),
                    State:Number(route.query.state),
                    PageSize:Number(route.query.pageSize),
                    PageNum:Number(route.query.pageNum)
                })).then((response) => {
                    if (flag != data.refreshFlag){
                        return
                    }
                    data.pageTotal = response.Length
                    data.nodeList = response.NodeList
                    listToMap(response)
                }).catch(error => {}).finally(()=>{
                    if (flag != data.refreshFlag){
                        return
                    }
                    data.isLoading = false
                })
            }
            refresh.addGlobalAutoRefresh(instance?.uid, getNodeList, data.refreshFlag)
        }

        function listToMap(response:protoManage.AnsNodeList){
            data.nodeGroupMap.clear()
            for (let i = 0; i < response.NodeGroupList.length; i++){
                let key = Number(response.NodeGroupList[i].Base?.ID)
                let val = response.NodeGroupList[i]
                data.nodeGroupMap.set(key, val)
            }
            data.nodeTypeMap.clear()
            for (let i = 0; i < response.NodeTypeList.length; i++){
                let key = Number(response.NodeTypeList[i].Base?.ID)
                let val = response.NodeTypeList[i]
                data.nodeTypeMap.set(key, val)
            }
            data.nodeFuncStateCountMap.clear()
            for (let i = 0; i < response.NodeFuncStateCountList.length; i++){
                let key = Number(response.NodeFuncStateCountList[i].ID)
                let val = response.NodeFuncStateCountList[i]
                data.nodeFuncStateCountMap.set(key, val)
            }
            data.nodeReportStateCountMap.clear()
            for (let i = 0; i < response.NodeReportStateCountList.length; i++){
                let key = Number(response.NodeReportStateCountList[i].ID)
                let val = response.NodeReportStateCountList[i]
                data.nodeReportStateCountMap.set(key, val)
            }
            data.nodeLinkSourceStateCountMap.clear()
            for (let i = 0; i < response.NodeLinkSourceStateCountList.length; i++){
                let key = Number(response.NodeLinkSourceStateCountList[i].ID)
                let val = response.NodeLinkSourceStateCountList[i]
                data.nodeLinkSourceStateCountMap.set(key, val)
            }
            data.nodeLinkTargetStateCountMap.clear()
            for (let i = 0; i < response.NodeLinkTargetStateCountList.length; i++){
                let key = Number(response.NodeLinkTargetStateCountList[i].ID)
                let val = response.NodeLinkTargetStateCountList[i]
                data.nodeLinkTargetStateCountMap.set(key, val)
            }
        }
        return {data}
    }
})
</script>

<style scoped>

</style>