import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import locale from 'element-plus/lib/locale/lang/zh-cn'
import VueForm from '@lljj/vue3-form-element';
import 'dayjs/locale/zh-cn'
import elTableInfiniteScroll from "./components/tableInfiniteScroll";
import JsonViewer from "vue3-json-viewer"
import "echarts";
import ECharts  from 'vue-echarts'

const app = createApp(App)
app.config.unwrapInjectedRef = true
app.use(router)
    .use(elTableInfiniteScroll)
    .use(ElementPlus, { locale })
    .use(JsonViewer)
    .component('v-chart', ECharts)
    .component('VueForm', VueForm)
    .mount('#app')



