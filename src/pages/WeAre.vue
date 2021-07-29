<template>
    <section class="we-are">
        <videofull class="mtb-5"></videofull>

        <div class="container-fluid we-are__section1">
            <div class="row mb-1">
                <div class="col-7 align-self-center">
                    <p class="font-futura font-futura__power">
                        EL PODER DEL <b>CONOCIMIENTO</b> ES EL ELEMENTO <b>FUNDAMENTAL PARA EL ÉXITO DE LOS NEGOCIOS</b>
                    </p>
                </div>
                <div class="col-5 d-flex justify-content-end">
                    <video loop muted autoplay>
                        <source :src="video1" type="video/mp4" />
                    </video>
                </div>
            </div>
            <div class="row mt-2 mb-1">
                <div class="col-6">
                    <div class="animation-we-are__item_1">
                        <img :src="animation2" alt="empresas-consultoras-gdl-1" class="animation-we-are">
                    </div>
                    <p class="font-basic font-basic__weare__item1">
                        En Beirat Consulting te asesoramos, capacitamos
                        <br>
                        y nos volvemos tus aliados en el logro de tus objetivos.
                    </p>
                </div>
                <div class="col-6 ">
                    <div>
                        <img :src="animation1" alt="asesores_de_negocios-1" class="animation-we-are">
                    </div>
                    <p class="font-basic font-basic__weare__item2">
                        Somos una firma consultora con más de 15 años de experiencia en la transformación de compañías y organizaciones a nivel nacional e internacional, incorporando tecnología y procesos científicamente fundados que promuevan su desarrollo y crecimiento.
                    </p>
                </div>
            </div>

        </div>

        <div class="container-fluid we-are__section2">

            <p class="we-are__section2__title font-futura">
                EL PODER DEL CONOCIMIENTO ES EL ELEMENTO FUNDAMENTAL PARA EL ÉXITO DE LOS NEGOCIOS
            </p>

            <p class="we-are__section2__description font-basic">
                Encapsulamos soluciones estratégicas que resuelven problemáticas específicas dentro de las organizaciones.
            </p>
            <div class="row mb-1">
                <div class="col-12">
                     <video loop muted autoplay class="we-are__section2__video">
                        <source :src="video2" type="video/mp4" />
                    </video>
                </div>
            </div>

        </div>

        <div class="container-fluid we-are__section3">

            <p class="we-are__section3__title font-futura">
                ¿QUE HACE POSIBLE TU TAZA DE CAFÉ?
            </p>

            <p class="we-are__section3__description font-basic">
                Desde el cultivo, tostado hasta el comercio.
            </p>
            <div class="row mb-1">
                <div class="col-12">
                     <video loop muted autoplay class="we-are__section3__video">
                        <source :src="video3" type="video/mp4" />
                    </video>
                </div>
            </div>

        </div>

        <div class="container-fluid we-are__section4">

            <p class="we-are__section4__title font-futura">
                CUANDO UN PROBLEMA ES REALMENTE IMPORTANTE ES MUY PROBABLE QUE EL CONSUMIDOR YA LO ESTÉ RESOLVIENDO DE ALGUNA MANERA
            </p>

            <p class="we-are__section4__description font-basic">
                En esos casos, debemos cuestionarnos si hay alguna manera de hacerlo mejor o por menos dinero.
                <br>
                ¿Cómo saberlo?, a través del método científico.
            </p>
            <div class="row mb-1">
                <div class="col-12">
                     <video loop muted autoplay class="we-are__section4__video">
                        <source :src="video4" type="video/mp4" />
                    </video>
                </div>
            </div>

        </div>

        <div class="container-fluid we-are__section5">


            <!-- <div style="position: absolute; left: 10px; top: 25px; z-index: 1;"> CUADRO 1 </div>
            <div style="position: absolute; left: 30px; top: 80px; z-index: 3;"> CUADRO 2 </div> -->

            <div class="we-are__section5__portafolio text-center">
                <p class="we-are__section5__portafolio__title font-futura">
                    NUESTRO PORTAFOLIO
                </p>
            </div>
            <div class="we-are__section5__services text-center">
                <p class="we-are__section5__services__title font-basic">
                    Está conformado por diferentes industrias, como
                </p>

                <div class="we-are__section5__services__items">
                    <div class="row mt-5">
                        <div class="col-3">
                            <div>
                                <img :src="animation3" alt="asesores-de-negocio-en-guadalajara" class="we-are__section5__services__image">
                            </div>
                            <span class="font-futura">
                                Medicina y Farmacéutica
                            </span>
                        </div>
                        <div class="col-3">
                            <div>
                                <img :src="animation4" alt="asesores-de-negocio-en-guadalajara" class="we-are__section5__services__image">
                            </div>
                            <span class="font-futura">
                                Construcción y Bienes raíces
                            </span>
                        </div>
                        <div class="col-3">
                            <div>
                                <img :src="animation5" alt="asesores-de-negocio-en-guadalajara" class="we-are__section5__services__image">
                            </div>
                            <span class="font-futura">
                                Energía y Recursos naturales
                            </span>
                        </div>
                        <div class="col-3">
                            <div>
                                <img :src="animation5" alt="asesores-de-negocio-en-guadalajara" class="we-are__section5__services__image">
                            </div>
                            <span class="font-futura">
                                Agroindustria
                            </span>
                        </div>
                    </div>
                    <div class="row mt-5">
                        <div class="col-3">
                            <div>
                                <img :src="animation3" alt="asesores-de-negocio-en-guadalajara" class="we-are__section5__services__image">
                            </div>
                            <span class="font-futura">
                                Agropecuario
                            </span>
                        </div>
                        <div class="col-3">
                            <div>
                                <img :src="animation4" alt="asesores-de-negocio-en-guadalajara" class="we-are__section5__services__image">
                            </div>
                            <span class="font-futura">
                                Manufactura
                            </span>
                        </div>
                        <div class="col-3">
                            <div>
                                <img :src="animation5" alt="asesores-de-negocio-en-guadalajara" class="we-are__section5__services__image">
                            </div>
                            <span class="font-futura">
                                Productos de Consumo
                            </span>
                        </div>
                        <div class="col-3">
                            <div>
                                <img :src="animation5" alt="asesores-de-negocio-en-guadalajara" class="we-are__section5__services__image">
                            </div>
                            <span class="font-futura">
                                Servicios Financieros
                            </span>
                        </div>
                    </div>
                    <div class="row mt-5">
                        <div class="col-3">
                            <div>
                                <img :src="animation3" alt="asesores-de-negocio-en-guadalajara" class="we-are__section5__services__image">
                            </div>
                            <span class="font-futura">
                                Tecnología, Medios
                                <br>
                                y Telecomunicaciones

                            </span>
                        </div>
                        <div class="col-3">
                            <div>
                                <img :src="animation4" alt="asesores-de-negocio-en-guadalajara" class="we-are__section5__services__image">
                            </div>
                            <span class="font-futura">
                                Comercio al por mayor
                            </span>
                        </div>
                        <div class="col-3">
                            <div>
                                <img :src="animation5" alt="asesores-de-negocio-en-guadalajara" class="we-are__section5__services__image">
                            </div>
                            <span class="font-futura">
                                Alimentícia
                            </span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <div style="margin: 30px"></div>
    </section>
