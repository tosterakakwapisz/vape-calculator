import { createRouter, createWebHistory } from "vue-router";
import LiquidMixingView from "@/views/LiquidMixingView.vue";
import HomeView from "@/views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/liquid-mixing",
      name: "liquid-mixing",
      component: LiquidMixingView,
    },
  ],
  linkActiveClass: "active",
  linkExactActiveClass: "active exact-active",
});

export default router;
