<template>
    <el-card class="card">
        <template #header>
            <CardName :color="convert.getColorByState(nodeReport.State)" :name="nodeReport.Name"></CardName>
            <CardInfo  describe="级别" :name="convert.getNodeReportStateName(nodeReport.State)"
                       :name-color="convert.getColorByState(nodeReport.State)"></CardInfo>
            <CardInfo  describe="标签" :name="nodeReport.Flag"></CardInfo>
            <CardInfo  describe="节点" :name="node.Name" :nameColor="convert.getColorByState(node.State)" :link=routerPath.toNode(protoManage.Filter.create({ID:node.Base.ID}))></CardInfo>
            <CardBase :id="nodeReport.Base.ID" :time="nodeReport.Base.UpdateTime"></CardBase>
        </template>
        <CardReportVal @textClick=textClick name="报告值" :value="nodeReportVal.Value" :stateColor="convert.getColorByState(nodeReportVal.State)"
                       :time="nodeReportVal.Base?.UpdateTime"></CardReportVal>

        <el-dialog
            :title="nodeReport.Name"
            v-model="data.dialogVisible"
            width="1000px"
            destroy-on-close>
            <NodeReportVal :nodeReport="nodeReport"></NodeReportVal>
        </el-dialog>
    </el-card>
</template>

<script lang="ts">
import {defineComponent, reactive, onMounted, PropType} from "vue";
import CardName from "../components/Card/CardName.vue"
import CardInfo from "../components/Card/CardInfo.vue"
import CardBase from "../components/Card/CardBase.vue"
import CardReportVal from "../components/Card/CardReportVal.vue"
import NodeReportVal from "../views/NodeReportVal.vue"
import {routerPath} from "../router";
import {protoManage} from "../proto/manage"
import {request} from "../base/request";
import {convert} from "../base/convert";

interface NodeReportCardInfo {
    dialogVisible:boolean
}

export default defineComponent ({
    name: "NodeReportCard",
    props:{
        nodeReport:Object as PropType<protoManage.NodeReport>,
        node:Object as PropType<protoManage.Node>,
        nodeReportVal:{
            type: protoManage.NodeReportVal,
            default: protoManage.NodeReportVal.create()
        },
    },
    components: {
        CardName,
        CardBase,
        CardInfo,
        CardReportVal,
        NodeReportVal
    },
    setup(){
        const data = reactive<NodeReportCardInfo>({dialogVisible:false})
        function textClick(){
            data.dialogVisible = true
        }
        return {data, textClick, request, convert, protoManage, routerPath}
    }
})
</script>

<style scoped>
@import "../css/card.css";
</style>