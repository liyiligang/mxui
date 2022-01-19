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
    <el-row class="cardInfo" type="flex" justify="start" align="middle">
        <span class="cardInfoNowrap" :class="[descColor]">{{describe}}：</span>
        <router-link v-if="call !== null" class="card-text-omit card-link" :class="[nameColor]" to="" @click.native="click">
            <span>{{name}}</span>
        </router-link>
        <router-link v-else-if="link !== ''" class="card-text-omit card-link" :class="[nameColor]" :to=link>
            <span>{{name}}</span>
        </router-link>
        <span v-else  class="card-text-omit" :class="[nameColor]">{{name}}</span>
    </el-row>
</template>

<script lang="ts">
import {defineComponent} from "vue";
export default defineComponent ({
    name: "CardInfo",
    props:{
        name:{
            type: String,
            default: ""
        },
        describe:{
            type: String,
            default: ""
        },
        nameColor:{
            type: String,
            default: "color-text-normal"
        },
        descColor:{
            type: String,
            default: "color-text-normal"
        },
        call:{
            type: Function,
            default: null
        },
        link:{
            type: String,
            default: ""
        }
    },
    setup(props){
        function click(){
            if (props.call != null){
                props.call()
            }
        }
        return {click}
    }
})
</script>

<style scoped>
@import "../../css/color.css";
@import "../../css/card.css";
.cardInfo{
    width: 100%;
    margin-top: 3px;
    font-size: 14px;
    flex-wrap:nowrap;
}

.cardInfoNowrap{
    white-space:nowrap;
}
</style>