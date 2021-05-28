<template>
    <CardViewFrame v-slot:body :state="nodeLink.State" @closeClick="closeClick">
        <CardName :color="convert.getColorByState(nodeLink.State)" :id="nodeLink.Base.ID"
                  :name="convert.getNodeLinkStateName(nodeLink.State)"></CardName>
        <CardInfo  describe="服务端" :name="targetNode.Name" :nameColor="convert.getColorByState(targetNode.State)" :link=routerPath.toNode(protoManage.Filter.create({ID:targetNode.Base.ID}))></CardInfo>
        <CardInfo  describe="客户端" :name="sourceNode.Name" :nameColor="convert.getColorByState(sourceNode.State)" :link=routerPath.toNode(protoManage.Filter.create({ID:sourceNode.Base.ID}))></CardInfo>
        <CardBase :id="nodeLink.Base.ID" :time="nodeLink.Base.UpdateTime"></CardBase>
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

export default defineComponent ({
    name: "NodeLinkCard",
    props:{
        nodeLink:Object as PropType<protoManage.NodeLink>,
        sourceNode:Object as PropType<protoManage.Node>,
        targetNode:Object as PropType<protoManage.Node>,
    },
    components: {
        CardName,
        CardInfo,
        CardBase,
        CardViewFrame
    },
    setup(props){

        function closeClick(){
            console.log(props.nodeLink?.Base?.ID)
        }
        return {request, convert, protoManage, routerPath, closeClick}
    }
})
</script>

<style scoped>
@import "../../css/card.css";
</style>