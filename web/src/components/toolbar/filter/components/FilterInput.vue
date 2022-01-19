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
    <el-row class="filterInputRow" type="flex" justify="start" align="middle">
        <el-row class="filterInputHeadRow" type="flex" justify="space-between" align="middle">
            <div class="filterInputText color-text-normal">{{ name }}</div>
            <el-tooltip effect="light" :content="$t('filter.tips.submit')" placement="bottom">
                <el-button  class="filterInputAddButton" :icon="Search" plain
                            @click="confirm"></el-button>
            </el-tooltip>
        </el-row>
        <el-input class="filterInput" v-model="data.input" clearable></el-input>
    </el-row>
</template>

<script lang="ts">

import {defineComponent, onMounted, reactive} from "vue";
import {useRoute} from "vue-router";
import {convert} from "../../../../base/convert";
import {Search} from "@element-plus/icons";

interface FilterInputInfo {
    input:string
}

export default defineComponent ({
    name: "FilterInput",
    emits:['submit'],
    components: {

    },
    props:{
        name:{
            type: String,
            default: "",
            required: true
        },
        sign:{
            type: String,
            default: "",
            required: true
        }
    },
    setup(props, context){

        const route = useRoute()
        const data = reactive<FilterInputInfo>({input: ""})

        onMounted(()=>{
            let query = route.query[props.sign]
            if (query != undefined){
                for (let item of convert.dataToArray(query)) {
                    submit(item, false)
                }
            }
        })

        function confirm(){
            submit(data.input, true)
        }

        function submit(name:string, repeatTips:boolean){
            if (name.trim() != ""){
                context.emit('submit', props.name, name, {sign:props.sign}, repeatTips)
            }
            data.input = ""
        }
        return {data, confirm, Search}
    }

})
</script>

<style scoped>
@import "../../../../css/color.css";

.filterInputRow{
    width: 100%;
    margin-bottom: 16px;
}

.filterInputHeadRow{
    width: 100%;
    margin-bottom: 8px;
}

.filterInputText{
    font-size: 14px;
    white-space:nowrap;
}

.filterInputAddButton{
    border:0px;
    padding: 0px;
    font-size: 21px;
    min-height: 0;
}

.filterInput{

}
</style>