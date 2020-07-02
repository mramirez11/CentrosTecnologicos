export default {
  namespaced: true,
  state: {
    socioState: [
      {
        institucion: "",
        anio: "",
        colaboracion: "",
        sector: "",
        nombre: "",
        rut: "",
        genero: "",
        rol: "",
      },
    ],
  },
  mutations: {
    nuevoSocio(state) {
      state.socioState.push({
        institucion: "",
        anio: "",
        colaboracion: "",
        sector: "",
        nombre: "",
        rut: "",
        genero: "",
        rol: "",
      });
      console.log("Agregado");
    },
    deleteSocio(state, index) {
      state.socioState.splice(index, 1);
      console.log("Elimina2");
    },
  },
};
