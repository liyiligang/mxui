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
        <FilterInput :name="$t('filter.nodeNotify.message')" sign="senderMessage" @submit="submit"></FilterInput>
        <FilterInput :name="$t('filter.nodeNotify.sender')" sign="senderName" @submit="submit"></FilterInput>
        <FilterSelect :name="$t('filter.nodeNotify.senderType')" sign="senderType" :options="data.senderTypeOptions" @submit="submit"></FilterSelect>
        <FilterSelect :name="$t('filter.nodeNotify.state')" sign="senderState" :options="data.senderStateOptions" @submit="submit"></FilterSelect>
        <FilterDateTimeRangePicker :name="$t('filter.nodeNotify.time')" sign="senderTime" @submit="submit"></FilterDateTimeRangePicker>
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
                {name:i18n.global.t('nodeNotify.senderType.node'), value:protoManage.NotifySenderType.NotifySenderTypeNode},
                {name:i18n.global.t('nodeNotify.senderType.user'), value:protoManage.NotifySenderType.NotifySenderTypeUser}
            ],
            senderStateOptions:[
                {name:i18n.global.t('nodeNotify.state.not'), value:protoManage.State.StateNot},
                {name:i18n.global.t('nodeNotify.state.unknown'), type: convert.getStateViewType(protoManage.State.StateUnknow), value:protoManage.State.StateUnknow},
                {name:i18n.global.t('nodeNotify.state.normal'), type: convert.getStateViewType(protoManage.State.StateNormal), value:protoManage.State.StateNormal},
                {name:i18n.global.t('nodeNotify.state.warn'), type: convert.getStateViewType(protoManage.State.StateWarn), value:protoManage.State.StateWarn},
                {name:i18n.global.t('nodeNotify.state.error'), type: convert.getStateViewType(protoManage.State.StateError), value:protoManage.State.StateError}
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