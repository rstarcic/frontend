import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import EmployerRegistrationView from "../views/EmployerRegistrationView.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "Login",
    component: LoginView,
  },
  {
    path: "/signup/employer",
    name: "Signup",
    component: EmployerRegistrationView,
  },
];

const router = createRouter({ history: createWebHistory(), routes });

export default router;
