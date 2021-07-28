<template>
    <header>
        <!-- <div class="header">
            <div class="d-flex justify-content-start header__logo">
                <img :src="logo" class="header__logo__item" alt="logo">
            </div>
            <div class="d-flex justify-content-end">
                <div class="header__nav__language align-self-center">
                    <span>
                        Español
                    </span>
                </div>
                <div class="header__nav__menu align-self-center">
                    <img :src="points" class="header__nav__menu--image mr-2" @click="openMenu"> <span> Menu </span>
                </div>
            </div>
        </div> -->

        <div class="header">
            <div class="d-flex justify-content-start header__logo">
                <img :src="logo" class="header__logo__item" alt="logo">
            </div>
            <div class="d-flex justify-content-end">
                <div class="header__nav__language align-self-center">
                    <span>
                        Español
                    </span>
                </div>
                <div class="header__nav__menu align-self-center">
                    <!-- <img :src="points" class="header__nav__menu--image mr-2" @click="openMenu"> <span> Menu </span> -->
                    <div class="d-flex flex-row">
                        <a class="nav-button ml-auto mr-4" @click="openMenu"><span id="nav-icon3"><span></span><span></span><span></span><span></span></span></a>
                        <span class="header__nav__label align-self-center">Menu</span>
                    </div>
                </div>
            </div>
        </div> <!--navbar end-->

        <div class="fixed-top main-menu">
            <div class="row">
                <div class="col-6 ">
                    <div class="flex-center p-5 mt-4">
                        <ul class="nav flex-column">
                            <li class="nav-item delay-1">
                                <a class="nav-link main-menu__active" href="#">
                                    Home
                                </a>
                            </li>
                            <li class="nav-item delay-2">
                                <a class="nav-link" href="#">
                                    We Are
                                </a>
                            </li>
                            <li class="nav-item delay-3">
                                <a class="nav-link" href="#">
                                    Business Investigation
                                </a>
                            </li>
                            <li class="nav-item delay-4">
                                <a class="nav-link" href="#">
                                    Business Scalability
                                </a>
                            </li>
                            <li class="nav-item delay-5">
                                <a class="nav-link" href="#">
                                    Digital Operation
                                </a>
                            </li>
                            <li class="nav-item delay-6">
                                <a class="nav-link" href="#">
                                    Clients
                                </a>
                            </li>
                            <li class="nav-item delay-7">
                                <a class="nav-link" href="#">
                                    Academy
                                </a>
                            </li>
                            <li class="nav-item delay-8">
                                <a class="nav-link" href="#">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-6">
                    <div class="flex-center p-5 mt-5">
                        <div class="flex-column">
                            <p>
                                <img :src="asterisk" alt="beirat" class="menu-info__asterisk">
                            </p>
                            <p class="menu-info">
                                WhatsApp
                            </p>
                            <p class="menu-info">
                                hello@beirat.mx
                            </p>
                            <p class="menu-info">
                                Rubén Darío 586, Prados Providencia
                                <br>
                                C.P.  44670, Guadalajara, Jalisco.
                            </p>
                            <p class="menu-info">
                                Términos y condiciones
                                <br>
                                Aviso de privacidad
                                <br>
                                Politicas
                            </p>
                            <p>
                                <img :src="instagram" alt="instragram" class="p-2">
                                <img :src="twitter" alt="twitter" class="p-2">
                                <img :src="linkedin" alt="linkedin" class="p-2">
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div> <!--main-menu end-->
    </header>
</template>

<script>

import logo from 'ASSETS/global/logo'
import points from 'ASSETS/global/points'
import instagram from 'ASSETS/global/instagram'
import twitter from 'ASSETS/global/twitter'
import linkedin from 'ASSETS/global/linkedin'
import asterisk from 'ASSETS/global/asterisk'

export default {
    name: 'global-header',
    data() {
        return {
            logo,
            points,
            instagram,
            twitter,
            linkedin,
            asterisk
        }
    },
    methods: {
        openMenu() {
            $('body').toggleClass('nav-open')
        }
    }
}
</script>

