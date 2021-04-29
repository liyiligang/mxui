<template>
    <div :class="['card-info']">
        <span :class="[descColor]">{{describe}}：</span>
        <router-link v-if="link!==''" class="card-link" :to=link>
            <span :class="[nameColor]">{{name}}</span>
        </router-link>
        <span v-else :class="[nameColor]">{{name}}</span>
    </div>
</template>

<script lang="ts">
import {defineComponent, onMounted, reactive} from "vue";
export default defineComponent ({
    name: "CardInfo",
    props:{
        name:{
            type: String,
            default: ""
        },
        describe:{
            type: String,
            default: ""
        },
        nameColor:{
            type: String,
            default: "color-text-normal"
        },
        descColor:{
            type: String,
            default: "color-text-normal"
        },
        link:{
            type: String,
            default: ""
        },
    }
})
</script>

<style scoped>
@import "../../css/color.css";
@import "../../css/card.css";
.card-info{
    margin-top: 2px;
    font-size: 14px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    max-width: 260px;
}
</style>