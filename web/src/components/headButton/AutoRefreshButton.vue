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
    <el-tooltip effect="light" :content="getAutoRefreshTooltip()" placement="bottom">
        <el-button class="autoRefreshButton" plain @click="autoRefreshButtonClick">
            <el-icon> <Refresh :class="getAutoRefreshButtonColor()"/> </el-icon>
        </el-button>
    </el-tooltip>
</template>

<script lang="ts">
import {defineComponent, onMounted} from "vue";
import {globals} from "../../base/globals";
import {Refresh} from "@element-plus/icons";
import {useRoute} from "vue-router";
import {routerPath} from "../../router";
import i18n from '../../base/i18n'

export default defineComponent ({
    name: "AutoRefreshButton",
    components: {
        Refresh
    },
    props:{
        isAutoRefresh:{
            type: Boolean,
            default: false
        }
    },
    setup(props, context){

        const route = useRoute()

        onMounted(()=>{
            let autoRefresh =  route.query.autoRefresh
            if (autoRefresh){
                context.emit("update:isAutoRefresh", true)
            }
        })

        function getAutoRefreshTooltip():string{
            return props.isAutoRefresh?i18n.global.t('autoRefresh.start') : i18n.global.t('autoRefresh.stop')
        }

        function getAutoRefreshButtonColor():string{
            return props.isAutoRefresh?"color-state-success" : "color-text-normal"
        }

        function autoRefreshButtonClick(event){
            globals.elButtonBlur(event)
            context.emit("update:isAutoRefresh", !props.isAutoRefresh)
            routerPath.toPath(String(route.name), {withPageNum:true, withPageSize:true}, route)
        }

        return {autoRefreshButtonClick, getAutoRefreshTooltip, getAutoRefreshButtonColor}
    }
})
</script>

<style scoped>
@import "../../css/color.css";
.autoRefreshButton{
    border:0;
    padding:0;
    margin-left:0 !important;
    font-size:25px;
}
</style>