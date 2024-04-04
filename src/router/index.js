import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeComponent from "../components/HomeComponent.vue"
import HotelView from "../views/HotelView.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'HomeComponent',
    component: HomeComponent
  },
  {
    path: '/hotel',
    name: 'HotelView',
    component: HotelView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router