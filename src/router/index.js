import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/HomeView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/product-detail',
    name: 'product-detail',
    component: () => import(/* webpackChunkName: "product-detail" */ '../views/ProductDetailView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
