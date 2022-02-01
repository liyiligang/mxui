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
                let valList:Array<any> = Object.values(valObj)
                let dot = [props.lineData[i].Base?.UpdateTime]
                for (let j=0; j<valList.length; j++){
                    dot.push(getStateFromValue(valList[j]))
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

                //with time
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
                let valObj = Object(globals.getJson(String(props.lineData[i].Value)))
                let valList:Array<any> = Object.values(valObj)
                let dot = [props.lineData[i].Base?.UpdateTime]
                for (let j=0; j<valList.length; j++){
                    dot.push(getDataFromValue(valList[j]))
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
                    // smooth: true,
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

        function getDataFromValue(value){
            if (typeof value == 'object'){
                return value.Data
            }
            return value
        }

        function getStateFromValue(value){
            if (typeof value == 'object'){
                return value.State
            }
            return ""
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