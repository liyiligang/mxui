<template>
    <el-row class="nodeNotifyMessage" @keyup.enter.native="searchWithContent()">
        <el-button class="nodeNotifyMessageButton" icon="el-icon-search"
                   @click="searchWithContent()" plain ></el-button>
        <el-input class="nodeNotifyMessageInput" v-model="data.senderMessage"
                  placeholder="搜索内容" clearable @clear="searchWithContent()"></el-input>
    </el-row>
</template>

<script lang="ts">
import {defineComponent, onMounted, reactive} from "vue";
import {onBeforeRouteUpdate, RouteLocationNormalizedLoaded, useRoute, useRouter} from "vue-router";
import merge from "webpack-merge";
import {globals} from "../../base/globals";

interface NodeNotifyMessageFilterInfo {
    senderMessage:string

}
export default defineComponent ({
    name: "NodeNotifyMessageFilter",
    components: {

    },
    setup(){
        const data = reactive<NodeNotifyMessageFilterInfo>({senderMessage:""})
        const route = useRoute()
        const router = useRouter()

        onBeforeRouteUpdate(to => {
            initNodeNotifyMessageFilter(to)
        })

        onMounted(()=>{
            initNodeNotifyMessageFilter(route)
        })

        function initNodeNotifyMessageFilter(route:RouteLocationNormalizedLoaded){
            let senderMessage = String(route.query.senderMessage)
            senderMessage = globals.isNull(senderMessage)?"":senderMessage
            data.senderMessage = senderMessage
        }

        function searchWithContent(){
            let query = merge<any>(route.query, {'senderMessage':data.senderMessage,
                'pageSize':globals.globalsConfig.pageConfig.initSize,
                'pageNum':globals.globalsConfig.pageConfig.initNum})
            router.push({
                query:query
            })
        }
        return {data, searchWithContent}
    }
})
</script>

<style scoped>

.nodeNotifyMessage{
   flex-wrap: nowrap;
}

.nodeNotifyMessageInput{
    width: 240px;
}

.nodeNotifyMessageButton{
    padding: 0px;
    margin-right: 10px;
    border:0px;
    font-size:28px;
}

</style>