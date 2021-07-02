<template>
    <CardViewFrame :state="sourceNode.State" @closeClick="closeNodeLink">
        <template v-slot:body>
            <CardName :color="convert.getColorByState(nodeLink.State)" :id="nodeLink.Base.ID"
                      :name="convert.getNodeLinkStateName(nodeLink.State)"></CardName>
            <CardInfo  describe="服务端" :name="targetNode.Name" :nameColor="convert.getColorByState(targetNode.State)" :link=routerPath.toNode(protoManage.Filter.create({ID:targetNode.Base.ID}))></CardInfo>
            <CardInfo  describe="客户端" :name="sourceNode.Name" :nameColor="convert.getColorByState(sourceNode.State)" :link=routerPath.toNode(protoManage.Filter.create({ID:sourceNode.Base.ID}))></CardInfo>
            <CardBase :id="nodeLink.Base.ID" :time="nodeLink.Base.UpdateTime"></CardBase>
        </template>
    </CardViewFrame>
</template>

<script lang="ts">
import {defineComponent, reactive, onMounted, PropType} from "vue";
import CardName from "../cardItem/CardName.vue"
import CardInfo from "../cardItem/CardInfo.vue"
import CardBase from "../cardItem/CardBase.vue"
import CardViewFrame from "./CardViewFrame.vue"
import {routerPath} from "../../router";
import {protoManage} from "../../proto/manage"
import {request} from "../../base/request";
import {convert} from "../../base/convert";
import {defaultVal} from "../../base/defaultVal";

export default defineComponent ({
    name: "NodeLinkCard",
    props:{
        nodeLink:{
            type: protoManage.NodeLink,
            default: defaultVal.getDefaultProtoNodeLink()
        },
        sourceNode:{
            type: protoManage.Node,
            default: defaultVal.getDefaultProtoNode()
        },
        targetNode:{
            type: protoManage.Node,
            default: defaultVal.getDefaultProtoNode()
        }
    },
    components: {
        CardName,
        CardInfo,
        CardBase,
        CardViewFrame
    },
    setup(props){
        function closeNodeLink(){
            console.log(props.nodeLink?.Base?.ID)
        }
        return {request, convert, protoManage, routerPath, closeNodeLink}
    }
})
</script>

<style scoped>
@import "../../css/card.css";
</style>