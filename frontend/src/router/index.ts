import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import LoginPage from "../components/LoginPage.vue";

const routes: RouteRecordRaw[] = [
  { path: "/login", name: "Login", component: LoginPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
