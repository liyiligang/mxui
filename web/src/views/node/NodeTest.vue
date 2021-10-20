<template>
    <el-button style="height: 60px" @click="click">{{"测试"}}</el-button>
    <DialogViewFrame v-model="data.show" title="测试">
        <div>{{"aaaaaa"}}</div>
    </DialogViewFrame>
</template>

<script lang="ts">
import {defineComponent, onMounted, reactive} from "vue";
import DialogViewFrame from "../../views/dialog/DialogViewFrame.vue";
import {globals} from "../../base/globals";
import axios from "axios";
import {protoManage} from "../../proto/manage";

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

        function click(){
            axios({
                // responseType: 'arraybuffer',
                method:'get',
                url: "https://mgmt.173172.cc:9090/cloudAppFile/icon/Blued_com.soft.blued_20210929164031.png",
                // timeout: globals.globalsConfig.httpConfig.requestTimeout,
            }).then(response => {
                console.log(response)
            })
        }


        return {data, click}
    }
})
</script>

<style scoped>

</style>