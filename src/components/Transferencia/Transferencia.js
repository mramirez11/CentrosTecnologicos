export default {
  namespaced: true,
  state: {
    transferenciaState: [
      {
        producto: "",
        tipoTT: "",
        detalle: "",
        anioAdjudicacion: "",
        estado: "",
        monto: 0,
        duracion: 0,
        gestionDTT: false,
        anio: "",
      },
    ],
  },
  mutations: {
    nuevaTransferencia(state) {
      state.transferenciaState.push({
        producto: "",
        tipoTT: "",
        detalle: "",
        anioAdjudicacion: "",
        estado: "",
        monto: 0,
        duracion: 0,
        gestionDTT: false,
        anio: "",
      });
      console.log("Agregado");
    },
    deleteTransferencia(state, index) {
      state.transferenciaState.splice(index, 1);
      console.log("Elimina2");
    },
  },
};
