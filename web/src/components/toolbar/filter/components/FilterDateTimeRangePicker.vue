<template>
    <el-row class="filterDateTimeRangePickerRow" type="flex" justify="start" align="middle">
        <el-row class="filterDateTimeRangePickerHeadRow" type="flex" justify="space-between" align="middle">
            <div class="filterDateTimeRangePickerText color-text-normal">{{ name }}</div>
            <el-tooltip effect="light" content="提交" placement="bottom">
                <el-button  class="filterDateTimeRangePickerAddButton" icon="el-icon-search" plain
                            @click="confirm"></el-button>
            </el-tooltip>
        </el-row>
        <el-row class="filterDateTimeRangePickerElRow">
            <el-date-picker v-model="data.dateStartTime" placeholder="起始时间" size="medium" type="datetime"></el-date-picker>
        </el-row>
        <el-row class="filterDateTimeRangePickerElRow">
            <el-date-picker v-model="data.dateEndTime" placeholder="结束时间" size="medium" type="datetime"></el-date-picker>
        </el-row>
    </el-row>
</template>

<script lang="ts">

import {defineComponent, onMounted, reactive} from "vue";
import {convert} from "../../../../base/convert";
import {useRoute} from "vue-router";
import {globals} from "../../../../base/globals";

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
                globals.viewWarn("起始时间不能超过结束时间")
                return
            }

            if(timeStampName != " - "){
                context.emit('submit', props.name, timeStampName, {sign:props.sign, value: timeStampVal}, repeatTips)
            }
            data.dateStartTime = ""
            data.dateEndTime = ""
        }
        return {data, confirm}
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