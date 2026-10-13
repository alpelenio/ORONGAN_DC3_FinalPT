import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AthletesView from "../views/AthletesView.vue";
import ScheduleView from "../views/ScheduleView.vue";
import ProgressView from "../views/ProgressView.vue";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", name: "home", component: HomeView },
    { path: "/athletes", name: "athletes", component: AthletesView },
    { path: "/schedule", name: "schedule", component: ScheduleView },
    { path: "/progress", name: "progress", component: ProgressView },
  ],
});