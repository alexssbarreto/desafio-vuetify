import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Card from '../views/Card.vue'
import Chat from '../views/Chat.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'card',
    component: Card
  },
  {
    path: '/chat',
    name: 'chat',
    component: Chat
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
