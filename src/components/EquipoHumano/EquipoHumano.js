export default {
  namespaced: true,
  state: {
    personaState: [
      {
        nombre: "",
        rut: "",
        genero: "",
        rol: "",
        funcion: "",
        tipoContrato: "",
      },
    ],
  },
  mutations: {
    nuevoMiembro(state) {
      state.personaState.push({
        nombre: "",
        rut: "",
        genero: "",
        rol: "",
        funcion: "",
        tipoContrato: "",
      });
      console.log(state.personaState);
    },
    deleteMiembro(state, index) {
      state.personaState.splice(index, 1);
      console.log("Elimina2");
      console.log(state.personaState);
    },
  },
};
