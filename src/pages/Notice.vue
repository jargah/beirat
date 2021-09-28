<template>
    <div class="container-fluid">

       <section class="section">
            <div class="container">
                <div class="row mb-5">
                    <div class="col-12 mt-5 mb-5">
                        <p class="section__title text-center mb-4 font-basic">
                            {{ $t('privacy.title') }}<br><br>
                        </p>

                        <p class="section__description mt-5 font-basic">
                            {{ $t('privacy.text_1') }}<br><br>
                            {{ $t('privacy.text_2') }}<br><br>
                            {{ $t('privacy.text_3') }}<br><br>
                            {{ $t('privacy.text_4') }}<br><br>
                            {{ $t('privacy.text_5') }}<br><br>
                            {{ $t('privacy.text_6') }}<br><br>
                            {{ $t('privacy.text_7') }}<br><br>
                            {{ $t('privacy.text_8') }}<br><br>
                            {{ $t('privacy.text_9') }}<br><br>
                            {{ $t('privacy.text_10') }}<br><br>
                        </p>
                    </div>
                </div>
            </div>
       </section>

    </div>
</template>

<script>


export default {
    name: 'notice',
    data() {
        return {

        }
    }
}
</script>

<style lang="scss">

    .section {

        padding-left: 100px;
        padding-right: 100px;

        &__title {
            position: relative;
            top: 100px;
            font-size: 30px;
        }

        &__description {
            position: relative;
            top: 100px;
            font-size: 20px;
        }
    }

</style>



