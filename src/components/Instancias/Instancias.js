export default {
  namespaced: true,
  state: {
    participacionState: [
      {
        nombre: "",
        rut: "",
        genero: "",
        cargo: "",
        nombreEntidad: "",
        entidad: "",
        tipo: "",
      },
    ],
    caracterState: [
      {
        nombreInstancia: "",
        entidad: "",
        tipo: "",
      },
    ],
  }
  ,
  mutations: {
    nuevaInstanciaParticipacion(state) {
      state.participacionState.push({
        nombre: "",
        rut: "",
        genero: "",
        cargo: "",
        nombreEntidad: "",
        entidad: "",
        tipo: "",
      });
      console.log("Agregado");
    },
    deleteInstanciaParticipacion(state, index) {
      state.participacionState.splice(index, 1);
      console.log("Elimina2");
    },
    nuevaInstanciaCaracter(state) {
      state.caracterState.push({
        nombreInstancia: "",
        entidad: "",
        tipo: "",
      });
      console.log("Agregado");
    },
    deleteInstanciaCaracter(state, index) {
      state.caracterState.splice(index, 1);
      console.log("Elimina2");
    },
  },
};
