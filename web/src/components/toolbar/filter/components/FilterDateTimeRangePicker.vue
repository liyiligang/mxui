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
    <el-row class="filterDateTimeRangePickerRow" type="flex" justify="start" align="middle">
        <el-row class="filterDateTimeRangePickerHeadRow" type="flex" justify="space-between" align="middle">
            <div class="filterDateTimeRangePickerText color-text-normal">{{ name }}</div>
            <el-tooltip effect="light" :content="$t('filter.tips.submit')" placement="bottom">
                <el-button  class="filterDateTimeRangePickerAddButton" :icon="Search" plain
                            @click="confirm"></el-button>
            </el-tooltip>
        </el-row>
        <el-row class="filterDateTimeRangePickerElRow">
            <el-date-picker v-model="data.dateStartTime" :placeholder="$t('filter.tips.startTime')" type="datetime"></el-date-picker>
        </el-row>
        <el-row class="filterDateTimeRangePickerElRow">
            <el-date-picker v-model="data.dateEndTime" :placeholder="$t('filter.tips.endTime')"  type="datetime"></el-date-picker>
        </el-row>
    </el-row>
</template>

<script lang="ts">

import {defineComponent, onMounted, reactive} from "vue";
import {convert} from "../../../../base/convert";
import {useRoute} from "vue-router";
import {globals} from "../../../../base/globals";
import i18n from '../../../../base/i18n'
import {Search} from "@element-plus/icons";

interface FilterDateTimeRangePickerInfo {
    dateStartTime:string
    dateEndTime:string
}

export default defineComponent ({
    name: "FilterDateTimeRangePicker",
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
        const data = reactive<FilterDateTimeRangePickerInfo>({dateStartTime: "", dateEndTime: ""})

        onMounted(()=>{
            let query = route.query[props.sign]
            if (query != undefined){
                for (let item of convert.dataToArray(query)) {
                    let time = item.split("-")
                    let startTime = Number(time[0]) * 1000
                    let endTime = Number(time[1]) * 1000
                    submit({dateStartTime:convert.timeStampToFormatDate(startTime),
                        dateEndTime:convert.timeStampToFormatDate(endTime)}, false)
                }
            }
        })

        function confirm(){
            submit(data, true)
        }

        function submit(timeData, repeatTips:boolean){
            let startTimeStamp = convert.dateStringToTimeStamp(timeData.dateStartTime)
            let endTimeStamp = convert.dateStringToTimeStamp(timeData.dateEndTime)
            let startTimeStampName = ''
            let endTimeStampName = ''
            let timeStampName = ''
            let startTimeStampVal = 0
            let endTimeStampVal = 0
            let timeStampVal = ""
            if(!isNaN(startTimeStamp)){
                startTimeStampName = convert.timeStampToFormatDate(startTimeStamp)
                startTimeStampVal = startTimeStamp / 1000
            }
            if(!isNaN(endTimeStamp)){
                endTimeStampName = convert.timeStampToFormatDate(endTimeStamp)
                endTimeStampVal = endTimeStamp / 1000
            }
            timeStampName = startTimeStampName + " - " +endTimeStampName
            timeStampVal = startTimeStampVal+"-"+endTimeStampVal

            if (startTimeStampVal > endTimeStampVal) {
                globals.viewWarn(i18n.global.t('filter.tips.timeError'))
                return
            }

            if(timeStampName != " - "){
                context.emit('submit', props.name, timeStampName, {sign:props.sign, value: timeStampVal}, repeatTips)
            }
            data.dateStartTime = ""
            data.dateEndTime = ""
        }
        return {data, confirm, Search}
    }
})
</script>

<style scoped>
@import "../../../../css/color.css";

.filterDateTimeRangePickerRow{
    width: 100%;
    margin-bottom: 16px;
}

.filterDateTimeRangePickerHeadRow{
    width: 100%;
    margin-bottom: 8px;
}

.filterDateTimeRangePickerAddButton{
    border:0px;
    padding: 0px;
    font-size: 21px;
    min-height: 0;
}


.filterDateTimeRangePickerText{
    font-size: 14px;
    white-space:nowrap;
}

.filterDateTimeRangePickerElRow{
    width: 100%;
    margin-bottom: 5px;
}

</style>