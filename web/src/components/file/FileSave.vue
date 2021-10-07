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

export default defineComponent ({
    name: "fileSave", props:{
        name:{
            type: String,
            default: ""
        },
        data:{
            type: String,
            default: ""
        },
        autoSave:{
            type: Boolean,
            default: false
        }
    },
    setup(props){

        onMounted(()=>{
            if (props.autoSave) {
                downloadFile()
            }
        })

        function downloadFile(){
            let dec = window.atob(props.data);
            let data = convert.stringToUint8Array(dec)
            let blob = new Blob([data], {type:"text/plain; charset=utf-8"})
            saveAs(blob, props.name)
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