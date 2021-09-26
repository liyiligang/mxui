<template>
    <NodeFuncReturnCharts></NodeFuncReturnCharts>
</template>

<script lang="ts">
import {defineComponent, onMounted, reactive} from "vue";
import NodeFuncReturnCharts from "../../components/echarts/NodeFuncReturnCharts.vue";

interface NodeTestInfo {

}

export default defineComponent ({
    name: "NodeTest",
    components: {
        NodeFuncReturnCharts
    },
    setup(){
        const data = reactive<NodeTestInfo>({})
        return {data}
    }
})
</script>

<style scoped>

</style>