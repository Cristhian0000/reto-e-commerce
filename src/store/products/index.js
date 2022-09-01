import axios from "axios";
import rutas from "../../utileria/rutas.js";
import VueCookies from "vue-cookies";
const productStore = {
  namespaced: true,
  state: () => ({
    productData: [],
    productsAll: [],
    cartProduct: [],
  }),
  getters: {
    products(state) {
      return state.productData;
    },
    cart(state) {
      return state.cartProduct;
    },
  },

  mutations: {
    setProducts(state, data) {
      state.productData = data;
      state.productsAll = data;
    },

    setCartProduct(state, value) {
      if (!state.cartProduct.length) {
        state.cartProduct.unshift(value);
      } else {
        const existe = state.cartProduct.findIndex((p) => p.id === value.id);
        
        if (existe === -1) {
          state.cartProduct.unshift(value);
        }
      }
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
        const instance = axios.create({
          baseURL: rutas.ALL_PRODUCTS,
        });
        const token = VueCookies.get("token_ecommerce");
        
        instance.defaults.headers.common["Authorization"] = "Bearer " + token;
        const { data } = await instance.get();

        commit("setProducts", data);
      } catch (error) {
        console.log(error);
      }
    },
    addCartProduct({ commit }, { product }) {
      commit("setCartProduct", product);
    },

    async searchTopBar({ commit }, { search }) {
      commit("searchTopBar", search);
    },
  },
};
export default productStore;
