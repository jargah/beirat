<template>
    <section class="scalability">

        <div class="container-fluid scalability__section1">
            <div class="row">
                <div class="col-12">
                    <div class="row scalability__section1__row">
                        <div class="col-12 col-sm-12 col-md-12 col-lg-6 d-flex justify-content-end scalability__section1__row__computer d-flex justify-content-center">
                            <video loop muted autoplay class="business__section1__video" style="max-width: 100%;">
                                <source :src="video1" type="video/mp4" />
                            </video>
                        </div>
                        <div class="col-12 col-sm-12 col-md-12 col-lg-6 align-self-center ">
                            <p class="scalability__section1__title font-basic mb-4 d-flex justify-content-center">
                                {{ $t('scalability.title') }}
                            </p>
                            <p class="scalability__section1__description font-basic mt-5 d-flex justify-content-center">
                                {{ $t('scalability.description') }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="container-fluid scalability__section2">
            <div class="row">
                <div class="col-12">
                        <div class="row scalability__section2__row">
                            <div class="col-12 align-self-center scalability__section2__row__text">
                                <p class="scalability__section2__title font-basic">
                                    {{ $t('scalability.section1.title') }}
                                </p>
                            </div>
                        </div>
                        <div class="row scalability__section2__row2">
                            <div class="col-12 col-sm-12 col-md-12 col-lg-6 mb-5">
                                <p class="font-basic scalability__section2__description">
                                    {{ $t('scalability.section1.description') }}
                                </p>
                            </div>
                            <div class="col-12 col-sm-12 col-md-12 col-lg-6">
                                <video loop muted autoplay class="scalability__section2__video mt-5" style="max-width: 100%;">
                                    <source :src="video2" type="video/mp4" />
                                </video>
                            </div>
                        </div>
                </div>
            </div>
        </div>

        <div class="scalability__section3">

            <div class="row">
                <div class="col-12 col-12 col-sm-12 col-md-12 col-lg-6 mt-5 pt-5">
                    <div class="container">
                        <div class="row">
                            <div class="col-12  scalability__section3__row pb-5">
                                <p class="font-futura scalability__section3__row__title mb-5">
                                    {{ $t('scalability.section2.title') }}
                                </p>
                            </div>
                            <div class="col-12 scalability__section3__row">
                                <p class="font-futura  scalability__section3__row__description">
                                    {{ $t('scalability.section2.subtitle') }}
                                </p>
                            </div>
                            <div class="col-12 scalability__section3__row pt-5 pb-5">
                                <p class="font-futura mt-5 scalability__section3__row__ul">
                                    <ul>
                                        <li class="scalability__section3__row__ul__li pb-3">
                                            {{ $t('scalability.section2.item1') }}
                                        </li>
                                        <li class="scalability__section3__row__ul__li pb-3">
                                            {{ $t('scalability.section2.item2') }}
                                        </li>
                                        <li class="scalability__section3__row__ul__li pb-3">
                                            {{ $t('scalability.section2.item3') }}
                                        </li>
                                    </ul>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-12 col-md-12 col-lg-6">
                    <img :src="image1" class="scalability__section2__image" style="max-width: 100%;">
                </div>
            </div>

        </div>

        <div class="scalability__section4">
            <div class="row scalability__section4__row">
                <div class="col-12 align-self-center text-left">
                    <div class="container">
                        <div class="col-12">
                            <p class="font-futura mb-5 scalability__section4__title">
                                {{ $t('scalability.section4.title') }}
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-12 col-sm-12 col-md-12 col-lg-6 align-self-center text-left">

                    <p class="font-futura mt-5 scalability__section4__row__title">
                        {{ $t('scalability.section4.item1.title') }}
                    </p>

                    <p class="font-futura mt-5 scalability__section4__row__description">
                        {{ $t('scalability.section4.item2.description') }}

                    </p>

                </div>
                <div class="col-12 col-12 col-sm-12 col-md-12 col-lg-6 align-self-center">
                    <img :src="image3" class="scalability__section4__image" style="max-width: 100%;">
                </div>
            </div>
        </div>

        <div class="scalability__section5">
            <div class="row">
                <div class="col-12 col-12 col-sm-12 col-md-12 col-lg-6">
                    <img :src="image2" class="scalability__section5__image">
                </div>
                <div class="col-12 col-12 col-sm-12 col-md-12 col-lg-6 align-self-center">
                    <div class="container">
                        <div class="row scalability__section5__row">
                            <div class="col-12 mb-5">
                                <p class="font-futura mt-5 scalability__section5__row__title">
                                    ¿QUIERES REDUCIR GASTOS?
                                </p>

                                <p class="font-futura mt-5 scalability__section5__row__description">
                                    {{ $t('scalability.section4.item2.description') }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="scalability__section6">
            <div class="row">
                <div class="col-12 col-12 col-sm-12 col-md-12 col-lg-6 align-self-center">
                    <div class="container">
                        <div class="row scalability__section6__row">
                            <div class="col-12 mb-5">
                                <p class="font-futura mt-5 scalability__section6__row__title">
                                    {{ $t('scalability.section4.item3.title') }}
                                </p>

                                <p class="font-futura mt-5 scalability__section6__row__description">
                                    {{ $t('scalability.section4.item3.description') }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                 <div class="col-12 col-12 col-sm-12 col-md-12 col-lg-6 align-self-center">
                    <img :src="image4" class="scalability__section6__image">
                </div>
            </div>
        </div>

        <div class="scalability__section7">
            <div class="row">
                <div class="col-12 col-12 col-sm-12 col-md-12 col-lg-6 align-self-center">
                    <img :src="image5" class="scalability__section7__image">
                </div>
                <div class="col-12 col-12 col-sm-12 col-md-12 col-lg-6 align-self-center">
                    <div class="container">
                        <div class="row scalability__section7__row">
                            <div class="col-12 mb-5">
                                <p class="font-futura mt-5 scalability__section7__row__title">
                                    {{ $t('scalability.section4.item4.title') }}
                                </p>

                                <p class="font-futura mt-5 scalability__section7__row__description">
                                    {{ $t('scalability.section4.item4.description') }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="scalability__section8">
            <div class="row ">
                <div class="col-12 col-12 col-sm-12 col-md-12 col-lg-6 align-self-center">
                    <div class="container">
                        <div class="row scalability__section8__row">
                            <div class="col-12">
                                <p class="font-futura mt-5 scalability__section8__row__title">
                                    ¿QUIERES QUE TU PRODUCTIVIDAD

                                    CREZCA?
                                </p>

                                <p class="font-futura mt-5 scalability__section8__row__description">
                                    Encontrará los limitantes directos de ese bajo

                                    performance: falta de capacitación, condiciones

                                    de trabajo, desconocimiento de objetivos,

                                    desconocimiento de la capacidad de atención

                                    máxima, liderazgo, procesos mal planteados, etc.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-12 col-12 col-sm-12 col-md-12 col-lg-6 align-self-center">
                    <img :src="image6" class="scalability__section8__image">
                </div>
            </div>
        </div>
    </section>
</template>

<script>

import video1 from 'ASSETS/scalability/video/asesoria-de-negocios-2'
import video2 from 'ASSETS/scalability/video/asesoria-de-negocios-en-guadalajara-2'
import image1 from 'ASSETS/scalability/image/consultores_de_empresas'
import image2 from 'ASSETS/scalability/image/empresas_consultoras_gdl'
import image3 from 'ASSETS/scalability/image/empresas_de_consultoria_en_guadalajara'
import image4 from 'ASSETS/scalability/image/asesores_de_negocios'
import image5 from 'ASSETS/scalability/image/empresas_de_consultoria'
import image6 from 'ASSETS/scalability/image/consultores_de_empresa_en_guadalajara'

export default {
    name: 'scalability',
    data() {
        return {
            video1,
            video2,
            image1,
            image2,
            image3,
            image4,
            image5,
            image6
        }
    }
}
</script>

<style lang="scss">

    body {
        background: #fff;;
    }

    .scalability {

        &__section1 {

            background: #000;
            color: #fff;

            margin-bottom: 100px;

            &__title {
                font-size: 70px;

            }

            &__description {
                font-size: 26px;
            }

            &__row {
                position: relative;


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

            padding-left: 80px;
            padding-right: 80px;


            &__title {
                font-size: 40px;
            }

            &__description {
                font-size: 40px;
                top: 121px;
                position: relative;
                color: #717271;
            }

            &__row {
                position: relative;
            }

            &__row2 {
                position: relative;
            }

            &__image {
                width: 100%;
            }
        }

        &__section3 {

            background: #000;
            color: #fff;

            &__title {
                font-size: 30px;
            }

            &__description {
                font-size: 15px;
            }

            &__row {


                padding-left: 100px;

                &__title {
                    position: relative;
                    font-size: 25px;
                }

                &__description {
                    position: relative;
                    font-size: 18px;
                }

                &__ul {
                    position: relative;
                    font-size: 17px;

                    &__li {
                        //padding-bottom: 50px;
                    }

                }

            }

            &__image {
                width: 100%;
            }
        }

        &__section4 {

            &__title {
                padding-left: 50px;
                position: relative;
                top: 80px;
                padding-bottom: 80px;
                font-size: 50px;
            }

            &__description {
                font-size: 15px;
            }

            &__row {

                &__title {
                    margin-left: 100px;
                    font-size: 40px;
                }

                &__description {
                    margin-left: 101px;
                    font-size: 30px;
                }

            }

            &__image {
                width: 100%;
            }
        }

        &__section5 {


            &__title {
                padding-left: 50px;
                font-size: 60px;
            }

            &__description {
                font-size: 15px;
            }

            &__row {

                padding-left: 100px;
                padding-right: 100px;


                &__title {
                    font-size: 40px;
                }

                &__description {
                    font-size: 30px;
                }

            }

            &__image {
                width: 100%;
            }
        }

        &__section6 {

            background: #000;
            color: #fff;

            &__title {
                padding-left: 50px;
                font-size: 60px;
            }

            &__description {
                font-size: 15px;
            }

            &__row {

                padding-left: 100px;
                padding-right: 100px;

                &__title {
                    font-size: 40px;
                }

                &__description {
                    font-size: 30px;
                    top: 15px;
                }

            }

            &__image {
                width: 100%;
            }
        }

        &__section7 {

            &__title {
                padding-left: 50px;
                font-size: 60px;
            }

            &__description {
                font-size: 15px;
            }

            &__row {

                padding-left: 100px;
                padding-right: 100px;

                &__title {
                    font-size: 40px;
                    bottom: 15px;
                }

                &__description {
                    font-size: 30px;
                    top: 15px;
                }

            }

            &__image {
                width: 100%;
            }
        }

        &__section8 {

            background: #000;
            color: #fff;

            &__title {
                padding-left: 50px;
                font-size: 60px;
            }

            &__description {
                font-size: 15px;
            }

            &__row {

                padding-left: 100px;
                padding-right: 100px;

                &__title {
                    font-size: 40px;
                    bottom: 15px;
                }

                &__description {
                    font-size: 30px;
                }

            }

            &__image {
                width: 100%;
            }
        }
    }

    @media (min-width: 992px) {


        .scalability__section3__row {
            padding-left: 50px !important;
            padding-right: 50px !important;

            &__title {
                font-size: 40px !important;
            }

            &__description {
                font-size: 25px !important;
            }

            &__ul {

                font-size: 23px !important;

            }
        }




    }

    @media (min-width: 769px) AND (max-width: 991px) {
        .scalability__section1__title {
            padding-left: 30px;
            padding-right: 30px;
            padding-bottom: 20px;
        }

        .scalability__section1__description {
            padding-left: 30px;
            padding-right: 30px;
            padding-bottom: 20px;
        }

        .scalability__section3__row {
            padding-left: 50px !important;
            padding-right: 50px !important;
        }

        .scalability__section4__title {
            font-size: 30px !important;
        }

        .scalability__section5__row, .scalability__section6__row, .scalability__section7__row, .scalability__section8__row {
            padding-left: 50px !important;
            padding-right: 50px !important;
        }
    }

    @media (min-width: 320px) AND (max-width: 768px) {

        .scalability__section2__description {
            font-size: 40px;
            /* top: 121px; */
            font-size: 30px;
            position: relative;
            color: #717271;
        }

        .scalability__section2 {
            padding-left: 20px;
            padding-right: 20px;
        }

        .scalability__section1__title {
            padding-left: 30px;
            padding-right: 30px;
            padding-bottom: 20px;
            font-size: 40px !important;
        }

        .scalability__section1__description {
            padding-left: 30px;
            padding-right: 30px;
            padding-bottom: 20px;
            font-size: 20px !important;
        }

        .scalability__section3__row {
            padding-left: 50px !important;
            padding-right: 50px !important;
        }

        .scalability__section4__title {
            font-size: 30px !important;
        }

        .scalability__section4__row__title {

            margin-left: 50px;
            font-size: 30px;
        }

        .scalability__section4__row__description {
            margin-left: 50px;
            font-size: 20px;
        }

        .scalability__section5__row, .scalability__section6__row, .scalability__section7__row, .scalability__section8__row {
            padding-left: 50px !important;
            padding-right: 50px !important;
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
