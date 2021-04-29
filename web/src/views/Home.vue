<template>
    <el-container class="home">
        <el-header class="headContainer" height ="80px">
            <Head></Head>
        </el-header>
        <el-divider class="headDivider"></el-divider>
        <el-container class="bodyContainer">
            <el-aside  width="210px">
                <Aside></Aside>
            </el-aside>
            <el-divider direction="vertical" class="asideDivider"></el-divider>
            <el-container class="mainContainer">
                <el-main class="elMain">
                    <router-view></router-view>
                </el-main>
<!--                <el-footer>-->
<!--                    <p>@liyiligang 湘ICP备20000119号</p>-->
<!--                    <p>Contact information: <a href="mailto:493415391@qq.com">493415391@qq.com</a>.</p>-->
<!--                </el-footer>-->
            </el-container>
        </el-container>
    </el-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Head from "../components/Head.vue";
import Aside from "../components/Aside.vue";
import NodeGroup from "./NodeGroup.vue";
import Node from "./Node.vue";
import NodeLink from "./NodeLink.vue";
import NodeFunc from "./NodeFunc.vue";
import NodeReport from "./NodeReport.vue";

export default defineComponent ({
  name: "Home",
  components: {
      Head,
      Aside,
      NodeGroup,
      Node,
      NodeLink,
      NodeFunc,
      NodeReport
  }
})
</script>

<style scoped>

/*.el-header, .el-footer {*/
/*    background-color: #B3C0D1;*/
/*    color: #333;*/
/*    !*text-align: center;*!*/
/*    !*line-height: 60px;*!*/
/*}*/

/*.el-aside {*/
/*    background-color: #D3DCE6;*/
/*    color: #333;*/
/*    !*text-align: center;*!*/
/*    !*line-height: 200px;*!*/
/*}*/

/*.el-main {*/
/*    background-color: #E9EEF3;*/
/*    color: #333;*/
/*    !*text-align: center;*!*/
/*    !*line-height: 160px;*!*/
/*}*/

/*body > .el-container {*/
/*    margin-bottom: 40px;*/
/*}*/

/*.el-container:nth-child(5) .el-aside,*/
/*.el-container:nth-child(6) .el-aside {*/
/*    line-height: 260px;*/
/*}*/

/*.el-container:nth-child(7) .el-aside {*/
/*    line-height: 320px;*/
/*}*/
.home{
    /*margin-left: 200px;*/
    /*margin-right: 200px;*/
    margin: auto;
    max-width: 75%;
    min-width: 75%;
    height: 100%;
}
.headContainer{
    padding: 0px;
    min-width: 635px;
}
.headDivider{
    margin-top: 2px;
    margin-bottom: 10px;
    min-width: 635px;
}
.bodyContainer{
    padding: 0px;
    max-width: 75%;
    min-width: 75%;
    position: absolute;
    top: 93px;
    bottom: 10px;
}
.asideDivider{
    margin: 3px 0px 0px 0px;
    height: 99%;
}
.mainContainer{
    padding: 0px;
}
.elMain{
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 10px;
}
</style>