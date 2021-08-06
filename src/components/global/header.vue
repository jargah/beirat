<template>

    <header>
        <div class="header">
            <div class="d-flex justify-content-start header__logo">
                <router-link
                    :to="{ name: 'home' }"
                    custom
                    v-slot="{ href, navigate, isExactActive }"
                >
                    <a
                        :class="[isExactActive ? 'main-menu__active' : '']"
                        :href="href"
                        @click="navigate">
                        <img :src="logo" class="header__logo__item" alt="logo" style="cursor:pointer;">
                    </a>
                </router-link>
            </div>
            <div class="d-flex justify-content-end">
                <div class="header__nav__language align-self-center">
                    <span class="font-menu font-menu__nav">
                        Español
                    </span>
                </div>
                <div class="header__nav__menu align-self-center">
                    <div class="d-flex flex-row">
                        <a class="nav-button" @click="openMenu"><span id="nav-icon3"><span></span><span></span><span></span><span></span></span></a>
                        <span class="font-menu font-menu__nav font-menu__menu-left">
                            Menu
                        </span>
                    </div>
                </div>
                <!-- <div class="header__nav__menu align-self-center">

                    <div class="d-flex flex-row">
                        <a class="nav-button" @click="openMenu"><span id="nav-icon3"><span></span><span></span><span></span><span></span></span></a>
                        <span class="align-self-center font-menu font-menu__nav">
                            Menu
                        </span>
                    </div>
                </div> -->
            </div>
        </div>

        <div class="fixed-top main-menu">
            <div class="row">
                <div class="col-10 d-flex justify-content-end mt-4">
                    <a class="nav-button" @click="openMenu"><span id="nav-icon3"><span></span><span></span><span></span><span></span></span></a>
                </div>
            </div>
            <div class="row main-menu__row">
                <div class="col-12 col-sm-12 col-md-12 col-lg-6">
                    <div class="flex-center">
                        <ul class="nav flex-column">
                            <router-link
                                :to="{ name: 'home' }"
                                custom
                                v-slot="{ href, navigate, isExactActive }"
                            >
                                <li class="nav-item delay-1">
                                    <a class="nav-link font-menu"
                                        :class="[isExactActive ? 'main-menu__active' : '']"
                                        :href="href"
                                        @click="navigate, openMenu">
                                        Home
                                    </a>
                                </li>
                            </router-link>

                            <router-link
                                :to="{ name: 'we-are' }"
                                custom
                                v-slot="{ href, navigate, isExactActive }"
                            >
                               <li class="nav-item delay-2">
                                    <a class="nav-link font-menu"
                                        :href="href"
                                        :class="[isExactActive ? 'main-menu__active' : '']"
                                        @click="navigate, openMenu">
                                        We Are
                                    </a>
                                </li>
                            </router-link>

                            <router-link
                                :to="{ name: 'business-investigation' }"
                                custom
                                v-slot="{ href, navigate, isExactActive }"
                            >
                                <li class="nav-item delay-3">
                                    <a class="nav-link font-menu"
                                        :href="href"
                                        :class="[isExactActive ? 'main-menu__active' : '']"
                                        @click="navigate, openMenu">
                                        Business Investigation
                                    </a>
                                </li>
                            </router-link>


                            <router-link
                                :to="{ name: 'scalability' }"
                                custom
                                v-slot="{ href, navigate, isExactActive }"
                            >
                                <li class="nav-item delay-4">
                                    <a class="nav-link font-menu"
                                        :href="href"
                                        :class="[isExactActive ? 'main-menu__active' : '']"
                                        @click="navigate, openMenu">
                                        Business Scalability
                                    </a>
                                </li>
                            </router-link>


                            <router-link
                                :to="{ name: 'digital-operation' }"
                                custom
                                v-slot="{ href, navigate, isExactActive }"
                            >
                                <li class="nav-item delay-5">
                                    <a class="nav-link font-menu"
                                        :href="href"
                                        :class="[isExactActive ? 'main-menu__active' : '']"
                                        @click="navigate, openMenu">
                                        Digital Operation
                                    </a>
                                </li>
                            </router-link>

                            <router-link
                                :to="{ name: 'customer' }"
                                custom
                                v-slot="{ href, navigate, isExactActive }"
                            >
                                <li class="nav-item delay-6">
                                    <a class="nav-link font-menu"
                                        :href="href"
                                        :class="[isExactActive ? 'main-menu__active' : '']"
                                        @click="navigate, openMenu">
                                        Clients
                                    </a>
                                </li>
                            </router-link>

                            <router-link
                                :to="{ name: 'academy' }"
                                custom
                                v-slot="{ href, navigate, isExactActive }"
                            >
                                <li class="nav-item delay-7">
                                    <a class="nav-link font-menu"
                                        :href="href"
                                        :class="[isExactActive ? 'main-menu__active' : '']"
                                        @click="navigate, openMenu">
                                        Academy
                                    </a>
                                </li>
                            </router-link>


                            <router-link
                                :to="{ name: 'contact' }"
                                custom
                                v-slot="{ href, navigate, isExactActive }"
                            >
                                <li class="nav-item delay-8">
                                    <a class="nav-link font-menu"
                                        :href="href"
                                        :class="[isExactActive ? 'main-menu__active' : '']"
                                        @click="navigate, openMenu">
                                        Contact
                                    </a>
                                </li>
                            </router-link>

                        </ul>
                    </div>
                </div>
                <div class="col-12 col-sm-12 col-md-12 col-lg-6 mt-5 text-center">

                    <div class="flex-center">
                        <div class="flex-column">

                            <p>
                                <img :src="asterisk" alt="beirat" class="menu-info__asterisk">
                            </p>
                            <p class="menu-info font-menu">
                                WhatsApp
                            </p>
                            <p class="menu-info font-menu">
                                hello@beirat.mx
                            </p>
                            <p class="menu-info font-menu">
                                Rubén Darío 586, Prados Providencia
                                <br>
                                C.P.  44670, Guadalajara, Jalisco.
                            </p>
                            <p class="menu-info font-menu">

                                <span style="cursor: pointer;" @click="redirect('term')">
                                    Términos y condiciones
                                </span>
                                <br>
                                <span style="cursor: pointer;" @click="redirect('notice')">
                                    Aviso de privacidad
                                </span>
                                <br>
                                <span style="cursor: pointer;" @click="redirect('policity')">
                                    Politicas
                                </span>
                            </p>
                            <p>
                                <a href="https://instagram.com/beirat.mx?utm_medium=copy_link" target="_blank">
                                    <img :src="instagram" alt="instragram" class="p-2">
                                </a>
                                <img :src="twitter" alt="twitter" class="p-2">
                                <a href="https://www.linkedin.com/in/beirat-mx-b10355214/" target="_blank">
                                    <img :src="linkedin" alt="linkedin" class="p-2">
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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
            asterisk,
            windowWidth: window.innerWidth
        }
    },
    watch: {
        windowWidth(newWidth, oldWidth) {
            this.windowWidth = newWidth
        }
    },
    methods: {
        onResize() {
            this.windowWidth = window.innerWidth
        },
        openMenu() {
            $('body').toggleClass('nav-open')
        },
        redirect(name) {
            this.$router.push({
                name: name
            })
            this.openMenu()
        }
    },
    mounted() {
        $(window).scroll(function(){
            var scroll = $(window).scrollTop();
            if (scroll > 100) {
                $(".header").css("background" , "#000").fadeIn(500);
            }
            else{
                $(".header").css("background" , "rgba(255, 255, 255, 0)").fadeIn(500);
            }
        })

        this.$nextTick(() => {
            window.addEventListener('resize', this.onResize);
        })
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.onResize);
    },
}
</script>

