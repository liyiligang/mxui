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
        <FilterInput :name="$t('filter.nodeResource.name')" sign="name" @submit="submit"></FilterInput>
        <FilterInput :name="$t('filter.nodeResource.uploader')" sign="uploaderName" @submit="submit"></FilterInput>
        <FilterSelect :name="$t('filter.nodeResource.uploaderType')" sign="uploaderType" :options="data.uploaderTypeOptions" @submit="submit"></FilterSelect>
        <FilterSelect :name="$t('filter.nodeResource.state')" sign="state" :options="data.stateOptions" @submit="submit"></FilterSelect>
        <FilterDateTimeRangePicker :name="$t('filter.nodeResource.time')" sign="uploadTime" @submit="submit"></FilterDateTimeRangePicker>
    </el-row>
</template>

<script lang="ts">

import {defineComponent, reactive} from "vue";
import FilterInput from "./components/FilterInput.vue"
import FilterSelect from "./components/FilterSelect.vue"
import FilterDateTimeRangePicker from "./components/FilterDateTimeRangePicker.vue"
import { protoManage } from "../../../proto/manage";
import {convert} from "../../../base/convert";
import i18n from '../../../base/i18n'

interface NodeResourceFilterInfo {
    uploaderTypeOptions: Array<any>
    stateOptions: Array<any>
}

export default defineComponent ({
    name: "NodeResourceFilter",
    emits:['addTag'],
    components: {
        FilterInput,
        FilterSelect,
        FilterDateTimeRangePicker
    },
    setup(props, context){
        const data = reactive<NodeResourceFilterInfo>({
            uploaderTypeOptions:[
                {name:i18n.global.t('nodeNotify.senderType.node'), value:protoManage.NotifySenderType.NotifySenderTypeNode},
                {name:i18n.global.t('nodeNotify.senderType.user'), value:protoManage.NotifySenderType.NotifySenderTypeUser}
            ],
            stateOptions:[
                {name:i18n.global.t('nodeResource.state.normal'), type: convert.getStateViewType(protoManage.State.StateNormal), value:protoManage.State.StateNormal},
                {name:i18n.global.t('nodeResource.state.invalid'), type: convert.getStateViewType(protoManage.State.StateError), value:protoManage.State.StateWarn},
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