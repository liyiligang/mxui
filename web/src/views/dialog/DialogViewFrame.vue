<template>
    <el-dialog
        :width=width
        top="12vh"
        :destroy-on-close="destroyOnClose"
        :modelValue="modelValue"
        :show-close="false"
        :fullscreen="data.fullScreen"
        append-to-body
        :custom-class="getDialogViewFrameClass()"
        @close="close"
        @open="open">
        <template v-slot:title>
            <el-row class="dialogViewFrameTitleRow" type="flex" justify="space-between" align="middle" >
                <span class="dialogViewFrameTitle" :class=convert.getColorByLevel(level)>{{title}}</span>
                <el-row type="flex" justify="end" align="middle">
                    <el-tooltip v-if="showSetting" effect="light" content="设置(ctrl+q)" placement="bottom">
                        <el-button  class="dialogViewFrameButton" icon="el-icon-setting" plain
                                    @click="setting"></el-button>
                    </el-tooltip>
                    <el-tooltip v-if="showAutoRefresh" effect="light" content="同步(ctrl+space)" placement="bottom">
                        <el-button  :class="data.autoRefreshButtonColor" class="dialogViewFrameButton" icon="el-icon-refresh" plain
                                    @click="autoRefresh"></el-button>
                    </el-tooltip>
                    <el-tooltip v-if="showRefresh" effect="light" content="刷新(~)" placement="bottom">
                        <el-button  class="dialogViewFrameButton" icon="el-icon-refresh-right" plain
                                   @click="refresh"></el-button>
                    </el-tooltip>
                    <el-tooltip v-if="showFullScreen" effect="light" content="全屏(ctrl+enter)" placement="bottom">
                        <el-button class="dialogViewFrameButton"
                                   icon="el-icon-full-screen" plain @click="fullScreen"></el-button>
                    </el-tooltip>
                    <el-tooltip effect="light" content="关闭(esc)" placement="bottom">
                        <el-button class="dialogViewFrameButton" icon="el-icon-close" plain
                                   @click="close"></el-button>
                    </el-tooltip>

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
import {globals} from "../../base/globals";

interface DialogViewFrameInfo {
    fullScreen:boolean
    autoRefresh:boolean
    autoRefreshButtonColor:string
}

export default defineComponent ({
    name: "DialogViewFrame",
    emits:['update:modelValue', 'refresh', 'autoRefresh', 'setting'],
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
        fixHeight:{
            type: Boolean,
            default: false
        },
        showFullScreen:{
            type: Boolean,
            default: false
        },
        showRefresh:{
            type: Boolean,
            default: false
        },
        showAutoRefresh:{
            type: Boolean,
            default: false
        },
        showSetting:{
            type: Boolean,
            default: false
        },
        destroyOnClose:{
            type: Boolean,
            default: true
        }
    },
    setup(props, context){
        const data = reactive<DialogViewFrameInfo>({fullScreen:false, autoRefresh:false, autoRefreshButtonColor:""})

        onMounted(()=>{
            init()
        })

        function init(){
            document.body.addEventListener('keyup', function (event){
                if (props.modelValue){
                    if (event.ctrlKey){
                        if (event.key == "Enter"){
                            fullScreen()
                        }else if (event.key == "q"){
                            setting()
                        }
                        else if (event.key == " "){
                            autoRefresh(event)
                        }
                    }else if (event.key == "`"){
                        refresh()
                    }
                }
            })
        }

        function initData(){
            data.fullScreen = false
            data.autoRefreshButtonColor = ""
        }

        function getDialogViewFrameClass() {
            if (data.fullScreen){
                return "dialogViewFrameFullScreen"
            }else {
                if (props.fixHeight){
                    return "dialogViewFrameWindow"
                }
            }
            return ""
        }

        function setting() {
            if (props.showSetting){
                context.emit("setting")
            }
        }

        function autoRefresh(event) {
            if (props.showAutoRefresh){
                data.autoRefresh = !data.autoRefresh
                data.autoRefreshButtonColor = data.autoRefresh ? "color-state-success":""
                globals.elButtonBlur(event)
                context.emit("autoRefresh", data.autoRefresh)
            }
        }

        function refresh() {
            if (props.showRefresh){
                context.emit("refresh")
            }
        }

        function fullScreen() {
            if (props.showFullScreen){
                data.fullScreen = !data.fullScreen
            }
        }

        function close() {
            if (props.modelValue){
                context.emit("update:modelValue", false)
            }
        }

        function open() {
            initData()
        }

        return {data, convert, getDialogViewFrameClass, refresh, autoRefresh, setting, fullScreen, close, open}
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
    height: 5px;
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