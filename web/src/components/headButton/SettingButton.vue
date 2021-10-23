<template>
    <el-dropdown trigger="click" @command="handleCommand">
        <el-button class="settingButton" icon="el-icon-setting" @click="data.dropdownShow=true" plain></el-button>
        <template #dropdown>
            <el-dropdown-menu>
                <el-dropdown-item :command="DropdownFlag.System">{{DropdownFlag.System}}</el-dropdown-item>
                <el-dropdown-item :command="DropdownFlag.User">{{DropdownFlag.User}}</el-dropdown-item>
                <el-dropdown-item :command="DropdownFlag.Top">{{DropdownFlag.Top}}</el-dropdown-item>
            </el-dropdown-menu>
        </template>
    </el-dropdown>
    <SystemSet v-model="data.systemSetVisible" :title="DropdownFlag.System"></SystemSet>
    <UserSet v-model="data.userSetVisible" :title="DropdownFlag.User"></UserSet>
    <TopMenuSet v-model="data.topMenuSetVisible" :title="DropdownFlag.Top"></TopMenuSet>
</template>

<script lang="ts">
import {defineComponent, reactive} from "vue";
import SystemSet from "../setting/SystemSet.vue";
import TopMenuSet from "../setting/TopMenuSet.vue";
import UserSet from "../setting/UserSet.vue";

enum DropdownFlag {
	System = "系统设置",
    User = "用户设置",
    Top = "顶栏设置"
}

interface SettingButtonInfo {
    dropdownShow:boolean
    systemSetVisible:boolean
    userSetVisible:boolean
    topMenuSetVisible:boolean
}

export default defineComponent ({
    name: "SettingButton",
    components: {
        SystemSet,
        TopMenuSet,
        UserSet
    },
    setup(){

        const data = reactive<SettingButtonInfo>({dropdownShow:false, systemSetVisible:false,
            userSetVisible:false, topMenuSetVisible:false})

        function handleCommand(command){
            switch (command) {
                case DropdownFlag.System:
                    data.systemSetVisible = true
                    break
                case DropdownFlag.User:
                    data.userSetVisible = true
                    break
                case DropdownFlag.Top:
                    data.topMenuSetVisible = true
                    break
            }
        }
        return {data, handleCommand, DropdownFlag}
    }
})
</script>

<style scoped>
@import "../../css/color.css";

.settingButton{
    border:0;
    padding:0;
    font-size:25px;
}
</style>