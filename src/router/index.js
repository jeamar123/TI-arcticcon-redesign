import { createRouter, createWebHashHistory } from "vue-router";
import store from "../store/index";
import Home from "../views/Home.vue";
import Login from "../views/auth/Login.vue";
import SignIn from "../views/auth/SignIn.vue";
import PrivacyPolicy from "../views/policies/PrivacyPolicy.vue";
import TermsOfService from "../views/policies/TermsOfService.vue";
import CookiePolicy from "../views/policies/CookiePolicy.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/sign-in",
    name: "SignIn",
    component: SignIn,
  },
  {
    path: "/privacy-policy",
    name: "PrivacyPolicy",
    component: PrivacyPolicy,
  },
  {
    path: "/terms-of-service",
    name: "TermsOfService",
    component: TermsOfService,
  },
  {
    path: "/cookie-policy",
    name: "CookiePolicy",
    component: CookiePolicy,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.name === "Login") {
    store.commit("setBackPath", from.path);
  }
  next();
});

export default router;
