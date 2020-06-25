import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    numero: 10,
  }, 
  mutations: {
    aumentar(state, n){
      state.numero += n
    }
  },
  // Para consumir desde API´s
  actions: {
  },
  modules: {
  }
})
