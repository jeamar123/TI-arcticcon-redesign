import { createRouter, createWebHashHistory } from "vue-router";
import store from "../store/index";
import Home from "../views/Home.vue";
import Login from "../views/auth/Login.vue";
import SignIn from "../views/auth/SignIn.vue";
import PrivacyPolicy from "../views/policies/PrivacyPolicy.vue";
import TermsOfService from "../views/policies/TermsOfService.vue";
import CookiePolicy from "../views/policies/CookiePolicy.vue";
import Sponsor from "../views/Sponsor.vue";
import SponsorshipPolicy from "../views/policies/SponsorshipPolicy";

const curId = "unicorncon2022";

const routes = [
  {
    path: "/",
    redirect: `/${curId}`,
  },
  {
    path: "/:id",
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
  {
    path: "/:id/sponsor",
    name: "Sponsor",
    component: Sponsor,
  },
  {
    path: "/sponsorship-terms-and-conditions",
    name: "SponsorshipPolicy",
    component: SponsorshipPolicy,
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
