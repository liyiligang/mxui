<template>
    <el-card class="card">
        <template #header>
            <CardName :name="nodeType.Name"></CardName>
            <CardBase :id="nodeType.Base.ID" :time="nodeType.Base.UpdateTime"></CardBase>
        </template>
        <cardState name="节点" :link=routerPath.toNode(protoManage.Filter.create({TypeID:nodeType.Base.ID}))
                   :successCnt="data.nodeStateCount.NormalCount"
                   :warningCnt="data.nodeStateCount.WarnCount"
                   :dangerCnt="data.nodeStateCount.ErrorCount"
                   :loseCnt="data.nodeStateCount.UnknowCount">
        </cardState>
    </el-card>
</template>

<script lang="ts">
import {defineComponent, reactive, onMounted, PropType} from "vue";
import CardName from "../components/Card/CardName.vue"
import CardBase from "../components/Card/CardBase.vue"
import CardState from "../components/Card/CardState.vue"
import {routerPath} from "../router";
import {request} from "../base/request";
import {protoManage} from "../proto/manage"

interface NodeTypeCardInfo {
    nodeStateCount:protoManage.IStateCount
}

export default defineComponent ({
    name: "NodeTypeCard",
    props:{
        nodeType:Object as PropType<protoManage.NodeType>,
        nodeStateCount:Object as PropType<protoManage.IStateCount>,
    },
    components: {
        CardName,
        CardBase,
        CardState
    },
    setup(prop){
        const data = reactive<NodeTypeCardInfo>({nodeStateCount:protoManage.StateCount.create()})
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
@import "../css/card.css";
</style>