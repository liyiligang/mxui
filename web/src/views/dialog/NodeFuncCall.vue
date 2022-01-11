<template>
    <el-row class="nodeFuncCallRow">
        <el-row class="nodeFuncCallTabsRow">
            <el-tabs v-if="data.schema!==''" class="funcCallTabs" v-loading="data.loading" v-model="data.tabActiveName" type="border-card" @tabClick="tabClick">
                <el-tab-pane class="formPane" label="表单" name="form">
                    <el-row class="formRow" type="flex" justify="start" align="top">
                        <vue-form class="form" v-model="data.formData" :form-footer="data.formFooter"
                                  :ui-schema="data.uiSchema" :schema="data.schema"></vue-form>
                    </el-row>
                </el-tab-pane>
                <el-tab-pane class="jsonPane" label="JSON" name="json">
                        <JsonEdit ref="jsonEdit" :readOnly="false" :modes="['code', 'tree']" :id="'jsonEdit'+nodeFunc.Base.ID"
                                  :name="nodeFunc.Name" @jsonChanged=jsonChanged></JsonEdit>
                </el-tab-pane>
            </el-tabs>
            <Empty v-else class="funcCallEmpty" description="此方法沒有设置参数"></Empty>
        </el-row>
        <el-row type="flex" justify="center" align="middle">
            <el-button class="funcCallButton" type="primary" @click=reset :disabled="data.loading">重置</el-button>
            <el-button class="funcCallButton" type="primary" @click=funcCall :disabled="data.loading">提交</el-button>
        </el-row>
    </el-row>

    <DialogViewFrame v-model="data.returnValVisible" :title="nodeFunc.Name" show-full-screen fixHeight
                     :level="nodeFunc.Level" width="620px" show-refresh @refresh="funcCallRefresh">
        <NodeFuncReturn :nodeFuncCall="data.nodeFuncCall" :loading="data.returnLoading"></NodeFuncReturn>
    </DialogViewFrame>
</template>

<script lang="ts">
import {defineComponent, onMounted, reactive, ref, watch} from "vue";
import {protoManage} from "../../proto/manage";
import {defaultVal} from "../../base/defaultVal";
import { globals } from "../../base/globals";
import {request} from "../../base/request";
import {convert} from "../../base/convert"
import JsonEdit from "../../components/json/JsonEdit.vue";
import NodeFuncReturn from "./NodeFuncReturn.vue";
import DialogViewFrame from "../../views/dialog/DialogViewFrame.vue";
import Empty from "../../components/Empty.vue"
import * as lodash from 'lodash';

interface NodeFuncCallInfo {
    formData:{}
    schema:{}
    uiSchema:{}
    formFooter:{}
    resetData:string
    loading: boolean
    returnLoading: boolean
    tabActiveName:string
    funcCallID:number
    returnValVisible:boolean
    nodeFuncCall:protoManage.NodeFuncCall
    fullScreen:boolean
}

