<template>
    <header class="v-header container-fluid px-0">
        <div class="fullscreen-video-wrap">
            <video loop muted autoplay  width="100%">
                <source :src="video1" type="video/mp4" />
            </video>

            <div class="video-title">
                <p>
                    COMPANIES THAT USE OUR
                    <br>
                    TECHNOLOGY TO
                    <br>
                    TRANSFORM
                </p>
            </div>

            <div class="container-fluid" id="logoMarqueeSection">
                <div class="row">
                    <div class="col-12">
                        <div class="default-content-container flex items-center">
                            <div class="default-content-container-inner marquee-wrapper relative overflow-hidden inline-block">
                                <div class="marquee" style="animation-duration: 57s;">
                                    <a target="_blank"><img :src="image1" title="" class="marqueelogo" style="width: auto; max-width: none;" /></a>
                                    <a target="_blank"><img :src="image2" title="" class="marqueelogo" style="width: auto; max-width: none;" /></a>
                                    <a target="_blank"><img :src="image3" title="" class="marqueelogo" style="width: auto; max-width: none;" /></a>
                                    <a target="_blank"><img :src="image4" title="" class="marqueelogo" style="width: auto; max-width: none;" /></a>
                                    <a target="_blank"><img :src="image5" title="" class="marqueelogo" style="width: auto; max-width: none;" /></a>
                                    <a target="_blank"><img :src="image6" title="" class="marqueelogo" style="width: auto; max-width: none;" /></a>

                                </div>
                                <div class="marquee" style="animation-duration: 57s;">
                                    <a target="_blank"><img :src="image1" title="" class="marqueelogo" style="width: auto; max-width: none;" /></a>
                                    <a target="_blank"><img :src="image2" title="" class="marqueelogo" style="width: auto; max-width: none;" /></a>
                                    <a target="_blank"><img :src="image3" title="" class="marqueelogo" style="width: auto; max-width: none;" /></a>
                                    <a target="_blank"><img :src="image4" title="" class="marqueelogo" style="width: auto; max-width: none;" /></a>
                                    <a target="_blank"><img :src="image5" title="" class="marqueelogo" style="width: auto; max-width: none;" /></a>
                                    <a target="_blank"><img :src="image6" title="" class="marqueelogo" style="width: auto; max-width: none;" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </header>
</template>

<script>
import consultores from 'ASSETS/customer/video/empresas-de-asesoria-guadalajara'
import image1 from 'ASSETS/customer/image/client/geg-logo'
import image2 from 'ASSETS/customer/image/client/nova-logo'
import image3 from 'ASSETS/customer/image/client/movalia-logo'
import image4 from 'ASSETS/customer/image/client/mariaelena-logo'
import image5 from 'ASSETS/customer/image/client/tdmex-logo'
import image6 from 'ASSETS/customer/image/client/tractobull-logo'

export default {
    name: 'customer',
    data() {
        return {
            video1: consultores,
            image1,
            image2,
            image3,
            image4,
            image5,
            image6
        }
    },
    watch: {

    },
    methods: {

    },
    mounted() {

    },
    beforeDestroy() {

    }
}
</script>

