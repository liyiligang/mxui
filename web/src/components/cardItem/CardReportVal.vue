<template>
    <el-row class="cardReportVal" type="flex" justify="space-between" align="middle">
        <el-button class="cardReportValButton" type="text" @click="click">{{nodeReport.Name}}</el-button>
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
