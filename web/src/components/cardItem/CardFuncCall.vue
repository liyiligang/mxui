<template>
    <el-row class="cardFuncCall" type="flex" justify="space-around" align="middle">
        <el-button class="cardFuncCallButton" type="text" @click="callClick">{{"调用"}}</el-button>
        <el-button class="cardFuncCallButton" type="text" @click="historyClick">{{"历史"}}</el-button>
    </el-row>

    <DialogViewFrame v-model="data.callVisible" :title="nodeFunc.Name"
                     :level="nodeFunc.Level" width="500px">
        <NodeFuncCall :nodeFunc="nodeFunc"></NodeFuncCall>
    </DialogViewFrame>

    <DialogViewFrame v-model="data.historyVisible" :title="nodeFunc.Name"
                     :level="nodeFunc.Level" width="620px" :close-full-screen="true">
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