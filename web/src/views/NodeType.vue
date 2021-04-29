<template>
    <NodeViewFrame :pageTotal="data.pageTotal" :isLoading="data.isLoading">
        <el-space class="view-space" wrap :size="12">
            <NodeTypeCard v-for="i in data.nodeTypeList" :key="i" :nodeType="i"
                          :nodeStateCount=data.nodeStateCountMap.get(i.Base.ID)>
            </NodeTypeCard>
        </el-space>
    </NodeViewFrame>
</template>

<script lang="ts">
import {defineComponent, reactive, onMounted, PropType} from "vue";
import {protoManage} from "../proto/manage"
import {request} from "../base/request"
import NodeTypeCard from "../components/NodeTypeCard.vue"
import Page from "../components/Page.vue"
import Empty from "../components/Empty.vue"
import Load from "../components/Load.vue"
import NodeViewFrame from "../components/NodeViewFrame.vue"
import {onBeforeRouteUpdate, RouteLocationNormalizedLoaded, useRoute} from "vue-router";
import {globals} from "../base/globals";

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

        onBeforeRouteUpdate(to => {
            initNodeType(to)
        })
        onMounted(()=>{
            initNodeType(route)
        })
        function initNodeType(route:RouteLocationNormalizedLoaded){
            data.isLoading = true
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
        return {data}
    }
})
</script>

<style scoped>
@import "../css/view.css";
</style>