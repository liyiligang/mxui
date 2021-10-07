<template>
    <div :id="id" class="json-editor"></div>
</template>

<script lang="ts">
import {defineComponent, reactive, onMounted, onUnmounted, PropType, watchEffect} from "vue";
import jsonEditor, {EditableNode, JSONEditorMode, JSONEditorOptions} from 'jsoneditor';
import  "jsoneditor/dist/jsoneditor.min.css";
import {ElMessage} from "element-plus";
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
            ElMessage.error("json格式化失败，" + err);
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
                    name:prop.name,             //主节点名
                    indentation: 2,             //缩进
                    mainMenuBar:true,           //开启主菜单
                    navigationBar:true,         //开启面包屑菜单
                    search: true,               //开启搜索
                    history:false,              //关闭撤销。重做按钮
                    statusBar:false,            //开启状态栏
                    colorPicker:true,           //开启颜色选择器
                    timestampTag:true,          //开启时间戳时间显示
                    enableSort:false,           //关闭排序
                    enableTransform:false,      //关闭过滤
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