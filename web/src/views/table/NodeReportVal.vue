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
            <el-row class="tableReportValFooterView" type="flex" justify="center" align="middle">
                <el-select class="tableReportValSelect" v-model="data.selectValue" @change="selectChanged"
                           filterable allow-create :disabled="data.loading"
                           default-first-option placeholder="请输入请求数目">
                    <el-option v-for="item in data.selectOptions" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
            </el-row>
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
    tabActiveName:string
    nodeReportValList:protoManage.INodeFuncCall[]
    selectValue:string
    selectOptions: Array<{value:string, label: string}>

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
            nodeReportValList:[], selectValue:"100", selectOptions:[{value: '100', label: '100'},
                {value: '500', label: '500'}, {value: '1000', label: '1000'},
                {value: '5000', label: '5000'}, {value: '10000', label: '10000'}]})

        onMounted(()=>{
            reqNodeReportValList()
        })

        function reqNodeReportValList(){
            data.loading = true
            request.reqNodeReportValList(protoManage.Filter.create({
                ReportID:Number(props.nodeReport.Base?.ID),
                PageSize:Number(data.selectValue),
                PageNum:Number(1)
            })).then((response) => {
                data.nodeReportValList.length = 0
                for (let i = 0; i < response.NodeReportValList.length; i++){
                    data.nodeReportValList.push(response.NodeReportValList[i])
                }
            }).catch(error => {}).finally(()=>{data.loading = false})
        }

        function selectChanged() {
            reqNodeReportValList()
        }

        function tabClick(tab, event) {

        }

        return {data, tabClick, selectChanged}
    }
})
</script>

<style scoped>

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
</style>