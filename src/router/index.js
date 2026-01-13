import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Planing from '../views/Planing.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/planing',
    name: 'Planing',
    component: Planing
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
