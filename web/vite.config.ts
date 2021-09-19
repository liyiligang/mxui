import vue from '@vitejs/plugin-vue'

module.exports = {
    plugins:[vue()],
    optimizeDeps: {
        include: ["protobufjs/minimal", "element-plus/lib/locale/lang/zh-cn", "dayjs/locale/zh-cn", "echarts/core",
        "echarts/charts", "echarts/renderers", "echarts/components"]
    }
}