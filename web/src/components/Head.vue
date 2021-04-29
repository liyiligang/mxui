<template>
    <el-row class="row" type="flex" justify="space-between" align="middle">
        <el-col :span="6">
            <el-row class="row" type="flex" justify="start" align="middle">
                <img class="logo" src="../assets/logo.png" alt="admin">
            </el-row>
        </el-col>
        <el-col :span="18">
            <el-row class="row" type="flex" justify="end" align="middle">
                <el-link v-for="i in data.topLinkList" class="head-link" type="primary" :underline="false" :href="i.Url" target="_blank">{{i.Name}}</el-link>
                <el-divider class="divider" direction="vertical"></el-divider>
                <el-button class="button" icon="el-icon-setting" @click="settingClick()" circle plain></el-button>
            </el-row>
        </el-col>
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
.logo{
    width: 150px;
}
.row{
    min-height: 80px;
}
.head-link{
    font-size: 18px;
    margin-right: 30px;
}
.divider{
    margin-left: 10px;
    margin-right: 40px;
    height: 22px;
}
.button{
    border:0px;
    cursor: pointer;
    font-size:30px;
    text-align:center;
    margin-right: 10px;
}
.button.is-circle {
    padding: 0px;
}
</style>