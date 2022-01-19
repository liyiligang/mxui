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
limitations under the License.
-->

<template>
    <el-table
        ref="funcCallTable" :data="tableData" @current-change="tableSelect"
        v-elTableInfiniteScroll="tableLoad" height="100%" highlight-current-row>
        <el-table-column :label="$t('nodeFuncCall.table.id')" type="index" :index="indexMethod" align="center" width="80"></el-table-column>
        <el-table-column :label="$t('nodeFuncCall.table.caller')" align="center">
            <template #default="scope">
                <div>{{getManagerNickName(scope.$index)}}</div>
            </template>
        </el-table-column>
        <el-table-column :label="$t('nodeFuncCall.table.state')" align="center" width="80">
            <template #default="scope">
                <div :class="[getStateColor(scope.$index)]">{{getState(scope.$index)}}</div>
            </template>
        </el-table-column>
        <el-table-column :label="$t('nodeFuncCall.table.parameter')" align="center" width="100">
            <template #default="scope">
                <el-button type="text" @click="clickParameter(scope.$index)">{{getParameterTypeName()}}</el-button>
            </template>
        </el-table-column>
        <el-table-column :label="$t('nodeFuncCall.table.returnVal')" align="center" width="100">
            <template #default="scope">
                <el-button type="text" @click="clickReturnVal(scope.$index)">{{getReturnValTypeName(scope.$index)}}</el-button>
            </template>
        </el-table-column>
        <el-table-column :label="$t('nodeFuncCall.table.date')" align="center" width="162">
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