import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    miembrosEH: [
      {
        nombre: '',
        rut: '',
        generoSeleccionado: '',
      },
    ],
  },
  mutations: {
    nuevoMiembro(state) {
      state.miembrosEH.push({
        nombre: '',
        rut: '',
        generoSeleccionado: '',
      });
      console.log(state.miembrosEH);
    },
    deleteMiembro(state, index){
      state.miembrosEH.splice(index,1)
      console.log("Elimina2")
      console.log(state.miembrosEH)
    }
  },
  // Para consumir desde API´s
  actions: {},
  modules: {},
});
