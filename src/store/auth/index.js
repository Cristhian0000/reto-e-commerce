import axios from "axios";
import VueCookies from "vue-cookies";
import rutas from "@/utileria/rutas";

const authStore = {
  namespaced: true,
  state: () => ({
    loggedIn: false,
    isSubscribed: false,
    user: {
      username: "",
      password: "",
    },
  }),

  getters: {
    auth(state) {
      return state.user;
    },
    loggedIn(state) {
      return state.loggedIn;
    },
    subscribed(state) {
      return state.isSubscribed;
    },
  },

  mutations: {
    setCredentials(state, { username, password }) {
      state.user.username = username;
      state.user.password = password;
    },
    setLoggedIn(state) {
      state.loggedIn = true;
    },
    setIsSubscribed(state) {
      state.isSubscribed = true;
    },
  },

  actions: {
    async sendCredentials({ commit }, { user }) {
      try {
        const instance = axios.create({
          baseURL: rutas.AUTHENTICATION,
        });

        const { status, data } = await instance.post("/login", user);
        const { token } = data;

        if (status === 200) {
          commit("setCredentials", user);
          commit("setLoggedIn");
          VueCookies.set("token_ecommerce", token, "1h");
        }
      } catch (error) {
        return;
      }
    },
  },
};
export default authStore;
