<template>
    <Load v-if="isLoading"></Load>
    <el-row v-else class="frameView">
        <Empty v-if="pageTotal<=0"></Empty>
        <el-row v-else :class="[globals.globalsConfig.cssConfig.nodeViewFramePageFix ? 'mainViewPageFix' : 'mainView']" class="flex-row-center-between">
            <el-row :class="[globals.globalsConfig.cssConfig.nodeViewFramePageFix ? 'slotViewPageFix' : 'slotView']">
                <slot>暂无数据</slot>
            </el-row>
            <el-row :class="[globals.globalsConfig.cssConfig.nodeViewFramePageFix ? 'pageViewFix' : 'pageView']" class="flex-row-center-start">
                <Page :pageTotal="pageTotal"></Page>
            </el-row>
        </el-row>
    </el-row>
</template>

<script lang="ts">
import {defineComponent, PropType, reactive} from "vue";
import Page from "../components/Page.vue"
import Empty from "../components/Empty.vue"
import Load from "../components/Load.vue"
import { globals } from "../base/globals"

interface NodeViewFrameInfo {

}

export default defineComponent ({
    name: "NodeViewFrame",
    props:{
        pageTotal:Number,
        isLoading:Boolean,
    },
    components: {
        Page,
        Empty,
        Load
    },
    setup(){
        return {globals}
    }
})
</script>

<style scoped>
@import "../css/flex.css";

.frameView{
    width: 100%;
    min-height: 100%;
}

.mainView{
    width: 100%;
    min-height: 100%;
}

.mainViewPageFix{
    width: 100%;
    min-height: 100%;
    flex-direction:column;
}


.slotView{
    width: 100%;
}

.slotViewPageFix{
    width: 100%;
    flex: auto;
    height: 0;
    overflow-y:scroll;
}

.pageView{
    width: 100%;
    margin-top: 50px;
    margin-bottom: 25px;
}

.pageViewFix{
    width: 100%;
    margin-top: 25px;
    margin-bottom: 18px;
}

</style>
