<template>
    <el-row class="nodeNotify">
        <el-row class="nodeNotifyFilter" type="flex" justify="end" align="middle">
            <NodeNotifyFormFilter></NodeNotifyFormFilter>
            <NodeNotifyMessageFilter></NodeNotifyMessageFilter>
        </el-row>
        <el-row class="nodeNotifyFrame">
            <NodeViewFrame :pageTotal="data.pageTotal" :isLoading="data.isLoading">
                <NodeNotifyTable class="nodeNotifyTable" :tableData="data.nodeNotifyList" :nodeMap="data.nodeMap" ></NodeNotifyTable>
            </NodeViewFrame>
        </el-row>
    </el-row>
</template>

<script lang="ts">
import {defineComponent, onMounted, reactive} from "vue";
import {protoManage} from "../../proto/manage";
import {request} from "../../base/request";
import {onBeforeRouteUpdate, RouteLocationNormalizedLoaded, useRoute, useRouter} from "vue-router";
import NodeViewFrame from "../../components/NodeViewFrame.vue"
import NodeNotifyTable from "../../components/table/NodeNotifyTable.vue"
import SelectFilter from "../../components/fifter/NodeNotifyMessageFilter.vue"
import NodeNotifyFormFilter from "../../components/fifter/NodeNotifyFormFilter.vue"
import NodeNotifyMessageFilter from "../../components/fifter/NodeNotifyMessageFilter.vue"


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
        NodeNotifyTable,
        SelectFilter,
        NodeNotifyMessageFilter,
        NodeNotifyFormFilter
    },
    setup(){
        const data = reactive<NodeNotifyInfo>({isLoading:false, pageTotal:0, nodeNotifyList:[],
            nodeMap:new Map<number, protoManage.INode>()})
        const route = useRoute()

        onBeforeRouteUpdate(to => {
            initNodeNotify(to)
        })
        onMounted(()=>{
            initNodeNotify(route)
        })

        function initNodeNotify(route:RouteLocationNormalizedLoaded){
            data.isLoading = true
            request.reqNodeNotifyList(protoManage.Filter.create({
                PageSize:Number(route.query.pageSize),
                PageNum:Number(route.query.pageNum),
                SenderName:String(route.query.senderName),
                SenderType:Number(route.query.senderType),
                State:Number(route.query.senderState),
                SenderBeginTime:Number(route.query.senderBeginTime),
                SenderEndTime:Number(route.query.senderEndTime),
                Message:String(route.query.senderMessage),
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
@import "../../css/flex.css";

.nodeNotify{
    width: 100%;
    flex-direction: column;
}

.nodeNotifyFilter{
    margin-bottom: 10px;
    padding-right: 18px;
    width: 100%;
}

.nodeNotifyFrame{
    width: 100%;
    flex:auto;
}

.nodeNotifyTable{
    width: 99%;
    margin-left: 0.5%;
}

</style>