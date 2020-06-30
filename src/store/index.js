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
    instanciasCaracter: [
      {
        nombreInstancia: "",
        entidad: "",
        tipo: "",
      },
    ],
    infraestructura: {
      localizacion: "",
      cantOficinas: 0,
      cantMt: 0,
      valorAvaluo: 0,
    },
    flujos: [
      {
        anio: 0,
        proyectos: 0,
        servicios: 0,
        aporteInstitucional: 0,
        transferenciaTecnologica: 0,
        contratos: 0,
        promAnual: 0,
        total: 0,
      },
    ],
    empresa: [
      {
        nombre: "",
        rut: "",
        representante: "",
        correo: "",
        telefono: "",
        tamanio: "",
        // Para dirección de la empresa
        region: "",
        ciudad: "",
        direccion: "",
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
    nuevaInstanciaCaracter(state) {
      state.instanciasCaracter.push({
        nombreInstancia: "",
        entidad: "",
        tipo: "",
      });
      console.log("Agregado");
    },
    deleteInstanciaCaracter(state, index) {
      state.instanciasCaracter.splice(index, 1);
      console.log("Elimina2");
    },
    nuevoFlujo(state) {
      state.flujos.push({
        anio: 0,
        proyectos: 0,
        servicios: 0,
        aporteInstitucional: 0,
        transferenciaTecnologica: 0,
        contratos: 0,
        promAnual: 0,
        total: 0,
      });
      console.log("Agregado");
    },
    deleteFlujo(state, index) {
      state.flujos.splice(index, 1);
      console.log("Elimina2");
    },
    nuevaEmpresa(state) {
      state.empresa.push({
        rut: "",
        nombre: "",
        representante: "",
        correo: "",
        telefono: "",
        tamanio: "",
        // Para dirección de la empresa
        tipo: "",
        region: "",
        ciudad: "",
        direccion: "",
      });
      console.log("Agregado");
    },
    deleteEmpresa(state, index) {
      state.empresa.splice(index, 1);
      console.log("Elimina2");
    },
  },
  // Para consumir desde API´s
  actions: {},
  modules: {},
});
