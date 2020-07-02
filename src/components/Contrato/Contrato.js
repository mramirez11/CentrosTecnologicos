export default {
  namespaced: true,
  state: {
    contratoState: [
      {
        nombre: "",
        tipoContrato: "",
        empresa: "",
        gestionDTT: false,
        areaInvestigacion: "",
        monto: 0,
        anio: "",
      },
    ],
  },
  mutations: {
    nuevoContrato(state) {
      state.contratoState.push({
        nombre: "",
        tipoContrato: "",
        empresa: "",
        gestionDTT: false,
        areaInvestigacion: "",
        monto: 0,
        anio: "",
      });
      console.log("Agregado");
    },
    deleteContrato(state, index) {
      state.contratoState.splice(index, 1);
      console.log("Elimina2");
    },
  },
};
