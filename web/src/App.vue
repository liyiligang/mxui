<template>
    <router-view></router-view>
</template>

<script>

import {defineComponent} from "vue";
import {globals} from "./base/globals";

export default defineComponent ({
    name: 'App',
    mounted() {
        globals.globalsData.token = localStorage.getItem(globals.globalsConfig.httpConfig.tokenKey)
    }
})
</script>
