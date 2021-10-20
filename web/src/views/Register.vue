<template>
    <DialogViewFrame :modelValue="modelValue" @update:modelValue="modelValueUpdate"
                     :title="title" width="280px">
        <el-row v-loading="data.isLoad" type="flex" justify="center" align="middle">
            <el-input class="registerInput" v-model="data.manager.NickName" placeholder="昵称" clearable></el-input>
            <el-input class="registerInput" v-model="data.manager.Name" placeholder="用户名" clearable></el-input>
            <el-input class="registerInput" v-model="data.manager.Password" placeholder="密码" clearable show-password></el-input>
            <el-input class="registerInput" v-model="data.passwordConfirm" placeholder="确认密码" clearable show-password></el-input>
            <LevelSelect v-if="useLevel" class="registerSelect" v-model="data.manager.Level"></LevelSelect>
            <el-button class="registerButton" size="medium" type="primary" round @click="register">注册</el-button>
        </el-row>
    </DialogViewFrame>
</template>

<script lang="ts">
import {defineComponent, onMounted, reactive} from "vue";
import { request } from "../base/request";
import {protoManage} from "../proto/manage";
import {ElMessage} from "element-plus";
import LevelSelect from "../components/setting/LevelSelect.vue";
import DialogViewFrame from "../views/dialog/DialogViewFrame.vue";


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
                ElMessage.error("两次输入密码不一致")
                return false
            }
            return true
        }

        function registerSuccess() {
            ElMessage.success("注册成功")
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