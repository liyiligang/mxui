<template>
    <el-row class="head" type="flex" justify="space-between" align="middle">
        <img class="head-logo" src="../assets/logo.png" alt="admin">
        <el-row type="flex" justify="end" align="middle">
            <el-link v-for="i in data.topLinkList" class="head-link" type="primary" :underline="false" :href="i.Url" target="_blank">{{i.Name}}</el-link>
            <el-divider class="head-divider" direction="vertical"></el-divider>
            <el-button class="head-button" icon="el-icon-setting" @click="settingClick()" circle plain></el-button>
        </el-row>
    </el-row>
</template>

<script lang="ts">
import {defineComponent, onMounted, reactive} from "vue";
import {request} from "../base/request";
import {globals} from "../base/globals";
import {protoManage} from "../proto/manage";

interface HeadInfo {
    topLinkList: protoManage.ITopLink[]
}

export default defineComponent ({
    name: "Head",
    components: {

    },
    setup(){
        const data = reactive<HeadInfo>({topLinkList:[]})
        onMounted(()=>{
            reqTopLinkList()
            reqManagerList()
        })
        function settingClick(){

        }
        function reqTopLinkList(){
            request.reqTopLinkList().then((response) => {
                data.topLinkList = response.TopLinkList
            }).catch(error => {}).finally(()=>{})
        }
        function reqManagerList(){
            request.reqManagerList().then((response) => {
                globals.globalsData.managerList.clear()
                for (let i = 0; i < response.ManagerList .length; i++){
                    let key = Number(response.ManagerList[i].Base?.ID)
                    let val = response.ManagerList[i]
                    globals.globalsData.managerList.set(key, val)
                }
            }).catch(error => {}).finally(()=>{})
        }

        return {data, settingClick}
    }
})
</script>

<style scoped>
.head{
    width: 100%;
    height: 100%;
}

.head-logo{
    width: 150px;
}

.head-link{
    font-size: 18px;
    margin-right: 30px;
}

.head-divider{
    margin-left: 10px;
    margin-right: 30px;
    height: 22px;
}
.head-button{
    border:0px;
    font-size:30px;
    margin-right: 10px;
}
</style>