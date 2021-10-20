<template>
    <el-table :data="tableData" highlight-current-row height="100%" :row-class-name="tableRowClassName">
        <el-table-column label="编号" type="index" align="center" width="80"></el-table-column>
        <el-table-column v-for="(v, i) of tableSchema.CategoryList" :prop="v.Name" :label="v.Name"
                       resizable align="center" :min-width="v.Width" >
            <template #default="scope">
                <div :class="[getStateColor(scope.$index, i)]">{{getValue(scope.$index, i)}}</div>
            </template>
        </el-table-column>

        <el-table-column label="日期" align="center" width="160">
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
        tableSchema:{
            type: Object,
            default: {}
        },
    },
    setup(props){
        function getStateColor(rowIndex, valIndex){
            let valObj = globals.getJson(String(props.tableData[rowIndex].Value))
            if (valObj.ValueList[valIndex]){
                return convert.getColorByState(valObj.ValueList[valIndex].State)
            }
            return ""

        }
        function getValue(rowIndex, valIndex){
            let valObj = globals.getJson(String(props.tableData[rowIndex].Value))
            if (valObj.ValueList[valIndex]){
                return valObj.ValueList[valIndex].Value
            }
            return ""
        }
        function getTime(index){
            return convert.timeStampToFormatDate(props.tableData[index].Base?.UpdateTime)
        }

        function tableRowClassName({ row, rowIndex }){
            return ''
        }
        return {getTime, getStateColor, getValue, tableRowClassName}
    }
})
</script>

<style scoped>
@import "../../css/color.css";
</style>

