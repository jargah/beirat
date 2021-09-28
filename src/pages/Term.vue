<template>
    <div class="container-fluid">
       <section class="section">
            <div class="container">
                <div class="row mb-5">
                    <div class="col-12 mt-5 mb-5">
                        <p class="section__title">
                           {{ $t('terms.title') }}
                        </p>

                        <p class="section__description">
                               {{ $t('terms.text_1') }}<br><br>
                               {{ $t('terms.text_2') }}<br><br>
                               {{ $t('terms.text_3') }}<br><br>
                               {{ $t('terms.text_4') }}<br><br>
                               {{ $t('terms.text_5') }}<br><br>
                               {{ $t('terms.text_6') }}<br><br>
                               {{ $t('terms.text_7') }}<br><br>
                               {{ $t('terms.text_8') }}<br><br>
                               {{ $t('terms.text_9') }}<br><br>
                               {{ $t('terms.text_10') }}<br><br>
                               {{ $t('terms.text_11') }}<br><br>
                               {{ $t('terms.text_12') }}<br><br>
                               {{ $t('terms.text_13') }}<br><br>
                               {{ $t('terms.text_14') }}<br><br>
                               {{ $t('terms.text_15') }}<br><br>
                               {{ $t('terms.text_16') }}<br><br>
                               {{ $t('terms.text_17') }}<br><br>
                               {{ $t('terms.text_18') }}<br><br>
                               {{ $t('terms.text_19') }}<br><br>
                               {{ $t('terms.text_20') }}<br><br>
                        </p>
                    </div>
                </div>
            </div>
       </section>

    </div>
</template>
<script>


export default {
    name: 'term',
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
            font-size: 40px;
        }

        &__description {
            position: relative;
            top: 100px;
            font-size: 20px;
        }
    }

</style>



