<template>
    <div class="container-fluid">

       <section class="section">
            <div class="container">
                <div class="row mb-5">
                    <div class="col-12 mt-5 mb-5">
                        <p class="section__title">
                            AVISO DE PRIVACIDAD
                        </p>

                        <p class="section__description">
                            Creemos que como hacemos una cosa hacemos todas, pues el cerebro es una red neural holística que recicla
                            <br>
                            los mismos patrones para distintas tareas. Por ende, no podemos evitar usar el método científico a la hora de hacer negocios.
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
        height: 500px;

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



