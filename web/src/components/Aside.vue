<template>
    <el-menu class="menu" @select="menuSelect" :default-active="data.activeName" :default-openeds="data.activeSubMenu">
        <el-sub-menu index="1">
            <template #title>
                <span class="submenuSpanOne">分组</span>
            </template>
            <el-menu-item class="submenuSpanTwo" :index="routerName.nodeGroup" >集群</el-menu-item>
            <el-menu-item class="submenuSpanTwo" :index="routerName.nodeType" >服务</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="2">
            <template #title>
                <span class="submenuSpanOne">功能</span>
            </template>
            <el-menu-item class="submenuSpanTwo" :index="routerName.node">节点</el-menu-item>
            <el-menu-item class="submenuSpanTwo" :index="routerName.nodeLink">连接</el-menu-item>
            <el-menu-item class="submenuSpanTwo" :index="routerName.nodeFunc">方法</el-menu-item>
            <el-menu-item class="submenuSpanTwo" :index="routerName.nodeReport">报告</el-menu-item>
            <el-menu-item class="submenuSpanTwo" :index="routerName.nodeNotify">通知</el-menu-item>
            <el-menu-item class="submenuSpanTwo" :index="routerName.nodeTest">测试</el-menu-item>
        </el-sub-menu>
    </el-menu>
</template>

<script lang="ts">
import {defineComponent, onMounted, reactive} from "vue";
import { routerPath, routerName } from "../router";
import { globals } from "../base/globals";
import {useRoute} from "vue-router";
import {protoManage} from "../proto/manage";

interface AsideInfo {
    activeName:String
    activeSubMenu:Array<String>
}

export default defineComponent ({
    name: "Aside",
    components: {

    },
    setup(){
        const data = reactive<AsideInfo>({activeName:routerName.nodeGroup, activeSubMenu:["1", "2"]})
        const route = useRoute()
        onMounted(()=>{
            if (route.name == null){
                return``
            }
            data.activeName = route.name.toString()
        })

        function menuSelect(key:string, keyPath:string){
            switch (key) {
                case routerName.nodeGroup:
                    routerPath.toGroupAll()
                    break
                case routerName.nodeType:
                    routerPath.toTypeAll()
                    break
                case routerName.node:
                    routerPath.toNodeAll()
                    break
                case routerName.nodeLink:
                    routerPath.toNodeLinkAll()
                    break
                case routerName.nodeFunc:
                    routerPath.toNodeFuncAll()
                    break
                case routerName.nodeReport:
                    routerPath.toNodeReportAll()
                    break
                case routerName.nodeNotify:
                    routerPath.toNodeNotifyAll()
                    break
                case routerName.nodeTest:
                    routerPath.toNodeTestAll()
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
    font-size:18px;
}
.submenuSpanTwo {
    font-size:16px;
}
</style>