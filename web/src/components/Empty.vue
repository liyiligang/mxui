<template>
    <el-empty description="暂无数据" class="empty"></el-empty>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent ({
    name: "Empty",
    components: {

    }
})
</script>

<style scoped>
.empty{
    height: 100%;
}
</style>