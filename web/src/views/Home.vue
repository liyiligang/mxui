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

.home{
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