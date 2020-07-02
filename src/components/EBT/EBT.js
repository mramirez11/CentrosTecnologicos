export default {
  namespaced: true,
  state: {
    ebtState: [
      {
        nombre: "",
        codigo: "",
        monto: 0,
        cantTrabajadores: 0,
      },
    ],
    // Representa a participantes, en la bd se trabaja como persona
    personaState: [
      {
        codigo: "",
        nombre: "",
        rut: "",
        genero: "",
        rol: "",
      },
    ],
  },
  mutations: {
    nuevoEBT(state) {
      state.ebtState.push({
        nombre: "",
        codigo: "",
        monto: 0,
        cantTrabajadores: 0,
      });
      console.log("Agregado");
    },
    deleteEBT(state, index) {
      state.ebtState.splice(index, 1);
      console.log("Elimina2");
    },

    nuevoParticipante(state) {
      state.personaState.push({
        codigo: "",
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
};
