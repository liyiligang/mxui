import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import 'dayjs/locale/zh-cn'
import locale from 'element-plus/lib/locale/lang/zh-cn'
import elTableInfiniteScroll from "./components/tableInfiniteScroll";
import ECharts  from 'vue-echarts'
import { use } from "echarts/core";
import {
        CanvasRenderer
} from 'echarts/renderers'
import {
        LineChart
} from 'echarts/charts'
import {
        GridComponent,
        TooltipComponent,
        TitleComponent,
        DataZoomComponent,
        VisualMapComponent
} from 'echarts/components'
use([
        CanvasRenderer,
        LineChart,
        GridComponent,
        TooltipComponent,
        TitleComponent,
        DataZoomComponent,
        VisualMapComponent
]);

createApp(App)
    .use(router)
    .use(elTableInfiniteScroll)
    .use(ElementPlus, { locale })
    .component('v-chart', ECharts)
    .mount('#app')



