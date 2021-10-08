<template>
    <section class="business">

        <video-investigation></video-investigation>

        <div class="container-fluid business__section1 ">
            <div class="container">
                <div class="row mb-5">
                    <div class="col-12 align-self-center">
                        <p class="font-futura business__section1__title">
                            {{ $t('business.section1.title') }}
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
                            {{ $t('business.section1.title2') }}
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
                                    {{ $t('business.section2.title') }}
                                </p>
                                <p class="business__section2__description font-basic">
                                    {{ $t('business.section2.description') }}
                                    <br>
                                    {{ $t('business.section2.question') }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row mb-1">
                <video loop muted autoplay class="business__section2__video" width="100%">
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
                                    {{ $t('business.section2.item1') }}
                                </p>
                            </div>
                            <div class="col-12 col-sm-12 col-md-12 col-lg-6">
                                <div>
                                    <img :src="animation2" class="mobile-investigation-image">
                                </div>
                                <p class="font-basic business__section2__row__item">
                                    {{ $t('business.section2.item2') }}
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
                                     {{ $t('business.section2.item3') }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div class="container">
               <div class="row">
                   <div class="col-12">
                       <router-link
                            :to="{ name: 'contact' }"
                            custom
                            v-slot="{ href, navigate }"
                        >
                            <a
                                :href="href"
                                @click="navigate">
                                <p class="business__section2__investigation font-futura text-center" style="color: #000; cursor: pointer;">
                                    {{ $t('business.section2.investigation') }} <img :src="arrow">
                                </p>
                            </a>
                        </router-link>


                        <p class="business__section2__title1 font-futura text-center">
                            {{ $t('business.section2.option') }}
                            <br>
                            {{ $t('business.section2.option2') }}
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

import video1 from 'ASSETS/business-investigation/video/consultoria-en-guadalajara'
import video2 from 'ASSETS/business-investigation/video/consultoria-gdl-2'
import video3 from 'ASSETS/business-investigation/video/empresas-de-consultoria-en-guadalajara-linea'
import animation1 from 'ASSETS/business-investigation/gif/consultores-de-empresa-en-guadalajara-3'
import animation2 from 'ASSETS/business-investigation/gif/consultores-de-empresas-2'
import animation3 from 'ASSETS/business-investigation/gif/consultores-de-negocios-en-guadalajara-1'
import arrow from 'ASSETS/business-investigation/image/arrow'
import video_investigation from '@/components/video/investigation'


export default {
    name: 'business-investigation',
    components: {
        'video-investigation':video_investigation
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
                    padding-bottom: 100px;
                }
            }

            &__video {
                max-width: 100%;
                min-width: 100%;
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
                max-width: 100%;
                min-width: 100%;
            }

            &__row {

                &__item {
                    font-size: 21px;
                    color: #000;
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
