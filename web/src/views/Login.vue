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
    <el-row class="loginMain" type="flex" justify="center" align="middle" @keyup.enter.native="loginByName()">
        <el-card v-show="data.isShowLogin" class="loginCard" v-loading="data.isLoad" :element-loading-text="$t('login.logining')">
            <el-row type="flex" justify="center" align="middle">
                <img class="loginLogo" src="../assets/logo.svg" alt="admin">
                <el-row v-if="data.hasSystemInit" type="flex" justify="center" align="middle">
                    <el-input class="loginInput" v-model="data.username" :placeholder="$t('login.userName')" clearable></el-input>
                    <el-input class="loginInput" v-model="data.password" :placeholder="$t('login.password')" clearable show-password></el-input>
                    <el-button class="loginButton" type="primary" @click="loginByName">{{$t('login.login')}}</el-button>
                    <el-row class="loginToolRow" type="flex" justify="space-between" align="middle">
                        <el-checkbox v-model="data.isAutoLogin" @change="autoLoginChanged">{{$t('login.autoLogin')}}</el-checkbox>
                        <el-button v-if="data.isShowRegister" type="text" @click="register">{{$t('login.register')}}</el-button>
                    </el-row>
                </el-row>
                <el-row v-else type="flex" justify="center" align="middle">
                    <el-button class="createButton" type="primary" @click="register">{{$t('login.createManager')}}</el-button>
                </el-row>
            </el-row>
        </el-card>
    </el-row>
    <Register v-model="data.registerVisible" :title="$t('login.register')" top-margin="25vh"></Register>
</template>

<script lang="ts">
import { defineComponent, reactive, onMounted, watchEffect} from "vue";
import {protoManage} from "../proto/manage"
import {globals} from "../base/globals"
import {request} from "../base/request"
import {routerName, routerPath} from '../router'
import i18n from '../base/i18n'
import Register from "./Register.vue";

interface LoginInfo {
    isLoad:boolean,
    isAutoLogin:boolean,
    isShowLogin:boolean,
    isShowRegister:boolean,
    hasSystemInit:boolean,
    registerVisible:boolean
    username: string,
    password: string,
}

export default defineComponent ({
    name: "Login",
    components: {
        Register
    },
    setup(){
        const data = reactive<LoginInfo>({isLoad:false, isAutoLogin:false, username:"",
            password:"", registerVisible:false, isShowLogin:false, hasSystemInit:false, isShowRegister:false})

        onMounted(()=>{
            data.isAutoLogin = true
            let isAutoLogin = localStorage.getItem(globals.globalsConfig.localStorageKey.autoLogin)
            if (isAutoLogin == null){
                data.isAutoLogin = false
            }
            if (data.isAutoLogin){
                loginByToken()
            }
        })

        function loginFinish(manager:protoManage.Manager){
            globals.viewSuccess(i18n.global.t('login.loginSuccess'));
            localStorage.setItem(globals.globalsConfig.localStorageKey.token,  manager.Token);
            routerPath.toPath(routerName.node, {initPageNum:true, initPageSize:true})
        }

        function loginByToken(){
            let token = <string>localStorage.getItem(globals.globalsConfig.localStorageKey.token)
            if (token == null || token == ""){
                return
            }
            data.isLoad = true
            request.reqManagerLogin(protoManage.Manager.create({
                Token:token
            })).then((response) => {
                loginFinish(response)
            }).catch(error => {}).finally(()=>{data.isLoad = false})
        }

        function loginByName(){
            data.isLoad = true
            request.reqManagerLogin(protoManage.Manager.create({
                Name:data.username,
                Password:data.password
            })).then((response) => {
                loginFinish(response)
            }).catch(error => {}).finally(()=>{data.isLoad = false})
        }

        function autoLoginChanged(val:boolean){
            if (val){
                localStorage.setItem(globals.globalsConfig.localStorageKey.autoLogin, String(val));
            }else{
                localStorage.removeItem(globals.globalsConfig.localStorageKey.autoLogin);
            }
        }

        function register(){
            data.registerVisible = true
        }

        watchEffect(registerVisibleChanged)
        function registerVisibleChanged(){
            if (!data.registerVisible){
                findSystemInitState()
            }
        }

        function findSystemInitState(){
            data.isShowLogin = false
            request.reqFindSystemInitInfo(protoManage.Manager.create({
                Level: protoManage.Level.LevelSuper
            })).then((response) => {
                data.isShowRegister = response.openRegister
                data.hasSystemInit = response.systemInit
                data.isShowLogin = true
            }).catch(error => {}).finally(()=>{})
        }
        return {data, loginByName, register, autoLoginChanged}
    }
})
</script>

<style scoped>
.loginMain {
    width: 100%;
    height: 100%;
    background-image: linear-gradient(-225deg, #5D9FFF 0%, #B8DCFF 48%, #6BBBFF 100%);
}

.loginCard {
    width: 280px;
}

.loginLogo{
    width: 160px;
    margin-top: 20px;
    margin-bottom: 10px;
}
.loginInput {
    margin-top: 15px;
}

.loginButton {
    margin-top: 25px;
    margin-bottom: 15px;
    width: 80px;
}

.loginToolRow {
    width: 100%;
}

.createButton {
    margin-top: 25px;
    margin-bottom: 15px;
    width: 150px;
}

</style>