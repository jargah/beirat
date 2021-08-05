<template>
    <section class="customer">

        <div id="player-overlay" :style="{ 'padding-bottom': `6.2%` }">
            <video loop muted autoplay class="videofull">
                <source :src="video1" type="video/mp4" />
            </video>

            <div class="customer__title">
                <p>
                    COMPANIES THAT USE OUR
                    <br>
                    TECHNOLOGY TO
                    <br>
                    TRANSFORM
                </p>
            </div>

            <div class="container" id="logoMarqueeSection">
                <div class="default-content-container flex items-center">
                    <div class="default-content-container-inner marquee-wrapper relative overflow-hidden inline-block">
                        <div class="marquee" style="animation-duration: 57s;">
                            <a target="_blank"><img :src="image1" title="" class="marqueelogo" style="width: auto; max-width: none;" /></a>
                            <a target="_blank"><img :src="image2" title="" class="marqueelogo" style="width: auto; max-width: none;" /></a>
                            <a target="_blank"><img :src="image3" title="" class="marqueelogo" style="width: auto; max-width: none;" /></a>
                            <a target="_blank"><img :src="image4" title="" class="marqueelogo" style="width: auto; max-width: none;" /></a>
                            <a target="_blank"><img :src="image5" title="" class="marqueelogo" style="width: auto; max-width: none;" /></a>

                        </div>
                        <div class="marquee" style="animation-duration: 57s;">
                            <a target="_blank"><img :src="image1" title="" class="marqueelogo" style="width: auto; max-width: none;" /></a>
                            <a target="_blank"><img :src="image2" title="" class="marqueelogo" style="width: auto; max-width: none;" /></a>
                            <a target="_blank"><img :src="image3" title="" class="marqueelogo" style="width: auto; max-width: none;" /></a>
                            <a target="_blank"><img :src="image4" title="" class="marqueelogo" style="width: auto; max-width: none;" /></a>
                            <a target="_blank"><img :src="image5" title="" class="marqueelogo" style="width: auto; max-width: none;" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="customer__section1">
            <div class="row">
                <div class="col-5 align-self-center">
                    <p class="customer__section1__title mb-5">
                        TDMEX
                    </p>

                    <p class="customer__section1__description">
                        Empresa comprometida con sus clientes y con el objetivo principal
                        <br>
                        de prestarles el mejor servicio de carga terrestre.
                        <br>
                        Asegurándose en todo momento de cumplir con los tiempos establecidos
                        <br>
                        y con la honestidad que nos caracteriza.
                    </p>
                </div>
                <div class="col-7 ">
                    <img :src="test" class="customer__section1__image">
                </div>
            </div>
        </div>
        <div class="customer__section2">
            <div class="row">
                <div class="col-7 ">
                    <img :src="test" class="customer__section1__image">
                </div>
                <div class="col-5 align-self-center">
                    <p class="customer__section2__title">
                        GREAT  EXPERIENCE
                        <br>
                        GUARANTEED
                    </p>

                    <p class="customer__section2__description">
                        Es un proyecto cuyo objetivo es el crear un certificado que avale
                        <br>
                        a los diferentes proveedores de servicios de hospitalidad, utilizando
                        <br>
                        una metodología basada en los estándares y criterios ya establecidos
                        <br>
                        por otras empresas como es el ISO 9001, pero enfocada al área hospitalaria.
                    </p>
                </div>
            </div>
        </div>
        <div class="customer__section1">
            <div class="row">
                <div class="col-5 align-self-center">
                    <p class="customer__section1__title">
                        María Elena
                        <br>
                        Mendoza
                    </p>

                    <p class="customer__section1__description">
                        “45 AÑOS DE EXPERIENCIA EN EL SEGMENTO DE LA HOSPITALIDAD”
                        <br>
                        <br>
                        45 Años de Experiencia en el segmento de la hospitalidad,
                        <br>
                        Iniciando en 1975 con la participación desde el arranque
                        <br>
                        del proyecto Paraíso Mazatlán en Sinaloa, desempeñándose
                        <br>
                        en los departamentos de Ama de Llaves, Atención al Huésped
                        <br>
                        y Supervisión de Mantenimiento.
                    </p>
                </div>
                <div class="col-7 ">
                    <img :src="test" class="customer__section1__image">
                </div>
            </div>
        </div>
        <div class="customer__section2">
            <div class="row">
                <div class="col-7 ">
                    <img :src="test" class="customer__section1__image">
                </div>
                <div class="col-5 align-self-center">
                    <p class="customer__section2__title">
                        Nova Capital
                        <br>
                        Humano
                    </p>

                    <p class="customer__section2__description">
                        Te asesoran integralmente en relación a tu recurso humano,
                        <br>
                        con la finalidad de organizar, gestionar, atraer, monitorear y capitalizar
                        <br>
                        el talento de tu empresa.
                    </p>
                </div>
            </div>
        </div>
        <div class="customer__section1">
            <div class="row">
                <div class="col-5 align-self-center">
                    <p class="customer__section1__title">
                        Tractobull
                    </p>

                    <p class="customer__section1__description">
                        Empresa mexicana dedicada a la fabricación
                        <br>
                        y comercialización de partes y accesorios
                        <br>
                        para tracto camión en territorio Nacional
                        <br>
                        y extranjero con una experiencia de más de
                        <br>
                        30 años en el ramo,siempre manteniendo el
                        <br>
                        enfoque en cubrir las necesidades de nuestros
                        <br>
                        clientes día con día a través de un servicio de excelencia.
                    </p>
                </div>
                <div class="col-7 ">
                    <img :src="test" class="customer__section1__image">
                </div>
            </div>
        </div>

    </section>
