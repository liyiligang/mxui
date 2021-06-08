<template>
    <el-select class="autoRefreshInfoSelect" v-model="data.selectValue" @change="selectChanged"
               filterable allow-create default-first-option placeholder="请输入自动刷新时间">
        <el-option v-for="i in data.selectOptions" :key="getSelectLabel(i)" :label="getSelectLabel(i)" :value="i"></el-option>
    </el-select>
</template>

<script lang="ts">
import {defineComponent, reactive} from "vue";
import {globals} from "../../base/globals";
import {ElMessage} from "element-plus";

interface AutoRefreshInfo {
    selectValue:string
    selectOptions: Array<string>
}

export default defineComponent ({
    name: "AutoRefresh",
    components: {

    },

    setup(){
        const data = reactive<AutoRefreshInfo>({selectValue:getSelectLabel(String(globals.globalsData.managerSetting.setting.autoUpdateInterval)),
            selectOptions:["2", "5", "10", "30", "60", "0"]})

        function getSelectLabel(val:string){
            if (val == "0") {
                return "关闭"
            }
            return val+"s"
        }

        function selectChanged (){
            if (!globals.isNoNegativeIntWithStr(data.selectValue)){
                ElMessage.error("请输入一个非负整数");
                return
            }
            globals.globalsData.managerSetting.setting.autoUpdateInterval = Number(data.selectValue)
        }
        return {data, selectChanged, getSelectLabel}
    }
})
</script>

<style scoped>
.autoRefreshInfoSelect{
    width: 150px;
}
</style>