<style lang="scss">

    @media (min-width: 769px) AND (max-width: 992px) {
        .main-menu .nav li a {
            font-size: 3.5vh !important;
            font-weight: 200;
        }

        .nav-link {
            display: block;
            padding: 0.1rem 1rem;
        }

        .header__logo__item {
            max-width: 209px !important;
            max-height: 65px !important;
            top: 10px !important;
            left: -100px;
        }
    }

    @media (min-width: 380px) AND (max-width: 768px) {
        .main-menu .nav li a {
            font-size: 3.5vh !important;
            font-weight: 200;
        }

        .nav-link {
            display: block;
            padding: 0.1rem 1rem;
        }

        .header__logo__item {
            max-width: 209px !important;
            max-height: 65px !important;
            top: 10px !important;
            left: -100px;
        }
    }


    .navbar-brand
    {
        position: absolute;
        width: 100%;
        left: 0;
        text-align: center;
        margin:0 auto;
    }
    .navbar-toggle {
        z-index:3;
    }

    .font-menu {
        &__nav {
            font-size: 25px;
            font-weight: 700;
            font-style: normal;
            line-height: 71px;
        }

        &__menu-left {
            position: absolute;
            top: 13px;
            right: 60px;
        }
    }

    @media (min-width: 380px) AND (max-width: 768px) {

        .nav-button {
            right: -45px;
        }

        .font-menu {
            &__menu-left {
                display: none;
            }
        }

        .header {
            &__nav {
                &__language {
                    display: none;
                }

                &__menu {
                    max-width: 23px !important;
                    right: 50px;
                }
            }
        }
    }

    .header {
        position: fixed;
        width: 100%;
        display: grid;
        grid-template-areas: "a b";
        background: rgba(255, 255, 255, 0);
        z-index: 1;


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
                padding-right: 10.2rem !important;
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

        .row {
            margin-right: 0px !important;
            margin-left: 0px !important;
        }

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
        height: 37px;
        display: block;
        width: 43px;
        padding: 9px;
        // left: 36px;
        top: 2px;
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
