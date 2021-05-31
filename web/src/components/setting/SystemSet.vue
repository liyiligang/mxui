<template>
    <el-switch v-model="userSetting.isPageFix" inactive-text="固定分页"
               active-color="#13ce66" inactive-color="#ff4949"></el-switch>
</template>

<script lang="ts">
import {defineComponent, reactive, inject, watch} from "vue";
import {globals} from "../../base/globals";

interface SystemSetInfo {

}

export default defineComponent ({
    name: "SystemSet",
    components: {

    },
    setup(){
        const data = reactive<SystemSetInfo>({})
        const userSetting = inject<globals.UserSetting>('userSetting')
        return {data, userSetting}
    }
})
</script>

<style scoped>

</style>