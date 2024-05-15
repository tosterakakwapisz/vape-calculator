import { createRouter, createWebHistory } from "vue-router";
import LiquidMixingView from "@/views/LiquidMixingView.vue";
import HomeView from "@/views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/vape-calculator/dist",
      children: [
        {
          path: "",
          name: "home",
          component: HomeView,
        },
        {
          path: "liquid-mixing",
          name: "liquid-mixing",
          component: LiquidMixingView,
        },
      ],
    },
  ],
  linkActiveClass: "",
  linkExactActiveClass: "active",
});

export default router;
