<template>
    <div class="player" id="dplayer"></div>
</template>

<script lang="ts">

import {defineComponent, onMounted} from "vue";
import Hls from 'hls.js';
import Flv from 'flv.js';
import DPlayer from 'dplayer';

export default defineComponent ({
    name: "Player",
    components: {

    },
    props:{
        options:{
            type: Object,
            default: {}
        }
    },
    setup(props){

        onMounted(()=>{
            console.log(props)
            initPlayer()
        })

        function initPlayer(){
            if (props.options.Type == ""){
                props.options.Type = 'auto'
            }
            const dp = new DPlayer({
                container: document.getElementById('dplayer'),
                live:props.options.Live,
                loop:props.options.Loop,
                video: {
                    url: props.options.URL,
                    type:props.options.Type,
                    customType: {
                        hls: function (video, player) {
                            const hls = new Hls();
                            hls.loadSource(video.src);
                            hls.attachMedia(video);
                        },
                        flv: function (video, player) {
                            const flvPlayer = Flv.createPlayer({
                                type: 'flv',        //need .h264 code
                                url: video.src,
                            });
                            flvPlayer.attachMediaElement(video);
                            flvPlayer.load();
                        },
                    },
                },
            });
        }
    }
})
</script>

<style scoped>

.player{
    width: 100%;
    height: 100%;
}
</style>