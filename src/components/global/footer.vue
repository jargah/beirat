<template>
    <footer class="bg-dark">
        <div class="container-fluid footer">
            <div class="row">
                <div class="col-12 col-sm-12 col-md-12 col-lg-8">
                    <div class="row pt-2 pt-md-5">
                        <div class="col-12 pt-2 pt-sm-5">
                            <p class="footer__content-text__title mb-3 font-footer font-footer__title">
                                UNLOCK YOUR FULL POTENTIAL.
                            </p>
                        </div>
                        <div class="col-8">
                            <p class="footer__content-text__about font-footer font-footer__description">
                                {{ $t('global.description') }}
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-12 col-md-12 col-lg-4 social mt-5 text-right">
                    <div class="row">
                        <div class="col-12 d-flex justify-content-end mt-5">
                            <div class="footer__contact">
                                <router-link
                                    :to="{ name: 'contact' }"
                                    custom
                                    v-slot="{ navigate }"
                                >
                                    <b-button size="lg" variant="outline-dark footer__contact__btn font-footer__button" @click="navigate">
                                        {{ $t('global.contact') }}
                                    </b-button>
                                </router-link>
                                <div class="mt-5">
                                     <p style="cursor: pointer; color: #fff;" @click="redirect('term')">
                                     <router-link
                                            :to="{ name: 'terms' }"
                                            custom
                                            v-slot="{ navigate }"
                                        >
                                            <a href="#" @click="navigate" class="footer_link">
                                                {{ $t('global.terms') }}
                                            </a>
                                    </router-link>
                                    </p>
                                    <p style="cursor: pointer; color: #fff;" @click="redirect('notice')">
                                        <router-link
                                            :to="{ name: 'notice' }"
                                            custom
                                            v-slot="{ navigate }"
                                            >
                                            <a href="#" @click="navigate" class="footer_link">
                                                {{ $t('global.notice') }}
                                            </a>
                                        </router-link>
                                    </p>
                                    <p style="cursor: pointer; color: #fff;" @click="redirect('policity')">
                                        <router-link
                                            :to="{ name: 'policity' }"
                                            custom
                                            v-slot="{ navigate }"
                                            >
                                            <a href="#" @click="navigate" class="footer_link">
                                                {{ $t('global.politics') }}
                                            </a>
                                        </router-link>
                                    </p>
                                </div>
                            </div>

                        </div>
                        <br>
                        <div class="col-12 mt-5 mb-5 text-right">

                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12 col-sm-12 col-md-12 col-lg-6 option_bottom_1_movil ">
                    <div class="row">
                        <div class="col-12 text-center">
                            <div class="row footer__contact">
                                <div class="col-12">
                                     <p style="cursor: pointer; color: #fff;" @click="redirect('term')">
                                        Términos y condiciones
                                    </p>
                                    <p style="cursor: pointer; color: #fff;" @click="redirect('notice')">
                                        Aviso de privacidad
                                    </p>
                                    <p style="cursor: pointer; color: #fff;" @click="redirect('policity')">
                                        Politicas
                                    </p>
                                </div>
                                <div class="col-12">
                                    <router-link
                                        :to="{ name: 'contact' }"
                                        custom
                                        v-slot="{ navigate }"
                                    >
                                        <b-button size="lg" variant="outline-dark footer__contact__btn font-footer__button" @click="navigate">
                                            Contacto
                                        </b-button>
                                    </router-link>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12 mt-1 d-flex justify-content-center">
                            <div class="footer__social">
                                <a href="https://instagram.com/beirat.mx?utm_medium=copy_link" target="_blank">
                                    <img :src="instagram" alt="instragram" class="p-2">
                                </a>
                                <img :src="twitter" alt="twitter" class="p-2">
                                <a href="https://www.linkedin.com/in/beirat-mx-b10355214/" target="_blank">
                                    <img :src="linkedin" alt="linkedin" class="p-2">
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-12 col-md-12 col-lg-6 option_bottom_1_movil">
                    <div class="row ">
                        <div class="col-12">
                            <p class="footer__content-text__copyright font-footer__copy">
                                Todos los derechos reservados Beirat Consulting 2021
                                <br>
                                <!-- <video loop muted autoplay style="max-width: 50% !important;">
                                    <source :src="bb" type="video/mp4" />
                                </video> -->
                                <img :src="bb" style="max-width: 100%; min-width: 100%;">
                            </p>
                        </div>
                    </div>
                </div>

                <div class="col-12 col-sm-12 col-md-12 col-lg-6 option_bottom_1">
                    <div class="row mt-1">
                        <div class="col-12">
                            <p class="footer__content-text__copyright font-footer__copy">
                                Todos los derechos reservados Beirat Consulting 2021
                                <br>
                                <!-- <video loop muted autoplay style="max-width: 50% !important;">
                                    <source :src="bb" type="video/mp4" />
                                </video> -->
                                <img :src="bb" style="max-width: 35%; min-width: 35%;">
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-12 col-md-12 col-lg-6 option_bottom_1">
                    <div class="row mt-1">
                        <div class="col-12 mt-3 d-flex flex-row-reverse">
                            <div class="footer__social">
                                <a href="https://instagram.com/beirat.mx?utm_medium=copy_link" target="_blank">
                                    <img :src="instagram" alt="instragram" class="p-2">
                                </a>
                                <a href="https://twitter.com/BeiratM?s=09" target="_blank">
                                    <img :src="twitter" alt="twitter" class="p-2">
                                </a>
                                <a href="https://www.linkedin.com/in/beirat-mx-b10355214/" target="_blank">
                                    <img :src="linkedin" alt="linkedin" class="p-2">
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>


<script>

