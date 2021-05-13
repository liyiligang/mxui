<template>
    <el-table :data="tableData" highlight-current-row height="361" v-elTableInfiniteScroll="tableLoad">
        <el-table-column label="编号" type="index" align="center" width="160"></el-table-column>
        <el-table-column label="报告值" align="center">
            <template #default="scope">
                <div :class="[getStateColor(scope.$index)]">{{getValue(scope.$index)}}</div>
            </template>
        </el-table-column>
        <el-table-column label="日期" align="center" width="220">
            <template #default="scope">
                <div>{{getTime(scope.$index)}}</div>
            </template>
        </el-table-column>
    </el-table>
</template>


<script lang="ts">
import {defineComponent, onMounted, PropType} from "vue";
import {protoManage} from "../../proto/manage";
import {globals} from "../../base/globals";
import {convert} from "../../base/convert";

interface NodeReportValTableInfo {

}

export default defineComponent ({
    name: "NodeReportValTable",
    components: {

    },
    props:{
        tableData:{
            type: Array as PropType<protoManage.INodeReportVal[]>,
            default: () => []
        },
    },
    setup(props){
        function getStateColor(index){
            return convert.getColorByState(props.tableData[index].State)
        }
        function getValue(index){
            return props.tableData[index].Value
        }
        function getTime(index){
            return globals.formatDate(props.tableData[index].Base?.UpdateTime)
        }
        function tableLoad(){

        }
        return {getTime, getStateColor, getValue, tableLoad}
    }
})
</script>

<style scoped>
@import "../../css/color.css";
</style>

