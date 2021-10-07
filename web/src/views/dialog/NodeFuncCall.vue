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

    <DialogViewFrame v-model="data.returnValVisible" :title="nodeFunc.Name"
                     :level="nodeFunc.Level" width="620px">
        <NodeFuncReturn :nodeFuncCall="data.nodeFuncCall"></NodeFuncReturn>
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

interface NodeFuncCallInfo {
    formData:{}
    schema:{}
    uiSchema:{}
    formFooter:{}
    resetData:string
    loading: boolean
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
            loading:false, tabActiveName:"form", funcCallID:0, returnValVisible:false, fullScreen:false,
            nodeFuncCall: defaultVal.getDefaultProtoNodeFuncCall()})
        if (typeof data.schema === "object") {
            traversalSchema(data.schema)
        }

        const jsonEdit = ref<typeof JsonEdit>(JsonEdit);
        onMounted(()=>{
            if (props.nodeFuncCall.Parameter != ""){
                data.formData = globals.getJson(props.nodeFuncCall.Parameter)
            }
            data.resetData = JSON.stringify(data.formData)
            setJsonEditSchemaValue(data.schema)
            setJsonEditValue(data.formData)
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
                    data.returnValVisible = true
                    data.nodeFuncCall = protoManage.NodeFuncCall.create(returnVal.NodeFuncCall)
                }
            }
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

        return {data, funcCall, reset, jsonChanged, tabClick, jsonEdit, convert}
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