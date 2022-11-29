import Vue from 'vue'
import VueRouter from 'vue-router'
import AddCity from '../views/AddCity.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'addcity',
    component: AddCity
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