import blueberry from 'ASSETS/global/blueberry'
import instagram from 'ASSETS/global/instagram'
import twitter from 'ASSETS/global/twitter'
import linkedin from 'ASSETS/global/linkedin'
import bb from 'ASSETS/global/blueberry-codigo-sin-fondo-blanco'

export default {
    name: 'footer-global',
    data() {
        return {
            blueberry,
            instagram,
            twitter,
            linkedin,
            bb
        }
    }
}
</script>

<style lang="scss">
    
    .footer_link{
        color: #ffffff;
        text-decoration: inherit;
    }
    .footer_link:hover{
        color: #ffffff;
        text-decoration: inherit;
    }
    .show_social {
        display: none !important;
    }

    .social {
        display: block;
    }

    @media (min-width: 768px) AND (max-width: 992px) {

        .font-footer__title {
            text-align: center !important;
        }

        .option_bottom_1 {
            display: none;
        }

        .option_bottom_1_movil {
            text-align: center !important;
            margin-top: 0rem !important;
            display: block;
        }

        .footer__contact {
            //margin-top: 7rem;
            position: relative !important;
        }

        .footer {
            //height: 600px !important;

            &__content-text {

                &__title {
                    font-size: 40px !important;
                }
            }
        }

        .font-footer {
            &__title {
                //margin-top: 4rem !important;
                font-size: 35px !important;
            }


            &__description {
                display: none;
            }
        }

        .social {
            display: none;
        }

        .show_social {
            display: block !important;
        }
    }

    @media (min-width: 1157px) {
        .option_bottom_1 {
            margin-top: 5rem !important;
            display: block;
        }

        .option_bottom_1_movil {
            display: none;
        }
    }

    @media (min-width: 993px) AND (max-width: 1156px) {
        .option_bottom_1 {
            margin-top: 1rem !important;
            display: block;
        }

        .option_bottom_1_movil {
            display: none;
        }
    }

    @media (min-width: 320px) and (max-width: 480px) {

        .footer__content-text__copyright {
            font-size: 17px;
            // position: relative;
            color: #717271;
            top: 83px;
        }

        .font-footer__title {
            text-align: center !important;
        }

        .option_bottom_1 {
            display: none;
        }

        .option_bottom_1_movil {
            text-align: center !important;
            margin-top: 0rem !important;
            display: block;
        }

        .footer__contact {
            position: inherit !important;
            margin-top: 2em;
            bottom: 32px;
        }

        .footer {
            //height: 550px !important;

            &__content-text {

                &__title {
                    font-size: 25px !important;
                }
            }
        }

        .font-footer {
            &__title {
                //margin-top: 4rem !important;
                font-size: 25px;
            }

            &__description {
                display: none;
            }
        }

        .social {
            display: none ;
        }

        .show_social {
            display: block !important;
        }
    }

    @media (min-width: 480px) AND (max-width: 767px) {

        .font-footer__title {
            text-align: center !important;
        }

        .option_bottom_1 {
            display: none;
        }

        .option_bottom_1_movil {
            text-align: center !important;
            margin-top: 0rem !important;
            display: block;
        }

        .footer__contact {
            position: relative !important;
        }

        .footer {
            //height: 550px !important;

            &__content-text {

                &__title {
                    font-size: 35px !important;
                }
            }
        }

        .font-footer {
            &__title {
                //margin-top: 4rem !important;
                font-size: 25px;
            }

            &__description {
                display: none;
            }
        }

        .social {
            display: none ;
        }

        .show_social {
            display: block !important;
        }
    }

    .font-footer {
        &__title {
            font-size: 47px;
        }

        &__description, &__copy, &__button {
            font-family: 'BasicCommercial LT Com Roman' !important;
        }
    }

    body {
        background: #000000;
    }

    .footer {

        padding-left: 100px !important;
        padding-right: 100px !important;
        padding: 3px;
        position: relative;
        bottom: 0;
        background: black;

        //height: 500px;


        &__contact {
            //margin-top: 6rem;
            position: absolute;

            &__btn {
                padding: 0.375rem 3.75rem !important;
                color: #fff !important;
                border: 1px solid #fff !important;
                font-size: 40px;
            }
        }

        &__social {
            //position: absolute;

        }


        &__content-text {
            max-width: 745px;
            position: absolute;
            left: 144px;
            top: 100px;

            &__title {
                //margin-top: 6rem;
                color: #fff;
            }

            &__about {
                font-size: 17px;
                color: #fff;
            }

            &__copyright {
                font-size: 17px;
                color: #717271;
            }

             &__blueberry {
                max-width: 215px;
            }
        }


        // width: 100%;
        // position: absolute;
        // bottom: 0;
        // height: 422px;
        // background: #000000;

        // position: absolute;
        // bottom: 0;
        // width: 100%;
        // height: 422px;
        // background-color: #000000;

        // &__contact {
        //     position: absolute;
        //     top: 100px;
        //     right: 122px;

        //     &__btn {
        //         padding: 0.375rem 3.75rem !important;
        //         color: #fff !important;
        //         border: 1px solid #fff !important;
        //     }
        // }

        // &__social {
        //     position: absolute;
        //     top: 300px;
        //     right: 45px;

        // }


        // &__content-text {
        //     max-width: 645px;
        //     position: absolute;
        //     left: 144px;
        //     top: 100px;

        //     &__title {
        //         font-size: 37px;
        //         color: #fff;
        //     }

        //     &__about {
        //         font-size: 17px;
        //         color: #fff;
        //     }

        //     &__copyright {
        //         font-size: 17px;
        //         color: #717271;
        //     }

        //      &__blueberry {
        //         max-width: 215px;
        //     }
        // }

    }

</style>
