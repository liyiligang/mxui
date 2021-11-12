<template>
    <el-row class="filterViewFrameRow flex-row-center-start">
        <FilterViewTag class="filterViewTag" :tag-map="filter.getFilterDataWithRouterName(String(route.name))" @clearTags="clearTags" @clearTag="clearTag"></FilterViewTag>
        <el-divider class="filterViewDivider"></el-divider>
        <el-row class="filterRow" type="flex" justify="start" align="top">
            <NodeFilter v-if="route.name === routerName.node" @addTag="addTag"></NodeFilter>
            <NodeFuncFilter v-else-if="route.name === routerName.nodeFunc" @addTag="addTag"></NodeFuncFilter>
            <NodeReportFilter v-else-if="route.name === routerName.nodeReport" @addTag="addTag"></NodeReportFilter>
            <NodeNotifyFilter v-else-if="route.name === routerName.nodeNotify" @addTag="addTag"></NodeNotifyFilter>
        </el-row>
    </el-row>
</template>

<script lang="ts">

import {defineComponent, onMounted, reactive} from "vue";
import FilterViewTag from "./FilterViewTag.vue";
import NodeFilter from "./NodeFilter.vue";
import NodeFuncFilter from "./NodeFuncFilter.vue";
import NodeReportFilter from "./NodeReportFilter.vue";
import NodeNotifyFilter from "./NodeNotifyFilter.vue";
import {filter} from "../../../base/filter";
import {routerName, routerPath} from "../../../router";
import {useRoute} from "vue-router";

interface FilterViewFrameInfo {

}

export default defineComponent ({
    name: "FilterViewFrame",
    components: {
        FilterViewTag,
        NodeFilter,
        NodeFuncFilter,
        NodeReportFilter,
        NodeNotifyFilter
    },
    setup(){

        const route = useRoute()
        const data = reactive<FilterViewFrameInfo>({})

        onMounted(()=>{
            setRouteQuery()
        })

        function addTag(itemName, tagName, filterTagInfo, repeatTips){
            filter.addTag(String(route.name), itemName, tagName, filterTagInfo, repeatTips)
            setRouteQuery()
        }

        function clearTags(itemName){
            filter.clearTags(String(route.name), itemName)
            setRouteQuery()
        }

        function clearTag(itemName, tagName){
            filter.clearTag(String(route.name), itemName, tagName)
            setRouteQuery()
        }

        function setRouteQuery() {
            routerPath.toPath(String(route.name), {initPageNum:true, withPageSize:true}, route)
        }

        return {data, addTag, clearTags, clearTag, route, filter, routerName}
    }
})
</script>


<style scoped>
@import "../../../css/flex.css";

.filterViewFrameRow{
    width: 100%;
    height: 100%;
}

.filterViewTag{
    width: 100%;
    min-height: 38%;
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 15px;
}

.filterViewDivider{
    margin-top: 3px;
    margin-bottom: 15px;
}

.filterRow{
    width: 100%;
    margin-left: 10px;
    margin-right: 10px;
    min-height: 40%;
}

</style>