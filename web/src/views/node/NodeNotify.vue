<template>
    <el-row class="nodeNotify">
        <el-row class="nodeNotifyFilter" @keyup.enter.native="searchWithContent()">
            <el-button type="primary" icon="el-icon-search" v-on:click="searchWithContent()">搜索</el-button>
            <el-input class="nodeNotifySearchInput" v-model="data.search" placeholder="搜索内容" clearable @clear="searchWithContent()"></el-input>
            <SelectFilter></SelectFilter>
        </el-row>
        <el-row class="nodeNotifyFrame">
            <NodeViewFrame :pageTotal="data.pageTotal" :isLoading="data.isLoading">
                <NodeNotifyTable class="nodeNotifyTable" :tableData="data.nodeNotifyList" :nodeMap="data.nodeMap" ></NodeNotifyTable>
            </NodeViewFrame>
        </el-row>
    </el-row>
</template>

<script lang="ts">
import {defineComponent, onMounted, reactive} from "vue";
import {protoManage} from "../../proto/manage";
import {request} from "../../base/request";
import {onBeforeRouteUpdate, RouteLocationNormalizedLoaded, useRoute, useRouter} from "vue-router";
import NodeViewFrame from "../../components/NodeViewFrame.vue"
import NodeNotifyTable from "../../components/table/NodeNotifyTable.vue"
import SelectFilter from "../../components/fifter/SelectFilter.vue"
import merge from "webpack-merge";
import {globals} from "../../base/globals";

interface NodeNotifyInfo {
    isLoading:boolean
    pageTotal:number
    search:string
    nodeNotifyList:Array<protoManage.INodeNotify>
    nodeMap: Map<number, protoManage.INode>
}

export default defineComponent ({
    name: "NodeNotify",
    components: {
        NodeViewFrame,
        NodeNotifyTable,
        SelectFilter
    },
    setup(){
        const data = reactive<NodeNotifyInfo>({isLoading:false, pageTotal:0, search:"",
            nodeNotifyList:[], nodeMap:new Map<number, protoManage.INode>()})
        const route = useRoute()
        const router = useRouter()

        function searchWithContent(){
            let query = merge<any>(route.query, {'search':data.search,
                'pageSize':globals.globalsConfig.pageConfig.initSize,
                'pageNum':globals.globalsConfig.pageConfig.initNum})
            router.push({
                query:query
            })
        }

        onBeforeRouteUpdate(to => {
            initNodeNotify(to)
        })
        onMounted(()=>{
            initNodeNotify(route)
        })
        function initNodeNotify(route:RouteLocationNormalizedLoaded){
            data.isLoading = true
            request.reqNodeNotifyList(protoManage.Filter.create({
                PageSize:Number(route.query.pageSize),
                PageNum:Number(route.query.pageNum),
                Message:String(route.query.search)
            })).then((response) => {
                data.pageTotal = response.Length
                data.nodeNotifyList.length = 0
                for (let i = 0; i < response.NodeNotifyList.length; i++){
                    data.nodeNotifyList.push(response.NodeNotifyList[i])
                }
                data.nodeMap.clear()
                for (let i = 0; i < response.NodeList.length; i++){
                    let key = Number(response.NodeList[i].Base?.ID)
                    let val = response.NodeList[i]
                    data.nodeMap.set(key, val)
                }
            }).catch(error => {}).finally(()=>{data.isLoading = false})
        }

        return {data, searchWithContent}
    }
})
</script>

<style scoped>
@import "../../css/flex.css";

.nodeNotify{
    width: 100%;
    /*height: 100%;*/
    flex-direction: column;
}

.nodeNotifyFilter{
    height: 40px;
    margin-bottom: 15px;
    width: 100%;
}

.nodeNotifyFrame{
    width: 100%;
    flex:auto;
}

.nodeNotifySearchInput{
    width: 300px;
}

.nodeNotifyTable{
    width: 99%;
    margin-left: 0.5%;
}

</style>