</template>

<script>

import video1 from 'ASSETS/business-investigation/video/consultoria-en-guadalajara-1'
import image1 from 'ASSETS/customer/image/client/GEG'
import image2 from 'ASSETS/customer/image/client/nova'
import image3 from 'ASSETS/customer/image/client/Movalia'
import image4 from 'ASSETS/customer/image/client/MariaElenamendoza'
import image5 from 'ASSETS/customer/image/client/tdmex'
import test from 'ASSETS/global/test'


export default {
    name: 'scalability',
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

    body {
        background: #fff;;
    }

    .logoMarqueeSection {
        padding-top: 50vh;
        padding-bottom: 150vh;
    }

    #logoMarqueeSection {
        max-width: 1920px!important;
        margin: 0 auto;
        position: absolute;
        top: 700px;
    }

    .default-content-container {
        margin-left: auto;
        margin-right: auto;
        margin-top: 0;
        margin-bottom: 0;
        padding-top: 4.5rem;
        padding-bottom: 4.5rem;
        width: 100%;
    }

    div.marquee>a>img {
        height: 60px;
    }

    .logoMarqueeSection>div>div {
        padding-top: 0;
        padding-bottom: 0;
        min-height: 0;
    }

    .marquee-wrapper {
        display:  inline-block;
        white-space: nowrap;
        max-width: 1580px;
    }

    .marquee {
        display:  inline-block;
        white-space: nowrap;
        position: relative;
        transform: translate3d(0%, 0, 0);
        animation-name: marquee;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
    }

    .marquee a {
        display:  inline-block;
        white-space: nowrap;
        padding-right: 5.4rem;
    }

    .marquee-wrapper:hover .marquee {
        animation-play-state: paused !important;
    }

    @keyframes marquee {
        0% {
            transform: translate3d(0%, 0, 0);
        }

        100% {
            transform: translate3d(-100%, 0, 0);
        }
    }

    .customer {

        &__section1 {
            &__title {
                position: relative;
                font-size: 40px;
                bottom: 30px;
                margin-left: 100px;
            }

            &__description {
                position: relative;
                font-size: 15px;
                top: 20px;
                margin-left: 100px;
            }

            &__image {
                max-width: 100%;
            }
        }

        &__section2 {
            &__title {
                position: relative;
                font-size: 40px;
                bottom: 30px;
                margin-left: 100px;
            }

            &__description {
                position: relative;
                font-size: 15px;
                top: 20px;
                margin-left: 100px;
            }

            &__image {
                max-width: 100%;
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
