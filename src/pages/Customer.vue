<template>
    <section class="customer">

        <video-customer></video-customer>


        <div class="customer__section1">
            <div class="row ">
                <div class="col-12 col-sm-12 col-md-12 col-lg-5 align-self-center">
                    <div class="container">
                        <div class="row customer__section1__row">
                            <div class="col-12">
                                <p class="customer__section1__title mb-5">
                                    TDMEX
                                </p>

                                <p class="customer__section1__description mt-5">
                                    <br>
                                    Empresa comprometida con sus clientes y con el objetivo principal

                                    de prestarles el mejor servicio de carga terrestre.

                                    Asegurándose en todo momento de cumplir con los tiempos establecidos

                                    y con la honestidad que nos caracteriza.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-12 col-md-12 col-lg-7">
                    <img :src="test" class="customer__section1__image" style="max-width: 100%; min-width: 100%;">
                </div>
            </div>
        </div>
        <div class="customer__section2">
            <div class="row">
                <div class="col-12 col-sm-12 col-md-12 col-lg-7">
                    <img :src="test" class="customer__section1__image" style="max-width: 100%; min-width: 100%;">
                </div>
                <div class="col-12 col-sm-12 col-md-12 col-lg-5 align-self-center">
                    <div class="container">
                        <div class="row customer__section2__row ">
                            <div class="col-12">
                                <p class="customer__section2__title mb-5">
                                    GREAT  EXPERIENCE
                                    <br>
                                    GUARANTEED
                                </p>

                                <p class="customer__section2__description">
                                    <br>
                                    Es un proyecto cuyo objetivo es el crear un certificado que avale

                                    a los diferentes proveedores de servicios de hospitalidad, utilizando

                                    una metodología basada en los estándares y criterios ya establecidos

                                    por otras empresas como es el ISO 9001, pero enfocada al área hospitalaria.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="customer__section1">
            <div class="row">
                <div class="col-12 col-sm-12 col-md-12 col-lg-5 align-self-center">
                    <div class="container">
                        <div class="row customer__section1__row">
                            <p class="customer__section1__title mb-5">
                                María Elena
                                <br>
                                Mendoza
                            </p>

                            <p class="customer__section1__description">
                                <br>
                                “45 AÑOS DE EXPERIENCIA EN EL SEGMENTO DE LA HOSPITALIDAD”
                                <br>
                                <br>
                                45 Años de Experiencia en el segmento de la hospitalidad,

                                Iniciando en 1975 con la participación desde el arranque

                                del proyecto Paraíso Mazatlán en Sinaloa, desempeñándose

                                en los departamentos de Ama de Llaves, Atención al Huésped

                                y Supervisión de Mantenimiento.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-12 col-md-12 col-lg-7">
                    <img :src="test" class="customer__section1__image" style="max-width: 100%; min-width: 100%;">
                </div>
            </div>
        </div>
        <div class="customer__section2">
            <div class="row">
                <div class="col-12 col-sm-12 col-md-12 col-lg-7">
                    <img :src="test" class="customer__section1__image" style="max-width: 100%; min-width: 100%;">
                </div>
                <div class="col-12 col-sm-12 col-md-12 col-lg-5 align-self-center">
                    <div class="container mt-5 mb-5">
                        <div class="row customer__section2__row">
                            <div class="col-12">
                                <p class="customer__section2__title mb-5">
                                    Nova Capital
                                    <br>
                                    Humano
                                </p>

                                <p class="customer__section2__description">
                                    <br>
                                    Te asesoran integralmente en relación a tu recurso humano,

                                    con la finalidad de organizar, gestionar, atraer, monitorear y capitalizar

                                    el talento de tu empresa.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="customer__section1">
            <div class="row">
                <div class="col-12 col-sm-12 col-md-12 col-lg-5 align-self-center">
                    <div class="container">
                        <div class="row customer__section1__row">
                            <div class="col-12">
                                <p class="customer__section1__title mb-5">
                                    Tractobull
                                </p>

                                <p class="customer__section1__description">
                                    <br>
                                    Empresa mexicana dedicada a la fabricación

                                    y comercialización de partes y accesorios

                                    para tracto camión en territorio Nacional

                                    y extranjero con una experiencia de más de

                                    30 años en el ramo,siempre manteniendo el

                                    enfoque en cubrir las necesidades de nuestros

                                    clientes día con día a través de un servicio de excelencia.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-12 col-md-12 col-lg-7 ">
                    <img :src="test" class="customer__section1__image" style="max-width: 100%; min-width: 100%;">
                </div>
            </div>
        </div>

    </section>
</template>

<script>

import video1 from 'ASSETS/business-investigation/video/consultoria-en-guadalajara-1'
import image1 from 'ASSETS/customer/image/client/geg-logo'
import image2 from 'ASSETS/customer/image/client/nova-logo'
import image3 from 'ASSETS/customer/image/client/movalia-logo'
import image4 from 'ASSETS/customer/image/client/mariaelena-logo'
import image5 from 'ASSETS/customer/image/client/tdmex-logo'
import test from 'ASSETS/global/test'

import video_customer from '@/components/video/customer'



export default {
    name: 'customer',
    components: {
        'video-customer': video_customer
    },
    data() {
        return {
            video1,
            image1,
            image2,
            image3,
            image4,
            image5,
            test

        }
    }
}
</script>

<style lang="scss">



    body {
        background: #fff;;
    }


    .customer {

        &__section1 {


            &__row {
                padding-left: 100px;
                padding-right: 100px;
            }

            &__title {
                font-size: 60px;
            }

            &__description {
                font-size: 30px;
            }

            &__image {
                max-width: 100%;
            }
        }

        &__section2 {

            &__row {
                padding-left: 100px;
                padding-right: 100px;
            }

            &__title {
                font-size: 60px;
            }

            &__description {
                font-size: 30px;
            }

            &__image {
                max-width: 100%;
            }
        }
    }

    @media (min-width: 769px) AND (max-width: 992px) {
        .customer__section1__row {
            padding-left: 50px !important;
            padding-right: 50px !important;
        }

        .customer__section2__row {
            padding-left: 50px !important;
            padding-right: 50px !important;
        }

        #logoMarqueeSection {
            bottom: 150px !important;
        }

    }

    @media (min-width: 380px) AND (max-width: 768px) {
        .customer__section1__row {
            padding-left: 50px !important;
            padding-right: 50px !important;
        }

        .customer__section2__row {
            padding-left: 50px !important;
            padding-right: 50px !important;
        }

        #logoMarqueeSection {
            bottom: 150px !important;
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
