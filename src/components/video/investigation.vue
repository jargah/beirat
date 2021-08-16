<template>
    <div>
        <header class="v-header container">
            <div class="fullscreen-video-wrap">
                <video loop muted autoplay >
                    <source :src="video1" type="video/mp4" />
                </video>
            </div>
        </header>
        <div class="container-fluid">
            <div class="row __row">
                <div class="col-12">
                    <p class="font-futura __row__title mb-5">
                        INVESTIGACIÓN EN
                        <br>
                        NEGOCIOS
                    </p>
                    <p class="font-futura __row__subtitle mt-5 mb-5">
                        En el fondo de nuestro corazón somos científicos.
                    </p>
                    <p class="font-basic __row__description mt-5">
                        Creemos que como hacemos una cosa hacemos todas,
                        pues el cerebro es una red neural holística que recicla
                        los mismos patrones para distintas tareas. Por ende,
                        no podemos evitar usar el método científico a la hora
                        de hacer negocios.

                    </p>
                </div>

            </div>
        </div>
    </div>
</template>

<script>


import consultores from 'ASSETS/business-investigation/video/consultoria-en-guadalajara-1'

export default {
    name: 'home',
    data() {
        return {
            video1: consultores,
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

    .__row {
        position: absolute;
        z-index: 1;
        align-items: center;
        top: 100px;
        right: 100px;

        padding-left: 30px;
        padding-right: 30px;

        &__title {
            font-size: 60px !important;
        }

        &__subtitle {
            font-size: 26px !important;
            font-weight: bold;
        }

        &__description {
            font-size: 26px !important;
        }
    }

    @media (min-width: 1280px) {
        .__row {
            right: 1px !important;
            top: 150px !important;

            &__title {
                font-size: 40px !important;
            }

            &__subtitle, &__description {
                text-align: left;
                font-size: 30px !important;
                width: 600px;
                text-align: left;
            }

        }
    }

    @media (min-width: 1024px) and (max-width: 1279px) {

        .__row {
            right: 1px !important;
            top: 350px !important;

            &__title {
                text-align: center;
                font-size: 40px !important;
            }

            &__subtitle, &__description {
                text-align: left;
                font-size: 30px !important;
                width: 400px;
                text-align: left;
            }

        }

    /* CSS */

    }

    @media (min-width: 768px) and (max-width: 1023px) {

        .__row {
            right: 1px !important;
            top: 200px !important;

            &__title {
                text-align: center;
                font-size: 40px !important;
            }

            &__subtitle, &__description {
                text-align: left;
                font-size: 30px !important;
                width: 400px;
                text-align: left;
            }

        }

    }

    @media (min-width: 768px) and (max-width: 1023px) and (orientation: landscape) {

        .__row {
            right: 1px !important;
            top: 200px !important;

            &__title {
                text-align: center;
                font-size: 40px !important;

            }

            &__subtitle, &__description {
                font-size: 20px !important;
                width: 400px;
                text-align: left;
            }

        }

    }

    @media (min-width: 481px) and (max-width: 767px) {

        .__row {
            right: 1px !important;
            top: 200px !important;

            &__title {
                text-align: center;
                font-size: 30px !important;
            }

            &__subtitle, &__description {
                text-align: left;
                font-size: 20px !important;
            }

        }

    }

    @media (min-width: 320px) AND (max-width: 480px) {
        .__row {
            right: 1px !important;
            top: 200px !important;

            &__title {
                text-align: center;
                font-size: 30px !important;
            }

            &__subtitle, &__description {
                text-align: left;
                font-size: 20px !important;
            }

        }
    }

    body{
        margin:0;
        font-size:1rem;
        font-weight:normal;
        line-height:1.5;
        color:#333;
        overflow-x:hidden;
    }

    .v-header{
        height: 100vh;
        display: flex;
        align-items: center;
        color: #fff;
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

    .header-content h1 {

        color: #000;
        font-size:50px;
        margin-bottom:0;
    }

    .header-content {
        &__title {
            color: #000;
            font-size:1.5rem;
            font-weight: bold;
            display:block;
            padding-bottom:2rem;
        }
    }


    .section{
        padding:20px 0;
    }

    .section-b{
        background:#333;
        color:#fff;
    }

    @media(max-width:960px){


        .container{
            padding-right:3rem;
            padding-left:3rem;
        }

    }

    @media(min-width:992px){

        .v-header {
            max-width: 100%;
            min-width: 100%;
            padding-left: 50px !important;
            padding-right: 50px !important;
        }

    }


</style>




