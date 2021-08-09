<template>
    <div id="player-overlay">
        <video loop muted autoplay class="videofull" id="video1">
            <source :src="video1" type="video/mp4" />
        </video>
        <video loop muted autoplay class="videofull" id="video2">
            <source :src="video2" type="video/mp4" />
        </video>
    </div>
</template>

<script>


import consultores from 'ASSETS/home/consultores-de-negocios-en-guadalajara'
import consultoresm from 'ASSETS/home/consultores-de-negocios-en-guadalajara-video-mobile'

export default {
    name: 'home',
    data() {
        return {
            video1: consultores,
            video2: consultoresm,
        }
    },
    watch: {

    },
    methods: {

    },

    mounted() {


    },
    beforeDestroy() {

    },
}
</script>

<style lang="scss">
    #player-overlay {
        position: relative;

        &:before {
            content:'';
            display: block;
            padding-top: 50%;

        }
    }

    .videofull {
        bottom: 0;
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
        width: 100%;
    }

    #video1 {
        display: block;
    }

    #video2 {
        display: none;
    }


    @media (min-width: 380px) AND (max-width: 768px) {
        #player-overlay {
            &:before {
                padding-top: 120%;

            }
        }

        #video1 {
            display: none !important;
        }

        #video2 {
            display: block !important;
        }
    }

</style>




