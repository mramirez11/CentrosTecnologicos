export default {
  namespaced: true,
  state: {
    vinculoState: [
      {
        sector: "",
        anio: "",
        socio: "",
        colaboracion: "",
      },
    ],
  },
  mutations: {
    nuevoVinculo(state) {
      state.vinculoState.push({
        sector: "",
        anio: "",
        socio: "",
        colaboracion: "",
      });
      console.log("Agregado");
    },
    deleteVinculo(state, index) {
      state.vinculoState.splice(index, 1);
      console.log("Elimina2");
    },
  },
};
