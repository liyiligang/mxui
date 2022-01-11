<template>
    <el-table class="resourceTable" :data="tableData" height="100%" highlight-current-row v-elTableInfiniteScroll="tableLoad">
        <el-table-column label="编号" type="index" :index="indexMethod" align="center" width="120"></el-table-column>
        <el-table-column label="资源名" align="center" width="160">
            <template #default="scope">
                <el-button type="text" class="resourceName" :class="[getStateColor(scope.$index)]" @click="resourceNameClick(scope.$index)">
                    {{getResourceName(scope.$index)}}
                </el-button>
            </template>
        </el-table-column>
        <el-table-column label="资源大小" align="center" width="120">
            <template #default="scope">
                <div>{{getResourceSize(scope.$index)}}</div>
            </template>
        </el-table-column>
        <el-table-column label="Md5" align="center" width="170">
            <template #default="scope">
                <div>{{getResourceMd5(scope.$index)}}</div>
            </template>
        </el-table-column>
        <el-table-column label="下载次数" align="center" width="120">
            <template #default="scope">
                <div>{{getResourceDownLoadCnt(scope.$index)}}</div>
            </template>
        </el-table-column>

        <el-table-column label="上传者" align="center" width="160">
            <template #default="scope">
                <div>{{getUploaderName(scope.$index)}}</div>
            </template>
        </el-table-column>
        <el-table-column label="上传源" align="center" width="150">
            <template #default="scope">
                <div>{{getUploaderType(scope.$index)}}</div>
            </template>
        </el-table-column>
        <el-table-column label="上传日期" align="center" width="100">
            <template #default="scope">
                <div>{{getUploaderTime(scope.$index)}}</div>
            </template>
        </el-table-column>

        <el-table-column label="状态" align="center" width="80">
            <template #default="scope">
                <div :class="[getStateColor(scope.$index)]">{{getResourceState(scope.$index)}}</div>
            </template>
        </el-table-column>
    </el-table>
</template>


<script lang="ts">
import {defineComponent, PropType} from "vue";
import {protoManage} from "../../proto/manage";
import {globals} from "../../base/globals";
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
            return props.tableData[index].Sizes
        }
        function getResourceState(index){
            let state = props.tableData[index].State
            switch (state) {
                case protoManage.State.StateNormal:
                    return "正常"
                default:
                    return "已失效"
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
                    return "用户"
                case protoManage.NotifySenderType.NotifySenderTypeNode:
                    return "节点"
                default:
                    return "未知"
            }
        }

        function getStateColor(index){
            return convert.getColorByResourceState(props.tableData[index].State)
        }

        function getUploaderTime(index){
            return convert.timeStampToFormatDate(props.tableData[index].Base?.UpdateTime)
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
        return {getResourceName, getResourceMd5, getResourceSize, getResourceDownLoadCnt,
            getUploaderName, getUploaderType, getStateColor, getUploaderTime, getResourceState, indexMethod,
            resourceNameClick, tableLoad}
    }
})
</script>

<style scoped>
@import "../../css/color.css";
@import "../../css/card.css";

.resourceName {
    font-size: 14px;
}

</style>

<style>
.resourceTable .el-table__body-wrapper{
    overflow-y: hidden !important;
}
</style>