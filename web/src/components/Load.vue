<template>
    <el-space wrap>
        <el-skeleton v-for="i in 9" class="skeleton" animated>
            <template #template>
                <el-skeleton-item variant="text" class="skeletonItem" />
                <el-skeleton-item variant="text" class="skeletonItem" />
                <el-skeleton-item variant="text" class="skeletonItem" />
            </template>
        </el-skeleton>
    </el-space>
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
.skeleton{
    margin-top: 35px;
    width: 296px;
    text-align: center;
}
.skeletonItem{
    margin-top: 30px;
    width: 80%;
}
</style>