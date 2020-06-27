import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // Para la ruta de formularios
    route: "DatosGenerales",
    // Equipo Humano
    miembrosEH: [
      {
        nombre: "",
        rut: "",
        generoSeleccionado: "",
        cargoSeleccionado: "",
        funcionSeleccionada: "",
        tipoContratoSeleccionado: "",
      },
    ],
    // Direcciones
    direcciones: [
      {
        tipoDireccion: "",
        direccion: "",
        ciudad: "",
        regionSeleccionada: "",
      },
    ],
    instanciasParticipacion: [
      {
        nombre: "",
        rut: "",
        generoSeleccionado: "",
        cargoSeleccionado: "",
        nombreEntidad: "",
        entidad: "",
        tipo: "",
      },
    ],
  },
  mutations: {
    goTo(state, newRoute) {
      console.log(newRoute);
      state.route = newRoute;
    },
    volver(state, newRoute) {
      state.route = newRoute;
    },
    nuevoMiembro(state) {
      state.miembrosEH.push({
        nombre: "",
        rut: "",
        generoSeleccionado: "",
        cargoSeleccionado: "",
      });
      console.log(state.miembrosEH);
    },
    deleteMiembro(state, index) {
      state.miembrosEH.splice(index, 1);
      console.log("Elimina2");
      console.log(state.miembrosEH);
    },
    nuevaDireccion(state) {
      state.direcciones.push({
        tipoDireccion: "",
        direccion: "",
        ciudad: "",
        regionSeleccionada: "",
      });
      console.log("Agregado");
    },
    deleteDireccion(state, index) {
      state.direcciones.splice(index, 1);
      console.log("Elimina2");
    },
    nuevaInstanciaParticipacion(state) {
      state.instanciasParticipacion.push({
        nombre: "",
        rut: "",
        generoSeleccionado: "",
        cargoSeleccionado: "",
        nombreEntidad: "",
        entidad: "",
        tipo: "",
      });
      console.log("Agregado");
    },
    deleteInstanciaParticipacion(state, index) {
      state.instanciasParticipacion.splice(index, 1);
      console.log("Elimina2");
    },
  },
  // Para consumir desde API´s
  actions: {},
  modules: {},
});
