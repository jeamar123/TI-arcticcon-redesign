import { createStore } from "vuex";
import auth from "./modules/auth";
import ui from "./modules/ui";
import crud from "./modules/crud";
import config from "../../public/config.json";

export default createStore({
  state: {
    currentEventID: config.currentEventID,
  },
  mutations: {},
  actions: {},
  modules: {
    auth,
    ui,
    crud,
  },
});
