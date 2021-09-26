<template>
    <el-row type="flex" justify="center" align="middle" >
        <el-tabs class="funcCallTabs" v-loading="data.loading" v-model="data.tabActiveName" type="border-card" @tabClick="tabClick">
            <el-tab-pane label="表单" name="form">
                <el-row class="formRow" type="flex" justify="center" align="middle">
                    <vue-form class="form" v-model="data.formData" :form-footer="data.formFooter"
                              :ui-schema="data.uiSchema" :schema="data.schema"></vue-form>
                </el-row>
            </el-tab-pane>
            <el-tab-pane label="JSON" name="json">
                <JsonEdit class="json" ref="jsonEdit" :readOnly="false" :modes="['code', 'tree']" :id="'jsonEdit'+nodeFunc.Base.ID"
                          :name="nodeFunc.Name" @jsonChanged=jsonChanged></JsonEdit>
            </el-tab-pane>
        </el-tabs>
        <el-row type="flex" justify="center" align="middle">
            <el-button class="funcCallButton" type="primary" @click=reset :disabled="data.loading">重置</el-button>
            <el-button class="funcCallButton" type="primary" @click=funcCall :disabled="data.loading">提交</el-button>
        </el-row>
    </el-row>

    <el-dialog
        v-model="data.dialogVisible"
        width="620px"
        top="12vh"
        destroy-on-close
        :fullscreen="data.fullScreen"
        :custom-class="getFuncCallReturnView()">
        <template v-slot:title>
            <el-row class="funcCallTitleRow" type="flex" justify="space-between" align="middle" >
                <span class="card-dialog-title" :class=convert.getColorByLevel(nodeFunc.Level)>{{nodeFunc.Name}}</span>
                <i class="funcCallIcon" :class="[convert.getNodeFuncCallStateIcon(data.nodeFuncCall.State),
                convert.getColorByState(data.nodeFuncCall.State)]"></i>
                <el-button size="small" @click="setFullScreen"></el-button>
                <div></div>
            </el-row>
        </template>
        <NodeFuncReturn :nodeFuncCall="data.nodeFuncCall"></NodeFuncReturn>
    </el-dialog>
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
import {ElMessage} from "element-plus";

interface NodeFuncCallInfo {
    formData:{}
    schema:{}
    uiSchema:{}
    formFooter:{}
    resetData:string
    loading: boolean
    tabActiveName:string
    funcCallID:number
    dialogVisible:boolean
    nodeFuncCall:protoManage.NodeFuncCall
    fullScreen:boolean
}

export default defineComponent ({
    name: "NodeFuncCall",
    components: {
        JsonEdit,
        NodeFuncReturn
    },
    props:{
        nodeFunc:{
            type: protoManage.NodeFunc,
            default: defaultVal.getDefaultProtoNodeFunc()
        }
    },
    setup(props){
        const data = reactive<NodeFuncCallInfo>({formData:{}, resetData:"", uiSchema:{},
            schema:globals.getJson(props.nodeFunc.Schema), formFooter:{show: false},
            loading:false, tabActiveName:"form", funcCallID:0, dialogVisible:false, fullScreen:false,
            nodeFuncCall: defaultVal.getDefaultProtoNodeFuncCall()})
        if (typeof data.schema === "object") {
            traversalSchema(data.schema)
        }

        const jsonEdit = ref<typeof JsonEdit>(JsonEdit);
        onMounted(()=>{
            data.resetData = JSON.stringify(data.formData)
            jsonEdit.value.setJsonValueSchema(data.schema)
            jsonEdit.value.setJsonValue(data.formData)
        })

        function traversalSchema(obj:object){
            for (let i in obj){
                if (i == "ui:options"){
                    let str:string = obj[i]
                    str = "{" + str.replace(/\'/g, "\"") + "}"
                    str = str.replace(/\./g, ",")
                    obj[i] = globals.getJson(str)
                    continue
                }
                if (typeof obj[i] === "object") {
                    traversalSchema(obj[i])
                }
            }
        }

        function tabClick(tab, event) {
            if (tab.props.name == "form"){
                jsonValidate()
            }else  if (tab.props.name == "json") {
                jsonEdit.value.setJsonValue(data.formData)
            }
        }

        function reset(){
            data.formData = globals.getJson(data.resetData)
            jsonEdit.value.setJsonValue(data.formData)
        }

        async function funcCall() {
            jsonEdit.value.setJsonValue(data.formData)
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
            }).catch(error => {}).finally(() => {})
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
                    data.dialogVisible = true
                    data.nodeFuncCall = protoManage.NodeFuncCall.create(returnVal.NodeFuncCall)
                    ElMessage.success("调用成功");
                }
            }
        }

        function jsonChanged(jsonValue:string) {
            data.formData = globals.getJson(jsonValue)
        }

        function setFullScreen() {
            data.fullScreen = !data.fullScreen
        }

        function getFuncCallReturnView() {
            return data.fullScreen?"funcCallReturnFullScreen":"funcCallReturnView"
        }

        async function jsonValidate(): Promise<boolean> {
            let isOK = true
            await jsonEdit.value.validate().then((response) => {
                if (response.length > 0) {
                    globals.viewError("参数校验失败(" + response[0].message + ")")
                    isOK = false
                }
            })
            return isOK
        }

        return {data, funcCall, reset, jsonChanged, tabClick, setFullScreen, getFuncCallReturnView,
            jsonEdit, convert}
    }
})
</script>

<style scoped>
@import "../../css/card.css";
@import "../../css/color.css";

.formRow{
    height: 320px;
    overflow-y:scroll;
    margin-bottom: 5px;
}
.form{
    margin-right: 6px;
}
.json{
    height: 320px;
    margin-bottom: 5px;
}
.funcCallButton{
    width: 80px;
    margin-top: 20px;
}

.funcCallTabs{
    width: 100%;
    height: 100%;
}

.funcCallTitleRow{
    width: 100%;
}

.funcCallIcon{
    font-size: 32px;
    margin-right: 60px;
}

</style>

<style>
.funcCallReturnView .el-dialog__body{
    height: calc(80vh - 125px);
}

.funcCallReturnFullScreen .el-dialog__body{
    height: calc(100vh - 125px);
}
</style>