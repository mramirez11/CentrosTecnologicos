import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // Para la ruta de formularios
    route: "DatosGenerales",
    // Equipo Humano
    miembrosEH: [
      {
        nombre: "",
        rut: "",
        generoSeleccionado: "",
        cargoSeleccionado: "",
        funcionSeleccionada: "",
        tipoContratoSeleccionado: "",
      },
    ],
    // Direcciones
    direcciones: [
      {
        tipoDireccion: "",
        direccion: "",
        ciudad: "",
        regionSeleccionada: "",
      },
    ],
    instanciasParticipacion: [
      {
        nombre: "",
        rut: "",
        generoSeleccionado: "",
        cargoSeleccionado: "",
        nombreEntidad: "",
        entidad: "",
        tipo: "",
      },
    ],
    instanciasCaracter: [
      {
        nombreInstancia: "",
        entidad: "",
        tipo: "",
      },
    ],
    infraestructura: {
      localizacion: "",
      cantOficinas: 0,
      cantMt: 0,
      valorAvaluo: 0,
    },
    flujos: [
      {
        anio: 0,
        proyectos: 0,
        servicios: 0,
        aporteInstitucional: 0,
        transferenciaTecnologica: 0,
        contratos: 0,
        promAnual: 0,
        total: 0,
      },
    ],
    empresa: [
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
    contrato: [
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
    proyecto: [
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
    persona: [{ codigoProyecto: "", nombre: "", rut: "", genero: "", rol: "" }],
    ebt: [
      {
        nombre: "",
        codigo: "",
        monto: 0,
        cantTrabajadores: 0,
      },
    ],
    servicio: [
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
    transferencia: [
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
    extension: [{ nombre: "", anio: "", publico: "", nroParticipantes: 0 }],
    vinculo: [{ sector: "", anio: "", socio: "", colaboracion: "" }],
  },
  mutations: {
    goTo(state, newRoute) {
      console.log(newRoute);
      state.route = newRoute;
    },
    volver(state, newRoute) {
      state.route = newRoute;
    },
    nuevoMiembro(state) {
      state.miembrosEH.push({
        nombre: "",
        rut: "",
        generoSeleccionado: "",
        cargoSeleccionado: "",
      });
      console.log(state.miembrosEH);
    },
    deleteMiembro(state, index) {
      state.miembrosEH.splice(index, 1);
      console.log("Elimina2");
      console.log(state.miembrosEH);
    },
    nuevaDireccion(state) {
      state.direcciones.push({
        tipoDireccion: "",
        direccion: "",
        ciudad: "",
        regionSeleccionada: "",
      });
      console.log("Agregado");
    },
    deleteDireccion(state, index) {
      state.direcciones.splice(index, 1);
      console.log("Elimina2");
    },
    nuevaInstanciaParticipacion(state) {
      state.instanciasParticipacion.push({
        nombre: "",
        rut: "",
        generoSeleccionado: "",
        cargoSeleccionado: "",
        nombreEntidad: "",
        entidad: "",
        tipo: "",
      });
      console.log("Agregado");
    },
    deleteInstanciaParticipacion(state, index) {
      state.instanciasParticipacion.splice(index, 1);
      console.log("Elimina2");
    },
    nuevaInstanciaCaracter(state) {
      state.instanciasCaracter.push({
        nombreInstancia: "",
        entidad: "",
        tipo: "",
      });
      console.log("Agregado");
    },
    deleteInstanciaCaracter(state, index) {
      state.instanciasCaracter.splice(index, 1);
      console.log("Elimina2");
    },
    nuevoFlujo(state) {
      state.flujos.push({
        anio: 0,
        proyectos: 0,
        servicios: 0,
        aporteInstitucional: 0,
        transferenciaTecnologica: 0,
        contratos: 0,
        promAnual: 0,
        total: 0,
      });
      console.log("Agregado");
    },
    deleteFlujo(state, index) {
      state.flujos.splice(index, 1);
      console.log("Elimina2");
    },
    nuevaEmpresa(state) {
      state.empresa.push({
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
      state.empresa.splice(index, 1);
      console.log("Elimina2");
    },
    nuevoContrato(state) {
      state.contrato.push({
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
      state.contrato.splice(index, 1);
      console.log("Elimina2");
    },
    nuevoProyecto(state) {
      state.proyecto.push({
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
      state.proyecto.splice(index, 1);
      console.log("Elimina2");
    },
    nuevoParticipante(state) {
      state.persona.push({
        codigoProyecto: "",
        nombre: "",
        rut: "",
        genero: "",
        rol: "",
      });
      console.log("Agregado");
    },
    deleteParticipante(state, index) {
      state.persona.splice(index, 1);
      console.log("Elimina2");
    },
    nuevoEBT(state) {
      state.ebt.push({
        nombre: "",
        codigo: "",
        monto: 0,
        cantTrabajadores: 0,
      });
      console.log("Agregado");
    },
    deleteEBT(state, index) {
      state.ebt.splice(index, 1);
      console.log("Elimina2");
    },
    nuevoServicio(state) {
      state.servicio.push({
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
      state.servicio.splice(index, 1);
      console.log("Elimina2");
    },
    nuevaTransferencia(state) {
      state.transferencia.push({
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
      state.transferencia.splice(index, 1);
      console.log("Elimina2");
    },
    nuevaExtension(state) {
      state.extension.push({
        nombre: "",
        anio: "",
        publico: "",
        nroParticipantes: 0,
      });
      console.log("Agregado");
    },
    deleteExtension(state, index) {
      state.extension.splice(index, 1);
      console.log("Elimina2");
    },
    nuevoVinculo(state) {
      state.vinculo.push({
        sector: "", anio: "", socio: "", colaboracion: "" 
      });
      console.log("Agregado");
    },
    deleteVinculo(state, index) {
      state.vinculo.splice(index, 1);
      console.log("Elimina2");
    },
  },
  // Para consumir desde API´s
  actions: {},
  modules: {},
});
