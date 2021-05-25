<template>
    <el-row class="baseView color-text-assist" type="flex" justify="space-between" align="middle">
        <div>{{convert.timeStampToFormatDate(time)}}</div>
        <div>{{id}}</div>
    </el-row>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {convert} from "../../base/convert";

export default defineComponent ({
    name: "CardBase",
    props:{
        id:Number,
        time:Number
    },
    setup(){
        return {convert}
    }
})
</script>

<style scoped>
@import "../../css/color.css";

.baseView{
    width: 100%;
    margin-top: 6px;
    font-size: 12px;
}
</style>