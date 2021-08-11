<template>
    <section class="digital">

        <div class="container-fluid digital__section1">
            <div class="row digital__section1__row mb-5">
                <div class="col-12 col-sm-12 col-md-12 col-lg-6">
                    <div class="container mt-5">
                        <div class="row">
                            <div class="d-flex justify-content-end digital__section1__row__computer mt-5">
                                <video loop muted autoplay class="business__section1__video" style="max-width: 100%;">
                                    <source :src="video1" type="video/mp4" />
                                </video>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-12 col-md-12 col-lg-6 align-self-center mt-5">
                    <p class="digital__section1__title font-basic">
                        DIGITAL OPERATION
                    </p>
                    <p class="digital__section1__description font-basic">
                        Impulsamos la transformación y construimos negocios
                        reuniendo las capacidades necesarias para ayudar a
                        las organizaciones a crecer y prosperar en la era digital.
                    </p>
                </div>
            </div>
        </div>

        <div class="container-fluid digital__section2">
            <div class="row">
                <div class="col-12 col-sm-12 col-md-12 col-lg-6 align-self-center digital__section2__row__text">
                    <div class="container mt-5 mb-3">
                        <div class="row digital__section2__row">
                            <div class="col-12">
                                <p class="digital__section2__title font-basic">
                                    AYUDAMOS A NUESTROS CLIENTES A APROVECHAR EL PODER DE LOS DATOS...
                                </p>
                                <p class="digital__section2__description font-basic">
                                    La inteligencia artificial y capitalización de la nueva
                                    tecnología, optimizar y automatizar las operaciones.
                                    Impulsando el crecimiento digital, creando experiencias
                                    asombrosas a su cliente final y desarrollando el talento y
                                    una cultura más tecnológica.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-12 col-md-12 col-lg-6 d-flex justify-content-end digital__section2__row__computer mb-5">
                    <video loop muted autoplay class="business__section2__video" style="max-width: 100%;">
                        <source :src="video2" type="video/mp4" />
                    </video>
                </div>
            </div>
        </div>


        <div class="digital__section3">
            <div class="row">
                <div class="col-12 col-sm-12 col-md-12 col-lg-6 align-self-center">
                    <img :src="image1" style="max-width: 100%; min-width: 100%;">
                </div>
                <div class="col-12 col-sm-12 col-md-12 col-lg-6 align-self-center text-center">
                    <div class="container">
                        <div class="row digital__section3__row mt-5">
                            <div class="col-12">
                                <p class="font-futura mb-5 digital__section3__row__title">
                                    ALL OF THIS IS POSSIBLE
                                    <br>
                                    BECAUSE OF OUR TEAM
                                </p>
                                <p class="font-futura mt-5 digital__section3__row__description">
                                    Científicos dedicados al análisis de datos,
                                    <br>
                                    ingenieros, arquitectos, desarrolladores,
                                    <br>
                                    entrenadores ágiles, diseñadores
                                    <br>
                                    y expertos en ciberseguridad.

                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="container-fluid digital__section4">
            <div class="row">
                <div class="col-12 mt-5 mb-5">
                    <div class="container-fluid">
                        <div class="row mt-5 mb-5">
                            <div class="col-12 align-self-center digital__section4__row text-center">
                                <p class="digital__section4__title font-basic">
                                Complementando nuestras capacidades internas, contamos con múltiples soluciones
                                <br>
                                patentadas y una asociación con una de las empresas líderes en tecnología del mundo.
                                </p>
                            </div>
                        </div>
                </div>
                </div>
            </div>
        </div>


        <div class="container-fluid digital__section5">
           <div class="row">
               <div class="col-12">
                    <div class="container mt-5 mb-5">
                        <div class="row digital__section5__row">
                            <div class="col-12 align-self-center digital__section5__row__text">
                                <p class="digital__section5__title font-basic">
                                    Ayudamos a nuestros clientes a desarrollar la cultura laboral y las capacidades necesarias para ser ágiles e innovar antes del  mercado, mucho después de que nos hayamos ido.
                                    <br>
                                    <br>
                                    Este es el cambio que importa.
                                </p>
                            </div>
                        </div>
                    </div>
               </div>
           </div>
        </div>

        <div class="digital__section3">
            <div class="row">
                <div class="col-12 align-self-center">
                    <img :src="image2" style="max-width: 100%; min-width: 100%;">
                </div>
            </div>
        </div>

        <div class="container-fluid digital__section6">
            <div class="row mt-5">
                <div class="col-12 col-sm-12 col-md-12 col-lg-6 d-flex ">
                    <video loop muted autoplay class="business__section6_video" style="max-width: 100%;">
                        <source :src="video3" type="video/mp4" />
                    </video>
                </div>
                <div class="col-12 col-sm-12 col-md-12 col-lg-6 align-self-center mt-5">
                    <div class="container">
                        <div class="row digital__section6__row">
                            <div class="col">
                                <p class="digital__section6__description font-basic">
                                    Más del 90 por ciento de nuestro
                                    trabajo ahora incluye Beirat Digital.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row digital__section6__row mt-5 mb-5">
                <div class="col-12 text-center">
                    <p class="digital__section6__subtitle font-basic">
                        Sólo en los últimos años, hemos prestado servicios a cientos de clientes y hemos completado
                        cientos de transformaciones tecnológicas y construcciones de nuevos negocios.
                    </p>
                </div>
            </div>
        </div>


        <div style="margin: 30px"></div>
    </section>
