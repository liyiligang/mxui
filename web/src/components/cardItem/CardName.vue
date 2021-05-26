<template>
    <el-row class="cardName" type="flex" justify="start" align="middle">
        <el-tooltip :disabled="data.showTooltip"  effect="dark"
                    :content="name" placement="bottom">
            <router-link v-if="link!==undefined" class="card-text-omit card-link" :class="[color]" :to=link>
                <div :id="'cardNameDiv' + id">{{name}}</div>
            </router-link>
            <div v-else class="card-text-omit" :class="[color, 'name']" :id="'cardNameDiv' + id">{{name}}</div>
        </el-tooltip>
    </el-row>
</template>

<script lang="ts">
import {defineComponent, onMounted, reactive} from "vue";

interface CardNameInfo {
    showTooltip:boolean
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

        const data = reactive<CardNameInfo>({showTooltip:false})

        onMounted(() => {
            let divDom = document.getElementById('cardNameDiv' + props.id)
            data.showTooltip = !isEllipsis(divDom)
        });

        function isEllipsis(dom) {
            let checkDom = dom.cloneNode(), parent, flag;
            checkDom.style.width = dom.offsetWidth + 'px';
            checkDom.style.height = dom.offsetHeight + 'px';
            checkDom.style.overflow = 'auto';
            checkDom.style.position = 'absolute';
            checkDom.style.zIndex = -1;
            checkDom.style.opacity = 0;
            checkDom.style.whiteSpace = "nowrap";
            checkDom.innerHTML = dom.innerHTML;
            parent = dom.parentNode;
            parent.appendChild(checkDom);
            flag = checkDom.scrollWidth > checkDom.offsetWidth;
            parent.removeChild(checkDom);
            return flag;
        }

        return {data}
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

.cardNameTooltip{

}
</style>