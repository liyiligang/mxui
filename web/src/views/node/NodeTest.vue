<template>
<!--    <el-input class="loginInput" v-model="data.msgType" placeholder="消息类型" clearable></el-input>-->
<!--    <el-input class="loginInput" v-model="data.msgState" placeholder="消息状态" clearable></el-input>-->
<!--    <el-input class="loginInput" v-model="data.msgData" placeholder="消息" clearable></el-input>-->
<!--    <el-button class="loginButton" type="primary" round @click="sendMsg()">发送</el-button>-->
    <vue-form v-model="data.formData" :form-footer="data.formFooter" :ui-schema="data.uiSchema" :schema="data.schema"></vue-form>
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

    formData:{}
    // uiSchema:{}
    schema:{}
    formFooter:{}
}

export default defineComponent ({
    name: "NodeTest",
    setup(){
        const data = reactive<NodeTestInfo>({isLoading:false, msgType:"", msgState:"", msgData:"",
            formData: {
                id:1,
                name:"aaa"
            },
            schema: {},
            formFooter:{
                show: false
            }
        })

        let text = "{\"type\": \"object\"," +
            "\"required\": [\"userName\"],\"properties\": {\"userName\": " +
            "{\"type\": \"integer\",\"title\": \"用户名\",\"default\": 1}}}"

        let kkk = "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"$ref\":\"#/definitions/TestUser\",\"definitions\":{\"TestUser\":{\"required\":[\"id\",\"name\"],\"properties\":{\"id\":{\"type\":\"integer\"},\"name\":{\"type\":\"string\",\"title\":\"用户名\",\"description\":\"用户名的名字\",\"default\":\"alex\",\"examples\":[\"joe\",\"lucy\"]}},\"additionalProperties\":false,\"type\":\"object\"}}}"

        // let aa = {
        //     "type": "object",
        //     "required": [
        //         "userName"
        //     ],
        //     "properties": {
        //         "userName": {
        //             "type": "string",
        //             "title": "用户名",
        //             "default": "Liu.Jun"
        //         }
        //     }
        // }
        // console.log(aa)
        let bb = JSON.parse(kkk)
        console.log(bb)

        data.schema = bb

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