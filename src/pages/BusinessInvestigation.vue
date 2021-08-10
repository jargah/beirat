<template>
    <section class="business">
        <div id="player-overlay" >
            <video loop muted autoplay class="videofull">
                <source :src="video1" type="video/mp4" />
            </video>

            <div class="video-text">
                <div class="row mb-5">
                    <div class="col-">
                        <p class="video-text__title">
                            INVESTIGACIÓN EN
                            <br>
                            NEGOCIOS
                        </p>
                    </div>
                </div>
                <div class="row mt-5 mb-5">
                    <div class="col-">
                        <p class="video-text__subtitle">
                            En el fondo de nuestro corazón somos científicos.
                        </p>
                    </div>
                </div>
                <div class="row mt-5">
                    <div class="col-12">
                        <p class="video-text__description">
                            Creemos que como hacemos una cosa hacemos todas,
                            <br>
                            pues el cerebro es una red neural holística que recicla
                            <br>
                            los mismos patrones para distintas tareas. Por ende,
                            <br>
                            no podemos evitar usar el método científico a la hora
                            <br>
                            de hacer negocios.

                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="container-fluid business__section1 mt-5">
            <div class="container">
                <div class="row mb-5">
                    <div class="col-12 align-self-center mt-5">
                        <p class="font-futura business__section1__title">
                            Como empresas, nuestro trabajo es activar todo nuestro cerebro para que elconsumidor no tenga que pensar.
                        </p>
                    </div>
                </div>
            </div>
            <div class="row mb-1">
                <video loop muted autoplay class="business__section1__video">
                    <source :src="video2" type="video/mp4" />
                </video>
            </div>
            <div class="container">
                <div class="row mb-1">
                    <div class="col-12 align-self-center">
                        <p class="font-futura business__section1__title business__section1__title__body">
                            TODO EL PUNTO DE UNA EMPRESA ES ENCAPSULAR A UN NICHO DE MERCADO DE MANERA CUALITATIVA O CUANTITATIVA.
                        </p>
                    </div>
                </div>
            </div>

        </div>


        <div class="container-fluid business__section2">

            <div class="row">
                <div class="col-12">
                    <div class="container">
                        <div class="row mt-5 mb-5">
                            <div class="col-12">
                                    <p class="business__section2__title font-futura">
                                        CUANDO UN PROBLEMA ES REALMENTE IMPORTANTE ES MUY PROBABLE QUE EL CONSUMIDOR YA LO ESTÉ RESOLVIENDO DE ALGUNA MANERA
                                    </p>

                                    <p class="business__section2__description font-basic">
                                        En esos casos, debemos cuestionarnos si hay alguna manera de hacerlo mejor o por menos dinero.
                                        <br>
                                        ¿Cómo saberlo?, a través del método científico.
                                    </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row mb-1">
                <video loop muted autoplay class="business__section2__video">
                    <source :src="video3" type="video/mp4" />
                </video>
            </div>


            <div class="row mobile-investigation">
                <div class="col-12">
                    <div class="container">
                        <div class="row business__section2__row mt-5 mb-5">
                            <div class="col-12 col-sm-12 col-md-12 col-lg-6">
                                <div>
                                    <img :src="animation1" class="mobile-investigation-image">
                                </div>
                                <p class="font-basic business__section2__row__item">
                                    Si podemos cortar pasos en el proceso o agregar uno
                                    que evite el problema en su totalidad, tenemos
                                    una hipótesis de producto o servicio.
                                </p>
                            </div>
                            <div class="col-12 col-sm-12 col-md-12 col-lg-6">
                                <div>
                                    <img :src="animation2" class="mobile-investigation-image">
                                </div>
                                <p class="font-basic business__section2__row__item">
                                    Entre más valor le aportemos al usuario, más molestias o dinero le ahorremos, mejor vamos a poder negociar un producto o servicio.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <div class="row business__section2__row mt-5">
                            <div class="col-6">
                                <div>
                                    <img :src="animation3" class="mobile-investigation-image">
                                </div>
                                <p class="font-basic business__section2__row__item">
                                    Empieza tu investigación
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div class="container">
               <div class="row">
                   <div class="col-12">
                        <p class="business__section2__investigation font-futura text-center">
                            Empieza tu investigación <img :src="arrow">
                        </p>


                        <p class="business__section2__title1 font-futura text-center">
                            CONOCE MÁS SOBRE
                            <br>
                            LA INVESTIGACIÓN DE VIABILIDAD DE NEGOCIO
                        </p>
                   </div>
               </div>
            </div>

            <!-- <div class="row mb-1">
                <video loop muted autoplay class="business__section2__video" style="max-width: 100%;">
                    <source :src="video2" type="video/mp4" />
                </video>
            </div> -->

        </div>

        <div style="margin: 30px"></div>
    </section>
</template>

<script>

