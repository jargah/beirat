<template>
    <section class="customer">

        <video-customer class="pb-5 pb-md-0"></video-customer>

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
                                    {{ $t('clients.item_1') }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-12 col-md-12 col-lg-7">
                    <!-- <img :src="test" class="customer__section1__image" style="max-width: 100%; min-width: 100%;"> -->
                    <tdmex />
                </div>
            </div>
        </div>
        <div class="customer__section2">
            <div class="row">
                <div class="col-12 col-sm-12 col-md-12 col-lg-7 order-1 order-lg-0">
                    <!-- <img :src="test" class="customer__section1__image" style="max-width: 100%; min-width: 100%;"> -->
                    <integra />
                </div>
                <div class="col-12 col-sm-12 col-md-12 col-lg-5 order-0 order-lg-1 mt-5 mt-lg-0 align-self-center">
                    <div class="container">
                        <div class="row customer__section2__row ">
                            <div class="col-12">
                                <p class="customer__section2__title mb-5">
                                    INTEGRA
                                </p>

                                <p class="customer__section2__description">
                                    <br>
                                   {{ $t('clients.item_2') }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="customer__section1">
            <div class="row">
                <div class="col-12 col-sm-12 col-md-12 col-lg-5 mt-5 mt-lg-0 align-self-center">
                    <div class="container">
                        <div class="row customer__section1__row">
                            <p class="customer__section1__title mb-5">
                                María Elena
                                <br>
                                Mendoza
                            </p>

                            <p class="customer__section1__description">
                                <br>
                                {{ $t('clients.item_3') }}
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-12 col-md-12 col-lg-7">
                    <!-- <img :src="test" class="customer__section1__image" style="max-width: 100%; min-width: 100%;"> -->
                    <maria />
                </div>
            </div>
        </div>
        <div class="customer__section2">
            <div class="row">
                <div class="col-12 col-sm-12 col-md-12 col-lg-7 order-1 order-lg-0">
                    <nova />
                </div>
                <div class="col-12 col-sm-12 col-md-12 col-lg-5 order-0 order-lg-1 align-self-center">
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
                                   {{ $t('clients.item_4') }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="customer__section1">
            <div class="row">
                <div class="col-12 col-sm-12 col-md-12 col-lg-5 mt-5 mt-lg-0 align-self-center">
                    <div class="container">
                        <div class="row customer__section1__row">
                            <div class="col-12">
                                <p class="customer__section1__title mb-5">
                                    Tractobull
                                </p>

                                <p class="customer__section1__description">
                                    <br>
                                    {{ $t('clients.item_5') }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-12 col-md-12 col-lg-7 ">
                    <!-- <img :src="test" class="customer__section1__image" style="max-width: 100%; min-width: 100%;"> -->
                    <tracto />
                </div>
            </div>
        </div>
        <div class="customer__section2">
            <div class="row">
                <div class="col-12 col-sm-12 col-md-12 col-lg-7 order-1 order-lg-0">
                    <movalia />
                </div>
                <div class="col-12 col-sm-12 col-md-12 col-lg-5 order-0 order-lg-1 align-self-center">
                    <div class="container mt-5 mb-5">
                        <div class="row customer__section2__row">
                            <div class="col-12">
                                <p class="customer__section2__title mb-5">
                                    MOVALIA
                                </p>

                                <p class="customer__section2__description">
                                    <br>
                                   {{ $t('clients.item_7') }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
</template>

<script>

import video1 from 'ASSETS/business-investigation/video/consultoria-en-guadalajara-1'
import tdmex  from 'COMPONENTS/video/tdmex'
import integra  from 'COMPONENTS/video/integra'
import nova  from 'COMPONENTS/video/nova'
import tracto  from 'COMPONENTS/video/tracto'
import maria  from 'COMPONENTS/video/maria'
import movalia  from 'COMPONENTS/video/movalia'

import image1 from 'ASSETS/customer/image/client/geg-logo'
import image2 from 'ASSETS/customer/image/client/nova-logo'
import image3 from 'ASSETS/customer/image/client/movalia-logo'
import image4 from 'ASSETS/customer/image/client/mariaelena-logo'
import image5 from 'ASSETS/customer/image/client/tdmex-logo'
import image6 from 'ASSETS/customer/image/client/tractobull-logo'
import test from 'ASSETS/global/test'

import video_customer from '@/components/video/customer'


export default {
    name: 'customer',
    components: {
        'video-customer': video_customer,
        'tdmex': tdmex,
        'nova': nova,
        'integra': integra,
        'tracto': tracto,
        'maria': maria,
        'movalia': movalia
    },
    data() {
        return {
            video1,
            image1,
            image2,
            image3,
            image4,
            image5,
            image6,
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
                padding-left: 50px;
                padding-right: 50px;
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
                padding-left: 50px;
                padding-right: 50px;
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

    @media (min-width: 768px) and (max-width: 1024px) {

        .customer__section2__title, .customer__section1__title {
            font-size: 30px;
            margin-top: 20px;
        }

        .customer__section2__description, .customer__section1__description {
            font-size: 20px;
        }

    }

    @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {

         .customer__section2__title, .customer__section1__title {
            font-size: 30px;
            margin-top: 20px;
        }

        .customer__section2__description, .customer__section1__description {
            font-size: 20px;
        }

        .customer__section1__row {
            padding-left: 50px !important;
            padding-right: 50px !important;
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

    @media (min-width: 481px) AND (max-width: 768px) {
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


    @media (min-width: 320px) AND (max-width: 480px) {

        .customer__section2__title, .customer__section1__title {
            font-size: 30px;
            margin-top: 20px;
        }

        .customer__section2__description, .customer__section1__description {
            font-size: 20px;
        }

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
