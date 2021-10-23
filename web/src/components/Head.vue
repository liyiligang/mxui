<template>
    <el-row class="headRow" type="flex" justify="space-between" align="middle">
        <img class="headLogo" src="../assets/logo.svg" alt="admin">
        <el-row class="headContentRow" type="flex" justify="end" align="middle">
            <el-row class="headLinkRow">
                <el-link v-for="i in data.topLinkList" class="headLink" type="primary" :underline="false" :href="i.Url" target="_blank">{{i.Name}}</el-link>
            </el-row>
            <el-divider class="headLinkDivider" direction="vertical"></el-divider>
            <el-row class="headButtonRow" type="flex" justify="space-around" align="middle">
                <FilterButton  v-model:show-filter-view="globals.globalsData.tempSetting.setting.dataFilterView"></FilterButton>
                <AutoRefreshButton v-model:is-auto-refresh="globals.globalsData.tempSetting.setting.autoRefresh"></AutoRefreshButton>
                <SettingButton></SettingButton>
            </el-row>
        </el-row>
    </el-row>
</template>

<script lang="ts">
import {defineComponent, onMounted, reactive, ref, provide} from "vue";
import {request} from "../base/request";
import {globals} from "../base/globals";
import {protoManage} from "../proto/manage";
import SettingButton from "./headButton/SettingButton.vue";
import FilterButton from "./headButton/FilterButton.vue";
import AutoRefreshButton from "./headButton/AutoRefreshButton.vue"

interface HeadInfo {
    topLinkList: protoManage.ITopLink[]
}

export default defineComponent ({
    name: "Head",
    components: {
        FilterButton,
        SettingButton,
        AutoRefreshButton
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
        return {data, globals}
    }
})
</script>

<style scoped>
.headRow{
    width: 100%;
    height: 100%;
    margin-right: 60px;
    margin-left: 60px;
    flex-wrap: nowrap;
}

.headLogo{
    width: 130px;
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
    overflow-x:auto;
    margin-left: 10px;
}

.headLink{
    font-size: 18px;
    margin-left: 15px;
    margin-right: 15px;
}

.headLinkDivider{
    margin-left: 10px;
    margin-right: 15px;
    margin-top: 3px;
    height: 22px;
}

.headButtonRow{
    height: 100%;
    width: 128px;
    margin-top: 4px;
}
</style>