import video1 from 'ASSETS/business-investigation/video/consultoria-en-guadalajara-1'
import video2 from 'ASSETS/business-investigation/video/consultoria-gdl-2'
import video3 from 'ASSETS/business-investigation/video/empresas-de-consultoria-en-guadalajara-linea'
import animation1 from 'ASSETS/business-investigation/gif/consultores-de-empresa-en-guadalajara-3'
import animation2 from 'ASSETS/business-investigation/gif/consultores-de-empresas-2'
import animation3 from 'ASSETS/business-investigation/gif/consultores-de-negocios-en-guadalajara-1'
import arrow from 'ASSETS/business-investigation/image/arrow'
//import animation6 from 'ASSETS/we-are/gif/asesoria-de-negocios-en-guadalajara-4'
import videofull from 'COMPONENTS/media/videofull'

export default {
    name: 'business-investigation',
    components: {
        videofull
    },
    data() {
        return {
            video1,
            video2,
            video3,
            animation1,
            animation2,
            animation3,
            arrow
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

    .video-text {
        position: absolute;
        color: rgb(0, 0, 0);
        top: 170px;
        right: 300px;

        &__title {
            font-size: 60px
        }

        &__subtitle {
            font-size: 26px;
            font-weight: bold;
        }

        &__description{
            font-size: 26px;
        }
    }

    .animation-we-are {
        width: 84px;
        height: 86px;
        margin-bottom: 30px;
    }

    .business {


        &__section1 {
            margin-bottom: 100px;
            background: #000;
            color: #fff;

            &__title {
                text-align: center;
                margin-top: 100px;
                font-size: 35px;

                &__body {
                    padding-bottom: 300px;
                }
            }

            &__video {
                width: 100%;
            }
        }


        &__section2 {
            margin-top: 30px;

            &__title {
                padding-top: 20px;
                font-size: 35px;
            }

            &__title1 {
                padding-top: 80px;
                padding-bottom: 80px;
                font-size: 35px;
            }

             &__investigation {
                padding-top: 20px;
                font-size: 35px;
            }

            &__description {
                padding-top: 30px;
                font-size: 23px;
            }

            &__video {
                width: 100%;
            }

            &__row {

                &__item {
                    font-size: 21px;
                }
            }
        }

        &__section5 {
            margin-top: 30px;
            margin-bottom: 100px;
            padding-bottom: 400px;

            &__portafolio {
                position: absolute;
                z-index: 1;
                width: 648px;
                background: #717271;
                padding-top: 100px;
                padding-left: 40px;
                padding-right: 40px;
                padding-bottom: 100px;

                &__title {
                    color: #fff;
                    font-size: 35px;
                }
            }

            &__services {
                position: absolute;
                z-index: 3;
                margin-top: -200px;
                float: right;
                right: 0;
                width: 1200px;
                background: rgba(113, 114, 113, 0.1);
                padding-top: 400px;
                padding-left: 40px;
                padding-right: 40px;
                padding-bottom: 100px;

                &__title {
                    position: relative;
                    width: 71%;
                    top: -352px;
                    left: 350px;
                    color: #000;
                    font-size: 24px;
                }

                &__items {
                    position: relative;
                    top: -352px;
                    left: 250px;
                    width: 80%;
                }
            }

        }
    }

    .font-basic {
        &__weare {
            &__item1{
                font-size: 20px;
                width: 700px;
            }

            &__item2{
                font-size: 20px;
            }
        }
    }

    .font-futura {
        &__power {
            font-size: 34px;
        }
    }

    @media (min-width: 992px) {


        .mobile-investigation {
            background: #C4C4C4 !important;
        }

        .business__section2__row__item {
            color: #fff;
        }

        .mobile-investigation-image {
            filter: invert(1);
        }

        .video-text {
            right: 100px !important;

            &__title {
                font-size: 40px !important;
            }

            &__subtitle {
                font-size: 20px !important;
            }

            &__description {
                font-size: 20px !important;
            }
        }
    }


    @media (min-width: 769px) AND (max-width: 991px) {

        video {
            display: none;
        }

        #player-overlay {
            &:before {
                padding-top: 80%;

            }
        }

        .mobile-investigation {
            background: #C4C4C4 !important;
        }

        .business__section2__row__item {
            color: #fff;
        }

        .mobile-investigation-image {
            filter: invert(1);
        }

        .video-text {
            right: 300px !important;

            &__title {
                font-size: 30px !important;
            }

            &__subtitle {
                font-size: 15px !important;
            }

            &__description {
                font-size: 15px !important;
            }
        }
    }

    @media (min-width: 620px) AND (max-width: 768px) {

        #player-overlay {
            &:before {
                padding-top: 100%;

            }
        }

        video {
            display: none;
        }


        .video-text {

            right: 200px !important;

            &__title {
                font-size: 30px !important;
            }

            &__subtitle {
                font-size: 15px !important;
            }

            &__description {
                font-size: 15px !important;
            }
        }
    }

    @media (min-width: 380px) AND (max-width: 619px) {

        #player-overlay {
            &:before {
                padding-top: 140%;

            }
        }

        video {
            display: none;
        }

        .mobile-investigation {
            background: #C4C4C4 !important;
        }

        .business__section2__row__item {
            color: #fff;
        }

        .mobile-investigation-image {
            filter: invert(1);
        }

        .video-text {

            right: 100px !important;

            &__title {
                font-size: 30px !important;
            }

            &__subtitle {
                font-size: 15px !important;
            }

            &__description {
                font-size: 15px !important;
            }
        }
    }
</style>
