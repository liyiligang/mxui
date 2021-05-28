<template>
    <el-card class="card cardViewFrame">
        <el-button v-if="isShowCloseButton()" class="cardViewFrameCloseButton"
                   plain icon="el-icon-close" @click="closeClick"></el-button>
        <el-row class="cardViewFrameBody">
            <slot name="body"></slot>
        </el-row>
    </el-card>
</template>

<script lang="ts">
import {defineComponent, PropType} from "vue";
import {protoManage} from "../../proto/manage";

interface CardViewFrameInfo {

}

export default defineComponent ({
    name: "CardViewFrame",
    emits: ['closeClick'],
    props:{
        state:{
            type: Number as PropType<protoManage.State>,
            default: protoManage.State.StateNot
        },
    },
    components: {

    },
    setup(props, context){
        function isShowCloseButton():boolean {
            return props.state == protoManage.State.StateUnknow
        }

        function closeClick(){
            context.emit('closeClick');
        }

        return {isShowCloseButton, closeClick}
    }
})
</script>

<style scoped>

.cardViewFrame{
    position:relative;
}

.cardViewFrameBody{
    width: 100%;
}

.cardViewFrameCloseButton{
    position:absolute;
    float: right;
    right: 13px;
    top:10px;
    padding: 0px;
    border:0px;
    font-size:18px;
    z-index: 10;
}

</style>