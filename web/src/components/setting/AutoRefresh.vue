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
limitations under the License.
-->

<template>
    <el-input-number v-model="globals.globalsData.managerSetting.setting.autoUpdateInterval"
                     :min="0.5" :precision="2">
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