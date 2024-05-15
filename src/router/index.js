import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import NotFoundView from "../views/NotFound404.vue";
import QuizView from "../views/QuizView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeView,
    },
    {
      path: "/quiz/:id",
      name: "Quiz",
      component: QuizView,
    },
    {
      path: "/:catchAll(.*)*",
      name: "NotFound",
      component: NotFoundView,
    },
  ],
});

export default router;