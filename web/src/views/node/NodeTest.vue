<template>
    <el-button style="height: 60px" @click="data.show = true">{{"测试"}}</el-button>
    <DialogViewFrame v-model="data.show" title="测试">
        <div>{{"aaaaaa"}}</div>
    </DialogViewFrame>
</template>

<script lang="ts">
import {defineComponent, onMounted, reactive} from "vue";
import DialogViewFrame from "../../views/dialog/DialogViewFrame.vue";
import {globals} from "../../base/globals";

interface NodeTestInfo {
    show:boolean
}

export default defineComponent ({
    name: "NodeTest",
    components: {
        DialogViewFrame
    },
    setup(){
        const data = reactive<NodeTestInfo>({show:false})
        return {data}
    }
})
</script>

<style scoped>

</style>