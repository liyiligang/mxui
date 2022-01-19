<!--
Copyright 2021 liyiligang

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
-->

<template>
    <CardViewFrame :isGray="convert.isGrayByState(nodeFunc.State)" :hasHeader="true" @closeClick="closeNodeFunc">
        <template v-slot:header>
            <CardName :color="convert.getColorByLevel(nodeFunc.Level)" :name="nodeFunc.Name" :id="nodeFunc.Base.ID"></CardName>
            <CardInfo  :describe="$t('nodeFunc.card.level')" :name="convert.getManagerLevelName(nodeFunc.Level)"
                       :name-color="convert.getColorByLevel(nodeFunc.Level)"></CardInfo>
            <CardInfo  :describe="$t('nodeFunc.card.call')" :name="nodeFunc.Func"></CardInfo>
            <CardInfo  :describe="$t('nodeFunc.card.node')" :name="node.Name" :nameColor="convert.getColorByState(node.State)"
                       :call="toNode">
            </CardInfo>
            <CardBase :id="nodeFunc.Base.ID" :time="nodeFunc.Base.UpdateTime"></CardBase>
        </template>
        <template v-slot:body>
            <CardFuncCall :nodeFunc="nodeFunc"></CardFuncCall>
        </template>
    </CardViewFrame>
</template>

<script lang="ts">
import {defineComponent, reactive} from "vue"
import CardName from "../cardItem/CardName.vue"
import CardBase from "../cardItem/CardBase.vue"
import CardViewFrame from "./CardViewFrame.vue"
import {protoManage} from "../../proto/manage"
import {request} from "../../base/request"
import {convert} from "../../base/convert"
import {routerName, routerPath} from "../../router"
import CardInfo from "../cardItem/CardInfo.vue"
import CardFuncCall from "../cardItem/CardFuncCall.vue"
import NodeFuncHistory from "../../views/dialog/NodeFuncHistory.vue"
import {defaultVal} from "../../base/defaultVal";
import {useRoute} from "vue-router";
import {filter} from "../../base/filter";

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
        }
    },
    components: {
        CardName,
        CardBase,
        CardViewFrame,
        CardInfo,
        CardFuncCall,
        NodeFuncHistory
    },
    setup(props, context){
        const data = reactive<NodeFuncCardInfo>({})
        const route = useRoute()

        function closeNodeFunc(){
            context.emit('deleteNodeFunc', props.nodeFunc)
        }

        function toNode() {
            filter.toNodeWithID(Number(props.node.Base?.ID), route)
        }

        return {data, request, protoManage, routerPath, convert, closeNodeFunc, toNode}
    }
})
</script>

<style scoped>
@import "../../css/card.css";
@import "../../css/color.css";
</style>