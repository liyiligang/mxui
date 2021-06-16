<template>
    <el-dialog
        :modelValue="dialogModel"
        width="650px"
        top="18vh"
        @close="dialogClose"
        destroy-on-close>
        <template v-slot:title>
            <span class="card-dialog-title color-text-normal">{{dialogTitle}}</span>
        </template>
        <el-row class="systemSetMainRow">
            <el-row class="systemSetGroupRow">
                <el-row class="systemSetItemRow">
                    <el-row class="systemSetBlockRow">
                        <div>固定分页：</div>
                        <el-switch v-model="globals.globalsData.managerSetting.setting.isPageFix"
                                   active-color="#13ce66" inactive-color="#ff4949"></el-switch>
                    </el-row>
                </el-row>
                <el-row class="systemSetItemRow">
                    <el-row class="systemSetBlockRow">
                        <div>修改密码：</div>
                        <el-button size="small" @click="updatePassword">修改</el-button>
                        <PasswordReset v-model:dialogModel="data.passwordResetVisible"></PasswordReset>
                    </el-row>
                    <el-row class="systemSetBlockRow">
                        <div>退出登录：</div>
                        <el-button size="small" @click="exitLogin">退出</el-button>
                    </el-row>
                </el-row>
                <el-row class="systemSetItemRow">
                    <el-row class="systemSetBlockRow">
                        <div>自动刷新：</div>
                        <AutoRefresh></AutoRefresh>
                    </el-row>
                </el-row>
            </el-row>
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
</style>