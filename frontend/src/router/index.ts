import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import LoginPage from "../views/LoginPage.vue";
import HomePage from "../views/HomePage.vue";
import PenguinsAI from "../views/PenguinsAI.vue";

const routes: RouteRecordRaw[] = [
  { path: "/AI", name: "PenguinsAI", component: PenguinsAI },
  { path: "/login", name: "Login", component: LoginPage },
  { path: "/home", name: "Home", component: HomePage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
