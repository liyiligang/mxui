<template>
    <el-tooltip effect="light" content="点击下载文件" placement="bottom">
        <el-button class="fileButton" type="text" @click="downloadFile()">
            {{name}}</el-button>
    </el-tooltip>
</template>

<script lang="ts">

import {defineComponent, onMounted} from "vue";
import {convert} from "../../base/convert";
import {saveAs} from "file-saver";
import {request} from "../../base/request";
import {protoManage} from "../../proto/manage";

export default defineComponent ({
    name: "fileSave", props:{
        name:{
            type: String,
            default: ""
        },
        id:{
            type: Number,
            default: 0
        }
    },
    setup(props){

        function downloadFile(){
            request.reqNodeResourceDownLoad(protoManage.NodeResource.create({
                Base: protoManage.Base.create({ID: props.id}),
                Name: props.name
            }))
        }

        return {downloadFile}
    }
})
</script>

<style scoped>

.fileButton{
    font-size: 18px;
}
</style>