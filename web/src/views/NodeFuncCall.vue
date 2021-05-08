<template>
    <el-row type="flex" justify="space-around" align="middle">
        <el-col :span="12">
            <NodeFuncCallTable class="history" ref="table" :tableData="data.nodeFuncCallList" @tableSelect="tableSelect" @tableLoad=tableLoad></NodeFuncCallTable>
        </el-col>
        <el-col :span="12">
            <el-tabs class="tabs" v-model="data.tabActiveName" type="border-card" @tabClick="tabClick" v-loading="data.loading">
                <el-tab-pane label="参数" name="parameter">
                    <JsonEdit ref="parameter" :readOnly="false" :modes="['code', 'tree']" :id="'parameter'+nodeFunc.Base.ID"
                              :name="nodeFunc.Name" @jsonChanged=parameterChanged></JsonEdit>
                </el-tab-pane>
                <el-tab-pane label="返回值" name="returnVal">
                    <JsonEdit ref="returnVal" :readOnly="true" :modes="['code', 'view']" :id="'returnVal'+nodeFunc.Base.ID"
                              :name="nodeFunc.Name" @jsonChanged=returnValChanged></JsonEdit>
                </el-tab-pane>
            </el-tabs>
        </el-col>
    </el-row>
    <el-button @click=funcCall :disabled="data.loading">调用</el-button>
</template>

<script lang="ts">
import {defineComponent, onMounted, PropType, reactive, ref} from "vue";
import JsonEdit from "../components/Json/JsonEdit.vue"
import NodeFuncCallTable from "../components/NodeFuncCallTable.vue"
import {ElMessage} from "element-plus";
import {request} from "../base/request";
import {protoManage} from "../proto/manage";

interface NodeFuncCallInfo {
    loading: boolean
    tabActiveName:string
    parameter:string|null|undefined
    returnVal:string|null|undefined
    tableIndex:number,
    nodeFuncCallList:protoManage.INodeFuncCall[]
    nodeFuncCallIDMap: Map<number|null|undefined, number>
    currentRow:protoManage.INodeFuncCall|null
}

export default defineComponent ({
    name: "NodeFuncCall",
    components: {
        JsonEdit,
        NodeFuncCallTable
    },
    props:{
        nodeFunc:{
            type: protoManage.NodeFunc,
            default: protoManage.NodeFunc.create()
        }
    },
    setup(props){
        const data = reactive<NodeFuncCallInfo>({loading:false, tableIndex:1, tabActiveName:"parameter", currentRow:null,
            parameter:"", returnVal:"", nodeFuncCallList:[], nodeFuncCallIDMap:new Map<number|null|undefined, number>()})
        let reqStr = "执行方法（" + props.nodeFunc?.Name+"）"

        function tabClick(tab, event) {

        }

        function tableLoad() {
            pullNodeFuncCall()
        }

        function parameterChanged(jsonValue:string) {
            data.parameter = jsonValue
        }

        function returnValChanged(jsonValue:string) {
            data.returnVal = jsonValue
        }

        const parameter = ref<typeof JsonEdit>(JsonEdit);
        const returnVal = ref<typeof JsonEdit>(JsonEdit);
        function tableSelect(row:protoManage.INodeFuncCall, oldRow:protoManage.INodeFuncCall) {
            data.currentRow = row
            parameter.value.setJsonValue(row.Parameter)
            returnVal.value.setJsonValue(row.ReturnVal)
        }

        const table = ref<typeof NodeFuncCallTable>(NodeFuncCallTable);
        function tableSetCurrentRow(row:protoManage.INodeFuncCall){
            data.currentRow = row
            table.value.tableSetCurrentRow(row)
        }

        function pullNodeFuncCall(){
            request.reqNodeFuncCallList(protoManage.Filter.create({
                FuncID:Number(props.nodeFunc.Base?.ID),
                PageSize:Number(10),
                PageNum:Number(data.tableIndex)
            })).then((response) => {
                for (let i = 0; i < response.NodeFuncCallList.length; i++){
                    pushNodeFuncCall(response.NodeFuncCallList[i], true)
                }
                if (response.NodeFuncCallList.length > 0){
                    if (data.currentRow == null){
                        tableSetCurrentRow(data.nodeFuncCallList[0])
                    }
                    data.tableIndex++
                }
            }).catch(error => {}).finally(()=>{})
        }

        function funcCall(){
            data.loading = true
            request.reqCallNodeFunc(protoManage.ReqNodeFuncCall.create({
                NodeFuncCall: protoManage.NodeFuncCall.create({
                    FuncID: props.nodeFunc?.Base?.ID,
                    Parameter: data.parameter
                })
            })).then((response) => {
                findCall(response.ID)
            }).catch(error => {}).finally(()=>{data.loading = false})
        }

        function findCall(baseID:number){
            let reqCount = 0
            let timerID = setInterval(()=> {
                request.reqNodeFuncCallByID(protoManage.NodeFuncCall.create({
                    Base: protoManage.Base.create({
                        ID: baseID
                    })
                })).then((response) => {
                    if (response.State == protoManage.State.StateNormal) {
                        ElMessage.error(reqStr + "成功");
                        findCallEnd(timerID, response)
                    }else if (response.State == protoManage.State.StateUnknow){
                        reqCount++
                        if (reqCount >= 1) {
                            ElMessage.error(reqStr + "超时");
                            findCallEnd(timerID, response)
                        }
                    }else {
                        ElMessage.error(reqStr + "失败");
                        findCallEnd(timerID, response)
                    }
                }).catch(error => {}).finally(()=>{})
            }, 1000)
        }

        function findCallEnd(timerID, response){
            clearInterval(timerID)
            pushNodeFuncCall(response, false)
            data.loading = false
        }

        function pushNodeFuncCall(nodeFuncCall:protoManage.INodeFuncCall, isPush:boolean){
            if (data.nodeFuncCallIDMap.has(nodeFuncCall.Base?.ID)){
                return
            }
            if (isPush){
                data.nodeFuncCallList.push(nodeFuncCall)
            }else{
                data.nodeFuncCallList.unshift(nodeFuncCall)
            }
            data.nodeFuncCallIDMap.set(nodeFuncCall.Base?.ID, data.nodeFuncCallList.length)
        }
        return {data, tabClick, funcCall, tableLoad, tableSelect,
            parameterChanged, returnValChanged, table, parameter, returnVal}
    }
})
</script>

<style scoped>
.history{
    width: 380px;
}
.tabs{
    width: 380px;
}
</style>