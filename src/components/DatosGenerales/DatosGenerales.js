export default {
  namespaced: true,
  state: {
    direccionesState: [
      {
        tipoDireccion: "",
        direccion: "",
        ciudad: "",
        region: "",
      },
    ],
    personaState: [
      {
        nombre: "",
        rut: "",
        genero: "",
        rol: "",
      },
    ],
  },
  mutations: {
    nuevaDireccion(state) {
      state.direccionesState.push({
        tipoDireccion: "",
        direccion: "",
        ciudad: "",
        region: "",
      });
      console.log("Agregado");
    },
    deleteDireccion(state, index) {
      state.direccionesState.splice(index, 1);
      console.log("Elimina2");
    },

    nuevoParticipante(state) {
      state.personaState.push({
        nombre: "",
        rut: "",
        genero: "",
        rol: "",
      });
      console.log("Agregado");
    },
    deleteParticipante(state, index) {
      state.personaState.splice(index, 1);
      console.log("Elimina2");
    },
  },
  actions: {},
};
