<template>
    <div id="player-overlay">
        <video loop muted autoplay>
            <source :src="consultores" type="video/mp4" />
        </video>    
    </div>
    <!-- <section>
        <video loop muted autoplay class="fullscreen-bg__video">
            <source :src="consultores" type="video/mp4">
        </video>
    </section> -->
    <!-- <div>
        <video loop muted autoplay poster="https://imag.malavida.com/mvimgbig/download-fs/fullscreen-photo-viewer-18152-2.jpg" class="fullscreen-bg__video">
            <source :src="consultores" type="video/mp4">
        </video>
    </div> -->
</template>

<script>


import consultores from 'ASSETS/home/consultores-de-negocios-en-guadalajara'

export default {
    name: 'home',
    data() {
        return {
            consultores
        }
    }
}
</script>

<style lang="scss">

    section {
        display: block;
        height:100vh;
        width: 100vw;
    }

    #player-overlay {
    position: relative;

    &:before {
        content:'';
        display: block;
        padding-top: 50%;  // 50% equals a 2:1 ratio. you can read more about
                        // the ratios in the link
    }
    }

    video {
    bottom: 0;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    width: 100%;
    }

    

    .fullscreen-bg {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        overflow: hidden;
        z-index: -100;
        }

        .fullscreen-bg__video {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        }

        @media (min-aspect-ratio: 16/9) {
        .fullscreen-bg__video {
            height: 300%;
            top: -100%;
        }
        }

        @media (max-aspect-ratio: 16/9) {
        .fullscreen-bg__video {
            width: 300%;
            left: -100%;
        }
        }
</style>
