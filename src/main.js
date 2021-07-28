import Vue from 'vue'
import App from 'SRC/App'
import Default from 'SRC/templates/default'

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

import Router from '@/router/index'

import VideoBg from 'vue-videobg'
Vue.component('video-bg', VideoBg)

Vue.component('default', Default)

new Vue({
    router: Router,
    render: h => h(App),
}).$mount('#app')
