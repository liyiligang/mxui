<template>
    <el-card class="card">
        <template #header>
            <CardName :color="convert.getColorByState(nodeFunc.State)" :name="nodeFunc.Name"></CardName>
            <CardInfo  describe="级别" :name="convert.getNodeFuncStateName(nodeFunc.State)"
                       :name-color="convert.getColorByState(nodeFunc.State)"></CardInfo>
            <CardInfo  describe="方法" :name="nodeFunc.Func"></CardInfo>
            <CardInfo  describe="节点" :name="node.Name" :nameColor="convert.getColorByState(node.State)" :link=routerPath.toNode(protoManage.Filter.create({ID:node.Base.ID}))></CardInfo>
            <CardBase :id="nodeFunc.Base.ID" :time="nodeFunc.Base.UpdateTime"></CardBase>
        </template>
        <CardFuncCall @textClick=textClick name="调用" :state="convert.getNodeFuncCallStateName(nodeFuncCall.State)"
            :stateColor="convert.getColorByState(nodeFuncCall.State)" :time="nodeFuncCall.Base?.UpdateTime"></CardFuncCall>

        <el-dialog
            :title="nodeFunc.Name"
            v-model="data.dialogVisible"
            width="800px"
            destroy-on-close>
        <NodeFuncCall :nodeFunc="nodeFunc"></NodeFuncCall>
        </el-dialog>
    </el-card>
</template>

<script lang="ts">
import {defineComponent, reactive, PropType} from "vue"
import CardName from "../components/Card/CardName.vue"
import CardBase from "../components/Card/CardBase.vue"
import {protoManage} from "../proto/manage"
import {request} from "../base/request"
import {convert} from "../base/convert"
import {routerPath} from "../router"
import CardInfo from "../components/Card/CardInfo.vue"
import CardFuncCall from "./Card/CardFuncCall.vue"
import NodeFuncCall from "../views/NodeFuncCall.vue"

interface NodeFuncCardInfo {
    dialogVisible:boolean
}

export default defineComponent ({
    name: "NodeFuncCard",
    props:{
        nodeFunc:Object as PropType<protoManage.NodeFunc>,
        node:Object as PropType<protoManage.Node>,
        nodeFuncCall:{
            type: protoManage.NodeFuncCall,
            default: protoManage.NodeFuncCall.create()
        },
    },
    components: {
        CardName,
        CardBase,
        CardInfo,
        CardFuncCall,
        NodeFuncCall
    },
    setup(){
        const data = reactive<NodeFuncCardInfo>({dialogVisible:false})

        function textClick(){
            data.dialogVisible = true
        }

        return {data, textClick, request, protoManage, routerPath, convert}
    }
})
</script>

<style scoped>
@import "../css/card.css";
</style>