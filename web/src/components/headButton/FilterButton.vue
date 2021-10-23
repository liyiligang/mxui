<template>
    <el-tooltip effect="light" :content="getFilterTooltip()" placement="bottom">
        <el-button class="filterButton" plain @click="filterButtonClick">
            <el-icon> <Filter class="filterIcon" :class="getFilterButtonColor()"/> </el-icon>
        </el-button>
    </el-tooltip>
</template>

<script lang="ts">

import {defineComponent} from "vue";
import {Filter} from "@element-plus/icons";
import {globals} from "../../base/globals";

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
        function getFilterTooltip():string{
            return props.showFilterView?"过滤器已激活" : "过滤器未激活"
        }

        function getFilterButtonColor():string{
            return props.showFilterView?"color-state-success" : "color-text-normal"
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
}

.filterIcon{
    font-size:25px;
}
</style>