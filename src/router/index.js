import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


// Routes
const routes = [
    {
        name: 'home',
        path: '/',
        meta: {
            layout: 'default'
        },
        component: () => import( /* webpackChunkName: "js/page-home" */ '@/pages/Home')
    },
    {
        name: 'we-are',
        path: '/we-are',
        meta: {
            layout: 'default'
        },
        component: () => import( /* webpackChunkName: "js/page-weare" */ '@/pages/WeAre')
    },
    {
        name: 'business-investigation',
        path: '/business-investigation',
        meta: {
            layout: 'default'
        },
        component: () => import( /* webpackChunkName: "js/page-businessinvestigation" */ '@/pages/BusinessInvestigation')
    },
    {
        name: 'digital-operation',
        path: '/digital-operation',
        meta: {
            layout: 'default'
        },
        component: () => import( /* webpackChunkName: "js/page-digitaloperation" */ '@/pages/DigitalOperation')
    },
    {
        name: 'scalability',
        path: '/scalability',
        meta: {
            layout: 'default'
        },
        component: () => import( /* webpackChunkName: "js/page-scalability" */ '@/pages/Scalability')
    },
    {
        name: 'customer',
        path: '/customer',
        meta: {
            layout: 'default'
        },
        component: () => import( /* webpackChunkName: "js/page-customer" */ '@/pages/Customer')
    },
    {
        name: 'contact',
        path: '/contact',
        meta: {
            layout: 'default'
        },
        component: () => import( /* webpackChunkName: "js/page-contact" */ '@/pages/Contact')
    },
    {
        name: 'academy',
        path: '/academy',
        meta: {
            layout: 'default'
        },
        component: () => import( /* webpackChunkName: "js/page-academy" */ '@/pages/Academy')
    },
    {
        name: 'term',
        path: '/term',
        meta: {
            layout: 'default'
        },
        component: () => import( /* webpackChunkName: "js/page-term" */ '@/pages/Term')
    },
    {
        name: 'notice',
        path: '/notice',
        meta: {
            layout: 'default'
        },
        component: () => import( /* webpackChunkName: "js/page-notice" */ '@/pages/Notice')
    },
    {
        name: 'policity',
        path: '/policity',
        meta: {
            layout: 'default'
        },
        component: () => import( /* webpackChunkName: "js/page-policity" */ '@/pages/Policity')
    },
    {
        name: 'error',
        path: '/error',
        meta: {
            layout: 'default'
        },
        component: () => import( /* webpackChunkName: "js/page-error" */ '@/pages/Error')
    },
    {
        path: '*',
        meta: {
            layout: 'default'
        },
        beforeEnter: (to, from, next) => {
            next('/error')
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
