<template>
    <div>
        <div id="player-overlay">
            <video loop muted autoplay class="videofull">
                <source :src="consultores" type="video/mp4" />
            </video>
        </div>
        <section class="we-are">
            <div class="container-fluid we-are__section1">
                <div class="row mb-1">
                    <div class="col-12 col-sm-12 col-md-12 col-lg-7 align-self-center">
                        <p class="font-futura font-futura__power">
                            EL PODER DEL <b>CONOCIMIENTO</b> ES EL ELEMENTO
                            <b>FUNDAMENTAL PARA EL ÉXITO DE LOS NEGOCIOS</b>
                        </p>
                    </div>
                    <div class="col-12 col-sm-12 col-md-12 col-lg-5 d-flex justify-content-end mt-5 ">
                        <video loop muted autoplay class="video_formula">
                            <source :src="video1" type="video/mp4" />
                        </video>
                    </div>
                </div>
                <div class="row mt-2 mb-1">
                    <div class="col-12 col-sm-12 col-md-12 col-lg-6">
                        <div class="animation-we-are__item_1">
                            <img :src="animation12" alt="empresas-consultoras-gdl-1" class="animation-we-are">
                        </div>
                        <p class="font-basic font-basic__weare__item1">
                            En Beirat Consulting te asesoramos, capacitamos
                            <br>
                            y nos volvemos tus aliados en el logro de tus objetivos.
                        </p>
                    </div>
                    <div class="col-12 col-sm-12 col-md-12 col-lg-6">
                        <div>
                            <img :src="animation13" alt="asesores_de_negocios-1" class="animation-we-are">
                        </div>
                        <p class="font-basic font-basic__weare__item2">
                            Somos una firma consultora con más de 15 años de experiencia en la transformación de compañías y organizaciones a nivel nacional e internacional, incorporando tecnología y procesos científicamente fundados que promuevan su desarrollo y crecimiento.
                        </p>
                    </div>
                </div>

            </div>

            <div class="container-fluid we-are__section2">

                <div class="row">
                    <div class="col-12 col-sm-12 col-sm-6 col-lg-6">
                        <p class="we-are__section2__title font-futura">
                            EL PODER DEL CONOCIMIENTO ES EL ELEMENTO
                            FUNDAMENTAL PARA EL ÉXITO DE LOS NEGOCIOS
                        </p>

                        <p class="we-are__section2__description font-basic">
                            Encapsulamos soluciones estratégicas que resuelven
                            problemáticas específicas dentro de las organizaciones.
                        </p>
                    </div>
                </div>
                <div class="row mb-1">
                    <div class="col-12 col-sm-12 col-sm-6 col-lg-6">
                        <video loop muted autoplay class="we-are__section2__video">
                            <source :src="video2" type="video/mp4" />
                        </video>
                    </div>
                </div>

            </div>

            <div class="container-fluid we-are__section3">

                <div class="row">
                    <div class="col-12 col-sm-12 col-sm-6 col-lg-6">
                        <p class="we-are__section3__title font-basic">
                            ¿QUE HACE POSIBLE TU TAZA DE CAFÉ?
                        </p>

                        <p class="we-are__section3__description font-basic">
                            Desde el cultivo, tostado hasta el comercio.
                        </p>
                    </div>
                </div>
                <div class="row mb-1">
                    <div class="col-12">
                        <video loop muted autoplay class="we-are__section3__video">
                            <source :src="video3" type="video/mp4" />
                        </video>
                    </div>
                </div>

            </div>

            <div class="container-fluid we-are__section4">

                <div class="row">
                    <div class="col-12 col-sm-12 col-sm-6 col-lg-6">
                         <p class="we-are__section4__title font-futura">
                            CUANDO UN PROBLEMA ES REALMENTE IMPORTANTE ES MUY PROBABLE
                            QUE EL CONSUMIDOR <strong>YA LO ESTÉ RESOLVIENDO DE ALGUNA MANERA</strong>
                        </p>

                        <p class="we-are__section4__description font-basic">
                            En esos casos, debemos cuestionarnos si hay alguna manera
                            de hacerlo mejor o por menos dinero.
                            ¿Cómo saberlo?, a través del método científico.
                        </p>
                    </div>
                </div>
                <div class="row mb-1">
                    <div class="col-12">
                        <video loop muted autoplay class="we-are__section4__video">
                            <source :src="video4" type="video/mp4" />
                        </video>
                    </div>
                </div>

            </div>

             <div class="container-fluid we-are__section5">
                    <div class="row">
                        <div class="col-3">
                           <div class="we-are__section5__portafolio text-center">
                                <p class="we-are__section5__portafolio__title font-futura">
                                    NUESTRO PORTAFOLIO
                                </p>
                            </div>
                        </div>
                        <div class="col-9">
                            <div class="we-are__section5__services text-center">
                                <div class="row">
                                    <div class="col-12 mt-5 mb-4">
                                        <p class="we-are__section5__services__title font-basic">
                                            Está conformado por diferentes industrias, como
                                        </p>
                                    </div>
                                </div>

                                <div class="we-are__section5__services__items">
                                    <div class="row mt-5">
                                        <div class="col-6 col-sm-6 col-md-6 col-lg-3">
                                            <div>
                                                <img :src="animation1" alt="asesores-de-negocio-en-guadalajara" class="we-are__section5__services__image">
                                            </div>
                                            <span class="font-futura">
                                                Medicina y Farmacéutica
                                            </span>
                                        </div>
                                        <div class="col-6 col-sm-6 col-md-6 col-lg-3">
                                            <div>
                                                <img :src="animation2" alt="asesores-de-negocio-en-guadalajara" class="we-are__section5__services__image">
                                            </div>
                                            <span class="font-futura">
                                                Construcción y Bienes raíces
                                            </span>
                                        </div>
                                        <div class="col-6 col-sm-6 col-md-6 col-lg-3">
                                            <div>
                                                <img :src="animation3" alt="asesores-de-negocio-en-guadalajara" class="we-are__section5__services__image">
                                            </div>
                                            <span class="font-futura">
                                                Energía y Recursos naturales
                                            </span>
                                        </div>
                                        <div class="col-6 col-sm-6 col-md-6 col-lg-3">
                                            <div>
                                                <img :src="animation4" alt="asesores-de-negocio-en-guadalajara" class="we-are__section5__services__image">
                                            </div>
                                            <span class="font-futura">
                                                Agroindustria
                                            </span>
                                        </div>
                                    </div>
                                    <div class="row mt-5">
                                        <div class="col-6 col-sm-6 col-md-6 col-lg-3">
                                            <div>
                                                <img :src="animation5" alt="asesores-de-negocio-en-guadalajara" class="we-are__section5__services__image">
                                            </div>
                                            <span class="font-futura">
                                                Agropecuario
                                            </span>
                                        </div>
                                        <div class="col-6 col-sm-6 col-md-6 col-lg-3">
                                            <div>
                                                <img :src="animation6" alt="asesores-de-negocio-en-guadalajara" class="we-are__section5__services__image">
                                            </div>
                                            <span class="font-futura">
                                                Manufactura
                                            </span>
                                        </div>
                                        <div class="col-6 col-sm-6 col-md-6 col-lg-3">
                                            <div>
                                                <img :src="animation7" alt="asesores-de-negocio-en-guadalajara" class="we-are__section5__services__image">
                                            </div>
                                            <span class="font-futura">
                                                Productos de Consumo
                                            </span>
                                        </div>
                                        <div class="col-6 col-sm-6 col-md-6 col-lg-3">
                                            <div>
                                                <img :src="animation8" alt="asesores-de-negocio-en-guadalajara" class="we-are__section5__services__image">
                                            </div>
                                            <span class="font-futura">
                                                Servicios Financieros
                                            </span>
                                        </div>
                                    </div>
                                    <div class="row mt-5 mb-5">
                                        <div class="col-6 col-sm-6 col-md-6 col-lg-3">
                                            <div>
                                                <img :src="animation9" alt="asesores-de-negocio-en-guadalajara" class="we-are__section5__services__image">
                                            </div>
                                            <span class="font-futura">
                                                Tecnología, Medios
                                                <br>
                                                y Telecomunicaciones

                                            </span>
                                        </div>
                                        <div class="col-6 col-sm-6 col-md-6 col-lg-3">
                                            <div>
                                                <img :src="animation10" alt="asesores-de-negocio-en-guadalajara" class="we-are__section5__services__image">
                                            </div>
                                            <span class="font-futura">
                                                Comercio al por mayor
                                            </span>
                                        </div>
                                        <div class="col-6 col-sm-6 col-md-6 col-lg-3">
                                            <div>
                                                <img :src="animation11" alt="asesores-de-negocio-en-guadalajara" class="we-are__section5__services__image">
                                            </div>
                                            <span class="font-futura">
                                                Alimentícia
                                            </span>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                 </div>
             </div>
        </section>
    </div>
