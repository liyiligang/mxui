<template>
    <NodeViewFrame :pageTotal="data.pageTotal" :isLoading="data.isLoading">
        <NodeNotifyTable :tableData="data.nodeNotifyList" :nodeMap="data.nodeMap" ></NodeNotifyTable>
    </NodeViewFrame>
</template>

<script lang="ts">
import {defineComponent, onMounted, reactive} from "vue";
import {protoManage} from "../../proto/manage";
import {request} from "../../base/request";
import {RouteLocationNormalizedLoaded, useRoute} from "vue-router";
import NodeViewFrame from "../../components/NodeViewFrame.vue"
import NodeNotifyTable from "../../components/table/NodeNotifyTable.vue"

interface NodeNotifyInfo {
    isLoading:boolean
    pageTotal:number
    nodeNotifyList:Array<protoManage.INodeNotify>
    nodeMap: Map<number, protoManage.INode>
}

export default defineComponent ({
    name: "NodeNotify",
    components: {
        NodeViewFrame,
        NodeNotifyTable
    },
    setup(){
        const data = reactive<NodeNotifyInfo>({isLoading:false, pageTotal:0, nodeNotifyList:[],
            nodeMap:new Map<number, protoManage.INode>()})
        const route = useRoute()

        onMounted(()=>{
            initNodeNotify(route)
        })

        function initNodeNotify(route:RouteLocationNormalizedLoaded){
            data.isLoading = true
            request.reqNodeNotifyList(protoManage.Filter.create({
                PageNum : 1,
                PageSize: 100
            })).then((response) => {
                data.pageTotal = response.Length
                data.nodeNotifyList.length = 0
                for (let i = 0; i < response.NodeNotifyList.length; i++){
                    data.nodeNotifyList.push(response.NodeNotifyList[i])
                }
                data.nodeMap.clear()
                for (let i = 0; i < response.NodeList.length; i++){
                    let key = Number(response.NodeList[i].Base?.ID)
                    let val = response.NodeList[i]
                    data.nodeMap.set(key, val)
                }
            }).catch(error => {}).finally(()=>{data.isLoading = false})
        }

        return {data}
    }
})
</script>

<style scoped>

</style>