<!--
Copyright 2021 liyiligang

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
-->

<template>
    <el-row class="cardState" type="flex" justify="space-between" align="middle">
        <router-link class="card-link" :to=link>
            <span  class="color-text-normal">{{name}}：</span>
        </router-link>
        <el-row class="cardStateNum" type="flex" justify="space-around" align="middle">
            <span class="color-state-success">{{successCnt}}</span>
            <span class="color-state-warning">{{warningCnt}}</span>
            <span class="color-state-danger">{{dangerCnt}}</span>
            <span class="color-state-lose">{{loseCnt}}</span>
        </el-row>
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

.cardState{
    width: 100%;
    margin-top: 5px;
    font-size: 14px;
    flex-wrap:nowrap;
}

.cardStateNum{
    flex:auto;
}

</style>