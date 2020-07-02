export default {
  namespaced: true,
  state: {
    empresaState: [
      {
        nombre: "",
        rut: "",
        representante: "",
        correo: "",
        telefono: "",
        tamanio: "",
        // Para dirección de la empresa
        region: "",
        ciudad: "",
        direccion: "",
      },
    ],
  },
  mutations: {
    nuevaEmpresa(state) {
      state.empresaState.push({
        nombre: "",
        rut: "",
        representante: "",
        correo: "",
        telefono: "",
        tamanio: "",
        // Para dirección de la empresa
        region: "",
        ciudad: "",
        direccion: "",
      });
      console.log("Agregado");
    },
    deleteEmpresa(state, index) {
      state.empresaState.splice(index, 1);
      console.log("Elimina2");
    },
  },
};
