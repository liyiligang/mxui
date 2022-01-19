<!--
Copyright 2021 liyiligang

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
-->

<template>
    <el-pagination
        class="page"
        layout="total, sizes, prev, pager, next, jumper"
        :page-sizes="data.pageSizeList" :current-page="data.pageNum"
        v-model:page-size="data.pageSize" :total=pageTotal
        @size-change="pageSizeChange"
        @current-change="pageNumChange">
    </el-pagination>
</template>

<script lang="ts">
import {defineComponent, onMounted, reactive} from "vue";
import {globals} from "../base/globals"
import {useRouter, useRoute, onBeforeRouteUpdate, RouteLocationNormalizedLoaded} from "vue-router";
import merge from "webpack-merge"

export default defineComponent ({
    name: "Page",
    props:{
        pageTotal:{
            type: Number,
            default: 0
        }
    },
    setup(){
        const route = useRoute()
        const router = useRouter()

        const data = reactive({
            pageNum:globals.globalsConfig.pageConfig.initNum,
            pageSize:globals.globalsConfig.pageConfig.initSize,
            pageSizeList:new Array<number>(),
        })

        onBeforeRouteUpdate(to => {
            initPage(to)
        })

        onMounted(()=>{
            initPage(route)
            initPageList()
        })

        function initPage(route:RouteLocationNormalizedLoaded){
            let pageSize = Number(route.query.pageSize)
            let pageNum = Number(route.query.pageNum)
            pageSize = globals.isNull(pageSize)?globals.globalsConfig.pageConfig.initSize:pageSize
            pageNum = globals.isNull(pageNum)?globals.globalsConfig.pageConfig.initSize:pageNum

            if (pageSize != data.pageSize) {
                data.pageSize = pageSize
            }
            if (pageNum != data.pageNum) {
                data.pageNum = pageNum
            }
        }

        function initPageList(){
            data.pageSizeList.length = 0
            for(let i = 0; i < globals.globalsConfig.pageConfig.sizeList.length; i++){
                if (i == 0) {
                    if (data.pageSize < globals.globalsConfig.pageConfig.sizeList[i]) {
                        data.pageSizeList.push(data.pageSize)
                    }
                }else {
                    if (data.pageSize < globals.globalsConfig.pageConfig.sizeList[i] &&
                        data.pageSize > globals.globalsConfig.pageConfig.sizeList[i-1]){
                        data.pageSizeList.push(data.pageSize)
                    }
                }
                data.pageSizeList.push(globals.globalsConfig.pageConfig.sizeList[i])
                if (i == globals.globalsConfig.pageConfig.sizeList.length - 1) {
                    if (data.pageSize > globals.globalsConfig.pageConfig.sizeList[i]) {
                        data.pageSizeList.push(data.pageSize)
                    }
                }
            }
        }

        function pageSizeChange(val:number){
            let query = merge<any>(route.query, {'pageSize':data.pageSize, 'pageNum':data.pageNum})
            router.push({
                query:query
            })
        }

        function pageNumChange(val:number){
            if (data.pageNum != val){
                data.pageNum = val
                let query = merge<any>(route.query, {'pageSize':data.pageSize, 'pageNum':data.pageNum})
                router.push({
                    query: query
                })
            }
        }
        return {data, globals, pageSizeChange, pageNumChange}
    }
})
</script>

<style scoped>
.page{
    margin: 0px;
    padding: 0px;
}
</style>