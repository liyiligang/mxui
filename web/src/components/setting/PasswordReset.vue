<template>
    <el-dialog
        :modelValue="dialogModel"
        width="260px"
        top="25vh"
        @close="dialogClose"
        destroy-on-close
        append-to-body>
        <template v-slot:title>
            <span class="card-dialog-title color-text-normal">{{"修改密码"}}</span>
        </template>
        <el-row v-loading="data.isLoad" type="flex" justify="center" align="middle">
            <el-input class="passwordResetInput" v-model="data.manager.Token" placeholder="原密码" clearable show-password></el-input>
            <el-input class="passwordResetInput" v-model="data.manager.Password" placeholder="密码" clearable show-password></el-input>
            <el-input class="passwordResetInput" v-model="data.passwordConfirm" placeholder="确认密码" clearable show-password></el-input>
            <el-button class="passwordResetButton" size="medium" type="primary" round @click="passwordReset">修改</el-button>
        </el-row>
    </el-dialog>
</template>

<script lang="ts">
import {defineComponent, reactive} from "vue";
import { request } from "../../base/request";
import {protoManage} from "../../proto/manage";
import {ElMessage} from "element-plus";
import {globals} from "../../base/globals";

interface PasswordResetInfo {
    isLoad:boolean
    manager:protoManage.Manager
    passwordConfirm:String
}

export default defineComponent ({
    name: "PasswordReset",
    components: {

    },
    props:{
        dialogModel:{
            type: Boolean,
            default: false,
            required: true
        }
    },
    setup(props, context){

        const data = reactive<PasswordResetInfo>({isLoad:false, manager:protoManage.Manager.create(), passwordConfirm:""})

        function dataInit(){
            data.manager = protoManage.Manager.create()
            data.passwordConfirm = ""
        }

        function dialogClose(){
            context.emit("update:dialogModel", false)
            dataInit()
        }

        function passwordResetCheck():boolean {
            if (data.manager.Password != data.passwordConfirm){
                ElMessage.error("两次输入密码不一致")
                return false
            }
            return true
        }

        function passwordReset(){
            if (passwordResetCheck()){
                data.isLoad = true
                request.reqManagerUpdate(data.manager).then((response) => {
                    dialogClose()
                    globals.reLogin()
                    ElMessage.success("密码修改成功, 请重新登录")
                }).catch(error => {}).finally(()=>{data.isLoad = false})
            }
        }
        return {data, dialogClose, passwordReset}
    }
})
</script>

<style scoped>
@import "../../css/color.css";
@import "../../css/card.css";

.passwordResetInput {
    margin-bottom: 15px;
}

.passwordResetButton {
    margin-top: 5px;
    width: 80px;
}
</style>