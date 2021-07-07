<template>
    <NodeViewFrame :pageTotal="data.pageTotal" :isLoading="data.isLoading">
        <NodeLinkCard  v-for="i in data.nodeLinkList" :nodeLink="i"  @deleteNodeLink="deleteNodeLink"
                       :sourceNode=data.nodeMap.get(i.SourceID) :targetNode=data.nodeMap.get(i.TargetID)>
        </NodeLinkCard>
    </NodeViewFrame>
</template>

<script lang="ts">
import {defineComponent, reactive, onMounted, getCurrentInstance, onUnmounted} from "vue";
import {protoManage} from "../../proto/manage"
import {request} from "../../base/request"
import NodeLinkCard from "../../components/card/NodeLinkCard.vue"
import Page from "../../components/Page.vue"
import Empty from "../../components/Empty.vue"
import Load from "../../components/Load.vue"
import NodeViewFrame from "./NodeViewFrame.vue"
import {onBeforeRouteUpdate, RouteLocationNormalizedLoaded, useRoute} from "vue-router";
import {refresh} from "../../base/refresh";

interface NodeLinkInfo {
    nodeLinkList: protoManage.INodeLink[]
    nodeMap: Map<number, protoManage.INode>
    pageTotal:number
    isLoading:boolean
    refreshFlag:number
}

export default defineComponent ({
    name: "NodeLink",
    components: {
        NodeLinkCard,
        Page,
        Empty,
        Load,
        NodeViewFrame
    },
    setup(){
        const data = reactive<NodeLinkInfo>({nodeLinkList:[], nodeMap:new Map<number, protoManage.INode>(),
            pageTotal:0, isLoading:false, refreshFlag:0})
        const route = useRoute()
        const instance = getCurrentInstance()

        onBeforeRouteUpdate(to => {
            initNodeLink(to)
        })
        onMounted(()=>{
            initNodeLink(route)
        })
        onUnmounted(()=>{
            refresh.removeGlobalAutoRefresh(instance?.uid)
        })
        function initNodeLink(route:RouteLocationNormalizedLoaded){
            data.refreshFlag++
            data.isLoading = true
            let getNodeLinkList = (flag:number)=>{
                request.reqNodeLinkList(protoManage.Filter.create({
                    ID:Number(route.query.id),
                    SourceID:Number(route.query.sourceID),
                    TargetID:Number(route.query.targetID),
                    State:Number(route.query.state),
                    PageSize:Number(route.query.pageSize),
                    PageNum:Number(route.query.pageNum)
                })).then((response) => {
                    if (flag != data.refreshFlag){
                        return
                    }
                    data.pageTotal = response.Length
                    data.nodeLinkList = response.NodeLinkList
                    data.nodeMap.clear()
                    for (let i = 0; i < response.NodeList.length; i++){
                        let key = Number(response.NodeList[i].Base?.ID)
                        let val = response.NodeList[i]
                        data.nodeMap.set(key, val)
                    }
                }).catch(error => {}).finally(()=>{
                    if (flag != data.refreshFlag){
                        return
                    }
                    data.isLoading = false
                })
            }
            refresh.addGlobalAutoRefresh(instance?.uid, getNodeLinkList, data.refreshFlag)
        }

        function deleteNodeLink(nodeLink:protoManage.NodeLink){
            request.reqNodeLinkDel(protoManage.NodeLink.create({
                Base:protoManage.Base.create({ID:nodeLink.Base?.ID})
            })).then((response) => {
                deleteNodeLinkByID(Number(response.Base?.ID))
            }).catch(error => {}).finally(()=>{})
        }

        function deleteNodeLinkByID(nodeLinkID:number){
            for (let i = 0; i < data.nodeLinkList.length; i++){
                if (data.nodeLinkList[i].Base?.ID == nodeLinkID){
                    data.nodeLinkList.splice(i, 1)
                }
            }
            data.pageTotal = data.nodeLinkList.length
        }
        return {data, deleteNodeLink}
    }
})
</script>

<style scoped>

</style>