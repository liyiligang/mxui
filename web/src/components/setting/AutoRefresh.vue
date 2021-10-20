<template>
    <el-input-number v-model="globals.globalsData.managerSetting.setting.autoUpdateInterval"
                     :min="0.5" :precision="2" size="small">
    </el-input-number>
</template>

<script lang="ts">
import {defineComponent, reactive} from "vue";
import {globals} from "../../base/globals";

interface AutoRefreshInfo {

}

export default defineComponent ({
    name: "AutoRefresh",
    components: {

    },

    setup(){
        const data = reactive<AutoRefreshInfo>({})
        return {data, globals}
    }
})
</script>

<style scoped>
.autoRefreshInfoSelect{
    width: 150px;
}
</style>