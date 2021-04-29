<template>
    <router-link v-if="link!==undefined" class="card-link" :to=link>
        <div :class="[color, 'name']">
            {{name}}
        </div>
    </router-link>
    <div v-else :class="[color, 'name']">
        {{name}}
    </div>
</template>

<script lang="ts">
import {defineComponent, onMounted, reactive} from "vue";
export default defineComponent ({
    name: "CardName",
    props:{
        color:{
            type: String,
            default: "color-state-main"
        },
        name:{
            type: String,
            default: ""
        },
        link:String
    }
})
</script>

<style scoped>
@import "../../css/color.css";
@import "../../css/card.css";
.name{
    font-size: 18px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    max-width: 260px;
}
</style>