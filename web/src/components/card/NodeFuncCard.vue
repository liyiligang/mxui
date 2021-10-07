<template>
    <CardViewFrame :isGray="convert.isGrayByState(nodeFunc.State)" :hasHeader="true" @closeClick="closeNodeFunc">
        <template v-slot:header>
            <CardName :color="convert.getColorByLevel(nodeFunc.Level)" :name="nodeFunc.Name" :id="nodeFunc.Base.ID"></CardName>
            <CardInfo  describe="权限" :name="convert.getManagerLevelName(nodeFunc.Level)"
                       :name-color="convert.getColorByLevel(nodeFunc.Level)"></CardInfo>
            <CardInfo  describe="回调" :name="nodeFunc.Func"></CardInfo>
            <CardInfo  describe="节点" :name="node.Name" :nameColor="convert.getColorByState(node.State)" :link=routerPath.toNode(protoManage.Filter.create({ID:node.Base.ID}))></CardInfo>
            <CardBase :id="nodeFunc.Base.ID" :time="nodeFunc.Base.UpdateTime"></CardBase>
        </template>
        <template v-slot:body>
            <CardFuncCall :nodeFunc="nodeFunc"></CardFuncCall>
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
import NodeFuncHistory from "../../views/dialog/NodeFuncHistory.vue"
import NodeFuncCall from "../../views/dialog/NodeFuncCall.vue"
import {defaultVal} from "../../base/defaultVal";

interface NodeFuncCardInfo {

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
        NodeFuncCall,
        NodeFuncHistory
    },
    setup(props, context){
        const data = reactive<NodeFuncCardInfo>({})

        function closeNodeFunc(){
            context.emit('deleteNodeFunc', props.nodeFunc)
        }

        return {data, request, protoManage, routerPath, convert, closeNodeFunc}
    }
})
</script>

<style scoped>
@import "../../css/card.css";
@import "../../css/color.css";
</style>