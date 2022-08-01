import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/components/Home"
import CitiesList from "@/components/CitiesList";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/cities',
    name: 'cities',
    component: CitiesList
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

