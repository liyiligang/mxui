<template>
    <el-row class="mainRow" v-loading="loading" element-loading-background="rgba(255, 255, 255, 0.6)"
            type="flex" justify="center" align="middle">
        <el-row v-if="nodeFuncCall.ReturnType===protoManage.NodeFuncReturnType.NotReturn"
                class="contextRow" type="flex" justify="center" align="middle">
            <Empty class="contextEmpty" description="此次调用方法沒有返回值"></Empty>
        </el-row>
        <el-row v-else-if="nodeFuncCall.ReturnType===protoManage.NodeFuncReturnType.Error"
                class="contextRow" type="flex" justify="center" align="middle">
            <div class="contextError">{{returnObj}}</div>
        </el-row>
        <el-row v-else-if="nodeFuncCall.ReturnType===protoManage.NodeFuncReturnType.Text"
                class="contextRow" type="flex" justify="center" align="middle">
            <div class="contextText">{{returnObj.Data}}</div>
        </el-row>
        <el-row v-else-if="nodeFuncCall.ReturnType===protoManage.NodeFuncReturnType.Json"
                class="contextRow" type="flex" justify="center" align="middle">
            <json-viewer class="contextJson" :value="returnObj.Data"
                         :expand-depth=5 copyable/>
        </el-row>
        <el-row v-else-if="nodeFuncCall.ReturnType===protoManage.NodeFuncReturnType.Link"
                class="contextRow" type="flex" justify="center" align="middle">
            <linkJump class="contextLink" :name="returnObj.Name" :link="returnObj.Link" :autoOpen="returnObj.AutoOpen"
                      :blank="returnObj.Blank"></linkJump>
        </el-row>
        <el-row v-else-if="nodeFuncCall.ReturnType===protoManage.NodeFuncReturnType.Image"
                class="contextRow" type="flex" justify="center" align="middle">
            <el-image class="contextImage" :src="returnObj.URL" :fit="returnObj.Fit"></el-image>
        </el-row>
        <el-row v-else-if="nodeFuncCall.ReturnType===protoManage.NodeFuncReturnType.Media"
                class="contextRow" type="flex" justify="center" align="middle">
            <Player class="contextMedia" :options="returnObj"></Player>
        </el-row>
        <el-row v-else-if="nodeFuncCall.ReturnType===protoManage.NodeFuncReturnType.File"
                class="contextRow" type="flex" justify="center" align="middle">
            <FileSave class="contextFile" :name="returnObj.Name" :data="returnObj.Data"
                      :autoSave="returnObj.AutoSave"></FileSave>
        </el-row>
        <el-row v-else-if="nodeFuncCall.ReturnType===protoManage.NodeFuncReturnType.Table"
                class="contextRow" type="flex" justify="start" align="top">
            <NodeFuncReturnTable class="contextTable" :options="returnObj"></NodeFuncReturnTable>
        </el-row>
        <el-row v-else-if="nodeFuncCall.ReturnType===protoManage.NodeFuncReturnType.Charts"
                class="contextRow" type="flex" justify="start" align="top">
            <NodeFuncReturnCharts class="contextCharts" :options="returnObj.Data"></NodeFuncReturnCharts>
        </el-row>
        <el-row v-else class="contextRow color-text-main" type="flex" justify="center" align="middle">
            <div class="contextText">{{nodeFuncCall.ReturnVal}}</div>
        </el-row>
    </el-row>
</template>

<script lang="ts">

import {defineComponent, computed} from "vue";
import {protoManage} from "../../proto/manage";
import {defaultVal} from "../../base/defaultVal";
import {convert} from "../../base/convert"
import {globals} from "../../base/globals"
import Player from "../../components/media/Player.vue"
import LinkJump from "../../components/link/LinkJump.vue"
import FileSave from "../../components/file/FileSave.vue"
import NodeFuncReturnTable from "../../components/table/NodeFuncReturnTable.vue"
import NodeFuncReturnCharts from "../../components/echarts/NodeFuncReturnCharts.vue"
import Empty from "../../components/Empty.vue"

export default defineComponent ({
    name: "NodeFuncReturn",
    components: {
        Empty,
        Player,
        LinkJump,
        FileSave,
        NodeFuncReturnTable,
        NodeFuncReturnCharts
    },
    props:{
        nodeFuncCall:{
            type: protoManage.NodeFuncCall,
            default: defaultVal.getDefaultProtoNodeFuncCall()
        },
        loading:{
            type: Boolean,
            default: false
        }
    },
    setup(props){

        const returnObj = computed(()=> {
            return globals.getJson(props.nodeFuncCall.ReturnVal)
        })


        return {convert, globals, protoManage, returnObj}
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

.contextEmpty{
    width: 100%;
    height: 100%;
}

.contextError{
    width: 100%;
    height: 100%;
    font-size: 16px;
    color: #F56C6C;
    overflow-y:scroll;
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
    overflow-y:scroll;
}

.contextLink{
    width: 100%;
    height: 100%;
}

.contextFile{
    width: 100%;
    height: 100%;;
}

.contextImage{
    width: 100%;
    height: 100%;
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