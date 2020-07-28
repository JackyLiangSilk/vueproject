import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Gallery from '../views/Gallery.vue'
import Tabs from '../views/Tabs.vue'
import Slider from '../views/Slider.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes : [
      {
        path: '/',
        name: 'Home',
        component: Home
      },
      {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
      },
      {
        path: '/gallery',
        name: 'Gallery',
        component: Gallery
      },
      {
        path: '/tabs',
        name: 'Tabs',
        component: Tabs
      },
      {
        path: '/slider',
        name: 'Slider',
        component: Slider
      }
    ]
}) 
