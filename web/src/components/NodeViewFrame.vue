<template>
    <Load v-if="isLoading"></Load>
    <div v-else>
        <Empty v-if="pageTotal<=0"></Empty>
        <el-row v-else class="view-row" type="flex" justify="start" align="top">
            <slot>暂无数据</slot>
            <el-row class="view-page-row" type="flex" justify="center" align="middle">
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
