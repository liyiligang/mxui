<template>
    <Load v-if="isLoading"></Load>
    <el-row v-else class="frameView">
        <Empty v-if="pageTotal<=0"></Empty>
        <el-row v-else class="mainView flex-row-center-between">
            <el-row class="slotView">
                <slot>暂无数据</slot>
            </el-row>
            <el-row class="pageView flex-row-center-start">
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

.slotView{
    width: 100%;
}

.pageView{
    width: 100%;
    margin-top: 50px;
    margin-bottom: 25px;
}

</style>
