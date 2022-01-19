/*
 * Copyright 2021 liyiligang.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import VueForm from '@lljj/vue3-form-element';
import elTableInfiniteScroll from "./components/tableInfiniteScroll";
import UploadFile from "./components/vueForm/widgets/UploadFile.vue";
import JsonViewer from "vue3-json-viewer"
import i18n from './base/i18n'
import "echarts";
import ECharts  from 'vue-echarts'
// import 'dayjs/locale/zh-cn'


const app = createApp(App)
app.config.unwrapInjectedRef = true
app.use(router)
    .use(elTableInfiniteScroll)
    .use(ElementPlus)
    .use(JsonViewer)
    .use(i18n)
    .component('v-chart', ECharts)
    .component('VueForm', VueForm)
    .component('UploadFile', UploadFile)
    .mount('#app')



