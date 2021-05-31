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

<!--    <el-row class="test1">-->
<!--        <el-row class="test2">-->
<!--            <el-row class="test3">-->
<!--                <el-row class="test4">-->
<!--                    <el-row class="test6"></el-row>-->
<!--                </el-row>-->
<!--                <el-row class="test5">-->
<!--                    <el-row class="test7"></el-row>-->
<!--                </el-row>-->
<!--            </el-row>-->
<!--        </el-row>-->
<!--    </el-row>-->

</template>

<script lang="ts">
import {defineComponent, onMounted, provide, reactive, watch} from "vue";
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
        onMounted(()=>{
            initWs()
            getManagerInfo()
        })

        function initWs(){
            let msg = protoManage.Manager.create({
                Token:globals.globalsData.token
            })
            let byte = protoManage.Manager.encode(msg).finish()
            let str = convert.uint8ArrayToString(byte)
            websocket.wsConnect("ws://localhost/ws?parameter="+str)
        }

        function getManagerInfo(){
            request.reqManagerByID(protoManage.Manager.create({})).then((response) => {
                parseUserSetting(response.Setting)
            }).catch(error => {}).finally(()=>{})
        }

        //用戶设置
        let userSettingObj:globals.UserSetting = {isPageFix:false}
        const userSetting = reactive(userSettingObj)
        provide<globals.UserSetting>('userSetting', userSetting)
        function parseUserSetting(data:string){
            if (globals.isJson(data)){
                userSettingObj = JSON.parse(data)
                userSetting.isPageFix = userSettingObj.isPageFix
            }

            watch(() => userSetting, (newValue) => {
                let str = JSON.stringify(newValue)
                request.reqManagerUpdateSetting(protoManage.Manager.create({
                    Setting:str
                })).then((response) => {}).catch(error => {}).finally(()=>{})
            },{deep:true})
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
    min-width: 1px;
}

.routerView{
    flex: auto;
    height: 100%;
    overflow-y:scroll;
}

.test1{
    height: 100%;
    width: 100%;
}

.test2{
    flex:1;
}

.test3{
    flex:1;
    display: flex;
    flex-direction:column;
}

.test4{
    flex: auto;
    height: 0;
    overflow-y:scroll;
}

.test5{
    flex: 0;
    width: 100%;
}

.test6{
    flex: 1 1 auto;
    height: 2000px;
    background: red;
}

.test7{
    flex: 1;
    height: 100px;
    background:cornflowerblue;
}
</style>