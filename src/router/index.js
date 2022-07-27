import Vue from 'vue'
import VueRouter from 'vue-router'



Vue.use(VueRouter)

const routes = [
  
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/HomeView.vue'),
    children:[
      {
        path: 'products',
        component: () => import(/* webpackChunkName: "product-view" */ '../views/ProductView.vue'),
        name :'products'
      },
      {
        path: 'product-detail/:id',
        component: () => import(/* webpackChunkName: "product-view" */ '../views/ProductDetailView.vue'),
        name : 'product-detail'
      },
 
    ]
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/*',
    redirect:"/"
  },
  {
    path: '**',
    component: () => import(/* webpackChunkName: "product-view" */ '../views/NotFound.vue'),
    
    name : '404'
  }
]

const router = new VueRouter({
  mode:'history',
  routes
})

export default router
