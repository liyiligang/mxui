<template>
    <v-chart class="chart" :option="data.option"/>
</template>

<script lang="ts">
import {defineComponent, PropType, reactive, watchEffect} from "vue";
import {protoManage} from "../../proto/manage";
import {globals} from "../../base/globals";

interface EchartsLineInfo {
    option:{}
}

export default defineComponent ({
    name: "Line",
    components: {

    },
    props:{
        lineData:{
            type: Array as PropType<protoManage.INodeReportVal[]>,
            default: () => []
        },
    },
    setup(props){
        const data = reactive<EchartsLineInfo>({option:{}})
        function updateView(){
            if (props.lineData.length == 0){
                return
            }

            let lineData:any = []
            for (let i = props.lineData.length-1; i>=0; i--)
            {
                lineData.push([props.lineData[i].Base?.UpdateTime, props.lineData[i].Value, props.lineData[i].State])
            }
            data.option = {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'line'
                    }
                },
                grid: {
                    x: 50,
                    y: 25,
                    x2: 20,
                    y2: 40
                },
                xAxis: {
                    type: 'time',
                    boundaryGap: false,
                    splitLine: {
                        show: false
                    },
                    axisLabel:{
                        rotate:30,
                        formatter: {
                            year: '{yyyy}',
                            month: '{MMM}',
                            day: '{d}',
                            hour: '{HH}:{mm}',
                            minute: '{HH}:{mm}',
                            second: '{HH}:{mm}:{ss}',
                            millisecond: '{HH}:{mm}:{ss}',
                            none: '{yyyy}-{MM}-{dd} {HH}:{mm}:{ss}'
                        }
                    }
                },
                yAxis: {
                    type: 'value',
                    boundaryGap: false
                },
                dataZoom: [{
                    type: 'inside',
                    start: 0,
                    end: 100
                }],
                series: [{
                    type: 'line',
                    data: lineData,
                    sampling: 'lttb',
                    itemStyle: {
                        color: function (params) {
                            switch (params.data[2]){
                                case protoManage.State.StateNot:
                                    return '#409EFF'
                                case protoManage.State.StateNormal:
                                    return '#67C23A';
                                case protoManage.State.StateWarn:
                                    return '#E6A23C';
                                case protoManage.State.StateError:
                                    return '#F56C6C';
                                case protoManage.State.StateUnknow:
                                    return '#909399';
                                default:
                                    return '#909399';
                            }
                        }
                    },
                }]
            };
        }
        watchEffect(updateView)
        return {data, globals}
    }
})
</script>

<style scoped>
.chart {
    height: 361px;
    width: 100%;
}
</style>
