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
    <DialogViewFrame :modelValue="modelValue" @update:modelValue="modelValueUpdate"
                     :title="title" width="280px" :top-margin="topMargin">
        <el-row v-loading="data.isLoad" type="flex" justify="center" align="middle">
            <el-input class="registerInput" v-model="data.manager.NickName" :placeholder="$t('register.nickName')" clearable></el-input>
            <el-input class="registerInput" v-model="data.manager.Name" :placeholder="$t('register.userName')" clearable></el-input>
            <el-input class="registerInput" v-model="data.manager.Password" :placeholder="$t('register.password')" clearable show-password></el-input>
            <el-input class="registerInput" v-model="data.passwordConfirm" :placeholder="$t('register.confirmPassword')" clearable show-password></el-input>
            <LevelSelect v-if="useLevel" class="registerSelect" v-model="data.manager.Level" :suffix="$t('register.level')"></LevelSelect>
            <el-button class="registerButton" type="primary" @click="register">{{$t('register.registerButton')}}</el-button>
        </el-row>
    </DialogViewFrame>
</template>

<script lang="ts">
import {defineComponent, onMounted, reactive} from "vue";
import { request } from "../base/request";
import {protoManage} from "../proto/manage";
import i18n from '../base/i18n'
import LevelSelect from "../components/setting/LevelSelect.vue";
import DialogViewFrame from "../views/dialog/DialogViewFrame.vue";
import {globals} from "../base/globals";


interface RegisterInfo {
    isLoad:boolean
    manager:protoManage.Manager
    passwordConfirm:String
}

export default defineComponent ({
    name: "Register",
    emits:['registerSuccess', 'update:modelValue'],
    components: {
        DialogViewFrame,
        LevelSelect
    },
    props:{
        modelValue:{
            type: Boolean,
            default: false,
        },
        topMargin:{
            type: String,
            default: "12vh"
        },
        title:{
            type: String,
            default: "",
        },
        useLevel:{
            type: Boolean,
            default: false,
            required: false
        }
    },
    setup(props, context){

        const data = reactive<RegisterInfo>({isLoad:false, manager:protoManage.Manager.
            create({Level:protoManage.Level.LevelPrimary}), passwordConfirm:""})

        function dataInit(){
            data.manager = protoManage.Manager.create({Level:protoManage.Level.LevelPrimary})
            data.passwordConfirm = ""
        }

        function modelValueUpdate(val:boolean){
            context.emit("update:modelValue", val)
            dataInit()
        }

        function registerCheck():boolean {
            if (data.manager.Password != data.passwordConfirm){
                globals.viewWarn(i18n.global.t('register.passwordInconsistent'))
                return false
            }
            return true
        }

        function registerSuccess() {
            globals.viewSuccess(i18n.global.t('register.registerSuccess'))
            context.emit("registerSuccess")
            modelValueUpdate(false)
        }

        function register(){
            if (registerCheck()){
                data.isLoad = true

                if (props.useLevel) {
                    request.reqManagerAdd(data.manager).then((response) => {
                        registerSuccess()
                    }).catch(error => {}).finally(()=>{data.isLoad = false})
                }else {
                    request.reqManagerRegister(data.manager).then((response) => {
                        registerSuccess()
                    }).catch(error => {}).finally(()=>{data.isLoad = false})
                }
            }
        }
        return {data, modelValueUpdate, register}
    }
})
</script>

<style scoped>
@import "../css/color.css";
@import "../css/card.css";

.registerInput {
    margin-bottom: 15px;
}

.registerButton {
    margin-top: 5px;
    width: 80px;
}

.registerSelect {
    width: 100%;
    margin-bottom: 15px;
}
</style>