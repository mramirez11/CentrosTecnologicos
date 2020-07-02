export default {
  namespaced: true,
  state: {
    proyectoState: [
      {
        titulo: "",
        codigo: "",
        anioAdjudicacion: "",
        duracion: 0,
        categoria: "",
        empresa: "",
        montoEmpresa: 0,
        anio: "",
        fuenteFinanciamiento: "",
        fondoFinanciamiento: "",
        monto: 0,
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
    nuevoProyecto(state) {
      state.proyectoState.push({
        titulo: "",
        codigo: "",
        anioAdjudicacion: "",
        duracion: 0,
        categoria: "",
        empresa: "",
        montoEmpresa: 0,
        anio: "",
        fuenteFinanciamiento: "",
        fondoFinanciamiento: "",
        monto: 0,
      });
      console.log("Agregado");
    },
    deleteProyecto(state, index) {
      state.proyectoState.splice(index, 1);
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
