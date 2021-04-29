import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import 'dayjs/locale/zh-cn'
import locale from 'element-plus/lib/locale/lang/zh-cn'
import VueNativeSock from "vue-native-websocket-vue3"
import elTableInfiniteScroll from "./components/TableInfiniteScroll";
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
    .use(store)
    .use(elTableInfiniteScroll)
    .use(ElementPlus, { locale })
    .use(VueNativeSock,"11",{
        // 启用Vuex集成
        store: store,
        // 开启手动调用 connect() 连接服务器
        connectManually: true,
        // 开启自动重连
        reconnection: false,
        // 尝试重连的次数
        reconnectionAttempts: 5,
        // 重连间隔时间
        reconnectionDelay: 3000
    })
    .component('v-chart', ECharts)
    .mount('#app')



