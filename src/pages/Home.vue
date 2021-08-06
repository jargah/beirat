<template>
    <div id="player-overlay">
        <video loop muted autoplay class="videofull" v-if="video1 !== null">
            <source :src="video1" type="video/mp4" />
        </video>
        <video loop muted autoplay class="videofull" v-if="video2 !== null">
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
            consultores,
            consultoresm,
            video1: null,
            video2: null,
            windowWidth: window.innerWidth
        }
    },
    watch: {
        windowWidth(newWidth, oldWidth) {

            if(newWidth > 768) {
                console.log(1)
                this.video1 = consultores
                this.video2 = null
            }
            else {
                this.video2 = consultoresm
                this.video1 = null
            }

            console.log(this.video1)

            this.windowWidth = newWidth
        }
    },
    methods: {
        onResize() {
            this.windowWidth = window.innerWidth
        },
    },

    mounted() {
        if(this.windowWidth > 768) {
            this.video1 = consultores
            this.video2 = null
        }
        else {
            this.video2 = consultoresm
            this.video1 = null
        }

        window.addEventListener('resize', this.onResize);

    },
    beforeDestroy() {
        window.removeEventListener('resize', this.onResize);
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


    @media (min-width: 380px) AND (max-width: 768px) {
        #player-overlay {
            &:before {
                padding-top: 120%;

            }
        }
    }

</style>




