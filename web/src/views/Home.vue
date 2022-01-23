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
    <el-row class="home flex-row-center-start">
        <el-row class="headView">
            <Head></Head>
        </el-row>
        <el-divider class="headDivider"></el-divider>
        <el-row class="bodyView flex-row-start-start-nowrap">
            <el-row class="asideView">
                <Sidebar></Sidebar>
            </el-row>
            <el-divider class="asideDivider" direction="vertical"></el-divider>
            <el-row class="routerView">
                <router-view></router-view>
            </el-row>
            <el-row v-show="showToolbar()" class="toolbarView">
                <el-divider class="toolbarDivider" direction="vertical"></el-divider>
                <FilterViewFrame class="toolbarMain"></FilterViewFrame>
            </el-row>
        </el-row>
    </el-row>
</template>

<script lang="ts">
import {defineComponent, onMounted, reactive, watch} from "vue";
import Head from "../components/Head.vue";
import Sidebar from "../components/Sidebar.vue";
import Node from "./node/Node.vue";
import NodeFunc from "./node/NodeFunc.vue";
import NodeReport from "./node/NodeReport.vue";
import NodeNotify from "./node/NodeNotify.vue";
import NodeTest from "./node/NodeTest.vue";
import FilterViewFrame from "../components/toolbar/filter/FilterViewFrame.vue";
import {websocket} from "../base/websocket";
import {protoManage} from "../proto/manage";
import {globals} from "../base/globals";
import {convert} from "../base/convert";
import {request} from "../base/request";
import {refresh} from "../base/refresh";

export default defineComponent ({
    name: "Home",
    components: {
        Head,
        Sidebar,
        Node,
        NodeFunc,
        NodeReport,
        NodeNotify,
        NodeTest,
        FilterViewFrame
    },
    setup() {
        globals.globalsData.manager.info.Token = <string>localStorage.getItem(globals.globalsConfig.localStorageKey.token)
        onMounted(()=>{
            initWs()
            initUserInfo()
            refresh.watchGlobalAutoRefresh()
        })

        function initWs(){
            let msg = protoManage.Manager.create({
                Token:globals.globalsData.manager.info.Token
            })
            let byte = protoManage.Manager.encode(msg).finish()
            let str = convert.uint8ArrayToString(byte)
            websocket.wsConnect(globals.getWsHost()+"/ws?parameter="+str)
        }

        function initUserInfo(){
            request.reqManagerByID(protoManage.Manager.create({})).then((response) => {
                globals.updateManagerInfo(response)
            }).catch(error => {}).finally(()=>{})
        }

        function showToolbar():boolean {
            return globals.globalsData.tempSetting.setting.dataFilterView
        }

        return {showToolbar}
    }
})
</script>

<style scoped>
@import "../css/flex.css";

.home{
    width: 100%;
    height: 100%;
    overflow-x:hidden;
}

.headView{
    width: 100%;
    height: 80px;
}

.headDivider{
    margin: 0;
}

.bodyView{
    width: 100%;
    height: calc(100% - 82px);
}

.asideView{
    min-width: 240px;
    max-width: 240px;
    height: 100%;
    padding-top: 25px;
    overflow-y:auto;
}

.asideDivider{
    margin: 0;
    height: 100%;
}

.routerView{
    margin-top: 2px;
    flex: auto;
    height: calc(100% - 2px);
    overflow-y:auto;
}

.toolbarView{
    min-width: 326px;
    max-width: 326px;
    height: 100%;
}

.toolbarDivider{
    margin-left: 7px;
    margin-right: 0;
    height: 100%;
}

.toolbarMain{
    height: 100%;
    width: 317px;
    overflow-y:auto;
}
</style>