import Vue from "vue";
import Router from "vue-router";
import routeChild from "./route-child";
import HelloWorld from "@/components/HelloWorld";
import card from "@/components/card";

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
    {
      path: "/HelloWorld",
      name: "HelloWorld",
      component: HelloWorld,
      // redirect: '/card'
    },
    {
      path: "/card",
      name: "card",
      component: card,
    },
  ],
});

router.addRoutes(routeChild);

export default router;
