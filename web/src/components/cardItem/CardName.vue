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
    <el-row class="cardName" type="flex" justify="start" align="middle">
        <el-tooltip :popper-class="data.tooltipClass" :disabled="data.showTooltip"
                    effect="light" :content="name" placement="bottom">
            <router-link v-if="link!==undefined" class="card-text-omit card-link" :class="[color]" :to=link>
                <div :id="'cardNameDiv' + id">{{name}}</div>
            </router-link>
            <div v-else class="card-text-omit" :class="[color, 'name']" :id="'cardNameDiv' + id">{{name}}</div>
        </el-tooltip>
    </el-row>
</template>

<script lang="ts">
import {defineComponent, onMounted, reactive} from "vue";
import {globals} from "../../base/globals";

interface CardNameInfo {
    showTooltip:boolean
    tooltipClass:string
}

export default defineComponent ({
    name: "CardName",
    props:{
        id:{
            type: Number,
            required: true
        },
        name:{
            type: String,
            default: ""
        },
        color:{
            type: String,
            default: "color-state-main"
        },
        link:String
    },
    setup(props){
        const data = reactive<CardNameInfo>({showTooltip:false, tooltipClass:props.color+" cardNameTooltip"})
        onMounted(() => {
            let divDom = document.getElementById('cardNameDiv' + props.id)
            data.showTooltip = !globals.isEllipsis(divDom)
        });
        return {data}
    }
})
</script>

<style scoped>
@import "../../css/color.css";
@import "../../css/card.css";
.cardName{
    width: 100%;
    font-size: 18px;
    flex-wrap:nowrap;
}
</style>

<style>
@import "../../css/color.css";
.cardNameTooltip{
    width: 260px;
}
</style>