<template>
    <el-row class="row" type="flex" justify="space-between" align="middle">
        <router-link class="card-link" :to=link>
            <span  :class="['color-text-normal', 'name']">
                {{name}}：
            </span>
        </router-link>
        <span :class="['block', 'color-state-success']">{{successCnt}}</span>
        <span :class="['block', 'color-state-warning']">{{warningCnt}}</span>
        <span :class="['block', 'color-state-danger']">{{dangerCnt}}</span>
        <span :class="['block', 'color-state-lose']">{{loseCnt}}</span>
    </el-row>
</template>

<script lang="ts">
import {defineComponent} from "vue";
export default defineComponent ({
    name: "CardName",
    props:{
        name:{
            type: String,
            default: ""
        },
        link:{
            type: String,
            default: ""
        },
        successCnt:{
            type: Number,
            default: 0
        },
        warningCnt:{
            type: Number,
            default: 0
        },
        dangerCnt:{
            type: Number,
            default: 0
        },
        loseCnt:{
            type: Number,
            default: 0
        },
    },
    setup(){
        return {}
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
.name{

}
.block{
    max-width: 53px;
    min-width: 53px;
    text-align: center;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
}
</style>