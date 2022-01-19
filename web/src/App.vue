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
    <ElConfigProvider :locale="resolveComponent(globals.globalsData.managerSetting.setting.language)">
        <router-view></router-view>
    </ElConfigProvider>
</template>

<script>

import {defineComponent, onMounted, resolveComponent, watch} from "vue";
import {ElConfigProvider} from 'element-plus';
import chs from 'element-plus/lib/locale/lang/zh-cn'
import eng from 'element-plus/lib/locale/lang/en'
import {globals} from "./base/globals";
import {defaultVal} from "./base/defaultVal";
import i18n from "./base/i18n";

export default defineComponent ({
    name: 'App',
    components: {
        ElConfigProvider,
        chs,
        eng
    },
    setup() {

        onMounted(()=>{
            initUserSetting()
        })

        function initUserSetting(){
            let data = localStorage.getItem(globals.globalsConfig.localStorageKey.setting)
            if (data !== undefined && data != null && data !== "" && globals.isJson(data)) {
                globals.globalsData.managerSetting.setting = JSON.parse(data)
            }else{
                globals.globalsData.managerSetting.setting.language = defaultVal.getDefaultLanguage()
            }
            i18n.global.locale =  globals.globalsData.managerSetting.setting.language
            watch(() => globals.globalsData.managerSetting.setting, (newValue) => {
                i18n.global.locale =  globals.globalsData.managerSetting.setting.language
                localStorage.setItem(globals.globalsConfig.localStorageKey.setting, JSON.stringify(newValue));
            },{deep:true})
        }

        return {resolveComponent, globals}
    },
})
</script>