</template>

<script>

import consultores from 'ASSETS/home/consultores-de-negocios-en-guadalajara'
import video1 from 'ASSETS/we-are/video/consultores-de-empresas-formula'
import video2 from 'ASSETS/we-are/video/empresas-de-consultoria-organizacion'
import video3 from 'ASSETS/we-are/video/consultores-de-empresa-en-guadalajara-proceso'
import video4 from 'ASSETS/we-are/video/empresas-de-consultoria-en-guadalajara-linea'

import animation1 from 'ASSETS/we-are/gif/asesores-de-negocio-en-guadalajara-3'
import animation2 from 'ASSETS/we-are/gif/asesoria-de-negocios-en-guadalajara-4'
import animation3 from 'ASSETS/we-are/gif/asesoria-de-negocios-5'
import animation4 from 'ASSETS/we-are/gif/empresas-de-asesoria-6'

import animation5 from 'ASSETS/we-are/gif/empresas-de-asesoria-en-guadalajara-7'
import animation6 from 'ASSETS/we-are/gif/asesoria-en--mexico-8'
import animation7 from 'ASSETS/we-are/gif/empresas-de-asesoria-en-guadalajara-9'
import animation8 from 'ASSETS/we-are/gif/gestion-de-calidad-10'

import animation9 from 'ASSETS/we-are/gif/gestion-de-calidad-en-guadalajara-11'
import animation10 from 'ASSETS/we-are/gif/empresas-de-certificacion-12'
import animation11 from 'ASSETS/we-are/gif/asesoria-para-negocios-en-guadalajara-13'

