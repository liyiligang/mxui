<template>
    <el-row class="cardReportVal" type="flex" justify="space-between" align="middle">
        <el-button class="cardReportValButton" type="text" @click="click">{{name}}</el-button>
    </el-row>
</template>

<script lang="ts">
import {defineComponent, onMounted, reactive} from "vue";
export default defineComponent ({
    name: "CardReportVal",
    emits: ['textClick'],
    props:{
        name:{
            type: String,
            default: ""
        }
    },
    setup(prop, context){
        function click(){
            context.emit('textClick')
        }
        return {click}
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
