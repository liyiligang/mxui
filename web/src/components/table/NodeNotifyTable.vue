<template>
    <el-table :data="tableData" height="100%" highlight-current-row v-elTableInfiniteScroll="tableLoad">
        <el-table-column label="编号" type="index" align="center" width="120"></el-table-column>
        <el-table-column label="通知者" align="center" width="220">
            <template #default="scope">
                <div class="card-text-omit">{{getSenderName(scope.$index)}}</div>
            </template>
        </el-table-column>
        <el-table-column label="通知类型" align="center" width="80">
            <template #default="scope">
                <div>{{getSenderType(scope.$index)}}</div>
            </template>
        </el-table-column>
        <el-table-column label="消息" align="center">
            <template #default="scope">
                <div class="card-text-omit" :class="[getStateColor(scope.$index)]">{{getMessage(scope.$index)}}</div>
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
            let senderType = props.tableData[index].SenderType
            switch (senderType) {
                case protoManage.NotifySenderType.NotifySenderTypeUser:
                    return getUserSenderName(index)
                case protoManage.NotifySenderType.NotifySenderTypeNode:
                    return getNodeSenderName(index)
                default:
                    return "未知"
            }
        }

        function getUserSenderName(index){
            let manager = globals.getManagerByID(props.tableData[index].SenderID)
            if (manager == undefined){
                return "未知"
            }
            return manager.NickName
        }

        function getNodeSenderName(index){
            let nodeID = props.tableData[index].SenderID
            if (nodeID == null){
                return "未知"
            }
            let node = props.nodeMap.get(nodeID)
            if (node == undefined){
                return "未知"
            }
            return node.Name
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
            return globals.formatDate(props.tableData[index].Base?.UpdateTime)
        }

        function tableLoad(){

        }
        return {getSenderName, getSenderType, getStateColor, getMessage, getTime, tableLoad}
    }
})
</script>

<style scoped>
@import "../../css/color.css";
@import "../../css/card.css";

</style>
