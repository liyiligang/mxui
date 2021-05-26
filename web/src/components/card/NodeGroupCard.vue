<template>
    <el-card class="card">
        <template #header>
            <CardName :name="nodeGroup.Name" :id="nodeGroup.Base.ID"></CardName>
            <CardBase :id="nodeGroup.Base.ID" :time="nodeGroup.Base.UpdateTime"></CardBase>
        </template>
        <cardState name="节点" :link=routerPath.toNode(protoManage.Filter.create({GroupID:nodeGroup.Base.ID}))
                   :successCnt="data.nodeStateCount.NormalCount"
                   :warningCnt="data.nodeStateCount.WarnCount"
                   :dangerCnt="data.nodeStateCount.ErrorCount"
                   :loseCnt="data.nodeStateCount.UnknowCount">
        </cardState>
    </el-card>
</template>

<script lang="ts">
import {defineComponent, reactive, onMounted, PropType} from "vue";
import CardName from "../cardItem/CardName.vue"
import CardBase from "../cardItem/CardBase.vue"
import CardState from "../cardItem/CardState.vue"
import {routerPath} from "../../router";
import {request} from "../../base/request";
import {protoManage} from "../../proto/manage"

interface NodeGroupCardInfo {
    nodeStateCount:protoManage.IStateCount
}

export default defineComponent ({
    name: "NodeGroupCard",
    props:{
        nodeGroup:Object as PropType<protoManage.NodeGroup>,
        nodeStateCount:Object as PropType<protoManage.IStateCount>,
    },
    components: {
        CardName,
        CardBase,
        CardState
    },
    setup(prop){
        const data = reactive<NodeGroupCardInfo>({nodeStateCount:protoManage.StateCount.create()})
        onMounted(()=>{
            if (prop.nodeStateCount != undefined){
                data.nodeStateCount = prop.nodeStateCount
            }
        })
        return {data, routerPath, request, protoManage}
    }
})
</script>

<style scoped>
@import "../../css/card.css";
</style>