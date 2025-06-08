import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import LoginPage from "../components/LoginPage.vue";
import HomePage from "../components/HomePage.vue";

const routes: RouteRecordRaw[] = [
  { path: "/login", name: "Login", component: LoginPage },
  { path: "/home", name: "Home", component: HomePage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
