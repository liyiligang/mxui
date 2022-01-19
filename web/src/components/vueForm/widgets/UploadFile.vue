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

</template>

<script lang="ts">

import { defineComponent, resolveComponent, h, ref, getCurrentInstance } from 'vue';
import i18n from '../../../base/i18n'

export default defineComponent ({
    name: "UploadFile",
    props: {
        modelValue: {
            type: [String, Array],
            default: null
        },
        responseFileUrl: {
            type: Function,
            default: (res:any) =>{return ""}
        },
        btnText: {
            default: i18n.global.t('file.uploadTips'),
            type: String,
        },
        slots: {
            type: null,
            default: null
        }
    },
    setup(props, { attrs, emit }) {
        const curModelValue = props.modelValue;
        const isArrayValue = Array.isArray(curModelValue);

        const defaultFileList = attrs.fileList || (() => {
            if (isArrayValue) {
                return curModelValue.map((item, index) => {
                     let name = String(item).split("_")[1]
                     return{
                         name: name?name:item,
                         url: item
                     }
                });
            }
            if (curModelValue) {
                let name = String(curModelValue).split("_")[1]
                return [{
                    name: name?name:curModelValue,
                    url: curModelValue
                }];
            }

            return [];
        })();

        // fileList
        const fileListRef = ref(defaultFileList);

        const getUrl = fileItem => (
            fileItem
            && ((fileItem.response && props.responseFileUrl(fileItem.response)) || fileItem.url))
            || '';

        const emitValue = (emitFileList) => {
            // v-model
            let curValue;

            if (isArrayValue) {
                curValue = emitFileList.length ? emitFileList.reduce((pre, item) => {
                    const url = getUrl(item);
                    if (url) pre.push(url);
                    return pre;
                }, []) : [];
            } else {
                const fileItem = emitFileList[emitFileList.length - 1];
                curValue = getUrl(fileItem);
            }

            emit('update:modelValue', curValue);
        };

        const globalProperties = getCurrentInstance()?.appContext.config.globalProperties;

        return () => {
            const data = {
                fileList: fileListRef.value,
                'on-exceed': () => {
                    if (globalProperties?.$message) {
                        globalProperties.$message.warning(i18n.global.t('file.exceedTips'));
                    }
                },
                'on-error': () => {
                    if (globalProperties?.$message) {
                        globalProperties.$message.error(i18n.global.t('file.failTips'));
                    }
                },
                // 'on-preview': (file) => {
                //     const url = getUrl(file);
                //     if (url) openNewPage(url);
                // },
                ...attrs,
                'on-remove': (file, fileList) => {
                    emitValue(fileList);
                    if (attrs['on-remove']) {
                        let onRemove:any = attrs['on-remove']
                        onRemove(file, fileList);
                    }
                },
                'on-success': (response, file, fileList) => {
                    emitValue(fileList);
                    if (attrs['on-success']) {
                        let onSuccess:any = attrs['on-success']
                        onSuccess['on-success'](response, file, fileList);
                    }
                }
            };

            if (!isArrayValue) data.limit = 1;

            const childVNode = {
                default: () => h(
                    resolveComponent('el-button'),
                    {
                        type: 'primary'
                    },
                    {
                        default: () => props.btnText
                    }
                ),
                ...(props.slots || {}),
            };

            return h(resolveComponent('el-upload'), data, childVNode);
        };
    }
})
</script>

<style scoped>

</style>
