<template>
    <el-menu class="menu" @select="menuSelect" default-active="1-1">
        <el-submenu index="1">
            <template #title>
                <span class="submenuSpanOne">维度</span>
            </template>
            <el-menu-item class="submenuSpanTwo" index="1-1" >集群</el-menu-item>
            <el-menu-item class="submenuSpanTwo" index="1-2" >服务</el-menu-item>
        </el-submenu>
        <el-submenu index="2">
            <template #title>
                <span class="submenuSpanOne">功能</span>
            </template>
            <el-menu-item class="submenuSpanTwo" index="2-1">节点</el-menu-item>
            <el-menu-item class="submenuSpanTwo" index="2-2">连接</el-menu-item>
            <el-menu-item class="submenuSpanTwo" index="2-3">方法</el-menu-item>
            <el-menu-item class="submenuSpanTwo" index="2-4">报告</el-menu-item>
            <el-menu-item class="submenuSpanTwo" index="2-5">通知</el-menu-item>
        </el-submenu>
    </el-menu>
</template>

<!--:default-active="defaultActive"-->
<!--@open="menuOpen"-->
<!--@close="menuClose"-->

<script lang="ts">
import { defineComponent } from "vue";
import { routerPath } from "../router";

export default defineComponent ({
    name: "Aside",
    components: {

    },
    setup(){
        function menuSelect(key:string, keyPath:string){
            switch (key) {
                case "1-1":
                    routerPath.toGroupAll()
                    break
                case "1-2":
                    routerPath.toTypeAll()
                    break
                case "2-1":
                    routerPath.toNodeAll()
                    break
                case "2-2":
                    routerPath.toNodeLinkAll()
                    break
                case "2-3":
                    routerPath.toNodeFuncAll()
                    break
                case "2-4":
                    routerPath.toNodeReportAll()
                    break
                case "2-5":
                    routerPath.toNodeNotifyAll()
                    break
                default:
                    console.log("错误的菜单选项")
                    break
            }
        }
        return {menuSelect}
    }
})
</script>

<style scoped>
.el-menu {
    border-right: none;
}
/*.el-submenu {*/
/*    text-align:center;*/
/*}*/
/*.menu-item{*/
/*    font-size:20px;*/
/*    text-align:center;*/
/*}*/
.menu{
    height: 100%;
}
.submenuSpanOne {
    font-size:18px;
}
.submenuSpanTwo {
    font-size:16px;
}
.menuItem {
    font-size:14px;
}
</style>