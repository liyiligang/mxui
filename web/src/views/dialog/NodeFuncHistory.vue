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
limitations under the License.f
-->

<template>
    <el-row class="tableFuncCallTableRow" type="flex" justify="center" align="middle" v-loading="data.loading">
        <NodeFuncCallTable class="tableFuncCallTable" :tableData="data.nodeFuncCallList"
                           @tableSelect="tableSelect" @tableLoad=tableLoad
                           @clickParameter="clickParameter" @clickReturnVal="clickReturnVal"></NodeFuncCallTable>
    </el-row>

    <DialogViewFrame v-model="data.parameterVisible" :title="nodeFunc.Name" show-full-screen fixHeight
                     :level="nodeFunc.Level" width="520px">
        <NodeFuncCall :nodeFunc="nodeFunc" :nodeFuncCall="data.nodeFuncCall"></NodeFuncCall>
    </DialogViewFrame>

    <DialogViewFrame v-model="data.returnValVisible" :title="nodeFunc.Name" show-full-screen fixHeight
                     :level="nodeFunc.Level" width="700px">
        <NodeFuncReturn :nodeFuncCall="data.nodeFuncCall"></NodeFuncReturn>
    </DialogViewFrame>
</template>

<script lang="ts">
import {defineComponent, reactive} from "vue";
import NodeFuncCallTable from "../../components/table/NodeFuncCallTable.vue"
import NodeFuncCall from "../../views/dialog/NodeFuncCall.vue"
import NodeFuncReturn from "../../views/dialog/NodeFuncReturn.vue"
import DialogViewFrame from "../../views/dialog/DialogViewFrame.vue";
import {request} from "../../base/request";
import {globals} from "../../base/globals";
import {protoManage} from "../../proto/manage";
import {defaultVal} from "../../base/defaultVal";
import { convert } from "../../base/convert";


interface NodeFuncHistoryInfo {
    loading: boolean
    tableIndex:number,
    nodeFuncCallList:protoManage.INodeFuncCall[]
    nodeFuncCallIDMap: Map<number|null|undefined, number>
    currentRow:protoManage.INodeFuncCall|null
    nodeFuncCall:protoManage.NodeFuncCall
    parameterVisible:boolean
    returnValVisible:boolean
}

export default defineComponent ({
    name: "NodeFuncHistory",
    components: {
        NodeFuncCallTable,
        NodeFuncCall,
        NodeFuncReturn,
        DialogViewFrame
    },
    props:{
        nodeFunc:{
            type: protoManage.NodeFunc,
            default: defaultVal.getDefaultProtoNodeFunc()
        }
    },
    setup(props){
        const data = reactive<NodeFuncHistoryInfo>({loading:false, tableIndex:1, currentRow:null,
            parameterVisible:false, returnValVisible:false, nodeFuncCallList:[],
            nodeFuncCall:defaultVal.getDefaultProtoNodeFuncCall(),
            nodeFuncCallIDMap:new Map<number|null|undefined, number>()})

        function tableLoad() {
            pullNodeFuncCall()
        }

        function tableSelect(row:protoManage.INodeFuncCall, oldRow:protoManage.INodeFuncCall) {

        }

        function clickParameter(id:number) {
            data.loading = true
            request.reqNodeFuncCallParameterByID(protoManage.NodeFuncCall.create({
                Base:protoManage.Base.create({ID:id}),
                FuncID:Number(props.nodeFunc.Base?.ID)
            })).then((response) => {
                data.nodeFuncCall = response
                data.parameterVisible = true
            }).catch(error => {}).finally(()=>{ data.loading = false})
        }

        function clickReturnVal(id:number) {
            data.loading = true
            request.reqNodeFuncCallReturnValByID(protoManage.NodeFuncCall.create({
                Base:protoManage.Base.create({ID:id}),
                FuncID:Number(props.nodeFunc.Base?.ID)
            })).then((response) => {
                data.nodeFuncCall = response
                data.returnValVisible = true
            }).catch(error => {}).finally(()=>{ data.loading = false})
        }

        function pullNodeFuncCall(){
            data.loading = true
            request.reqNodeFuncCallList(protoManage.ReqNodeFuncCallList.create({
                Page:protoManage.Page.create({
                    Count:globals.globalsConfig.funcCallConfig.tablePageSize,
                    Num:globals.getPageNumOffset(data.tableIndex)
                }),
                FuncID:Number(props.nodeFunc.Base?.ID),
            })).then((response) => {
                for (let i = 0; i < response.NodeFuncCallList.length; i++){
                    pushNodeFuncCall(response.NodeFuncCallList[i])
                }
                if (response.NodeFuncCallList.length > 0){
                    data.tableIndex++
                }
            }).catch(error => {}).finally(()=>{data.loading = false})
        }

        function pushNodeFuncCall(nodeFuncCall:protoManage.INodeFuncCall){
            if (data.nodeFuncCallIDMap.has(nodeFuncCall.Base?.ID)){
                return
            }
            data.nodeFuncCallList.push(nodeFuncCall)
            data.nodeFuncCallIDMap.set(nodeFuncCall.Base?.ID, data.nodeFuncCallList.length)
        }
        return {data, tableLoad, tableSelect, clickParameter, clickReturnVal, convert}
    }
})
</script>

<style scoped>

.tableFuncCallTableRow{
    width: 100%;
    height: 100%;
}

.tableFuncCallTable{
    width: 100%;
    height: 100%;
}
</style>