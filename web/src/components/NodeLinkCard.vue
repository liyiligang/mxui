<template>
    <el-card class="card">
        <CardName :color="convert.getColorByState(nodeLink.State)"
                  :name="convert.getNodeLinkStateName(nodeLink.State)"></CardName>
        <CardInfo  describe="服务端" :name="targetNode.Name" :nameColor="convert.getColorByState(targetNode.State)" :link=routerPath.toNode(protoManage.Filter.create({ID:targetNode.Base.ID}))></CardInfo>
        <CardInfo  describe="客户端" :name="sourceNode.Name" :nameColor="convert.getColorByState(sourceNode.State)" :link=routerPath.toNode(protoManage.Filter.create({ID:sourceNode.Base.ID}))></CardInfo>
        <CardBase :id="nodeLink.Base.ID" :time="nodeLink.Base.UpdateTime"></CardBase>
    </el-card>
</template>

<script lang="ts">
import {defineComponent, reactive, onMounted, PropType} from "vue";
import CardName from "../components/Card/CardName.vue"
import CardInfo from "../components/Card/CardInfo.vue"
import CardBase from "../components/Card/CardBase.vue"
import {routerPath} from "../router";
import {protoManage} from "../proto/manage"
import {request} from "../base/request";
import {convert} from "../base/convert";

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
        CardBase
    },
    setup(){
        return {request, convert, protoManage, routerPath}
    }
})
</script>

<style scoped>
@import "../css/card.css";
</style>