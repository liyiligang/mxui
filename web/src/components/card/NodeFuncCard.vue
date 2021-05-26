<template>
    <el-card class="card">
        <template #header>
            <CardName :color="convert.getColorByState(nodeFunc.State)" :name="nodeFunc.Name" :id="nodeFunc.Base.ID"></CardName>
            <CardInfo  describe="级别" :name="convert.getNodeFuncStateName(nodeFunc.State)"
                       :name-color="convert.getColorByState(nodeFunc.State)"></CardInfo>
            <CardInfo  describe="方法" :name="nodeFunc.Func"></CardInfo>
            <CardInfo  describe="节点" :name="node.Name" :nameColor="convert.getColorByState(node.State)" :link=routerPath.toNode(protoManage.Filter.create({ID:node.Base.ID}))></CardInfo>
            <CardBase :id="nodeFunc.Base.ID" :time="nodeFunc.Base.UpdateTime"></CardBase>
        </template>
        <CardFuncCall @textClick=textClick name="调用" :state="convert.getNodeFuncCallStateName(nodeFuncCall.State)"
            :stateColor="convert.getColorByState(nodeFuncCall.State)" :time="nodeFuncCall.Base?.UpdateTime"></CardFuncCall>

        <el-dialog
            v-model="data.dialogVisible"
            width="860px"
            top="10vh"
            destroy-on-close>
            <template v-slot:title>
                <span class="card-dialog-title" :class=convert.getColorByState(nodeFunc.State)>{{nodeFunc.Name}}</span>
            </template>
            <NodeFuncCall :nodeFunc="nodeFunc"></NodeFuncCall>
        </el-dialog>
    </el-card>
</template>

<script lang="ts">
import {defineComponent, reactive, PropType} from "vue"
import CardName from "../cardItem/CardName.vue"
import CardBase from "../cardItem/CardBase.vue"
import {protoManage} from "../../proto/manage"
import {request} from "../../base/request"
import {convert} from "../../base/convert"
import {routerPath} from "../../router"
import CardInfo from "../cardItem/CardInfo.vue"
import CardFuncCall from "../cardItem/CardFuncCall.vue"
import NodeFuncCall from "../../views/table/NodeFuncCall.vue"

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
@import "../../css/card.css";
@import "../../css/color.css";
</style>