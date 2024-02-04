import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import EmployerRegistrationView from "../views/EmployerRegistrationView.vue";
import JobSeekerRegistrationView from "../views/JobSeekerRegistrationView.vue";
import JobSeekerProfileView from "../views/JobSeekerProfileView.vue";
import EmployerProfileView from "../views/EmployerProfileView.vue";
import JobSeekerJobsView from "../views/JobSeekerJobsView.vue";
import SeekerJobDetailsView from "../views/SeekerJobDetailsView.vue";
import EmployerCreateJobsView from "../views/EmployerCreateJobsView.vue";
import EmployerJobListView from "../views/EmployerJobListView.vue";
import EmployerJobDetailsView from "../views/EmployerJobDetailsView.vue"
import UnauthorizedView from "../views/UnauthorizedView.vue";

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
    meta: { requiresRole: "job seeker" },
  },
  {
    path: "/employer/profile",
    name: "ProfileEmployer",
    component: EmployerProfileView,
    meta: { requiresRole: "employer" },
  },
  {
    path: "/job-seeker/jobs",
    name: "JobSeekerJobs",
    component: JobSeekerJobsView,
    meta: { requiresRole: "job seeker" },
  },
  {
    path: "/job-seeker/jobs/:id",
    name: "JobDetails",
    component: SeekerJobDetailsView,
    meta: { requiresRole: "job seeker" },
    props: true,
  },
  {
    path: "/employer/jobs/create",
    name: "EmployerJobs",
    component: EmployerCreateJobsView,
    meta: { requiresRole: "employer" },
  },
  {
    path: "/employer/jobs",
    component: EmployerJobListView,
    meta: { requiresRole: "employer" },
  },
  {
    path: "/employer/jobs/:id",
    name: "EmployerJobDetailsView",
    component: EmployerJobDetailsView,
    props: true,
  },
  {
    path: "/unauthorized",
    name: "Unauthorized",
    component: UnauthorizedView,
  },
];

const router = createRouter({ history: createWebHistory(), routes });

function hasRole(role) {
  const user = JSON.parse(sessionStorage.getItem("user"));
  return user && user.role === role;
}

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresRole)) {
    const role = to.meta.requiresRole;
    if (!hasRole(role)) {
      next({ path: "/unauthorized" });
    } else {
      next();
    }
  } else {
    next();
  }
});
export default router;
