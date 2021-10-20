<template>
    <v-chart class="chart" :option="data.option" autoresize/>
</template>

<script lang="ts">
import {defineComponent, onMounted, PropType, reactive, watchEffect} from "vue";
import {protoManage} from "../../proto/manage";
import {globals} from "../../base/globals";

interface NodeReportValLineInfo {
    option:{}
    legend:{data:[]}
    series:Array<Object>
    visualMap:Array<Object>
    color:Array<String>
}

export default defineComponent ({
    name: "NodeReportValLine",
    components: {

    },
    props:{
        lineSchema:{
            type: Object,
            default: {}
        },
        lineData:{
            type: Array as PropType<protoManage.INodeReportVal[]>,
            default: () => []
        },
    },
    setup(props){
        const data = reactive<NodeReportValLineInfo>({option:{}, legend:{data:[]}, series:[], visualMap:[], color:[]})

        onMounted(()=>{
            initLegend()
            initColor()
        })

        function initLegend(){
            data.legend = {data:[]}
            for (let i=0; i<props.lineSchema.CategoryList.length; i++){
                data.legend.data.push(props.lineSchema.CategoryList[i].Name)
            }
        }

        function initColor(){
            data.color = []
            let chartColor = ['#5470c6', '#91cc75', '#fac858', '#ee6666', '#73c0de', '#3ba272', '#fc8452', '#9a60b4', '#ea7ccc']
            for (let i=0; i<props.lineSchema.CategoryList.length; i++){
                data.color.push(chartColor[i%chartColor.length])
            }
        }

        function getStateColorVal(state, index){
            switch (state) {
                case protoManage.State.StateUnknow:
                    return "#909399"
                case protoManage.State.StateWarn:
                    return "#E6A23C"
                case protoManage.State.StateError:
                    return "#F56C6C"
            }
            return data.color[index]
        }

        function initVisualMap(){
            data.visualMap = []
            let visualData:any = []
            for (let i=props.lineData.length-1; i>=0; i--)
            {
                let valObj = globals.getJson(String(props.lineData[i].Value))
                let dot = [props.lineData[i].Base?.UpdateTime]
                for (let j=0; j<valObj.ValueList.length; j++){
                    dot.push(valObj.ValueList[j].State)
                }
                visualData.push(dot)
            }

            for (let i=0; i<data.legend.data.length; i++){
                let pieces:any = []
                let k = 0;
                while (k < visualData.length) {
                    let timeStart = visualData[k][0];
                    let stateStart = visualData[k][i+1];
                    let dot = {
                        gte: timeStart,
                        color: getStateColorVal(stateStart, i)
                    }
                    while (k < visualData.length-1) {
                        k++
                        let timeEnd = visualData[k][0];
                        let stateEnd = visualData[k][i+1];
                        if (stateStart != stateEnd){
                            dot.lt = timeEnd
                            pieces.push(dot)
                            break
                        }
                        if (k >=  visualData.length-1){
                            dot.lte = timeEnd
                            break
                        }
                    }
                    if (k >=  visualData.length-1){
                        if (!dot.lte){
                            let timeLast = visualData[k][0];
                            let stateLast = visualData[k][i+1];
                            let dotLast = {
                                gt: timeLast,
                                lte:timeLast,
                                color: getStateColorVal(stateLast, i)
                            }
                            pieces.push(dotLast)
                        }else{
                            pieces.push(dot)
                        }
                        break
                    }
                }

                //按时间
                let obj = {
                    seriesIndex: i,
                    show: false,
                    dimension:0,
                    pieces:pieces
                }
                data.visualMap.push(obj)
            }
        }

        function initSeries(){
            data.series = []
            let lineData:any = []
            for (let i=props.lineData.length-1; i>=0; i--)
            {
                let valObj = globals.getJson(String(props.lineData[i].Value))
                let dot = [props.lineData[i].Base?.UpdateTime]
                for (let j=0; j<valObj.ValueList.length; j++){
                    dot.push(valObj.ValueList[j].Value)
                }
                lineData.push(dot)
            }

            for (let i=0; i<data.legend.data.length; i++){
                let objData:any = []
                for (let j=0; j<lineData.length; j++){
                    let dot = [lineData[j][0], lineData[j][i+1]]
                    objData.push(dot)
                }
                let obj = {
                    name: data.legend.data[i],
                    type: 'line',
                    smooth: true,
                    showSymbol: false,
                    sampling: 'lttb',
                    data:objData
                }
                data.series.push(obj)
            }
        }

        function updateView(){
            data.option = {
                tooltip: {
                    trigger: 'axis',
                },
                color:data.color,
                legend: data.legend,
                grid: {
                    x: 100,
                    y: 25,
                    x2: 35,
                    y2: 30
                },
                toolbox: {
                    show: true,
                    feature: {
                        magicType: { show: true, type: ['stack', 'tiled'] },
                    }
                },
                visualMap:data.visualMap,
                dataZoom: [{
                    type: 'inside',
                    start: 0,
                    end: 100
                }],
                xAxis: {
                    type: 'time',
                    boundaryGap: false,
                    axisLabel:{
                        // rotate:30,
                        formatter: {
                            year: '{yyyy}',
                            month: '{MMM}',
                            day: '{d}',
                            hour: '{HH}:{mm}',
                            minute: '{HH}:{mm}',
                            second: '{HH}:{mm}:{ss}',
                            millisecond: '{mm}:{ss}.{SSS}',
                            none: '{yyyy}-{MM}-{dd} {HH}:{mm}:{ss}'
                        }
                    }
                },
                yAxis: {
                    type: 'value',
                },
                series: data.series
            };
        }

        function updateLine(){
            initVisualMap()
            initSeries()
            updateView()
        }

        watchEffect(updateLine)
        return {data, globals}
    }
})
</script>

<style scoped>
.chart {
    height: 100%;
    width: 100%;
}
</style>



<!--[{-->
<!--type: 'line',-->
<!--data: lineData,-->
<!--sampling: 'lttb',-->
<!--itemStyle: {-->
<!--color: function (params) {-->
<!--switch (params.data[2]){-->
<!--case protoManage.State.StateNot:-->
<!--return '#409EFF'-->
<!--case protoManage.State.StateNormal:-->
<!--return '#67C23A';-->
<!--case protoManage.State.StateWarn:-->
<!--return '#E6A23C';-->
<!--case protoManage.State.StateError:-->
<!--return '#F56C6C';-->
<!--case protoManage.State.StateUnknow:-->
<!--return '#909399';-->
<!--default:-->
<!--return '#909399';-->
<!--}-->
<!--}-->
<!--},-->
<!--}]-->