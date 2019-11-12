import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'workcation',
    component: () => import('../views/Workcation.vue')
  },
  {
    path: '/card',
    name: 'card',
    component: () => import('../views/Card.vue')
  },
  {
    path: '/navbar',
    name: 'navbar',
    component: () => import('../views/Navbar.vue')
  },
  {
    path: '/dropdown',
    name: 'dropdown',
    component: () => import('../views/Dropdown.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
