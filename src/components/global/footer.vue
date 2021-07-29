<template>
    <footer class="footer">
        <div class="row">
            <div class="col-8">
                <div class="footer__content-text">
                    <p class="footer__content-text__title mb-3 font-futura font-futura__title">
                        UNLOCK YOUR FULL POTENTIAL.
                    </p>
                    <template v-if="$route.name == 'home'">
                        <p class="footer__content-text__about mt-1 font-futura">
                            Somos una firma consultora con más de 15 años de experiencia en la transformación de compañías y organizaciones a nivel nacional e internacional, incorporando tecnología y procesos científicamente fundados que promuevan su desarrollo y crecimiento.
                        </p>
                        <p class="footer__content-text__copyright mt-4 font-futura">
                            Todos los derechos reservados Beirat Consulting 2021
                        </p>
                    </template>
                    <p class="mt-4" :style="{  'padding-top': $route.name !== 'home' ? `130px`: `0` }">
                        <img :src="blueberry" alt="materialized_bluberry" class="footer__content-text__blueberry">
                    </p>
                </div>
            </div>
            <div class="col-4">
                <div class="footer__contact">
                    <b-button variant="outline-dark footer__contact__btn font-futura">
                        Contacto
                    </b-button>
                </div>

                <div class="footer__social">
                    <img :src="instagram" alt="instragram" class="p-2">
                    <img :src="twitter" alt="twitter" class="p-2">
                    <img :src="linkedin" alt="linkedin" class="p-2">
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

export default {
    name: 'footer-global',
    data() {
        return {
            blueberry,
            instagram,
            twitter,
            linkedin
        }
    }
}
</script>

<style lang="scss">

    .font-futura {
        &__title {
            font-size: 47px;
        }
    }

    .footer {

        position: relative;
        bottom: 0;
        background: black;
        height: 422px;
        background: #000000;

        &__contact {
            position: absolute;
            top: 100px;
            right: 122px;

            &__btn {
                padding: 0.375rem 3.75rem !important;
                color: #fff !important;
                border: 1px solid #fff !important;
            }
        }

        &__social {
            position: absolute;
            top: 300px;
            right: 45px;

        }


        &__content-text {
            max-width: 645px;
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
