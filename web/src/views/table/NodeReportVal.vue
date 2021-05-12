<template>
    <el-row  v-loading="data.loading" type="flex" justify="center" align="middle">
        <Empty v-if="data.nodeReportValList.length==0"></Empty>
        <el-row v-else type="flex" justify="space-around" align="middle">
            <el-col :span="9">
                <NodeReportValTable class="history" :tableData="data.nodeReportValList"></NodeReportValTable>
            </el-col>
            <el-col :span="15">
                <Line :lineData="data.nodeReportValList"></Line>
            </el-col>
            <el-button @click=freshen circle icon="el-icon-refresh-right"></el-button>
            <el-input-number v-model="data.reportValNum" controls-position="right" :precision="0"
                             :min="0" :max="100000" label="报告数量"></el-input-number>
        </el-row>
    </el-row>
</template>

<script lang="ts">
import {defineComponent, reactive, onMounted} from "vue";
import {protoManage} from "../../proto/manage";
import NodeReportValTable from "../../components/table/NodeReportValTable.vue"
import Line from "../../components/echarts/Line.vue"
import Empty from "../../components/Empty.vue"
import {request} from "../../base/request";

interface NodeReportValInfo {
    loading: boolean
    reportValNum: number
    tabActiveName:string
    nodeReportValList:protoManage.INodeFuncCall[]
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
        const data = reactive<NodeReportValInfo>({loading:false, reportValNum:100, tabActiveName:"parameter", nodeReportValList:[]})

        onMounted(()=>{
            reqNodeReportValList()
        })

        function reqNodeReportValList(){
            data.loading = true
            request.reqNodeReportValList(protoManage.Filter.create({
                ReportID:Number(props.nodeReport.Base?.ID),
                PageSize:Number(data.reportValNum),
                PageNum:Number(1)
            })).then((response) => {
                data.nodeReportValList.length = 0
                for (let i = 0; i < response.NodeReportValList.length; i++){
                    data.nodeReportValList.push(response.NodeReportValList[i])
                }
            }).catch(error => {}).finally(()=>{data.loading = false})
        }


        function freshen() {
            reqNodeReportValList()
        }

        function tabClick(tab, event) {

        }

        return {data, tabClick, freshen}
    }
})
</script>

<style scoped>
.history{
    width: 680px;
}
.tabs{
    width: 380px;
}
</style>