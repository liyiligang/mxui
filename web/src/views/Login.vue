<template>
    <el-row class="loginMain" type="flex" justify="center" align="middle" @keyup.enter.native="loginByName()">
        <el-card class="loginCard" v-loading="data.isLoad" element-loading-text="登录中...">
            <el-row type="flex" justify="center" align="middle">
                <img class="loginLogo" src="../assets/logo.png" alt="admin">
                <el-input class="loginInput" v-model="data.username" placeholder="用户名" clearable></el-input>
                <el-input class="loginInput" v-model="data.password" placeholder="密码" clearable show-password></el-input>
                <el-button class="loginButton" type="primary" round v-on:click="loginByName()">登录</el-button>
            </el-row>
        </el-card>
    </el-row>
</template>

<script lang="ts">
import { defineComponent, reactive, onMounted } from "vue";
import {protoManage} from "../proto/manage"
import {globals} from "../base/globals"
import {request} from "../base/request"
import {routerPath} from '../router'
import {ElMessage} from "element-plus";


interface LoginInfo {
    isLoad:boolean
    username: string,
    password: string,
}

export default defineComponent ({
    name: "Login",
    components: {

    },
    setup(){
        const data = reactive<LoginInfo>({isLoad:false, username:"", password:""})

        onMounted(()=>{
            let token = globals.globalsData.token
            if (token != null && token != ""){
                loginByToken(token)
            }
        })

        function loginFinish(manager:protoManage.Manager){
            ElMessage.success("登录成功");
            globals.globalsData.token = manager.Token
            localStorage.setItem(globals.globalsConfig.httpConfig.tokenKey,  manager.Token);
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
        return {data, loginByName}
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
    width: 260px;
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
    margin-top: 35px;
    margin-bottom: 15px;
    width: 100px;
}
</style>