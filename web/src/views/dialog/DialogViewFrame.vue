<template>
    <el-dialog
        :width=width
        top="12vh"
        destroy-on-close
        :modelValue="modelValue"
        :show-close="false"
        :fullscreen="data.fullScreen"
        :custom-class="getDialogViewFrameClass()"
        @close="close">
        <template v-slot:title>
            <el-row class="dialogViewFrameTitleRow" type="flex" justify="space-between" align="middle" >
                <span class="dialogViewFrameTitle" :class=convert.getColorByLevel(level)>{{title}}</span>
                <el-row type="flex" justify="end" align="middle">
                    <el-button v-if="!closeFullScreen" id="fullScreenButton" class="dialogViewFrameButton"
                               icon="el-icon-full-screen" plain @click="setFullScreen"></el-button>
                    <el-button class="dialogViewFrameButton" icon="el-icon-close" plain
                               @click="close"></el-button>
                </el-row>
            </el-row>
        </template>
        <slot></slot>
    </el-dialog>
</template>

<script lang="ts">

import {defineComponent, onMounted, reactive} from "vue";
import { convert } from "../../base/convert";
import {protoManage} from "../../proto/manage";

interface DialogViewFrameInfo {
    fullScreen:boolean
}

export default defineComponent ({
    name: "DialogViewFrame",
    emits:['update:modelValue'],
    components: {},
    props:{
        modelValue:{
            type: Boolean,
            default: false,
        },
        title:{
            type: String,
            default: ""
        },
        width:{
            type: String,
            default: "600px"
        },
        level:{
            type: Number,
            default: protoManage.Level.LevelNot
        },
        closeFullScreen:{
            type: Boolean,
            default: false
        },
        closeFixHeight:{
            type: Boolean,
            default: false
        },
    },
    setup(props, context){
        const data = reactive<DialogViewFrameInfo>({fullScreen:false})

        onMounted(()=>{
            init()
        })

        function init(){
            let fullScreenButton = document.getElementById('fullScreenButton');
            document.body.addEventListener('keyup', function (event){
                if (props.modelValue){
                    if (event.key == "Enter" && event.ctrlKey && document.activeElement?.id != fullScreenButton?.id){
                        setFullScreen()
                    }
                }
            })
        }

        function getDialogViewFrameClass() {
            if (data.fullScreen){
                return "dialogViewFrameFullScreen"
            }else {
                if (!props.closeFixHeight){
                    return "dialogViewFrameWindow"
                }
            }
            return ""
        }

        function setFullScreen() {
            if (!props.closeFullScreen){
                data.fullScreen = !data.fullScreen
            }
        }

        function close() {
            if (props.modelValue){
                context.emit("update:modelValue", false)
            }
        }

        return {data, convert, getDialogViewFrameClass, setFullScreen, close}
    }
})
</script>

<style scoped>
@import "../../css/color.css";
@import "../../css/card.css";

.dialogViewFrameTitleRow{
    width: 100%;
}

.dialogViewFrameTitle{
    font-size: 18px;
}

.dialogViewFrameButton{
    border:0px;
    padding: 0px;
    height: 10px;
}

</style>

<style>
.dialogViewFrameWindow .el-dialog__body{
    height: calc(80vh - 125px);
}

.dialogViewFrameFullScreen .el-dialog__body{
    height: calc(100vh - 130px);
}
</style>