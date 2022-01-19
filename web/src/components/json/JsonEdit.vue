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
    <div :id="id" class="json-editor"></div>
</template>

<script lang="ts">
import {defineComponent, reactive, onMounted, onUnmounted, PropType, watchEffect} from "vue";
import jsonEditor, {EditableNode, JSONEditorMode, JSONEditorOptions} from 'jsoneditor';
import  "jsoneditor/dist/jsoneditor.min.css";
import i18n from '../../base/i18n'
import {globals} from "../../base/globals";
// import vueJsonEditor from 'vue-json-editor'

interface JsonEditInfo {
    jsonEditor:jsonEditor|null
}

export default defineComponent ({
    name: "JsonEdit",
    emits: ['jsonChanged'],
    props:{
        id:{
            type: String,
            default: ""
        },
        name:{
            type: String,
            default: ""
        },
        modes:{
            type: Array as PropType<JSONEditorMode[]>,
            default: () => ["code", "tree"]
        },
        readOnly:{
            type: Boolean,
            default: false
        },
    },
    components: {
        jsonEditor
    },
    setup(prop, context){
        const data = reactive<JsonEditInfo>({jsonEditor: null})
        function onError(err){
            globals.viewError(i18n.global.t('json.formatFail') + err);
        }

        function onChangeText(json){
            context.emit('jsonChanged', json);
        }

        function setJsonValue(jsonValue:string){
            if (data.jsonEditor != null){
                let json = globals.getJson(jsonValue)
                if (typeof json === "string") {
                    data.jsonEditor.setText(json)
                }else if (typeof json === "object") {
                    data.jsonEditor.set(json)
                }
            }
        }

        function setJsonValueSchema(schema:object){
            if (data.jsonEditor != null){
                data.jsonEditor.setSchema(schema)
            }
        }

        function validate(){
            if (data.jsonEditor != null){
                return data.jsonEditor.validate()
            }
        }
        // watchEffect(setJsonValue)

        function onEditable(node:EditableNode|object):boolean{
           return !prop.readOnly
        }

        onMounted(()=>{
            if (data.jsonEditor == null){
                let container = document.getElementById(prop.id)
                if (container == null){
                    return
                }
                let options:JSONEditorOptions = {
                    modes:prop.modes,
                    name:prop.name,             //main node name
                    indentation: 2,             //indent
                    mainMenuBar:true,           //open main menu
                    navigationBar:true,         //open crumb menu
                    search: true,               //open search
                    history:false,              //close undo redo button
                    statusBar:false,            //open status bar
                    colorPicker:true,           //open color selector
                    timestampTag:true,          //open timestamp view
                    enableSort:false,           //close sort
                    enableTransform:false,      //close filter
                    onError: onError,
                    onChangeText: onChangeText,
                    onEditable: onEditable
                }
                data.jsonEditor = new jsonEditor(container, options)
            }
        })

        onUnmounted(()=>{
            if (data.jsonEditor != null){
                data.jsonEditor.destroy()
                data.jsonEditor = null
            }
        })
        return {data, setJsonValue, setJsonValueSchema, validate}
    },
})
</script>

<style scoped>
.json-editor {
    height: 100%;
}
</style>