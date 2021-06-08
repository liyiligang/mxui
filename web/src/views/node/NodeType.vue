<template>
    <NodeViewFrame :pageTotal="data.pageTotal" :isLoading="data.isLoading">
        <NodeTypeCard v-for="i in data.nodeTypeList" :key="i" :nodeType="i"
                      :nodeStateCount=data.nodeStateCountMap.get(i.Base.ID)>
        </NodeTypeCard>
    </NodeViewFrame>
</template>

<script lang="ts">
import {defineComponent, reactive, onMounted, PropType, getCurrentInstance, onUnmounted} from "vue";
import {protoManage} from "../../proto/manage"
import {request} from "../../base/request"
import NodeTypeCard from "../../components/card/NodeTypeCard.vue"
import Page from "../../components/Page.vue"
import Empty from "../../components/Empty.vue"
import Load from "../../components/Load.vue"
import NodeViewFrame from "../../components/NodeViewFrame.vue"
import {onBeforeRouteUpdate, RouteLocationNormalizedLoaded, useRoute} from "vue-router";
import {refresh} from "../../base/refresh";

interface NodeTypeInfo {
    nodeTypeList:protoManage.INodeType[]
    nodeStateCountMap: Map<number, protoManage.IStateCount>
    pageTotal:number
    isLoading:boolean
}

export default defineComponent ({
    name: "NodeType",
    components: {
        NodeTypeCard,
        Page,
        Empty,
        Load,
        NodeViewFrame
    },
    setup(){
        const data = reactive<NodeTypeInfo>({
            nodeTypeList:[],
            nodeStateCountMap: new Map<number, protoManage.IStateCount>(),
            pageTotal:0, isLoading:false})
        const route = useRoute()
        const instance = getCurrentInstance()

        onBeforeRouteUpdate(to => {
            initNodeType(to)
        })
        onMounted(()=>{
            initNodeType(route)
        })
        onUnmounted(()=>{
            refresh.removeGlobalAutoRefresh(instance?.uid)
        })
        function initNodeType(route:RouteLocationNormalizedLoaded){
            data.isLoading = true
            let getNodeTypeList = ()=>{
                request.reqNodeTypeList(protoManage.Filter.create({
                    ID:Number(route.query.id),
                    Name:String(route.query.name),
                    PageSize:Number(route.query.pageSize),
                    PageNum:Number(route.query.pageNum)
                })).then((response) => {
                    data.pageTotal = response.Length
                    data.nodeTypeList = response.NodeTypeList
                    data.nodeStateCountMap.clear()
                    for (let i = 0; i < response.NodeStateCountList.length; i++){
                        let key = Number(response.NodeStateCountList[i].ID)
                        let val = response.NodeStateCountList[i]
                        data.nodeStateCountMap.set(key, val)
                    }
                }).catch(error => {}).finally(()=>{data.isLoading = false})
            }
            refresh.addGlobalAutoRefresh(instance?.uid, getNodeTypeList)
        }
        return {data}
    }
})
</script>

<style scoped>

</style>