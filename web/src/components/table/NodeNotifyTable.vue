<template>
    <el-table class="notifyTable" :data="tableData" height="100%" highlight-current-row v-elTableInfiniteScroll="tableLoad">
        <el-table-column label="编号" type="index" :index="indexMethod" align="center" width="120"></el-table-column>
        <el-table-column label="通知者" align="center" width="200">
            <template #default="scope">
                <div>{{getSenderName(scope.$index)}}</div>
            </template>
        </el-table-column>
        <el-table-column label="通知类型" align="center" width="80">
            <template #default="scope">
                <div>{{getSenderType(scope.$index)}}</div>
            </template>
        </el-table-column>
        <el-table-column label="消息" align="center">
            <template #default="scope">
                <div :class="[getStateColor(scope.$index)]">{{getMessage(scope.$index)}}</div>
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
import {defineComponent, PropType} from "vue";
import {protoManage} from "../../proto/manage";
import {globals} from "../../base/globals";
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
        },
        nodeMap:{
            type: Object as PropType<Map<number, protoManage.INode>>,
            default: new Map<number, protoManage.INode>()
        },
    },
    setup(props){

        function getSenderName(index){
            return props.tableData[index].SenderName
        }

        function getSenderType(index){
            let senderType = props.tableData[index].SenderType
            switch (senderType) {
                case protoManage.NotifySenderType.NotifySenderTypeUser:
                    return "用户"
                case protoManage.NotifySenderType.NotifySenderTypeNode:
                    return "节点"
                default:
                    return "未知"
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
}
</style>