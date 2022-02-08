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
limitations under the License.f
-->

<template>
    <Load v-if="isLoading"></Load>
    <el-row v-show="!isLoading" class="frameView">
        <Empty v-if="pageTotal<=0"></Empty>
        <el-row v-else :class="[globals.globalsData.managerSetting.setting.isPageFix ? 'mainViewPageFix' : 'mainView']" class="flex-row-center-between">
            <el-row :class="[globals.globalsData.managerSetting.setting.isPageFix ? 'slotViewPageFix' : 'slotView']">
                <slot></slot>
            </el-row>
            <el-row :class="[globals.globalsData.managerSetting.setting.isPageFix ? 'pageViewFix' : 'pageView']" class="flex-row-center-start">
                <Page :pageTotal="pageTotal"></Page>
            </el-row>
        </el-row>
    </el-row>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import Page from "../../components/Page.vue"
import Empty from "../../components/Empty.vue"
import Load from "../../components/Load.vue"
import { globals } from "../../base/globals"

interface NodeViewFrameInfo {

}

export default defineComponent ({
    name: "NodeViewFrame",
    props:{
        pageTotal:Number,
        isLoading:Boolean,
    },
    components: {
        Page,
        Empty,
        Load
    },
    setup(){
        return {globals}
    }
})
</script>

<style scoped>
@import "../../css/flex.css";

.frameView{
    width: 100%;
    min-height: 100%;
}

.mainView{
    width: 100%;
    min-height: 100%;
}

.mainViewPageFix{
    width: 100%;
    min-height: 100%;
    flex-direction:column;
}

.slotView{
    width: 100%;
}

.slotViewPageFix{
    width: 100%;
    flex: auto;
    justify-content: flex-start;
    align-content: flex-start;
    height: 0;
    overflow-y:scroll;
}

.pageView{
    width: 100%;
    margin-top: 25px;
    margin-bottom: 25px;
}

.pageViewFix{
    width: 100%;
    margin-top: 25px;
    margin-bottom: 18px;
}

</style>
