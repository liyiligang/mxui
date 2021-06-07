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
            globals.globalsData.manager.Token = localStorage.getItem(globals.globalsConfig.localStorageKey.token)
        })
    }
})
</script>
