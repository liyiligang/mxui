<template>
    <el-card class="card">
        <template #header>
            <CardName :color="convert.getColorByState(node.State)" :name="node.Name" :id="node.Base.ID"></CardName>
            <CardInfo  describe="状态" :name="convert.getNodeStateName(node.State)"
                       :name-color="convert.getColorByState(node.State)"></CardInfo>
            <CardInfo  describe="集群" :name="nodeGroup.Name" :nameColor="convert.getColorByState(protoManage.State.StateNot)" :link=routerPath.toNodeGroup(protoManage.Filter.create({ID:node.GroupID}))></CardInfo>
            <CardInfo  describe="服务" :name="nodeType.Name"  :nameColor="convert.getColorByState(protoManage.State.StateNot)" :link=routerPath.toNodeType(protoManage.Filter.create({ID:node.TypeID}))></CardInfo>
            <CardBase :id="node.Base.ID" :time="node.Base.UpdateTime"></CardBase>
        </template>
        <cardState name="连接" :link=routerPath.toNodeLink(node.Base.ID)
                   :successCnt="data.nodeLinkSourceStateCount.NormalCount + data.nodeLinkTargetStateCount.NormalCount"
                   :warningCnt="data.nodeLinkSourceStateCount.WarnCount + data.nodeLinkTargetStateCount.WarnCount"
                   :dangerCnt="data.nodeLinkSourceStateCount.ErrorCount + data.nodeLinkTargetStateCount.ErrorCount"
                   :loseCnt="data.nodeLinkSourceStateCount.UnknowCount + data.nodeLinkTargetStateCount.UnknowCount">
        </cardState>
        <cardState name="方法" :link=routerPath.toNodeFunc(node.Base.ID)
                   :successCnt="data.nodeFuncStateCount.NormalCount"
                   :warningCnt="data.nodeFuncStateCount.WarnCount"
                   :dangerCnt="data.nodeFuncStateCount.ErrorCount"
                   :loseCnt="data.nodeFuncStateCount.UnknowCount">
        </cardState>
        <cardState name="报告" :link=routerPath.toNodeReport(node.Base.ID)
                   :successCnt="data.nodeReportStateCount.NormalCount"
                   :warningCnt="data.nodeReportStateCount.WarnCount"
                   :dangerCnt="data.nodeReportStateCount.ErrorCount"
                   :loseCnt="data.nodeReportStateCount.UnknowCount">
        </cardState>
    </el-card>
</template>

<script lang="ts">
import {defineComponent, reactive, onMounted, PropType} from "vue"
import CardName from "../cardItem/CardName.vue"
import CardBase from "../cardItem/CardBase.vue"
import CardInfo from "../cardItem/CardInfo.vue"
import CardState from "../cardItem/CardState.vue"
import {protoManage} from "../../proto/manage"
import {request} from "../../base/request"
import {convert} from "../../base/convert"
import {routerPath} from "../../router"

interface NodeCardInfo {
    nodeLinkSourceStateCount:protoManage.IStateCount
    nodeLinkTargetStateCount:protoManage.IStateCount
    nodeFuncStateCount:protoManage.IStateCount
    nodeReportStateCount:protoManage.IStateCount
}

export default defineComponent ({
    name: "NodeCard",
    props:{
        node:Object as PropType<protoManage.Node>,
        nodeGroup:Object as PropType<protoManage.Node>,
        nodeType:Object as PropType<protoManage.Node>,
        nodeLinkSourceStateCount:Object as PropType<protoManage.IStateCount>,
        nodeLinkTargetStateCount:Object as PropType<protoManage.IStateCount>,
        nodeFuncStateCount:Object as PropType<protoManage.IStateCount>,
        nodeReportStateCount:Object as PropType<protoManage.IStateCount>,
    },
    components: {
        CardName,
        CardBase,
        CardInfo,
        CardState
    },
    setup(prop){
        const data = reactive<NodeCardInfo>({
            nodeLinkSourceStateCount:protoManage.StateCount.create(),
            nodeLinkTargetStateCount:protoManage.StateCount.create(),
            nodeFuncStateCount:protoManage.StateCount.create(),
            nodeReportStateCount:protoManage.StateCount.create(),
        })
        onMounted(()=>{
            if (prop.nodeLinkSourceStateCount != undefined){
                data.nodeLinkSourceStateCount = prop.nodeLinkSourceStateCount
            }
            if (prop.nodeLinkTargetStateCount != undefined){
                data.nodeLinkTargetStateCount = prop.nodeLinkTargetStateCount
            }
            if (prop.nodeFuncStateCount != undefined){
                data.nodeFuncStateCount = prop.nodeFuncStateCount
            }
            if (prop.nodeReportStateCount != undefined){
                data.nodeReportStateCount = prop.nodeReportStateCount
            }
        })
        return {data, request, convert, protoManage, routerPath}
    }
})
</script>

<style scoped>
@import "../../css/card.css";
</style>