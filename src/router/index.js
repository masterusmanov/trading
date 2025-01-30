import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MainPageVue from '../views/MainPage/MainPage.vue'
import NextPageVue from '../views/NextPage/NextPage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      children: [
        {
          path: "/",
          name: "main",
          component: MainPageVue,
        },
        {
          path: "/next_page",
          name: "next_page",
          component: NextPageVue,
        },
      ],
    },
  ],
});

export default router
