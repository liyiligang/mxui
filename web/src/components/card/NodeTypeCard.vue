<template>
    <CardViewFrame :hasHeader="true">
        <template v-slot:header>
            <CardName :name="nodeType.Name" :id="nodeType.Base.ID"></CardName>
            <CardBase :id="nodeType.Base.ID" :time="nodeType.Base.UpdateTime"></CardBase>
        </template>
        <template v-slot:body>
            <cardState name="节点" :link=routerPath.toNode(protoManage.Filter.create({TypeID:nodeType.Base.ID}))
                       :successCnt="data.nodeStateCount.NormalCount"
                       :warningCnt="data.nodeStateCount.WarnCount"
                       :dangerCnt="data.nodeStateCount.ErrorCount"
                       :loseCnt="data.nodeStateCount.UnknowCount">
            </cardState>
        </template>
    </CardViewFrame>
</template>

<script lang="ts">
import {defineComponent, reactive, onMounted, PropType} from "vue";
import CardName from "../cardItem/CardName.vue"
import CardBase from "../cardItem/CardBase.vue"
import CardState from "../cardItem/CardState.vue"
import CardViewFrame from "./CardViewFrame.vue"
import {routerPath} from "../../router";
import {request} from "../../base/request";
import {protoManage} from "../../proto/manage"
import {defaultVal} from "../../base/defaultVal";

interface NodeTypeCardInfo {
    nodeStateCount:protoManage.IStateCount
}

export default defineComponent ({
    name: "NodeTypeCard",
    props:{
        nodeType:{
            type: protoManage.NodeType,
            default: defaultVal.getDefaultProtoNodeType()
        },
        nodeStateCount:Object as PropType<protoManage.IStateCount>,
    },
    components: {
        CardName,
        CardBase,
        CardViewFrame,
        CardState
    },
    setup(prop){
        const data = reactive<NodeTypeCardInfo>({nodeStateCount:protoManage.StateCount.create()})
        onMounted(()=>{
            if (prop.nodeStateCount != undefined){
                data.nodeStateCount = prop.nodeStateCount
            }
        })
        return {data, routerPath, request, protoManage}
    }
})
</script>

<style scoped>
@import "../../css/card.css";
</style>