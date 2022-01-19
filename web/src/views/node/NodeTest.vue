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
    <el-button @click="setChs">中文</el-button>
    <el-button @click="setEng">英文</el-button>
</template>

<script lang="ts">
import {defineComponent, onMounted, reactive} from "vue";
import {globals} from "../../base/globals";
import i18n from '../../base/i18n'
import axios from "axios";
import * as SparkMD5 from "spark-md5";
import {protoManage} from "../../proto/manage";
import { request } from "../../base/request";


interface NodeTestInfo {

}

export default defineComponent ({
    name: "NodeTest",
    components: {
    },
    setup(){
        const data = reactive<NodeTestInfo>({})

        function setChs(){
            globals.globalsData.managerSetting.setting.language = "chs"
            i18n.global.locale = "chs"
        }

        function setEng(){
            globals.globalsData.managerSetting.setting.language = "eng"
            i18n.global.locale = "eng"
        }

        return {data, setChs, setEng}
    }
})
</script>

<style scoped>

</style>