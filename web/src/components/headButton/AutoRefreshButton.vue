<template>
    <el-tooltip effect="light" :content="getAutoRefreshTooltip()" placement="bottom">
        <el-button class="autoRefreshButton" plain @click="autoRefreshButtonClick">
            <el-icon> <Refresh class="autoRefreshIcon" :class="getAutoRefreshButtonColor()"/> </el-icon>
        </el-button>
    </el-tooltip>
</template>

<script lang="ts">
import {defineComponent, onMounted} from "vue";
import {globals} from "../../base/globals";
import {Refresh} from "@element-plus/icons";
import {useRoute} from "vue-router";
import {routerPath} from "../../router";

export default defineComponent ({
    name: "AutoRefreshButton",
    components: {
        Refresh
    },
    props:{
        isAutoRefresh:{
            type: Boolean,
            default: false
        }
    },
    setup(props, context){

        const route = useRoute()

        onMounted(()=>{
            let autoRefresh =  route.query.autoRefresh
            if (autoRefresh){
                context.emit("update:isAutoRefresh", true)
            }
        })

        function getAutoRefreshTooltip():string{
            return props.isAutoRefresh?"自动同步已开启" : "自动同步已停止"
        }

        function getAutoRefreshButtonColor():string{
            return props.isAutoRefresh?"color-state-success" : "color-text-normal"
        }

        function autoRefreshButtonClick(event){
            globals.elButtonBlur(event)
            context.emit("update:isAutoRefresh", !props.isAutoRefresh)
            routerPath.toPath(String(route.name), {withPageNum:true, withPageSize:true}, route)
        }

        return {autoRefreshButtonClick, getAutoRefreshTooltip, getAutoRefreshButtonColor}
    }
})
</script>

<style scoped>
@import "../../css/color.css";
.autoRefreshButton{
    border:0;
    padding:0;
    margin-left:0 !important;
}

.autoRefreshIcon{
    font-size:25px;
}
</style>