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
    <el-tooltip effect="light" :content="getFilterTooltip()" placement="bottom">
        <el-button class="filterButton" plain @click="filterButtonClick">
            <el-icon> <Filter :class="getFilterButtonColor()"/> </el-icon>
        </el-button>
    </el-tooltip>
</template>

<script lang="ts">

import {defineComponent, onMounted} from "vue";
import {Filter} from "@element-plus/icons";
import {globals} from "../../base/globals";
import {useRoute} from "vue-router";
import i18n from '../../base/i18n'
import {routerPath} from "../../router";

export default defineComponent ({
    name: "FilterButton",
    components:{
        Filter
    },
    props:{
        showFilterView:{
            type: Boolean,
            default: false
        }
    },
    setup(props, context){

        const route = useRoute()

        onMounted(()=>{
            let filter =  route.query.filter
            if (filter){
                context.emit("update:showFilterView", true)
            }
        })

        function getFilterTooltip():string{
            return props.showFilterView?i18n.global.t('filter.start') : i18n.global.t('filter.stop')
        }

        function getFilterButtonColor():string{
            return props.showFilterView?"color-state-success" : "color-text-normal"
        }

        function filterButtonClick(event){
            globals.elButtonBlur(event)
            context.emit("update:showFilterView", !props.showFilterView)
            routerPath.toPath(String(route.name), {withPageNum:true, withPageSize:true}, route)
        }
        return {filterButtonClick, getFilterTooltip, getFilterButtonColor, Filter}
    }
})
</script>


<style scoped>
@import "../../css/color.css";
.filterButton{
    border:0;
    padding:0;
    font-size:25px;
}
</style>