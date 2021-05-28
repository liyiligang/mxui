<template>
    <el-popover placement="bottom" trigger="manual" :width="288" v-model:visible="data.show">
        <el-form :model="data.formData" label-width="70px" ref="nodeNotifyFilterForm" size="medium">
            <el-form-item label="起始时间" prop="senderBeginTime">
                <el-date-picker
                    v-model="data.formData.senderBeginTime"
                    type="datetime"
                    placeholder="选择日期时间">
                </el-date-picker>
            </el-form-item>
            <el-form-item label="结束时间" prop="senderEndTime">
                <el-date-picker
                    v-model="data.formData.senderEndTime"
                    type="datetime"
                    placeholder="选择日期时间">
                </el-date-picker>
            </el-form-item>
            <el-form-item label="通知者" prop="senderName">
                <el-input v-model="data.formData.senderName" clearable></el-input>
            </el-form-item>
            <el-form-item label="通知类型" prop="senderType">
                <el-select v-model="data.formData.senderType" placeholder="请选择通知类型">
                    <el-option label="全部" :value="protoManage.NotifySenderType.NotifySenderTypeUnknow"></el-option>
                    <el-option label="用户" :value="protoManage.NotifySenderType.NotifySenderTypeUser"></el-option>
                    <el-option label="节点" :value="protoManage.NotifySenderType.NotifySenderTypeNode"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="通知状态" prop="senderState">
                <el-select v-model="data.formData.senderState" placeholder="请选择通知状态">
                    <el-option label="全部" :value="protoManage.State.StateNot"></el-option>
                    <el-option label="信息" :value="protoManage.State.StateUnknow"></el-option>
                    <el-option label="成功" :value="protoManage.State.StateNormal"></el-option>
                    <el-option label="警告" :value="protoManage.State.StateWarn"></el-option>
                    <el-option label="错误" :value="protoManage.State.StateError"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label-width="0px">
                <el-row class="NodeNotifyFormDutyButtonRow" type="flex" justify="space-around" align="middle">
                    <el-button size="medium" type="primary" @click="finish">完成</el-button>
                    <el-button size="medium" @click="cancel">取消</el-button>
                    <el-button size="medium" @click="resetForm">重置</el-button>
                </el-row>
            </el-form-item>
        </el-form>
        <template #reference>
            <el-button :class="data.filterButtonColor" class="NodeNotifyFormFilterButton" plain
                       icon="el-icon-scissors" @click="data.show = true"></el-button>
        </template>
    </el-popover>
</template>

<script lang="ts">
import {defineComponent, onMounted, reactive, computed, ref} from "vue";
import {protoManage} from "../../proto/manage";
import {onBeforeRouteUpdate, RouteLocationNormalizedLoaded, useRoute, useRouter} from "vue-router";
import merge from "webpack-merge";
import {globals} from "../../base/globals";
import {convert} from "../../base/convert";
import {ElForm} from "element-plus";

interface FormData {
    senderName:string
    senderType:protoManage.NotifySenderType
    senderState:protoManage.State
    senderBeginTime:string
    senderEndTime:string
}

interface NodeNotifyFormFilterInfo {
    formData:FormData
    show:boolean
    filterButtonColor:string
}

export default defineComponent ({
    name: "NodeNotifyFormFilter",
    components: {

    },
    setup(){
        const data = reactive<NodeNotifyFormFilterInfo>({show:false, filterButtonColor:"",
            formData:{senderName:"", senderType:protoManage.NotifySenderType.NotifySenderTypeUnknow,
                senderState:protoManage.State.StateNot, senderBeginTime:"", senderEndTime:""}})
        const route = useRoute()
        const router = useRouter()

        onBeforeRouteUpdate(to => {
            initNodeNotifyFormFilter(to)
        })

        onMounted(()=>{
            initNodeNotifyFormFilter(route)
        })

        function initNodeNotifyFormFilter(route:RouteLocationNormalizedLoaded){
            let senderName = String(route.query.senderName)
            let senderType = Number(route.query.senderType)
            let senderState = Number(route.query.senderState)
            let senderBeginTime = Number(route.query.senderBeginTime)
            let senderEndTime = Number(route.query.senderEndTime)
            let senderBeginTimeStr = ""
            let senderEndTimeStr = ""
            senderName = globals.isNull(senderName)?"":senderName
            senderType = globals.isNull(senderType)?protoManage.NotifySenderType.NotifySenderTypeUnknow:senderType
            senderState = globals.isNull(senderState)?protoManage.State.StateNot:senderState
            senderBeginTime = globals.isNull(senderBeginTime)?0:senderBeginTime
            senderEndTime = globals.isNull(senderEndTime)?0:senderEndTime
            senderBeginTimeStr = senderBeginTime==0?"": convert.timeStampToDateString(senderBeginTime)
            senderEndTimeStr = senderEndTime==0?"": convert.timeStampToDateString(senderEndTime)
            data.formData.senderName = senderName
            data.formData.senderType = senderType
            data.formData.senderState = senderState
            data.formData.senderBeginTime = senderBeginTimeStr
            data.formData.senderEndTime = senderEndTimeStr
            data.filterButtonColor = getFilterButtonColor()
        }


        function finish(){
            let senderBeginTime = 0
            let senderEndTime = 0
            if (data.formData.senderBeginTime != ""){
                senderBeginTime = convert.dateStringToTimeStamp(data.formData.senderBeginTime)
            }
            if (data.formData.senderEndTime != ""){
                senderEndTime = convert.dateStringToTimeStamp(data.formData.senderEndTime)
            }

            let query = merge<any>(route.query, {'senderName':data.formData.senderName,
                'senderType':data.formData.senderType,
                'senderState':data.formData.senderState,
                'senderBeginTime':senderBeginTime,
                'senderEndTime':senderEndTime,
                'pageSize':globals.globalsConfig.pageConfig.initSize,
                'pageNum':globals.globalsConfig.pageConfig.initNum})
            router.push({
                query:query
            })
            data.show = false
            data.filterButtonColor = getFilterButtonColor()
        }

        function cancel(){
            data.show = false
        }

        const nodeNotifyFilterForm = ref<typeof ElForm>(ElForm);
        function resetForm(){
            nodeNotifyFilterForm.value.resetFields()
        }

        function getFilterButtonColor() {
            if (data.formData.senderName != ""){
                return "color-state-success"
            }
            if (data.formData.senderType != protoManage.NotifySenderType.NotifySenderTypeUnknow){
                return "color-state-success"
            }
            if (data.formData.senderState != protoManage.State.StateNot){
                return "color-state-success"
            }
            if (data.formData.senderBeginTime != ""){
                return "color-state-success"
            }

            if (data.formData.senderEndTime != ""){
                return "color-state-success"
            }
            return ""
        }

        return {data, protoManage, finish, cancel, resetForm, nodeNotifyFilterForm}
    }
})
</script>

<style scoped>
@import "../../css/color.css";

.NodeNotifyFormFilterButton{
    padding: 0px;
    margin-right: 6px;
    border:0px;
    font-size:28px;
}

.NodeNotifyFormDutyButtonRow{
    width: 100%;
    flex-wrap: nowrap;
}

</style>