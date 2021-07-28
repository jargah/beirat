<template>
    <div id="app">
        <global-header />
        <section id="body">
            <router-view />
        </section>
        <global-footer />
    </div>
</template>

<script>

    import Header from 'COMPONENTS/global/header'
    import Footer from 'COMPONENTS/global/footer'

    export default {
        name: "App",
        components: {
            'global-header': Header,
            'global-footer': Footer,
        },
    }
</script>

<style>
    #app {
        min-height:100%;
        position:relative;
    }

    #body {
        padding:10px;
        padding-bottom: 700px;   /* Height of the footer */
    }

</style>
