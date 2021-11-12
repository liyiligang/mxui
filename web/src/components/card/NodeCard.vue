<template>
    <CardViewFrame :isGray="convert.isGrayByState(node.State)" :hasHeader="true" @closeClick="closeNode">
        <template v-slot:header>
            <CardName :color="convert.getColorByState(node.State)" :name="node.Name" :id="node.Base.ID"></CardName>
            <CardInfo  describe="状态" :name="convert.getNodeStateName(node.State)"
                       :name-color="convert.getColorByState(node.State)"></CardInfo>
            <CardBase :id="node.Base.ID" :time="node.Base.UpdateTime"></CardBase>
        </template>
        <template v-slot:body>
            <el-row type="flex" justify="space-around" align="middle">
                <el-button class="cardNodeButton" type="text" @click="toNodeFunc">{{"方法"}}</el-button>
                <el-button class="cardNodeButton" type="text" @click="toNodeReport">{{"报告"}}</el-button>
            </el-row>
        </template>
    </CardViewFrame>
</template>

<script lang="ts">
import {defineComponent, reactive, onMounted} from "vue"
import CardName from "../cardItem/CardName.vue"
import CardBase from "../cardItem/CardBase.vue"
import CardViewFrame from "./CardViewFrame.vue"
import CardInfo from "../cardItem/CardInfo.vue"
import {protoManage} from "../../proto/manage"
import {request} from "../../base/request"
import {convert} from "../../base/convert"
import {routerPath} from "../../router"
import {defaultVal} from "../../base/defaultVal";
import { filter } from "../../base/filter"
import {useRoute} from "vue-router";

interface NodeCardInfo {

}

export default defineComponent ({
    name: "NodeCard",
    emits: ['deleteNode'],
    props:{
        node:{
            type: protoManage.Node,
            default: defaultVal.getDefaultProtoNode()
        }
    },
    components: {
        CardName,
        CardBase,
        CardViewFrame,
        CardInfo,
    },
    setup(props, context){

        const route = useRoute()
        const data = reactive<NodeCardInfo>({})

        onMounted(()=>{

        })

        function closeNode(){
            context.emit('deleteNode', props.node)
        }

        function toNodeFunc(){
            filter.toNodeFuncWithNodeID(Number(props.node.Base?.ID), route)
        }

        function toNodeReport(){
            filter.toNodeReportWithNodeID(Number(props.node.Base?.ID), route)
        }

        return {data, request, convert, protoManage, routerPath, toNodeFunc, toNodeReport, closeNode}
    }
})
</script>

<style scoped>
@import "../../css/card.css";

.cardNodeButton{
    padding: 0px;
    line-height: normal;
    font-size: 15px;
}
</style>