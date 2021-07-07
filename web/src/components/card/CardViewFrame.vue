<template>
    <el-card class="card cardViewFrame" @mouseenter="mouseEnter" @mouseleave="mouseLevel">
        <el-button v-if="isOfflineState()" class="cardViewFrameCloseButton"
                   plain icon="el-icon-close" @click="closeClick"></el-button>
        <template v-if=hasHeader #header>
            <slot name="header"></slot>
        </template>
        <slot name="body"></slot>
        <div v-if="isOfflineState()" class="cardMask"></div>
    </el-card>
</template>

<script lang="ts">
import {defineComponent, PropType, reactive} from "vue";
import {protoManage} from "../../proto/manage";
import {ElMessageBox} from "element-plus";

interface CardViewFrameInfo {
    isMouseHover:boolean
}

export default defineComponent ({
    name: "CardViewFrame",
    emits: ['closeClick'],
    props:{
        hasHeader:{
            type: Boolean,
            default: false
        },
        state:{
            type: Number as PropType<protoManage.State>,
            default: protoManage.State.StateNormal
        }
    },
    components: {

    },
    setup(props, context){

        const data = reactive<CardViewFrameInfo>({isMouseHover:false})

        function isOfflineState():boolean {
            return props.state < protoManage.State.StateNormal || props.state > protoManage.State.StateError
        }

        function closeClick(){
            ElMessageBox.confirm('此操作将永久删除相关数据, 是否继续?', '警告', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                context.emit('closeClick');
            }).catch(() => {});
        }

        function mouseEnter(){
           data.isMouseHover = true
        }

        function mouseLevel(){
            data.isMouseHover = false
        }

        return {isOfflineState, closeClick, mouseEnter, mouseLevel}
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

.cardMask{
    position:absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 12;
    display: flex;
    align-items: center;
    justify-content: center;
    color: darkred;
    font-size: 22px;
    pointer-events: none;
    backdrop-filter: grayscale(100%);
    /*background-color: rgba(0, 0, 0, 0);*/
    /*backdrop-filter: blur(2px);*/
}

</style>