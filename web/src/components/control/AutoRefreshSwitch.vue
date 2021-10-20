<template>
    <el-tooltip effect="light" :content="getAutoRefreshTooltip()" placement="bottom">
        <el-button :class="getAutoRefreshButtonColor()" class="autoRefreshButton" plain icon="el-icon-refresh"
                   @click="autoRefreshButtonClick"></el-button>
    </el-tooltip>
</template>

<script lang="ts">
import {defineComponent, watch} from "vue";
import {globals} from "../../base/globals";
import {ElMessage} from "element-plus";

export default defineComponent ({
    name: "AutoRefreshSwitch",
    components: {

    },
    props:{
        isAutoRefresh:{
            type: Boolean,
            default: false
        }
    },
    setup(props, context){

        watch(() => globals.globalsData.managerSetting.setting.autoUpdateInterval, (newVal) => {
            if (newVal <= 0){
                context.emit("update:isAutoRefresh", false)
            }
        })

        function getAutoRefreshTooltip():string{
            return props.isAutoRefresh?"自动同步已开启" : "自动同步已停止"
        }

        function getAutoRefreshButtonColor():string{
            return props.isAutoRefresh?"color-state-success" : ""
        }

        function autoRefreshButtonClick(event){
            globals.elButtonBlur(event)
            context.emit("update:isAutoRefresh", !props.isAutoRefresh)
        }

        return {autoRefreshButtonClick, getAutoRefreshTooltip, getAutoRefreshButtonColor}
    }
})
</script>

<style scoped>
@import "../../css/color.css";
.autoRefreshButton{
    border:0px;
    padding: 0px;
    font-size:25px;
    margin-right: 12px;
}
</style>