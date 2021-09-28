<template>
    <div>
        <div class="container-image">
            <img :src="image"
                class="img-fluid img-thumbnail-item image-doctor"
                alt="tracto"
                style="cursor: pointer;"
                @click="toggleModal"
                ref="btnToggle">
        </div>

        <b-modal
            id="tracto"
            header-bg-variant="dark"
            headerTextVariant="light"
            hide-footer
            size="xl"
            centered>
           <div class="modal-content">
                <div class="embed-responsive embed-responsive-16by9">
                    <iframe class="embed-responsive-item" src="https://player.vimeo.com/video/599661149" id="video" allowscriptaccess="always" allow="autoplay"></iframe>
                </div>
            </div>
        </b-modal>
    </div>
</template>

<script>


import image from 'ASSETS/customer/image/trcto.jpeg'

export default {
    name: 'tracto',
    data() {
        return {
            image
        }
    },
    methods: {
        toggleModal() {
            this.$root.$emit('bv::toggle::modal', 'tracto', '#btnToggle')
        }
    },
    mounted() {

    }
}
</script>

<style lang="scss">
    .container-image {
        position: relative;
        width: 100%;
        max-width: 100%;
    }
    .image-doctor {
        width: 100%;
        height: auto;
    }
    .overlay-image {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        height: 100%;
        widows: 100%;
        background-color: transparent;
    }
</style>
