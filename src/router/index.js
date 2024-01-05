import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import EmployerRegistrationView from "../views/EmployerRegistrationView.vue";
import JobSeekerRegistrationView from "../views/JobSeekerRegistrationView.vue";
import JobSeekerProfileView from "../views/JobSeekerProfileView.vue";
import EmployerProfileView from "../views/EmployerProfileView.vue";
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
    name: "SignupEmployer",
    component: EmployerRegistrationView,
  },
  {
    path: "/signup/job-seeker",
    name: "SignupJobSeeker",
    component: JobSeekerRegistrationView,
  },
  {
    path: "/job-seeker/profile",
    name: "ProfileJobSeeker",
    component: JobSeekerProfileView,
  },
  {
    path: "/employer/profile",
    name: "ProfileEmployer",
    component: EmployerProfileView,
  },
];

const router = createRouter({ history: createWebHistory(), routes });

export default router;
