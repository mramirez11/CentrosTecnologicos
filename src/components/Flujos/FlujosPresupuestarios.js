export default {
  namespaced: true,
  state: {
    flujoState: [
      {
        anio: 0,
        proyectos: 0,
        servicios: 0,
        aporteInstitucional: 0,
        transferenciaTecnologica: 0,
        contrato: 0,
        promAnual: 0,
        total: 0,
      },
    ],
  },
  mutations: {
    nuevoFlujo(state) {
      state.flujoState.push({
        anio: 0,
        proyectos: 0,
        servicios: 0,
        aporteInstitucional: 0,
        transferenciaTecnologica: 0,
        contrato: 0,
        promAnual: 0,
        total: 0,
      });
      console.log("Agregado");
    },
    deleteFlujo(state, index) {
      state.flujoState.splice(index, 1);
      console.log("Elimina2");
    },
  },
};
