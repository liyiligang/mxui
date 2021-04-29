<template>
    <el-row class="row" type="flex" justify="space-between" align="middle">
        <el-button type="text" @click="click">{{name}}</el-button>
        <div v-if=isValidState() :class="[stateColor]">{{"暂无"}}</div>
        <div v-else :class="[stateColor]">{{value}}</div>
        <div :class="['color-text-assist']">{{globals.formatDate(time)}}</div>
    </el-row>
</template>

<script lang="ts">
import {defineComponent, onMounted, reactive} from "vue";
import {globals} from "../../base/globals";
import {request} from "../../base/request";
import {convert} from "../../base/convert";
import {protoManage} from "../../proto/manage";
export default defineComponent ({
    name: "CardReportVal",
    emits: ['textClick'],
    props:{
        name:{
            type: String,
            default: ""
        },
        value:{
            type: Number,
            default: 0
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
        function isValidState():boolean {
           return prop.stateColor==convert.getColorByState(protoManage.State.StateNot)
        }
        return {globals, request, protoManage, click, isValidState}
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
