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
    <FilterInput v-show="false" :name="$t('filter.nodeFunc.nodeID')" sign="nodeID" @submit="submit"></FilterInput>
    <FilterInput :name="$t('filter.nodeFunc.nodeName')" sign="nodeName" @submit="submit"></FilterInput>
    <FilterInput :name="$t('filter.nodeFunc.name')" sign="name" @submit="submit"></FilterInput>
    <FilterSelect :name="$t('filter.nodeFunc.level')" sign="level" :options="data.nodeFuncLevelOptions" @submit="submit"></FilterSelect>
    <FilterDateTimeRangePicker :name="$t('filter.nodeFunc.time')" sign="updateTime" @submit="submit"></FilterDateTimeRangePicker>
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
                        level <= globals.globalsData.manager.info.Level) {
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