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
    <el-table class="resourceTable" :data="tableData" height="100%" highlight-current-row v-elTableInfiniteScroll="tableLoad">
        <el-table-column :label="$t('nodeResource.table.id')" type="index" :index="indexMethod" align="center" width="120"></el-table-column>
        <el-table-column :label="$t('nodeResource.table.uploader')" align="center" min-width="50">
            <template #default="scope">
                <div>{{getUploaderName(scope.$index)}}</div>
            </template>
        </el-table-column>
        <el-table-column :label="$t('nodeResource.table.uploaderType')" align="center" width="80">
            <template #default="scope">
                <div>{{getUploaderType(scope.$index)}}</div>
            </template>
        </el-table-column>
        <el-table-column :label="$t('nodeResource.table.name')" align="center">
            <template #default="scope">
                <el-link :underline="false" :type=getNameColor(scope.$index) @click="resourceNameClick(scope.$index)">
                    {{getResourceName(scope.$index)}}
                </el-link>
            </template>
        </el-table-column>
        <el-table-column :label="$t('nodeResource.table.size')" align="center" width="120">
            <template #default="scope">
                <div>{{getResourceSize(scope.$index)}}</div>
            </template>
        </el-table-column>
        <el-table-column :label="$t('nodeResource.table.downLoadCnt')" align="center" width="120">
            <template #default="scope">
                <div>{{getResourceDownLoadCnt(scope.$index)}}</div>
            </template>
        </el-table-column>
        <el-table-column :label="$t('nodeResource.table.date')" align="center" width="162">
            <template #default="scope">
                <div>{{getUploaderTime(scope.$index)}}</div>
            </template>
        </el-table-column>

        <el-table-column :label="$t('nodeResource.table.state')" align="center" width="80">
            <template #default="scope">
                <div :class="[getStateColor(scope.$index)]">{{getResourceState(scope.$index)}}</div>
            </template>
        </el-table-column>
    </el-table>
</template>


<script lang="ts">
import {defineComponent, PropType} from "vue";
import {protoManage} from "../../proto/manage";
import i18n from '../../base/i18n'
import {convert} from "../../base/convert";
import {request} from "../../base/request";

interface NodeResourceTableInfo {

}

export default defineComponent ({
    name: "NodeResourceTable",
    components: {

    },
    props:{
        tableData:{
            type: Array as PropType<protoManage.INodeResource[]>,
            default: () => []
        }
    },
    setup(props){

        function getResourceName(index){
            return props.tableData[index].Name
        }
        function getResourceMd5(index){
            return props.tableData[index].Md5
        }
        function getResourceSize(index){
            return convert.renderSize(Number(props.tableData[index].Sizes))
        }
        function getResourceState(index){
            let state = props.tableData[index].State
            switch (state) {
                case protoManage.State.StateNormal:
                    return i18n.global.t('nodeResource.state.normal')
                default:
                    return i18n.global.t('nodeResource.state.invalid')
            }
        }
        function getResourceDownLoadCnt(index){
            return props.tableData[index].DownLoadCnt
        }
        function getUploaderName(index){
            return props.tableData[index].UploaderName
        }
        function getUploaderType(index){
            let uploaderType = props.tableData[index].UploaderType
            switch (uploaderType) {
                case protoManage.NotifySenderType.NotifySenderTypeUser:
                    return i18n.global.t('nodeResource.uploaderType.user')
                case protoManage.NotifySenderType.NotifySenderTypeNode:
                    return i18n.global.t('nodeResource.uploaderType.node')
                default:
                    return i18n.global.t('nodeResource.uploaderType.unknown')
            }
        }

        function getNameColor(index){
            return convert.getColorWithResourceName(props.tableData[index].State)
        }

        function getStateColor(index){
            return convert.getColorWithResourceState(props.tableData[index].State)
        }

        function getUploaderTime(index){
            return convert.timeStampToFormatDate(props.tableData[index].UploadTime)
        }

        function indexMethod(index) {
            return props.tableData[index].Base?.ID
        }

        function resourceNameClick(index){
            let nodeResource = props.tableData[index]
            request.reqNodeResourceDownLoad(protoManage.NodeResource.create({
                Base: protoManage.Base.create({ID: nodeResource.Base?.ID}),
                Name: nodeResource.Name
            }))
        }

        function tableLoad(){

        }
        return {getResourceName, getResourceSize, getResourceDownLoadCnt, getNameColor,
            getUploaderName, getUploaderType, getStateColor, getUploaderTime, getResourceState, indexMethod,
            resourceNameClick, tableLoad}
    }
})
</script>

<style scoped>
@import "../../css/color.css";
@import "../../css/card.css";
</style>

<style>
.resourceTable .el-table__body-wrapper{
    overflow-y: hidden !important;
    height: auto !important;
}

.resourceTable .el-scrollbar__wrap{
    height: auto !important;
}
</style>