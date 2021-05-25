<template>
    <el-input class="loginInput" v-model="data.msgType" placeholder="消息类型" clearable></el-input>
    <el-input class="loginInput" v-model="data.msgState" placeholder="消息状态" clearable></el-input>
    <el-input class="loginInput" v-model="data.msgData" placeholder="消息" clearable></el-input>
    <el-button class="loginButton" type="primary" round @click="sendMsg()">发送</el-button>
</template>

<script lang="ts">
import {defineComponent, onMounted, reactive} from "vue";
import {protoManage} from "../../proto/manage";
import {request} from "../../base/request";

interface NodeTestInfo {
    isLoading:boolean
    msgType:""
    msgState:""
    msgData:""
}

export default defineComponent ({
    name: "NodeTest",
    setup(){
        const data = reactive<NodeTestInfo>({isLoading:false, msgType:"", msgState:"", msgData:""})

        function sendMsg(){
            request.reqNodeTest(protoManage.ReqNodeTest.create({
                Type:Number(data.msgType),
                State:Number(data.msgState),
                Message:data.msgData
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