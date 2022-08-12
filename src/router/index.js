// import store from "@/store";
import Vue from "vue";
import VueRouter from "vue-router";
import isAuthenticatedGuard from '../middlewares/auth-guard'
import isGuestGuard from "../middlewares/guest-guard";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/HomeView.vue"),
    beforeEnter: isAuthenticatedGuard,
    children: [
      {
        path: "products",
        component: () =>
          import(
            /* webpackChunkName: "product-view" */ "../views/ProductView.vue"
          ),
        name: "products",
      },
      {
        path: "product-detail/:id",
        component: () =>
          import(
            /* webpackChunkName: "product-detail" */ "../views/ProductDetailView.vue"
          ),
        name: "product-detail",
      },
    ],
  },
  {
    path: "/auth",
    name: "auth",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/AuthView.vue"),
      beforeEnter:isGuestGuard
  },

  {
    path: "**",
    component: () =>
      import(/* webpackChunkName: "product-view" */ "../views/NotFound.vue"),
    name: "404",
  },
];
const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
const router = new VueRouter({
  mode: "history",
  routes,
  duplicateNavigationPolicy: 'ignore'
});

export default router;
