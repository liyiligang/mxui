<template>
    <el-row class="nodeResource">
        <el-row class="nodeResourceFrame">
            <NodeViewFrame :pageTotal="data.pageTotal" :isLoading="data.isLoading">
                <el-row class="nodeResourceTableRow">
                    <NodeResourceTable class="nodeResourceTable" :tableData="data.nodeResourceList"></NodeResourceTable>
                </el-row>
            </NodeViewFrame>
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
import NodeViewFrame from "./NodeViewFrame.vue"
import NodeResourceTable from "../../components/table/NodeResourceTable.vue"
import {convert} from "../../base/convert";


interface NodeResourceInfo {
    nodeResourceList:Array<protoManage.INodeResource>
    pageTotal:number
    isLoading:boolean
    refreshFlag:number
}

export default defineComponent ({
    name: "NodeResource",
    components: {
        NodeViewFrame,
        NodeResourceTable
    },
    setup(){
        const data = reactive<NodeResourceInfo>({nodeResourceList:[], isLoading:false, pageTotal:0, refreshFlag:0})
        const route = useRoute()
        const instance = getCurrentInstance()

        onBeforeRouteUpdate(to => {
            initNodeResource(to)
        })

        onMounted(()=>{
            initNodeResource(route)
        })

        onUnmounted(()=>{
            refresh.removeGlobalAutoRefresh(instance?.uid)
        })
        function initNodeResource(route:RouteLocationNormalizedLoaded){
            data.refreshFlag++
            data.isLoading = true
            let getNodeResourceList = (flag:number)=>{
                request.reqNodeResourceList(protoManage.ReqNodeResourceList.create({
                    Page:protoManage.Page.create({
                        Count:Number(route.query.pageSize),
                        Num:globals.getPageNumOffset(route.query.pageNum)
                    }),
                    Name:convert.dataToArray(route.query.name),
                    UploaderName:convert.dataToArray(route.query.uploaderName),
                    UploaderType:convert.dataToArray(route.query.uploaderType),
                    State:convert.dataToArray(route.query.senderState),
                    InvalidTime:convert.dataToTimeArray(route.query.invalidTime),
                    UploadTime:convert.dataToArray(route.query.uploadTime),
                })).then((response) => {
                    if (flag != data.refreshFlag){
                        return
                    }
                    data.pageTotal = response.Length
                    data.nodeResourceList.length = 0
                    for (let i = 0; i < response.NodeResourceList.length; i++){
                        data.nodeResourceList.push(response.NodeResourceList[i])
                    }
                }).catch(error => {}).finally(()=>{
                    if (flag != data.refreshFlag){
                        return
                    }
                    data.isLoading = false
                })
            }
            refresh.addGlobalAutoRefresh(instance?.uid, getNodeResourceList, data.refreshFlag)
        }

        return {data, globals}
    }
})
</script>

<style scoped>
@import "../../css/flex.css";

.nodeResource{
    width: 100%;
    flex-direction: column;
}

.nodeResourceFilter{
    margin-bottom: 10px;
    padding-right: 18px;
    width: 100%;
}

.nodeResourceFrame{
    width: 100%;
    flex:auto;
    height: 0;
    overflow-y:scroll;
}

.nodeResourceTableRow{
    width: 100%;
    flex:auto;
}

.nodeResourceTable{
    width: 99%;
    margin-left: 0.5%;
}
</style>