<style lang="scss">

    .header {
        width: 100%;
        display: grid;
        grid-template-areas: "a b";

        &__logo {
            position: relative;
            left: 143px;

            &__item {
                    position: absolute;
                    max-width: 211px;
                    max-height: 90px;
                    height: -webkit-fit-content;
                    height: -moz-fit-content;
                    height: fit-content;
                    top: 4px;
            }
        }

        &__nav {
            display: grid;
            grid-template-columns: auto auto auto auto;
            align-items: center;
            top: 50px;

            &__language {
                margin-right: 63px;
            }

            &__menu {

                &--image {
                    width: 20px;
                }

                color: #fff;
                padding-left: 5.2rem !important;
                padding: 1.8rem;
                position: relative;
                max-width: 362px;
                background: #717271;
            }

            &__label {
                
            }
        }
    }


    .menu-info {
        color: #fff;

        &__asterisk {
            max-width: 60px;
        }
    }

    .main-menu {
        width: 100%;
        height: 100%;
        opacity: 0;
        visibility: hidden;
    }
    .nav-open .main-menu {
        opacity: 1;
        visibility: visible;
        background: #717271;
    }
    .main-menu .nav li a {
        color: #9e9e9e;
        font-size: 4.5vh;
        font-weight: 530;
    }

    .main-menu {
        &__active{
            color: #fff !important;
        }
    }

    .main-menu .nav li {
        opacity: 0;
        -webkit-transform: translateY(-40px);
        transform: translateY(-40px);
        -webkit-animation-timing-function: cubic-bezier(0.45, 0.005, 0, 1);
        -moz-animation-timing-function: cubic-bezier(0.45, 0.005, 0, 1);
        -o-animation-timing-function: cubic-bezier(0.45, 0.005, 0, 1);
        animation-timing-function: cubic-bezier(0.45, 0.005, 0, 1);
    }
    .nav-open .main-menu .nav li {
        opacity: 1;
        -webkit-transform: translateY(0px);
        transform: translateY(0px);
        -webkit-transition: -webkit-transform 0.2s, opacity 0.2s;
        transition: transform 0.2s, opacity 0.2s;
    }
    .main-menu .nav li.delay-1 {
        -webkit-transition-delay: 0.1s;
        -moz-transition-delay: 0.1s;
        -ms-transition-delay: 0.1s;
        -o-transition-delay: 0.1s;
        transition-delay: 0.1s;
    }
    .main-menu .nav li.delay-2 {
        -webkit-transition-delay: 0.2s;
        -moz-transition-delay: 0.2s;
        -ms-transition-delay: 0.2s;
        -o-transition-delay: 0.2s;
        transition-delay: 0.2s;
    }
    .main-menu .nav li.delay-3 {
        -webkit-transition-delay: 0.3s;
        -moz-transition-delay: 0.3s;
        -ms-transition-delay: 0.3s;
        -o-transition-delay: 0.3s;
        transition-delay: 0.3s;
    }
    .main-menu .nav li.delay-4 {
        -webkit-transition-delay: 0.4s;
        -moz-transition-delay: 0.4s;
        -ms-transition-delay: 0.4s;
        -o-transition-delay: 0.4s;
        transition-delay: 0.4s;
    }
    .main-menu .nav li.delay-5 {
        -webkit-transition-delay: 0.5s;
        -moz-transition-delay: 0.5s;
        -ms-transition-delay: 0.5s;
        -o-transition-delay: 0.5s;
        transition-delay: 0.5s;
    }
    .main-menu .nav li.delay-6 {
        -webkit-transition-delay: 0.6s;
        -moz-transition-delay: 0.6s;
        -ms-transition-delay: 0.6s;
        -o-transition-delay: 0.6s;
        transition-delay: 0.6s;
    }
    .main-menu .nav li.delay-7 {
        -webkit-transition-delay: 0.7s;
        -moz-transition-delay: 0.7s;
        -ms-transition-delay: 0.7s;
        -o-transition-delay: 0.7s;
        transition-delay: 0.7s;
    }
    .main-menu .nav li.delay-8 {
        -webkit-transition-delay: 0.8s;
        -moz-transition-delay: 0.8s;
        -ms-transition-delay: 0.8s;
        -o-transition-delay: 0.8s;
        transition-delay: 0.8s;
    }
    .main-menu .nav li.delay-9 {
        -webkit-transition-delay: 0.9s;
        -moz-transition-delay: 0.9s;
        -ms-transition-delay: 0.9s;
        -o-transition-delay: 0.9s;
        transition-delay: 0.9s;
    }

    .nav-button {
        position: relative;
        z-index: 1111;
        border: solid 1px #f8f8f8;
        height: 42px;
        display: block;
        width: 50px;
        padding: 12px;
    }
    .nav-button #nav-icon3 {
        width: 24px;
        height: 22px;
        display: inline-block;
        position: relative;
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
        -webkit-transition: 0.5s ease-in-out;
        -moz-transition: 0.5s ease-in-out;
        -o-transition: 0.5s ease-in-out;
        transition: 0.5s ease-in-out;
        cursor: pointer;
    }
    .nav-button #nav-icon3 span {
        display: block;
        position: absolute;
        height: 3px;
        width: 100%;
        background: #ffffff;
        border-radius: 9px;
        opacity: 1;
        left: 0;
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
        -webkit-transition: 0.25s ease-in-out;
        -moz-transition: 0.25s ease-in-out;
        -o-transition: 0.25s ease-in-out;
        transition: 0.25s ease-in-out;
    }
    .nav-button #nav-icon3 span:nth-child(1) {
        top: 0;
    }
    .nav-button #nav-icon3 span:nth-child(2),
    #nav-icon3 span:nth-child(3) {
        top: 7px;
    }
    .nav-button #nav-icon3 span:nth-child(4) {
        top: 14px;
    }
    .nav-open #nav-icon3 span:nth-child(1) {
        top: 9px;
        width: 0;
        left: 50%;
    }
    .nav-open #nav-icon3 span:nth-child(2) {
        -webkit-transform: rotate(45deg);
        -moz-transform: rotate(45deg);
        -o-transform: rotate(45deg);
        transform: rotate(45deg);
    }
    .nav-open #nav-icon3 span:nth-child(3) {
        -webkit-transform: rotate(-45deg);
        -moz-transform: rotate(-45deg);
        -o-transform: rotate(-45deg);
        transform: rotate(-45deg);
    }
    .nav-open #nav-icon3 span:nth-child(4) {
        top: 9px;
        width: 0;
        left: 50%;
    }

    .flex-center {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        height: 100%;
    }


</style>
