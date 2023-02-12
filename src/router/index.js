import { createRouter, createWebHashHistory } from 'vue-router'

import HomeView from '../pages/home-page.vue'
import Chart from '../pages/statistics.vue'

const routerOptions = {
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: HomeView,
        },
        {
            path: '/stats',
            component: Chart,
        },
        // {
        //     path: '/car/:_id',
        //     component: CarDetails,
        // },
        // {
        //     path: '/car/edit/:_id?',
        //     component: CarEdit,
        // },
        {
            path: '/about',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../pages/about.vue'),
        },
    ],
}
const router = createRouter(routerOptions)

export default router
