import { createRouter, createWebHashHistory } from 'vue-router'

import HomeView from '../pages/home-page.vue'
import Chart from '../pages/statistics.vue'
import ContactIndex from '../pages/contact-index.vue'
import ContactDetails from '../pages/contact-details.vue'
import ContactEdit from '../pages/contact-edit.vue'


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
        {
            path: '/contact',
            component: ContactIndex,
        },
        {
            path: '/contact/:_id',
            component: ContactDetails,
        },
        {
            path: '/contact/edit/:_id?',
            component: ContactEdit,
        },
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
