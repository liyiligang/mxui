<!--
Copyright 2021 liyiligang

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
-->


<template>
    <el-card class="card cardViewFrame" @mouseenter="mouseEnter" @mouseleave="mouseLevel">
        <el-button v-if="isGray" class="cardViewFrameCloseButton"
                   plain :icon="Close" @click="closeClick"></el-button>
        <template v-if=hasHeader #header>
            <slot name="header"></slot>
        </template>
        <slot name="body"></slot>
        <div v-if="isGray" class="cardMask"></div>
    </el-card>
</template>

<script lang="ts">
import {defineComponent, reactive} from "vue";
import i18n from '../../base/i18n'
import {ElMessageBox} from "element-plus";
import {Close} from "@element-plus/icons";

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
        isGray:{
            type: Boolean,
            default: false
        }
    },
    components: {

    },
    setup(props, context){
        const data = reactive<CardViewFrameInfo>({isMouseHover:false})
        function closeClick(){
            ElMessageBox.confirm(i18n.global.t('confirm.delete'), i18n.global.t('confirm.warn'), {
                confirmButtonText: i18n.global.t('confirm.ok'),
                cancelButtonText: i18n.global.t('confirm.cancel'),
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

        return {closeClick, mouseEnter, mouseLevel, Close}
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