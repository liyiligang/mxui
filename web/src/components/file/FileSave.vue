<!--
Copyright 2021 liyiligang

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
-->

<template>
    <el-tooltip effect="light" :content="$t('file.downloadTips')" placement="bottom">
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