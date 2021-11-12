<template>
    <CardViewFrame :isGray="convert.isGrayByState(nodeReport.State)" :hasHeader="true" @closeClick="closeNodeReport">
        <template v-slot:header>
            <CardName :color="convert.getColorByLevel(nodeReport.Level)" :name="nodeReport.Name" :id="nodeReport.Base.ID"></CardName>
            <CardInfo  describe="权限" :name="convert.getManagerLevelName(nodeReport.Level)"
                       :name-color="convert.getColorByLevel(nodeReport.Level)"></CardInfo>
            <CardInfo  describe="回调" :name="nodeReport.Func"></CardInfo>
            <CardInfo  describe="间隔" :name="convert.getNodeReportIntervalStr(nodeReport.Interval)"></CardInfo>
            <CardInfo  describe="节点" :name="node.Name" :nameColor="convert.getColorByState(node.State)"
                       :call="toNode">
            </CardInfo>
            <CardBase :id="nodeReport.Base.ID" :time="nodeReport.Base.UpdateTime"></CardBase>
        </template>
        <template v-slot:body>
            <CardReportVal :nodeReport="nodeReport"></CardReportVal>
        </template>
    </CardViewFrame>
</template>

<script lang="ts">
import {defineComponent, reactive, ref} from "vue";
import CardName from "../cardItem/CardName.vue"
import CardInfo from "../cardItem/CardInfo.vue"
import CardBase from "../cardItem/CardBase.vue"
import CardViewFrame from "./CardViewFrame.vue"
import CardReportVal from "../cardItem/CardReportVal.vue"
import {routerPath} from "../../router";
import {protoManage} from "../../proto/manage"
import {request} from "../../base/request";
import {convert} from "../../base/convert";
import {defaultVal} from "../../base/defaultVal";
import {useRoute} from "vue-router";
import {filter} from "../../base/filter";

interface NodeReportCardInfo {

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
        }
    },
    components: {
        CardName,
        CardBase,
        CardViewFrame,
        CardInfo,
        CardReportVal
    },
    setup(props, context){

        const data = reactive<NodeReportCardInfo>({dialogVisible:false})
        const route = useRoute()

        function closeNodeReport(){
            context.emit('deleteNodeReport', props.nodeReport)
        }

        function toNode() {
            filter.toNodeWithID(Number(props.node.Base?.ID), route)
        }

        return {data, request, convert, protoManage, routerPath, closeNodeReport, toNode}
    }
})
</script>

<style scoped>
@import "../../css/card.css";
@import "../../css/color.css";
</style>