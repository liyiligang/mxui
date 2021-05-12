<template>
    <el-row class="cardName" type="flex" justify="start" align="middle">
        <router-link v-if="link!==undefined" class="card-text-omit card-link" :class="[color]" :to=link>
            <div>{{name}}</div>
        </router-link>
        <div v-else class="card-text-omit" :class="[color, 'name']">{{name}}</div>
    </el-row>
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
.cardName{
    font-size: 18px;
    flex-wrap:nowrap;
}
</style>