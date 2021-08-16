import Vue from 'vue'
import App from 'SRC/App'
import Default from 'SRC/templates/default'
import Academy from 'SRC/templates/academy'

Vue.config.productionTip = false

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
import 'SCSS/app.scss';


import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
Vue.use(MuseUI)

import AnimateCSS from 'animate.css'
Vue.use(AnimateCSS)

import VueHead from 'vue-head'
Vue.use(VueHead)

import VueI18n from 'vue-i18n'
Vue.use(VueI18n)


import Router from '@/router/index'

import VideoBg from 'vue-videobg'
Vue.component('video-bg', VideoBg)

Vue.component('default', Default)
Vue.component('academy', Academy)

import MarqueeText from 'vue-marquee-text-component'
Vue.component('marquee-text', MarqueeText)

import message from '@/translates'

const i18n = new VueI18n({
    locale: 'es',
    messages: message
});

new Vue({
    i18n: i18n,
    router: Router,
    render: h => h(App),
}).$mount('#app')
