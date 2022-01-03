import Vue from "vue";
import Router from "vue-router";
import routeChild from "./route-child";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "login",
      component: () => import("@/view/login.vue"),
      meta: {
        keepAlive: true,
      },
    },
  ],
});

router.addRoutes(routeChild);

export default router;
