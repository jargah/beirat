<template>
    <div>
        <div class="row">
            <div class="col-6">
                <video loop muted autoplay class="business__section2__video" style="position: absolute;">
                    <source :src="video1" type="video/mp4" />
                </video>
                <div class="video_title">
                    <p>
                        THE POWER OF
                        <br>
                        KNOWLEDGE FOR
                        <br>
                        BUSINESS
                    </p>
                </div>
            </div>
            <div class="col-6 p-5">
                <div class="row">
                    <div class="col-12">
                        <p class="font-basic label_contact">
                            CONTACTO
                        </p>
                    </div>
                </div>
                <template v-if="!send">
                    <div class="row">
                        <div class="col-6">
                            <mu-text-field v-model="form.name" label="Nombre" placeholder="Ingresa tu nombre" full-width></mu-text-field>
                        </div>
                        <div class="col-6">
                            <mu-text-field v-model="form.company" label="Compañía" placeholder="Tu compañía es" full-width></mu-text-field>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-6">
                            <mu-text-field v-model="form.email" label="Email" placeholder="Tu correo es" full-width></mu-text-field>
                        </div>
                        <div class="col-6">
                            <mu-text-field v-model="form.phone" label="Teléfono" placeholder="Tu contacto es" full-width></mu-text-field>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <mu-text-field v-model="form.message" placeholder="Dejanos tu mensaje" multi-line :rows="4" full-width></mu-text-field>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <button class="btn font-basic" @click.prevent="sendForm()">
                                Enviar <img :src="arrow">
                            </button>
                        </div>
                    </div>
                </template>
                <template v-else>
                    <p class="font-basic mb-5" style="font-size: 20px;">
                        Hemos recibido tu información, nos comunicaremos contigo
                        <br>
                        a la brevedad.
                    </p>
                    <p class="font-futura mt-5">
                        TE AGRADECEMOS EL INTERES DE QUERER
                        <br>
                        COLABORAR CON NOSOTROS.
                    </p>
                </template>

                <div class="row mt-5">
                    <div class="col-12">
                        <p class="font-futura">
                            Whatsapp
                            <br>
                            hello@beirat.mx
                        </p>
                    </div>
                </div>
                <div class="row mt-5">
                    <div class="col-6">
                        <p class="font-futura">
                            Rubén Darío 586, Prados Providencia
                            <br>
                            C.P.  44670, Guadalajara, Jalisco.
                        </p>
                    </div>
                    <div class="col-6">
                        <p class="font-futura">
                            <img :src="instagram" alt="instragram" class="p-2" style="filter: invert(1);">
                            <img :src="twitter" alt="twitter" class="p-2"  style="filter: invert(1);">
                            <img :src="linkedin" alt="linkedin" class="p-2"  style="filter: invert(1);">
                        </p>
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
        send_notification(to, subject, html) {

            let transporter = nodemailer.createTransport({
                name: 'hostgator',
                host: 'mx60.hostgator.mx',
                port: 465,
                secure: true,
                auth: {
                    user: 'hello@beirat.mx',
                    pass: 'Control2580!'
                },
                tls: {
                    rejectUnauthorized: false
                }
            });


            let mailOptions = {
                from: '"BEIRAT" <hello@beirat.mx>', // sender address
                to: to, // list of receivers
                subject: subject, // Subject line
                html: html // html body
            }


            transporter.sendMail(mailOptions, function(error, info){
                if(error){
                    return console.log(error);
                }
                console.log('Message sent: ' + info.response);
            });
        },

        sendForm() {

            this.send_notification(this.form.email, 'CONTACTO', '<b>HOLA MUNDO</b>')
        }
    }
}
</script>

<style lang="scss">

    video {
        max-width: 100%;
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

</style>
