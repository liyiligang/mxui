<template>
    <el-row class="cardReportVal" type="flex" justify="space-between" align="middle">
        <el-button class="cardReportValButton" type="text" @click="click">{{name}}</el-button>
        <div v-if=isValidState() :class="[stateColor]">{{"暂无"}}</div>
        <div v-else :class="[stateColor]">{{value}}</div>
        <div class="cardReportValTime color-text-assist">{{convert.timeStampToFormatDate(time)}}</div>
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
        return {globals, convert, request, protoManage, click, isValidState}
    }
})
</script>

<style scoped>
@import "../../css/color.css";

.cardReportVal{
    width: 100%;
    font-size: 14px;
}

.cardReportValButton{
    padding: 0px;
    line-height: normal;
}

.cardReportValTime{
    font-size: 13px;
}
</style>