</template>

<script>

import video1 from 'ASSETS/digital-operation/video/empresas-de-consultoria-1'
import video2 from 'ASSETS/digital-operation/video/empresas-de-consultoria-en-guadalajara-2'
import video3 from 'ASSETS/digital-operation/video/empresas-consultoras-gdl-3'
import image1 from 'ASSETS/digital-operation/image/consultores_de_negocios_en_guadalajara'
import image2 from 'ASSETS/digital-operation/image/consultoria_en_guadalajara'

export default {
    name: 'digital-operation',
    data() {
        return {
            video1,
            video2,
            video3,
            image1,
            image2
        }
    }
}
</script>

<style lang="scss">

    body {
        background: #fff;;
    }

    .digital {


        &__section1 {

            &__title {
                font-size: 60px;
            }

            &__description {
                font-size: 30px;
            }

            &__row {

                padding-left: 100px;
                padding-right: 100px;

                &__computer {
                    position: relative;
                }

                &__text {
                    text-align: right;
                }

            }

            &__video {
                width: 100%;
            }
        }

        &__section2 {

            background: #000;
            color: #fff;

            &__title {
                font-size: 40px;
            }

            &__description {
                font-size: 26px;
            }

            &__row {

                padding-left: 100px;
                padding-right: 100px;

            }

            &__video {
                width: 100%;
            }
        }


        &__section3 {

            &__title {
                font-size: 30px;
            }

            &__description {
                font-size: 15px;
            }

            &__row {

                padding-left: 100px;
                padding-right: 100px;

                &__title {
                    font-size: 70px;
                }

                &__description {
                    font-size: 40px;
                }

            }

            &__image {
                width: 100%;
            }
        }

        &__section4 {

            background: #000;
            color: #fff;

            &__title {
                font-size: 40px;
            }

            &__description {
                font-size: 15px;
            }

            &__row {
                padding-left: 100px;
                padding-right: 100px;

            }


        }

        &__section5 {

            &__title {
                font-size: 35px;
            }

            &__description {
                font-size: 15px;
            }


        }


         &__section6 {


            &__title {
                font-size: 50px;
            }

            &__description {
                font-size: 40px;
            }

            &__subtitle {
                font-size: 35px;
            }

            &__row {
                padding-left: 100px;
                padding-right: 100px;


                &__text {
                    text-align: right;
                }

            }

            &__video {
                width: 100%;
            }
        }



    }


    @media (min-width: 769px) AND (max-width: 992px) {
        .digital__section1__row, .digital__section2__row, .digital__section3__row, .digital__section4__row, .digital__section6__row {
            padding-left: 50px;
            padding-right: 50px;
        }

        .digital__section2__title {
            font-size: 22px;
        }

        .digital__section3__row__title {
            font-size: 30px;
        }

        .digital__section3__row__description {
            font-size: 20px;
        }

        .digital__section4__title {
            font-size: 20px;
        }

        .digital__section6__subtitle {
            font-size: 20px;
        }
    }

    @media (min-width: 380px) AND (max-width: 768px) {
        .digital__section1__row, .digital__section2__row, .digital__section3__row, .digital__section4__row, .digital__section5__row, .digital__section6__row {
            padding-left: 50px;
            padding-right: 50px;
        }

        .digital__section2__title {
            font-size: 22px;
        }

        .digital__section3__row__title {
            font-size: 30px;
        }

        .digital__section3__row__description {
            font-size: 20px;
        }

        .digital__section4__title {
            font-size: 20px;
        }

        .digital__section6__subtitle {
            font-size: 20px;
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
</style>
