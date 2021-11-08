<template>
    <el-row class="flex-row-center-start">
        <FilterInput name="通知消息" sign="senderMessage" @submit="submit"></FilterInput>
        <FilterInput name="通知者" sign="senderName" @submit="submit"></FilterInput>
        <FilterSelect name="通知类型" sign="senderType" :options="data.senderTypeOptions" @submit="submit"></FilterSelect>
        <FilterSelect name="状态" sign="senderState" :options="data.senderStateOptions" @submit="submit"></FilterSelect>
        <FilterDateTimeRangePicker name="通知时间" sign="senderTime" @submit="submit"></FilterDateTimeRangePicker>
    </el-row>
</template>

<script lang="ts">

import {defineComponent, reactive} from "vue";
import FilterInput from "./components/FilterInput.vue"
import FilterSelect from "./components/FilterSelect.vue"
import FilterDateTimeRangePicker from "./components/FilterDateTimeRangePicker.vue"
import { protoManage } from "../../../proto/manage";
import {convert} from "../../../base/convert";

interface NodeNotifyFilterInfo {
    senderTypeOptions: Array<any>
    senderStateOptions: Array<any>
}

export default defineComponent ({
    name: "NodeNotifyFilter",
    emits:['addTag'],
    components: {
        FilterInput,
        FilterSelect,
        FilterDateTimeRangePicker
    },
    setup(props, context){
        const data = reactive<NodeNotifyFilterInfo>({
            senderTypeOptions:[
                {name:"节点", value:protoManage.NotifySenderType.NotifySenderTypeNode},
                {name:"用户", value:protoManage.NotifySenderType.NotifySenderTypeUser}
            ],
            senderStateOptions:[
                {name:"普通", value:protoManage.State.StateNot},
                {name:"未知", type: convert.getStateViewType(protoManage.State.StateUnknow), value:protoManage.State.StateUnknow},
                {name:"成功", type: convert.getStateViewType(protoManage.State.StateNormal), value:protoManage.State.StateNormal},
                {name:"警告", type: convert.getStateViewType(protoManage.State.StateWarn), value:protoManage.State.StateWarn},
                {name:"错误", type: convert.getStateViewType(protoManage.State.StateError), value:protoManage.State.StateError}
            ]
        })

        function submit (itemName, tagName, tagSign, repeatTips){
            context.emit('addTag', itemName, tagName, tagSign, repeatTips)
        }

        return {data, protoManage, submit}
    }
})
</script>

<style scoped>
@import "../../../css/flex.css";

</style>