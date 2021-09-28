<template>
    <div class="container-fluid">

       <section class="section">
            <div class="container">
                <div class="row mb-5">
                    <div class="col-12 mt-5 mb-5">
                        <p class="section__title">
                            {{ $t('politics.title') }}
                        </p>

                        <p class="section__description">
                            {{ $t('politics.text_1') }}<br><br>
                            {{ $t('politics.text_2') }}<br><br>
                            {{ $t('politics.text_3') }}<br><br>
                            {{ $t('politics.text_4') }}<br><br>
                            {{ $t('politics.text_5') }}<br><br>
                            {{ $t('politics.text_6') }}<br><br>
                            {{ $t('politics.text_7') }}<br><br>
                            {{ $t('politics.text_8') }}<br><br>
                            {{ $t('politics.text_9') }}<br><br>
                            {{ $t('politics.text_10') }}<br><br>
                            {{ $t('politics.text_11') }}<br><br>
                            {{ $t('politics.text_12') }}<br><br>
                            {{ $t('politics.text_13') }}<br><br>
                        </p>
                    </div>
                </div>
            </div>
       </section>

    </div>
</template>

<script>


export default {
    name: 'policity',
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



