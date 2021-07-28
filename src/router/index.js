import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


// Routes
const routes = [
    {
        name: 'home',
        path: '/',
        component: () => import( /* webpackChunkName: "js/page-home" */ '@/pages/Home')
    },
    {
        name: 'we-are',
        path: '/we-are',
        component: () => import( /* webpackChunkName: "js/page-weare" */ '@/pages/WeAre')
    },
    {
        name: 'business-investigation',
        path: '/business-investigation',
        component: () => import( /* webpackChunkName: "js/page-businessinvestigation" */ '@/pages/BusinessInvestigation')
    },
    {
        name: 'digital-operation',
        path: '/digital-operation',
        component: () => import( /* webpackChunkName: "js/page-digitaloperation" */ '@/pages/DigitalOperation')
    },
    {
        name: 'scalability',
        path: '/scalability',
        component: () => import( /* webpackChunkName: "js/page-scalability" */ '@/pages/Scalability')
    },
    {
        name: 'customer',
        path: '/customer',
        component: () => import( /* webpackChunkName: "js/page-customer" */ '@/pages/Customer')
    },
    {
        name: 'contact',
        path: '/contact',
        component: () => import( /* webpackChunkName: "js/page-contact" */ '@/pages/Contact')
    },
    {
        name: 'academy',
        path: '/academy',
        component: () => import( /* webpackChunkName: "js/page-academy" */ '@/pages/Academy')
    },
    {
        name: 'term',
        path: '/term',
        component: () => import( /* webpackChunkName: "js/page-term" */ '@/pages/Term')
    },
    {
        name: 'notice',
        path: '/notice',
        component: () => import( /* webpackChunkName: "js/page-notice" */ '@/pages/Notice')
    },
    {
        name: 'error',
        path: '/error',
        component: () => import( /* webpackChunkName: "js/page-error" */ '@/pages/Error')
    },
    {
        path: '*',
        beforeEnter: (to, from, next) => {
            next('/')
        }
    }
]


let router_config = {
    mode: 'history',
    base: '/',
    routes: routes,
    duplicateNavigationPolicy: 'ignore'
}


// Instance Router
const router = new VueRouter(router_config)

export default router
