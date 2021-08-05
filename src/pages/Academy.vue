<template>
    <div>
        <div id="player-overlay">
            <video loop muted autoplay class="videofull">
                <source :src="comming" type="video/mp4" />
            </video>
        </div>
    </div>
</template>

<script>

import logo from 'ASSETS/global/logo'
import asterick from 'ASSETS/global/asterick_red'
import comming from 'ASSETS/comming_soon/empresas-de-consultoria-en-guadalajara-linea-academy'

export default {
    name: 'videofull',
    data() {
        return {
            comming,
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



