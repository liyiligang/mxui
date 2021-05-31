<template>
    <router-view></router-view>
</template>

<script>

import {defineComponent, onMounted} from "vue";
import {globals} from "./base/globals";

export default defineComponent ({
    name: 'App',
    setup() {
        onMounted(()=>{
            globals.globalsData.token = localStorage.getItem(globals.globalsConfig.httpConfig.tokenKey)
        })
    }
})
</script>
