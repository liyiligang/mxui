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
    <DialogViewFrame :modelValue="modelValue" @update:modelValue="modelValueUpdate"
                     :title="title" width="660px" show-full-screen fixHeight>
        <el-row class="userSetRow" v-loading="data.userSetLoading">
            <el-row class="userSetTableRow" type="flex" justify="start" align="top">
                <el-table class="userSetTable" :data="data.userSetList" ref="userSetTable" height="100%" highlight-current-row>
                    <el-table-column :label="$t('setting.userSet.id')" type="index" :index="indexMethod" align="center" width="80"></el-table-column>
                    <el-table-column :label="$t('setting.userSet.userName')" align="center">
                        <template #default="scope">
                            <div>{{scope.row.Name}}</div>
                        </template>
                    </el-table-column>
                    <el-table-column :label="$t('setting.userSet.nickName')" align="center">
                        <template #default="scope">
                            <el-input v-if="isEditing(scope.$index)" v-model="scope.row.NickName" :placeholder="$t('setting.userSet.nickName')"></el-input>
                            <div v-else>{{scope.row.NickName}}</div>
                        </template>
                    </el-table-column>
                    <el-table-column :label="$t('setting.userSet.level')" align="center" width="150">
                        <template #default="scope">
                            <LevelSelect v-if="isEditing(scope.$index)" v-model="scope.row.Level"></LevelSelect>
                            <div v-else :class="[getUserLevelColor(scope.$index)]">{{getUserLevelNameByTableIndex(scope.$index)}}</div>
                        </template>
                    </el-table-column>
                    <el-table-column :label="$t('setting.userSet.operate')" align="center" width="100">
                        <template #default="scope">
                            <el-row v-if="isEditing(scope.$index)">
                                <el-button type="success" :icon="Check" circle @click="updateUserSet(scope.$index)"/>
                                <el-button type="danger" :icon="Close" circle @click="cancelUserSet(scope.$index)"/>
                            </el-row>
                            <el-row v-else>
                                <el-button type="primary" :icon="Edit" circle @click="editUserSet(scope.$index)"/>
                                <el-button type="danger" :icon="Minus" circle @click="delUserSet(scope.$index)"/>
                            </el-row>
                        </template>
                    </el-table-column>
                </el-table>
            </el-row>
            <el-row class="userSetAddButtonRow" type="flex" justify="center" align="middle">
                <el-button size="large" :disabled="data.userSetAddFlag" type="primary" :icon="Plus" circle @click="newUserSet"></el-button>
            </el-row>
        </el-row>
    </DialogViewFrame>
    <Register v-model="data.userSetAddFlag" :title="$t('setting.userSet.addUser')" :useLevel="true" @registerSuccess="newUserSuccess"></Register>
</template>

<script lang="ts">
import {defineComponent, inject, nextTick, onMounted, reactive, ref} from "vue";
import {protoManage} from "../../proto/manage";
import {convert} from "../../base/convert";
import {request} from "../../base/request";
import Register from "../../views/Register.vue";
import LevelSelect from "./LevelSelect.vue";
import DialogViewFrame from "../../views/dialog/DialogViewFrame.vue";
import {ElMessageBox, ElTable} from "element-plus";
import i18n from '../../base/i18n'
import {globals} from "../../base/globals";
import {Check, Close, Edit, Minus, Plus} from "@element-plus/icons";

interface UserSetEditInfo {
    isEdit:boolean
}

interface UserSetInfo {
    userSetEditList:Array<UserSetEditInfo>
    userSetList: Array<protoManage.IManager>
    userSetAddFlag:boolean
    userSetLoading:boolean
}

export default defineComponent ({
    name: "UserSet",
    emits:['update:modelValue'],
    components: {
        DialogViewFrame,
        Register,
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
        }
    },
    setup(props, context){

        const data = reactive<UserSetInfo>({userSetList:[], userSetEditList:[],
            userSetAddFlag:false, userSetLoading:false})

        onMounted(()=>{
            initUserSetList()
        })

        function initUserSetList(){
            request.reqManagerList().then((response) => {
                data.userSetList = response.ManagerList
                for (let i=0; i<data.userSetList.length; i++){
                    let userSetEditInfo:UserSetEditInfo = {isEdit:false}
                    data.userSetEditList.push(userSetEditInfo)
                }
            }).catch(error => {}).finally(()=>{data.userSetLoading = false})
        }

        function indexMethod(index) {
            return data.userSetList[index].Base?.ID
        }

        function getUserStateColor(index){
            return convert.getColorByManagerState(data.userSetList[index].State)
        }

        function getUserLevelColor(index){
            return convert.getColorByLevel(data.userSetList[index].Level)
        }

        function getUserLevelNameByTableIndex(index){
            return convert.getManagerLevelName(data.userSetList[index].Level)
        }

        function isEditing(index){
            return data.userSetEditList[index].isEdit
        }

        function editUserSet(index){
            data.userSetEditList[index].isEdit = true
        }

        const userSetTable = ref<typeof ElTable>(ElTable);
        function newUserSet(){
            data.userSetAddFlag = true
        }

        function newUserSuccess(){
            initUserSetList()
            const changeMessage = async () => {
                let bodyWrapper = userSetTable.value.$refs.bodyWrapper
                await nextTick()
                bodyWrapper.scrollTop = bodyWrapper.scrollHeight
            }
            changeMessage()
        }

        function delUserSet(index){
            ElMessageBox.confirm(i18n.global.t('confirm.delete'), i18n.global.t('confirm.warn'), {
                confirmButtonText: i18n.global.t('confirm.ok'),
                cancelButtonText: i18n.global.t('confirm.cancel'),
                type: 'warning'
            }).then(() => {
                request.reqManagerDel(protoManage.Manager.create(data.userSetList[index])).then((response) => {
                    globals.viewSuccess(i18n.global.t('setting.userSet.deleteSuccess'));
                    data.userSetList.splice(index, 1)
                    data.userSetEditList.splice(index, 1)
                }).catch(error => {}).finally(()=>{})
            }).catch(() => {});
        }

        function updateUserSet(index){
            request.reqManagerUpdate(protoManage.Manager.create(data.userSetList[index])).then((response) => {
                globals.viewSuccess(i18n.global.t('setting.userSet.updateSuccess'));
                data.userSetEditList[index].isEdit = false
            }).catch(error => {}).finally(()=>{})
        }

        function cancelUserSet(index){
            request.reqManagerByID(protoManage.Manager.create(data.userSetList[index])).then((response) => {
                data.userSetList[index] = response
                data.userSetEditList[index].isEdit = false
            }).catch(error => {}).finally(()=>{})
        }

        // const managerListUpdate = inject<Function>('managerListUpdate')
        function modelValueUpdate(val){
            // if(managerListUpdate){
            //     managerListUpdate()
            // }
            context.emit("update:modelValue", val)
        }
        return {data, modelValueUpdate, getUserStateColor, isEditing, getUserLevelColor, getUserLevelNameByTableIndex,
            newUserSet, newUserSuccess, editUserSet, delUserSet, updateUserSet, cancelUserSet, indexMethod, userSetTable,
            Check, Close, Edit, Minus, Plus}
    }
})

</script>

<style scoped>

.userSetRow{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
}

.userSetTableRow{
    width: 100%;
    flex:auto;
    overflow-y:scroll;
}

.userSetTable{
    width: 100%;
    height: 100%;
}

.userSetAddButtonRow{
    margin-top: 12px;
    width: 100%;
}

</style>