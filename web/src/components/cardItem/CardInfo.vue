<template>
    <el-row class="cardInfo" type="flex" justify="start" align="middle">
        <span class="cardInfoNowrap" :class="[descColor]">{{describe}}：</span>
        <router-link v-if="link!==''" class="card-text-omit card-link" :class="[nameColor]" :to=link>
            <span>{{name}}</span>
        </router-link>
        <span v-else  class="card-text-omit" :class="[nameColor]">{{name}}</span>
    </el-row>
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
.cardInfo{
    width: 100%;
    margin-top: 3px;
    font-size: 14px;
    flex-wrap:nowrap;
}

.cardInfoNowrap{
    white-space:nowrap;
}
</style>