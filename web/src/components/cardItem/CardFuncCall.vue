<template>
    <el-row class="cardFuncCall" type="flex" justify="space-between" align="middle">
        <el-button class="cardFuncCallButton" type="text" @click="click">{{name}}</el-button>
        <div :class="[stateColor]">{{state}}</div>
        <div class="cardFuncCallTime color-text-assist">{{globals.formatDate(time)}}</div>
    </el-row>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {globals} from "../../base/globals";
export default defineComponent ({
    name: "CardFuncCall",
    emits: ['textClick'],
    props:{
        name:{
            type: String,
            default: ""
        },
        state:{
            type: String,
            default: ""
        },
        stateColor:{
            type: String,
            default: "color-text-normal"
        },
        time:{
            type: Number,
            default: 0
        },
    },
    setup(prop, context){
        function click(){
            context.emit('textClick')
        }
        return {globals, click}
    }
})
</script>

<style scoped>
@import "../../css/color.css";

.cardFuncCall{
    font-size: 14px;
}

.cardFuncCallButton{
    padding: 0px;
    line-height: normal;
}

.cardFuncCallTime{
    font-size: 13px;
}
</style>