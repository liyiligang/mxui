<template>
    <el-tooltip effect="light" :content="getFilterTooltip()" placement="bottom">
        <el-button :class="getFilterButtonColor()" class="filterButton" plain icon="el-icon-filter"
                   @click="filterButtonClick"></el-button>
    </el-tooltip>
</template>

<script lang="ts">

import {defineComponent} from "vue";
import {globals} from "../../base/globals";

export default defineComponent ({
    name: "FilterButton",
    props:{
        showFilterView:{
            type: Boolean,
            default: false
        }
    },
    setup(props, context){
        function getFilterTooltip():string{
            return props.showFilterView?"工具栏已激活" : "工具栏未激活"
        }

        function getFilterButtonColor():string{
            return props.showFilterView?"color-state-success" : ""
        }

        function filterButtonClick(event){
            globals.elButtonBlur(event)
            context.emit("update:showFilterView", !props.showFilterView)
        }
        return {filterButtonClick, getFilterTooltip, getFilterButtonColor}
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