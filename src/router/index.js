import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "../components/Dashboard.vue"
import Inventories from "../views/Inventories.vue"
import MakeSale from "../components/MakeSale.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard
  },
  {
    path: "/inventories",
    name: "Inventories",
    component: Inventories
  },
  {
    path: "/sales/:id",
    name: "Makesale",
    component: MakeSale
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
