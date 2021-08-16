<template>
    <header class="v-header container">
        <div class="fullscreen-video-wrap">
            <video loop muted autoplay id="video1">
                <source :src="video1" type="video/mp4" />
            </video>
            <video loop muted autoplay id="video2">
                <source :src="video2" type="video/mp4" />
            </video>
        </div>
    </header>
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

<style lang="scss" scoped>

    *{
        box-sizing: border-box;
    }

    body{
        margin:0;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-size:1rem;
        font-weight:normal;
        line-height:1.5;
        color:#333;
        overflow-x:hidden;
    }

    .v-header{
        height:100vh;
        display:flex;
        align-items:center;
        color:#fff;
    }

    .container{
        max-width:960px;
        padding-left:1rem;
        padding-right:1rem;
        margin:auto;
        text-align:center;
    }

    .fullscreen-video-wrap{
        position:absolute;
        top:0;
        left:0;
        width:100%;
        height:100vh;
        overflow:hidden;
    }

    .fullscreen-video-wrap video{
        min-height:100%;
        min-width:100%;
    }

    .header-overlay{
        height:100vh;
        position: absolute;
        top:0;
        left:0;
        width:100vw;
        z-index:1;
    }

    .header-content{
        z-index:2;
    }

    .header-content h1{
        font-size:50px;
        margin-bottom:0;
    }

    .header-content p {
        font-size:1.5rem;
        display:block;
        padding-bottom:2rem;
    }


    .section{
        padding:20px 0;
    }

    .section-b{
        background:#333;
        color:#fff;
    }

    #video1 {
        display: block;
    }

    #video2 {
        display: none;
    }

    @media(max-width:960px){
        .container{
            padding-right:3rem;
            padding-left:3rem;
        }

        #video1 {
            display: none;
        }

        #video2 {
            display: block;
        }
    }


</style>




