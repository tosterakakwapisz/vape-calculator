import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import LiquidMixingNicotineView from "@/views/LiquidMixingNicotineView.vue";
import LiquidMixingStrengthView from "./views/LiquidMixingStrengthView.vue";

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
          path: "liquid-mixing/nicotine",
          name: "liquid-mixing-nicotine",
          component: LiquidMixingNicotineView,
        },
        {
          path: "liquid-mixing/strength",
          name: "liquid-mixing-strength",
          component: LiquidMixingStrengthView,
        },
      ],
    },
  ],
  linkActiveClass: "",
  linkExactActiveClass: "active",
});

export default router;
