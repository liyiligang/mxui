<template>
    <Load v-if="isLoading"></Load>
    <div v-else>
        <Empty v-if="pageTotal<=0"></Empty>
        <el-row v-else class="view-row">
            <el-row class="view-main">
                <slot>暂无数据</slot>
            </el-row>
            <el-row class="view-page-row">
                <Page :pageTotal="pageTotal"></Page>
            </el-row>
        </el-row>
    </div>
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
@import "../css/view.css";
</style>
