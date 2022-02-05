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
    <el-menu class="menu" @select="menuSelect" :default-active="data.activeName" :default-openeds="data.activeSubMenu">
        <el-menu-item class="submenuSpanOne" :index="routerName.node">{{$t('sideBar.node')}}</el-menu-item>
        <el-menu-item class="submenuSpanOne" :index="routerName.nodeFunc">{{$t('sideBar.nodeFunc')}}</el-menu-item>
        <el-menu-item class="submenuSpanOne" :index="routerName.nodeReport">{{$t('sideBar.nodeReport')}}</el-menu-item>
        <el-menu-item class="submenuSpanOne" :index="routerName.nodeResource">{{$t('sideBar.nodeResource')}}</el-menu-item>
        <el-menu-item class="submenuSpanOne" :index="routerName.nodeNotify">{{$t('sideBar.nodeNotify')}}</el-menu-item>
<!--        <el-menu-item class="submenuSpanOne" :index="routerName.nodeTest">{{$t('sideBar.nodeTest')}}</el-menu-item>-->
    </el-menu>
</template>

<script lang="ts">
import {defineComponent, onMounted, reactive} from "vue";
import { routerPath, routerName } from "../router";
import { globals } from "../base/globals";
import i18n from '../base/i18n'
import {onBeforeRouteUpdate, useRoute} from "vue-router";

interface SidebarInfo {
    activeName:String
    activeSubMenu:Array<String>
}

export default defineComponent ({
    name: "Sidebar",
    components: {

    },
    setup(){
        const data = reactive<SidebarInfo>({activeName:routerName.node, activeSubMenu:["1", "2"]})
        const route = useRoute()

        onBeforeRouteUpdate(to => {
            if (to.name != data.activeName) {
                data.activeName = String(to.name)
            }
        })

        onMounted(()=>{
            if (route.name == null){
                return ''
            }
            data.activeName = route.name.toString()
        })

        function menuSelect(key:string, keyPath:string){
            switch (key) {
                case routerName.node:
                case routerName.nodeFunc:
                case routerName.nodeReport:
                case routerName.nodeResource:
                case routerName.nodeNotify:
                    routerPath.toPath(key, {initPageNum:true, withPageSize:true}, route)
                    break
                // case routerName.nodeTest:
                //     routerPath.toPath(key)
                //     break
                default:
                    globals.viewError(i18n.global.t('sideBar.errorKey') + key)
                    break
            }
        }
        return {data, menuSelect, routerName}
    }
})
</script>

<style scoped>
.el-menu {
    border-right: none;
}

.menu{
    width: 100%;
    height: 100%;
}
.submenuSpanOne {
    justify-content: center;
    font-size:18px;
}
.submenuSpanTwo {
    font-size:16px;
}
</style>