import animation12 from 'ASSETS/we-are/gif/empresas-consultoras-gdl-1'
import animation13 from 'ASSETS/we-are/gif/asesores_de_negocios-2'

//import animation6 from 'ASSETS/we-are/gif/asesoria-de-negocios-en-guadalajara-4'
import videofull from 'COMPONENTS/media/videofull'

export default {
    name: 'we-are',
    components: {
        videofull
    },
    data() {
        return {
            consultores,
            video1,
            video2,
            video3,
            video4,
            animation1,
            animation2,
            animation3,
            animation4,
            animation5,
            animation6,
            animation7,
            animation8,
            animation9,
            animation10,
            animation11,
            animation12,
            animation13
        }
    }
}
</script>

<style lang="scss">

.video_formula {
    max-width: 100%;
}

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

    @media (min-width: 769px) AND (max-width: 992px) {
        .font-futura {
            &__power {
                font-size: 20px !important;
            }
        }

        .video_formula {
            max-width: 50% !important;
        }

        .we-are__section5__portafolio__title {
            font-size: 18px !important;
        }

        .we-are__section5 {
            padding-bottom: 850px !important;
        }
    }

    @media (min-width: 380px) AND (max-width: 768px) {
       .font-futura {
            &__power {
                font-size: 20px !important;
            }
        }

        .video_formula {
            max-width: 50% !important;
        }

        .we-are__section5__portafolio__title {
            font-size: 18px !important;
        }

        .we-are__section5 {
            padding-bottom: 850px !important;
        }
    }

    .animation-we-are {
        width: 84px;
        height: 86px;
        margin-bottom: 30px;
    }

    .we-are {

        background: #fff;

        &__section1 {
            position: relative;
            top: 150px;
            padding-bottom: 160px;
            /* margin-top: 30px; */
            /* margin-bottom: 100px; */
            padding-left: 70px;
            padding-right: 70px;
        }

        &__section2 {
            background: #000;
            margin-top: 30px;
            margin-bottom: 100px;
            padding-bottom: 100px;

            color: #fff;

            &__title {
                padding-top: 70px;
                font-size: 35px;
                padding-left: 100px;
            }

            &__description {
                padding-top: 30px;
                font-size: 23px;
                padding-left: 100px;
            }

            &__video {
                width: 100%;
            }
        }

        &__section3 {
            margin-top: 30px;
            margin-bottom: 10px;

            &__title {
                padding-top: 20px;
                font-size: 35px;
                padding-left: 100px;
            }

            &__description {
                padding-top: 30px;
                font-size: 23px;
                padding-left: 100px;
            }

            &__video {
                width: 100%;
            }
        }

        &__section4 {
            margin-top: 30px;

            &__title {
                padding-top: 20px;
                font-size: 35px;
                padding-left: 100px;
            }

            &__description {
                padding-top: 30px;
                font-size: 23px;
                padding-left: 100px;
            }

            &__video {
                width: 100%;
            }
        }

        &__section5 {
            margin-top: 30px;
            margin-bottom: 100px;
            padding-bottom: 600px;

            &__portafolio {
                position: absolute;
                left: 0;
                background: #717271;
                width: 115%;
                height: 250px;
                top: 200px;

                &__title {
                    color: #fff;
                    font-size: 35px;
                    margin-top: 6rem !important;
                }
            }



            &__services {
                position: absolute;
                left: 0;
                width: 100%;
                background: rgba(113, 114, 113, 0.1);

                &__title {
                    position: relative;
                    color: #717271;
                    font-size: 24px;
                }

                &__items {
                    position: relative;
                    color: #717271;
                }
            }

        }
    }

    .font-basic {
        &__weare {
            &__item1{
                font-size: 20px;
            }

            &__item2{
                font-size: 20px;
            }
        }
    }

    .font-futura {
        &__power {
            font-family: 'BasicCommercial LT Com Roman' !important;
            font-size: 34px;
        }
    }
</style>
