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
    <el-row class="mainRow flex-row-center-start">
        <el-row v-for="itemName in tagMap.keys()" class="itemRow flex-row-center-start">
            <el-row class="titleRow" type="flex" justify="space-between" align="middle">
                <div class="titleText color-text-normal">{{itemName}}</div>
                <el-tooltip effect="light" :content="getClearTooltip(itemName)" placement="bottom">
                    <el-button  class="clearButton" :icon="Delete" plain
                                @click="clearTags(itemName)"></el-button>
                </el-tooltip>
            </el-row>
            <el-row class="tagsRow">
                <el-tag v-for="tagName in tagMap.get(itemName).keys()" class="tag"
                        :type="tagMap.get(itemName).get(tagName).type" closable
                        @close="clearTag(itemName, tagName)">{{tagName}}</el-tag>
            </el-row>
        </el-row>
    </el-row>
</template>

<script lang="ts">

import {defineComponent, PropType} from "vue";
import {filter} from "../../../base/filter";
import i18n from '../../../base/i18n'
import {Delete} from "@element-plus/icons";

export default defineComponent ({
    name: "FilterViewTag",
    emits:['clearTags', 'clearTag'],
    props:{
        tagMap:{
            type: Object as PropType<Map<string, Map<string, filter.FilterTagInfo>>>,
            default: new Map<string, Map<string, filter.FilterTagInfo>>()
        }
    },
    setup(props, context){

        function getClearTooltip(itemName){
            return  i18n.global.t('filter.tips.clearTags', {msg:itemName})
        }

        function clearTags(itemName){
            context.emit('clearTags', itemName)
        }

        function clearTag(itemName, tagName){
            context.emit('clearTag', itemName, tagName)
        }

        return {clearTags, clearTag, getClearTooltip, Delete}
    }
})
</script>

<style scoped>
@import "../../../css/color.css";
@import "../../../css/flex.css";

.mainRow{
    overflow-x:auto;
}

.itemRow{
    width: 100%;
    margin-bottom: 15px;
}

.titleRow{
    width: 100%;
    height: 30px;
}

.titleText{
    font-size: 14px;
    font-weight: 500;
}

.clearButton{
    border:0px;
    padding: 0px;
    font-size: 20px;
    min-height: 0;
}

.tagsRow{
    width: 100%;
}

.tag{
    margin-left: 4px;
    margin-top: 8px;
}

</style>