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
    <el-table class="notifyTable" :data="tableData" height="100%" highlight-current-row v-elTableInfiniteScroll="tableLoad">
        <el-table-column :label="$t('nodeNotify.table.id')" type="index" :index="indexMethod" align="center" width="120"></el-table-column>
        <el-table-column :label="$t('nodeNotify.table.sender')" align="center" width="200">
            <template #default="scope">
                <div>{{getSenderName(scope.$index)}}</div>
            </template>
        </el-table-column>
        <el-table-column :label="$t('nodeNotify.table.sendType')" align="center" width="80">
            <template #default="scope">
                <div>{{getSenderType(scope.$index)}}</div>
            </template>
        </el-table-column>
        <el-table-column :label="$t('nodeNotify.table.message')" align="center">
            <template #default="scope">
                <div :class="[getStateColor(scope.$index)]">{{getMessage(scope.$index)}}</div>
            </template>
        </el-table-column>
        <el-table-column :label="$t('nodeNotify.table.date')" align="center" width="162">
            <template #default="scope">
                <div>{{getTime(scope.$index)}}</div>
            </template>
        </el-table-column>
    </el-table>
</template>


<script lang="ts">
import {defineComponent, PropType} from "vue";
import {protoManage} from "../../proto/manage";
import i18n from '../../base/i18n'
import {convert} from "../../base/convert";

interface NodeNotifyTableInfo {

}

export default defineComponent ({
    name: "NodeNotifyTable",
    components: {

    },
    props:{
        tableData:{
            type: Array as PropType<protoManage.INodeNotify[]>,
            default: () => []
        }
    },
    setup(props){

        function getSenderName(index){
            return props.tableData[index].SenderName
        }

        function getSenderType(index){
            let senderType = props.tableData[index].SenderType
            switch (senderType) {
                case protoManage.NotifySenderType.NotifySenderTypeUser:
                    return i18n.global.t('nodeNotify.senderType.user')
                case protoManage.NotifySenderType.NotifySenderTypeNode:
                    return i18n.global.t('nodeNotify.senderType.node')
                default:
                    return i18n.global.t('nodeNotify.senderType.unknown')
            }
        }

        function getStateColor(index){
            return convert.getColorByState(props.tableData[index].State)
        }

        function getMessage(index){
            return props.tableData[index].Message
        }

        function getTime(index){
            return convert.timeStampToFormatDate(props.tableData[index].Base?.UpdateTime)
        }

        function indexMethod(index) {
            return props.tableData[index].Base?.ID
        }

        function tableLoad(){

        }
        return {getSenderName, getSenderType, getStateColor, getMessage, getTime, indexMethod, tableLoad}
    }
})
</script>

<style scoped>
@import "../../css/color.css";
@import "../../css/card.css";
</style>

<style>
.notifyTable .el-table__body-wrapper{
    overflow-y: hidden !important;
    height: auto !important;
}
</style>