</template>

<script>

import video1 from 'ASSETS/we-are/video/consultores-de-empresas-formula'
import video2 from 'ASSETS/we-are/video/empresas-de-consultoria-organizacion'
import video3 from 'ASSETS/we-are/video/consultores-de-empresa-en-guadalajara-proceso'
import video4 from 'ASSETS/we-are/video/empresas-de-consultoria-en-guadalajara-linea'
import animation1 from 'ASSETS/we-are/gif/asesores_de_negocios-2'
import animation2 from 'ASSETS/we-are/gif/empresas-consultoras-gdl-1'
import animation3 from 'ASSETS/we-are/gif/asesores-de-negocio-en-guadalajara-3'
import animation4 from 'ASSETS/we-are/gif/asesoria-de-negocios-en-guadalajara-4'
import animation5 from 'ASSETS/we-are/gif/asesoria-de-negocios-5'
//import animation6 from 'ASSETS/we-are/gif/asesoria-de-negocios-en-guadalajara-4'
import videofull from 'COMPONENTS/media/videofull'

export default {
    name: 'we-are',
    components: {
        videofull
    },
    data() {
        return {
            video1,
            video2,
            video3,
            video4,
            animation1,
            animation2,
            animation3,
            animation4,
            animation5,
            //animation6
        }
    }
}
</script>

<style lang="scss">

    .animation-we-are {
        width: 84px;
        height: 86px;
        margin-bottom: 30px;
    }

    .we-are {


        &__section1 {
            margin-top: 30px;
            margin-bottom: 100px;
            padding-left: 50px;
            padding-right: 30px;
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
            margin-bottom: 100px;
            padding-bottom: 100px;

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
            padding-bottom: 400px;

            @media (min-width: 1200px)  {

                &__portafolio {
                    width: 320px !important;
                }
            }

            @media (min-width: 992px) and (max-width: 1199px) {

                &__portafolio {
                    width: 320px !important;
                }
            }

            @media (min-width: 768px) and (max-width: 991px) {


                &__portafolio {
                    position: relative !important;
                    width: 320px !important;
                    padding-top: 32px !important;
                    top: 194px;
                }

            }

            &__portafolio {
                position: absolute;
                left: 0;
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

            @media (min-width: 1200px) {

               &__services {

                    width: 990px !important;

                    &__title {
                        position: relative !important;
                        left: 320px !important;
                        width: 50%;
                    }

                    &__items {
                        left: 150px !important;
                    }
               }

            }

            @media (min-width: 992px) and (max-width: 1199px){

               &__services {

                    width: 1000px !important;

                    &__title {
                        left: 315px !important;
                    }

                    &__items {
                        position: absolute !important;
                        left: 388px !important;
                        top: 63px !important;
                        width: 60% !important;
                    }
               }

            }


            @media (min-width: 768px) and (max-width: 991px) {


               &__services {

                    width: 1000px !important;

                    &__title {
                        left: 452px !important;
                        width: 589px !important;
                        font-size: 17px !important;
                    }

                    &__items {
                        position: absolute !important;
                        left: 615px !important;
                        top: 63px !important;
                        width: 37% !important;

                    }

                     &__image {
                        max-width: 30px !important;
                    }


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
</style>
