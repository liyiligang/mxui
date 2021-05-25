<template>
    <el-popover placement="bottom" trigger="manual" :width="288" v-model:visible="data.show">
        <el-form :model="data.formData" label-width="auto" ref="form" size="medium">
            <el-form-item label="起始时间">
                <el-date-picker
                    v-model="data.formData.senderBeginTime"
                    type="datetime"
                    placeholder="选择日期时间">
                </el-date-picker>
            </el-form-item>
            <el-form-item label="结束时间">
                <el-date-picker
                    v-model="data.formData.senderEndTime"
                    type="datetime"
                    placeholder="选择日期时间">
                </el-date-picker>
            </el-form-item>
            <el-form-item label="通知类型">
                <el-select v-model="data.formData.senderType" placeholder="请选择通知类型">
                    <el-option label="全部" :value="protoManage.NotifySenderType.NotifySenderTypeUnknow"></el-option>
                    <el-option label="用户" :value="protoManage.NotifySenderType.NotifySenderTypeUser"></el-option>
                    <el-option label="节点" :value="protoManage.NotifySenderType.NotifySenderTypeNode"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="通知者">
                <el-input v-model="data.formData.senderName" clearable></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="finish">完成</el-button>
                <el-button @click="cancel">取消</el-button>
            </el-form-item>
        </el-form>
        <template #reference>
            <el-button :class="data.filterButtonColor" class="NodeNotifyFormFilterButton" plain
                       icon="el-icon-scissors" @click="data.show = true"></el-button>
        </template>
    </el-popover>
</template>

<script lang="ts">
import {defineComponent, onMounted, reactive, computed} from "vue";
import {protoManage} from "../../proto/manage";
import {onBeforeRouteUpdate, RouteLocationNormalizedLoaded, useRoute, useRouter} from "vue-router";
import merge from "webpack-merge";
import {globals} from "../../base/globals";
import {convert} from "../../base/convert";

interface FormData {
    senderName:string
    senderType:protoManage.NotifySenderType
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
            formData:{senderName:"", senderType:0, senderBeginTime:"", senderEndTime:""}})
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
            let senderBeginTime = Number(route.query.senderBeginTime)
            let senderEndTime = Number(route.query.senderEndTime)
            let senderBeginTimeStr = ""
            let senderEndTimeStr = ""
            senderName = globals.isNull(senderName)?"":senderName
            senderType = globals.isNull(senderType)?protoManage.NotifySenderType.NotifySenderTypeUnknow:senderType
            senderBeginTime = globals.isNull(senderBeginTime)?0:senderBeginTime
            senderEndTime = globals.isNull(senderEndTime)?0:senderEndTime
            senderBeginTimeStr = senderBeginTime==0?"": convert.timeStampToDateString(senderBeginTime)
            senderEndTimeStr = senderEndTime==0?"": convert.timeStampToDateString(senderEndTime)
            data.formData.senderName = senderName
            data.formData.senderType = senderType
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

        function getFilterButtonColor() {
            if (data.formData.senderName != ""){
                return "color-state-success"
            }
            if (data.formData.senderType != protoManage.NotifySenderType.NotifySenderTypeUnknow){
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

        return {data, protoManage, finish, cancel}
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
</style>