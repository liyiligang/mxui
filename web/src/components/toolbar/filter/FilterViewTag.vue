<template>
    <el-row class="mainRow flex-row-center-start">
        <el-row v-for="itemName in tagMap.keys()" class="itemRow flex-row-center-start">
            <el-row class="titleRow" type="flex" justify="space-between" align="middle">
                <div class="titleText color-text-normal">{{itemName}}</div>
                <el-tooltip effect="light" :content="getClearTooltip(itemName)" placement="bottom">
                    <el-button  class="clearButton" icon="el-icon-delete" plain
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
            return "清空"+itemName +"标签"
        }

        function clearTags(itemName){
            context.emit('clearTags', itemName)
        }

        function clearTag(itemName, tagName){
            context.emit('clearTag', itemName, tagName)
        }

        return {clearTags, clearTag, getClearTooltip}
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