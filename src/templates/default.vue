<template>
    <div>
        <global-header />
        <div>
            <slot />
        </div>
        <global-footer />
    </div>
</template>

<script>

import Header from 'COMPONENTS/global/header'
import Footer from 'COMPONENTS/global/footer'


export default {
    name: 'default',
    components: {
        'global-header': Header,
        'global-footer': Footer,
    },
    data() {
        return {

        }
    }
}
</script>

<style lang="scss">

</style>
