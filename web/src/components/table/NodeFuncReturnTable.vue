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
    <el-table class="returnTable" :stripe="options.Stripe" :border="options.Border" :data="getTableData()"
              :show-summary="options.ShowSummary" :sum-text="options.SumText" :span-method="mergeSameCell"
              height="100%" highlight-current-row>

        <el-table-column v-if="hasIndexCol()" type="index" :label="options.IndexCol.Name"
                         :fixed="getTableColFixed(options.IndexCol)" :resizable="options.IndexCol.Resizable"
                         :align="options.IndexCol.Align" :width="options.IndexCol.Width">
        </el-table-column>
        <el-table-column v-for="(v, i) of getTableCol()" :prop="v.Name" :label="v.Name"
                         :fixed="getTableColFixed(v)" :resizable="v.Resizable" :align="v.Align"
                         :min-width="v.Width" >
            <template #default="scope">
                <div :class="[getValueColor(scope.$index, i)]">{{getValue(scope.$index, i)}}</div>
            </template>
        </el-table-column>
    </el-table>
</template>

<script lang="ts">

import {defineComponent, onMounted, reactive} from "vue";
import {convert} from "../../base/convert";

interface NodeFuncReturnTableInfo {

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

        const data = reactive<NodeFuncReturnTableInfo>({})

        onMounted(() => {

        });

        function getTableCol(){
            return props.options.Col
        }

        function hasIndexCol(){
            if (props.options.IndexCol == undefined){
                return false
            }
            if (props.options.IndexCol.Name == undefined || props.options.IndexCol.Name == ""){
                return false
            }
            if (props.options.Col == undefined){
                return false
            }
            return true
        }

        function getValue(rowIndex, colIndex){
            return getDataFromValue(props.options.Row[rowIndex].Value[colIndex])
        }

        function getValueColor(rowIndex, colIndex){
            return convert.getColorByState(getStateFromValue(props.options.Row[rowIndex].Value[colIndex]))
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

        function getTableData(){
            let data:Array<Object> = []
            if (props.options.Row){
                for (let i = 0; i<props.options.Row.length; i++){
                    let obj = {}
                    for (let j = 0; j<props.options.Col.length; j++){
                        obj[props.options.Col[j].Name] = getDataFromValue(props.options.Row[i].Value[j])
                    }
                    data.push(obj)
                }
            }
            return data
        }

        function getTableColFixed(col){
            if (col.Fixed == ""){
                return false
            }
            return col.Fixed
        }

        function getMergeSameColSpan(rowIndex:number, columnIndex:number):number|null {
            if (props.options.Col[columnIndex].MergeSameCol) {
                let mergeRow = 0
                for (let i = rowIndex; i < props.options.Row.length; i++){
                    if (i != 0 && mergeRow == 0) {
                        if (getDataFromValue(props.options.Row[i].Value[columnIndex]) == getDataFromValue(props.options.Row[i-1].Value[columnIndex])){
                            return 0
                        }
                    }
                    if (i != props.options.Row.length-1) {
                        if (getDataFromValue(props.options.Row[i].Value[columnIndex]) == getDataFromValue(props.options.Row[i+1].Value[columnIndex])){
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
                    let colIndex:number = i
                    if (colIndex >= 0){
                        if (colIndex != 0 && mergeCol == 0) {
                            if (getDataFromValue(props.options.Row[rowIndex].Value[colIndex]) == getDataFromValue(props.options.Row[rowIndex].Value[colIndex-1])){
                                return 0
                            }
                        }
                        if (colIndex !=props.options.Row[rowIndex].Value.length-1) {
                            if (getDataFromValue(props.options.Row[rowIndex].Value[colIndex]) == getDataFromValue(props.options.Row[rowIndex].Value[colIndex+1])){
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
            if (hasIndexCol()){
                if (columnIndex == 0){
                    return
                }else{
                    columnIndex -=1
                }
            }
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

        return {getTableCol, hasIndexCol, getTableData, getTableColFixed, mergeSameCell,
            getValue, getValueColor}
    }
})
</script>

<style>
@import "../../css/color.css";

.returnTable{

}

</style>
