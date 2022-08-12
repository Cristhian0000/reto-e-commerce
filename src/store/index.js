import Vue from 'vue'
import Vuex from 'vuex'
import authStore from './auth'
import productStore from './products'

Vue.use(Vuex)

export default new Vuex.Store({
  
  modules: {
    products:productStore,
    auth:authStore

  }
})
