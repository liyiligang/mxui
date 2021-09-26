<template>
    <v-chart class="returnCharts" :init-options="initOptions" :option="options" autoresize/>
</template>

<script lang="ts">

import {defineComponent, onMounted, h} from "vue";

export default defineComponent ({
    name: "NodeFuncReturnCharts",
    components: {},
    props:{
        initOptions:{
            type: Object,
            default: {
                width:"auto",
                height:"auto"
            }
        },
        options:{
            type: Object,
            default: ""
        }
    },
    setup(props){
        onMounted(()=>{

        })

        return {}
    }
})
</script>

<style scoped>
.returnCharts {
    height: 100%;
    width: 100%;
}
</style>