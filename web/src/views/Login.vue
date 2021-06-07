<template>
    <el-row class="loginMain" type="flex" justify="center" align="middle" @keyup.enter.native="loginByName()">
        <el-card class="loginCard" v-loading="data.isLoad" element-loading-text="登录中...">
            <el-row type="flex" justify="center" align="middle">
                <img class="loginLogo" src="../assets/logo.png" alt="admin">
                <el-input class="loginInput" v-model="data.username" placeholder="用户名" clearable></el-input>
                <el-input class="loginInput" v-model="data.password" placeholder="密码" clearable show-password></el-input>
                <el-button class="loginButton" size="medium" type="primary" round @click="loginByName">登录</el-button>
                <el-row class="loginToolRow" type="flex" justify="space-between" align="middle">
                    <el-checkbox v-model="data.isAutoLogin" @change="autoLoginChanged">自动登录</el-checkbox>
                    <el-button type="text" @click="register">注册帐号</el-button>
                </el-row>
            </el-row>
        </el-card>
    </el-row>
    <Register v-model:dialogModel="data.registerVisible"></Register>
</template>

<script lang="ts">
import { defineComponent, reactive, onMounted } from "vue";
import {protoManage} from "../proto/manage"
import {globals} from "../base/globals"
import {request} from "../base/request"
import {routerPath} from '../router'
import {ElMessage} from "element-plus";
import Register from "./Register.vue";


interface LoginInfo {
    isLoad:boolean,
    isAutoLogin:boolean,
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
            password:"", registerVisible:false})

        onMounted(()=>{
            let token = globals.globalsData.manager.Token
            data.isAutoLogin = true
            let isAutoLogin = localStorage.getItem(globals.globalsConfig.localStorageKey.autoLogin)
            if (isAutoLogin == null){
                data.isAutoLogin = false
            }
            if (token != null && token != "" && data.isAutoLogin){
                loginByToken(token)
            }
        })

        function loginFinish(manager:protoManage.Manager){
            ElMessage.success("登录成功");
            globals.globalsData.manager = protoManage.Manager.create(manager)
            localStorage.setItem(globals.globalsConfig.localStorageKey.token,  manager.Token);
            routerPath.toGroupAll()
        }

        function loginByToken(token:string){
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

</style>