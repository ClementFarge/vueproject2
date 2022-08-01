import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/components/Home"
import CitiesList from "@/components/CitiesList";
// import HomeView from "@/views/HomeView"
// import CitiesView from "@/views/CitiesView";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect : '/home',
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/cities',
    component: CitiesList
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router