export default defineComponent ({
    name: "NodeFuncCall",
    components: {
        Empty,
        JsonEdit,
        NodeFuncReturn,
        DialogViewFrame
    },
    props:{
        nodeFunc:{
            type: protoManage.NodeFunc,
            default: defaultVal.getDefaultProtoNodeFunc()
        },
        nodeFuncCall:{
            type: protoManage.NodeFuncCall,
            default: defaultVal.getDefaultProtoNodeFuncCall()
        }
    },
    setup(props){
        const data = reactive<NodeFuncCallInfo>({formData:{}, resetData:"", uiSchema:{},
            schema:globals.getJson(props.nodeFunc.Schema), formFooter:{show: false},
            loading:false, returnLoading: false, tabActiveName:"form", funcCallID:0, returnValVisible:false,
            fullScreen:false, nodeFuncCall: defaultVal.getDefaultProtoNodeFuncCall()})
        if (props.nodeFuncCall.Parameter != ""){
            data.formData = globals.getJson(props.nodeFuncCall.Parameter)
        }
        if (typeof data.schema === "object") {
            mergeSchema(data.schema)
        }

        const jsonEdit = ref<typeof JsonEdit>(JsonEdit);
        onMounted(()=>{
            data.resetData = JSON.stringify(data.formData)
            setJsonEditSchemaValue(data.schema)
            setJsonEditValue(data.formData)
        })

        function mergeSchema(obj:object){
            for (let i in obj){
                if (i == "ui"){
                    let uiObj = globals.getJson(obj[i])
                    mergeUI(Object(uiObj))
                    lodash.defaultsDeep(obj, uiObj)
                    return
                }
                if (typeof obj[i] === "object") {
                    mergeSchema(obj[i])
                }
            }
        }

        function mergeUI(obj:object){
            for (let i in obj){
                if (obj[i] == "UploadFile" && i == "ui:widget"){
                    obj["ui:action"] = ""
                    obj["ui:http-request"] = uploadFile
                    obj["ui:on-error"] = uploadFileError
                    obj["ui:on-preview"] = uploadFilePreview
                    obj["ui:before-remove"] = uploadFileRemove
                    obj["ui:responseFileUrl"] = uploadFileSetData
                    obj["ui:on-exceed"] = uploadFileExceed
                    return
                }
            }
        }

        function tabClick(tab, event) {
            if (tab.props.name == "form"){
                jsonValidate()
            }else  if (tab.props.name == "json") {
                setJsonEditValue(data.formData)
            }
        }

        function reset(){
            data.formData = globals.getJson(data.resetData)
            setJsonEditValue(data.formData)
        }

        async function funcCall() {
            setJsonEditValue(data.formData)
            if (! await jsonValidate()){
               return
            }
            data.loading = true
            request.reqCallNodeFunc(protoManage.ReqNodeFuncCall.create({
                NodeFuncCall: protoManage.NodeFuncCall.create({
                    FuncID: props.nodeFunc?.Base?.ID,
                    Parameter: JSON.stringify(data.formData)
                })
            })).then((response) => {
               data.funcCallID = response.ID
            }).catch(error => {data.loading = false}).finally(() => {})
        }

        watch(() => globals.globalsData.wsMessage.message, (newVal) => {
            if (globals.globalsData.wsMessage.order == protoManage.Order.NodeFuncCallAns) {
                funcCallFinish(newVal.nodeFuncCallAns)
            }
        },{deep:true})

        function funcCallFinish(returnVal:protoManage.AnsNodeFuncCall) {
            if (data.funcCallID == returnVal.NodeFuncCall?.Base?.ID) {
                data.loading = false
                if (returnVal.Error != null && returnVal.Error != ""){
                    globals.viewError(returnVal.Error)
                }else{
                    data.nodeFuncCall = protoManage.NodeFuncCall.create(returnVal.NodeFuncCall)
                    data.returnValVisible = true
                    data.returnLoading = false
                }
            }
        }

        function funcCallRefresh(){
            data.returnLoading = true
            funcCall()
        }

        function jsonChanged(jsonValue:string) {
            data.formData = globals.getJson(jsonValue)
        }

        function setJsonEditValue(value:object) {
            if (data.schema != ''){
                jsonEdit.value.setJsonValue(value)
            }
        }

        function setJsonEditSchemaValue(value:object) {
            if (data.schema != ''){
                jsonEdit.value.setJsonValueSchema(value)
            }
        }

        async function jsonValidate(): Promise<boolean> {
            let isOK = true
            if (data.schema != ''){
                await jsonEdit.value.validate().then((response) => {
                    if (response.length > 0) {
                        globals.viewError("参数校验失败(" + response[0].message + ")")
                        isOK = false
                    }
                })
            }
            return isOK
        }

        function getFileUrl(id:number, name:string):string {
            return id + "_" + name
        }

        function getFileID(url:string):number {
            return Number(url.split("_")[0])
        }

        function uploadFile(para){
            let progress = {percent:0}
            para.onProgress(progress)
            globals.calcFileMd5(para.file, (md5:string)=>{
                let resourceInfo = protoManage.NodeResource.create({
                    Name: para.file.name,
                    Md5: md5,
                    Sizes: para.file.size,
                    Type:protoManage.NodeResourceType.NodeResourceTypeCache,
                })
                request.reqNodeResourceUpload(resourceInfo, para.file,  (progressEvent) => {
                    if (progressEvent.lengthComputable) {
                        progressEvent.percent = Math.round(
                            (progressEvent.loaded * 100) / progressEvent.total
                        );
                        para.onProgress(progressEvent)
                    }
                }).then((response) => {
                    para.onSuccess({name:response.Name, url:getFileUrl(Number(response.Base?.ID), response.Name)})
                })
            })
        }

        function uploadFileError(err, file) {
            globals.viewError("上传文件失败:" + err)
        }

        function uploadFilePreview(file) {
            let fileInfo =  {url:"", name: ""}
            if (file?.url) {
                fileInfo = file
            }else if (file?.response?.url) {
                fileInfo = file?.response
            }
            request.reqNodeResourceDownLoad(protoManage.NodeResource.create({
                Base: protoManage.Base.create({ID: getFileID(fileInfo.url)}),
                Name: fileInfo.name
            }))
            return true
        }

        function uploadFileRemove(file) {
            if (file?.url) {
                globals.viewWarn("禁止删除历史文件")
                return false
            }else if (file?.response?.url) {
                return request.reqNodeResourceDel(protoManage.NodeResource.create({
                    Base: protoManage.Base.create({ID: getFileID(file?.response?.url)})
                })).then((response) => {})
            }
        }

        function uploadFileSetData(res) {
            return res.url
        }

        function uploadFileExceed(files) {
            globals.viewError("文件超出最大限制")
        }

        return {data, funcCall, reset, funcCallRefresh, jsonChanged, tabClick, jsonEdit, convert,
            uploadFile, uploadFileError, uploadFilePreview, uploadFileRemove, uploadFileSetData}
    }
})
</script>

<style scoped>
@import "../../css/card.css";
@import "../../css/color.css";

.nodeFuncCallRow{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
}

.nodeFuncCallTabsRow{
    width: 100%;
    flex: auto;
}

.funcCallTabs{
    width: 100%;
    flex: auto;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
}

.funcCallEmpty{
    width: 100%;
    height: 100%;
}

.formPane{
    height: 100%;
    width: 100%;
    overflow-y:scroll;
}

.formRow{
    height: 0;
    width: 100%;
}

.form{
    margin-right: 6px;
}

.jsonPane{
    height: 100%;
    width: 100%;
}

.funcCallButton{
    width: 80px;
    margin-top: 20px;
}

</style>

<style>

.funcCallTabs .el-tabs__content{
    height: 100%;
    overflow:visible;
}
</style>