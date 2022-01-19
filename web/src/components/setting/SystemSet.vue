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
    <DialogViewFrame :modelValue="modelValue" @update:modelValue="modelValueUpdate" :title="title" width="620px">
        <el-row class="systemSetMainRow">
            <el-row class="systemSetGroupRow">
                <el-row class="systemSetItemRow">
                    <el-row class="systemSetBlockRow">
                        <div>{{$t('setting.systemSet.modifyPassword')}}</div>
                        <el-button type="primary" plain @click="updatePassword">{{$t('setting.systemSet.modifyPasswordButton')}}</el-button>
                        <PasswordReset v-model="data.passwordResetVisible" :title="$t('setting.systemSet.modifyPasswordDialog')"></PasswordReset>
                    </el-row>
                    <el-row class="systemSetBlockRow">
                        <div>{{$t('setting.systemSet.loginOut')}}</div>
                        <el-button type="danger" plain @click="exitLogin">{{$t('setting.systemSet.loginOutButton')}}</el-button>
                    </el-row>
                </el-row>
                <el-row class="systemSetItemRow">
                    <el-row class="systemSetBlockRow">
                        <div>{{$t('setting.systemSet.fixPage')}}</div>
                        <el-switch v-model="globals.globalsData.managerSetting.setting.isPageFix"
                                   active-color="#13ce66" inactive-color="#ff4949"></el-switch>
                    </el-row>
                    <el-row class="systemSetBlockRow">
                        <div>{{$t('setting.systemSet.language')}}</div>
                        <el-select class="systemSetLanguage" v-model="globals.globalsData.managerSetting.setting.language">
                            <el-option v-for="item in data.languageSelect"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                            >
                            </el-option>
                        </el-select>
                    </el-row>
                </el-row>
                <el-row class="systemSetItemRow">
                    <el-row class="systemSetBlockRow">
                        <div>{{$t('setting.systemSet.autoRefresh')}}</div>
                        <AutoRefresh></AutoRefresh>
                    </el-row>
                </el-row>
            </el-row>
        </el-row>
    </DialogViewFrame>
</template>

<script lang="ts">
import {defineComponent, reactive} from "vue";
import {globals} from "../../base/globals";
import PasswordReset from "./PasswordReset.vue";
import AutoRefresh from "./AutoRefresh.vue";
import DialogViewFrame from "../../views/dialog/DialogViewFrame.vue";

interface SystemSetInfo {
    passwordResetVisible:boolean
    languageSelect:Array<Object>
}

export default defineComponent ({
    name: "SystemSet",
    emits:['update:modelValue'],
    props:{
        modelValue:{
            type: Boolean,
            default: false,
        },
        title:{
            type: String,
            default: "",
        }
    },
    components: {
        DialogViewFrame,
        PasswordReset,
        AutoRefresh
    },
    setup(props, context){
        const data = reactive<SystemSetInfo>({passwordResetVisible:false, languageSelect:[
                {
                    value: 'chs',
                    label: '中文',
                },
                {
                    value: 'eng',
                    label: 'English',
                },
            ]})
        function updatePassword(){
            data.passwordResetVisible = true
        }

        function exitLogin(){
            globals.reLogin()
        }

        function modelValueUpdate(val){
            context.emit("update:modelValue", val)
        }

        return {data, globals, updatePassword, exitLogin, modelValueUpdate}
    }
})
</script>

<style scoped>
@import "../../css/color.css";
@import "../../css/card.css";
@import "../../css/flex.css";

.systemSetMainRow{
    width: 100%;
    height: 100%;
}

.systemSetGroupRow{
    width: 100%;
}

.systemSetItemRow{
    width: 100%;
    height: 52px;
}

.systemSetBlockRow{
    margin-right: 25px;
    align-items: center;
}

.systemSetLanguage{
    width: 120px;
}
</style>