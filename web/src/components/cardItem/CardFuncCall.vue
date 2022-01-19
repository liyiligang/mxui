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
    <el-row class="cardFuncCall" type="flex" justify="space-around" align="middle">
        <el-button class="cardFuncCallButton" type="text" @click="callClick">{{$t('nodeFuncCall.card.call')}}</el-button>
        <el-button class="cardFuncCallButton" type="text" @click="historyClick">{{$t('nodeFuncCall.card.history')}}</el-button>
    </el-row>

    <DialogViewFrame v-model="data.callVisible" :title="nodeFunc.Name"
                     :level="nodeFunc.Level" width="500px" show-full-screen fixHeight>
        <NodeFuncCall :nodeFunc="nodeFunc"></NodeFuncCall>
    </DialogViewFrame>

    <DialogViewFrame v-model="data.historyVisible" :title="nodeFunc.Name"
                     :level="nodeFunc.Level" width="700px" fixHeight>
        <NodeFuncHistory :nodeFunc="nodeFunc"></NodeFuncHistory>
    </DialogViewFrame>
</template>

<script lang="ts">
import {defineComponent, reactive} from "vue";
import NodeFuncCall from "../../views/dialog/NodeFuncCall.vue"
import NodeFuncHistory from "../../views/dialog/NodeFuncHistory.vue"
import DialogViewFrame from "../../views/dialog/DialogViewFrame.vue";
import {convert} from "../../base/convert";
import {protoManage} from "../../proto/manage";
import {defaultVal} from "../../base/defaultVal";

interface CardFuncCallInfo {
    callVisible:boolean
    historyVisible:boolean
}

export default defineComponent ({
    name: "CardFuncCall",
    components:{
        NodeFuncCall,
        NodeFuncHistory,
        DialogViewFrame
    },
    props:{
        nodeFunc:{
            type: protoManage.NodeFunc,
            default: defaultVal.getDefaultProtoNodeFunc()
        },
    },
    setup(prop, context){

        const data = reactive<CardFuncCallInfo>({callVisible:false, historyVisible:false})

        function callClick(){
            data.callVisible = true
        }

        function historyClick(){
            data.historyVisible = true
        }

        return {data, convert, callClick, historyClick}
    }
})
</script>

<style scoped>
@import "../../css/color.css";

.cardFuncCall{
    width: 100%;
}

.cardFuncCallButton{
    padding: 0px;
    line-height: normal;
    font-size: 15px;
}

</style>