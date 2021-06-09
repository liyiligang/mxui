<template>
    <el-row class="nodeNotify">
        <el-row class="nodeNotifyFilter" type="flex" justify="end" align="middle">
            <NodeNotifyFormFilter></NodeNotifyFormFilter>
            <NodeNotifyMessageFilter></NodeNotifyMessageFilter>
        </el-row>
        <el-row class="nodeNotifyFrame">
            <NodeViewFrame v-if="globals.globalsData.managerSetting.setting.isPageFix" :pageTotal="data.pageTotal" :isLoading="data.isLoading">
                <NodeNotifyTable class="nodeNotifyTable" :tableData="data.nodeNotifyList" :nodeMap="data.nodeMap" ></NodeNotifyTable>
            </NodeViewFrame>
            
<!--            <NodeViewFrame :pageTotal="data.pageTotal" :isLoading="data.isLoading">-->
<!--                <el-row v-if="globals.globalsData.managerSetting.setting.isPageFix" class="nodeNotifyTableRow">-->
<!--                    <NodeNotifyTable class="nodeNotifyTable" :tableData="data.nodeNotifyList" :nodeMap="data.nodeMap" ></NodeNotifyTable>-->
<!--                </el-row>-->
<!--            </NodeViewFrame>-->
        </el-row>
    </el-row>
</template>

<script lang="ts">
import {defineComponent, getCurrentInstance, onMounted, onUnmounted, reactive} from "vue";
import {protoManage} from "../../proto/manage";
import {request} from "../../base/request";
import {refresh} from "../../base/refresh";
import {globals} from "../../base/globals";
import {onBeforeRouteUpdate, RouteLocationNormalizedLoaded, useRoute, useRouter} from "vue-router";
import NodeViewFrame from "../../components/NodeViewFrame.vue"
import NodeNotifyTable from "../../components/table/NodeNotifyTable.vue"
import SelectFilter from "../../components/fifter/NodeNotifyMessageFilter.vue"
import NodeNotifyFormFilter from "../../components/fifter/NodeNotifyFormFilter.vue"
import NodeNotifyMessageFilter from "../../components/fifter/NodeNotifyMessageFilter.vue"


interface NodeNotifyInfo {
    nodeNotifyList:Array<protoManage.INodeNotify>
    nodeMap: Map<number, protoManage.INode>
    pageTotal:number
    isLoading:boolean
    refreshFlag:number
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
        const data = reactive<NodeNotifyInfo>({nodeNotifyList:[], nodeMap:new Map<number, protoManage.INode>(),
            isLoading:false, pageTotal:0, refreshFlag:0})
        const route = useRoute()
        const instance = getCurrentInstance()

        onBeforeRouteUpdate(to => {
            initNodeNotify(to)
        })
        onMounted(()=>{
            initNodeNotify(route)
        })
        onUnmounted(()=>{
            refresh.removeGlobalAutoRefresh(instance?.uid)
        })
        function initNodeNotify(route:RouteLocationNormalizedLoaded){
            data.refreshFlag++
            data.isLoading = true
            let getNodeNotifyList = (flag:number)=>{
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
                    if (flag != data.refreshFlag){
                        return
                    }
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
                }).catch(error => {}).finally(()=>{
                    if (flag != data.refreshFlag){
                        return
                    }
                    data.isLoading = false
                })
            }
            refresh.addGlobalAutoRefresh(instance?.uid, getNodeNotifyList, data.refreshFlag)
        }

        return {data, globals}
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
    height: 0;
    overflow-y:scroll;
}

.nodeNotifyTableRow{
    width: 100%;
    flex:auto;
}

.nodeNotifyTable{
    width: 99%;
    margin-left: 0.5%;
}
</style>