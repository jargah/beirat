<template>
    <div>
        <div class="row">
            <div class="col-12 col-sm-12 col-md-12 col-lg-6 mb-5">
                <div id="player-overlay">
                    <video loop muted autoplay class="videofull" style="position: absolute;">
                        <source :src="video1" type="video/mp4" />
                    </video>
                    <div class="video_title">
                        <p>
                           {{ $t('contact.title') }}
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-12 col-sm-12 col-md-12 col-lg-6">
                <div class="container">
                    <div class="row row_form p-5">
                        <div class="col-12">
                            <div class="row">
                                <div class="col-12">
                                    <p class="font-basic label_contact">
                                       {{ $t('contact.contacto') }}
                                    </p>
                                </div>
                            </div>
                            <template v-if="!send">
                                <div class="row">
                                    <div class="col-6">
                                        <mu-text-field v-model="form.name"
                                        :label=" $t('contact.placeholder.item_1')"
                                        :placeholder=" $t('contact.placeholder.item_1')" full-width></mu-text-field>
                                    </div>
                                    <div class="col-6">
                                        <mu-text-field v-model="form.company"
                                            :label="$t('contact.placeholder.item_2')"
                                            :placeholder="$t('contact.placeholder.item_2')"
                                            full-width></mu-text-field>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-6">
                                        <mu-text-field v-model="form.email"
                                            :label="$t('contact.placeholder.item_3')"
                                            :placeholder="$t('contact.placeholder.item_3')" full-width></mu-text-field>
                                    </div>
                                    <div class="col-6">
                                        <mu-text-field v-model="form.phone"
                                         :label="$t('contact.placeholder.item_4')"
                                         :placeholder="$t('contact.placeholder.item_4')" full-width></mu-text-field>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-12">
                                        <mu-text-field v-model="form.message"
                                        :label="$t('contact.placeholder.item_5')"
                                        :placeholder="$t('contact.placeholder.item_5')" multi-line :rows="4" full-width></mu-text-field>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-12">
                                        <button class="btn font-basic" @click.prevent="sendMail()">
                                            {{ $t('contact.placeholder.item_6') }} <img :src="arrow">
                                        </button>
                                    </div>
                                </div>
                            </template>
                            
                            <template v-else>
                                <p class="font-basic mb-5" style="font-size: 20px;">

                                </p>
                                <p class="font-futura mt-5">
                                    {{ $t('contact.placeholder.colaboration') }}
                                </p>
                            </template>

                            <div class="row mt-5">
                                <div class="col-12">
                                <p class="font-futura">
                                       {{ $t('contact.placeholder.item_3') }}
                                        <br>
                                        <a href="mailto:hello@beirat.mx">hello@beirat.mx</a>
                                 </p>
                                <p class="font-futura">
                                        Whatsapp
                                        <br>
                                    <a href="https://api.whatsapp.com/send?phone=+523322228729&text=Hola%20Beirat" target="_blank">33 22 22 87 29</a>
                                 </p>
                                 <p class="font-futura">
                                       {{ $t('contact.placeholder.item_4') }}
                                        <br>
                                        <a href="tel:3322228729">33 22 22 87 29</a>
                                    </p>

                                </div>
                            </div>

                            <div class="row row_form">
                                <div class="col-12">
                                    <div class="row mt-5">
                                        <div class="col-4">
                                            <p class="font-futura">
                                                Rubén Darío 586, Prados Providencia
                                                <br>
                                                C.P.  44670, Guadalajara, Jalisco.
                                            </p>
                                        </div>
                                        <div class="col-8 text-right">
                                            <p class="font-futura">
                                                <a href="https://instagram.com/beirat.mx?utm_medium=copy_link" target="_blank">
                                                    <img :src="instagram" alt="instragram" class="p-2" style="filter: invert(1);">
                                                </a>
                                                <a href="https://twitter.com/BeiratM?s=09" target="_blank" style="filter: invert(1);">
                                                    <img :src="twitter" alt="twitter" class="p-2">
                                                </a>
                                                <a href="https://www.linkedin.com/in/beirat-mx-b10355214/" target="_blank">
                                                    <img :src="linkedin" alt="linkedin" class="p-2" style="filter: invert(1);">
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import video1  from 'ASSETS/customer/video/empresas-de-asesoria'
import arrow from 'ASSETS/business-investigation/image/arrow'
import instagram from 'ASSETS/global/instagram'
import twitter from 'ASSETS/global/twitter'
import linkedin from 'ASSETS/global/linkedin'

var nodemailer = require('nodemailer')
var net = require('net')

export default {
    name: 'contact',
    data() {
        return {
            send: false,
            video1,
            arrow,
            instagram,
            twitter,
            linkedin,
            form: {
                name: null,
                email: null,
                company: null,
                phone: null,
                message: null
            }
        }
    },
    methods: {

        sendMail() {
            fetch('https://https://beirat.mx/send_email.php', {
                method: 'post',
                headers: {
                    'Accept': 'application/json, text/plain, /',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name: this.form.name, email: this.form.email, company: this.form.company, phone: this.form.phone, message: this.form.message })
            }).then(
                res => res.json()
            ).then(
                res => console.log(res)
            )

            this.send = true
        }
    }
}
</script>

<style lang="scss">

    #player-overlay {
        position: relative;

        &:before {
            content:'';
            display: block;
            padding-top: 50%;

        }
    }

    .videofull {
        bottom: 0;
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
        width: 100%;
    }

    .label_contact {
        margin-top: 100px;
        margin-bottom: 100px;
        font-size: 60px;
    }

    .video_title {
        position: absolute;
        top: 150px;
        left: 120px;
        color: #fff;
        font-size: 40px;
    }

    @media (min-width: 768px) and (max-width: 1024px) {

        .label_contact {
            margin-top: 55px;
            margin-bottom: 10px;
            font-size: 25px;
        }

    }


    @media (min-width: 769px) AND (max-width: 992px) {
        .label_contact {
            margin-top: 680px !important;
        }

    }

    @media (min-width: 580px) AND (max-width: 768px) {
        .label_contact {
            margin-top: 470px !important;
        }

    }

    @media (min-width: 380px) AND (max-width: 579px) {

        .row_form {
            margin-top: 30px;
            padding-left: 40px !important;
            padding-right: 40px !important;
        }

        .label_contact {
            margin-top: 320px !important;
        }

    }

</style>
