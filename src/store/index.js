import Vue from "vue";
import Vuex from "vuex";
import DatosGenerales from "@/components/DatosGenerales/DatosGenerales";
import PyGEstrategica from "@/components/PyGEstrategica/PyGEstrategica";
import EquipoHumano from "@/components/EquipoHumano/EquipoHumano";
import Instancias from "@/components/Instancias/Instancias";
import Infraestructura from "@/components/Infraestructura/Infraestructura";
import FlujosPresupuestarios from "@/components/Flujos/FlujosPresupuestarios";
import Empresa from "@/components/Empresa/Empresa";
import Contrato from "@/components/Contrato/Contrato";
import Proyecto from "@/components/Proyecto/Proyecto";
import EBT from "@/components/EBT/EBT";
import Servicio from "@/components/Servicio/Servicio";
import Transferencia from "@/components/Transferencia/Transferencia";
import Extension from "@/components/Extension/Extension";
import Vinculo from "@/components/Vinculo/Vinculo";
import Socio from "@/components/Socio/Socio";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // Para la ruta de formularios
    route: "DatosGenerales",
  },
  mutations: {
    goTo(state, newRoute) {
      console.log(newRoute);
      state.route = newRoute;
    },
  },
  // Para consumir desde API´s
  actions: {},
  // Importar JS desde modules
  modules: {
    DatosGenerales,
    PyGEstrategica,
    EquipoHumano,
    Instancias,
    Infraestructura,
    FlujosPresupuestarios,
    Empresa,
    Contrato,
    Proyecto,
    EBT,
    Servicio,
    Transferencia,
    Extension,
    Vinculo,
    Socio,
  },
});
