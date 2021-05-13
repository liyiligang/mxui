<template>
    <el-table
        ref="table" :data="tableData" @current-change="tableSelect"
        v-elTableInfiniteScroll="tableLoad" height="432" highlight-current-row>
        <el-table-column label="编号" type="index" align="center" width="80"></el-table-column>
        <el-table-column label="调用者" align="center">
            <template #default="scope">
                <div>{{getManagerNickName(scope.$index)}}</div>
            </template>
        </el-table-column>
        <el-table-column label="状态" align="center" width="90">
            <template #default="scope">
                <div :class="[getStateColor(scope.$index)]">{{getState(scope.$index)}}</div>
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
import {defineComponent, onMounted, PropType, ref} from "vue";
import {protoManage} from "../../proto/manage";
import {globals} from "../../base/globals";
import {convert} from "../../base/convert";
import {ElTable} from "element-plus";

interface NodeFuncCallTableInfo {

}

export default defineComponent ({
    name: "NodeFuncCallTable",
    components: {

    },
    emits: ['tableLoad', 'tableSelect'],
    props:{
        tableData:{
            type: Array as PropType<protoManage.INodeFuncCall[]>,
            default: () => []
        },
    },
    setup(props, context){
        function getManagerNickName(index){
            return globals.getManagerByID(props.tableData[index].ManagerID)?.NickName
        }
        function getState(index){
            return convert.getNodeFuncCallStateName(props.tableData[index].State)
        }
        function getStateColor(index){
            return convert.getColorByState(props.tableData[index].State)
        }
        function getTime(index){
            return globals.formatDate(props.tableData[index].Base?.UpdateTime)
        }
        function tableLoad(){
            context.emit('tableLoad')
        }
        function tableSelect(row, oldRow){
            context.emit('tableSelect', row, oldRow)
        }

        const table = ref<typeof ElTable>(ElTable);
        function tableSetCurrentRow(row:protoManage.INodeFuncCall){
            table.value.setCurrentRow(row)
        }
        return {tableLoad, tableSetCurrentRow, tableSelect, getTime,
            getState, getStateColor, getManagerNickName, table}
    }
})
</script>

<style scoped>
@import "../../css/color.css";
</style>