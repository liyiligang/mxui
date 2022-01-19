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
    <DialogViewFrame :modelValue="modelValue" @update:modelValue="modelValueUpdate" :title="title" width="260px">
        <el-row v-loading="data.isLoad" type="flex" justify="center" align="middle">
            <el-input class="passwordResetInput" v-model="data.manager.Token" :placeholder="$t('passwordReset.originalPassword')" clearable show-password></el-input>
            <el-input class="passwordResetInput" v-model="data.manager.Password" :placeholder="$t('passwordReset.newPassword')" clearable show-password></el-input>
            <el-input class="passwordResetInput" v-model="data.passwordConfirm" :placeholder="$t('passwordReset.confirmPassword')" clearable show-password></el-input>
            <el-button class="passwordResetButton" type="primary" @click="passwordReset">{{$t('passwordReset.modifyButton')}}</el-button>
        </el-row>
    </DialogViewFrame>
</template>

<script lang="ts">
import {defineComponent, reactive} from "vue";
import { request } from "../../base/request";
import {protoManage} from "../../proto/manage";
import i18n from '../../base/i18n'
import {globals} from "../../base/globals";
import DialogViewFrame from "../../views/dialog/DialogViewFrame.vue";

interface PasswordResetInfo {
    isLoad:boolean
    manager:protoManage.Manager
    passwordConfirm:String
}

export default defineComponent ({
    name: "PasswordReset",
    emits:['update:modelValue'],
    components: {
        DialogViewFrame
    },
    props:{
        modelValue:{
            type: Boolean,
            default: false,
        },
        title:{
            type: String,
            default: "",
        }
    },
    setup(props, context){

        const data = reactive<PasswordResetInfo>({isLoad:false, manager:protoManage.Manager.create(), passwordConfirm:""})

        function dataInit(){
            data.manager = protoManage.Manager.create()
            data.passwordConfirm = ""
        }

        function modelValueUpdate(val:boolean){
            context.emit("update:modelValue", val)
            dataInit()
        }

        function passwordResetCheck():boolean {
            if (data.manager.Password != data.passwordConfirm){
                globals.viewError(i18n.global.t('passwordReset.passwordInconsistent'))
                return false
            }
            return true
        }

        function passwordReset(){
            if (passwordResetCheck()){
                data.isLoad = true
                request.reqManagerUpdatePasswd(data.manager).then((response) => {
                    modelValueUpdate(false)
                    globals.reLogin()
                    globals.viewSuccess(i18n.global.t('passwordReset.passwordModifySuccess'))
                }).catch(error => {}).finally(()=>{data.isLoad = false})
            }
        }
        return {data, modelValueUpdate, passwordReset}
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