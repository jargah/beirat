<template>
    <div>
        <div id="player-overlay">
            <video loop muted autoplay class="videofull">
                <source :src="consultores" type="video/mp4" />
            </video>
        </div>
        <div class="brand">
            <img :src="logo" alt="">
        </div>

        <p class="font-basic coming">
            COMING SOON<span style="color: red;">...</span>
        </p>

        <div class="red_asterick">
            <img :src="asterick" alt="">
        </div>

    </div>
</template>

<script>

import logo from 'ASSETS/global/logo'
import asterick from 'ASSETS/global/asterick_red'
import consultores from 'ASSETS/home/consultores-de-negocios-en-guadalajara'

export default {
    name: 'videofull',
    data() {
        return {
            consultores,
            logo,
            asterick
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

    .brand {
        position: absolute;
        top: 20px;
        left: 50px;
    }

    .coming {
        position: absolute;
        bottom: 20px;
        left: 70px;
        font-size: 36px;
    }

    .red_asterick {
        position: absolute;
        top: 300px;
        right: 0px;

        img {
            max-width: 50%;
        }

    }

</style>



