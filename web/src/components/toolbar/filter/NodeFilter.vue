<template>
    <el-row class="flex-row-center-start">
        <FilterInput name="分组名" sign="groupName" @submit="submit"></FilterInput>
        <FilterInput name="节点名" sign="name" @submit="submit"></FilterInput>
        <FilterSelect name="状态" sign="state" :options="data.nodeStateOptions" @submit="submit"></FilterSelect>
        <FilterDateTimeRangePicker name="更新时间" sign="time" @submit="submit"></FilterDateTimeRangePicker>
    </el-row>
</template>

<script lang="ts">

import {defineComponent, reactive} from "vue";
import FilterInput from "./components/FilterInput.vue";
import FilterSelect from "./components/FilterSelect.vue";
import FilterDateTimeRangePicker from "./components/FilterDateTimeRangePicker.vue"
import {protoManage} from "../../../proto/manage";
import {convert} from "../../../base/convert";

interface NodeFilterInfo {
    nodeStateOptions: Array<any>
}

export default defineComponent ({
    name: "NodeFilter",
    emits:['addTag'],
    components: {
        FilterInput,
        FilterSelect,
        FilterDateTimeRangePicker
    },
    setup(props, context){
        const data = reactive<NodeFilterInfo>({nodeStateOptions:[
                {name:"未知", value:protoManage.State.StateNot},
                {name:"离线", type: convert.getStateViewType(protoManage.State.StateUnknow), value:protoManage.State.StateUnknow},
                {name:"在线", type: convert.getStateViewType(protoManage.State.StateNormal), value:protoManage.State.StateNormal},
                {name:"异常", type: convert.getStateViewType(protoManage.State.StateWarn), value:protoManage.State.StateWarn},
                {name:"停止", type: convert.getStateViewType(protoManage.State.StateError), value:protoManage.State.StateError}
            ]})

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