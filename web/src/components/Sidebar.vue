<template>
    <el-menu class="menu" @select="menuSelect" :default-active="data.activeName" :default-openeds="data.activeSubMenu">
        <el-menu-item class="submenuSpanOne" :index="routerName.node">节点</el-menu-item>
        <el-menu-item class="submenuSpanOne" :index="routerName.nodeFunc">方法</el-menu-item>
        <el-menu-item class="submenuSpanOne" :index="routerName.nodeReport">报告</el-menu-item>
        <el-menu-item class="submenuSpanOne" :index="routerName.nodeNotify">通知</el-menu-item>
        <el-menu-item class="submenuSpanOne" :index="routerName.nodeTest">测试</el-menu-item>
    </el-menu>
</template>

<script lang="ts">
import {defineComponent, onMounted, reactive} from "vue";
import { routerPath, routerName } from "../router";
import { globals } from "../base/globals";
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
                case routerName.nodeNotify:
                    routerPath.toPath(key, {initPageNum:true, withPageSize:true}, route)
                    break
                case routerName.nodeTest:
                    routerPath.toPath(key)
                    break
                default:
                    globals.viewError("错误的侧边栏菜单选项: " + key)
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
    text-align: center;
    font-size:18px;
}
.submenuSpanTwo {
    font-size:16px;
}
</style>