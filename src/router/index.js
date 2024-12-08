import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Jobs from "../views/jobs/Job.vue";
import JobDetail from "../views/jobs/JobDetail.vue";
import NotFound from "@/views/NotFound.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/jobs",
    name: "jobs",
    component: Jobs,
  },
  {
    path: "/jobDetail/:id",
    name: "JobDetail",
    component: JobDetail,
    props: true,
  },
  // redirect
  {
    path: "/alljobs",
    redirect: "/jobs",
  },
  // catchAll
  {
    path: "/:catchAll(.*)",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
