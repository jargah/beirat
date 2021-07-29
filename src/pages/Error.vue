<template>
    <div class="container-fluid ">

       <section class="section">
            <div class="row">
                <div class="col-6">

                </div>
                <div class="col-6 align-self-center">
                    <p class="section__title">
                        DON´T CRY
                    </p>
                    <p class="section__description">
                        ¡ES SOLO UN ERROR 404!
                    </p>
                    <p class="section__description">
                        La Página Que Está Buscando No Está Disponible.
                    </p>
                </div>
            </div>
       </section>

    </div>
</template>

<script>


export default {
    name: 'error',
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
        height: 400px;

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



