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
    <el-table class="returnTable" :stripe="options.Stripe" :border="options.Border"
              :show-summary="options.ShowSummary" :sum-text="options.SumText"
              :row-class-name="getTableRowState" :span-method="mergeSameCell"
              height="100%" :data="getTableData()"  highlight-current-row>
        <el-table-column v-for="i of getTableCol()" :type="i.Type" :prop="i.Name" :label="i.Name"
                         :fixed="getTableColFixed(i)" :resizable="i.Resizable" :align="i.Align"
                         :width="getTableColWidth(i)" :min-width="i.Width" > </el-table-column>
    </el-table>
</template>

<script lang="ts">

import {defineComponent, onMounted, reactive} from "vue";
import {convert} from "../../base/convert";

interface NodeFuncReturnTableInfo {
    colDataIndexMap: Map<number, number>
}

export default defineComponent ({
    name: "NodeFuncReturnTable",
    components: {},
    props:{
        options:{
            type: Object,
            default: {}
        }
    },
    setup(props){

        const data = reactive<NodeFuncReturnTableInfo>({colDataIndexMap:new Map<number, number>()})

        onMounted(() => {
            initDataColIndex()
        });

        function getTableCol(){
            return props.options.Col
        }

        function getTableData(){
            let data = new Array()
            for (let i = 0; i<props.options.Row.length; i++){
                let obj = {}
                for (let j = 0, d = 0; j<props.options.Col.length; j++){
                    if (props.options.Col[j].Type != ""){
                        continue
                    }
                    obj[props.options.Col[j].Name] = props.options.Row[i].Data[d++]
                }
                data.push(obj)
            }
            return data
        }

        function getTableColWidth(col){
            if (col.Type != ""){
                return col.Width
            }
            return ""
        }

        function getTableColFixed(col){
            if (col.Fixed == ""){
                return false
            }
            return col.Fixed
        }

        function getTableRowState({ row, rowIndex }) {
            return convert.getTableRowColorByState(props.options.Row[rowIndex].State)
        }

        function initDataColIndex() {
            let total = 0
            for (let i = 0; i<props.options.Col.length; i++){
                if (props.options.Col[i].Type != ""){
                    total++
                }
                data.colDataIndexMap[i] = i-total
            }
        }

        function getDataColIndex(columnIndex:number):number {
            return data.colDataIndexMap[columnIndex]
        }

        function getMergeSameColSpan(rowIndex:number, columnIndex:number):number|null {
            if (props.options.Col[columnIndex].MergeSameCol) {
                let colIndex:number = getDataColIndex(columnIndex)
                let mergeRow = 0
                for (let i = rowIndex; i < props.options.Row.length; i++){
                    if (i != 0 && mergeRow == 0) {
                        if (props.options.Row[i].Data[colIndex] == props.options.Row[i-1].Data[colIndex]){
                            return 0
                        }
                    }
                    if (i != props.options.Row.length-1) {
                        if (props.options.Row[i].Data[colIndex] == props.options.Row[i+1].Data[colIndex]){
                            mergeRow++
                            continue
                        }else{
                            if (mergeRow > 0){
                                return mergeRow+1
                            }
                            return null
                        }
                    }else if (mergeRow > 0){
                        return mergeRow+1
                    }
                }
            }
            return null
        }

        function getMergeSameRowSpan(rowIndex:number, columnIndex:number):number|null {
            if (props.options.Row[rowIndex].MergeSameRow) {
                let mergeCol = 0
                for (let i = columnIndex; i < props.options.Col.length; i++){
                    let colIndex:number = getDataColIndex(i)
                    if (colIndex >= 0){
                        if (colIndex != 0 && mergeCol == 0) {
                            if (props.options.Row[rowIndex].Data[colIndex] == props.options.Row[rowIndex].Data[colIndex-1]){
                                return 0
                            }
                        }
                        if (colIndex !=props.options.Row[rowIndex].Data.length-1) {
                            if (props.options.Row[rowIndex].Data[colIndex] == props.options.Row[rowIndex].Data[colIndex+1]){
                                mergeCol++
                                continue
                            }else{
                                if (mergeCol > 0){
                                    return mergeCol+1
                                }
                                return null
                            }
                        }else if (mergeCol > 0){
                            return mergeCol+1
                        }
                    }else{
                        return null
                    }
                }
            }
            return null
        }

        function mergeSameCell({ row, column, rowIndex, columnIndex}) {
            let mergeRow = getMergeSameColSpan(rowIndex, columnIndex)
            let mergeCol = getMergeSameRowSpan(rowIndex, columnIndex)
            if (mergeRow != null){
                if (mergeRow == 0 ){
                    return [mergeRow, 0]
                }else if (mergeRow > 0){
                    return [mergeRow, 1]
                }
            }
            if (mergeCol != null){
                if (mergeCol == 0 ){
                    return [0, mergeCol]
                }else if (mergeCol > 0){
                    return [1, mergeCol]
                }
            }
        }

        return {getTableCol, getTableData, getTableColWidth, getTableColFixed, getTableRowState,
            mergeSameCell}
    }
})
</script>

<style scoped>
@import "../../css/color.css";

.returnTable{

}

</style>
