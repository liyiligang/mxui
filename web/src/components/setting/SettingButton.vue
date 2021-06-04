<template>
    <el-dropdown trigger="click" @command="handleCommand">
        <el-button class="settingButton" icon="el-icon-setting" @click="data.dropdownShow=true" plain></el-button>
        <template #dropdown>
            <el-dropdown-menu>
                <el-dropdown-item :command="DropdownFlag.System">{{DropdownFlag.System}}</el-dropdown-item>
<!--                <el-dropdown-item :command="DropdownFlag.User">{{DropdownFlag.User}}</el-dropdown-item>-->
                <el-dropdown-item :command="DropdownFlag.Top">{{DropdownFlag.Top}}</el-dropdown-item>
            </el-dropdown-menu>
        </template>
    </el-dropdown>
    <SystemSet v-if="data.systemSetVisible == true" :dialogTitle="DropdownFlag.System"  v-model:dialogModel="data.systemSetVisible"></SystemSet>
    <TopMenuSet v-if="data.topMenuSetVisible == true" :dialogTitle="DropdownFlag.Top"  v-model:dialogModel="data.topMenuSetVisible"></TopMenuSet>
</template>

<script lang="ts">
import {defineComponent, reactive} from "vue";
import SystemSet from "./SystemSet.vue";
import TopMenuSet from "./TopMenuSet.vue";

enum DropdownFlag {
	System = "系统设置",
    User = "用户设置",
    Top = "顶栏设置"
}

interface SettingButtonInfo {
    dropdownShow:boolean
    systemSetVisible:boolean
    topMenuSetVisible:boolean
}

export default defineComponent ({
    name: "SettingButton",
    components: {
        SystemSet,
        TopMenuSet
    },
    setup(){

        const data = reactive<SettingButtonInfo>({dropdownShow:false, systemSetVisible:false,
            topMenuSetVisible:false})

        function handleCommand(command){
            switch (command) {
                case DropdownFlag.System:
                    console.log(data.systemSetVisible)
                    data.systemSetVisible = true
                    break
                case DropdownFlag.User:
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
    border:0px;
    padding: 0px;
    font-size:30px;
    margin-right: 15px;
}
</style>