<template>

        <component :is="layout">    
            <router-view />
        </component>

</template>

<script>

    export default {
        name: "App",
        computed: {
            layout() {
                return this.$router.resolve({ path: this.$route.path }).route.meta.layout   
            }
        } 
    }
</script>

<style>

  

</style>
