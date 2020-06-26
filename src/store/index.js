import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    //valid: false, // Para activar/desactivar boton
    component: "DatosGenerales",
    miembrosEH: [
      {
        nombre: "",
        rut: "",
        generoSeleccionado: "",
      },
    ],
  },
  mutations: {
    goToDatosGenerales(state) {
      console.log(state.component);
      state.component = "DatosGenerales";
    },
    goToPyGEstrategica(state) {
      console.log(state.component);
      state.component = "PyGEstrategica";
    },
    volver(state) {
      state.component = "DatosGenerales";
    },
    nuevoMiembro(state) {
      state.miembrosEH.push({
        nombre: "",
        rut: "",
        generoSeleccionado: "",
      });
      console.log(state.miembrosEH);
    },
    deleteMiembro(state, index) {
      state.miembrosEH.splice(index, 1);
      console.log("Elimina2");
      console.log(state.miembrosEH);
    },
  },
  // Para consumir desde API´s
  actions: {},
  modules: {},
});
