import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "inventory/dashboard",
  },
  {
    path: "/inventory/dashboard",
    name: "Dashboard",
    component: () => import("@/views/Dashboard.vue"),
  },
  {
    path: "/inventory/categories",
    name: "Categories",
    component: () => import("@/views/products/Category.vue"),
  },
  {
    path: "/inventory/products",
    name: "Products",
    component: () => import("@/views/products/Products.vue"),
  },
  {
    path: "/settings",
    name: "Settings",
    component: () => import("@/views/Settings.vue"),
  },
  {
    path: "/:catchAll(.*)*",
    name: "Error404",
    component: () => import("@/views/Error404.vue"),
  },
];

export default routes;
