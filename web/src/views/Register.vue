<template>
    <el-dialog
        :modelValue="dialogModel"
        width="280px"
        top="16vh"
        @close="dialogClose"
        destroy-on-close>
        <template v-slot:title>
            <span class="card-dialog-title color-text-normal">{{"注册帐号"}}</span>
        </template>
        <el-row v-loading="data.isLoad" type="flex" justify="center" align="middle">
            <el-input class="registerInput" v-model="data.manager.NickName" placeholder="昵称" clearable></el-input>
            <el-input class="registerInput" v-model="data.manager.Name" placeholder="用户名" clearable></el-input>
            <el-input class="registerInput" v-model="data.manager.Password" placeholder="密码" clearable show-password></el-input>
            <el-input class="registerInput" v-model="data.passwordConfirm" placeholder="确认密码" clearable show-password></el-input>
            <el-select class="registerSelect" v-model="data.manager.Level" placeholder="请选择权限等级">
                <el-option v-for="i in data.userSetLevelSelectOptions" :key="getUserLevelNameBySelectIndex(i)" :label="getUserLevelNameBySelectIndex(i)" :value="i"></el-option>
            </el-select>
            <el-button class="registerButton" size="medium" type="primary" round @click="register">注册</el-button>
        </el-row>
    </el-dialog>
</template>

<script lang="ts">
import {defineComponent, onMounted, reactive} from "vue";
import { request } from "../base/request";
import {protoManage} from "../proto/manage";
import {ElMessage} from "element-plus";
import {globals} from "../base/globals";

interface RegisterInfo {
    isLoad:boolean
    manager:protoManage.Manager
    passwordConfirm:String
}

export default defineComponent ({
    name: "Register",
    components: {

    },
    emits:['registerSuccess', 'update:dialogModel'],
    props:{
        dialogModel:{
            type: Boolean,
            default: false,
            required: true
        }
    },
    setup(props, context){

        const data = reactive<RegisterInfo>({isLoad:false, manager:protoManage.Manager.create(), passwordConfirm:""})

        function dataInit(){
            data.manager = protoManage.Manager.create()
            data.passwordConfirm = ""
        }

        function dialogClose(){
            context.emit("update:dialogModel", false)
            dataInit()
        }

        function registerCheck():boolean {
            if (data.manager.Password != data.passwordConfirm){
                ElMessage.error("两次输入密码不一致")
                return false
            }
            return true
        }

        function register(){
            if (registerCheck()){
                data.isLoad = true
                request.reqManagerAdd(data.manager).then((response) => {
                    ElMessage.success("注册成功")
                    context.emit("registerSuccess")
                    dialogClose()
                }).catch(error => {}).finally(()=>{data.isLoad = false})
            }
        }
        return {data, dialogClose, register}
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