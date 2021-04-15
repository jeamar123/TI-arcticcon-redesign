import { createStore } from "vuex";
import auth from "./modules/auth";
import ui from "./modules/ui";
import crud from "./modules/crud";

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    auth,
    ui,
    crud,
  },
});
