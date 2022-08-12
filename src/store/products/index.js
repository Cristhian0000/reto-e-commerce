import axios from "axios";
import rutas from "../../utileria/rutas.js";
const productStore = {
  namespaced: true,
  state: () => ({
    productData: [],
    productsAll: [],
    
  }),
  getters: {
    products(state) {
      return state.productData;
    },
 
  },

  mutations: {
    setProducts(state, data) {
      state.productData = data;
      state.productsAll = data;
    },

    searchTopBar(state, value) {
      if (!value) {
        state.productData = state.productsAll;
      } else {
      state.productsAll.filter((el) => {
          return el.title.toLowerCase().indexOf(value.toLowerCase()) >= 0;
        });
      }
    },
  },

  actions: {
    async getData({ commit }) {
      try {
        const instace = axios.create({
          baseURL: rutas.ALL_PRODUCTS,
        });
        const { data } = await instace.get();

        commit("setProducts", data);
      } catch (error) {
        console.log(error);
      }
    },

    async searchTopBar({ commit }, { search }) {
      commit("searchTopBar", search);
    },
  },
};
export default productStore;
