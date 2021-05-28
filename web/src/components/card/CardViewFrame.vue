<template>
    <el-card class="card cardViewFrame" @mouseenter="mouseEnter" @mouseleave="mouseLevel">
        <el-button v-show="isShowCloseButton()" class="cardViewFrameCloseButton"
                   plain icon="el-icon-close" @click="closeClick"></el-button>
        <el-row class="cardViewFrameBody">
            <slot name="body"></slot>
        </el-row>
    </el-card>
</template>

<script lang="ts">
import {defineComponent, PropType, reactive} from "vue";
import {protoManage} from "../../proto/manage";

interface CardViewFrameInfo {
    isMouseHover:boolean
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

        const data = reactive<CardViewFrameInfo>({isMouseHover:false})

        function isShowCloseButton():boolean {
            // return props.state != protoManage.State.StateUnknow
            return data.isMouseHover
        }

        function closeClick(){
            context.emit('closeClick');
        }

        function mouseEnter(){
           data.isMouseHover = true
        }

        function mouseLevel(){
            data.isMouseHover = false
        }

        return {isShowCloseButton, closeClick, mouseEnter, mouseLevel}
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