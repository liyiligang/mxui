<template>
    <el-row type="flex" justify="space-between" align="middle">
        <div :class="['base', 'color-text-assist']">{{globals.formatDate(time)}}</div>
        <div :class="['base', 'color-text-assist']">{{id}}</div>
    </el-row>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {globals} from "../../base/globals";

export default defineComponent ({
    name: "CardBase",
    props:{
        id:Number,
        time:Number
    },
    setup(){
        return {globals}
    }
})
</script>

<style scoped>
@import "../../css/color.css";
.base{
    margin-top: 6px;
    font-size: 12px;
}
</style>