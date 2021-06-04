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
        <el-row v-loading="data.topLinkLoading">
            <el-row class="topMenuSetTable">
                <el-table :data="data.topLinkList" ref="topMenuSetTable" height="100%" highlight-current-row>
                    <el-table-column label="编号" type="index" align="center" width="50"></el-table-column>
                    <el-table-column label="名称" align="center" width="120">
                        <template #default="scope">
                            <el-input v-if="isEditing(scope.$index)" size="small" ref="funcNameInput" v-model="scope.row.Name" placeholder="名称"></el-input>
                            <div v-else>{{scope.row.Name}}</div>
                        </template>
                    </el-table-column>
                    <el-table-column label="链接" align="center">
                        <template #default="scope">
                            <el-input v-if="isEditing(scope.$index)" size="small" ref="funcNameInput" v-model="scope.row.Url" placeholder="链接"></el-input>
                            <el-link v-else :href="scope.row.Url" target="_blank" :underline="false">{{scope.row.Url}}</el-link>
                        </template>
                    </el-table-column>
                    <el-table-column label="操作" align="center" width="100">
                        <template #default="scope">
                            <el-row v-if="isEditing(scope.$index)">
                                <el-button size="mini" type="success" icon="el-icon-check" circle @click="updateTopLink(scope.$index)"/>
                                <el-button size="mini" type="danger" icon="el-icon-close" circle @click="cancelTopLink(scope.$index)"/>
                            </el-row>
                            <el-row v-else>
                                <el-button size="mini" type="primary" icon="el-icon-edit" circle @click="editTopLink(scope.$index)"/>
                                <el-button size="mini" type="danger" icon="el-icon-minus" circle @click="delTopLink(scope.$index)"/>
                            </el-row>
                        </template>
                    </el-table-column>
                </el-table>
            </el-row>
            <el-row class="topMenuSetAddButtonRow" type="flex" justify="center" align="middle">
                <el-button :disabled="data.topLinkAddFlag" type="primary" icon="el-icon-plus" circle @click="newTopLink"></el-button>
            </el-row>
        </el-row>
    </el-dialog>
</template>

<script lang="ts">
import {defineComponent, inject, onMounted, reactive, ref, nextTick} from "vue";
import {request} from "../../base/request";
import {protoManage} from "../../proto/manage";
import {ElMessage, ElTable} from "element-plus";

interface TopLinkEditInfo {
    isEdit:boolean
}

interface TopMenuSetInfo {
    topLinkList: Array<protoManage.ITopLink>
    topLinkEditList:Array<TopLinkEditInfo>
    topLinkAddFlag:boolean
    topLinkLoading:boolean
}

export default defineComponent ({
    name: "TopMenuSet",
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

    },
    setup(props, context){
        const data = reactive<TopMenuSetInfo>({topLinkList:[], topLinkEditList:[], topLinkAddFlag:false, topLinkLoading:true})

        onMounted(()=>{
            initTopLink()
        })

        function initTopLink(){
            request.reqTopLinkList().then((response) => {
                data.topLinkList = response.TopLinkList
                for (let i=0; i<data.topLinkList.length; i++){
                    let topLinkEditInfo:TopLinkEditInfo = {isEdit:false}
                    data.topLinkEditList.push(topLinkEditInfo)
                }
            }).catch(error => {}).finally(()=>{data.topLinkLoading = false})
        }

        function editTopLink(index){
            data.topLinkEditList[index].isEdit = true
        }

        const topMenuSetTable = ref<typeof ElTable>(ElTable);
        function newTopLink(){
            data.topLinkAddFlag = true
            data.topLinkList.push({})
            let topLinkEditInfo:TopLinkEditInfo = {isEdit:true}
            data.topLinkEditList.push(topLinkEditInfo)
            const changeMessage = async () => {
                let bodyWrapper = topMenuSetTable.value.$refs.bodyWrapper
                await nextTick()
                bodyWrapper.scrollTop = bodyWrapper.scrollHeight
            }
            changeMessage()
        }

        function delTopLink(index){
            request.reqTopLinkDel(protoManage.TopLink.create(data.topLinkList[index])).then((response) => {
                ElMessage.success("删除成功");
                data.topLinkList.splice(index, 1)
                data.topLinkEditList.splice(index, 1)
            }).catch(error => {}).finally(()=>{})
        }

        function updateTopLink(index){
            if (data.topLinkAddFlag && index == data.topLinkList.length -1){
                request.reqTopLinkAdd(protoManage.TopLink.create(data.topLinkList[index])).then((response) => {
                    ElMessage.success("创建成功");
                    data.topLinkList[index] = response
                    data.topLinkAddFlag = false
                    data.topLinkEditList[index].isEdit = false
                }).catch(error => {}).finally(()=>{})
            }else{
                request.reqTopLinkUpdate(protoManage.TopLink.create(data.topLinkList[index])).then((response) => {
                    ElMessage.success("更新成功");
                    data.topLinkEditList[index].isEdit = false
                }).catch(error => {}).finally(()=>{})
            }
        }

        function cancelTopLink(index){
            if (data.topLinkAddFlag && index == data.topLinkList.length -1){
                data.topLinkList.splice(index, 1)
                data.topLinkEditList.splice(index, 1)
                data.topLinkAddFlag = false
            }else{
                request.reqTopLinkByID(protoManage.TopLink.create(data.topLinkList[index])).then((response) => {
                    data.topLinkList[index] = response
                    data.topLinkEditList[index].isEdit = false
                }).catch(error => {}).finally(()=>{})
            }
        }

        function isEditing(index){
            return data.topLinkEditList[index].isEdit
        }

        const topLinkListUpdate = inject<Function>('topLinkListUpdate')
        function dialogClose(){
            if(topLinkListUpdate){
                topLinkListUpdate()
            }
            context.emit("update:dialogModel", false)
        }
        return {data, dialogClose, editTopLink, isEditing, newTopLink,
            delTopLink, updateTopLink, cancelTopLink, topMenuSetTable}
    }
})
</script>

<style scoped>
@import "../../css/color.css";
@import "../../css/card.css";

.topMenuSetTable{
    width: 100%;
    height: 420px;
}

.topMenuSetAddButtonRow{
    margin-top: 12px;
    width: 100%;
}
</style>