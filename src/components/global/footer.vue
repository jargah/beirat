<template>
    <footer class="bg-dark">
        <div class="container-fluid footer">
            <div class="row mt-3">
                <div class="col-12 col-sm-12 col-md-12 col-lg-8">
                    <div class="row mt-5">
                        <div class="col-12">
                            <p class="footer__content-text__title mb-3 font-footer font-footer__title">
                                UNLOCK YOUR FULL POTENTIAL.
                            </p>
                        </div>
                        <div class="col-12">
                            <p class="footer__content-text__about font-footer font-footer__description">
                                Somos una firma consultora con más de 15 años de experiencia en la transformación de compañías y organizaciones a nivel nacional e internacional, incorporando tecnología y procesos científicamente fundados que promuevan su desarrollo y crecimiento.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-12 col-md-12 col-lg-4 social">
                    <div class="row">
                        <div class="col-12 mt-5 mb-5 d-flex flex-row-reverse">
                            <div class="footer__contact">
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
            </div>
            <div class="row mt-5">
                <div class="col-12 col-sm-12 col-md-12 col-lg-6 option_bottom_1_movil ">
                    <div class="row">
                        <div class="col-12 text-center">
                            <div class="footer__contact">
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
                    <div class="row mt-1">
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
                    <div class="row mt-1">
                        <div class="col-12">
                            <p class="footer__content-text__copyright font-footer__copy">
                                Todos los derechos reservados Beirat Consulting 2021
                                <br>
                                <video loop muted autoplay style="max-width: 50% !important;">
                                    <source :src="bb" type="video/mp4" />
                                </video>
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
                                <video loop muted autoplay style="max-width: 50% !important;">
                                    <source :src="bb" type="video/mp4" />
                                </video>
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
                                <a href="https://www.linkedin.com/in/beirat-mx-b10355214/" target="_blank">
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
import bb from 'ASSETS/global/Blueberry-Materialized'

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

    .show_social {
        display: none !important;
    }

    .social {
        display: block;
    }

    @media (min-width: 769px) AND (max-width: 992px) {

        .font-footer__title {
            text-align: center !important;
        }

        .option_bottom_1 {
            display: none;
        }

        .option_bottom_1_movil {
            text-align: center !important;
            margin-top: 3rem !important;
            display: block;
        }

        .footer__contact {
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
                margin-top: 4rem !important;
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

    @media (min-width: 380px) AND (max-width: 768px) {

        .font-footer__title {
            text-align: center !important;
        }

        .option_bottom_1 {
            display: none;
        }

        .option_bottom_1_movil {
            text-align: center !important;
            margin-top: 3rem !important;
            display: block;
        }

        .footer__contact {
            position: relative !important;
        }

        .footer {
            height: 550px !important;

            &__content-text {

                &__title {
                    font-size: 35px !important;
                }
            }
        }

        .font-footer {
            &__title {
                margin-top: 4rem !important;
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
        height: 500px;


        &__contact {
            position: absolute;

            &__btn {
                padding: 0.375rem 3.75rem !important;
                color: #fff !important;
                border: 1px solid #fff !important;
                font-size: 40px;
            }
        }

        &__social {
            position: absolute;

        }


        &__content-text {
            max-width: 745px;
            position: absolute;
            left: 144px;
            top: 100px;

            &__title {
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
