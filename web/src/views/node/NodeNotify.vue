<template>

</template>

<script lang="ts">
import {defineComponent, onMounted, reactive} from "vue";
import {protoManage} from "../../proto/manage";
import {request} from "../../base/request";

interface NodeNotifyInfo {
    isLoading:boolean
    msgType:""
    msgState:""
    msgData:""
}

export default defineComponent ({
    name: "NodeNotify",
    setup(){
        const data = reactive<NodeNotifyInfo>({isLoading:false, msgType:"", msgState:"", msgData:""})

        function sendMsg(){
            request.reqNodeNotifyNew(protoManage.NodeNotify.create({
                SenderType:Number(data.msgType),
                State:Number(data.msgState),
                Message:data.msgData
            })).then((response) => {
            }).catch(error => {}).finally(()=>{data.isLoading = false})
        }

        return {data, sendMsg}
    }
})
</script>

<style scoped>

</style>