<template>
    <div id="player-overlay" :style="{ 'padding-bottom': padding === null ? `8%` : `${padding}%` }">
        <video loop muted autoplay class="videofull">
            <source :src="src !== null ? src : consultores" type="video/mp4" />
        </video>
    </div>
</template>

<script>


import consultores from 'ASSETS/home/consultores-de-negocios-en-guadalajara'

export default {
    name: 'videofull',
    props: {
        src: {
            type: String,
            default: () => {
                return null
            }
        },
        padding: {
            type: String,
            default: () => {
                return null
            }
        }
    },
    data() {
        return {
            consultores
        }
    }
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
</style>



