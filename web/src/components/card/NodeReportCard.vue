<template>
    <el-card class="card">
        <template #header>
            <CardName :color="convert.getColorByState(nodeReport.State)" :name="nodeReport.Name" :id="nodeReport.Base.ID"></CardName>
            <CardInfo  describe="权限" :name="convert.getNodeReportStateName(nodeReport.State)"
                       :name-color="convert.getColorByState(nodeReport.State)"></CardInfo>
            <CardInfo  describe="回调" :name="nodeReport.Func"></CardInfo>
            <CardInfo  describe="节点" :name="node.Name" :nameColor="convert.getColorByState(node.State)" :link=routerPath.toNode(protoManage.Filter.create({ID:node.Base.ID}))></CardInfo>
            <CardBase :id="nodeReport.Base.ID" :time="nodeReport.Base.UpdateTime"></CardBase>
        </template>
        <CardReportVal @textClick=textClick name="报告值" :value="nodeReportVal.Value" :stateColor="convert.getColorByState(nodeReportVal.State)"
                       :time="nodeReportVal.Base?.UpdateTime"></CardReportVal>

        <el-dialog
            v-model="data.dialogVisible"
            width="860px"
            top="10vh"
            destroy-on-close>
            <template v-slot:title>
                <span class="card-dialog-title" :class=convert.getColorByState(nodeReport.State)>{{nodeReport.Name}}</span>
            </template>
            <NodeReportVal :nodeReport="nodeReport"></NodeReportVal>
        </el-dialog>
    </el-card>
</template>

<script lang="ts">
import {defineComponent, reactive, onMounted, PropType} from "vue";
import CardName from "../cardItem/CardName.vue"
import CardInfo from "../cardItem/CardInfo.vue"
import CardBase from "../cardItem/CardBase.vue"
import CardReportVal from "../cardItem/CardReportVal.vue"
import NodeReportVal from "../../views/table/NodeReportVal.vue"
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
        CardInfo,
        CardReportVal,
        NodeReportVal
    },
    setup(props){

        console.log(props.nodeReport)

        const data = reactive<NodeReportCardInfo>({dialogVisible:false})
        function textClick(){
            data.dialogVisible = true
        }
        return {data, textClick, request, convert, protoManage, routerPath}
    }
})
</script>

<style scoped>
@import "../../css/card.css";
@import "../../css/color.css";
</style>