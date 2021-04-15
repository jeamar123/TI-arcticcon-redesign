const state = {
  backPath: "",
  pageHeight: "",
};

const getters = {
  currentBackPath: (state) => state.backPath,
  currentPageHeight: (state) => state.pageHeight,
};

const mutations = {
  setBackPath(state, payload) {
    state.backPath = payload;
  },

  setPageHeight(state, payload) {
    state.pageHeight = payload;
  },
};

export default { state, getters, mutations };
