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
    <el-row class="filterSelectRow" type="flex" justify="start" align="middle">
        <el-row class="filterSelectHeadRow" type="flex" justify="space-between" align="middle">
            <div class="filterSelectText color-text-normal">{{ name }}</div>
        </el-row>
        <el-select class="filterSelect" v-model="data.select"  @change="confirm">
            <el-option v-for="(item, index) in options" :label="item.name" :value="String(index)"></el-option>
        </el-select>
    </el-row>
</template>

<script lang="ts">

import {defineComponent, onMounted, reactive} from "vue";
import { protoManage } from "../../../../proto/manage";
import {convert} from "../../../../base/convert";
import {useRoute} from "vue-router";

interface FilterSelectInfo {
    select:string
}

export default defineComponent ({
    name: "FilterSelect",
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
        },
        options:{
            type: Array,
            default: [],
            required: true
        },
    },
    setup(props, context){

        const route = useRoute()
        const data = reactive<FilterSelectInfo>({select:""})

        onMounted(()=>{
            let query = route.query[props.sign]
            if (query != undefined){
                for (let item of convert.dataToArray(query)) {
                    let index = getIndexByValue(item)
                    submit(index, false)
                }
            }
        })

        function getIndexByValue(val):string{
            for (let index in props.options) {
                let itemVal = props.options[<string>index].value
                if (itemVal !=undefined && itemVal == val){
                    return index
                }
            }
           return ""
        }

        function confirm(){
            submit(data.select, true)
        }

        function submit(index:string, repeatTips:boolean){
            if(index != ""){
                context.emit('submit', props.name,  props.options[index].name, {sign:props.sign,
                    value:props.options[index].value, type:props.options[index].type}, repeatTips)
            }
            data.select = ""
        }
        return {data, confirm, protoManage}
    }
})
</script>

<style scoped>
@import "../../../../css/color.css";

.filterSelectRow{
    width: 100%;
    margin-bottom: 16px;
}

.filterSelectHeadRow{
    width: 100%;
    margin-bottom: 8px;
}

.filterSelectText{
    font-size: 14px;
    white-space:nowrap;
}

.filterSelect{
    width: 220px;
}
</style>