<template>
    <CardViewFrame :isGray="convert.isGrayByState(nodeReport.State)" :hasHeader="true" @closeClick="closeNodeReport">
        <template v-slot:header>
            <CardName :color="convert.getColorByLevel(nodeReport.Level)" :name="nodeReport.Name" :id="nodeReport.Base.ID"></CardName>
            <CardInfo  describe="权限" :name="convert.getManagerLevelName(nodeReport.Level)"
                       :name-color="convert.getColorByLevel(nodeReport.Level)"></CardInfo>
            <CardInfo  describe="回调" :name="nodeReport.Func"></CardInfo>
            <CardInfo  describe="节点" :name="node.Name" :nameColor="convert.getColorByState(node.State)" :link=routerPath.toNode(protoManage.Filter.create({ID:node.Base.ID}))></CardInfo>
            <CardBase :id="nodeReport.Base.ID" :time="nodeReport.Base.UpdateTime"></CardBase>
        </template>
        <template v-slot:body>
            <CardReportVal @textClick=textClick name="报告值" :value="nodeReportVal.Value" :stateColor="convert.getColorByState(nodeReportVal.State)"
                           :time="nodeReportVal.Base?.UpdateTime"></CardReportVal>

            <DialogViewFrame v-model="data.dialogVisible" :title="nodeReport.Name"
                             :level="nodeReport.Level" width="860px">
                <NodeReportVal :nodeReport="nodeReport"></NodeReportVal>
            </DialogViewFrame>
        </template>
    </CardViewFrame>
</template>

<script lang="ts">
import {defineComponent, reactive, onMounted, PropType} from "vue";
import CardName from "../cardItem/CardName.vue"
import CardInfo from "../cardItem/CardInfo.vue"
import CardBase from "../cardItem/CardBase.vue"
import CardViewFrame from "./CardViewFrame.vue"
import CardReportVal from "../cardItem/CardReportVal.vue"
import NodeReportVal from "../../views/dialog/NodeReportVal.vue"
import DialogViewFrame from "../../views/dialog/DialogViewFrame.vue";
import {routerPath} from "../../router";
import {protoManage} from "../../proto/manage"
import {request} from "../../base/request";
import {convert} from "../../base/convert";
import {defaultVal} from "../../base/defaultVal";

interface NodeReportCardInfo {
    dialogVisible:boolean
}

export default defineComponent ({
    name: "NodeReportCard",
    emits: ['deleteNodeReport'],
    props:{
        nodeReport:{
            type: protoManage.NodeReport,
            default: defaultVal.getDefaultProtoNodeReport()
        },
        node:{
            type: protoManage.Node,
            default: defaultVal.getDefaultProtoNode()
        },
        nodeReportVal:{
            type: protoManage.NodeReportVal,
            default: defaultVal.getDefaultProtoNodeReportVal()
        },
    },
    components: {
        CardName,
        CardBase,
        CardViewFrame,
        CardInfo,
        CardReportVal,
        NodeReportVal,
        DialogViewFrame
    },
    setup(props, context){
        const data = reactive<NodeReportCardInfo>({dialogVisible:false})
        function textClick(){
            data.dialogVisible = true
        }

        function closeNodeReport(){
            context.emit('deleteNodeReport', props.nodeReport)
        }

        return {data, textClick, request, convert, protoManage, routerPath, closeNodeReport}
    }
})
</script>

<style scoped>
@import "../../css/card.css";
@import "../../css/color.css";
</style>