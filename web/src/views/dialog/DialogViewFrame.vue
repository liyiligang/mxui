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
    <el-dialog
        :width=width
        :top=topMargin
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
                    <el-tooltip v-if="showSetting" effect="light" :content="$t('dialog.frame.setting')" placement="bottom">
                        <el-button  class="dialogViewFrameButton" :icon="Setting" plain @click="setting"></el-button>
                    </el-tooltip>
                    <el-tooltip v-if="showAutoRefresh" effect="light" :content="$t('dialog.frame.sync')" placement="bottom">
                        <el-button  class="dialogViewFrameButton" plain @click="autoRefresh">
                            <el-icon> <Refresh :class="data.autoRefreshButtonColor"/> </el-icon>
                        </el-button>
                    </el-tooltip>
                    <el-tooltip v-if="showRefresh" effect="light" :content="$t('dialog.frame.update')" placement="bottom">
                        <el-button  class="dialogViewFrameButton" :icon="RefreshRight" plain @click="refresh"></el-button>
                    </el-tooltip>
                    <el-tooltip v-if="showFullScreen" effect="light" :content="$t('dialog.frame.fullScreen')" placement="bottom">
                        <el-button class="dialogViewFrameButton" :icon="FullScreen" plain @click="fullScreen"></el-button>
                    </el-tooltip>
                    <el-tooltip effect="light" :content="$t('dialog.frame.close')" placement="bottom">
                        <el-button class="dialogViewFrameButton" :icon="Close" plain @click="close"></el-button>
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
import {Setting, Refresh, RefreshRight, FullScreen, Close} from "@element-plus/icons";

interface DialogViewFrameInfo {
    fullScreen:boolean
    autoRefresh:boolean
    autoRefreshButtonColor:string
}

export default defineComponent ({
    name: "DialogViewFrame",
    emits:['update:modelValue', 'refresh', 'autoRefresh', 'setting'],
    components: {
        Refresh
    },
    props:{
        modelValue:{
            type: Boolean,
            default: false,
        },
        title:{
            type: String,
            default: ""
        },
        topMargin:{
            type: String,
            default: "12vh"
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
            data.autoRefreshButtonColor = "color-text-normal"
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
                data.autoRefreshButtonColor = data.autoRefresh ? "color-state-success":"color-text-normal"
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

        return {data, convert, getDialogViewFrameClass, refresh, autoRefresh, setting, fullScreen, close, open,
            Setting, Refresh, RefreshRight, FullScreen, Close}
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