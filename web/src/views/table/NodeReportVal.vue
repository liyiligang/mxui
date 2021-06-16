<template>
    <el-row type="flex" justify="center" align="middle">
        <Empty v-if="data.nodeReportValList.length==0" class="tableReportValBodyEmpty"></Empty>
        <el-row class="tableReportValMainView" v-else>
            <el-row class="tableReportValBodyView" v-loading="data.loading" element-loading-text="请等待结果返回..." type="flex" justify="space-between" align="middle">
                <el-tabs class="tableReportValTabs" v-model="data.tabActiveName" type="border-card" @tabClick="tabClick">
                    <el-tab-pane label="折线" name="line">
                        <Line class="tableReportValLine" :lineData="data.nodeReportValList"></Line>
                    </el-tab-pane>
                    <el-tab-pane label="表格" name="table">
                        <NodeReportValTable class="tableReportValTable" :tableData="data.nodeReportValList"></NodeReportValTable>
                    </el-tab-pane>
                </el-tabs>
            </el-row>
            <el-row class="tableReportValFooterView" type="flex" justify="space-around" align="middle">
                <el-row type="flex" justify="center" align="middle">
                    <div class="color-text-normal">结果集：</div>
                    <el-select class="tableReportValSelect" v-model="data.selectGetCountValue" @change="selectGetCountChanged"
                               :disabled="data.loading" default-first-option placeholder="请输入请求数目">
                        <el-option v-for="i in data.selectGetCountOptions" :key="i" :label="getCountSelectLabel(i)" :value="i"></el-option>
                    </el-select>
                </el-row>
                <el-button class="refreshButton" :disabled="data.loading" @click="refreshButtonClick">刷新</el-button>
                <el-row type="flex" justify="center" align="middle">
                    <div class="color-text-normal">自动刷新：</div>
                    <el-select class="tableReportValSelect" v-model="data.selectAutoRefreshValue" @change="selectAutoRefreshChanged"
                               :disabled="data.loading" default-first-option placeholder="请输入自动刷新时间">
                        <el-option v-for="i in data.selectAutoRefreshOptions" :key="i" :label="autoRefreshSelectLabel(i)" :value="i"></el-option>
                    </el-select>
                </el-row>
            </el-row>
        </el-row>
    </el-row>
</template>

<script lang="ts">
import {defineComponent, reactive, onMounted, getCurrentInstance, onUnmounted} from "vue";
import {protoManage} from "../../proto/manage";
import {globals} from "../../base/globals";
import NodeReportValTable from "../../components/table/NodeReportValTable.vue"
import Line from "../../components/echarts/Line.vue"
import Empty from "../../components/Empty.vue"
import {request} from "../../base/request";
import {ElMessage} from "element-plus";
import {refresh} from "../../base/refresh";

interface NodeReportValInfo {
    loading: boolean
    tabActiveName:string
    nodeReportValList:protoManage.INodeFuncCall[]
    selectGetCountValue:string
    selectGetCountOptions: Array<string>
    selectAutoRefreshValue:string
    selectAutoRefreshOptions: Array<string>
}

export default defineComponent ({
    name: "NodeReportVal",
    components: {
        NodeReportValTable,
        Line,
        Empty
    },
    props:{
        nodeReport:{
            type: protoManage.NodeReport,
            default: protoManage.NodeReport.create()
        }
    },
    setup(props){
        const data = reactive<NodeReportValInfo>({loading:false, tabActiveName:"line",
            nodeReportValList:[], selectGetCountValue:"100", selectGetCountOptions:["50", "100", "200", "500", "1000"],
            selectAutoRefreshValue:"0", selectAutoRefreshOptions:["2", "5", "10", "30", "0"]})
        const instance = getCurrentInstance()

        onMounted(()=>{
            reqNodeReportValList()
        })
        onUnmounted(()=>{
            refresh.removeUserAutoRefresh(instance?.uid)
        })
        function reqNodeReportValList(){
            data.loading = true
            let getNodeReportValList = ()=>{
                request.reqNodeReportValList(protoManage.Filter.create({
                    ReportID:Number(props.nodeReport.Base?.ID),
                    PageSize:Number(data.selectGetCountValue),
                    PageNum:Number(1)
                })).then((response) => {
                    data.nodeReportValList.length = 0
                    for (let i = 0; i < response.NodeReportValList.length; i++){
                        data.nodeReportValList.push(response.NodeReportValList[i])
                    }
                }).catch(error => {}).finally(()=>{data.loading = false})
            }
            refresh.addUserAutoRefresh(instance?.uid, Number(data.selectAutoRefreshValue), getNodeReportValList)
        }

        function getCountSelectLabel(val:string){
            return val+"条"
        }

        function autoRefreshSelectLabel(val:string){
            if (val == "0"){
                return "关闭"
            }
            return val+"秒/次"
        }

        function refreshButtonClick(){
            reqNodeReportValList()
        }

        function selectGetCountChanged() {
            if (!globals.isPositiveIntWithStr(data.selectGetCountValue)){
                ElMessage.error("请输入一个正整数");
                return
            }
            reqNodeReportValList()
        }

        function selectAutoRefreshChanged() {
            if (!globals.isNoNegativeIntWithStr(data.selectAutoRefreshValue)){
                ElMessage.error("请输入一个非负整数");
                return
            }
            refresh.updateUserAutoRefresh(instance?.uid, Number(data.selectAutoRefreshValue), true)
        }

        function tabClick(tab, event) {

        }

        return {data, tabClick, selectGetCountChanged, selectAutoRefreshChanged, getCountSelectLabel, autoRefreshSelectLabel,
            refreshButtonClick}
    }
})
</script>

<style scoped>
@import "../../css/color.css";

.tableReportValBodyEmpty{
    width: 100%;
    height: 460px;
}

.tableReportValMainView{
    width: 100%;
}

.tableReportValBodyView{
    width: 100%;
    flex-wrap: nowrap;
}

.tableReportValTabs{
    width: 100%;
}

.tableReportValFooterView{
    margin-top: 20px;
    width: 100%;
}

.tableReportValSelect{
    width: 150px;
}

.refreshButton{
    /*border:0px;*/
    /*padding: 0px;*/
    /*font-size:30px;*/
    /*margin-right: 15px;*/
}
</style>