import axios from 'axios';

export default {
  state: {
    catalogCategory: [],
  },
  mutations: {
    SET_CATALOG_CATEGORY(state, category) {
      state.catalogCategory = category;
    },
  },
  actions: {
    GET_CATALOG_CATEGORY({ commit }) {
      return axios('https://peaceful-harbor-09047.herokuapp.com/api/products', {
        method: 'GET',
      }).then((category) => {
        commit('SET_CATALOG_CATEGORY', category.data);
        return category;
      }).catch((err) => {
        console.log(err);
        return err;
      });
    },
  },
  getters: {
    GET_CATEGORY_TO_STATE(state) {
      return state.catalogCategory;
    },
  },
};
