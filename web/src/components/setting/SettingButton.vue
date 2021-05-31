<template>
    <el-dropdown trigger="click" @command="handleCommand">
        <el-button class="settingButton" icon="el-icon-setting" @click="data.show=true" plain></el-button>
        <template #dropdown>
            <el-dropdown-menu>
                <el-dropdown-item :command="DropdownFlag.System">{{DropdownFlag.System}}</el-dropdown-item>
                <el-dropdown-item :command="DropdownFlag.User">{{DropdownFlag.User}}</el-dropdown-item>
                <el-dropdown-item :command="DropdownFlag.Top">{{DropdownFlag.Top}}</el-dropdown-item>
            </el-dropdown-menu>
        </template>
    </el-dropdown>
    <el-dialog
        v-model="data.dialogVisible"
        width="860px"
        top="10vh"
        destroy-on-close>
        <template v-slot:title>
            <span class="settingDialogTitle color-text-normal">{{data.dropdownFlag}}</span>
        </template>
        <SystemSet></SystemSet>
    </el-dialog>
</template>

<script lang="ts">
import {defineComponent, reactive} from "vue";
import SystemSet from "./SystemSet.vue";

enum DropdownFlag {
	System = "系统设置",
    User = "用户设置",
    Top = "顶部设置"
}

interface SettingButtonInfo {
    show:boolean
    dialogVisible:boolean
    dropdownFlag:DropdownFlag
}

export default defineComponent ({
    name: "SettingButton",
    components: {
        SystemSet
    },
    setup(){

        const data = reactive<SettingButtonInfo>({show:false, dialogVisible:false,
            dropdownFlag:DropdownFlag.System})

        function handleCommand(command){
            data.dropdownFlag = command
            data.dialogVisible = true
            switch (command) {
                case DropdownFlag.System:
                    break
                case DropdownFlag.User:
                    break
                case DropdownFlag.Top:
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

.settingDialogTitle{
    font-size: 18px;
}
</style>