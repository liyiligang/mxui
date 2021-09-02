<template>
    <el-row class="loginMain" type="flex" justify="center" align="middle" @keyup.enter.native="loginByName()">
        <el-card v-show="data.isShowLogin" class="loginCard" v-loading="data.isLoad" element-loading-text="登录中...">
            <el-row type="flex" justify="center" align="middle">
                <img class="loginLogo" src="../assets/logo.png" alt="admin">
                <el-row v-if="data.hasSystemInit" type="flex" justify="center" align="middle">
                    <el-input class="loginInput" v-model="data.username" placeholder="用户名" clearable></el-input>
                    <el-input class="loginInput" v-model="data.password" placeholder="密码" clearable show-password></el-input>
                    <el-button class="loginButton" size="medium" type="primary" round @click="loginByName">登录</el-button>
                    <el-row class="loginToolRow" type="flex" justify="space-between" align="middle">
                        <el-checkbox v-model="data.isAutoLogin" @change="autoLoginChanged">自动登录</el-checkbox>
                        <el-button type="text" @click="register">注册帐号</el-button>
                    </el-row>
                </el-row>
                <el-row v-else type="flex" justify="center" align="middle">
                    <el-button class="createButton" type="primary" round @click="register">创建管理员</el-button>
                </el-row>
            </el-row>
        </el-card>
    </el-row>
    <Register v-model:dialogModel="data.registerVisible"></Register>
</template>

<script lang="ts">
import { defineComponent, reactive, onMounted, watchEffect} from "vue";
import {protoManage} from "../proto/manage"
import {globals} from "../base/globals"
import {request} from "../base/request"
import {routerPath} from '../router'
import {ElMessage} from "element-plus";
import Register from "./Register.vue";

interface LoginInfo {
    isLoad:boolean,
    isAutoLogin:boolean,
    isShowLogin:boolean,
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
            password:"", registerVisible:false, isShowLogin:false, hasSystemInit:false})

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
            ElMessage.success("登录成功");
            globals.globalsData.manager = protoManage.Manager.create(manager)
            localStorage.setItem(globals.globalsConfig.localStorageKey.token,  manager.Token);
            routerPath.toGroupAll()
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
            if (data.registerVisible == false){
                findSystemInitState()
            }
        }

        function findSystemInitState(){
            data.isShowLogin = false
            request.reqManagerFindByLevel(protoManage.Manager.create({
                Level: protoManage.Level.LevelSuper
            })).then((response) => {
                if (response.Base?.ID != 0){
                    data.hasSystemInit = true
                }
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