<template>
    <el-tooltip v-if="!data.showFrame" effect="light" :content="link" placement="bottom">
        <el-button class="linkButton" type="text" @click="openLink">{{getLinkName()}}</el-button>
    </el-tooltip>
    <iframe v-if="data.showFrame" :src="link" style="height: 100%; width: 100%;"></iframe>
</template>

<script lang="ts">

import {defineComponent, onMounted, reactive} from "vue";

interface LinkJumpInfo {
    showFrame:boolean
}

export default defineComponent ({
    name: "LinkJump",
    props:{
        name:{
            type: String,
            default: ""
        },
        link:{
            type: String,
            default: ""
        },
        blank:{
            type: Boolean,
            default: false
        }
    },
    setup(props){

        const data = reactive<LinkJumpInfo>({showFrame:false})

        function openLink(){
            if (props.blank){
                window.open(props.link, '_blank')
            }else{
                data.showFrame = true
            }
        }

        function getLinkName(){
            return props.name == "" ? props.link:props.name
        }
        return {data, getLinkName, openLink}
    }
})
</script>

<style scoped>

.linkButton{
    font-size: 18px;
}
</style>