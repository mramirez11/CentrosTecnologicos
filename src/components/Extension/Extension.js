export default {
  namespaced: true,
  state: {
    extensionState: [
      { nombre: "", anio: "", publico: "", nroParticipantes: 0 },
    ],
  },
  mutations: {
    nuevaExtension(state) {
      state.extensionState.push({
        nombre: "",
        anio: "",
        publico: "",
        nroParticipantes: 0,
      });
      console.log("Agregado");
    },
    deleteExtension(state, index) {
      state.extensionState.splice(index, 1);
      console.log("Elimina2");
    },
  },
};
