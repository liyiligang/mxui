 import vue from '@vitejs/plugin-vue'

module.exports = {
    plugins:[vue()],
    build:{
        outDir:"../bin/web"
    },
    optimizeDeps: {
        include: ["protobufjs/minimal", "element-plus/lib/locale/lang/zh-cn", "dayjs/locale/zh-cn", "echarts/core",
        "echarts/charts", "echarts/renderers", "echarts/components"]
    },
    server: {
        host:"localhost",
        proxy: {
            '/api': {
                target: 'http://localhost:806',
                changeOrigin: true,
                ws:true,
                rewrite: (path) => path.replace(/^\/api/, '')
            },
        }
    }
}