<style lang="scss" scoped>

    .video-title {
        position: absolute;
        color: #fff;
        top: 200px;
        left: 100px;
        font-size: 70px;
        text-align: left !important;
    }

    .logoMarqueeSection {
        padding-top: 50vh;
        padding-bottom: 150vh;
    }

    #logoMarqueeSection {
        margin: 0 auto;
        position: relative;
        bottom: 250px;
        filter: invert(1);
    }

    .default-content-container {
        margin-left: auto;
        margin-right: auto;
        margin-top: 0;
        margin-bottom: 0;
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
        max-width: 100%;
        display:  inline-block;
        white-space: nowrap;
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

            &__row {
                padding-left: 100px;
                padding-right: 100px;
            }

            &__title {
                font-size: 40px;
            }

            &__description {
                font-size: 15px;
            }

            &__image {
                max-width: 100%;
            }
        }

        &__section2 {

            &__row {
                padding-left: 100px;
                padding-right: 100px;
            }

            &__title {
                font-size: 40px;
            }

            &__description {
                font-size: 15px;
            }

            &__image {
                max-width: 100%;
            }
        }
    }

    @media (min-width: 768px) AND (max-width: 992px) {
        .customer__section1__row {
            padding-left: 50px !important;
            padding-right: 50px !important;
        }

        .customer__section2__row {
            padding-left: 50px !important;
            padding-right: 50px !important;
        }

        #logoMarqueeSection {
            bottom: 80px !important;
        }
    }

    @media (min-width: 481px) AND (max-width: 767px) {
        .customer__section1__row {
            padding-left: 50px !important;
            padding-right: 50px !important;
        }

        .customer__section2__row {
            padding-left: 50px !important;
            padding-right: 50px !important;
        }

        #logoMarqueeSection {
            bottom: 80px !important;
        }

    }

    @media (min-width: 320px) AND (max-width: 480px) {

        .video-title {
            font-size: 26px !important;
        }

        .customer__section1__title {
            font-size: 35px !important;
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
            bottom: 80px !important;
        }

    }

    *{
        box-sizing: border-box;
    }

    body{
        margin:0;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-size:1rem;
        font-weight:normal;
        line-height:1.5;
        color:#333;
        overflow-x:hidden;
    }

    .v-header{
        //height:100vh;
        display:flex;
        align-items:center;
        color:#fff;
    }

    .container{
        max-width:960px;
        padding-left:1rem;
        padding-right:1rem;
        margin:auto;
        text-align:center;
    }

    .fullscreen-video-wrap {
        //position:absolute;
        //top:0;
        //left:0;
        width:100%;
        //height:100vh;
        overflow:hidden;
    }

    .fullscreen-video-wrap video{
        min-height:100%;
        min-width:100%;
    }

    .header-overlay{
        height:100vh;
        position: absolute;
        top:0;
        left:0;
        width:100vw;
        z-index:1;
    }

    .header-content{
        z-index:2;
    }

    .header-content h1{
        font-size:50px;
        margin-bottom:0;
    }

    .header-content p {
        font-size:1.5rem;
        display:block;
        padding-bottom:2rem;
    }


    .section{
        padding:20px 0;
    }

    .section-b{
        background:#333;
        color:#fff;
    }

    #video1 {
        display: block;
    }

    #video2 {
        display: none;
    }

    @media(max-width:960px){
        .container{
            padding-right:3rem;
            padding-left:3rem;
        }

        #video1 {
            display: none;
        }

        #video2 {
            display: block;
        }
    }


    @media (min-width: 1200px) AND (max-width: 1379px) {

        .video-title {
            font-size: 60px !important;
        }

        #logoMarqueeSection {
            bottom: 150px !important;
        }
    }

    @media (min-width: 1011px) AND (max-width: 1199px) {

        .video-title {
            top: 150px !important;
            font-size: 50px !important;
        }

        #logoMarqueeSection {
            bottom: 150px !important;
        }
    }

    @media (min-width: 991px) AND (max-width: 1010px) {

        .video-title {
            top: 150px !important;
            font-size: 40px !important;
        }

        #logoMarqueeSection {
            bottom: 100px !important;
        }
    }

    @media (min-width: 641px) AND (max-width: 990px) {
        .video-title {
            top: 150px !important;
            left: 50px !important;
            font-size: 30px !important;
        }

        #logoMarqueeSection {
            bottom: 80px !important;
        }
    }

    @media (min-width: 436px) AND (max-width: 640px) {
        .fullscreen-video-wrap{
            padding-top: 95px;
        }

        .video-title {
            top: 120px !important;
            left: 20px !important;
            font-size: 30px !important;
        }

        #logoMarqueeSection {
            position: inherit;
        }
    }

    @media(max-width: 435px) {
        .fullscreen-video-wrap{
            padding-top: 95px;
        }

        .video-title {
            top: 120px !important;
            left: 20px !important;
            font-size: 25px !important;
        }

        #logoMarqueeSection {
            // display: none;
            position: inherit;
        }
    }

</style>




