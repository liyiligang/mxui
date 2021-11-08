<template>
    <el-row class="filterDateTimePickerRow" type="flex" justify="start" align="middle">
        <el-row class="filterDateTimePickerHeadRow" type="flex" justify="space-between" align="middle">
            <div class="filterDateTimePickerText color-text-normal">{{ name }}</div>
        </el-row>
        <el-date-picker v-model="data.dateTime" placeholder="请选择"
                        size="medium" type="datetime" @change="confirm">
        </el-date-picker>
    </el-row>
</template>

<script lang="ts">

import {defineComponent, onMounted, reactive} from "vue";
import {convert} from "../../../../base/convert";
import {useRoute} from "vue-router";

interface FilterDateTimePickerInfo {
    dateTime:string
}

export default defineComponent ({
    name: "FilterDateTimePicker",
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
        const data = reactive<FilterDateTimePickerInfo>({dateTime: ""})

        onMounted(()=>{
            let query = route.query[props.sign]
            if (query != undefined){
                for (let item of convert.dataToArray(query)) {
                    let time = Number(item) * 1000
                    submit(convert.timeStampToFormatDate(time), false)
                }
            }
        })

        function confirm(){
            submit(data.dateTime, true)
        }

        function submit(time, repeatTips:boolean){
            let timeStamp = convert.dateStringToTimeStamp(time)
            if(!isNaN(timeStamp)){
                context.emit('submit', props.name, convert.timeStampToFormatDate(timeStamp),
                    {sign:props.sign, value: timeStamp / 1000}, repeatTips)
            }
            data.dateTime = ""
        }
        return {data, confirm}
    }
})
</script>

<style scoped>
@import "../../../../css/color.css";

.filterDateTimePickerRow{
    width: 100%;
    margin-bottom: 16px;
}

.filterDateTimePickerHeadRow{
    width: 100%;
    margin-bottom: 8px;
}

.filterDateTimePickerText{
    font-size: 14px;
    white-space:nowrap;
}
</style>