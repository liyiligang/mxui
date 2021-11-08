<template>
    <el-row class="filterInputRow" type="flex" justify="start" align="middle">
        <el-row class="filterInputHeadRow" type="flex" justify="space-between" align="middle">
            <div class="filterInputText color-text-normal">{{ name }}</div>
            <el-tooltip effect="light" content="提交" placement="bottom">
                <el-button  class="filterInputAddButton" icon="el-icon-search" plain
                            @click="confirm"></el-button>
            </el-tooltip>
        </el-row>
        <el-input class="filterInput" v-model="data.input" size="small" clearable></el-input>
    </el-row>
</template>

<script lang="ts">

import {defineComponent, onMounted, reactive} from "vue";
import {useRoute} from "vue-router";
import {convert} from "../../../../base/convert";

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
        return {data, confirm}
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