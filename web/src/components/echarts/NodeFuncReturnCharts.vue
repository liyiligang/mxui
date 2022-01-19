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