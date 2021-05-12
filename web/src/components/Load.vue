<template>
    <el-row class="load flex-row-center-around">
        <el-skeleton v-for="i in 9" class="skeleton flex-row-center-between" animated>
            <template #template>
                <el-skeleton-item variant="text" class="skeletonItem" />
                <el-skeleton-item variant="text" class="skeletonItem" />
                <el-skeleton-item variant="text" class="skeletonItem" />
            </template>
        </el-skeleton>
    </el-row>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent ({
    name: "Load",
    components: {

    }
})
</script>

<style scoped>
@import "../css/flex.css";

.load{
    width: 100%;
    height: 100%;
}

.skeleton{
    margin: 0px;
    width: 33%;
    height: 18%;
}
.skeletonItem{
    width: 75%;
}
</style>