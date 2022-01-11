<template>
<!--    <el-upload-->
<!--        action="http://localhost:80/uploadFile"-->
<!--        :data="{token: globals.globalsData.manager.info.Token}"-->
<!--        multiple-->
<!--        :on-success="success"-->
<!--        :http-request="request"-->
<!--        :on-error="error"-->
<!--        :on-preview="preview"-->
<!--        :on-progress="progress"-->
<!--        :file-list="data.fileList">-->
<!--        <el-button size="small" type="primary">Click to 11111111111111upload</el-button>-->
<!--    </el-upload>-->
<!--    :http-request="request"-->
    <vue-form class="form" v-model="data.formData" :form-footer="data.formFooter"
              :ui-schema="data.uiSchema" :schema="data.schema"></vue-form>
</template>

<script lang="ts">
import {defineComponent, onMounted, reactive} from "vue";
import {globals} from "../../base/globals";
import axios from "axios";
import * as SparkMD5 from "spark-md5";
import {protoManage} from "../../proto/manage";
import { request } from "../../base/request";


interface NodeTestInfo {
    fileList:[]
    formData:{}
    schema:{}
    uiSchema:{}
    formFooter:{}
}

export default defineComponent ({
    name: "NodeTest",
    components: {
    },
    setup(){
        const data = reactive<NodeTestInfo>({fileList:[], formData:{}, uiSchema:{},
            schema:{
                "title": "文件上传",
                "type": "object",
                "properties": {
                    "imgUrl": {
                        "title": "单个图片",
                        "type": "string",
                        "ui:action": "http://localhost:80/uploadFile",
                        "ui:data":{token: globals.globalsData.manager.info.Token},
                        "ui:http-request": request111,
                        "ui:on-error": error,
                        "ui:on-preview": preview,
                        "ui:before-remove": remove,
                        "ui:responseFileUrl":responseUrl,
                        "ui:widget": "UploadWidget",
                        "ui:btnText": "上传按钮文案配置",
                        // "ui:file-list":[{name:"aa.mp4", url:"asdasda_aa.mp4"}, {name:"bb", url:"asas"}]
                    },
                    "select": {
                        "title": "选择器",
                        "type": "string",
                        "ui:widget": "RadioWidget",
                        "enum": [
                            "1",
                            "2",
                            "3"
                        ],
                        "enumNames": [
                            "一",
                            "二",
                            "三"
                        ]
                    }
                }
            }, formFooter:{show: false}})

        function request111(para){
            let progress = {percent:0}
            para.onProgress(progress)
            globals.calcFileMd5(para.file, (md5:string)=>{
                let resourceInfo = protoManage.NodeResource.create({
                    Name: para.file.name,
                    Md5: md5,
                    Sizes: para.file.size,
                    Type:protoManage.NodeResourceType.NodeResourceTypeCache
                })
                request.reqNodeResourceUpload(resourceInfo, para.file,  (progressEvent) => {
                    if (progressEvent.lengthComputable) {
                        progressEvent.percent = Math.round(
                            (progressEvent.loaded * 100) / progressEvent.total
                        );
                        para.onProgress(progressEvent)
                    }
                }).then((response) => {
                    para.onSuccess({name:response.Name, url:response.Md5})
                })
            })
        }

        function success(response, file, fileList) {
            console.log(response, file, fileList, data.fileList, "成功")
        }

        function error(err, file, fileList) {
            console.log(err, file, fileList, "失败")
        }

        function preview(file) {
            let fileInfo =  {url:"", name: ""}
            if (file?.url) {
                fileInfo = file
            }else if (file?.response?.url) {
                fileInfo = file?.response
            }
            request.reqNodeResourceDownLoad(protoManage.NodeResource.create({
                UUID: fileInfo.url,
                Name: fileInfo.name
            }))
            return true
        }

        async function remove(file, fileList) {
            let isOK = false
            let url = ""
            if (file?.url) {
                url = file?.url
            }else if (file?.response?.url) {
                url = file?.response?.url
            }
            await request.reqNodeResourceDel(protoManage.NodeResource.create({
                UUID:url
            })).then((response) => {
                isOK = true
            })
            return isOK
        }

        function progress(event, file, fileList) {
            console.log("进度", event)
            return true
        }

        function responseUrl(res) {
            return res.url
        }

        return {data, request111, success, error, preview, remove, globals, progress, responseUrl}
    }
})
</script>

<style scoped>

</style>