<template>
    <NodeViewFrame :pageTotal="data.pageTotal" :isLoading="data.isLoading">
        <NodeCard v-for="i in data.nodeList" :node="i" @deleteNode="deleteNode"></NodeCard>
    </NodeViewFrame>
</template>

<script lang="ts">
import {defineComponent, reactive, onMounted, getCurrentInstance, onUnmounted} from "vue";
import {protoManage} from "../../proto/manage"
import {request} from "../../base/request"
import {refresh} from "../../base/refresh";
import NodeCard from "../../components/card/NodeCard.vue"
import Page from "../../components/Page.vue"
import Empty from "../../components/Empty.vue"
import Load from "../../components/Load.vue"
import NodeViewFrame from "./NodeViewFrame.vue"
import {useRoute, onBeforeRouteUpdate, RouteLocationNormalizedLoaded} from "vue-router";
import {convert} from "../../base/convert";
import {routerPath} from "../../router";

interface NodeInfo {
    nodeList: protoManage.INode[]
    pageTotal:number
    isLoading:boolean
    refreshFlag:number
}

export default defineComponent ({
    name: "Node",
    components: {
        NodeCard,
        Page,
        Empty,
        Load,
        NodeViewFrame
    },
    setup(){
        const data = reactive<NodeInfo>({nodeList:[], pageTotal:0, isLoading:false, refreshFlag:0})
        const route = useRoute()
        const instance = getCurrentInstance()

        onBeforeRouteUpdate(to => {
            initNode(to)
        })
        onMounted(()=>{
            initNode(route)
        })
        onUnmounted(()=>{
            refresh.removeGlobalAutoRefresh(instance?.uid)
        })
        function initNode(route:RouteLocationNormalizedLoaded){
            data.refreshFlag++
            data.isLoading = true
            let getNodeList = (flag:number)=>{
                request.reqNodeList(protoManage.ReqNodeList.create({
                    Page:protoManage.Page.create({
                        Count:Number(route.query.pageSize),
                        Num:Number(route.query.pageNum) - 1,
                    }),
                    ID:convert.dataToArray(route.query.id),
                    Name:convert.dataToArray(route.query.name),
                    State:convert.dataToArray(route.query.state),
                    UpdateTime:convert.dataToTimeArray(route.query.updateTime),
                })).then((response) => {
                    if (flag != data.refreshFlag){
                        return
                    }
                    data.pageTotal = response.Length
                    data.nodeList = response.NodeList
                }).catch(error => {}).finally(()=>{
                    if (flag != data.refreshFlag){
                        return
                    }
                    data.isLoading = false
                })
            }
            refresh.addGlobalAutoRefresh(instance?.uid, getNodeList, data.refreshFlag)
        }

        function deleteNode(node:protoManage.Node){
            request.reqNodeDel(protoManage.Node.create({
                Base:protoManage.Base.create({ID:node.Base?.ID}),
            })).then((response) => {
                deleteNodeByID(Number(response.Base?.ID))
            }).catch(error => {}).finally(()=>{})
        }

        function deleteNodeByID(nodeID:number){
            for (let i = 0; i < data.nodeList.length; i++){
                if (data.nodeList[i].Base?.ID == nodeID){
                    data.nodeList.splice(i, 1)
                }
            }
            data.pageTotal = data.nodeList.length
        }
        return {data, deleteNode}
    }
})
</script>

<style scoped>

</style>