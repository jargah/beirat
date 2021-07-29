<template>
    <div class="container-fluid">

       <section class="section">
            <p class="section__title">
                TÉRMINOS Y CONDICIONES
            </p>

             <p class="section__description">
                Creemos que como hacemos una cosa hacemos todas, pues el cerebro es una red neural holística que recicla
                <br>
                los mismos patrones para distintas tareas. Por ende, no podemos evitar usar el método científico a la hora de hacer negocios.
            </p>
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



