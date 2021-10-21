<template>
    <el-table
        ref="funcCallTable" :data="tableData" @current-change="tableSelect"
        v-elTableInfiniteScroll="tableLoad" height="100%" highlight-current-row>
        <el-table-column label="编号" type="index" :index="indexMethod" align="center" width="80"></el-table-column>
        <el-table-column label="调用者" align="center" width="100">
            <template #default="scope">
                <div>{{getManagerNickName(scope.$index)}}</div>
            </template>
        </el-table-column>
        <el-table-column label="状态" align="center" width="80">
            <template #default="scope">
                <div :class="[getStateColor(scope.$index)]">{{getState(scope.$index)}}</div>
            </template>
        </el-table-column>
        <el-table-column label="参数" align="center" width="80">
            <template #default="scope">
                <el-button type="text" @click="clickParameter(scope.$index)">{{getParameterTypeName()}}</el-button>
            </template>
        </el-table-column>
        <el-table-column label="返回值" align="center" width="80">
            <template #default="scope">
                <el-button type="text" @click="clickReturnVal(scope.$index)">{{getReturnValTypeName(scope.$index)}}</el-button>
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
    emits: ['tableLoad', 'tableSelect', 'clickParameter', 'clickReturnVal'],
    props:{
        tableData:{
            type: Array as PropType<protoManage.INodeFuncCall[]>,
            default: () => []
        },
    },
    setup(props, context){
        function indexMethod(index) {
            return props.tableData[index].Base?.ID
        }
        function tableLoad(){
            context.emit('tableLoad')
        }
        function tableSelect(row, oldRow){
            context.emit('tableSelect', row, oldRow)
        }
        function clickParameter(index){
            context.emit('clickParameter', props.tableData[index].Base?.ID)
        }
        function clickReturnVal(index){
            context.emit('clickReturnVal', props.tableData[index].Base?.ID)
        }
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
            return convert.timeStampToFormatDate(props.tableData[index].Base?.UpdateTime)
        }
        function getParameterTypeName(){
            return convert.getNodeFuncParameterTypeName()
        }
        function getReturnValTypeName(index){
            return convert.getNodeFuncReturnTypeName(props.tableData[index].ReturnType)
        }

        const funcCallTable = ref<typeof ElTable>(ElTable);
        function tableSetCurrentRow(row:protoManage.INodeFuncCall){
            funcCallTable.value.setCurrentRow(row)
        }
        return {tableLoad, tableSetCurrentRow, tableSelect, getTime, getState, getStateColor,
            getManagerNickName, clickParameter, clickReturnVal, getParameterTypeName,
            getReturnValTypeName, indexMethod, funcCallTable}
    }
})
</script>

<style scoped>
@import "../../css/color.css";
</style>