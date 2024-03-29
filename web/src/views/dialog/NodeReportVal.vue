<!--
Copyright 2021 liyiligang

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.f
-->

<template>
    <el-row class="nodeReportValMainRow" v-loading="data.loading" :element-loading-text="$t('dialog.nodeReportVal.waitResult')" type="flex" justify="center" align="middle">
        <Empty v-if="data.nodeReportValList.length===0" class="nodeReportValEmpty"></Empty>
        <el-row v-else class="nodeReportValContentRow">
            <NodeReportValLine v-if="nodeReport.Type===protoManage.NodeReportType.NodeReportTypeLine" :line-schema="globals.getJson(nodeReport.Schema)"
                               :line-data="data.nodeReportValList"></NodeReportValLine>
            <NodeReportValTable v-else :table-data="data.nodeReportValList" :table-data-array-list="convertValObjToArray()"
                                :table-schema="globals.getJson(nodeReport.Schema)"></NodeReportValTable>
        </el-row>
    </el-row>
    <DialogViewFrame v-model="data.setDialogVisible" :title="$t('dialog.nodeReportVal.setting')" width="380px" @closed="setViewClose">
        <el-row class="nodeReportValSetRow" type="flex" justify="center" align="middle">
            <el-form label-width="120px" label-position="left" :model="data.setData">
                <el-form-item :label="$t('dialog.nodeReportVal.resultSet')">
                    <el-input-number v-model="data.setData.requestCount" :min="1" />
                </el-form-item>
                <el-form-item :label="$t('dialog.nodeReportVal.sync')">
                    <el-input-number v-model="data.setData.autoRefresh" :min="0.1" :precision="2" />
                </el-form-item>
            </el-form>
            <el-row class="nodeReportValSetButtonRow" type="flex" justify="center" align="middle">
                <el-button class="nodeReportValSetButton" type="primary" @click="setDataChanged">{{$t('dialog.nodeReportVal.okButton')}}</el-button>
            </el-row>
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
            nodeReportValList:[], setData:{requestCount:100, autoRefresh:3, autoRefreshState:false}, setDataOld:""})
        const instance = getCurrentInstance()

        onMounted(()=>{
            data.setDataOld = JSON.stringify(data.setData)
            reqNodeReportValList()
            autoRefreshStateChanged(true)
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

        function convertValObjToArray() {
            let valueList:Array<any> = []
            for (let i=0; i<data.nodeReportValList.length; i++){
                let nodeReportVal:protoManage.INodeReportVal = data.nodeReportValList[i]
                let jsonObj = globals.getJson(String(nodeReportVal.Value))
                valueList.push(Object.values(jsonObj))
            }
            return valueList
        }

        return {data, globals, protoManage, setDataChanged, reqNodeReportValList, autoRefreshStateChanged,
            showSettingView, setViewClose, convertValObjToArray}
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

.nodeReportValSetButtonRow{
    width: 100%;
}

.nodeReportValSetButton{
    margin-top: 10px;
}

</style>
