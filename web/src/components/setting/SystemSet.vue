<template>
    <el-dialog
        :modelValue="dialogModel"
        width="500px"
        top="18vh"
        @close="dialogClose"
        destroy-on-close>
        <template v-slot:title>
            <span class="card-dialog-title color-text-normal">{{dialogTitle}}</span>
        </template>
        <el-row class="SystemSetRow" type="flex" justify="start" align="middle">
            <div>固定分页：</div>
            <el-switch v-model="globals.globalsData.managerSetting.isPageFix"
                       active-color="#13ce66" inactive-color="#ff4949"></el-switch>
        </el-row>
        <el-row class="SystemSetRow" type="flex" justify="start" align="middle">
            <div>修改密码：</div>
            <el-button type="text" @click="updatePassword">点击修改</el-button>
            <PasswordReset v-model:dialogModel="data.passwordResetVisible"></PasswordReset>
        </el-row>
        <el-row class="SystemSetRow" type="flex" justify="start" align="middle">
            <div>退出登录：</div>
            <el-button type="text" @click="exitLogin">点击退出</el-button>
        </el-row>
        <el-row class="SystemSetRow" type="flex" justify="start" align="middle">
            <div>自动刷新：</div>
            <AutoRefresh></AutoRefresh>
        </el-row>
    </el-dialog>
</template>

<script lang="ts">
import {defineComponent, reactive} from "vue";
import {globals} from "../../base/globals";
import PasswordReset from "./PasswordReset.vue";
import AutoRefresh from "./AutoRefresh.vue";

interface SystemSetInfo {
    passwordResetVisible:boolean
}

export default defineComponent ({
    name: "SystemSet",
    props:{
        dialogTitle:{
            type: String,
            default: "",
            required: true
        },
        dialogModel:{
            type: Boolean,
            default: false,
            required: true
        }
    },
    components: {
        PasswordReset,
        AutoRefresh
    },
    setup(props, context){
        const data = reactive<SystemSetInfo>({passwordResetVisible:false})
        function updatePassword(){
            data.passwordResetVisible = true
        }

        function exitLogin(){
            globals.reLogin()
        }

        function dialogClose(){
            context.emit("update:dialogModel", false)
        }

        return {data, globals, dialogClose, updatePassword, exitLogin}
    }
})
</script>

<style scoped>
@import "../../css/color.css";
@import "../../css/card.css";

.SystemSetRow{
    width: 100%;
    height: 30px;
}

</style>