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
                        {{ $t('digital_operation.title_1') }}
                    </p>
                    <p class="digital__section1__description font-basic">
                         {{ $t('digital_operation.description_1') }}
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
                                  {{ $t('digital_operation.title_2') }}
                                </p>
                                <p class="digital__section2__description font-basic">
                                   {{ $t('digital_operation.description_2') }}
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
                                   {{ $t('digital_operation.title_3') }}
                                </p>
                                <p class="font-futura mt-5 digital__section3__row__description">
                                    {{ $t('digital_operation.description_3') }}
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
                                {{ $t('digital_operation.description_4') }}
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
                                 {{ $t('digital_operation.description_5') }}
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
                                     {{ $t('digital_operation.description_6') }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row digital__section6__row mt-5 mb-5">
                <div class="col-12 text-center">
                    <p class="digital__section6__subtitle font-basic">
                         {{ $t('digital_operation.description_7') }}
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

                padding-left: 50px;
                padding-right: 50px;

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

                padding-left: 50px;
                padding-right: 50px;

                &__title {
                    font-size: 60px;
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


    @media (min-width: 768px) AND (max-width: 992px) {
        .digital__section1__row, .digital__section2__row, .digital__section3__row, .digital__section4__row, .digital__section6__row {
            padding-left: 50px;
            padding-right: 50px;
        }

        .digital__section2__title {
            font-size: 22px;
        }

        .digital__section3__row__title {
            font-size: 40px;
        }

        .digital__section3__row__description {
            font-size: 30px;
        }

        .digital__section4__title {
            font-size: 30px;
        }

        .digital__section6__subtitle {
            font-size: 30px;
        }
    }

    @media (min-width: 320px) AND (max-width: 480px) {

        .digital__section1__title {
            font-size: 30px !important;
        }

        .digital__section1__description {
            font-size: 20px;
        }


        .digital__section5__title {
            font-size: 25px;
        }

        .digital__section6__description {
            font-size: 30px;
        }

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

    @media (min-width: 481px) AND (max-width: 767px) {
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
