<template>
    <el-dialog
        :modelValue="dialogModel"
        width="660px"
        top="10vh"
        @close="dialogClose"
        destroy-on-close>
        <template v-slot:title>
            <span class="card-dialog-title color-text-normal">{{dialogTitle}}</span>
        </template>
        <el-row v-loading="data.userSetLoading">
            <el-row class="userSetTable">
                <el-table :data="data.userSetList" ref="userSetTable" height="100%" highlight-current-row>
                    <el-table-column label="编号" type="index" align="center" width="50"></el-table-column>
                    <el-table-column label="用户名" align="center">
                        <template #default="scope">
                            <div :class="[getUserStateColor(scope.$index)]">{{scope.row.Name}}</div>
                        </template>
                    </el-table-column>
                    <el-table-column label="昵称" align="center">
                        <template #default="scope">
                            <el-input v-if="isEditing(scope.$index)" size="small" v-model="scope.row.NickName" placeholder="昵称"></el-input>
                            <div v-else>{{scope.row.NickName}}</div>
                        </template>
                    </el-table-column>
                    <el-table-column label="权限" align="center" width="150">
                        <template #default="scope">
                            <LevelSelect v-if="isEditing(scope.$index)" size="small" v-model="scope.row.Level"></LevelSelect>
                            <div v-else :class="[getUserLevelColor(scope.$index)]">{{getUserLevelNameByTableIndex(scope.$index)}}</div>
                        </template>
                    </el-table-column>
                    <el-table-column label="操作" align="center" width="100">
                        <template #default="scope">
                            <el-row v-if="isEditing(scope.$index)">
                                <el-button size="mini" type="success" icon="el-icon-check" circle @click="updateUserSet(scope.$index)"/>
                                <el-button size="mini" type="danger" icon="el-icon-close" circle @click="cancelUserSet(scope.$index)"/>
                            </el-row>
                            <el-row v-else>
                                <el-button size="mini" type="primary" icon="el-icon-edit" circle @click="editUserSet(scope.$index)"/>
                                <el-button size="mini" type="danger" icon="el-icon-minus" circle @click="delUserSet(scope.$index)"/>
                            </el-row>
                        </template>
                    </el-table-column>
                </el-table>
            </el-row>
            <el-row class="userSetAddButtonRow" type="flex" justify="center" align="middle">
                <el-button :disabled="data.userSetAddFlag" type="primary" icon="el-icon-plus" circle @click="newUserSet"></el-button>
            </el-row>
        </el-row>
    </el-dialog>
    <Register v-model:dialogModel="data.userSetAddFlag" :useLevel="true" @registerSuccess="newUserSuccess"></Register>
</template>

<script lang="ts">
import {defineComponent, inject, nextTick, onMounted, reactive, ref} from "vue";
import {protoManage} from "../../proto/manage";
import {convert} from "../../base/convert";
import {request} from "../../base/request";
import Register from "../../views/Register.vue";
import LevelSelect from "./LevelSelect.vue";
import {ElMessage, ElTable} from "element-plus";

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
        Register,
        LevelSelect
    },
    setup(props, context){

        const data = reactive<UserSetInfo>({userSetList:[], userSetEditList:[],
            userSetAddFlag:false, userSetLoading:false})

        onMounted(()=>{
            initUserSetList()
        })

        function initUserSetList(){
            request.reqManagerLowLevelList().then((response) => {
                data.userSetList = response.ManagerList
                for (let i=0; i<data.userSetList.length; i++){
                    let userSetEditInfo:UserSetEditInfo = {isEdit:false}
                    data.userSetEditList.push(userSetEditInfo)
                }
            }).catch(error => {}).finally(()=>{data.userSetLoading = false})
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
            request.reqManagerDel(protoManage.Manager.create(data.userSetList[index])).then((response) => {
                ElMessage.success("删除成功");
                data.userSetList.splice(index, 1)
                data.userSetEditList.splice(index, 1)
            }).catch(error => {}).finally(()=>{})
        }

        function updateUserSet(index){
            request.reqManagerUpdate(protoManage.Manager.create(data.userSetList[index])).then((response) => {
                ElMessage.success("更新成功");
                data.userSetEditList[index].isEdit = false
            }).catch(error => {}).finally(()=>{})
        }

        function cancelUserSet(index){
            request.reqManagerByID(protoManage.Manager.create(data.userSetList[index])).then((response) => {
                data.userSetList[index] = response
                data.userSetEditList[index].isEdit = false
            }).catch(error => {}).finally(()=>{})
        }

        const managerListUpdate = inject<Function>('managerListUpdate')
        function dialogClose(){
            if(managerListUpdate){
                managerListUpdate()
            }
            context.emit("update:dialogModel", false)
        }
        return {data, dialogClose, getUserStateColor, isEditing, getUserLevelColor, getUserLevelNameByTableIndex,
            newUserSet, newUserSuccess, editUserSet, delUserSet, updateUserSet, cancelUserSet, userSetTable}
    }
})

</script>

<style scoped>

.userSetTable{
    width: 100%;
    height: 420px;
}

.userSetAddButtonRow{
    margin-top: 12px;
    width: 100%;
}

</style>