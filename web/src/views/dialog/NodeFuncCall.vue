<template>
    <el-row type="flex" justify="center" align="middle">
        <el-tabs class="funcCallTabs" v-model="data.tabActiveName" type="border-card" @tabClick="tabClick">
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
</template>

<script lang="ts">
import {defineComponent, onMounted, reactive, ref} from "vue";
import {protoManage} from "../../proto/manage";
import {defaultVal} from "../../base/defaultVal";
import JsonEdit from "../../components/json/JsonEdit.vue";
import { globals } from "../../base/globals";
import {request} from "../../base/request";

interface NodeFuncCallInfo {
    formData:{}
    resetData:string
    schema:{}
    uiSchema:{}
    formFooter:{}
    tabActiveName:string
}

export default defineComponent ({
    name: "NodeFuncCall",
    components: {
        JsonEdit
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
            tabActiveName:"form"})
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
            // data.loading = true
            request.reqCallNodeFunc(protoManage.ReqNodeFuncCall.create({
                NodeFuncCall: protoManage.NodeFuncCall.create({
                    FuncID: props.nodeFunc?.Base?.ID,
                    Parameter: JSON.stringify(data.formData)
                })
            })).then((response) => {
            }).catch(error => {
                // data.loading = false
            }).finally(() => {})
        }

        function jsonChanged(jsonValue:string) {
            data.formData = globals.getJson(jsonValue)
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

        return {data, funcCall, reset, jsonChanged, tabClick, jsonEdit}
    }
})
</script>

<style scoped>
.formRow{
    height: 360px;
    overflow-y:scroll;
    margin-bottom: 5px;
}
.form{
    margin-right: 6px;
}
.json{
    height: 360px;
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
</style>