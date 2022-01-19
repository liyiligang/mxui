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
    <el-select v-if="data.levelSelectOptions.length > 0" class="userSetLevelSelect" :size="size" :modelValue="modelValue"
               @update:modelValue="modelValueChanged" :placeholder="$t('level.selectTips')">
        <el-option v-for="i in data.levelSelectOptions" :key="getUserLevelNameBySelectIndex(i)"
                   :label="getUserLevelNameBySelectIndex(i)" :value="i"></el-option>
    </el-select>
</template>

<script lang="ts">
import {defineComponent, onMounted, reactive} from "vue";
import {convert} from "../../base/convert";
import {protoManage} from "../../proto/manage";
import {globals} from "../../base/globals";

interface LevelSelectInfo {
    levelSelectOptions:Array<protoManage.Level>
}

export default defineComponent ({
    name: "LevelSelect",
    components: {

    },
    props:{
        size:{
            type: String,
            default: "",
        },
        modelValue:{
            type: Number,
            default: 0,
        }
    },
    setup(props, context){
        const data = reactive<LevelSelectInfo>({levelSelectOptions:Array<protoManage.Level>()})

        onMounted(()=>{
            initLevelSelect()
        })

        function initLevelSelect(){
           let levelList = <Array<protoManage.Level>>Object.values(protoManage.Level)
            for(let level of levelList) {
                if (level > protoManage.Level.LevelNot && level < globals.globalsData.manager.info.Level){
                    data.levelSelectOptions.push(level)
                }
            }
        }

        function modelValueChanged(val){
            context.emit("update:modelValue", val)
        }

        function getUserLevelNameBySelectIndex(index){
            return convert.getManagerLevelName(index)
        }
        return {data, getUserLevelNameBySelectIndex, modelValueChanged}
    }
})
</script>


<style scoped>

.userSetLevelSelect{
    width: 100%;
}
</style>