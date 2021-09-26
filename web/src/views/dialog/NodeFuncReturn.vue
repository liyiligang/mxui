<template>
    <el-row class="mainRow" type="flex" justify="center" align="middle">
        <el-row v-if="nodeFuncCall.ReturnType===protoManage.NodeFuncReturnType.Json"
                class="contextRow" type="flex" justify="center" align="middle">
            <json-viewer class="contextJson" :value="returnObj"
                         :expand-depth=5 copyable boxed/>
        </el-row>
        <el-row v-else-if="nodeFuncCall.ReturnType===protoManage.NodeFuncReturnType.Link"
                type="flex" justify="center" align="middle">
            <el-tooltip effect="light" :content="returnObj.Link" placement="bottom">
                <el-link class="contextLink" type="primary" :underline="true" :href="returnObj.Link"
                         target="_blank">{{getLinkName(returnObj)}}</el-link>
            </el-tooltip>
        </el-row>
        <el-row v-else-if="nodeFuncCall.ReturnType===protoManage.NodeFuncReturnType.Media"
                class="contextRow" type="flex" justify="center" align="middle">
            <Player class="contextMedia" :options="returnObj"></Player>
        </el-row>
        <el-row v-else-if="nodeFuncCall.ReturnType===protoManage.NodeFuncReturnType.File"
                class="contextRow" type="flex" justify="center" align="middle">
            <el-tooltip effect="light" content="点击下载文件" placement="bottom">
                <el-button class="contextFile" type="text" @click="downloadFile(returnObj)">
                    {{getFileName(returnObj)}}</el-button>
            </el-tooltip>
        </el-row>
        <el-row v-else-if="nodeFuncCall.ReturnType===protoManage.NodeFuncReturnType.Table"
                class="contextRow" type="flex" justify="start" align="top">
            <NodeFuncReturnTable class="contextTable" :options="returnObj"></NodeFuncReturnTable>
        </el-row>
        <el-row v-else-if="nodeFuncCall.ReturnType===protoManage.NodeFuncReturnType.Charts"
                class="contextRow" type="flex" justify="start" align="top">
            <NodeFuncReturnCharts class="contextCharts" :options="getUnicode(returnObj)"></NodeFuncReturnCharts>
        </el-row>
        <el-row v-else class="contextRow color-text-main" type="flex" justify="center" align="middle">
            <div class="contextText">{{returnObj.Content}}</div>
        </el-row>
    </el-row>
</template>

<script lang="ts">

import {defineComponent, computed} from "vue";
import {protoManage} from "../../proto/manage";
import {defaultVal} from "../../base/defaultVal";
import {convert} from "../../base/convert"
import {globals} from "../../base/globals"
import {saveAs} from "file-saver"
import Player from "../../components/media/Player.vue"
import NodeFuncReturnTable from "../../components/table/NodeFuncReturnTable.vue"
import NodeFuncReturnCharts from "../../components/echarts/NodeFuncReturnCharts.vue"
import {consoleLog} from "echarts/types/src/util/log";

export default defineComponent ({
    name: "NodeFuncReturn",
    components: {
        Player,
        NodeFuncReturnTable,
        NodeFuncReturnCharts
    },
    props:{
        nodeFuncCall:{
            type: protoManage.NodeFuncCall,
            default: defaultVal.getDefaultProtoNodeFuncCall()
        }
    },
    setup(props){

        const returnObj = computed(()=> {
            return globals.getJson(props.nodeFuncCall.ReturnVal)
        })

        function getLinkName(linkInfo){
            if (linkInfo.AutoOpen){
                window.open(linkInfo.Link, '_blank')
                linkInfo.AutoOpen = false
            }
            return linkInfo.Name == "" ? linkInfo.Link:linkInfo.Name
        }

        function getFileName(fileInfo){
            if (fileInfo.AutoDownload) {
                downloadFile(fileInfo)
                fileInfo.AutoDownload = false
            }
            return fileInfo.Name
        }

        function getUnicode(str){
            return str.Content
        }

        function downloadFile(fileInfo){
            let dec = window.atob(fileInfo.Content);
            let data = convert.stringToUint8Array(dec)
            let blob = new Blob([data], {type:"text/plain; charset=utf-8"})
            saveAs(blob, fileInfo.Name)
        }
        return {convert, globals, protoManage, getLinkName, returnObj, getFileName, downloadFile,
            getUnicode}
    }
})
</script>

<style scoped>
@import "../../css/color.css";
.mainRow{
    height: 100%;
}

.contextRow{
    width: 100%;
    height: 100%;
}

.contextText{
    width: 100%;
    height: 100%;
    font-size: 16px;
    overflow-y:scroll;
}

.contextJson{
    width: 100%;
    height: 100%;
}

.contextLink{
    font-size: 18px;
    overflow-y:scroll;
}

.contextFile{
    font-size: 18px;

}

.contextMedia{
    width: 100%;
    height: 100%;
}

.contextTable{
    width: 100%;
    height: 100%;
}

.contextCharts{
    width: 100%;
    height: 100%;
}
</style>