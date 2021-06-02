<template>
    <el-row class="cardName" type="flex" justify="start" align="middle">
        <el-tooltip :popper-class="data.tooltipClass" :disabled="data.showTooltip"
                    effect="light" :content="name" placement="bottom">
            <router-link v-if="link!==undefined" class="card-text-omit card-link" :class="[color]" :to=link>
                <div :id="'cardNameDiv' + id">{{name}}</div>
            </router-link>
            <div v-else class="card-text-omit" :class="[color, 'name']" :id="'cardNameDiv' + id">{{name}}</div>
        </el-tooltip>
    </el-row>
</template>

<script lang="ts">
import {defineComponent, onMounted, reactive} from "vue";
import {globals} from "../../base/globals";

interface CardNameInfo {
    showTooltip:boolean
    tooltipClass:string
}

export default defineComponent ({
    name: "CardName",
    props:{
        id:{
            type: Number,
            required: true
        },
        name:{
            type: String,
            default: ""
        },
        color:{
            type: String,
            default: "color-state-main"
        },
        link:String
    },
    setup(props){
        const data = reactive<CardNameInfo>({showTooltip:false, tooltipClass:props.color+" cardNameTooltip"})
        onMounted(() => {
            let divDom = document.getElementById('cardNameDiv' + props.id)
            data.showTooltip = !globals.isEllipsis(divDom)
        });
        return {data}
    }
})
</script>

<style scoped>
@import "../../css/color.css";
@import "../../css/card.css";
.cardName{
    width: 100%;
    font-size: 18px;
    flex-wrap:nowrap;
}
</style>

<style>
@import "../../css/color.css";
.cardNameTooltip{
    width: 260px;
}
</style>