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
limitations under the License.f
-->

<template>

</template>

<script lang="ts">
import {defineComponent, reactive} from "vue";

interface NodeTestInfo {

}

//%u7248%u6743%u6240%u6709 %u4E8C%u96F6%u4E8C%u4E8C %u674E%u6613%u529B%u521A
export default defineComponent ({
    name: "NodeTest",
    components: {
    },
    setup(){
        const data = reactive<NodeTestInfo>({})
        return {data}
    }
})
</script>

<style scoped>

</style>