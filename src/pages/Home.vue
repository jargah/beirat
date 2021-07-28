<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12">
                <div class="fullscreen-bg row">
                    <video loop muted autoplay poster="https://imag.malavida.com/mvimgbig/download-fs/fullscreen-photo-viewer-18152-2.jpg" class="fullscreen-bg__video">
                        <source :src="consultores" type="video/mp4">
                    </video>
                </div>
            </div>
        </div>
    </div>
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
