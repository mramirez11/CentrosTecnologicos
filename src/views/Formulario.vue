<template>
  <div>
    <!-- <DatosGenerales /> -->
    <!-- KeepAlive guarda los datos en cache /> -->
    <!-- A través del atributo component, se maneja que componente se desplega en el formulario /> -->
    <keep-alive>
      <component v-bind:is="route"></component>
    </keep-alive>
  </div>
</template>

<script>
import DatosGenerales from "@/components/DatosGenerales/DatosGenerales.vue";
import PyGEstrategica from "../components/PygEstrategica/PygEstrategica.vue";
import EquipoHumano from "../components/EquipoHumano/EquipoHumano.vue";
import InstanciasParticipacion from "../components/Instancias/InstanciasParticipacion.vue";
import InstanciasCaracter from "../components/Instancias/InstanciasCaracter.vue";
import Infraestructura from "../components/Infraestructura/Infraestructura.vue";
import FlujosPresupuestarios from "../components/Flujos/FlujosPresupuestarios.vue";
import Empresa from "../components/Empresa/Empresa.vue";
import Contrato from "../components/Contrato/Contrato.vue";
import Proyecto from "../components/Proyecto/Proyecto.vue";
import ParticipanteProyecto from "../components/Proyecto/Participante.vue";
import EBT from "../components/EBT/EBT.vue";
import ParticipanteEBT from "../components/EBT/Participante.vue";
import Servicio from "../components/Servicio/Servicio.vue";
import Transferencia from "../components/Transferencia/Transferencia.vue";
import Extension from "../components/Extension/Extension.vue";
import Vinculo from "../components/Vinculo/Vinculo.vue";
import Socio from "../components/Socio/Socio.vue";

import { mapState } from "vuex";
export default {
  components: {
    DatosGenerales,
    PyGEstrategica,
    EquipoHumano,
    InstanciasParticipacion,
    InstanciasCaracter,
    Infraestructura,
    FlujosPresupuestarios,
    Empresa,
    Contrato,
    Proyecto,
    ParticipanteProyecto,
    EBT,
    ParticipanteEBT,
    Servicio,
    Transferencia,
    Extension,
    Vinculo,
    Socio
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(["route"])
  }
};
</script>
