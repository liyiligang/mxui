<template>
    <el-dialog
        :modelValue="dialogModel"
        width="520px"
        top="18vh"
        @close="dialogClose"
        destroy-on-close>
        <template v-slot:title>
            <span class="card-dialog-title color-text-normal">{{dialogTitle}}</span>
        </template>
        <el-switch v-model="userSetting.isPageFix" inactive-text="固定分页"
                   active-color="#13ce66" inactive-color="#ff4949"></el-switch>
    </el-dialog>
</template>

<script lang="ts">
import {defineComponent, reactive, inject} from "vue";
import {globals} from "../../base/globals";

interface SystemSetInfo {

}

export default defineComponent ({
    name: "SystemSet",
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
        const data = reactive<SystemSetInfo>({})
        const userSetting = inject<globals.UserSetting>('userSetting')

        function dialogClose(){
            context.emit("update:dialogModel", false)
        }

        return {data, userSetting, dialogClose}
    }
})
</script>

<style scoped>
@import "../../css/color.css";
@import "../../css/card.css";
</style>