<template>
    <router-view></router-view>
</template>

<script>

import {defineComponent} from "vue";
import {globals} from "./base/globals";

export default defineComponent ({
    name: 'App',
    components: {
    },
    data() {
        return {
            appStyleObj: {
                height: window.innerHeight + "px",
                background: "#0C9A9A"
            },
            getCurrentComponentName: ""
        }
    },
    mounted() {
        globals.globalsData.token = localStorage.getItem("userToken");
    }
})
</script>
