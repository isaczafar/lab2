<template>
  <div>
    <nav class="navbar navbar-expand-lg">
      <router-link to="/" class="nav-link active btn btn-primary">Home</router-link>
      <router-link to="/about" class="nav-link btn btn-secondary">About</router-link>
      <router-link to="/cards" class="nav-link btn btn-success">Cards</router-link>
    </nav>

    <router-view></router-view>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/Home.vue'
import About from './components/About.vue'
import CardsList from './components/CardsList.vue'
import CardsLook from './components/CardsLook.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/cards', component: CardsList },
  { path: '/cards/:id', component: CardsLook, props: true }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default defineComponent({
  name: 'App',
  router
})
</script>
