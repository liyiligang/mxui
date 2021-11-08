<template>
    <FilterInput name="节点名" sign="nodeName" @submit="submit"></FilterInput>
    <FilterInput name="节点方法名" sign="name" @submit="submit"></FilterInput>
    <FilterSelect name="权限" sign="level" :options="data.nodeFuncLevelOptions" @submit="submit"></FilterSelect>
    <FilterDateTimeRangePicker name="更新时间" sign="time" @submit="submit"></FilterDateTimeRangePicker>
</template>

<script lang="ts">

import {defineComponent, reactive, watch} from "vue";
import FilterInput from "./components/FilterInput.vue";
import FilterSelect from "./components/FilterSelect.vue";
import FilterDateTimeRangePicker from "./components/FilterDateTimeRangePicker.vue"
import {protoManage} from "../../../proto/manage";
import {globals} from "../../../base/globals";
import {convert} from "../../../base/convert";

interface NodeFuncFilterInfo {
    nodeFuncLevelOptions: Array<any>
}

export default defineComponent ({
    name: "NodeFuncFilter",
    emits:['addTag'],
    components: {
        FilterInput,
        FilterSelect,
        FilterDateTimeRangePicker
    },
    setup(props, context){
        const data = reactive<NodeFuncFilterInfo>({nodeFuncLevelOptions:[]})
        initLevelSelect()

        watch(() => globals.globalsData.manager.info, () => {
            initLevelSelect()
        })

        function initLevelSelect(){
            data.nodeFuncLevelOptions.length = 0
            let levelList = <Array<protoManage.Level>>Object.values(protoManage.Level)
            for(let level of levelList) {
                if (level > protoManage.Level.LevelNot){
                    if (globals.globalsData.manager.info.Level == protoManage.Level.LevelNot ||
                        level < globals.globalsData.manager.info.Level) {
                        data.nodeFuncLevelOptions.push({name:convert.getManagerLevelName(level),
                            type: convert.getLevelViewType(level), value:level})
                    }
                }
            }
        }

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