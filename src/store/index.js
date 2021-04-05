import { createStore } from "vuex";
import auth from "./modules/auth";
import ui from "./modules/ui";

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    auth,
    ui,
  },
});
