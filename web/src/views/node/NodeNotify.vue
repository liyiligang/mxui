<template>
    <el-button class="loginButton" type="primary" round v-on:click="sendMsg()">发送</el-button>
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
            request.reqNodeNotifyList(protoManage.Filter.create({
                PageNum : 1,
                PageSize: 10
            })).then((response) => {
                console.log(response)
            }).catch(error => {}).finally(()=>{data.isLoading = false})
        }

        return {data, sendMsg}
    }
})
</script>

<style scoped>

</style>