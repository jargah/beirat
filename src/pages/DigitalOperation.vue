<template>
    <section class="digital">


        <div class="container-fluid digital__section1">
            <div class="row digital__section1__row">
                <div class="col-7 d-flex justify-content-end digital__section1__row__computer">
                    <video loop muted autoplay class="business__section1__video">
                        <source :src="video1" type="video/mp4" />
                    </video>
                </div>
                <div class="col-5 align-self-center ">
                    <p class="digital__section1__title font-basic">
                        DIGITAL OPERATION
                    </p>
                    <p class="digital__section1__description font-basic">
                        Impulsamos la transformación y construimos negocios
                        <br>
                        reuniendo las capacidades necesarias para ayudar a
                        <br>
                        las organizaciones a crecer y prosperar en la era digital.
                    </p>
                </div>
            </div>
        </div>

        <div class="container-fluid digital__section2">
            <div class="row digital__section2__row">
                <div class="col-6 align-self-center digital__section2__row__text">
                    <p class="digital__section2__title font-basic">
                        AYUDAMOS A NUESTROS CLIENTES A
                        <br>
                        APROVECHAR EL PODER DE LOS DATOS...
                    </p>
                    <p class="digital__section2__description font-basic">
                        La inteligencia artificial y capitalización de la nueva
                        <br>
                        tecnología, optimizar y automatizar las operaciones.
                        <br>
                        Impulsando el crecimiento digital, creando experiencias
                        <br>
                        asombrosas a su cliente final y desarrollando el talento y
                        <br>
                        una cultura más tecnológica.
                    </p>
                </div>
                <div class="col-6 d-flex justify-content-end digital__section2__row__computer">
                    <video loop muted autoplay class="business__section2__video">
                        <source :src="video2" type="video/mp4" />
                    </video>
                </div>
            </div>
        </div>


        <div class="digital__section3">
            <div class="row digital__section3__row">
                <div class="col-6 align-self-center">
                    <img :src="image1" style="max-width: 100%;">
                </div>
                <div class="col-6 align-self-center text-center">
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

        <div class="container-fluid digital__section4">
            <div class="row digital__section4__row">
                <div class="col-12 align-self-center digital__section4__row__text">
                    <p class="digital__section4__title font-basic">
                       Complementando nuestras capacidades internas, contamos con múltiples soluciones
                       patentadas y una asociación con una de las empresas líderes en tecnología del mundo.
                    </p>
                </div>
            </div>
        </div>


        <div class="container-fluid digital__section5">
            <div class="row digital__section5__row">
                <div class="col-12 align-self-center digital__section5__row__text">
                    <p class="digital__section5__title font-basic">
                        Ayudamos a nuestros clientes a desarrollar la cultura laboral y las capacidades necesarias
                        <br>
                        para ser ágiles e innovar antes del  mercado, mucho después de que nos hayamos ido.
                        <br>
                        <br>
                        Este es el cambio que importa.
                    </p>
                </div>
            </div>
        </div>

        <div class="digital__section3">
            <div class="row digital__section3__row">
                <div class="col-12 align-self-center">
                    <img :src="image2" style="max-width: 100%;">
                </div>
            </div>
        </div>

        <div class="container-fluid digital__section6">
            <div class="row digital__section6__row">
                <div class="col-7 d-flex justify-content-end digital__section1__row__computer">
                    <video loop muted autoplay class="business__section6_video">
                        <source :src="video3" type="video/mp4" style="max-width: 100%;"/>
                    </video>
                </div>
                <div class="col-5 align-self-center ">
                    <p class="digital__section6__title font-basic">
                        DIGITAL OPERATION
                    </p>
                    <p class="digital__section6__description font-basic">
                        Más del 90 por ciento de nuestro
                        <br>
                        trabajo ahora incluye Beirat Digital.
                    </p>
                </div>
            </div>

            <div class="row ">
                <div class="col-12 text-center">
                    <p class="digital__section6__subtitle font-basic">
                        Sólo en los últimos años, hemos prestado servicios a cientos de clientes y hemos completado
                        <br>
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

            margin-bottom: 100px;

            &__title {
                font-size: 50px;
            }

            &__description {
                font-size: 20px;
            }

            &__row {
                position: relative;
                top: 100px;

                &__computer {
                    position: relative;
                    right: 100px;
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
                font-size: 30px;
            }

            &__description {
                font-size: 15px;
            }

            &__row {
                position: relative;
                top: 100px;
                padding-bottom: 200px;

                &__computer {
                    position: relative;
                    right: 100px;
                }

                &__text {
                    position: relative;
                    left: 200px;
                }

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

                &__title {
                    font-size: 40px;
                }

                &__description {
                    position: relative;
                    top: 100px;
                    font-size: 25px;
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
                font-size: 30px;
                max-width: 1000px;
            }

            &__description {
                font-size: 15px;
            }

            &__row {
                position: relative;
                top: 100px;
                padding-bottom: 200px;

                &__computer {
                    position: relative;
                    right: 100px;
                }

                &__text {
                    position: relative;
                    left: 200px;
                }

            }


        }

        &__section5 {

            &__title {
                font-size: 30px;
                max-width: 1000px;
            }

            &__description {
                font-size: 15px;
            }

            &__row {
                position: relative;
                top: 100px;
                padding-bottom: 150px;

                &__computer {
                    position: relative;
                    right: 100px;
                }

                &__text {
                    position: relative;
                    left: 200px;
                }

            }

        }


         &__section6 {

            margin-bottom: 100px;

            &__title {
                font-size: 50px;
            }

            &__description {
                font-size: 20px;
            }

            &__subtitle {
                font-size: 25px;
            }

            &__row {
                position: relative;
                top: 100px;
                padding-bottom: 200px;

                &__computer {
                    position: relative;
                    right: 100px;
                }

                &__text {
                    text-align: right;
                }

            }

            &__video {
                width: 100%;
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
</style>
