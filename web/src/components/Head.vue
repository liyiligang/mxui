<template>
    <el-row class="head" type="flex" justify="space-between" align="middle">
        <img class="headLogo" src="../assets/logo.png" alt="admin">
        <el-row class="headContentRow" type="flex" justify="end" align="middle">
            <el-row class="headLinkRow">
                <el-link v-for="i in data.topLinkList" class="headLink" type="primary" :underline="false" :href="i.Url" target="_blank">{{i.Name}}</el-link>
            </el-row>
            <el-divider class="headDivider" direction="vertical"></el-divider>
            <SettingButton></SettingButton>
        </el-row>
    </el-row>
</template>

<script lang="ts">
import {defineComponent, onMounted, reactive, ref, provide} from "vue";
import {request} from "../base/request";
import {globals} from "../base/globals";
import {protoManage} from "../proto/manage";
import SettingButton from "./setting/SettingButton.vue";

interface HeadInfo {
    topLinkList: protoManage.ITopLink[]
}

export default defineComponent ({
    name: "Head",
    components: {
        SettingButton
    },
    setup(){
        const data = reactive<HeadInfo>({topLinkList:[]})
        onMounted(()=>{
            reqTopLinkList()
            reqManagerList()
        })
        function reqTopLinkList(){
            request.reqTopLinkList().then((response) => {
                data.topLinkList = response.TopLinkList
            }).catch(error => {}).finally(()=>{})
        }
        function reqManagerList(){
            request.reqManagerNickNameList().then((response) => {
                globals.globalsData.managerList.clear()
                for (let i = 0; i < response.ManagerList .length; i++){
                    let key = Number(response.ManagerList[i].Base?.ID)
                    let val = response.ManagerList[i]
                    globals.globalsData.managerList.set(key, val)
                }
            }).catch(error => {}).finally(()=>{})
        }

        //顶栏刷新
        const topLinkListUpdate = () => {
            reqTopLinkList()
        }
        provide('topLinkListUpdate', topLinkListUpdate)

        //管理员刷新
        const ManagerListUpdate = () => {
            reqManagerList()
        }
        provide('managerListUpdate', ManagerListUpdate)
        return {data}
    }
})
</script>

<style scoped>
.head{
    width: 100%;
    height: 100%;
    flex-wrap: nowrap;
}

.headLogo{
    width: 150px;
}

.headContentRow{
    flex-wrap: nowrap;
    height: 100%;
    flex: auto;
}

.headLinkRow{
    width: 0;
    height: 100%;
    flex: auto;
    flex-wrap: nowrap;
    flex-direction: row-reverse;
    align-content: center;
    white-space: nowrap;
    overflow-x:scroll;
    margin-left: 10px;
}

.headLink{
    font-size: 18px;
    margin-left: 15px;
    margin-right: 15px;
}

.headDivider{
    margin-left: 10px;
    margin-right: 30px;
    height: 22px;
}
</style>