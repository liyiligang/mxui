<template>
    <CardViewFrame :state="nodeFunc.State" :hasHeader="true" @closeClick="closeNodeFunc">
        <template v-slot:header>
            <CardName :color="convert.getColorByLevel(nodeFunc.State)" :name="nodeFunc.Name" :id="nodeFunc.Base.ID"></CardName>
            <CardInfo  describe="权限" :name="convert.getNodeFuncStateName(nodeFunc.State)"
                       :name-color="convert.getColorByLevel(nodeFunc.State)"></CardInfo>
            <CardInfo  describe="回调" :name="nodeFunc.Func"></CardInfo>
            <CardInfo  describe="节点" :name="node.Name" :nameColor="convert.getColorByState(node.State)" :link=routerPath.toNode(protoManage.Filter.create({ID:node.Base.ID}))></CardInfo>
            <CardBase :id="nodeFunc.Base.ID" :time="nodeFunc.Base.UpdateTime"></CardBase>
        </template>
        <template v-slot:body>
            <CardFuncCall @textClick=textClick name="调用" :state="convert.getNodeFuncCallStateName(nodeFuncCall.State)"
                :stateColor="convert.getColorByState(nodeFuncCall.State)" :time="nodeFuncCall.Base?.UpdateTime"></CardFuncCall>

            <el-dialog
                v-model="data.dialogVisible"
                width="860px"
                top="10vh"
                destroy-on-close>
                <template v-slot:title>
                    <span class="card-dialog-title" :class=convert.getColorByLevel(nodeFunc.State)>{{nodeFunc.Name}}</span>
                </template>
                <NodeFuncCall :nodeFunc="nodeFunc"></NodeFuncCall>
            </el-dialog>
        </template>
    </CardViewFrame>
</template>

<script lang="ts">
import {defineComponent, reactive, PropType} from "vue"
import CardName from "../cardItem/CardName.vue"
import CardBase from "../cardItem/CardBase.vue"
import CardViewFrame from "./CardViewFrame.vue"
import {protoManage} from "../../proto/manage"
import {request} from "../../base/request"
import {convert} from "../../base/convert"
import {routerPath} from "../../router"
import CardInfo from "../cardItem/CardInfo.vue"
import CardFuncCall from "../cardItem/CardFuncCall.vue"
import NodeFuncCall from "../../views/table/NodeFuncCall.vue"
import {defaultVal} from "../../base/defaultVal";

interface NodeFuncCardInfo {
    dialogVisible:boolean
}

export default defineComponent ({
    name: "NodeFuncCard",
    emits: ['deleteNodeFunc'],
    props:{
        nodeFunc:{
            type: protoManage.NodeFunc,
            default: defaultVal.getDefaultProtoNodeFunc()
        },
        node:{
            type: protoManage.Node,
            default: defaultVal.getDefaultProtoNode()
        },
        nodeFuncCall:{
            type: protoManage.NodeFuncCall,
            default: defaultVal.getDefaultProtoNodeFuncCall()
        },
    },
    components: {
        CardName,
        CardBase,
        CardViewFrame,
        CardInfo,
        CardFuncCall,
        NodeFuncCall
    },
    setup(props, context){
        const data = reactive<NodeFuncCardInfo>({dialogVisible:false})

        function textClick(){
            data.dialogVisible = true
        }

        function closeNodeFunc(){
            context.emit('deleteNodeFunc', props.nodeFunc)
        }

        return {data, textClick, request, protoManage, routerPath, convert, closeNodeFunc}
    }
})
</script>

<style scoped>
@import "../../css/card.css";
@import "../../css/color.css";
</style>