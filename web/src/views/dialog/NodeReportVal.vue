<template>
    <el-row class="nodeReportValMainRow" v-loading="data.loading" element-loading-text="请等待结果返回..." type="flex" justify="center" align="middle">
        <Empty v-if="data.nodeReportValList.length==0" class="nodeReportValEmpty"></Empty>
        <el-row v-else class="nodeReportValContentRow">
            <NodeReportValLine v-if="nodeReport.Type===protoManage.NodeReportType.NodeReportTypeLine" :line-schema="globals.getJson(nodeReport.Schema)"
                               :line-data="data.nodeReportValList"></NodeReportValLine>
            <NodeReportValTable v-else :table-data="data.nodeReportValList"
                                :table-schema="globals.getJson(nodeReport.Schema)"></NodeReportValTable>
        </el-row>
    </el-row>
    <DialogViewFrame v-model="data.setDialogVisible" title="设置" width="380px" @closed="setViewClose">
        <el-row class="nodeReportValSetRow"  type="flex" justify="center" align="middle">
            <el-form label-width="120px" label-position="left" :model="data.setData">
                <el-form-item label="结果集(条):">
                    <el-input-number v-model="data.setData.requestCount" size="medium" :min="1" />
                </el-form-item>
                <el-form-item label="数据同步(秒/次):">
                    <el-input-number v-model="data.setData.autoRefresh" size="medium" :min="0.1" :precision="2" />
                </el-form-item>
                <el-form-item>
                    <el-button class="nodeReportValSetButton" type="primary" @click="setDataChanged">确定</el-button>
                </el-form-item>
            </el-form>
        </el-row>
    </DialogViewFrame>
</template>

<script lang="ts">
import {defineComponent, reactive, onMounted, getCurrentInstance, onUnmounted} from "vue";
import {protoManage} from "../../proto/manage";
import {globals} from "../../base/globals";
import NodeReportValTable from "../../components/table/NodeReportValTable.vue"
import NodeReportValLine from "../../components/echarts/NodeReportValLine.vue"
import Empty from "../../components/Empty.vue"
import DialogViewFrame from "../../views/dialog/DialogViewFrame.vue";
import {request} from "../../base/request";
import {refresh} from "../../base/refresh";

interface NodeReportValInfo {
    loading: boolean
    tabActiveName:string
    nodeReportValList:protoManage.INodeFuncCall[]
    setDialogVisible:boolean
    setData:{
        requestCount:number
        autoRefresh:number
        autoRefreshState:boolean
    }
    setDataOld:string
}

export default defineComponent ({
    name: "NodeReportVal",
    components: {
        NodeReportValTable,
        NodeReportValLine,
        DialogViewFrame,
        Empty
    },
    props:{
        nodeReport:{
            type: protoManage.NodeReport,
            default: protoManage.NodeReport.create()
        }
    },
    setup(props){
        const data = reactive<NodeReportValInfo>({loading:false, setDialogVisible:false, tabActiveName:"line",
            nodeReportValList:[], setData:{requestCount:100, autoRefresh:2, autoRefreshState:false}, setDataOld:""})
        const instance = getCurrentInstance()

        onMounted(()=>{
            data.setDataOld = JSON.stringify(data.setData)
            reqNodeReportValList()
        })
        onUnmounted(()=>{
            refresh.removeUserAutoRefresh(instance?.uid)
        })

        function reqNodeReportValList(){
            data.loading = true
            request.reqNodeReportValList(protoManage.ReqNodeReportValList.create({
                Page:protoManage.Page.create({
                    Count:data.setData.requestCount,
                    Num:globals.getPageNumOffset(1)
                }),
                ReportID:props.nodeReport.Base?.ID,
            })).then((response) => {
                data.nodeReportValList.length = 0
                for (let i = 0; i < response.NodeReportValList.length; i++){
                    data.nodeReportValList.push(response.NodeReportValList[i])
                }
                refresh.addUserAutoRefresh(instance?.uid, data.setData.autoRefresh, updateNodeReportValList)
            }).catch(error => {}).finally(()=>{data.loading = false})
        }

        function updateNodeReportValList(){
            if (data.loading || !data.setData.autoRefreshState){
                return
            }
            let id = 0
            if (data.nodeReportValList.length > 0){
                id = Number(data.nodeReportValList[0].Base?.ID)
            }
            request.reqNodeReportValList(protoManage.ReqNodeReportValList.create({
                Page:protoManage.Page.create({
                    Count:data.setData.requestCount,
                    Num:globals.getPageNumOffset(1)
                }),
                ID: id,
                ReportID:props.nodeReport.Base?.ID,
            })).then((response) => {
                for (let i = response.NodeReportValList.length - 1; i >= 0; i--){
                    if (data.nodeReportValList.length >= data.setData.requestCount){
                        data.nodeReportValList.pop()
                    }
                    data.nodeReportValList.unshift(response.NodeReportValList[i])
                }
            }).catch(error => {}).finally(()=>{})
        }

        function showSettingView(){
            data.setDialogVisible = true
        }

        function setViewClose() {
            data.setData = Object(globals.getJson(data.setDataOld))
        }

        function setDataChanged() {
            data.setDataOld = JSON.stringify(data.setData)
            reqNodeReportValList()
            data.setDialogVisible = false
        }

        function autoRefreshStateChanged(state:boolean) {
            data.setData.autoRefreshState = state
            if (data.setData.autoRefreshState){
                refresh.updateUserAutoRefresh(instance?.uid, data.setData.autoRefresh, true)
            }
        }

        return {data, globals, protoManage, setDataChanged, reqNodeReportValList, autoRefreshStateChanged,
            showSettingView, setViewClose}
    }
})
</script>

<style scoped>
@import "../../css/color.css";

.nodeReportValMainRow{
    width: 100%;
    height: 100%;
}

.nodeReportValEmpty{
    width: 100%;
    height: 100%;
}

.nodeReportValContentRow{
    width: 100%;
    height: 100%;
}

.nodeReportValSetRow{
    width: 100%;
}

.nodeReportValSetButton{
    margin-top: 10px;
}

</style>
