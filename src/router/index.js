import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: '关于'
    }
  },
  {
    path: '/bigData',
    name: 'seminar',
    meta: {
      title: '组会周记'
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/seminar.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
