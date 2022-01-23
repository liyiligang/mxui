<!--
Copyright 2021 liyiligang

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
-->

<template>
    <el-dropdown trigger="click" @command="handleCommand">
        <el-button class="settingButton" :icon="Setting" @click="data.dropdownShow=true" plain></el-button>
        <template #dropdown>
            <el-dropdown-menu>
                <el-dropdown-item :command="DropdownFlag.System">{{$t('setting.system')}}</el-dropdown-item>
                <el-dropdown-item v-if="isManager()" :command="DropdownFlag.User">{{$t('setting.user')}}</el-dropdown-item>
                <el-dropdown-item v-if="isManager()" :command="DropdownFlag.Top">{{$t('setting.topLink')}}</el-dropdown-item>
            </el-dropdown-menu>
        </template>
    </el-dropdown>
    <SystemSet v-model="data.systemSetVisible" :title="$t('setting.system')"></SystemSet>
    <UserSet v-if="isManager()" v-model="data.userSetVisible" :title="$t('setting.user')"></UserSet>
    <TopMenuSet v-if="isManager()" v-model="data.topMenuSetVisible" :title="$t('setting.topLink')"></TopMenuSet>
</template>

<script lang="ts">
import {defineComponent, reactive} from "vue";
import SystemSet from "../setting/SystemSet.vue";
import TopMenuSet from "../setting/TopMenuSet.vue";
import UserSet from "../setting/UserSet.vue";
import {Setting} from "@element-plus/icons";
import {globals} from "../../base/globals";
import {protoManage} from "../../proto/manage";

enum DropdownFlag {
	System = 'system',
    User = 'user',
    Top = 'topLink'
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

        function isManager():boolean{
            return globals.globalsData.manager.info.Level == protoManage.Level.LevelSuper
        }

        return {data, handleCommand, DropdownFlag, Setting, isManager}
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