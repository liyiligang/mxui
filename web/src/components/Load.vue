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