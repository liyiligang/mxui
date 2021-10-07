<template>
    <el-select v-if="data.levelSelectOptions.length > 0" class="userSetLevelSelect" :size="size" :modelValue="modelValue" @update:modelValue="modelValueChanged" placeholder="请选择权限等级">
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
                if (level > protoManage.Level.LevelNot && level < globals.globalsData.manager.Level){
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