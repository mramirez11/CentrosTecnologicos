export default {
  namespaced: true,
  state: {
    servicioState: [
      {
        tipo: "",
        nroClientes: 0,
        tipoSolicitante: "",
        monto: 0,
        gestionDTT: false,
        comentario: "",
        anio: "",
      },
    ],
  },
  mutations: {
    nuevoServicio(state) {
      state.servicioState.push({
        tipo: "",
        nroClientes: "",
        tipoSolicitante: "",
        monto: 0,
        gestionDTT: false,
        comentario: "",
        anio: "",
      });
      console.log("Agregado");
    },
    deleteServicio(state, index) {
      state.servicioState.splice(index, 1);
      console.log("Elimina2");
    },
  },
};
