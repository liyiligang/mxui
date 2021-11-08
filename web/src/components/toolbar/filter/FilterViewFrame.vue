<template>
    <el-row class="filterViewFrameRow flex-row-center-start">
        <FilterViewTag class="filterViewTag" :tag-map="globals.getRouteDataFilter(String(route.name))" @clearTags="clearTags" @clearTag="clearTag"></FilterViewTag>
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
import FilterViewTag, {FilterTagInfo} from "./FilterViewTag.vue";
import NodeFilter from "./NodeFilter.vue";
import NodeFuncFilter from "./NodeFuncFilter.vue";
import NodeReportFilter from "./NodeReportFilter.vue";
import NodeNotifyFilter from "./NodeNotifyFilter.vue";
import {globals} from "../../../base/globals";
import {routerName, routerPath} from "../../../router";
import {useRoute, useRouter} from "vue-router";

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
        const router = useRouter()
        const data = reactive<FilterViewFrameInfo>({})

        onMounted(()=>{
            setRouteQuery()
        })

        function addTag(itemName, tagName, filterTagInfo, repeatTips){
            let filterMap = globals.getRouteDataFilter(String(route.name))
            if (itemName.trim() == "" || tagName.trim() == "" || filterTagInfo.sign.trim() == ""){
                globals.viewWarn("无效的标签")
                return
            }
            if (!filterMap.has(itemName)){
                filterMap.set(itemName, new Map<string, FilterTagInfo>())
            }
            let item =  filterMap.get(itemName)
            if (!item){
                return
            }
            console.log(1212, repeatTips)
            if (repeatTips && item.has(tagName)){
                globals.viewWarn(tagName  + " 已添加在<" + itemName + ">中")
                return
            }
            item.set(tagName, filterTagInfo)
            setRouteQuery()
        }

        function clearTags(itemName){
            globals.getRouteDataFilter(String(route.name)).delete(itemName)
            setRouteQuery()
        }

        function clearTag(itemName, tagName){
            let filterMap = globals.getRouteDataFilter(String(route.name))
            let item = filterMap.get(itemName)
            if (item){
                item.delete(tagName)
                if (item.size <= 0){
                    filterMap.delete(itemName)
                }
            }
            setRouteQuery()
        }

        function setRouteQuery() {
            routerPath.toPath(String(route.name), {initPageNum:true, withPageSize:true}, route)
        }

        return {data, addTag, clearTags, clearTag, route, globals, routerName}
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
    min-height: 40%;
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