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
import {defineComponent, onMounted, reactive, watch} from "vue";
import Head from "../components/Head.vue";
import Aside from "../components/Aside.vue";
import NodeGroup from "./node/NodeGroup.vue";
import Node from "./node/Node.vue";
import NodeLink from "./node/NodeLink.vue";
import NodeFunc from "./node/NodeFunc.vue";
import NodeReport from "./node/NodeReport.vue";
import NodeNotify from "./node/NodeNotify.vue";
import NodeTest from "./node/NodeTest.vue";
import {websocket} from "../base/websocket";
import {protoManage} from "../proto/manage";
import {globals} from "../base/globals";
import {convert} from "../base/convert";
import {request} from "../base/request";
import {refresh} from "../base/refresh";
import {ElMessage} from "element-plus";


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
        NodeNotify,
        NodeTest
    },
    setup() {
        globals.globalsData.manager.Token = <string>localStorage.getItem(globals.globalsConfig.localStorageKey.token)
        onMounted(()=>{
            initWs()
            initUserInfo()
        })

        function initWs(){
            let msg = protoManage.Manager.create({
                Token:globals.globalsData.manager.Token
            })
            let byte = protoManage.Manager.encode(msg).finish()
            let str = convert.uint8ArrayToString(byte)
            websocket.wsConnect("ws://localhost/ws?parameter="+str)
        }

        function initUserInfo(){
            request.reqManagerByID(protoManage.Manager.create({})).then((response) => {
                response.Token = globals.globalsData.manager.Token
                globals.globalsData.manager = response
                initUserSetting(response.Setting)
            }).catch(error => {}).finally(()=>{})
        }

        function initUserSetting(data:string){
            if (data != null){
                if (globals.isJson(data)){
                    let setting = JSON.parse(data)
                    globals.globalsData.managerSetting.setting = setting
                }
                watch(() => globals.globalsData.managerSetting.setting, (newValue) => {
                    request.reqManagerUpdateSetting(protoManage.Manager.create({
                        Setting:JSON.stringify(newValue)
                    })).then((response) => {}).catch(error => {}).finally(()=>{})
                },{deep:true})
            }else{
                if (data != ""){
                    ElMessage.error("用户配置解析失败, 将使用默认配置")
                }
            }
            refresh.watchGlobalAutoRefresh()
        }
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
    width: 92%;
    height: 100%;
}

.headView{
    width: 100%;
    height: 12%;
}

.headDivider{
    margin-top: 0.1%;
    margin-bottom: 1%;
}

.bodyView{
    width: 100%;
    min-height: 85.7%;
    max-height: 85.7%;
}

.asideView{
    min-width: 15%;
    max-width: 15%;
    height: 100%;
    overflow-y:scroll;
}

.asideDivider{
    margin: 0px;
    height: 100%;
    width: 1px;
}

.routerView{
    flex: auto;
    height: 100%;
    overflow-y:scroll;
}
</style>