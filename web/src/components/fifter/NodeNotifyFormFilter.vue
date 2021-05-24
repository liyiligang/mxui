<template>
    <el-popover placement="bottom" trigger="manual" :width="500" v-model:visible="data.show">
        <el-form :model="data.formData" :rules="data.formRule" label-width="auto"
                 size="medium" ref="ruleForm" class="demo-ruleForm">
            <el-form-item label="通知时间">
                <el-date-picker
                    v-model="data.formData.senderBeginTime"
                    type="datetime"
                    placeholder="选择日期时间">
                </el-date-picker>
                <el-date-picker
                    v-model="data.formData.senderEndTime"
                    type="datetime"
                    placeholder="选择日期时间">
                </el-date-picker>
            </el-form-item>
            <el-form-item label="通知者">
                <el-input v-model="data.formData.senderName"></el-input>
            </el-form-item>
            <el-form-item label="通知类型">
                <el-select v-model="data.formData.senderType" placeholder="请选择通知类型">
                    <el-option label="全部" :value="protoManage.NotifySenderType.NotifySenderTypeUnknow"></el-option>
                    <el-option label="用户" :value="protoManage.NotifySenderType.NotifySenderTypeUser"></el-option>
                    <el-option label="节点" :value="protoManage.NotifySenderType.NotifySenderTypeNode"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="finish">完成</el-button>
                <el-button @click="cancel">取消</el-button>
            </el-form-item>
        </el-form>
        <template #reference>
            <el-button @click="data.show = true">过滤</el-button>
        </template>
    </el-popover>
</template>

<script lang="ts">
import {defineComponent, reactive} from "vue";
import {protoManage} from "../../proto/manage";
import {useRoute, useRouter} from "vue-router";
import merge from "webpack-merge";
import {globals} from "../../base/globals";

interface FormData {
    senderName:string
    senderType:protoManage.NotifySenderType
    senderBeginTime:string
    senderEndTime:string
}

interface FormRule {

}

interface NodeNotifyFormFilterInfo {
    formData:FormData
    formRule:FormRule
    show:boolean
}

export default defineComponent ({
    name: "NodeNotifyFormFilter",
    components: {

    },
    setup(){
        const data = reactive<NodeNotifyFormFilterInfo>({show:false, formData:{senderName:"",
                senderType:0, senderBeginTime:"", senderEndTime:""}, formRule:{}})
        const route = useRoute()
        const router = useRouter()

        function finish(){
            let senderBeginTime = 0
            let senderEndTime = 0
            if (data.formData.senderBeginTime != ""){
                senderBeginTime = new Date(data.formData.senderBeginTime).getTime() / 1000
            }
            if (data.formData.senderEndTime != ""){
                senderEndTime = new Date(data.formData.senderEndTime).getTime() / 1000
            }

            // console.log(new Date().getTime())
            console.log(data.formData.senderBeginTime, senderBeginTime)

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
        }

        function cancel(){
            data.show = false
        }

        return {data, protoManage, finish, cancel}
    }
})
</script>

<style scoped>

</style>