<template>
    <el-row class="row" type="flex" justify="space-between" align="middle">
        <el-button type="text" @click="click">{{name}}</el-button>
        <div :class="[stateColor]">{{state}}</div>
        <div :class="['color-text-assist']">{{globals.formatDate(time)}}</div>
    </el-row>
</template>

<script lang="ts">
import {defineComponent, onMounted, reactive} from "vue";
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
@import "../../css/card.css";
.row{
    margin-top: 5px;
    font-size: 14px;
    line-height:19px;
}
.card-call{
    margin-top: 2px;
    font-size: 14px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    max-width: 260px;
}
</style>