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
    <el-row class="flex-row-center-start">
        <FilterInput v-show="false" name="ID" sign="id" @submit="submit"></FilterInput>
        <FilterInput :name="$t('filter.node.name')" sign="name" @submit="submit"></FilterInput>
        <FilterSelect :name="$t('filter.node.state')" sign="state" :options="data.nodeStateOptions" @submit="submit"></FilterSelect>
        <FilterDateTimeRangePicker :name="$t('filter.node.time')" sign="updateTime" @submit="submit"></FilterDateTimeRangePicker>
    </el-row>
</template>

<script lang="ts">

import {defineComponent, reactive} from "vue";
import FilterInput from "./components/FilterInput.vue";
import FilterSelect from "./components/FilterSelect.vue";
import FilterDateTimeRangePicker from "./components/FilterDateTimeRangePicker.vue"
import {protoManage} from "../../../proto/manage";
import {convert} from "../../../base/convert";
import i18n from '../../../base/i18n'

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
                {name:i18n.global.t('node.state.not'), value:protoManage.State.StateNot},
                {name:i18n.global.t('node.state.unknown'), type: convert.getStateViewType(protoManage.State.StateUnknow), value:protoManage.State.StateUnknow},
                {name:i18n.global.t('node.state.normal'), type: convert.getStateViewType(protoManage.State.StateNormal), value:protoManage.State.StateNormal},
                {name:i18n.global.t('node.state.warn'), type: convert.getStateViewType(protoManage.State.StateWarn), value:protoManage.State.StateWarn},
                {name:i18n.global.t('node.state.error'), type: convert.getStateViewType(protoManage.State.StateError), value:protoManage.State.StateError}
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