import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/Home.vue'
import About from './components/About.vue'
import CardsList from './components/CardsList.vue'
import CardsLook from './components/CardsLook.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    {
        path: '/cards',
        component: CardsList,
        children: [
            {
                path: ':id',
                component: CardsLook,
                props: true
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
