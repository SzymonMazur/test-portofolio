import { createWebHistory, createRouter } from "vue-router"
import LandingPage from '../views/LandingPage.vue'
import SkumCase from '../views/SkumCase.vue'
import AboutView from '../views/AboutView.vue'

const routes = [
    {
        name: 'LandingPage',
        path: '/',
        component: LandingPage
    },
    {
        name: 'SkumCase',
        path: '/skumcase',
        component: SkumCase
    },
    {
        name: 'AboutView',
        path: '/about-view',
        component: AboutView
    },
    
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
