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
    <el-row class="mainRow" type="flex" justify="center" align="middle">
        <el-row class="notFoundRow" type="flex"  justify="center" align="middle">
            <img class="logo" src="../assets/logo.svg" alt="admin">
            <div class="notFound">{{$t('notFound')}}</div>
            <el-row type="flex"  justify="center" align="middle">
                <el-button type="primary" size="large" class="button" @click="toHome">{{$t('notFoundToHome')}}</el-button>
                <el-button type="primary" size="large" class="button" @click="toUp">{{$t('notFoundToUp')}}</el-button>
            </el-row>
        </el-row>
    </el-row>
</template>

<script lang="ts">

import {defineComponent} from "vue";
import {globals} from "../base/globals";
import {useRouter} from "vue-router";

export default defineComponent ({
    name: "NotFound",
    setup(){
        const router = useRouter()
        function toHome(){
            globals.reLogin()
        }

        function toUp(){
            router.go(-1)
        }

        return {toHome, toUp}
    }
})
</script>

<style scoped>

.mainRow{
    width: 100%;
    height: 100%;
    background-image: linear-gradient(-225deg, #5D9FFF 0%, #B8DCFF 48%, #6BBBFF 100%);
}

.notFoundRow{
    width: 40%;
}

.logo{
    width: 40%;
    margin-bottom: 25px;
}

.notFound{
    width: 100%;
    font-size: 45px;
    color: #909399;
    text-align: center;
    margin-bottom: 30px;
}

.button{
    margin-left: 25px;
    margin-right: 25px;
}

</style>

