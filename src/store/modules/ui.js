const state = {
  backPath: "",
};

const getters = {
  currentBackPath: (state) => state.backPath,
};

const mutations = {
  setBackPath(state, payload) {
    state.backPath = payload;
  },
};

export default { state, getters, mutations };
