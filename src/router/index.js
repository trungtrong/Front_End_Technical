import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        name: "home",
        redirect: {name: 'AspectRatio'},
        component: Home,
        children: [
            {
                path: '/about',
                name: 'About',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
            },
            {
                path: '/search-all',
                name: 'SearchAll',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () => import(/* webpackChunkName: "about" */ '../views/SearchAll.vue')
            },
            {
                path: '/aspect-ratio',
                name: 'AspectRatio',
                component: () => import('@/components/basic/aspect-ratio.component')
            },
            {
                path: '/accordion',
                name: 'Accordion',
                component: () => import('@/components/basic/accordion.component')
            },
            {
                path: '/image-responsive',
                name: 'ImageResponsive',
                component: () => import('@/components/basic/image-responsive.component')
            }
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
