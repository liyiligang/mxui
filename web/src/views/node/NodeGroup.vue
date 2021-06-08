<template>
    <NodeViewFrame :pageTotal="data.pageTotal" :isLoading="data.isLoading">
        <NodeGroupCard v-for="i in data.nodeGroupList" :key="i" :nodeGroup="i"
                       :nodeStateCount=data.nodeStateCountMap.get(i.Base.ID)>
        </NodeGroupCard>
    </NodeViewFrame>
</template>

<script lang="ts">
import {defineComponent, reactive, onMounted, onUnmounted, PropType, getCurrentInstance} from "vue";
import {protoManage} from "../../proto/manage"
import {request} from "../../base/request"
import NodeGroupCard from "../../components/card/NodeGroupCard.vue"
import Page from "../../components/Page.vue"
import Empty from "../../components/Empty.vue"
import Load from "../../components/Load.vue"
import NodeViewFrame from "../../components/NodeViewFrame.vue"
import {onBeforeRouteUpdate, RouteLocationNormalizedLoaded, useRoute} from "vue-router";
import {refresh} from "../../base/refresh";

interface NodeGroupInfo {
    nodeGroupList:protoManage.INodeGroup[]
    nodeStateCountMap: Map<number, protoManage.IStateCount>
    pageTotal:number
    isLoading:boolean
    refreshFlag:number
}

export default defineComponent ({
    name: "NodeGroup",
    components: {
        NodeGroupCard,
        Page,
        Empty,
        Load,
        NodeViewFrame
    },
    setup(){
        const data = reactive<NodeGroupInfo>({
            nodeGroupList:[], nodeStateCountMap: new Map<number, protoManage.IStateCount>(),
            pageTotal:0, isLoading:false, refreshFlag:0})
        const route = useRoute()
        const instance = getCurrentInstance()

        onBeforeRouteUpdate(to => {
            initNodeGroup(to)
        })
        onMounted(()=>{
            initNodeGroup(route)
        })
        onUnmounted(()=>{
            refresh.removeGlobalAutoRefresh(instance?.uid)
        })
        function initNodeGroup(route:RouteLocationNormalizedLoaded){
            data.refreshFlag++
            data.isLoading = true
            let getNodeGroupList = (flag:number)=>{
                request.reqNodeGroupList(protoManage.Filter.create({
                    ID:Number(route.query.id),
                    Name:String(route.query.name),
                    PageSize:Number(route.query.pageSize),
                    PageNum:Number(route.query.pageNum)
                })).then((response) => {
                    if (flag != data.refreshFlag){
                        return
                    }
                    data.pageTotal = response.Length
                    data.nodeGroupList = response.NodeGroupList
                    data.nodeStateCountMap.clear()
                    for (let i = 0; i < response.NodeStateCountList.length; i++){
                        let key = Number(response.NodeStateCountList[i].ID)
                        let val = response.NodeStateCountList[i]
                        data.nodeStateCountMap.set(key, val)
                    }
                }).catch(error => {}).finally(()=>{
                    if (flag != data.refreshFlag){
                        return
                    }
                    data.isLoading = false
                })
            }
            refresh.addGlobalAutoRefresh(instance?.uid, getNodeGroupList, data.refreshFlag)
        }
        return {data}
    }
})
</script>

<style scoped>

</style>