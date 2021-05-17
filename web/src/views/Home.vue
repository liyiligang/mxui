<template>
    <el-row class="home flex-row-center-start">
        <el-row class="homeView flex-row-center-start">
            <el-row class="headView">
                <Head></Head>
            </el-row>
            <el-divider class="headDivider"></el-divider>
            <el-row class="bodyView flex-row-start-start-nowrap">
                <el-row class="asideView">
                    <Aside></Aside>
                </el-row>
                <el-divider class="asideDivider" direction="vertical"></el-divider>
                <el-row class="routerView">
                    <router-view></router-view>
                </el-row>
            </el-row>
        </el-row>
    </el-row>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Head from "../components/Head.vue";
import Aside from "../components/Aside.vue";
import NodeGroup from "./node/NodeGroup.vue";
import Node from "./node/Node.vue";
import NodeLink from "./node/NodeLink.vue";
import NodeFunc from "./node/NodeFunc.vue";
import NodeReport from "./node/NodeReport.vue";
import NodeNotify from "./node/NodeNotify.vue";
import {websocket} from "../base/websocket";
import {protoManage} from "../proto/manage";
import {globals} from "../base/globals";

export default defineComponent ({
    name: "Home",
    components: {
        Head,
        Aside,
        NodeGroup,
        Node,
        NodeLink,
        NodeFunc,
        NodeReport,
        NodeNotify
    },
    mounted() {
        let msg = protoManage.Manager.create({
            Token:globals.globalsData.token
        })
        let byte = protoManage.Manager.encode(msg).finish()
        let str = globals.uint8ArrayToString(byte)
        websocket.wsConnect("ws://localhost/ws?parameter="+str)
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

.homeView{
    width: 75%;
    height: 100%;
}

.headView{
    width: 100%;
    min-height: 12%;
}

.headDivider{
    margin-top: 0.1%;
    margin-bottom: 1%;
}

.bodyView{
    width: 100%;
    min-height: 86.1%;
    max-height: 86.1%;
}

.asideView{
    min-width: 19%;
    height: 100%;
    overflow-y:scroll;
}

.asideDivider{
    margin: 0px;
    height: 100%;
}

.routerView{
    flex: auto;
    height: 100%;
    overflow-y:scroll;
}
</style>