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
    <el-row class="cardReportVal" type="flex" justify="space-between" align="middle">
        <el-button class="cardReportValButton" type="text" @click="click">{{$t('nodeReport.card.viewReport')}}</el-button>
    </el-row>

    <DialogViewFrame v-model="data.dialogVisible" :title="nodeReport.Name" :level="nodeReport.Level" width="860px"
                     show-refresh show-full-screen show-setting show-auto-refresh fixHeight @refresh="nodeReportRefresh"
                     @autoRefresh="nodeReportAutoRefresh" @setting="nodeReportSetting">
        <NodeReportVal ref="nodeReportValRef" :nodeReport="nodeReport"></NodeReportVal>
    </DialogViewFrame>
</template>

<script lang="ts">
import {defineComponent, reactive, ref} from "vue";
import NodeReportVal from "../../views/dialog/NodeReportVal.vue";
import DialogViewFrame from "../../views/dialog/DialogViewFrame.vue";
import {protoManage} from "../../proto/manage";
import {defaultVal} from "../../base/defaultVal";

interface CardReportValInfo {
    dialogVisible:boolean
}

export default defineComponent ({
    name: "CardReportVal",
    components: {
        NodeReportVal,
        DialogViewFrame
    },
    props:{
        nodeReport:{
            type: protoManage.NodeReport,
            default: defaultVal.getDefaultProtoNodeReport()
        }
    },
    setup(props, context){

        const data = reactive<CardReportValInfo>({dialogVisible:false})

        function click(){
            data.dialogVisible = true
        }

        const nodeReportValRef = ref<typeof NodeReportVal>(NodeReportVal);
        function nodeReportRefresh(){
            nodeReportValRef.value.reqNodeReportValList()
        }

        function nodeReportAutoRefresh(state:boolean){
            nodeReportValRef.value.autoRefreshStateChanged(state)
        }

        function nodeReportSetting(){
            nodeReportValRef.value.showSettingView()
        }

        return {data, nodeReportRefresh, nodeReportAutoRefresh, nodeReportSetting, click, nodeReportValRef}
    }
})
</script>

<style scoped>
@import "../../css/color.css";

.cardReportVal{
    width: 100%;
    font-size: 14px;
}

.cardReportValButton{
    padding: 0px;
    line-height: normal;
}

.cardReportValTime{
    font-size: 13px;
}
</style>
